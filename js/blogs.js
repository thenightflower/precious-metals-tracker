const blogs = [
    {
        id: 1,
        title: "به لطف انتظارات فدرال رزرو و تقویت دلار آمریکا، قیمت طلا بالای ۳۶۵۰ دلار باقی ماند",
        image: "../assets/images/b.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
        link: "/pages/blog-details.html"
    },
    {
        id: 2,
        title: "حمله‌ی سایبری عملیات فرودگاه‌های اروپایی را مختل کرد",
        image: "../assets/images/b3.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 3,
        title: "معاملات آتی طلا برای تحویل در ماه دسامبر با 0.74 درصد افزایش به 3705.80 دلار در هر اونس رسید و افزایش هفتگی را ثبت کرد.",
        image: "../assets/images/b2.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 4,
        title: "با افزایش کسری بودجه بریتانیا، ارزش پوند کاهش یافت.",
        image: "../assets/images/b4.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 5,
        title: "بانک مرکزی ژاپن نرخ بهره را بدون تغییر حفظ کرد",
        image: "../assets/images/b7.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 6,
        title: "میانگین نرخ بهره وام مسکن ثابت 30 ساله در ایالات متحده در هفته منتهی به 11 سپتامبر کاهش یافت.",
        image: "../assets/images/b8.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 7,
        title: "دلار در حال افزایش قدرت است.",
        image: "../assets/images/b5.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 8,
        title: "طلا پس از تصمیم فدرال رزرو، ضررهای خود را کاهش داد و زیر بالاترین رکورد خود تثبیت شد",
        image: "../assets/images/b6.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 9,
        title: "کاهش قیمت طلا پس از هشدار پاول در مورد افزایش تورم در آمریکا",
        image: "../assets/images/b9.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 10,
        title: "فدرال رزرو انتظار دارد دو کاهش نرخ بهره دیگر در سال 2025 انجام دهد.",
        image: "../assets/images/b10.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 11,
        title: "کویت پس از تصمیم فدرال dvهش داد",
        image: "../assets/images/b11.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 1,
        title: "به لطف انتظارات فدرال رزرو و تقوhrshباقی ماند",
        image: "../assets/images/b.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 2,
        title: "حمله‌ی سایبری عمrdthوپایی را مختل کرد",
        image: "../assets/images/b3.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 3,
        title: "معاملات آتی طلا برای تحویل در ماه دسامبر با 0.74 درصد افزایش به 3705.80 دلار در هر اونس رسید و افزایش هفتگی را ثبت کرد.",
        image: "../assets/images/b2.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 4,
        title: "با افزایش کسری بودجه بریتانیا، ارزش پوند کاهش یافت.",
        image: "../assets/images/b4.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 5,
        title: "بانک مرکزی ژاپن نرخ بهره را بدون تغییر حفظ کرد",
        image: "../assets/images/b7.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 6,
        title: "میانگین نرخ بهره وام مسکن ثابت 30 ساله در ایالات متحده در هفته منتهی به 11 سپتامبر کاهش یافت.",
        image: "../assets/images/b8.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 7,
        title: "دلار در حال افزایش قدرت است.",
        image: "../assets/images/b5.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 8,
        title: "طلا پس از تصمیم فدرال رزرو، ضررهای خود را کاهش داد و زیر بالاترین رکورد خود تثبیت شد",
        image: "../assets/images/b6.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 9,
        title: "کاهش قیمت طلا پس از هشدار پاول در مورد افزایش تورم در آمریکا",
        image: "../assets/images/b9.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 10,
        title: "فدرال رزرو انتظار دارد دو کاهش نرخ بهره دیگر در سال 2025 انجام دهد.",
        image: "../assets/images/b10.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 11,
        title: "کویت پس از تصمیم فدرال رزرو، نرخ بهره را 25 واحد پایه کاهش داد",
        image: "../assets/images/b11.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 1,
        title: "به لطف انتظارات فدرال رزرو و تقویت دلار آمریکا، قیمت طلا بالای ۳۶۵۰ دلار باقی ماند",
        image: "../assets/images/b.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 2,
        title: "حمله‌ی سایبری عملیات فرودگاه‌های اروپایی را مختل کرد",
        image: "../assets/images/b3.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 3,
        title: "معاملات آتی طلا برای تحویل در ماه دسامبر با 0.74 درصد افزایش به 3705.80 دلار در هر اونس رسید و افزایش هفتگی را ثبت کرد.",
        image: "../assets/images/b2.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 4,
        title: "با افزایش کسری بودجه بریتانیا، ارزش پوند کاهش یافت.",
        image: "../assets/images/b4.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 5,
        title: "بانک مرکزی ژاپن نرخ بهره را بدون تغییر حفظ کرد",
        image: "../assets/images/b7.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 6,
        title: "میانگین نرخ بهره وام مسکن ثابت 30 ساله در ایالات متحده در هفته منتهی به 11 سپتامبر کاهش یافت.",
        image: "../assets/images/b8.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 7,
        title: "دلار در حال افزایش قدرت است.",
        image: "../assets/images/b5.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 8,
        title: "طلا پس از تصمیم فدرال رزرو، ضررهای خود را کاهش داد و زیر بالاترین رکورد خود تثبیت شد",
        image: "../assets/images/b6.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 9,
        title: "کاهش قیمت طلا پس از هشدار پاول در مورد افزایش تورم در آمریکا",
        image: "../assets/images/b9.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 10,
        title: "فدرال رزرو انتظار دارد دو کاهش نرخ بهره دیگر در سال 2025 انجام دهد.",
        image: "../assets/images/b10.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 11,
        title: "کویت پس از تصمیم فدرال dvهش داد",
        image: "../assets/images/b11.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 1,
        title: "به لطف انتظارات فدرال رزرو و تقوhrshباقی ماند",
        image: "../assets/images/b.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 2,
        title: "حمله‌ی سایبری عمrdthوپایی را مختل کرد",
        image: "../assets/images/b3.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 3,
        title: "معاملات آتی طلا برای تحویل در ماه دسامبر با 0.74 درصد افزایش به 3705.80 دلار در هر اونس رسید و افزایش هفتگی را ثبت کرد.",
        image: "../assets/images/b2.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 4,
        title: "با افزایش کسری بودجه بریتانیا، ارزش پوند کاهش یافت.",
        image: "../assets/images/b4.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 5,
        title: "بانک مرکزی ژاپن نرخ بهره را بدون تغییر حفظ کرد",
        image: "../assets/images/b7.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 6,
        title: "میانگین نرخ بهره وام مسکن ثابت 30 ساله در ایالات متحده در هفته منتهی به 11 سپتامبر کاهش یافت.",
        image: "../assets/images/b8.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 7,
        title: "دلار در حال افزایش قدرت است.",
        image: "../assets/images/b5.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 8,
        title: "طلا پس از تصمیم فدرال رزرو، ضررهای خود را کاهش داد و زیر بالاترین رکورد خود تثبیت شد",
        image: "../assets/images/b6.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 9,
        title: "کاهش قیمت طلا پس از هشدار پاول در مورد افزایش تورم در آمریکا",
        image: "../assets/images/b9.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 10,
        title: "فدرال رزرو انتظار دارد دو کاهش نرخ بهره دیگر در سال 2025 انجام دهد.",
        image: "../assets/images/b10.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    },
    {
        id: 11,
        title: "کویت پس از تصمیم فدرال رزرو، نرخ بهره را 25 واحد پایه کاهش داد",
        image: "../assets/images/b11.jpeg",
        date: " 20/09/2025 12:22 م", view: "23196",
         link: "/pages/blog-details.html"
    }
];

const blogsPerPage = 10;
let currentPage = 1;

function renderBlogs(page) {
    const start = (page - 1) * blogsPerPage;
    const end = start + blogsPerPage;
    const pageBlogs = blogs.slice(start, end);

    const blogsContainer = document.getElementById("blogs");
    blogsContainer.innerHTML = pageBlogs
        .map((blog) => `
                <a href="" class="md:w-[calc(100%/3-52px/3)] blog">
                <div class="relative">
                     <img src="${blog.image}" alt="${blog.title}" class="max-md:mx-auto rounded-md" >
                     <span class="top-2.5 ltr:right-2.5 rtl:left-2.5 absolute bg-black opacity-75 px-2 pt-1.25 pb-1 rounded-md">
                        <svg class="mx-auto w-5.5 h-3.25" id="eye" xmlns="http://www.w3.org/2000/svg" width="18.9" height="9.967" viewBox="0 0 18.9 9.967">
                          <path d="M18.758,125.614c-.169-.188-4.226-4.614-9.309-4.614s-9.14,4.426-9.309,4.614a.554.554,0,0,0,0,.739c.169.188,4.226,4.614,9.309,4.614s9.14-4.426,9.309-4.614a.554.554,0,0,0,0-.739Zm-9.309,4.245a3.876,3.876,0,1,1,3.876-3.876A3.881,3.881,0,0,1,9.449,129.859Z" transform="translate(0 -121)" fill="#f8d25c"/>
                          <path d="M184.322,182.661a1.656,1.656,0,0,1,.7-1.348,2.733,2.733,0,0,0-1.251-.313,2.769,2.769,0,1,0,2.721,3.235A1.651,1.651,0,0,1,184.322,182.661Z" transform="translate(-174.319 -178.785)" fill="#f8d25c"/>
                        </svg>
                        <span class="block mt-0.5 text-yellow text-xs">${blog.view}</span>
                     </span>
                     <span class="bottom-2 absolute inset-x-[2%] flex justify-center gap-3 bg-maire opacity-66 rounded text-[13px] text-white">
                        ${blog.date}
                     </span>
                </div>
                 <p class="mt-4 font-semibold text-base line-clamp-2">${blog.title}</p>
            </a>`)
        .join("");
}

function renderPagination(totalItems, currentPage) {
    const totalPages = Math.ceil(totalItems / blogsPerPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    function createButton(page, text = page, active = false, disabled = false) {
        const btn = document.createElement("button");
        btn.innerHTML = text;
        btn.className =
            " flex justify-center dark:border-none items-center border border-gold rounded-xs size-8.5 disabled:opacity-50 disabled:cursor-not-allowed" +
            (active ? " text-white dark:text-maire bg-gold " : " dark:bg-dark-olive-brown");
        if (disabled) {
            btn.setAttribute("disabled", "");
        } else {
            btn.addEventListener("click", () => {
                currentPage = page;
                renderBlogs(currentPage);
                renderPagination(totalItems, currentPage);
            });
        }
        return btn;
    }

    // prev btn
    pagination.appendChild(createButton(currentPage - 1, `<svg class="ltr:rotate-90 rtl:-rotate-90" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
               <path
                   d="M1.64.808a.638.638,0,0,0-.915,0c-.276.258-.681.365-.405.623L4.56,5.389a.744.744,0,0,0,.977.02L9.778,1.78A.629.629,0,0,0,9.822.848a.743.743,0,0,0-1-.041l-3.742,3.2Z"
                   transform="translate(-0.228 -0.615)" fill="currentColor"></path>
           </svg>
           `, false, currentPage === 1));

    // صفحه اول
    if (currentPage > 3) {
        pagination.appendChild(createButton(1));
        if (currentPage > 4) {
            const dots = document.createElement("span");
            dots.textContent = "......";
            dots.className = "text-[22px]";
            pagination.appendChild(dots);
        }
    }

    // دو صفحه قبل و بعد از صفحه فعلی
    for (
        let i = Math.max(1, currentPage - 2);
        i <= Math.min(totalPages, currentPage + 2);
        i++
    ) {
        pagination.appendChild(createButton(i, i, i === currentPage));
    }

    // صفحه آخر
    if (currentPage < totalPages - 2) {
        if (currentPage < totalPages - 3) {
            const dots = document.createElement("span");
            dots.textContent = "......";
            dots.className = "text-[22px]";
            pagination.appendChild(dots);
        }
        pagination.appendChild(createButton(totalPages));
    }

    // next btn
    pagination.appendChild(createButton(currentPage + 1, `<svg class="ltr:-rotate-90 rtl:rotate-90" xmlns="http://www.w3.org/2000/svg" width="10" height="6" viewBox="0 0 10 6">
              <path
                  d="M1.64.808a.638.638,0,0,0-.915,0c-.276.258-.681.365-.405.623L4.56,5.389a.744.744,0,0,0,.977.02L9.778,1.78A.629.629,0,0,0,9.822.848a.743.743,0,0,0-1-.041l-3.742,3.2Z"
                  transform="translate(-0.228 -0.615)" fill="currentColor"></path>
          </svg>`, false, currentPage === totalPages));
}

renderBlogs(currentPage);
renderPagination(blogs.length, currentPage);

document.addEventListener("DOMContentLoaded", () => {
    const blogs = document.querySelectorAll(".blog");
    const pagination = document.querySelector("#pagination");

    if (blogs.length < 10 && pagination) {
        pagination.style.display = "none";
    }
});