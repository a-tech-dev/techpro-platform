// ============================================================================
// TechPro Marketplace v3.0 - Fully Trilingual Database (AR / FR / EN)
// ============================================================================

const CONFIG = {
    whatsapp: "213XXXXXXXXX", // ضع رقمك هنا بدون +
    telegram: "YourTelegramUsername", // معرف تيليجرام بدون @
    instagram: "https://instagram.com/YourProfile", // رابط حسابك على إنستغرام
    backendApiUrl: "http://localhost:8000/api/orders"
};

const ROWS_CONFIG = [
    { id: "trending" },
    { id: "os_merged" },
    { id: "apps_merged" },
    { id: "visa" },
    { id: "ai" }
];

const CATALOG_DATA = [
    // ================= 1. عائلة WINDOWS (500 د.ج + 200 د.ج حفظ ملفات) =================
    {
        id: "win11_official", category: "windows", homeRow: "os_merged", trending: true,
        code: "W11", icon: "fa-brands fa-windows",
        startPrice: { ar: "500 د.ج", fr: "500 DA", en: "500 DZD" },
        targetAudience: { ar: "🎯 للأجهزة الحديثة (الجيل 8+)", fr: "🎯 Pour PC récents (8e Gén+)", en: "🎯 For Modern PCs (8th Gen+)" },
        title: { ar: "Windows 11 الرسمي (كافة النسخ)", fr: "Windows 11 Officiel (Toutes Éditions)", en: "Windows 11 Official (All Editions)" },
        desc: { ar: "النظام الأحدث من مايكروسوفت بواجهة زجاجية عصرية، مثالي للبرمجة والدراسة.", fr: "Le dernier OS de Microsoft au design moderne, idéal pour le code et les études.", en: "Microsoft's latest OS with modern glass UI, ideal for coding and university." },
        q1: {
            label: { ar: "1. اختر النسخة (Edition):", fr: "1. Choisissez l'édition :", en: "1. Select Edition:" },
            options: [
                { text: { ar: "Windows 11 Pro", fr: "Windows 11 Pro", en: "Windows 11 Pro" }, price: 500 },
                { text: { ar: "Windows 11 Home / Family", fr: "Windows 11 Home / Family", en: "Windows 11 Home / Family" }, price: 500 },
                { text: { ar: "Windows 11 Education / Enterprise", fr: "Windows 11 Education / Enterprise", en: "Windows 11 Education / Enterprise" }, price: 500 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "فورمات نظيف + تفعيل", fr: "Formatage propre + Activation", en: "Clean Format + Activation" }, addPrice: 0 },
                { text: { ar: "مع الحفاظ على الملفات (+200)", fr: "Avec sauvegarde des fichiers (+200)", en: "Keep Personal Files (+200)" }, addPrice: 200 }
            ]
        }
    },
    {
        id: "win11_lite", category: "windows", homeRow: "os_merged", trending: true,
        code: "11LT", icon: "fa-solid fa-feather-pointed",
        startPrice: { ar: "500 د.ج", fr: "500 DA", en: "500 DZD" },
        targetAudience: { ar: "🎯 للأجهزة غير المدعومة وعشاق الألعاب", fr: "🎯 Pour PC non supportés & Gamers", en: "🎯 For Unsupported PCs & Gamers" },
        title: { ar: "Windows 11 Lite / Ghost Spectre", fr: "Windows 11 Lite / Ghost Spectre", en: "Windows 11 Lite / Ghost Spectre" },
        desc: { ar: "نسخة ويندوز 11 مخففة ومنزوعة البرامج الثقيلة، تعمل بدون شرط TPM وبأعلى FPS.", fr: "Version allégée sans bloatware ni restriction TPM, performances FPS maximales.", en: "Debloated Windows 11 bypassing TPM checks with maximum gaming FPS." },
        q1: {
            label: { ar: "1. اختر النسخة المخففة:", fr: "1. Choisissez la version Lite :", en: "1. Select Lite Build:" },
            options: [
                { text: { ar: "Ghost Spectre Superlite (للألعاب)", fr: "Ghost Spectre Superlite (Gaming)", en: "Ghost Spectre Superlite (Gaming)" }, price: 500 },
                { text: { ar: "Ghost Spectre Compact (للدراسة)", fr: "Ghost Spectre Compact (Études)", en: "Ghost Spectre Compact (Study)" }, price: 500 },
                { text: { ar: "Tiny11 / AtlasOS 11", fr: "Tiny11 / AtlasOS 11", en: "Tiny11 / AtlasOS 11" }, price: 500 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "تثبيت نظيف", fr: "Installation propre", en: "Clean Install" }, addPrice: 0 },
                { text: { ar: "مع الحفاظ على الملفات (+200)", fr: "Avec sauvegarde (+200)", en: "Keep Personal Files (+200)" }, addPrice: 200 }
            ]
        }
    },
    {
        id: "win10_official", category: "windows", homeRow: "os_merged", trending: false,
        code: "W10", icon: "fa-brands fa-windows",
        startPrice: { ar: "500 د.ج", fr: "500 DA", en: "500 DZD" },
        targetAudience: { ar: "🎯 لكل الحواسيب (الأكثر استقراراً)", fr: "🎯 Stabilité maximale (Tous PC)", en: "🎯 Maximum Stability (All PCs)" },
        title: { ar: "Windows 10 الرسمي (22H2)", fr: "Windows 10 Officiel (22H2)", en: "Windows 10 Official (22H2)" },
        desc: { ar: "النظام الأكثر توافقاً واستقراراً مع كافة البرامج الهندسية الجامعية والألعاب.", fr: "Le système le plus stable et compatible avec tous les logiciels d'ingénierie.", en: "The most stable and compatible OS for all engineering apps and games." },
        q1: {
            label: { ar: "1. اختر النسخة (Edition):", fr: "1. Choisissez l'édition :", en: "1. Select Edition:" },
            options: [
                { text: { ar: "Windows 10 Pro (64-bit)", fr: "Windows 10 Pro (64-bit)", en: "Windows 10 Pro (64-bit)" }, price: 500 },
                { text: { ar: "Windows 10 Home / Family", fr: "Windows 10 Home / Family", en: "Windows 10 Home / Family" }, price: 500 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "فورمات نظيف + تفعيل", fr: "Formatage propre + Activation", en: "Clean Format + Activation" }, addPrice: 0 },
                { text: { ar: "مع الحفاظ على الملفات (+200)", fr: "Avec sauvegarde (+200)", en: "Keep Personal Files (+200)" }, addPrice: 200 }
            ]
        }
    },
    {
        id: "win10_ltsc", category: "windows", homeRow: "os_merged", trending: true,
        code: "LTSC", icon: "fa-solid fa-gauge-simple-high",
        startPrice: { ar: "500 د.ج", fr: "500 DA", en: "500 DZD" },
        targetAudience: { ar: "🎯 للحواسيب الضعيفة والمتوسطة (4GB RAM)", fr: "🎯 Pour PC faibles/moyens (4Go RAM)", en: "🎯 For Low/Mid-Range PCs (4GB RAM)" },
        title: { ar: "Windows 10 IoT Enterprise LTSC", fr: "Windows 10 IoT Enterprise LTSC", en: "Windows 10 IoT Enterprise LTSC" },
        desc: { ar: "نسخة مايكروسوفت الرسمية الخفيفة جداً؛ خالية تماماً من الإعلانات والبرامج الخلفية.", fr: "Édition officielle ultra-légère sans applications inutiles, démarrage éclair.", en: "Ultra-lightweight official Microsoft build with zero bloatware and fast boot." },
        q1: {
            label: { ar: "1. اختر إصدار LTSC:", fr: "1. Choisissez la version LTSC :", en: "1. Select LTSC Build:" },
            options: [
                { text: { ar: "Win 10 IoT LTSC 2021", fr: "Win 10 IoT LTSC 2021", en: "Win 10 IoT LTSC 2021" }, price: 500 },
                { text: { ar: "Win 10 LTSC 2019", fr: "Win 10 LTSC 2019", en: "Win 10 LTSC 2019" }, price: 500 },
                { text: { ar: "Win 10 AtlasOS / ReviOS", fr: "Win 10 AtlasOS / ReviOS", en: "Win 10 AtlasOS / ReviOS" }, price: 500 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "فورمات نظيف + تفعيل", fr: "Formatage propre + Activation", en: "Clean Format + Activation" }, addPrice: 0 },
                { text: { ar: "مع الحفاظ على الملفات (+200)", fr: "Avec sauvegarde (+200)", en: "Keep Personal Files (+200)" }, addPrice: 200 }
            ]
        }
    },
    {
        id: "win8_win7", category: "windows", homeRow: "os_merged", trending: false,
        code: "W7/8", icon: "fa-brands fa-windows",
        startPrice: { ar: "500 د.ج", fr: "500 DA", en: "500 DZD" },
        targetAudience: { ar: "🎯 للأجهزة القديمة جداً (2GB RAM)", fr: "🎯 Pour anciens PC (2Go RAM)", en: "🎯 For Old Laptops (2GB RAM)" },
        title: { ar: "Windows 8.1 & Windows 7 الكلاسيكي", fr: "Windows 8.1 & Windows 7 Classique", en: "Windows 8.1 & Windows 7 Classic" },
        desc: { ar: "إعادة إحياء الحواسيب القديمة جداً بأسرع نسخ ويندوز الكلاسيكية.", fr: "Redonnez vie aux anciens ordinateurs avec les versions classiques rapides.", en: "Revive very old laptops with fast classic Windows editions." },
        q1: {
            label: { ar: "1. اختر النظام:", fr: "1. Choisissez le système :", en: "1. Select OS:" },
            options: [
                { text: { ar: "Windows 8.1 Pro", fr: "Windows 8.1 Pro", en: "Windows 8.1 Pro" }, price: 500 },
                { text: { ar: "Windows 7 Ultimate", fr: "Windows 7 Ultimate", en: "Windows 7 Ultimate" }, price: 500 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "تثبيت نظيف", fr: "Installation propre", en: "Clean Install" }, addPrice: 0 },
                { text: { ar: "مع الحفاظ على الملفات (+200)", fr: "Avec sauvegarde (+200)", en: "Keep Personal Files (+200)" }, addPrice: 200 }
            ]
        }
    },

    // ================= 2. توزيعات LINUX (القياسية 500 | الصعبة المتقدمة 1000) =================
    {
        id: "ubuntu_distro", category: "linux", homeRow: "os_merged", trending: true,
        code: "UBT", icon: "fa-brands fa-ubuntu",
        startPrice: { ar: "500 د.ج", fr: "500 DA", en: "500 DZD" },
        targetAudience: { ar: "🎯 لطلبة الإعلام الآلي والبرمجة والـ AI", fr: "🎯 Étudiants Info, Dev & IA", en: "🎯 For CS Students, Dev & AI" },
        title: { ar: "Ubuntu Linux (كافة النكهات)", fr: "Ubuntu Linux (Toutes Variantes)", en: "Ubuntu Linux (All Flavors)" },
        desc: { ar: "التوزيعة الأولى عالمياً للدراسة الجامعية، تطوير الويب، وتعلم الذكاء الاصطناعي.", fr: "La distribution N°1 pour l'informatique, le développement web et l'IA.", en: "The #1 Linux distro worldwide for CS students, web dev, and AI." },
        q1: {
            label: { ar: "1. اختر نكهة Ubuntu:", fr: "1. Choisissez la variante :", en: "1. Select Ubuntu Flavor:" },
            options: [
                { text: { ar: "Ubuntu 24.04 LTS (GNOME)", fr: "Ubuntu 24.04 LTS (GNOME)", en: "Ubuntu 24.04 LTS (GNOME)" }, price: 500 },
                { text: { ar: "Kubuntu (واجهة KDE)", fr: "Kubuntu (KDE Plasma)", en: "Kubuntu (KDE Plasma)" }, price: 500 },
                { text: { ar: "Xubuntu / Lubuntu الخفيفة", fr: "Xubuntu / Lubuntu (Léger)", en: "Xubuntu / Lubuntu (Lightweight)" }, price: 500 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات والـ Dual Boot:", fr: "2. Fichiers & Dual Boot :", en: "2. Files & Dual Boot:" },
            options: [
                { text: { ar: "تثبيت مباشر نظيف", fr: "Installation propre directe", en: "Direct Clean Install" }, addPrice: 0 },
                { text: { ar: "حفظ الملفات / Dual Boot (+200)", fr: "Sauvegarde / Dual Boot (+200)", en: "Keep Files / Dual Boot (+200)" }, addPrice: 200 }
            ]
        }
    },
    {
        id: "linux_mint", category: "linux", homeRow: "os_merged", trending: false,
        code: "MINT", icon: "fa-brands fa-linux",
        startPrice: { ar: "500 د.ج", fr: "500 DA", en: "500 DZD" },
        targetAudience: { ar: "🎯 للمنتقلين الجدد من Windows", fr: "🎯 Idéal pour débuter sur Linux", en: "🎯 Best for Windows Switchers" },
        title: { ar: "Linux Mint (Cinnamon / XFCE)", fr: "Linux Mint (Cinnamon / XFCE)", en: "Linux Mint (Cinnamon / XFCE)" },
        desc: { ar: "أسهل توزيعة لينكس بواجهة مألوفة تشبه ويندوز تماماً، مستقرة وسريعة.", fr: "Interface familière proche de Windows, ultra stable et simple à utiliser.", en: "Familiar Windows-like desktop, rock-solid stability, zero complexity." },
        q1: {
            label: { ar: "1. اختر الواجهة:", fr: "1. Choisissez le bureau :", en: "1. Select Desktop:" },
            options: [
                { text: { ar: "Mint Cinnamon", fr: "Mint Cinnamon", en: "Mint Cinnamon" }, price: 500 },
                { text: { ar: "Mint XFCE (خفيفة)", fr: "Mint XFCE (Léger)", en: "Mint XFCE (Lightweight)" }, price: 500 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "تثبيت نظيف", fr: "Installation propre", en: "Clean Install" }, addPrice: 0 },
                { text: { ar: "حفظ الملفات / Dual Boot (+200)", fr: "Sauvegarde / Dual Boot (+200)", en: "Keep Files / Dual Boot (+200)" }, addPrice: 200 }
            ]
        }
    },
    {
        id: "arch_manjaro", category: "linux", homeRow: "os_merged", trending: true,
        code: "ARCH", icon: "fa-solid fa-compass-drafting",
        startPrice: { ar: "من 500 د.ج", fr: "Dès 500 DA", en: "From 500 DZD" },
        targetAudience: { ar: "🎯 للمحترفين وعشاق الأداء (تثبيت متقدم)", fr: "🎯 Utilisateurs avancés & Performance", en: "🎯 Power Users & Max Performance" },
        title: { ar: "Arch Linux / Manjaro / EndeavourOS", fr: "Arch Linux / Manjaro / EndeavourOS", en: "Arch Linux / Manjaro / EndeavourOS" },
        desc: { ar: "تثبيت وتهيئة احترافية لعائلة Arch مع واجهة سطح المكتب ومستودع AUR.", fr: "Performances extrêmes, personnalisation totale et accès au dépôt AUR.", en: "Cutting-edge speed, full customization, and access to the AUR repository." },
        q1: {
            label: { ar: "1. اختر التوزيعة (حسب صعوبة التثبيت):", fr: "1. Choisissez la distribution :", en: "1. Select Distribution:" },
            options: [
                { text: { ar: "Arch Linux نقي + KDE/Hyprland (1000)", fr: "Arch Linux Pur + KDE/Hyprland (1000)", en: "Pure Arch + KDE/Hyprland (1000)" }, price: 1000 },
                { text: { ar: "EndeavourOS / Garuda (1000)", fr: "EndeavourOS / Garuda (1000)", en: "EndeavourOS / Garuda (1000)" }, price: 1000 },
                { text: { ar: "Manjaro Linux القياسي (500)", fr: "Manjaro Linux Standard (500)", en: "Manjaro Linux Standard (500)" }, price: 500 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "تثبيت نظيف", fr: "Installation propre", en: "Clean Install" }, addPrice: 0 },
                { text: { ar: "حفظ الملفات / Dual Boot (+200)", fr: "Sauvegarde / Dual Boot (+200)", en: "Keep Files / Dual Boot (+200)" }, addPrice: 200 }
            ]
        }
    },
    {
        id: "kali_linux", category: "linux", homeRow: "os_merged", trending: true,
        code: "KALI", icon: "fa-solid fa-dragon",
        startPrice: { ar: "1000 د.ج", fr: "1000 DA", en: "1000 DZD" },
        targetAudience: { ar: "🎯 للأمن السيبراني واختبار الاختراق", fr: "🎯 Cybersécurité & Pentesting", en: "🎯 Cybersecurity & Pentesting" },
        title: { ar: "Kali Linux (Pentesting OS)", fr: "Kali Linux (Pentesting OS)", en: "Kali Linux (Pentesting OS)" },
        desc: { ar: "التوزيعة الأشهر عالمياً للأمن السيبراني الأخلاقي والشبكات مع إعداد كافة الأدوات.", fr: "La référence mondiale en cybersécurité et tests d'intrusion (+600 outils).", en: "The industry standard for ethical hacking and network security (+600 tools)." },
        q1: {
            label: { ar: "1. اختر بيئة التثبيت المتقدمة:", fr: "1. Environnement d'installation :", en: "1. Installation Environment:" },
            options: [
                { text: { ar: "Kali Linux (Dual Boot / أساسي)", fr: "Kali Linux (Dual Boot / Principal)", en: "Kali Linux (Dual Boot / Main)" }, price: 1000 },
                { text: { ar: "Kali داخل VMware مع ضبط الشبكة", fr: "Kali sur VMware + Réseau configuré", en: "Kali in VMware + Network Tuned" }, price: 1000 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "تثبيت قياسي", fr: "Installation standard", en: "Standard Setup" }, addPrice: 0 },
                { text: { ar: "مع الحفاظ على الملفات (+200)", fr: "Avec sauvegarde (+200)", en: "Keep Personal Files (+200)" }, addPrice: 200 }
            ]
        }
    },
    {
        id: "parrot_sec", category: "linux", homeRow: "os_merged", trending: false,
        code: "PRRT", icon: "fa-solid fa-shield-cat",
        startPrice: { ar: "من 500 د.ج", fr: "Dès 500 DA", en: "From 500 DZD" },
        targetAudience: { ar: "🎯 للأمن السيبراني والخصوصية", fr: "🎯 Cybersécurité & Vie privée", en: "🎯 Security & Privacy" },
        title: { ar: "Parrot OS (Security & Home)", fr: "Parrot OS (Security & Home)", en: "Parrot OS (Security & Home)" },
        desc: { ar: "توزيعة أمن سيبراني وبرمجة خفيفة على الرام ومزودة بأدوات الخصوصية.", fr: "Alternative légère à Kali pour la cybersécurité et la programmation.", en: "Lightweight cybersecurity and privacy-focused distro." },
        q1: {
            label: { ar: "1. اختر النسخة:", fr: "1. Choisissez l'édition :", en: "1. Select Edition:" },
            options: [
                { text: { ar: "Parrot Home (500)", fr: "Parrot Home (500)", en: "Parrot Home (500)" }, price: 500 },
                { text: { ar: "Parrot Security الكاملة (1000)", fr: "Parrot Security Complet (1000)", en: "Parrot Security Full (1000)" }, price: 1000 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "تثبيت نظيف", fr: "Installation propre", en: "Clean Install" }, addPrice: 0 },
                { text: { ar: "مع الحفاظ على الملفات (+200)", fr: "Avec sauvegarde (+200)", en: "Keep Personal Files (+200)" }, addPrice: 200 }
            ]
        }
    },
    {
        id: "debian_fedora", category: "linux", homeRow: "os_merged", trending: false,
        code: "DEB", icon: "fa-brands fa-fedora",
        startPrice: { ar: "500 د.ج", fr: "500 DA", en: "500 DZD" },
        targetAudience: { ar: "🎯 لمهندسي البرمجيات واستقرار الخوادم", fr: "🎯 Développeurs & Serveurs", en: "🎯 Software Engineers & Servers" },
        title: { ar: "Debian 12 & Fedora Workstation", fr: "Debian 12 & Fedora Workstation", en: "Debian 12 & Fedora Workstation" },
        desc: { ar: "صخرة الاستقرار Debian 12 أو Fedora بأحدث تقنيات البرمجة.", fr: "La stabilité absolue de Debian ou les dernières technologies de Fedora.", en: "Rock-solid Debian 12 stability or bleeding-edge Fedora Workstation." },
        q1: {
            label: { ar: "1. اختر التوزيعة:", fr: "1. Choisissez la distribution :", en: "1. Select Distro:" },
            options: [
                { text: { ar: "Fedora Workstation", fr: "Fedora Workstation", en: "Fedora Workstation" }, price: 500 },
                { text: { ar: "Debian 12 Bookworm", fr: "Debian 12 Bookworm", en: "Debian 12 Bookworm" }, price: 500 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "تثبيت نظيف", fr: "Installation propre", en: "Clean Install" }, addPrice: 0 },
                { text: { ar: "حفظ الملفات / Dual Boot (+200)", fr: "Sauvegarde / Dual Boot (+200)", en: "Keep Files / Dual Boot (+200)" }, addPrice: 200 }
            ]
        }
    },
    {
        id: "pop_zorin", category: "linux", homeRow: "os_merged", trending: false,
        code: "POP!", icon: "fa-solid fa-rocket",
        startPrice: { ar: "500 د.ج", fr: "500 DA", en: "500 DZD" },
        targetAudience: { ar: "🎯 لطلبة Data Science وعشاق الفخامة", fr: "🎯 Data Science & Design Moderne", en: "🎯 Data Science & Sleek UI" },
        title: { ar: "Pop!_OS & Zorin OS & Elementary", fr: "Pop!_OS & Zorin OS & Elementary", en: "Pop!_OS & Zorin OS & Elementary" },
        desc: { ar: "Pop!_OS المدعومة بتعريفات NVIDIA للذكاء الاصطناعي، أو Zorin OS الأنيقة.", fr: "Pop!_OS optimisé NVIDIA/IA ou l'élégance visuelle de Zorin OS.", en: "NVIDIA-ready Pop!_OS for Data Science, or sleek Zorin OS." },
        q1: {
            label: { ar: "1. اختر التوزيعة:", fr: "1. Choisissez la distribution :", en: "1. Select Distro:" },
            options: [
                { text: { ar: "Pop!_OS (NVIDIA / Standard)", fr: "Pop!_OS (NVIDIA / Standard)", en: "Pop!_OS (NVIDIA / Standard)" }, price: 500 },
                { text: { ar: "Zorin OS / Elementary OS", fr: "Zorin OS / Elementary OS", en: "Zorin OS / Elementary OS" }, price: 500 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "تثبيت نظيف", fr: "Installation propre", en: "Clean Install" }, addPrice: 0 },
                { text: { ar: "حفظ الملفات / Dual Boot (+200)", fr: "Sauvegarde / Dual Boot (+200)", en: "Keep Files / Dual Boot (+200)" }, addPrice: 200 }
            ]
        }
    },
    {
        id: "blackarch_tails", category: "linux", homeRow: "os_merged", trending: false,
        code: "SEC+", icon: "fa-solid fa-user-ninja",
        startPrice: { ar: "1000 د.ج", fr: "1000 DA", en: "1000 DZD" },
        targetAudience: { ar: "🎯 للباحثين المتقدمين في الأمن (تثبيت صعب)", fr: "🎯 Sécurité avancée & Anonymat", en: "🎯 Advanced Security Researchers" },
        title: { ar: "BlackArch & Tails & Qubes OS", fr: "BlackArch & Tails & Qubes OS", en: "BlackArch & Tails & Qubes OS" },
        desc: { ar: "توزيعات الأمن المتقدمة ذات الإعداد الخاص: BlackArch و Tails و Whonix.", fr: "Distributions spécialisées : +2800 outils de sécurité ou anonymat USB.", en: "Advanced security distros: 2800+ pentesting tools or USB anonymity." },
        q1: {
            label: { ar: "1. اختر التوزيعة المتخصصة:", fr: "1. Choisissez la distribution :", en: "1. Select Specialized Distro:" },
            options: [
                { text: { ar: "BlackArch Linux", fr: "BlackArch Linux", en: "BlackArch Linux" }, price: 1000 },
                { text: { ar: "Whonix / Qubes / Tails", fr: "Whonix / Qubes / Tails", en: "Whonix / Qubes / Tails" }, price: 1000 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "إعداد مستقل", fr: "Configuration standard", en: "Standard Setup" }, addPrice: 0 },
                { text: { ar: "مع حفظ الملفات (+200)", fr: "Avec sauvegarde (+200)", en: "Keep Personal Files (+200)" }, addPrice: 200 }
            ]
        }
    },
    {
        id: "light_linux", category: "linux", homeRow: "os_merged", trending: false,
        code: "LITE", icon: "fa-solid fa-bolt-lightning",
        startPrice: { ar: "500 د.ج", fr: "500 DA", en: "500 DZD" },
        targetAudience: { ar: "🎯 لإحياء الحواسيب القديمة جداً (1-2GB RAM)", fr: "🎯 Pour PC très anciens (1-2Go RAM)", en: "🎯 Revive Old PCs (1-2GB RAM)" },
        title: { ar: "توزيعات الخفة القصوى (antiX / MX)", fr: "Distros Ultra-Légères (antiX / MX)", en: "Ultra-Light Distros (antiX / MX)" },
        desc: { ar: "توزيعات تستهلك أقل من 250MB من الرام لإحياء الحواسيب القديمة.", fr: "Consomme moins de 250Mo de RAM pour ressusciter les anciens PC.", en: "Uses under 250MB RAM to make the oldest laptops fast again." },
        q1: {
            label: { ar: "1. اختر التوزيعة:", fr: "1. Choisissez la distro :", en: "1. Select Distro:" },
            options: [
                { text: { ar: "MX Linux / Linux Lite", fr: "MX Linux / Linux Lite", en: "MX Linux / Linux Lite" }, price: 500 },
                { text: { ar: "antiX / Puppy Linux", fr: "antiX / Puppy Linux", en: "antiX / Puppy Linux" }, price: 500 }
            ]
        },
        q2: {
            label: { ar: "2. خيارات الملفات:", fr: "2. Options des fichiers :", en: "2. File Options:" },
            options: [
                { text: { ar: "تثبيت نظيف", fr: "Installation propre", en: "Clean Install" }, addPrice: 0 },
                { text: { ar: "مع الحفاظ على الملفات (+200)", fr: "Avec sauvegarde (+200)", en: "Keep Personal Files (+200)" }, addPrice: 200 }
            ]
        }
    },

    // ================= 3. البرمجيات، OFFICE، و ADOBE =================
    {
        id: "office_2024_365", category: "office", homeRow: "apps_merged", trending: true,
        code: "O365", icon: "fa-solid fa-file-word",
        startPrice: { ar: "من 300 د.ج", fr: "Dès 300 DA", en: "From 300 DZD" },
        targetAudience: { ar: "🎯 النسخ الحديثة الكاملة (1000) أو منفرد (300)", fr: "🎯 Pack Complet (1000) ou App seule (300)", en: "🎯 Full Suite (1000) or Single App (300)" },
        title: { ar: "Microsoft 365 & Office 2024 / 2021", fr: "Microsoft 365 & Office 2024 / 2021", en: "Microsoft 365 & Office 2024 / 2021" },
        desc: { ar: "تثبيت الحزمة الحديثة كاملة بـ 1000 د.ج، أو برنامج واحد منفرد بـ 300 د.ج.", fr: "Pack moderne complet à 1000 DA, ou un seul logiciel (Word/Excel) à 300 DA.", en: "Full modern Office suite for 1000 DZD, or a single app for 300 DZD." },
        q1: {
            label: { ar: "1. اختر الحزمة أو البرنامج:", fr: "1. Choisissez le pack ou logiciel :", en: "1. Select Suite or Single App:" },
            options: [
                { text: { ar: "الحزمة الكاملة الحديثة (1000)", fr: "Pack Complet 2024 / 365 (1000)", en: "Full Modern Suite 2024/365 (1000)" }, price: 1000 },
                { text: { ar: "برنامج واحد منفرد فقط (300)", fr: "Un seul logiciel Word/Excel (300)", en: "Single App Word/Excel/PPT (300)" }, price: 300 }
            ]
        },
        q2: {
            label: { ar: "2. التفعيل:", fr: "2. Activation :", en: "2. Activation:" },
            options: [
                { text: { ar: "شامل التفعيل الدائم", fr: "Activation permanente incluse", en: "Lifetime Activation Included" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "office_2016_2013", category: "office", homeRow: "apps_merged", trending: false,
        code: "O16", icon: "fa-solid fa-file-excel",
        startPrice: { ar: "من 300 د.ج", fr: "Dès 300 DA", en: "From 300 DZD" },
        targetAudience: { ar: "🎯 النسخ الخفيفة الكاملة (800) أو منفرد (300)", fr: "🎯 Pack Ancien (800) ou App seule (300)", en: "🎯 Legacy Suite (800) or Single (300)" },
        title: { ar: "Office 2019 / 2016 / 2013 الخفيف", fr: "Office 2019 / 2016 / 2013 Léger", en: "Office 2019 / 2016 / 2013 Lightweight" },
        desc: { ar: "الحزمة القديمة الكاملة والخفيفة بـ 800 د.ج، أو برنامج منفرد واحد بـ 300 د.ج.", fr: "Pack complet léger pour PC moyens à 800 DA, ou logiciel seul à 300 DA.", en: "Full lightweight Office suite for 800 DZD, or single app for 300 DZD." },
        q1: {
            label: { ar: "1. اختر النسخة:", fr: "1. Choisissez la version :", en: "1. Select Version:" },
            options: [
                { text: { ar: "الحزمة الكاملة القديمة (800)", fr: "Pack Complet 2019/2016/2013 (800)", en: "Full Legacy Suite (800)" }, price: 800 },
                { text: { ar: "برنامج واحد منفرد فقط (300)", fr: "Un seul logiciel (300)", en: "Single App Only (300)" }, price: 300 }
            ]
        },
        q2: {
            label: { ar: "2. التفعيل:", fr: "2. Activation :", en: "2. Activation:" },
            options: [
                { text: { ar: "مفعل مدى الحياة", fr: "Activé à vie", en: "Activated for Life" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "adobe_ps", category: "adobe", homeRow: "apps_merged", trending: true,
        code: "Ps", icon: "fa-solid fa-wand-magic-sparkles",
        startPrice: { ar: "300 د.ج", fr: "300 DA", en: "300 DZD" },
        targetAudience: { ar: "🎯 للمصممين وتعديل الصور (300 د.ج)", fr: "🎯 Design & Retouche Photo (300 DA)", en: "🎯 Graphic Design & Photo (300 DZD)" },
        title: { ar: "Adobe Photoshop", fr: "Adobe Photoshop", en: "Adobe Photoshop" },
        desc: { ar: "تثبيت وتفعيل برنامج فوتوشوب كامل الميزات مع دعم العربية بـ 300 د.ج.", fr: "Installation et activation complète avec support arabe à 300 DA.", en: "Full installation and activation with Arabic support for 300 DZD." },
        q1: {
            label: { ar: "1. اختر الإصدار:", fr: "1. Choisissez la version :", en: "1. Select Version:" },
            options: [
                { text: { ar: "Photoshop 2024 / 2025", fr: "Photoshop 2024 / 2025", en: "Photoshop 2024 / 2025" }, price: 300 },
                { text: { ar: "Photoshop 2021 / CC الخفيف", fr: "Photoshop 2021 / CC Léger", en: "Photoshop 2021 / CC Light" }, price: 300 }
            ]
        },
        q2: {
            label: { ar: "2. التفعيل:", fr: "2. Activation :", en: "2. Activation:" },
            options: [
                { text: { ar: "مفعل وجاهز للعمل", fr: "Pré-activé et prêt", en: "Pre-activated & Ready" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "adobe_pr", category: "adobe", homeRow: "apps_merged", trending: false,
        code: "Pr", icon: "fa-solid fa-film",
        startPrice: { ar: "300 د.ج", fr: "300 DA", en: "300 DZD" },
        targetAudience: { ar: "🎯 للمونتاج وصناعة الفيديو (300 د.ج)", fr: "🎯 Montage Vidéo Pro (300 DA)", en: "🎯 Pro Video Editing (300 DZD)" },
        title: { ar: "Adobe Premiere Pro", fr: "Adobe Premiere Pro", en: "Adobe Premiere Pro" },
        desc: { ar: "برنامج المونتاج الاحترافي مفعل ومضبوط مع كرت الشاشة بـ 300 د.ج.", fr: "Logiciel de montage vidéo activé et optimisé GPU à 300 DA.", en: "Pro video editing software activated and GPU-tuned for 300 DZD." },
        q1: {
            label: { ar: "1. اختر الإصدار:", fr: "1. Choisissez la version :", en: "1. Select Version:" },
            options: [
                { text: { ar: "Premiere Pro 2024 / 2025", fr: "Premiere Pro 2024 / 2025", en: "Premiere Pro 2024 / 2025" }, price: 300 },
                { text: { ar: "Premiere Pro 2020 / 2022", fr: "Premiere Pro 2020 / 2022", en: "Premiere Pro 2020 / 2022" }, price: 300 }
            ]
        },
        q2: {
            label: { ar: "2. إضافات:", fr: "2. Options :", en: "2. Add-ons:" },
            options: [
                { text: { ar: "Premiere فقط (300)", fr: "Premiere seul (300)", en: "Premiere Only (300)" }, addPrice: 0 },
                { text: { ar: "مع Media Encoder (+300)", fr: "Avec Media Encoder (+300)", en: "With Media Encoder (+300)" }, addPrice: 300 }
            ]
        }
    },
    {
        id: "adobe_ae", category: "adobe", homeRow: "apps_merged", trending: false,
        code: "Ae", icon: "fa-solid fa-clapperboard",
        startPrice: { ar: "300 د.ج", fr: "300 DA", en: "300 DZD" },
        targetAudience: { ar: "🎯 للموشن جرافيك والخدع البصرية", fr: "🎯 Motion Design & VFX", en: "🎯 Motion Graphics & VFX" },
        title: { ar: "Adobe After Effects", fr: "Adobe After Effects", en: "Adobe After Effects" },
        desc: { ar: "برنامج المؤثرات البصرية والأنيميشن مفعل بالكامل بـ 300 د.ج.", fr: "Création d'effets visuels VFX et motion design à 300 DA.", en: "Motion graphics and visual effects software for 300 DZD." },
        q1: {
            label: { ar: "1. اختر الإصدار:", fr: "1. Choisissez la version :", en: "1. Select Version:" },
            options: [
                { text: { ar: "After Effects 2024 / 2025", fr: "After Effects 2024 / 2025", en: "After Effects 2024 / 2025" }, price: 300 },
                { text: { ar: "After Effects 2020 / 2022", fr: "After Effects 2020 / 2022", en: "After Effects 2020 / 2022" }, price: 300 }
            ]
        },
        q2: {
            label: { ar: "2. التفعيل:", fr: "2. Activation :", en: "2. Activation:" },
            options: [
                { text: { ar: "مفعل بالكامل", fr: "Activé à vie", en: "Fully Activated" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "adobe_ai", category: "adobe", homeRow: "apps_merged", trending: false,
        code: "Ai", icon: "fa-solid fa-bezier-curve",
        startPrice: { ar: "300 د.ج", fr: "300 DA", en: "300 DZD" },
        targetAudience: { ar: "🎯 لتصميم الشعارات والفيكتور", fr: "🎯 Logos & Illustration Vectorielle", en: "🎯 Logos & Vector Art" },
        title: { ar: "Adobe Illustrator", fr: "Adobe Illustrator", en: "Adobe Illustrator" },
        desc: { ar: "تصميم الشعارات والهويات البصرية مفعل مع دعم العربية بـ 300 د.ج.", fr: "Création de logos et illustrations vectorielles à 300 DA.", en: "Design logos and vector illustrations for 300 DZD." },
        q1: {
            label: { ar: "1. اختر الإصدار:", fr: "1. Choisissez la version :", en: "1. Select Version:" },
            options: [
                { text: { ar: "Illustrator 2024 / 2025", fr: "Illustrator 2024 / 2025", en: "Illustrator 2024 / 2025" }, price: 300 },
                { text: { ar: "Illustrator 2020 / 2022", fr: "Illustrator 2020 / 2022", en: "Illustrator 2020 / 2022" }, price: 300 }
            ]
        },
        q2: {
            label: { ar: "2. التفعيل:", fr: "2. Activation :", en: "2. Activation:" },
            options: [
                { text: { ar: "مفعل بالكامل", fr: "Activé à vie", en: "Fully Activated" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "adobe_id_acrobat", category: "adobe", homeRow: "apps_merged", trending: false,
        code: "PDF", icon: "fa-solid fa-file-pdf",
        startPrice: { ar: "300 د.ج", fr: "300 DA", en: "300 DZD" },
        targetAudience: { ar: "🎯 لتعديل ملفات PDF وتنسيق الكتب", fr: "🎯 Édition PDF, Photo & Audio", en: "🎯 PDF Editing, Photo & Audio" },
        title: { ar: "Acrobat Pro / InDesign / Lightroom", fr: "Acrobat Pro / InDesign / Lightroom", en: "Acrobat Pro / InDesign / Lightroom" },
        desc: { ar: "أي برنامج من برامج أدوبي المكتبية والصوتية والتصوير بـ 300 د.ج للبرنامج.", fr: "Tout logiciel Adobe (PDF, mise en page, photo, audio) à 300 DA.", en: "Any Adobe publishing, PDF, photo, or audio app for 300 DZD." },
        q1: {
            label: { ar: "1. اختر البرنامج:", fr: "1. Choisissez le logiciel :", en: "1. Select Application:" },
            options: [
                { text: { ar: "Adobe Acrobat Pro DC", fr: "Adobe Acrobat Pro DC", en: "Adobe Acrobat Pro DC" }, price: 300 },
                { text: { ar: "Adobe InDesign / Lightroom / Audition", fr: "InDesign / Lightroom / Audition", en: "InDesign / Lightroom / Audition" }, price: 300 }
            ]
        },
        q2: {
            label: { ar: "2. العدد:", fr: "2. Quantité :", en: "2. Quantity:" },
            options: [
                { text: { ar: "برنامج واحد (300)", fr: "1 Logiciel (300)", en: "1 Application (300)" }, addPrice: 0 },
                { text: { ar: "برنامجين معاً (600)", fr: "2 Logiciels (600)", en: "2 Applications (600)" }, addPrice: 300 }
            ]
        }
    },
    {
        id: "usthb_math_stat", category: "office", homeRow: "apps_merged", trending: false,
        code: "UNI", icon: "fa-solid fa-square-root-variable",
        startPrice: { ar: "300 د.ج", fr: "300 DA", en: "300 DZD" },
        targetAudience: { ar: "🎯 لطلبة الجامعة والهندسة والبرمجة", fr: "🎯 Logiciels Universitaires & Ingénierie", en: "🎯 University & Engineering Software" },
        title: { ar: "MATLAB / AutoCAD / SPSS / VS Code", fr: "MATLAB / AutoCAD / SPSS / VS Code", en: "MATLAB / AutoCAD / SPSS / VS Code" },
        desc: { ar: "تثبيت أي برنامج جامعي أو هندسي أو إعداد بيئة البرمجة بـ 300 د.ج للبرنامج.", fr: "Installation de tout logiciel scientifique, CAO ou environnement Dev à 300 DA.", en: "Install any scientific, CAD, or coding environment for 300 DZD per app." },
        q1: {
            label: { ar: "1. اختر البرنامج المطلوب:", fr: "1. Choisissez le logiciel :", en: "1. Select Software:" },
            options: [
                { text: { ar: "MATLAB / SPSS / RStudio", fr: "MATLAB / SPSS / RStudio", en: "MATLAB / SPSS / RStudio" }, price: 300 },
                { text: { ar: "AutoCAD / SolidWorks / Proteus", fr: "AutoCAD / SolidWorks / Proteus", en: "AutoCAD / SolidWorks / Proteus" }, price: 300 },
                { text: { ar: "بيئة البرمجة (VS Code + C + Python + Flutter)", fr: "Pack Dev (VS Code + C + Python + Flutter)", en: "Coding Pack (VS Code + C + Python + Flutter)" }, price: 300 }
            ]
        },
        q2: {
            label: { ar: "2. العدد:", fr: "2. Quantité :", en: "2. Quantity:" },
            options: [
                { text: { ar: "برنامج واحد (300)", fr: "1 Logiciel (300)", en: "1 Software (300)" }, addPrice: 0 },
                { text: { ar: "برنامجين معاً (600)", fr: "2 Logiciels (600)", en: "2 Softwares (600)" }, addPrice: 300 }
            ]
        }
    },

    // ================= 4. بطاقات الفيزا والدفع (Bybit 500 | RedotPay 3000 | الشراء +100) =================
    {
        id: "visa_create", category: "visa", homeRow: "visa", trending: true,
        code: "VISA", icon: "fa-brands fa-cc-visa",
        startPrice: { ar: "من 500 د.ج", fr: "Dès 500 DA", en: "From 500 DZD" },
        targetAudience: { ar: "🎯 بطاقات دولية للدفع والشراء أونلاين", fr: "🎯 Cartes Visa Internationales", en: "🎯 International Virtual Visa Cards" },
        title: { ar: "فتح وتفعيل بطاقة Bybit أو RedotPay", fr: "Création Carte Visa Bybit ou RedotPay", en: "Bybit or RedotPay Visa Card Setup" },
        desc: { ar: "فتح وتوثيق بطاقة Bybit بـ 500 د.ج، أو بطاقة RedotPay بـ 3000 د.ج (شاملة 10$ سعر البطاقة).", fr: "Ouverture carte Bybit à 500 DA, ou carte RedotPay à 3000 DA (10$ inclus).", en: "Open a Bybit card for 500 DZD, or a RedotPay card for 3000 DZD ($10 fee included)." },
        q1: {
            label: { ar: "1. اختر نوع البطاقة:", fr: "1. Choisissez la carte :", en: "1. Select Card Type:" },
            options: [
                { text: { ar: "بطاقة Bybit الافتراضية (500)", fr: "Carte Bybit Virtuelle (500)", en: "Bybit Virtual Card (500)" }, price: 500 },
                { text: { ar: "بطاقة RedotPay شاملة 10$ (3000)", fr: "Carte RedotPay avec 10$ (3000)", en: "RedotPay Card incl. $10 (3000)" }, price: 3000 }
            ]
        },
        q2: {
            label: { ar: "2. التفعيل:", fr: "2. Activation :", en: "2. Activation:" },
            options: [
                { text: { ar: "مرافقة كاملة حتى التفعيل", fr: "Accompagnement complet", en: "Full Setup & Verification" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "visa_topup", category: "visa", homeRow: "visa", trending: false,
        code: "TOP$", icon: "fa-solid fa-money-bill-transfer",
        startPrice: { ar: "حسب سعر الدولار", fr: "Selon taux $", en: "By USD Rate" },
        targetAudience: { ar: "🎯 شحن فوري لبطاقتك أو حسابك", fr: "🎯 Recharge immédiate USDT / USD / EUR", en: "🎯 Instant USDT / USD / EUR Top-Up" },
        title: { ar: "شحن رصيد البطاقات (USDT / USD / Euro)", fr: "Rechargement Cartes (USDT / USD / Euro)", en: "Card Balance Top-Up (USDT / USD / Euro)" },
        desc: { ar: "شحن فوري لرصيد بطاقتك البنكية بأي مبلغ تريده وفق سعر صرف الدولار الحالي.", fr: "Rechargement rapide de votre carte selon le taux de change actuel.", en: "Fast balance reload for your card calculated by the current exchange rate." },
        q1: {
            label: { ar: "1. اختر العملة:", fr: "1. Choisissez la devise :", en: "1. Select Currency:" },
            options: [
                { text: { ar: "شحن USDT / دولار", fr: "Recharge USDT / USD", en: "USDT / USD Top-Up" }, price: { ar: "حسب سعر الصرف", fr: "Selon taux", en: "By current rate" } },
                { text: { ar: "شحن أورو Euro", fr: "Recharge Euro (€)", en: "Euro (€) Top-Up" }, price: { ar: "حسب سعر الصرف", fr: "Selon taux", en: "By current rate" } }
            ]
        },
        q2: {
            label: { ar: "2. المنصة:", fr: "2. Plateforme :", en: "2. Platform:" },
            options: [
                { text: { ar: "Bybit / RedotPay / Binance", fr: "Bybit / RedotPay / Binance", en: "Bybit / RedotPay / Binance" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "visa_direct_pay", category: "visa", homeRow: "visa", trending: false,
        code: "PAY", icon: "fa-solid fa-cart-shopping",
        startPrice: { ar: "سعر المنتج + 100 د.ج", fr: "Prix + 100 DA", en: "Price + 100 DZD" },
        targetAudience: { ar: "🎯 الشراء نيابة عنك (سعر المنتج + 100 د.ج)", fr: "🎯 Achat direct (Prix + 100 DA)", en: "🎯 Direct Checkout (Price + 100 DZD)" },
        title: { ar: "خدمة الشراء والدفع المباشر أونلاين", fr: "Service d'Achat & Paiement Direct", en: "Direct Online Purchase Service" },
        desc: { ar: "ندفع لك مباشرة في أي موقع أو دورة أو لعبة بسعر المنتج الحقيقي + 100 د.ج فقط أتعاب الخدمة.", fr: "Nous payons pour vous sur tout site au prix réel du produit + 100 DA de frais.", en: "We pay on your behalf on any site for the exact item price + 100 DZD fee." },
        q1: {
            label: { ar: "1. التسعيرة:", fr: "1. Tarification :", en: "1. Pricing:" },
            options: [
                { text: { ar: "سعر المنتج + 100 د.ج عمولة", fr: "Prix du produit + 100 DA", en: "Item Price + 100 DZD Fee" }, price: { ar: "سعر المنتج + 100 د.ج", fr: "Prix + 100 DA", en: "Item Price + 100 DZD" } }
            ]
        },
        q2: {
            label: { ar: "2. نوع العملية:", fr: "2. Type d'achat :", en: "2. Purchase Type:" },
            options: [
                { text: { ar: "شراء دورة / اشتراك / منتج", fr: "Cours / Abonnement / Produit", en: "Course / Subscription / Item" }, addPrice: 0 }
            ]
        }
    },

    // ================= 5. منصات الذكاء الاصطناعي الـ 5 (ChatGPT, Gemini, Claude, GitHub, Copilot) =================
    {
        id: "ai_chatgpt", category: "ai", homeRow: "ai", trending: true,
        code: "GPT", icon: "fa-solid fa-robot",
        startPrice: { ar: "1200 د.ج", fr: "1200 DA", en: "1200 DZD" },
        targetAudience: { ar: "🎯 للبرمجة والبحوث وتحليل الملفات", fr: "🎯 Code, Recherche & Analyse PDF", en: "🎯 Coding, Research & PDF Analysis" },
        title: { ar: "ChatGPT Plus (OpenAI)", fr: "ChatGPT Plus (OpenAI)", en: "ChatGPT Plus (OpenAI)" },
        desc: { ar: "وصول لنماذج GPT-4o المتقدمة لتحليل الملفات وحل المسائل (عرض طويل المدى: 1000 + 200 د.ج).", fr: "Accès aux modèles avancés GPT-4o pour vos études et projets (Offre longue durée).", en: "Access flagship GPT-4o models for coding, math, and file analysis (Long-term offer)." },
        q1: {
            label: { ar: "1. اختر الباقة:", fr: "1. Choisissez l'offre :", en: "1. Select Plan:" },
            options: [
                { text: { ar: "تفعيل طويل المدى (عام / عام ونصف)", fr: "Activation longue durée (1 an+)", en: "Long-Term Access (1 - 1.5 Years)" }, price: 1200 }
            ]
        },
        q2: {
            label: { ar: "2. الضمان:", fr: "2. Garantie :", en: "2. Warranty:" },
            options: [
                { text: { ar: "شامل التفعيل والمتابعة", fr: "Activation et support inclus", en: "Setup & Support Included" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "ai_gemini", category: "ai", homeRow: "ai", trending: false,
        code: "GEM", icon: "fa-solid fa-wand-sparkles",
        startPrice: { ar: "1200 د.ج", fr: "1200 DA", en: "1200 DZD" },
        targetAudience: { ar: "🎯 تكامل مع Google Docs والبحث العميق", fr: "🎯 Google AI Pro & Recherche", en: "🎯 Google AI Pro & Deep Research" },
        title: { ar: "Google Gemini Advanced", fr: "Google Gemini Advanced", en: "Google Gemini Advanced" },
        desc: { ar: "أقوى نماذج جوجل لتحليل الكتب الضخمة والأكواد مع سعة تخزين سحابية.", fr: "Le modèle IA avancé de Google pour analyser de longs documents et coder.", en: "Google's flagship AI model with huge context window for books and code." },
        q1: {
            label: { ar: "1. اختر الباقة:", fr: "1. Choisissez l'offre :", en: "1. Select Plan:" },
            options: [
                { text: { ar: "تفعيل طويل المدى (عام / عام ونصف)", fr: "Activation longue durée (1 an+)", en: "Long-Term Access (1 - 1.5 Years)" }, price: 1200 }
            ]
        },
        q2: {
            label: { ar: "2. التفعيل:", fr: "2. Activation :", en: "2. Activation:" },
            options: [
                { text: { ar: "تفعيل مضمون", fr: "Activation garantie", en: "Guaranteed Activation" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "ai_claude", category: "ai", homeRow: "ai", trending: false,
        code: "CLD", icon: "fa-solid fa-brain",
        startPrice: { ar: "1200 د.ج", fr: "1200 DA", en: "1200 DZD" },
        targetAudience: { ar: "🎯 الأفضل عالمياً في هندسة الأكواد والكتابة", fr: "🎯 N°1 pour le Code & Rédaction", en: "🎯 #1 for Coding & Academic Writing" },
        title: { ar: "Claude 3.5 Sonnet (Anthropic)", fr: "Claude 3.5 Sonnet (Anthropic)", en: "Claude 3.5 Sonnet (Anthropic)" },
        desc: { ar: "المنصة المفضلة للمبرمجين لبناء المشاريع الكاملة وكتابة التقارير الأكاديمية.", fr: "L'IA préférée des développeurs pour coder des projets complets sans erreurs.", en: "The favorite AI for software developers and clean academic writing." },
        q1: {
            label: { ar: "1. اختر الباقة:", fr: "1. Choisissez l'offre :", en: "1. Select Plan:" },
            options: [
                { text: { ar: "وصول طويل المدى (عام / عام ونصف)", fr: "Accès longue durée (1 an+)", en: "Long-Term Access (1 - 1.5 Years)" }, price: 1200 }
            ]
        },
        q2: {
            label: { ar: "2. التفعيل:", fr: "2. Activation :", en: "2. Activation:" },
            options: [
                { text: { ar: "تفعيل مضمون", fr: "Activation garantie", en: "Guaranteed Activation" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "ai_github", category: "ai", homeRow: "ai", trending: false,
        code: "GIT", icon: "fa-brands fa-github",
        startPrice: { ar: "1200 د.ج", fr: "1200 DA", en: "1200 DZD" },
        targetAudience: { ar: "🎯 حزمة المطورين والـ Repositories الاحترافية", fr: "🎯 Pack Développeur GitHub Pro", en: "🎯 GitHub Pro & Developer Pack" },
        title: { ar: "GitHub Pro & Student Developer Pack", fr: "GitHub Pro & Student Developer Pack", en: "GitHub Pro & Student Developer Pack" },
        desc: { ar: "تفعيل مزايا GitHub Pro وحزمة أدوات المطورين السحابية والبرمجية لمدة عام+.", fr: "Activation de GitHub Pro et des outils développeurs pour plus d'un an.", en: "Unlock GitHub Pro features and cloud developer tools for 1+ year." },
        q1: {
            label: { ar: "1. اختر الباقة:", fr: "1. Choisissez l'offre :", en: "1. Select Plan:" },
            options: [
                { text: { ar: "تفعيل حزمة GitHub Pro (عام+)", fr: "Activation GitHub Pro (1 an+)", en: "GitHub Pro Pack (1+ Year)" }, price: 1200 }
            ]
        },
        q2: {
            label: { ar: "2. الحساب:", fr: "2. Compte :", en: "2. Account:" },
            options: [
                { text: { ar: "تفعيل في حسابك", fr: "Sur votre compte", en: "On Your Account" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "ai_copilot", category: "ai", homeRow: "ai", trending: false,
        code: "CPLT", icon: "fa-solid fa-code",
        startPrice: { ar: "1200 د.ج", fr: "1200 DA", en: "1200 DZD" },
        targetAudience: { ar: "🎯 المساعد البرمجي الذكي داخل VS Code", fr: "🎯 Assistant IA dans VS Code", en: "🎯 AI Pair Programmer in VS Code" },
        title: { ar: "GitHub Copilot & Microsoft Copilot Pro", fr: "GitHub Copilot & Microsoft Copilot Pro", en: "GitHub Copilot & Microsoft Copilot Pro" },
        desc: { ar: "إكمال الأكواد تلقائياً وبناء الدوال بالذكاء الاصطناعي مباشرة داخل محرر VS Code.", fr: "Autocomplétion de code par IA directement intégrée dans VS Code.", en: "Real-time AI code completion and chat directly inside VS Code." },
        q1: {
            label: { ar: "1. اختر الأداة:", fr: "1. Choisissez l'outil :", en: "1. Select Tool:" },
            options: [
                { text: { ar: "تفعيل Copilot Pro (عام / عام ونصف)", fr: "Copilot Pro (1 - 1.5 an)", en: "Copilot Pro (1 - 1.5 Years)" }, price: 1200 }
            ]
        },
        q2: {
            label: { ar: "2. الإعداد:", fr: "2. Configuration :", en: "2. Setup:" },
            options: [
                { text: { ar: "شامل الربط مع VS Code", fr: "Intégration VS Code incluse", en: "VS Code Integration Included" }, addPrice: 0 }
            ]
        }
    },

    // ================= 6. الألعاب والمحاكيات (600 د.ج - في البحث والقائمة العلوية فقط) =================
    {
        id: "games_pc", category: "games", homeRow: "hidden", trending: false,
        code: "GAME", icon: "fa-solid fa-gamepad",
        startPrice: { ar: "600 د.ج", fr: "600 DA", en: "600 DZD" },
        targetAudience: { ar: "🎯 تثبيت الألعاب وضبط الإعدادات (600 د.ج)", fr: "🎯 Installation Jeux & Config (600 DA)", en: "🎯 PC Games & Tuning (600 DZD)" },
        title: { ar: "تثبيت ألعاب الـ PC + ضبط الإعدادات", fr: "Installation Jeux PC + Optimisation", en: "PC Games Installation + Tuning" },
        desc: { ar: "تثبيت ألعاب الحاسوب مع كافة ملفات DirectX و C++ وضبط إعدادات السلاسة بـ 600 د.ج.", fr: "Installation de jeux PC avec DirectX/C++ et réglage graphique à 600 DA.", en: "Install PC games with all DirectX/C++ runtimes and graphics tuning for 600 DZD." },
        q1: {
            label: { ar: "1. الخدمة:", fr: "1. Service :", en: "1. Service:" },
            options: [
                { text: { ar: "تثبيت الألعاب + ضبط الإعدادات الشامل", fr: "Installation + Réglage complet", en: "Full Game Setup + Graphics Tuning" }, price: 600 }
            ]
        },
        q2: {
            label: { ar: "2. الإضافات:", fr: "2. Inclus :", en: "2. Included:" },
            options: [
                { text: { ar: "شامل حل أخطاء الـ DLL و DirectX", fr: "Correction erreurs DLL & DirectX", en: "Includes DLL & DirectX Fixes" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "games_ppsspp", category: "games", homeRow: "hidden", trending: false,
        code: "EMU", icon: "fa-solid fa-ghost",
        startPrice: { ar: "600 د.ج", fr: "600 DA", en: "600 DZD" },
        targetAudience: { ar: "🎯 محاكيات PPSSPP و PS2 و Android (600 د.ج)", fr: "🎯 Émulateurs PPSSPP, PS2 & Android", en: "🎯 PPSSPP, PS2 & Android Emulators" },
        title: { ar: "تثبيت المحاكيات (PPSSPP / PS2) + الألعاب", fr: "Émulateurs (PPSSPP / PS2) + Jeux", en: "Emulators (PPSSPP / PS2) + Games Pack" },
        desc: { ar: "تثبيت المحاكي مع باقة ألعاب وضبط إعدادات الـ 60 FPS ويد التحكم بـ 600 د.ج.", fr: "Installation d'émulateur avec pack de jeux et configuration manette à 600 DA.", en: "Emulator setup with games pack, 60 FPS tuning, and controller mapping for 600 DZD." },
        q1: {
            label: { ar: "1. اختر المحاكي:", fr: "1. Choisissez l'émulateur :", en: "1. Select Emulator:" },
            options: [
                { text: { ar: "محاكي PPSSPP Gold + ألعاب + ضبط", fr: "PPSSPP Gold + Jeux + Config", en: "PPSSPP Gold + Games + Tuning" }, price: 600 },
                { text: { ar: "محاكي PS2 / Android + ضبط", fr: "PS2 (PCSX2) / Android + Config", en: "PS2 (PCSX2) / Android + Tuning" }, price: 600 }
            ]
        },
        q2: {
            label: { ar: "2. التحكم:", fr: "2. Contrôles :", en: "2. Controls:" },
            options: [
                { text: { ar: "ضبط الكيبورد أو يد التحكم", fr: "Clavier ou Manette configurée", en: "Keyboard or Controller Mapped" }, addPrice: 0 }
            ]
        }
    },

    // ================= 7. التسريع والـ BIOS (300 د.ج و 200 د.ج - في البحث والقائمة العلوية فقط) =================
    {
        id: "opt_fps_boost", category: "opt", homeRow: "hidden", trending: false,
        code: "FPS+", icon: "fa-solid fa-fire-flame-curved",
        startPrice: { ar: "300 د.ج", fr: "300 DA", en: "300 DZD" },
        targetAudience: { ar: "🎯 تسريع الألعاب ورفع الإطارات (300 د.ج)", fr: "🎯 Boost FPS & Fluidité Gaming (300 DA)", en: "🎯 Gaming FPS Boost (300 DZD)" },
        title: { ar: "تسريع الألعاب وإزالة التقطيع (FPS Boost)", fr: "Optimisation Gaming (Boost FPS)", en: "Gaming Optimization (FPS Boost)" },
        desc: { ar: "ضبط إعدادات الويندوز وكرت الشاشة وخطة الطاقة لرفع الفريمات بـ 300 د.ج فقط.", fr: "Réglage approfondi du GPU et de l'alimentation pour booster vos FPS à 300 DA.", en: "Deep GPU and power plan tuning to maximize gaming frame rates for 300 DZD." },
        q1: {
            label: { ar: "1. الخدمة المطلوبة:", fr: "1. Service :", en: "1. Service:" },
            options: [
                { text: { ar: "تسريع شامل للألعاب ورفع FPS", fr: "Optimisation Gaming & FPS", en: "Full Gaming & FPS Boost" }, price: 300 }
            ]
        },
        q2: {
            label: { ar: "2. التنفيذ:", fr: "2. Exécution :", en: "2. Delivery:" },
            options: [
                { text: { ar: "حضوري أو عن بُعد", fr: "Sur place ou à distance", en: "In-person or Remote" }, addPrice: 0 }
            ]
        }
    },
    {
        id: "opt_drivers_bios", category: "opt", homeRow: "hidden", trending: false,
        code: "BIOS", icon: "fa-solid fa-microchip",
        startPrice: { ar: "200 د.ج", fr: "200 DA", en: "200 DZD" },
        targetAudience: { ar: "🎯 خفة الحاسوب وضبط الـ BIOS (200 د.ج)", fr: "🎯 Accélération PC & Config BIOS (200 DA)", en: "🎯 PC Speedup & BIOS Config (200 DZD)" },
        title: { ar: "خفة الحاسوب، ضبط الـ BIOS والتعريفات", fr: "Accélération PC, Pilotes & BIOS", en: "PC Speedup, BIOS & Drivers" },
        desc: { ar: "تخفيف النظام وإقلاع الحاسوب أو ضبط إعدادات الـ BIOS والتعريفات بـ 200 د.ج فقط.", fr: "Nettoyage des services lourds, mise à jour pilotes et réglage BIOS à 200 DA.", en: "Remove heavy background services, update drivers, and tune BIOS for 200 DZD." },
        q1: {
            label: { ar: "1. اختر الخدمة:", fr: "1. Choisissez le service :", en: "1. Select Service:" },
            options: [
                { text: { ar: "تسريع خفة الحاسوب والإقلاع", fr: "Accélération PC & Démarrage", en: "PC Speedup & Fast Boot" }, price: 200 },
                { text: { ar: "ضبط الـ BIOS وتحديث التعريفات", fr: "Configuration BIOS & Pilotes", en: "BIOS Setup & Driver Updates" }, price: 200 }
            ]
        },
        q2: {
            label: { ar: "2. التنفيذ:", fr: "2. Exécution :", en: "2. Delivery:" },
            options: [
                { text: { ar: "تنفيذ سريع ومضمون", fr: "Rapide et garanti", en: "Fast & Guaranteed" }, addPrice: 0 }
            ]
        }
    }
];