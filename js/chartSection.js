//index page
let updateInterval = 15;
let countdownTimer = null;

//chart page
let currentMetal = 1; // طلا
let currentPeriod = document.getElementById('currencyـfluctuations') ? 0 : 6;

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
    }, 1000);
};

const displayPrices = (data) => {
    //index
    const currencyـfluctuations = document.getElementById('currencyـfluctuations');
    //chart
    const more_currencyـfluctuations = document.getElementById('more_currencyـfluctuations')

    const statusToTrend = (status) => {
        if (status === 1) return 'down';
        if (status === 2) return 'constant';
        if (status === 0) return 'up';
        return '';
    };

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
                { title: 'نقره (گرم)', value: silver.buyPrice24, trend: statusToTrend(silver.priceStatus) },
            ]
        },
        {
            group: "قیمت پلاتینیوم",
            items: [
                { title: 'پلاتینیوم (گرم)', value: platinum.buyPrice24, trend: statusToTrend(platinum.priceStatus) },
            ]
        }
    ];
    if (currencyـfluctuations) {
        currencyـfluctuations.innerHTML = priceCards.map(group => `
            <div class="metalGroup">
            <span class="mt-1.5 max-xl:mb-1.5 xl:mb-5 font-semibold block max-xl:w-full text-gold  text-sm">${group.group}</span>
            ${group.items.map(item => `
             <span class="flex justify-between max-xl:flex-col max-xl:items-start max-xl:gap-2.5 xl:items-center mb-2.5 pb-3.25 xl:border-[#81818143] xl:border-b">
                  <span>${item.title}</span>
                  <span class="flex max-xl:w-full items-center gap-1.75 font-semibold">
                       <span class="text-base">${item.value.toLocaleString('fa-IR', { maximumFractionDigits: 3 })}</span>
                       <span class="text-xs">د.ک</span>
                       <span class="max-xl:grow max-xl:flex max-xl:justify-end">
                          ${item.trend === 'up' ? `
                               <svg xmlns="http://www.w3.org/2000/svg" width="12.388" height="7.538" viewBox="0 0 12.388 7.538">
                                   <path d="M6.77.778a1,1,0,0,1,1.459,0l5.192,5.538A1,1,0,0,1,12.692,8H2.308a1,1,0,0,1-.73-1.684Z" transform="translate(-1.306 -0.462)" fill="#3bc389" />
                               </svg>
                          ` : item.trend === 'down' ? `
                             <svg xmlns="http://www.w3.org/2000/svg" width="15" height="8" viewBox="0 0 15 8">
                                <path d="M6.77.778a1,1,0,0,1,1.459,0l5.192,5.538A1,1,0,0,1,12.692,8H2.308a1,1,0,0,1-.73-1.684Z" transform="translate(15 8) rotate(180)" fill="#f54845" />
                             </svg>
                          `: item.trend === 'constant' ? `
                         <svg xmlns="http://www.w3.org/2000/svg" width="15" height="10" viewBox="0 0 15 10">
                            <rect width="15" height="3" rx="1.5" transform="translate(0 3)" fill="#d5933d"/>
                            <rect width="15" height="10" fill="none"/>
                         </svg>`: ''}
                         </span>
                  </span>
             </span>
            `).join('')}
             </div>`).join('');
    }
    if (more_currencyـfluctuations) {

        more_currencyـfluctuations.innerHTML = priceCards.map(group => `
    ${group.items.map(item => {
            const prefix = group.group === "قیمت طلا" ? "طلا " : "";
            return `
      <span class="flex items-start p-2.25 w-full flex-col bg-white dark:bg-karaka mb-2.5 max-ml:w-1/2 border-[#81818143] rounded-md border-e">
        ${prefix ? `<span class="text-xs flex items-center justify-start gap-1"><span class="text-gold">${prefix}</span>${item.title}</span>`
                    : `<span class="text-xs">${item.title}</span>`}
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
        `;
        }).join('')}
        </span>
      </span>
    `).join('')
    }
}

// به‌روزرسانی زمان
const updateTime = () => {
    const now = new Date();
    const timeString = now.toLocaleString('fa-IR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true
    });
    document.getElementById('homeUpdateTime').textContent = timeString;
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

const fetchChartData = async (metalSymbol = 1, periodType = 0) => {


    try {
        const response = await fetch(`https://api.daralsabaek.com/api/Chart/GetMetalPricesChartData?metalSymbol=${metalSymbol}&periodType=${periodType}`);
        if (!response.ok) throw new Error(`خطا در دریافت داده‌ها: ${response.status}`);

        const data = await response.json();
        console.log(data);


        // const originalTimes = data.rangeOfXaxis.map(timeStr => {
        //     const date = new Date(timeStr);
        //     // به timezone محلی کاربر تبدیل می‌شه
        //     return date.toLocaleString('en-US', {
        //         month: '2-digit',
        //         day: '2-digit',
        //         hour: '2-digit',
        //         minute: '2-digit',
        //         second: '2-digit'
        //     });
        // });
        const originalTimes = data.rangeOfXaxis.map(timeStr => {
            const date = new Date(timeStr);

            // بر اساس periodType فرمت متفاوت
            if (periodType >= 0 && periodType <= 2) {
                // فقط ساعت و دقیقه
                return date.toLocaleString('en-US', {
                    hour: '2-digit',
                    minute: '2-digit',
                    hour12: true
                });
            } else if (periodType >= 3 && periodType <= 5) {
                // روز مخفف + ساعت
                return date.toLocaleString('en-US', {
                    weekday: 'short',
                    hour: 'numeric',
                    minute: '2-digit',
                    hour12: true
                });
            } else {
                // تاریخ مخفف برای periodType >= 6
                return date.toLocaleString('en-US', {
                    day: '2-digit',
                    month: 'short',
                    year: '2-digit'
                });
            }
        });
        const xData = data.rangeOfXaxis.map(x => new Date(x).getTime());
        const yData = data.rangeOfYaxis;

        const rawMinY = Math.min(...yData);
        const rawMaxY = Math.max(...yData);
        const difference = rawMaxY - rawMinY;

        // محاسبه tickInterval بر اساس اختلاف داده‌ها
        let tickInterval;
        if (difference >= 10) {
            tickInterval = Math.ceil(difference / 4); // حداکثر 4 تیک
        } else if (difference >= 5) {
            tickInterval = difference / 3; // حداکثر 3 تیک
        } else if (difference >= 1) {
            tickInterval = difference / 4; // حداکثر 4 تیک
        } else if (difference >= 0.1) {
            tickInterval = difference / 3; // حداکثر 3 تیک
        } else if (difference >= 0.01) {
            tickInterval = difference / 4; // حداکثر 4 تیک
        } else {
            // برای اختلافات خیلی کم
            tickInterval = difference / 3 || 0.001;
        }

        // رند کردن tickInterval به عدد مناسب
        if (tickInterval >= 1) {
            tickInterval = Math.ceil(tickInterval);
        } else if (tickInterval >= 0.1) {
            tickInterval = Math.ceil(tickInterval * 10) / 10;
        } else if (tickInterval >= 0.01) {
            tickInterval = Math.ceil(tickInterval * 100) / 100;
        } else {
            tickInterval = Math.ceil(tickInterval * 1000) / 1000;
        }

        const minY = Math.floor(rawMinY / tickInterval) * tickInterval;
        const maxY = Math.ceil(rawMaxY / tickInterval) * tickInterval;

        const seriesData = xData.map((x, i) => [x, yData[i]]);

        Highcharts.chart('container', {
            chart: {
                type: 'area',
                backgroundColor: 'var(--color-background)',
                spacingRight: 30,
                marginRight: 30,
            },
            title: {
                text: 'نمودار قیمت فلزات',
                align: 'center'
            },
            // xAxis: {
            //     title: { text: 'بازه زمانی' },
            //     type: 'datetime',
            //     tickLength: 0,
            //     min: Math.min(...xData),
            //     max: Math.max(...xData),
            //     startOnTick: false,
            //     endOnTick: false,
            //     tickPixelInterval: 100,
            //     labels: {
            //         formatter: function () {
            //             // به جای findIndex از map استفاده می‌کنیم
            //             const timestamps = data.rangeOfXaxis.map(x => new Date(x).getTime());
            //             const closestIndex = timestamps.reduce((closest, current, index) => {
            //                 const currentDiff = Math.abs(current - this.value);
            //                 const closestDiff = Math.abs(timestamps[closest] - this.value);
            //                 return currentDiff < closestDiff ? index : closest;
            //             }, 0);

            //             return originalTimes[closestIndex] || '';
            //         },
            //         overflow: 'allow',
            //         step: 1 // اطمینان از نمایش همه لیبل‌ها
            //     }
            // },
            xAxis: {
                title: { text: 'بازه زمانی' },
                type: 'datetime',
                tickLength: 0,
                // tickPositions: xData,
                min: Math.min(...xData),
                max: Math.max(...xData),
                startOnTick: false,
                endOnTick: false,
                // tickPixelInterval: 100,
                labels: {
                    formatter: function () {
                        const timestamps = data.rangeOfXaxis.map(x => new Date(x).getTime());
                        const closestIndex = timestamps.reduce((closest, current, index) => {
                            const currentDiff = Math.abs(current - this.value);
                            const closestDiff = Math.abs(timestamps[closest] - this.value);
                            return currentDiff < closestDiff ? index : closest;
                        }, 0);

                        return originalTimes[closestIndex] || '';
                    },
                    // overflow: 'allow',
                    step: 1,
                    // چرخش برای periodType >= 3
                    rotation: periodType >= 3 ? -45 : 0,
                    style: {
                        fontSize: '10px'
                    }
                }
            },
            yAxis: {
                title: { text: 'قیمت گرم به دینار کویت' },
                tickInterval: tickInterval,
                min: minY,
                max: maxY,
                startOnTick: true,
                endOnTick: true,
                labels: {
                    formatter: function () {
                        // تعیین دقت نمایش بر اساس مقدار tickInterval
                        let decimals = 3;
                        if (tickInterval >= 1) decimals = 0;
                        else if (tickInterval >= 0.1) decimals = 1;
                        else if (tickInterval >= 0.01) decimals = 2;
                        else decimals = 3;

                        return this.value.toFixed(decimals);
                    }
                }
            },
            tooltip: {
                xDateFormat: '%H:%M:%S',
                shared: true,
                pointFormatter: function () {
                    return `<b>${this.y.toFixed(4)}</b>`;
                }
            },
            plotOptions: {
                area: {
                    lineWidth: 1,
                    marker: {
                        enabled: true,
                        radius: 2,
                        lineWidth: 0.5,
                        lineColor: '#ffc700',
                        fillColor: '#ffc700',
                        states: {
                            hover: {
                                enabled: true,
                                lineColor: '#ffffff',
                                lineWidth: 2
                            }
                        }
                    },
                    fillOpacity: 0.4
                }
            },
            series: [{
                name: '',
                data: seriesData,
                color: '#f1c61a',
                fillColor: {
                    linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
                    stops: [
                        [0, 'var(--color-topColor)'],
                        [1, 'var(--color-bottomColor)']
                    ]
                }
            }]
        });

    }
    catch (error) {
        console.error("خطا در گرفتن داده‌ها:", error);
    }
};

fetchPrices();
// fetchChartData(currentMetal, currentPeriod);
startCountdownFromBase();

const scheduleNextFetch = () => {
    const remaining = getRemainingSeconds();
    setTimeout(() => {
        fetchPrices();
        fetchChartData(currentMetal, currentPeriod);
        scheduleNextFetch();
    }, remaining * 1000);
};

// نمایش اطلاعات به‌روزرسانی
const showUpdateInfo = () => {
    document.getElementById('homeUpdateInfo').style.display = 'inline-flex';
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
    fetchChartData(currentMetal, currentPeriod);
    startCountdownFromBase(); // تایمر معکوس
    scheduleNextFetch(); // برنامه‌ریزی دقیق برای fetch بعدی
});

// fetchChartData(currentMetal, currentPeriod);

const metalButtons = document.querySelectorAll(".metalBtn");

metalButtons.forEach(btn => {
    btn.addEventListener("click", () => {
        metalButtons.forEach(b => b.classList.remove("activeMetal"));

        btn.classList.add("activeMetal");

        if (btn.id === "btn-gold") currentMetal = 1;
        if (btn.id === "btn-silver") currentMetal = 2;
        if (btn.id === "btn-platinum") currentMetal = 3;

        fetchChartData(currentMetal, currentPeriod);
    });
});

const periodButtons = document.querySelectorAll(".periodBtn");
periodButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        periodButtons.forEach(b => b.classList.remove("activePeriod"));
        btn.classList.add("activePeriod");

        currentPeriod = index; // 10m=0, 1h=1, 6h=2, 1d=3, 3d=4, 7d=5
        fetchChartData(currentMetal, currentPeriod);
    });
});

const morePeriodButtons = document.querySelectorAll(".morePeriodBtn");
morePeriodButtons.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        morePeriodButtons.forEach(b => b.classList.remove("moreActivePeriod"));
        btn.classList.add("moreActivePeriod");

        currentPeriod = index + 6; // شروع از 6 // 1M=6, 3M=7, 6M=8, 1Y=9
        fetchChartData(currentMetal, currentPeriod);
    });
});







