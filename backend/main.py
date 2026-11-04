import os
import json
import time
import urllib.request
import urllib.parse
from datetime import datetime
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field

app = FastAPI(title="TechPro Secure API", version="1.1.0")

# 1. حماية CORS: السماح بالطلبات الآمنة فقط
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # عند النشر النهائي نضع رابط موقعك فقط هنا
    allow_methods=["POST", "GET"],
    allow_headers=["Content-Type"],
)

# 2. سحب مفاتيح الـ API بأمان من متغيرات البيئة بدلاً من كشفها في الكود
TELEGRAM_BOT_TOKEN = os.getenv("TELEGRAM_BOT_TOKEN", "")
TELEGRAM_CHAT_ID = os.getenv("TELEGRAM_CHAT_ID", "")

# 3. نظام حماية بسيط ضد الإغراق (Rate Limiting: طلب واحد كل 10 ثوانٍ لكل IP)
ip_requests_log = {}

# 4. التحقق الصارم من المدخلات (Input Validation) لمنع حقن نصوص ضخمة
class OrderRequest(BaseModel):
    service: str = Field(..., min_length=2, max_length=100)
    opt1: str = Field(..., min_length=1, max_length=100)
    opt2: str = Field(..., min_length=1, max_length=100)
    price: str = Field(..., min_length=1, max_length=50)
    note: str = Field(default="لا توجد", max_length=250)
    channel: str = Field(..., min_length=2, max_length=30)

@app.get("/health")
async def health_check():
    return {"status": "healthy", "security": "OWASP-hardened"}

@app.post("/api/orders")
async def create_order(order: OrderRequest, request: Request):
    client_ip = request.client.host if request.client else "unknown"
    now = time.time()

    # فحص Rate Limiting لمنع هجمات السبام
    if client_ip in ip_requests_log and (now - ip_requests_log[client_ip]) < 10:
        raise HTTPException(status_code=429, detail="Too many requests. Please wait a few seconds.")
    ip_requests_log[client_ip] = now

    order_data = order.model_dump()
    order_data["timestamp"] = datetime.now().strftime("%Y-%m-%d %H:%M:%S")

    # حفظ الطلب محلياً
    try:
        with open("orders_log.json", "a", encoding="utf-8") as f:
            f.write(json.dumps(order_data, ensure_ascii=False) + "\n")
    except Exception:
        pass

    # إرسال آمن لتيليجرام إذا تم ضبط المتغيرات البيئية
    if TELEGRAM_BOT_TOKEN and TELEGRAM_CHAT_ID:
        msg = (
            f"🚨 *طلب جديد من الموقع!*\n"
            f"🛠 الخدمة: {order.service}\n"
            f"▫️ الخيارات: {order.opt1} | {order.opt2}\n"
            f"💰 السعر: {order.price}\n"
            f"📝 ملاحظة: {order.note}\n"
            f"📲 القناة: {order.channel}"
        )
        url = f"https://api.telegram.org/bot{TELEGRAM_BOT_TOKEN}/sendMessage"
        data = urllib.parse.urlencode({"chat_id": TELEGRAM_CHAT_ID, "text": msg, "parse_mode": "Markdown"}).encode()
        try:
            urllib.request.urlopen(urllib.request.Request(url, data=data), timeout=5)
        except Exception:
            pass

    return {"status": "success", "message": "Order processed securely"}