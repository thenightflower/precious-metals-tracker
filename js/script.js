// desktop dark mode
const darkModeBtn = document.getElementById('dark_mode');
const lightBtn = document.getElementById('light_mode');

// mobile dark mode
const switchCheckbox = document.getElementById("switchCheckbox");

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.remove('dark');
    if (switchCheckbox) switchCheckbox.checked = false;
} else {
    document.body.classList.add('dark');
    if (switchCheckbox) switchCheckbox.checked = true;
}

function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if (switchCheckbox) switchCheckbox.checked = true;
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if (switchCheckbox) switchCheckbox.checked = false;
    }
}

if (darkModeBtn) darkModeBtn.addEventListener('click', () => setTheme(true));
if (lightBtn) lightBtn.addEventListener('click', () => setTheme(false));
if (switchCheckbox) switchCheckbox.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));

// تابع برای تشخیص جهت
function detectDirection() {
    const htmlDir = document.documentElement.getAttribute("dir");

    return htmlDir === "rtl";
}

// تابع راه‌اندازی اسلایدر
function initializeSlider() {
    // بررسی وجود jQuery و اسلایدر
    if (typeof $ === 'undefined' || !$('.specialBlogSlider').length) {
        return;
    }

    if ($('.specialBlogSlider').hasClass('slick-initialized')) {
        $('.specialBlogSlider').slick('unslick');
    }

    const isRTL = detectDirection();
    console.log("RTL detected:", isRTL);

    $('.specialBlogSlider').slick({
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 3,
        rtl: isRTL,
        arrows: true,
        dots: true,
        autoplay: false,
        speed: 300,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '15px',
                    slidesToShow: 1,
                    rtl: isRTL
                }
            },
            {
                breakpoint: 600,
                settings: {
                    arrows: true,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1,
                    rtl: isRTL
                }
            }
        ]
    });
}

// ltr & rtl
const ltr = document.getElementById('english');
const rtl = document.getElementById('persian');
const htmlTag = document.documentElement;

if (ltr) {
    ltr.addEventListener('click', () => {
        htmlTag.setAttribute('dir', 'ltr');
        // راه‌اندازی مجدد اسلایدر پس از تغییر جهت
        setTimeout(initializeSlider, 150);
    });
}

if (rtl) {
    rtl.addEventListener('click', () => {
        htmlTag.setAttribute('dir', 'rtl');
        // راه‌اندازی مجدد اسلایدر پس از تغییر جهت
        setTimeout(initializeSlider, 150);
    });
}

// back to top
const backToTop = document.getElementById("backToTop");

if (backToTop) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backToTop.classList.remove("hidden");
        } else {
            backToTop.classList.add("hidden");
        }
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// mobile menu
const mobileMenuBtn = document.getElementById("mobileMenu");
const menuContainer = document.getElementById("menuContainer");
const mobileDropdown = document.getElementById("mobileDropdown");

if (mobileMenuBtn && menuContainer && mobileDropdown) {
    mobileMenuBtn.addEventListener("click", () => {
        menuContainer.classList.remove("hidden");
        requestAnimationFrame(() => {
            mobileDropdown.classList.remove("rtl:right-[-301px]", "ltr:left-[-301px]");
            mobileDropdown.classList.add("right-0", "left-0");
        });
    });

    menuContainer.addEventListener("click", (e) => {
        if (!mobileDropdown.contains(e.target)) {
            mobileDropdown.classList.remove("right-0", "left-0");
            mobileDropdown.classList.add("rtl:right-[-301px]", "ltr:left-[-301px]");

            setTimeout(() => {
                menuContainer.classList.add("hidden");
            }, 400);
        }
    });
}

// mobile nav dropdown 
const navList = document.getElementById("navList");
const navDropdown = document.getElementById("navDropdown");
const langBtn = document.getElementById("lang");
const langDropdown = document.getElementById("lang-dropdown");
const selectedLang = document.getElementById("selectedLang");
const englishBtn = document.getElementById("english");
const persianBtn = document.getElementById("persian");

if (navList && navDropdown) {
    navList.addEventListener("click", (e) => {
        e.stopPropagation();
        if (langDropdown) {
            langDropdown.classList.add("hidden");
            langDropdown.classList.remove("flex");
        }
        navDropdown.classList.toggle("hidden");
    });
}

// بارگذاری زبان ذخیره شده
const savedLang = localStorage.getItem("selectedLang");
if (savedLang && selectedLang) {
    selectedLang.textContent = savedLang;
    document.documentElement.setAttribute("dir", savedLang === "فارسی" ? "rtl" : "ltr");
}

if (langBtn && langDropdown) {
    langBtn.addEventListener("click", (e) => {
        e.stopPropagation();
        if (navDropdown) navDropdown.classList.add("hidden");
        langDropdown.classList.toggle("hidden");
        langDropdown.classList.toggle("flex");
    });
}

if (langDropdown) {
    langDropdown.querySelectorAll("button").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.stopPropagation();
            const value = item.textContent.trim();
            if (selectedLang) selectedLang.textContent = value;
            document.documentElement.setAttribute("dir", value === "فارسی" ? "rtl" : "ltr");
            localStorage.setItem("selectedLang", value);
            langDropdown.classList.remove("flex");
            langDropdown.classList.add("hidden");

            // راه‌اندازی مجدد اسلایدر پس از تغییر زبان
            setTimeout(initializeSlider, 150);
        });
    });
}

if (englishBtn && selectedLang) {
    englishBtn.addEventListener("click", () => {
        selectedLang.textContent = "English";
        document.documentElement.setAttribute("dir", "ltr");
        localStorage.setItem("selectedLang", "English");

        // راه‌اندازی مجدد اسلایدر پس از تغییر زبان
        setTimeout(initializeSlider, 150);
    });
}

if (persianBtn && selectedLang) {
    persianBtn.addEventListener("click", () => {
        selectedLang.textContent = "فارسی";
        document.documentElement.setAttribute("dir", "rtl");
        localStorage.setItem("selectedLang", "فارسی");

        // راه‌اندازی مجدد اسلایدر پس از تغییر زبان
        setTimeout(initializeSlider, 150);
    });
}

// click outside
document.addEventListener("click", (e) => {
    if (navDropdown && navList) {
        if (!navDropdown.contains(e.target) && !navList.contains(e.target)) {
            navDropdown.classList.add("hidden");
        }
    }

    if (langDropdown && langBtn) {
        if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
            langDropdown.classList.add("hidden");
            langDropdown.classList.remove("flex");
        }
    }
});

// تابع راه‌اندازی مجدد (برای دسترسی خارجی)
function reInitSlider() {
    initializeSlider();
}

// MutationObserver برای تشخیص تغییرات خودکار dir
const dirObserver = new MutationObserver(function (mutations) {
    mutations.forEach(function (mutation) {
        if (mutation.type === 'attributes' && mutation.attributeName === 'dir') {
            console.log('Direction changed automatically to:', mutation.target.getAttribute('dir'));
            setTimeout(initializeSlider, 100);
        }
    });
});

// راه‌اندازی پس از لود شدن صفحه
$(document).ready(function () {
    // کمی تاخیر برای اطمینان از لود کامل
    setTimeout(function () {
        initializeSlider();
    }, 100);

    // شروع نظارت بر تغییرات dir
    dirObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['dir']
    });
});

// راه‌اندازی مجدد در صورت تغییر اندازه صفحه
$(window).resize(function () {
    clearTimeout(window.resizeTimer);
    window.resizeTimer = setTimeout(function () {
        console.log("Window resized, reinitializing slider");
        initializeSlider();
    }, 250);
});

// تابع عمومی برای دسترسی خارجی
window.reinitializeSlider = initializeSlider;
window.detectDirection = detectDirection;