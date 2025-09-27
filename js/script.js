
// desktop dark mode
const darkModeBtn = document.getElementById('dark_mode');
const lightBtn = document.getElementById('light_mode');

// mobile dark mode
const switchCheckbox = document.getElementById("switchCheckbox");

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    document.body.classList.remove('dark');
    switchCheckbox.checked = false;
} else {
    document.body.classList.add('dark');
    switchCheckbox.checked = true;
}

function setTheme(isDark) {
    if (isDark) {
        document.body.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        switchCheckbox.checked = true;
    } else {
        document.body.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        switchCheckbox.checked = false;
    }
}

darkModeBtn.addEventListener('click', () => setTheme(true));
lightBtn.addEventListener('click', () => setTheme(false));
switchCheckbox.addEventListener('click', () => setTheme(!document.body.classList.contains('dark')));


// ltr & rtl
const ltr = document.getElementById('english');
const rtl = document.getElementById('persian');
const htmlTag = document.documentElement;

ltr.addEventListener('click', () => {
    htmlTag.setAttribute('dir', 'ltr');
});

rtl.addEventListener('click', () => {
    htmlTag.setAttribute('dir', 'rtl');
});


// back to top
const backToTop = document.getElementById("backToTop");

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


// mobile menu
const mobileMenuBtn = document.getElementById("mobileMenu");
const menuContainer = document.getElementById("menuContainer");
const mobileDropdown = document.getElementById("mobileDropdown");

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


//  mobile nav dropdown 
const navList = document.getElementById("navList");
const navDropdown = document.getElementById("navDropdown");

navList.addEventListener("click", (e) => {
    e.stopPropagation();
    langDropdown.classList.add("hidden");
    langDropdown.classList.remove("flex");

    navDropdown.classList.toggle("hidden");
});

const langBtn = document.getElementById("lang");
const langDropdown = document.getElementById("lang-dropdown");
const selectedLang = document.getElementById("selectedLang");

const englishBtn = document.getElementById("english");
const persianBtn = document.getElementById("persian");

const savedLang = localStorage.getItem("selectedLang");
if (savedLang) {
    selectedLang.textContent = savedLang;
    document.documentElement.setAttribute("dir", savedLang === "فارسی" ? "rtl" : "ltr");
}

langBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    navDropdown?.classList.add("hidden");
    langDropdown.classList.toggle("hidden");
    langDropdown.classList.toggle("flex");
});

langDropdown.querySelectorAll("button").forEach((item) => {
    item.addEventListener("click", (e) => {
        e.stopPropagation();
        const value = item.textContent.trim();
        selectedLang.textContent = value;
        document.documentElement.setAttribute("dir", value === "فارسی" ? "rtl" : "ltr");
        localStorage.setItem("selectedLang", value);
        langDropdown.classList.remove("flex");
        langDropdown.classList.add("hidden");
    });
});

englishBtn.addEventListener("click", () => {
    selectedLang.textContent = "English";
    document.documentElement.setAttribute("dir", "ltr");
    localStorage.setItem("selectedLang", "English");
});

persianBtn.addEventListener("click", () => {
    selectedLang.textContent = "فارسی";
    document.documentElement.setAttribute("dir", "rtl");
    localStorage.setItem("selectedLang", "فارسی");
});


// click outside
document.addEventListener("click", (e) => {
    if (!navDropdown.contains(e.target) && !navList.contains(e.target)) {
        navDropdown.classList.add("hidden");
    }

    if (!langDropdown.contains(e.target) && !langBtn.contains(e.target)) {
        langDropdown.classList.add("hidden");
        langDropdown.classList.remove("flex");
    }
});

