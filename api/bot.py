from http.server import BaseHTTPRequestHandler
import json
import urllib.request

# بيانات البوت والأدمن الخاصة بك
BOT_TOKEN = "8988734383:AAE5TY8O7I-O695tguPLHQk7A_dw_cx9ECk"
ADMIN_CHAT_ID = "5825008677"

def send_telegram_msg(chat_id, text, reply_markup=None):
    url = f"https://api.telegram.org/bot{BOT_TOKEN}/sendMessage"
    payload = {
        "chat_id": chat_id,
        "text": text,
        "parse_mode": "HTML"
    }
    if reply_markup:
        payload["reply_markup"] = reply_markup
        
    req = urllib.request.Request(
        url, 
        data=json.dumps(payload).encode('utf-8'), 
        headers={'Content-Type': 'application/json'}
    )
    try:
        urllib.request.urlopen(req)
    except Exception as e:
        print(f"Error sending message: {e}")

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        try:
            content_length = int(self.headers.get('Content-Length', 0))
            post_data = self.rfile.read(content_length)
            update = json.loads(post_data.decode('utf-8'))

            if "message" in update:
                msg = update["message"]
                chat_id = msg["chat"]["id"]
                text = msg.get("text", "")
                user = msg.get("from", {})
                first_name = user.get("first_name", "عميل")
                username = f"@{user.get('username')}" if user.get('username') else "بدون معرف"

                if text.startswith("/start"):
                    # استخراج اسم الخدمة إذا جاء العميل من رابط مخصص في الموقع
                    parts = text.split(" ", 1)
                    service_note = f"\n🎯 <b>الخدمة المختارة:</b> {parts[1]}\n" if len(parts) > 1 else ""

                    welcome_text = (
                        f"👋 <b>أهلاً بك يا {first_name} في ProTech للخدمات الرقمية والأنظمة!</b>\n"
                        f"{service_note}\n"
                        "نحن نوفر لك:\n"
                        "🔹 تثبيت وتخصيص أنظمة التشغيل (Windows / Linux)\n"
                        "🔹 تفعيل البرامج المهنية (Office 365 / Adobe)\n"
                        "🔹 حلول الدفع والبطاقات الرقمية (RedotPay / Bybit)\n"
                        "🔹 تسريع الأجهزة ومحاكي الألعاب\n\n"
                        "👇 <b>كيف تود المتابعة؟</b>\n"
                        "اكتب اسم الخدمة أو استفسارك هنا في رسالة، وسيتواصل معك المختص فوراً!"
                    )
                    keyboard = {
                        "inline_keyboard": [
                            [{"text": "🌐 تصفح المتجر والأسعار", "url": "https://techpro-platform.vercel.app"}],
                            [{"text": "👨‍💻 حساب الإدارة المباشر", "url": f"tg://user?id={ADMIN_CHAT_ID}"}]
                        ]
                    }
                    send_telegram_msg(chat_id, welcome_text, keyboard)
                else:
                    # الرد التلقائي على العميل لتأكيد استلام طلبه
                    reply_to_user = (
                        "✅ <b>تم استلام رسالتك بنجاح!</b>\n"
                        "تم إرسال إشعار فوري للإدارة بطلبك، وسيتواصل معك المختص في أقرب وقت ممكن."
                    )
                    send_telegram_msg(chat_id, reply_to_user)

                    # إرسال إشعار فوري لك مع زر لمراسلة الزبون مباشرة
                    admin_alert = (
                        f"🚨 <b>طلب جديد من متجر ProTech!</b>\n\n"
                        f"👤 <b>الاسم:</b> {first_name}\n"
                        f"🔗 <b>المعرف:</b> {username}\n"
                        f"🆔 <b>الآيدي:</b> <code>{chat_id}</code>\n\n"
                        f"💬 <b>الرسالة:</b>\n{text}"
                    )
                    admin_keyboard = {
                        "inline_keyboard": [
                            [{"text": "💬 مراسلة العميل الآن", "url": f"tg://user?id={chat_id}"}]
                        ]
                    }
                    send_telegram_msg(ADMIN_CHAT_ID, admin_alert, admin_keyboard)

            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"OK")
        except Exception as e:
            self.send_response(200)
            self.end_headers()
            self.wfile.write(b"OK")

    def do_GET(self):
        self.send_response(200)
        self.end_headers()
        self.wfile.write(b"ProTech Telegram Bot Webhook is Running!")