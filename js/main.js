// let priceData = null;
// let previousPrices = {};
let updateInterval = 15;
let countdownTimer = null;

const baseTime = new Date("2025-09-25T09:42:54"); // زمان مبدا
const getRemainingSeconds = () => {
    const now = new Date();
    const elapsed = Math.floor((now - baseTime) / 1000); // چند ثانیه گذشته از زمان مبدا
    const remainder = updateInterval - (elapsed % updateInterval); // چند ثانیه تا نوبت بعدی مونده
    return remainder;
};
const startCountdownFromBase = () => {
    clearInterval(countdownTimer);
    countdownTimer = setInterval(() => {
        const remaining = getRemainingSeconds();
        document.getElementById('homeUpdateInterval').textContent = remaining;
        console.log(remaining);

    }, 1000);
};











const fetchPrices = async () => {
    const now = new Date();

    try {
        const response = await fetch("https://api.daralsabaek.com/api/goldAndFundBalance/getMetalPrices");
        if (!response.ok) {
            throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
        }

        const data = await response.json();
        console.log(data);

        if (data.isSuccess && data.result) {
            console.log(data);

            if (data.result.updateIntervalInSeconds) {
                updateInterval = data.result.updateIntervalInSeconds || 15;
                startCountdownFromBase();
            }

            displayPrices(data);
            updateTime();
            showUpdateInfo();
            hideLoading();
            console.log("✅ API response received at:", now.toLocaleTimeString('en-US'), data.result);
        }
        else {
            console.error("ساختار داده نامعتبر است:", data);
        }
    } catch (error) {
        console.error("خطا در گرفتن داده‌ها:", error);
    }
};


// const fetchPrices = async () => {
//     const now = new Date();
//     console.log("⚡ fetchPrices called at:", now.toLocaleTimeString('en-US')); // این خط لاگ می‌گیره
//     try {
//         const res = await fetch("https://api.daralsabaek.com/api/goldAndFundBalance/getMetalSellAndBuyPrices");
//         const data = await res.json();

//         if (data.succeeded) {
//             priceData = data.result;

//             if (data.result.updateIntervalInSeconds) {
//                 updateInterval = data.result.updateIntervalInSeconds || 15;
//                 startCountdownFromBase();
//             }

//             displayPrices(priceData);
//             updateTime();
//             showUpdateInfo();
//             hideLoading();
//             console.log("✅ API response received at:", now.toLocaleTimeString('en-US'), data.result);
//         } else {
//             throw new Error(data.errors[0] || 'خطا در دریافت داده‌ها');
//         }
//     } catch (error) {
//         console.error("خطا در دریافت داده‌ها:", error);
//         showError();
//         hideLoading();
//     }
// };



// const fetchStatus = async () => {
//     try {
//         const response = await fetch("https://api.daralsabaek.com/api/goldAndFundBalance/getMetalPrices");
//         if (!response.ok) {
//             throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);
//         }

//         const statusData = await response.json();

//         if (statusData.isSuccess && statusData.result) {
//             displayPrices(statusData); // تابع نمایش که قبلاً نوشتیم
//         } else {
//             console.error("ساختار داده نامعتبر است:", statusData);
//         }
//     } catch (error) {
//         console.error("خطا در گرفتن داده‌ها:", error);
//     }
// };


fetchPrices();
startCountdownFromBase();

const scheduleNextFetch = () => {
    const remaining = getRemainingSeconds(); // چند ثانیه تا نوبت بعدی مونده
    setTimeout(() => {
        fetchPrices();
        scheduleNextFetch(); // دوباره برنامه‌ریزی کن
    }, remaining * 1000);
};





const displayPrices = (data) => {
    const container = document.getElementById('currencyـfluctuations');

    const statusToTrend = (status) => {
        if (status === 1) return 'down';
        if (status === 2) return 'constant';
        if (status === 0) return 'up';
        return '';
    };

    // پیدا کردن رکوردهای فلزات
    const gold24 = data.result.find(m => m.metalType === 1);
    const silver = data.result.find(m => m.metalType === 2);
    const platinum = data.result.find(m => m.metalType === 3);

    const priceCards = [
        {
            group: "قیمت طلا",
            items: [
                { title: 'عیار ۲۴ (گرم)', value: gold24.buyPrice24, trend: statusToTrend(gold24.priceStatus) },
                { title: 'عیار ۲۲ (گرم)', value: gold24.buyPrice24 * 22 / 24, trend: statusToTrend(gold24.priceStatus) },
                { title: 'عیار ۲۱ (گرم)', value: gold24.buyPrice24 * 21 / 24, trend: statusToTrend(gold24.priceStatus) },
                { title: 'عیار ۱۸ (گرم)', value: gold24.buyPrice24 * 18 / 24, trend: statusToTrend(gold24.priceStatus) },
            ]
        },
        {
            group: "قیمت نقره",
            items: [
                { title: 'نقره (کیلوگرم)', value: silver.buyPrice24, trend: statusToTrend(silver.priceStatus) },
            ]
        },
        {
            group: "قیمت پلاتینیوم",
            items: [
                { title: 'پلاتینیوم (گرم)', value: platinum.buyPrice24, trend: statusToTrend(platinum.priceStatus) },
            ]
        }
    ];

    // ساخت HTML
    container.innerHTML = priceCards.map(group => `
    <span class="mt-1.5 mb-5 font-semibold text-gold text-sm">${group.group}</span>
    ${group.items.map(item => `
      <span class="flex justify-between items-center mb-2.5 pb-3.25 border-[#81818143] border-b">
        <span>${item.title}</span>
        <span class="flex items-center gap-1.75 font-semibold">
          <span class="text-base">${item.value.toLocaleString('fa-IR', { maximumFractionDigits: 3 })}</span>
          <span class="text-xs">د.ک</span>
          ${item.trend === 'up'
            ? `<svg xmlns="http://www.w3.org/2000/svg" width="12.388" height="7.538" viewBox="0 0 12.388 7.538">
        <path d="M6.77.778a1,1,0,0,1,1.459,0l5.192,5.538A1,1,0,0,1,12.692,8H2.308a1,1,0,0,1-.73-1.684Z"
            transform="translate(-1.306 -0.462)" fill="#3bc389" />
      </svg>`
            : item.trend === 'down'
                ? `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8">
        <path d="M6.77.778a1,1,0,0,1,1.459,0l5.192,5.538A1,1,0,0,1,12.692,8H2.308a1,1,0,0,1-.73-1.684Z"
            transform="translate(15 8) rotate(180)" fill="#f54845" />
      </svg>`
                : item.trend === 'constant' ? `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10">
        <rect width="15" height="3" rx="1.5" transform="translate(0 3)" fill="#d5933d"/>
        <rect width="15" height="10" fill="none"/>
      </svg>`: ''}
                </span>
            </span>
        `).join('')}
        </span>
      </span>
    `).join('')
}
`).join('');

  container.style.display = 'flex';
};


// const displayPrices = (data) => {
//     const container = document.getElementById('currencyـfluctuations');





//     const getTrend = (id, newValue) => {
//         if (previousPrices[id] === undefined) {
//             previousPrices[id] = newValue;
//             return ''; // اولین بار
//         }
//         let oldValue = previousPrices[id];
//         previousPrices[id] = newValue;
//         if (newValue > oldValue) return 'up';
//         if (newValue < oldValue) return 'down';
//         if (newValue === oldValue) return 'constant';
//         return '';
//     };
//     // --- جایگزین ساخت آیتم‌های priceCards ---
//     const priceCards = [
//         {
//             group: "قیمت طلا",
//             items: [
//                 { title: 'عیار ۲۴ (گرم)', value: data.purchaseGoldPrice, id: 'gold24', trend: getTrend('gold24', data.purchaseGoldPrice) },
//                 { title: 'عیار ۲۲ (گرم)', value: data.purchase22GoldPrice, id: 'gold22', trend: getTrend('gold22', data.purchase22GoldPrice) },
//                 { title: 'عیار ۲۱ (گرم)', value: data.purchase21GoldPrice, id: 'gold21', trend: getTrend('gold21', data.purchase21GoldPrice) },
//                 { title: 'عیار ۱۸ (گرم)', value: data.purchase18GoldPrice, id: 'gold18', trend: getTrend('gold18', data.purchase18GoldPrice) },
//             ]
//         },
//         {
//             group: "قیمت نقره",
//             items: [
//                 { title: 'نقره (کیلوگرم)', value: data.purchaseSilverPrice, id: 'silver', trend: getTrend('silver', data.purchaseSilverPrice) },
//             ]
//         },
//         {
//             group: "قیمت پلاتینیوم",
//             items: [
//                 { title: 'پلاتینیوم (گرم)', value: data.purchasePlatinumPrice, id: 'platinum', trend: getTrend('platinum', data.purchasePlatinumPrice) },
//             ]
//         }
//     ];


//     // ساخت HTML
//     container.innerHTML = priceCards.map(group => `
//         <span class="mt-1.5 mb-5 font-semibold text-gold text-sm">${group.group}</span>
//         ${group.items.map(item => `
//             <span class="flex justify-between items-center mb-2.5 pb-3.25 border-[#81818143] border-b">
//                 <span>${item.title}</span>
//                 <span class="flex items-center gap-1.75 font-semibold">
//                     <span class="text-base">${item.value.toLocaleString('fa-IR')}</span>
//                     <span class="text-xs">د.ک</span>
//                    ${item.trend === 'up'
//             ? `<svg xmlns="http://www.w3.org/2000/svg" width="12.388" height="7.538" viewBox="0 0 12.388 7.538">
//         <path d="M6.77.778a1,1,0,0,1,1.459,0l5.192,5.538A1,1,0,0,1,12.692,8H2.308a1,1,0,0,1-.73-1.684Z"
//             transform="translate(-1.306 -0.462)" fill="#3bc389" />
//       </svg>`
//             : item.trend === 'down'
//                 ? `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8">
//         <path d="M6.77.778a1,1,0,0,1,1.459,0l5.192,5.538A1,1,0,0,1,12.692,8H2.308a1,1,0,0,1-.73-1.684Z"
//             transform="translate(15 8) rotate(180)" fill="#f54845" />
//       </svg>`
//                 : item.trend === 'constant' ? `<svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10">
//         <rect width="15" height="3" rx="1.5" transform="translate(0 3)" fill="#d5933d"/>
//         <rect width="15" height="10" fill="none"/>
//       </svg>`: ''}
//                 </span>
//             </span>
//         `).join('')}
//     `).join('');

//     container.style.display = 'flex';
// };


// به‌روزرسانی زمان
const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    console.log(timeString);

    document.getElementById('homeUpdateTime').textContent = timeString;
};

// نمایش اطلاعات به‌روزرسانی
const showUpdateInfo = () => {
    document.getElementById('homeUpdateInfo').style.display = 'flex';
};

// مخفی کردن لودینگ
const hideLoading = () => {
    document.getElementById('loading').style.display = 'none';
};

// نمایش خطا
const showError = () => {
    document.getElementById('error').style.display = 'block';
    document.getElementById('loading').style.display = 'none';
    document.getElementById('homeUpdateInfo').style.display = 'none';
};

window.addEventListener('DOMContentLoaded', () => {
    fetchPrices(); // اجرای اولیه
    startCountdownFromBase(); // تایمر معکوس
    scheduleNextFetch(); // برنامه‌ریزی دقیق برای fetch بعدی
});
