// ==========================================
// 1. პროდუქტების მონაცემთა ბაზა
// ==========================================
const products = [
  
    {
        id: 1,
        title: {
            ka: "საბეჭდი ქაღალდი A4 (500 ფურცლიანი) Double A",
            en: "A4 Copy Paper (500 sheets) Double A",
            ru: "Бумага для печати А4 (500 листов) Double A"
        },
        category: "paper",
        price: 14.00,
        inStock: true,
        images: ["images/images.jpg"],
        brands: ["Double A"]
    },
    {
        id: 2,
        title: {
            ka: "საბეჭდი ქაღალდი A4 (500 ფურცლიანი) Ballet",
            en: "A4 Copy Paper (500 sheets) Ballet",
            ru: "Бумага для печати А4 (500 листов) Ballet"
        },
        category: "paper",
        price: 14.00,
        inStock: true,
        images: ["images/furceli2.jpg"],
        brands: ["Ballet"]
    },
    {
        id: 3,
        title: {
            ka: "საბეჭდი ქაღალდი A4 (500 ფურცლიანი) PROJECTA",
            en: "A4 Copy Paper (500 sheets) PROJECTA",
            ru: "Бумага для печати А4 (500 листов) PROJECTA"
        },
        category: "paper",
        price: 14.00,
        inStock: true, 
        images: ["images/furceli 3.jpg"],
        brands: ["PROJECTA"]
    },
    {
        id: 4,
        title: {
            ka: "ბაინდერი A4",
            en: "Ring Binder A4",
            ru: "Папка-регистратор А4"
        },
        category: "office",
        price: 3.50,
        inStock: true,
        images: ["images/saqagalde7.jpg"],
        sizes: [{ ka: "განიერი", en: "Wide", ru: "Широкий" }],
        colors: [{ ka: "ლურჯი", en: "Blue", ru: "Синий" }]
    },
    {
        id: 5,
        title: {
            ka: "ბაინდერი A4",
            en: "Ring Binder A4",
            ru: "Папка-регистратор А4"
        },
        category: "office",
        price: 3.50,
        inStock: true,
        images: ["images/saqagalde12.jpg"],
        sizes: [{ ka: "განიერი", en: "Wide", ru: "Широкий" }],
        colors: [{ ka: "შავი", en: "Black", ru: "Черный" }]
    },
    {
        id: 6,
        title: {
            ka: "ბაინდერი A4",
            en: "Ring Binder A4",
            ru: "Папка-регистратор А4"
        },
        category: "office",
        price: 4.00,
        inStock: true, 
        images: ["images/saqagalde8.jpg"],
        sizes: [{ ka: "განიერი", en: "Wide", ru: "Широкий" }],
        colors: [{ ka: "მწვანე", en: "Green", ru: "Зеленый" }]
    },
    {
        id: 7,
        title: {
            ka: "ბაინდერი A4",
            en: "Ring Binder A4",
            ru: "Папка-регистратор А4"
        },
        category: "office",
        price: 3.00,
        inStock: true,
        images: ["images/saqagalde13.jpg"],
        sizes: [{ ka: "ვიწრო", en: "Narrow", ru: "Узкий" }],
        colors: [{ ka: "ლურჯი", en: "Blue", ru: "Синий" }]
    },
    {
        id: 8,
        title: {
            ka: "ბაინდერი A4",
            en: "Ring Binder A4",
            ru: "Папка-регистратор А4"
        },
        category: "office",
        price: 3.00,
        inStock: true,
        images: ["images/saqagalde9.jpg"],
        sizes: [{ ka: "ვიწრო", en: "Narrow", ru: "Узкий" }],
        colors: [{ ka: "შავი", en: "Black", ru: "Черный" }]
    },
    {
        id: 9,
        title: {
            ka: "ბაინდერი A4",
            en: "Ring Binder A4",
            ru: "Папка-регистратор А4"
        },
        category: "office",
        price: 4.00,
        inStock: true,
        images: ["images/saqagalde14.jpg"],
        sizes: [{ ka: "ვიწრო", en: "Narrow", ru: "Узкий" }],
        colors: [{ ka: "მწვანე", en: "Green", ru: "Зеленый" }]
    },
    {
        id: 10,
        title: {
            ka: "ბაინდერი A5",
            en: "Ring Binder A5",
            ru: "Папка-регистратор А5"
        },
        category: "office",
        price: 4.00,
        inStock: true, 
        images: ["images/saqagalde a5.jpg"]
    },
    {
        id: 11,
        title: {
            ka: "ქაღალდი ქსეროქსის A3 80გრ. 500 ფურცელი PROJECTA",
            en: "A3 Copy Paper 80g 500 sheets PROJECTA",
            ru: "Бумага ксероксная А3 80г 500 листов PROJECTA"
        },
        category: "paper",
        price: 16.50,
        inStock: true,
        images: ["images/furceli1.jpg"],
        brands: [{ name: "Projecta", price: 16.50 }]
    },
    {
        id: 12,
        title: {
            ka: "ქაღალდი ქსეროქსის A3 80გრ. 500 ფურცელი Double A",
            en: "A3 Copy Paper 80g 500 sheets Double A",
            ru: "Бумага ксероксная А3 80г 500 листов Double A"
        },
        category: "paper",
        price: 28.50,
        inStock: true,
        images: ["images/images.jpg"],
        brands: [{ name: "Double A", price: 28.50 }]
    },
    {
        id: 13,
        title: {
            ka: "ბლოკნოტი A5 40 ფურცელი",
            en: "Notebook A5 40 sheets",
            ru: "Блокнот А5 40 листов"
        },
        category: "stationary",
        price: 1.30,
        inStock: true,
        images: ["images/bloknoti 1.jpg"],
        sizes: [{ name: "40ფ A5", price: 1.30 }]
    },
    {
        id: 14,
        title: {
            ka: "ბლოკნოტი A5 40 ფურცელი ზამბარით",
            en: "Spiral Notebook A5 40 sheets",
            ru: "Блокнот на спирали А5 40 листов"
        },
        price: 1.30,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti2.jpg"]
    }, 
    {
        id: 15,
        title: {
            ka: "ბლოკნოტი A5 40 ფურცელი ზედა ზამბარით",
            en: "Top Spiral Notebook A5 40 sheets",
            ru: "Блокнот А5 40 листов на верхней спирали"
        },
        price: 1.30,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti3.jpg"]
    }, 
    {
        id: 16,
        title: {
            ka: "ბლოკნოტი A5 40 ფურცელი ზედა ზამბარით",
            en: "Top Spiral Notebook A5 40 sheets",
            ru: "Блокнот А5 40 листов на верхней спирали"
        },
        price: 1.30,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti4.jpg"]
    }, 
    {
        id: 17,
        title: {
            ka: "ბლოკნოტი A6 70 სუფთა ფურცელი Deli",
            en: "Notebook A6 70 blank sheets Deli",
            ru: "Блокнот А6 70 чистых листов Deli"
        },
        price: 1.50,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti5.jpg"]
    }, 
    {
        id: 18,
        title: {
            ka: "ბლოკნოტი A6 60 ფურცელი ზედა ზამბარით Comix",
            en: "Top Spiral Notebook A6 60 sheets Comix",
            ru: "Блокнот А6 60 листов на верхней спирали Comix"
        },
        price: 2.00,
        category: "stationary",
        inStock: true, 
        images: ["images/saqagalde6.jpg"]
    }, 
    {
        id: 19,
        title: {
            ka: "ბლოკნოტი A6 50 ფურცელი Deli Lexicon",
            en: "Notebook A6 50 sheets Deli Lexicon",
            ru: "Блокнот А6 50 листов Deli Lexicon"
        },
        price: 2.30,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti7.jpg"]
    }, 
    {
        id: 20,
        title: {
            ka: "ბლოკნოტი A6 80 ფურცელი Deli Lexicon",
            en: "Notebook A6 80 sheets Deli Lexicon",
            ru: "Блокнот А6 80 листов Deli Lexicon"
        },
        price: 2.50,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti7.jpg"]
    }, 
    {
        id: 21,
        title: {
            ka: "საკანცელარიო ჟურნალი A5 60 ფურცელი გვერდითა ზამბარით Anhudi Notebook",
            en: "Stationery Journal A5 60 sheets Side Spiral Anhudi Notebook",
            ru: "Канцелярский журнал А5 60 листов на боковой спирали Anhudi Notebook"
        },
        price: 2.00,
        category: "stationary",
        inStock: true,
        images: ["images/sakancelariojur1.jpg"]
    }, 
    {
        id: 22,
        title: {
            ka: "ბლოკნოტი A5 70 ფურცელი ზედა ზამბარით Deli Report pad",
            en: "Top Spiral Notebook A5 70 sheets Deli Report pad",
            ru: "Блокнот А5 70 листов на верхней спирали Deli Report pad"
        },
        price: 2.60,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti8.jpg"]
    }, 
    {
        id: 23,
        title: {
            ka: "ბლოკნოტი A5 96 ფურცელი ზედა ზამბარით Deli Basic+note",
            en: "Top Spiral Notebook A5 96 sheets Deli Basic+note",
            ru: "Блокнот А5 96 листов на верхней спирали Deli Basic+note"
        },
        price: 3.70,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti9.jpg"]
    }, 
    {
        id: 24,
        title: {
            ka: "ბლოკნოტი A6 80 ფურცელი ზედა ზამბარით Deli შავი",
            en: "Top Spiral Notebook A6 80 sheets Deli Black",
            ru: "Блокнот А6 80 листов на верхней спирали Deli Черный"
        },
        price: 3.90,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti10.jpg"]
    }, 
    {
        id: 25,
        title: {
            ka: "ბლოკნოტი A6 96 ფურცელი რეზინით Deli ლურჯი",
            en: "Notebook A6 96 sheets with Elastic Band Deli Blue",
            ru: "Блокнот А6 96 листов с резинкой Deli Синий"
        },
        price: 4.20,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti11.jpg"]
    },

    {
        id: 26,
        title: {
            ka: "ბლოკნოტი A5 80 ფურცელი ტყავის ყდა Deli",
            en: "Notebook A5 80 sheets Leather Cover Deli",
            ru: "Блокнот А5 80 листов Кожаный переплет Deli"
        },
        price: 4.70,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti12.jpg"]
    }, 
    {
        id: 27,
        title: {
            ka: "ბლოკნოტი 32K 100 ფურცელი Deli",
            en: "Notebook 32K 100 sheets Deli",
            ru: "Блокнот 32К 100 листов Deli"
        },
        price: 26.00,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti13.jpg"]
    }, 
    {
        id: 28,
        title: {
            ka: "ბლოკნოტი A5 80 ფურცელი ტყავის ყდა Deli",
            en: "Notebook A5 80 sheets Leather Cover Deli",
            ru: "Блокнот А5 80 листов Кожаный переплет Deli"
        },
        price: 8.10,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti14.jpg"]
    }, 
    {
        id: 29,
        title: {
            ka: "ბლოკნოტი ყოველდღიური IVORY",
            en: "Daily Planner IVORY",
            ru: "Ежедневник IVORY"
        },
        price: 2.60,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti15.jpg"],
        colors: [
            { ka: "შავი", en: "Black", ru: "Черный" },
            { ka: "წითელი", en: "Red", ru: "Красный" },
            { ka: "ყვითელი", en: "Yellow", ru: "Желтый" },
            { ka: "მწვანე", en: "Green", ru: "Зеленый" },
            { ka: "ლურჯი", en: "Blue", ru: "Синий" }
        ]
    },
    {
        id: 30,
        title: {
            ka: "ბლოკნოტი B5 120 ფურცელი",
            en: "Notebook B5 120 sheets",
            ru: "Блокнот B5 120 листов"
        },
        price: 8.10,
        category: "stationary",
        inStock: true,
        images: ["images/bloknoti16.jpg"]
    }, 
    {
        id: 31,
        title: {
            ka: "ბლოკნოტი A5 120 ფურცელი ჩამკეტით Deli",
            en: "Notebook A5 120 sheets with Lock Deli",
            ru: "Блокнот А5 120 листов с защелкой Deli"
        },
        price: 12.00,
        category: "stationary",
        inStock: true,
        description: {
            ka: "ყუთში რაოდენობა - 40, შეფუთვაში რაოდენობა - 12",
            en: "Quantity per box - 40, quantity per pack - 12",
            ru: "Количество в коробке - 40, количество в упаковке - 12"
        },
        images: ["images/bloknoti17.jpg"]
    }, 
    {
        id: 32,
        title: {
            ka: "ფანქარი 10 ცალი HB Deli",
            en: "Pencil 10 pcs HB Deli",
            ru: "Карандаш 10 шт HB Deli"
        },
        price: 4.90,
        category: "writing",
        inStock: true,
        images: ["images/kalami1.jpg"]
    }, 
    {
        id: 33,
        title: {
            ka: "ფანქარი 12ც Deli",
            en: "Pencil 12 pcs Deli",
            ru: "Карандаш 12 шт Deli"
        },
        price: 3.20,
        category: "writing",
        inStock: true,
        images: ["images/kalami2.jpg"]
    }, 
    {
        id: 34,
        title: {
            ka: "ფანქარი 2B (12 ცალი) HB Deli",
            en: "Pencil 2B (12 pcs) HB Deli",
            ru: "Карандаш 2B (12 шт) HB Deli"
        },
        price: 2.50,
        category: "writing",
        inStock: true,
        images: ["images/fanqari3.png"]
    }, 
    {
        id: 35,
        title: {
            ka: "ფანქარი HB (48 ცალიანი შეკვრა) Deli",
            en: "Pencil HB (48 pcs pack) Deli",
            ru: "Карандаш HB (упаковка 48 шт) Deli"
        },
        price: 15.00,
        category: "writing",
        inStock: true,
        images: ["images/fanqari4.jpg"]
    }, 
    {
        id: 36,
        title: {
            ka: "ფანქარი 12 ცალი HB Deli",
            en: "Pencil 12 pcs HB Deli",
            ru: "Карандаш 12 шт HB Deli"
        },
        price: 3.30,
        category: "writing",
        inStock: true,
        images: ["images/fanqari5.jpg"]
    },
    {
        id: 37,
        title: {
            ka: "ფანქარი SKETCHING PENCIL Deli",
            en: "Sketching Pencil Deli",
            ru: "Карандаш для эскизов Deli"
        },
        price: 480.00,
        category: "writing",
        inStock: true,
        images: ["images/fanqari6.jpg"]
    },
    {
        id: 38,
        title: {
            ka: "ფანქარი SKETCHING PENCIL (27ცალი) Deli",
            en: "Sketching Pencil Set (27 pcs) Deli",
            ru: "Набор карандашей для эскизов (27 шт) Deli"
        },
        price: 26.00,
        category: "writing",
        inStock: true,
        images: ["images/fanqari7.jpg"]
    },
    {
        id: 39,
        title: {
            ka: "ფანქარი HB 12ც შეკვრაში Deli",
            en: "Pencil HB 12 pcs per pack Deli",
            ru: "Карандаш HB 12 шт в упаковке Deli"
        },
        price: 2.70,
        category: "writing",
        inStock: true,
        images: ["images/fanqari8.jpg"]
    },
    {
        id: 40,
        title: {
            ka: "ფანქარი 2B (12 ცალი) HB Deli",
            en: "Pencil 2B (12 pcs) HB Deli",
            ru: "Карандаш 2B (12 шт) HB Deli"
        },
        price: 4.50,
        category: "writing",
        inStock: true,
        images: ["images/fanqari9.jpg"]
    },
    {
        id: 41,
        title: {
            ka: "კალამი ბურთულიანი 0.7MM შავი DELI",
            en: "Ballpoint Pen 0.7mm Black DELI",
            ru: "Шариковая ручка 0.7мм Черная DELI"
        },
        price: 0.30,
        category: "writing",
        inStock: true,
        images: ["images/kalami3.jpg"]
    },
    {
        id: 42,
        title: {
            ka: "კალამი ბურთულიანი 0.7MM შავი DELI",
            en: "Ballpoint Pen 0.7mm Black DELI",
            ru: "Шариковая ручка 0.7мм Черная DELI"
        },
        price: 0.40,
        category: "writing",
        inStock: true,
        images: ["images/kalami4.jpg"]
    },
    {
        id: 43,
        title: {
            ka: "კალამი ბურთულიანი BULLET TIP 0.7MM BLUE DELI",
            en: "Ballpoint Pen Bullet Tip 0.7mm Blue DELI",
            ru: "Шариковая ручка Bullet Tip 0.7мм Синяя DELI"
        },
        price: 0.20,
        category: "writing",
        inStock: true,
        images: ["images/kalami5.jpg"]
    },
    {
        id: 44,
        title: {
            ka: "კალამი ბურთულიანი 1MM BLUE DELI",
            en: "Ballpoint Pen 1mm Blue DELI",
            ru: "Шариковая ручка 1мм Синяя DELI"
        },
        price: 0.30,
        category: "writing",
        inStock: true,
        images: ["images/kalami6.jpg"]
    },
    {
        id: 45,
        title: {
            ka: "კალამი ბურთულიანი 0.7MM RED DELI",
            en: "Ballpoint Pen 0.7mm Red DELI",
            ru: "Шариковая ручка 0.7мм Красная DELI"
        },
        price: 0.20,
        category: "writing",
        inStock: true,
        images: ["images/kalami7.jpg"]
    },
    {
        id: 46,
        title: {
            ka: "კალამი ბურთულიანი 0.7MM RED DELI",
            en: "Ballpoint Pen 0.7mm Red DELI",
            ru: "Шариковая ручка 0.7мм Красная DELI"
        },
        price: 0.30,
        category: "writing",
        inStock: true,
        images: ["images/kalami8.jpg"]
    },
    {
        id: 47,
        title: {
            ka: "კალამი ბურთულიანი 0.7MM Q25BL DELI",
            en: "Ballpoint Pen 0.7mm Q25BL DELI",
            ru: "Шариковая ручка 0.7мм Q25BL DELI"
        },
        price: 0.40,
        category: "writing",
        inStock: true,
        images: ["images/kalami9.jpg"]
    },
    {
        id: 48,
        title: {
            ka: "კალამი ბურთულიანი 0.7MM წვერით PIANO",
            en: "Ballpoint Pen 0.7mm Tip PIANO",
            ru: "Шариковая ручка 0.7мм PIANO"
        },
        price: 0.70,
        category: "writing",
        inStock: true,
        images: ["images/kalami10.jpg"]
    },
    {
        id: 49,
        title: {
            ka: "კალამი 555",
            en: "Pen 555",
            ru: "Ручка 555"
        },
        price: 0.15,
        category: "writing",
        inStock: true,
        images: ["images/kalami11.jpg"]
    },
    {
        id: 50,
        title: {
            ka: "ბურთულიანი კალმისტარი MONTEX TRICON (50)",
            en: "Ballpoint Pen MONTEX TRICON (50)",
            ru: "Шариковая ручка MONTEX TRICON (50)"
        },
        price: 0.40,
        category: "writing",
        inStock: true,
        images: ["images/kalami12.jpg"]
    },
    {
        id: 51,
        title: {
            ka: "ბურთულიანი კალამი MONTEX STYLISH",
            en: "Ballpoint Pen MONTEX STYLISH",
            ru: "Шариковая ручка MONTEX STYLISH"
        },
        price: 0.80,
        category: "writing",
        inStock: true,
        images: ["images/kalami13.jpg"]
    },
    {
        id: 52,
        title: {
            ka: "კალამი ბურთულიანი BULLET TIP 0.7MM BLACK Q50-BK DELI",
            en: "Ballpoint Pen Bullet Tip 0.7mm Black Q50-BK DELI",
            ru: "Шариковая ручка Bullet Tip 0.7мм Черная Q50-BK DELI"
        },
        price: 1.20,
        category: "writing",
        inStock: true,
        images: ["images/kalami14.jpg"]
    },
    {
        id: 53,
        title: {
            ka: "კალამი ბურთულიანი BULLET TIP 0.7MM BLACK Q57-BK DELI",
            en: "Ballpoint Pen Bullet Tip 0.7mm Black Q57-BK DELI",
            ru: "Шариковая ручка Bullet Tip 0.7мм Черная Q57-BK DELI"
        },
        price: 1.30,
        category: "writing",
        inStock: true,
        images: ["images/kalami15.jpg"]
    },
    {
        id: 54,
        title: {
            ka: "კალამი მელნიანი GEL PEN 0.7MM G11-BK DELI",
            en: "Gel Pen 0.7mm G11-BK DELI",
            ru: "Гелевая ручка 0.7мм G11-BK DELI"
        },
        price: 1.10,
        category: "writing",
        inStock: true,
        images: ["images/kalami16.jpg"]
    },
    {
        id: 55,
        title: {
            ka: "კალამი მელნიანი GEL PEN 0.7MM G11-BL DELI",
            en: "Gel Pen 0.7mm G11-BL DELI",
            ru: "Гелевая ручка 0.7мм G11-BL DELI"
        },
        price: 1.10,
        category: "writing",
        inStock: true,
        images: ["images/kalami17.jpg"]
    },
    {
        id: 56,
        title: {
            ka: "კალამი სამაგრით GEL PEN 0.5MM წვერით DELI STATIONARY შავი",
            en: "Gel Pen with Clip 0.5mm Tip DELI Black",
            ru: "Гелевая ручка с зажимом 0.5мм DELI Черная"
        },
        price: 3.50,
        category: "writing",
        inStock: true,
        images: ["images/kalami18.jpg"]
    },
    {
        id: 57,
        title: {
            ka: "გელიანი კალამი 0.5MM წვერით ლურჯი DELI STATIONARY",
            en: "Gel Pen 0.5mm Tip Blue DELI",
            ru: "Гелевая ручка 0.5мм Синяя DELI"
        },
        price: 0.70,
        category: "writing",
        inStock: true,
        images: ["images/kalami19.jpg"]
    },
    {
        id: 58,
        title: {
            ka: "გელიანი კალამი 0.5MM წვერით შავი DELI STATIONARY",
            en: "Gel Pen 0.5mm Tip Black DELI",
            ru: "Гелевая ручка 0.5мм Черная DELI"
        },
        price: 10.00,
        category: "writing",
        inStock: true,
        images: ["images/kalami20.jpg"]
    },
    {
        id: 60,
        title: {
            ka: "პერმანენტ მარკერი ორმხრივი წვერით DELI STATIONARY",
            en: "Double-ended Permanent Marker DELI",
            ru: "Двусторонний перманентный маркер DELI"
        },
        price: 0.80,
        category: "writing",
        inStock: true,
        images: ["images/markeri1.png"]
    },
    {
        id: 61,
        title: {
            ka: "პერმანენტ მარკერი ორმხრივი წვერით DELI STATIONARY",
            en: "Double-ended Permanent Marker DELI",
            ru: "Двусторонний перманентный маркер DELI"
        },
        price: 0.80,
        category: "writing",
        inStock: true,
        images: ["images/markeri2.jpg"]
    },
    {
        id: 63,
        title: {
            ka: "პერმანენტ მარკერი ორმხრივი წვერით DELI U72-BK",
            en: "Double-ended Permanent Marker DELI U72-BK",
            ru: "Двусторонний перманентный маркер DELI U72-BK"
        },
        price: 1.00,
        category: "writing",
        inStock: true,
        images: ["images/markeri3.jpg"]
    },
    {
        id: 64,
        title: {
            ka: "პერმანენტ მარკერი ორმხრივი წვერით DELI U72-BL",
            en: "Double-ended Permanent Marker DELI U72-BL",
            ru: "Двусторонний перманентный маркер DELI U72-BL"
        },
        price: 1.00,
        category: "writing",
        inStock: true,
        images: ["images/markeri4.jpg"]
    },
    {
        id: 65,
        title: {
            ka: "პერმანენტ მარკერი ორმხრივი წვერით DELI U72-RD",
            en: "Double-ended Permanent Marker DELI U72-RD",
            ru: "Двусторонний перманентный маркер DELI U72-RD"
        },
        price: 1.00,
        category: "writing",
        inStock: true,
        images: ["images/markeri5.jpg"]
    },
    {
        id: 66,
        title: {
            ka: "პერმანენტ მარკერი DELI U216-BK",
            en: "Permanent Marker DELI U216-BK",
            ru: "Перманентный маркер DELI U216-BK"
        },
        price: 0.50,
        category: "writing",
        inStock: true,
        images: ["images/markeri6.jpg"]
    },
    {
        id: 67,
        title: {
            ka: "ტექსტ მარკერი DELI U366-OR ORANGE",
            en: "Highlighter DELI U366-OR Orange",
            ru: "Текстовыделитель DELI U366-OR Оранжевый"
        },
        price: 0.80,
        category: "writing",
        inStock: true,
        images: ["images/markeri7.jpg"]
    },
    {
        id: 68,
        title: {
            ka: "ტექსტ მარკერი DELI U366-GN GREEN",
            en: "Highlighter DELI U366-GN Green",
            ru: "Текстовыделитель DELI U366-GN Зеленый"
        },
        price: 0.80,
        category: "writing",
        inStock: true,
        images: ["images/markeri8.jpg"]
    },
    {
        id: 69,
        title: {
            ka: "ტექსტ მარკერი DELI EU356-OR ORANGE",
            en: "Highlighter DELI EU356-OR Orange",
            ru: "Текстовыделитель DELI EU356-OR Оранжевый"
        },
        price: 0.90,
        category: "writing",
        inStock: true,
        images: ["images/markeri9.jpg"]
    },
    {
        id: 70,
        title: {
            ka: "ტექსტ მარკერი DELI U35460 ORANGE",
            en: "Highlighter DELI U35460 Orange",
            ru: "Текстовыделитель DELI U35460 Оранжевый"
        },
        price: 0.90,
        category: "writing",
        inStock: true,
        images: ["images/markeri10.jpg"]
    },
    {
        id: 71,
        title: {
            ka: "დაფის მარკერი DELI STATIONARY ლურჯი",
            en: "Whiteboard Marker DELI Blue",
            ru: "Маркер для доски DELI Синий"
        },
        price: 0.80,
        category: "writing",
        inStock: true,
        images: ["images/markeri11.jpg"]
    },
    {
        id: 72,
        title: {
            ka: "დაფის მარკერი DELI ლურჯი U00630",
            en: "Whiteboard Marker DELI Blue U00630",
            ru: "Маркер для доски DELI Синий U00630"
        },
        price: 0.70,
        category: "writing",
        inStock: true,
        images: ["images/markeri12.jpg"]
    },
    {
        id: 73,
        title: {
            ka: "პერმანენტული მარკერი DELI STATIONARY ლურჯი",
            en: "Permanent Marker DELI Blue",
            ru: "Перманентный маркер DELI Синий"
        },
        price: 0.60,
        category: "writing",
        inStock: true,
        images: ["images/markeri13.jpg"]
    },
    {
        id: 74,
        title: {
            ka: "ტექსტ მარკერი DELI S621/P",
            en: "Highlighter DELI S621/P",
            ru: "Текстовыделитель DELI S621/P"
        },
        price: 0.70,
        category: "writing",
        inStock: true,
        images: ["images/markeri14.jpg"]
    },
    {
        id: 75,
        title: {
            ka: "ტექსტმარკერის ნაკრები 4 ფერიანი DELI STATIONARY",
            en: "Highlighter Set 4 Colors DELI",
            ru: "Набор текстовыделителей 4 цвета DELI"
        },
        price: 4.00,
        category: "writing",
        inStock: true,
        images: ["images/markeri15.png"]
    },
    {
        id: 76,
        title: {
            ka: "დაფის მარკერი წითელი U00640 DELI",
            en: "Whiteboard Marker Red U00640 DELI",
            ru: "Маркер для доски Красный U00640 DELI"
        },
        price: 0.70,
        category: "writing",
        inStock: true,
        images: ["images/markeri16.jpg"]
    },
    {
        id: 77,
        title: {
            ka: "სახაზავი დრეკადი 20სმ DELI STATIONARY",
            en: "Flexible Ruler 20cm DELI",
            ru: "Линейка гибкая 20см DELI"
        },
        price: 1.30,
        category: "stationary",
        inStock: true,
        images: ["images/saxazavi1.jpg"]
    },
    {
        id: 78,
        title: {
            ka: "ხის სახაზავი 20სმ Можга",
            en: "Wooden Ruler 20cm Mozhga",
            ru: "Линейка деревянная 20см Можга"
        },
        price: 0.50,
        category: "stationary",
        inStock: true,
        images: ["images/saxazavi2.jpg"]
    },
    {
        id: 79,
        title: {
            ka: "სახაზავი ლითონის 50სმ Deli Stationery",
            en: "Metal Ruler 50cm Deli",
            ru: "Линейка металлическая 50см Deli"
        },
        price: 5.50,
        category: "stationary",
        inStock: true,
        images: ["images/saxazavi3.jpg"]
    },
    {
        id: 80,
        title: {
            ka: "სახაზავი 30სმ H11 DELI",
            en: "Ruler 30cm H11 DELI",
            ru: "Линейка 30см H11 DELI"
        },
        price: 0.80,
        category: "stationary",
        inStock: true,
        images: ["images/saxazavi4.jpg"]
    },
    {
        id: 81,
        title: {
            ka: "სახაზავების ნაკრები Deli Stationery",
            en: "Ruler Set Deli",
            ru: "Набор линеек Deli"
        },
        price: 5.00,
        category: "stationary",
        inStock: true,
        images: ["images/saxazavi5.png"]
    },
    {
        id: 82,
        title: {
            ka: "ლითონის სახაზავი 20სმ Deli Stationery",
            en: "Metal Ruler 20cm Deli",
            ru: "Линейка металлическая 20см Deli"
        },
        price: 2.00,
        category: "stationary",
        inStock: true,
        images: ["images/saxazavi6.jpg"]
    },
    {
        id: 83,
        title: {
            ka: "მექანიკური სათლელი Deli Stationery",
            en: "Mechanical Pencil Sharpener Deli",
            ru: "Механическая точилка Deli"
        },
        price: 11.20,
        category: "stationary",
        inStock: true,
        images: ["images/satleli1.png"]
    },
    {
        id: 84,
        title: {
            ka: "სათლელი 0526 Deli Stationery",
            en: "Pencil Sharpener 0526 Deli",
            ru: "Точилка 0526 Deli"
        },
        price: 1.80,
        category: "stationary",
        inStock: true,
        images: ["images/satleli2.png"]
    },
    {
        id: 85,
        title: {
            ka: "სათლელი Deli Stationery",
            en: "Pencil Sharpener Deli",
            ru: "Точилка Deli"
        },
        price: 0.80,
        category: "stationary",
        inStock: true,
        images: ["images/satleli3.png", "images/satleli.png"]
    },
    {
        id: 86,
        title: {
            ka: "სათლელი 0594",
            en: "Pencil Sharpener 0594",
            ru: "Точилка 0594"
        },
        price: 0.60,
        category: "stationary",
        inStock: true,
        images: ["images/satleli4.jpg"]
    },
    {
        id: 87,
        title: {
            ka: "სათლელი ლითონის ორმაგი Deli Stationery",
            en: "Double Metal Pencil Sharpener Deli",
            ru: "Двойная металлическая точилка Deli"
        },
        price: 0.80,
        category: "stationary",
        inStock: true,
        images: ["images/satleli5.png"]
    },
    {
        id: 88,
        title: {
            ka: "სათლელი სამაგიდე 71160 DELI",
            en: "Desktop Pencil Sharpener 71160 DELI",
            ru: "Настольная точилка 71160 DELI"
        },
        price: 15.20,
        category: "stationary",
        inStock: true,
        images: ["images/satleli6.jpg"]
    },
    {
        id: 89,
        title: {
            ka: "სათლელი სამაგიდე 71160 DELI",
            en: "Desktop Pencil Sharpener 71160 DELI",
            ru: "Настольная точилка 71160 DELI"
        },
        price: 15.20,
        category: "stationary",
        inStock: true,
        images: ["images/satleli7.jpg"]
    },
    {
        id: 90,
        title: {
            ka: "ფანქრის სათლელი XL-379",
            en: "Pencil Sharpener XL-379",
            ru: "Точилка для карандашей XL-379"
        },
        price: 0.90,
        category: "stationary",
        inStock: true,
        images: ["images/satleli8.jpg"]
    },
    {
        id: 91,
        title: {
            ka: "სათლელი კონტეინერით Deli Stationery",
            en: "Pencil Sharpener with Container Deli",
            ru: "Точилка с контейнером Deli"
        },
        price: 0.80,
        category: "stationary",
        inStock: true,
        images: ["images/satleli9.png"]
    },
    {
        id: 92,
        title: {
            ka: "სათლელი H558 DELI",
            en: "Pencil Sharpener H558 DELI",
            ru: "Точилка H558 DELI"
        },
        price: 1.70,
        category: "stationary",
        inStock: true,
        images: ["images/satleli10.jpg"]
    },
    {
        id: 93,
        title: {
            ka: "სათლელი Deli Stationery",
            en: "Pencil Sharpener Deli",
            ru: "Точилка Deli"
        },
        price: 0.60,
        category: "stationary",
        inStock: true,
        images: ["images/satleli11.png"]
    },
    {
        id: 94,
        title: {
            ka: "საშლელი H315 DELI",
            en: "Eraser H315 DELI",
            ru: "Ластик H315 DELI"
        },
        price: 1.30,
        category: "stationary",
        inStock: true,
        images: ["images/sashleli1.jpg"]
    },
    {
        id: 95,
        title: {
            ka: "საშლელი H316 DELI",
            en: "Eraser H316 DELI",
            ru: "Ластик H316 DELI"
        },
        price: 0.50,
        category: "stationary",
        inStock: true,
        images: ["images/sashleli2.jpg"]
    },
    {
        id: 96,
        title: {
            ka: "საშლელი Deli Stationery",
            en: "Eraser Deli",
            ru: "Ластик Deli"
        },
        price: 0.70,
        category: "stationary",
        inStock: true,
        images: ["images/sashleli3.png"]
    },
    {
        id: 961, // id დაკორექტირდა დუბლირების თავიდან აცილების მიზნით
        title: {
            ka: "საშლელი Deli Stationery",
            en: "Eraser Deli",
            ru: "Ластик Deli"
        },
        price: 0.65,
        category: "stationary",
        inStock: true,
        images: ["images/sashleli4.png"]
    },
    {
        id: 97,
        title: {
            ka: "ფანქრის საშლელი Scribe Infinite Deli Stationery",
            en: "Pencil Eraser Scribe Infinite Deli",
            ru: "Ластик для карандашей Scribe Infinite Deli"
        },
        price: 0.70,
        category: "stationary",
        inStock: true,
        images: ["images/sashleli5.jpg"]
    },
    {
        id: 98,
        title: {
            ka: "ფარგალი 8601 DELI",
            en: "Compass 8601 DELI",
            ru: "Циркуль 8601 DELI"
        },
        price: 3.50,
        category: "writing",
        inStock: true,
        images: ["images/fargali1.jpg"]
    },
    {
        id: 99,
        title: {
            ka: "ფარგალი Deli Stationery",
            en: "Compass Deli",
            ru: "Циркуль Deli"
        },
        price: 13.00,
        category: "writing",
        inStock: true,
        images: ["images/fargali2.jpeg"]
    },
    {
        id: 100,
        title: {
            ka: "ფარგალი Deli Stationery",
            en: "Compass Deli",
            ru: "Циркуль Deli"
        },
        price: 8.00,
        category: "writing",
        inStock: true,
        images: ["images/fargali3.png"]
    },
    {
        id: 101,
        title: {
            ka: "ფარგალი Deli Stationery",
            en: "Compass Deli",
            ru: "Циркуль Deli"
        },
        price: 5.50,
        category: "writing",
        inStock: true,
        images: ["images/fargali4.png"]
    },
    {
        id: 102,
        title: {
            ka: "ფარგალი G20502 DELI",
            en: "Compass G20502 DELI",
            ru: "Циркуль G20502 DELI"
        },
        price: 3.90,
        category: "writing",
        inStock: true,
        images: ["images/fargali5.jpg"]
    },
    {
        id: 103,
        title: {
            ka: "მექანიკური ფანქარი 0.7მმ წვერით Deli Stationery",
            en: "Mechanical Pencil 0.7mm Tip Deli",
            ru: "Механический карандаш 0.7мм Deli"
        },
        price: 3.00,
        category: "writing",
        inStock: true,
        images: ["images/fanqari10.jpg"]
    },
    {
        id: 104,
        title: {
            ka: "მექანიკური ფანქარი 0.5მმ წვერით Deli Stationery",
            en: "Mechanical Pencil 0.5mm Tip Deli",
            ru: "Механический карандаш 0.5мм Deli"
        },
        price: 3.00,
        category: "writing",
        inStock: true,
        images: ["images/fanqari11.jpg"]
    },
    {
        id: 105,
        title: {
            ka: "დივაიდერი A4-12 pages E5725 DELI",
            en: "Divider A4-12 pages E5725 DELI",
            ru: "Разделитель А4-12 страниц E5725 DELI"
        },
        price: 2.50,
        category: "office",
        inStock: true,
        images: ["images/divaideri1.png"]
    },
    {
        id: 106,
        title: {
            ka: "დივაიდერი A4-20 pages 38157 DELI",
            en: "Divider A4-20 pages 38157 DELI",
            ru: "Разделитель А4-20 страниц 38157 DELI"
        },
        price: 4.00,
        category: "office",
        inStock: true,
        images: ["images/divaideri1.png"]
    },
    {
        id: 107,
        title: {
            ka: "დივაიდერი პლასტიკური 1-31 ციფრი Deli",
            en: "Plastic Index Divider 1-31 Deli",
            ru: "Пластиковый разделитель 1-31 Deli"
        },
        price: 6.00,
        category: "office",
        inStock: true,
        images: ["images/divaideri1.png"]
    },
    {
        id: 108,
        title: {
            ka: "დივაიდერი A4-10 pages E5724 DELI",
            en: "Divider A4-10 pages E5724 DELI",
            ru: "Разделитель А4-10 страниц E5724 DELI"
        },
        price: 2.20,
        category: "office",
        inStock: true,
        images: ["images/divaideri1.png"]
    },
    {
        id: 109,
        title: {
            ka: "დივაიდერი A4-10 pages E5724 DELI",
            en: "Divider A4-10 pages E5724 DELI",
            ru: "Разделитель А4-10 страниц E5724 DELI"
        },
        price: 2.20,
        category: "office",
        inStock: true,
        images: ["images/divaideri1.png"]
    },
    {
        id: 110,
        title: {
            ka: "დივაიდერი KS-12A",
            en: "Divider KS-12A",
            ru: "Разделитель KS-12A"
        },
        price: 2.00,
        category: "office",
        inStock: true,
        images: ["images/divaideri2.jpg"]
    },
    {
        id: 111,
        title: {
            ka: "ასაკინძი ყდა A3 PC3005-02 (Beige C02) 100 ფურცელი",
            en: "Binding Cover A3 PC3005-02 (Beige C02) 100 sheets",
            ru: "Переплетная обложка А3 PC3005-02 (Beige C02) 100 листов"
        },
        price: 25.00,
        category: "office",
        inStock: true,
        images: ["images/askyda1.jpg"]
    },
    {
        id: 112,
        title: {
            ka: "ასაკინძი ყდა A3 შავი 100 ფურცელი",
            en: "Binding Cover A3 Black 100 sheets",
            ru: "Переплетная обложка А3 Черная 100 листов"
        },
        price: 28.00,
        category: "office",
        inStock: true,
        images: ["images/askyda2.jpg"]
    },
    {
        id: 113,
        title: {
            ka: "ასაკინძი ყდა A4 (Saffron C09) 100 ფურცელი 230 გრამი",
            en: "Binding Cover A4 (Saffron C09) 100 sheets 230g",
            ru: "Переплетная обложка А4 (Saffron C09) 100 листов 230г"
        },
        price: 14.00,
        category: "office",
        inStock: true,
        images: ["images/askyda3.jpg"]
    },
    {
        id: 114,
        title: {
            ka: "ასაკინძი ყდა A4 PC3004-06 (Grey C06) 100 ფურცელი 230 გრამი",
            en: "Binding Cover A4 PC3004-06 (Grey C06) 100 sheets 230g",
            ru: "Переплетная обложка А4 PC3004-06 (Grey C06) 100 листов 230г"
        },
        price: 14.00,
        category: "office",
        inStock: true,
        images: ["images/askyda4.jpg"]
    },
    
    {
        id: 115,
        title: {
            ka: "ასაკინძი ყდა A4 PC3004-12 (Green C12) 100 ფურცელი",
            en: "Binding Cover A4 PC3004-12 (Green C12) 100 sheets",
            ru: "Переплетная обложка А4 PC3004-12 (Green C12) 100 листов"
        },
        price: 14.00,
        category: "office",
        inStock: true,
        images: ["images/askyda5.jpg"]
    },
    {
        id: 116,
        title: {
            ka: "ასაკინძი ყდა A4 ოქროსფერი 100 ფურცელი 230 გრამი",
            en: "Binding Cover A4 Gold 100 sheets 230g",
            ru: "Переплетная обложка А4 Золотая 100 листов 230г"
        },
        price: 14.00,
        category: "office",
        inStock: true,
        images: ["images/askyda6.jpg"]
    },
    {
        id: 117,
        title: {
            ka: "ასაკინძი ყდა A4 მუქი ლურჯი 100 ფურცელი 230 გრამი",
            en: "Binding Cover A4 Dark Blue 100 sheets 230g",
            ru: "Переплетная обложка А4 Темно-синяя 100 листов 230г"
        },
        price: 14.00,
        category: "office",
        inStock: true,
        images: ["images/askyda7.jpg"]
    },
    {
        id: 118,
        title: {
            ka: "ასაკინძი ყდა გამჭვირვალე A4 100 ფურცელი 150 მიკრონი",
            en: "Binding Cover Transparent A4 100 sheets 150 micron",
            ru: "Переплетная обложка прозрачная А4 100 листов 150 микрон"
        },
        price: 18.00,
        category: "office",
        inStock: true,
        images: ["images/askyda8.jpg"]
    },
    {
        id: 119,
        title: {
            ka: "ასაკინძი ყდა A4 PC3004-12 (Green C12) 100 ფურცელი",
            en: "Binding Cover A4 PC3004-12 (Green C12) 100 sheets",
            ru: "Переплетная обложка А4 PC3004-12 (Green C12) 100 листов"
        },
        price: 14.00,
        category: "office",
        inStock: true,
        images: ["images/askyda9.jpg"]
    },
    {
        id: 120,
        title: {
            ka: "ასაკინძი ყდა გამჭვირვალე A3 100 ფურცელი 180 მიკრონი",
            en: "Binding Cover Transparent A3 100 sheets 180 micron",
            ru: "Переплетная обложка прозрачная А3 100 листов 180 микрон"
        },
        price: 40.00,
        category: "office",
        inStock: true,
        images: ["images/askyda9.jpg"]
    },
    {
        id: 121,
        title: {
            ka: "ასაკინძი ყდა გამჭვირვალე A3 100 ფურცელი 150 მიკრონი",
            en: "Binding Cover Transparent A3 100 sheets 150 micron",
            ru: "Переплетная обложка прозрачная А3 100 листов 150 микрон"
        },
        price: 35.00,
        category: "office",
        inStock: true,
        images: ["images/askyda9.jpg"]
    },
    {
        id: 122,
        title: {
            ka: "ასაკინძი ყდა გამჭვირვალე A4 100 ფურცელი 150 მიკრონი",
            en: "Binding Cover Transparent A4 100 sheets 150 micron",
            ru: "Переплетная обложка прозрачная А4 100 листов 150 микрон"
        },
        price: 20.00,
        category: "office",
        inStock: true,
        images: ["images/askyda9.jpg"]
    },
    {
        id: 123,
        title: {
            ka: "თერმოქაღალდი 0.57 - 18 მეტრი",
            en: "Thermal Paper Roll 0.57 - 18m",
            ru: "Термобумага 0.57 - 18 м"
        },
        price: 0.50,
        category: "office",
        inStock: true,
        images: ["images/terqagaldi1.jpg"]
    },
    {
        id: 124,
        title: {
            ka: "თერმოქაღალდი 55-80/25 - 300 მეტრი",
            en: "Thermal Paper Roll 55-80/25 - 300m",
            ru: "Термобумага 55-80/25 - 300 м"
        },
        price: 14.00,
        category: "office",
        inStock: true,
        images: ["images/terqagaldi2.jpg"]
    },
    {
        id: 125,
        title: {
            ka: "სასწორის ეტიკეტი 58*30მმ",
            en: "Scale Label Sticker 58*30mm",
            ru: "Этикетка для весов 58*30мм"
        },
        price: 3.00,
        category: "office",
        inStock: true,
        images: ["images/sasetiketi1.jpg"]
    },
    {
        id: 126,
        title: {
            ka: "სასწორის ეტიკეტი 58*40მმ",
            en: "Scale Label Sticker 58*40mm",
            ru: "Этикетка для весов 58*40мм"
        },
        price: 3.00,
        category: "office",
        inStock: true,
        images: ["images/sasetiketi2.jpg"]
    },
    {
        id: 127,
        title: {
            ka: "კონვერტი A3 320*420 110გრ",
            en: "Envelope A3 320*420 110g",
            ru: "Конверт А3 320*420 110г"
        },
        price: 0.35,
        category: "office",
        inStock: true,
        images: ["images/konverti.jpg"]
    },
    {
        id: 128,
        title: {
            ka: "კონვერტი A3+ 330*450მმ 110გრ",
            en: "Envelope A3+ 330*450mm 110g",
            ru: "Конверт А3+ 330*450мм 110г"
        },
        price: 0.40,
        category: "office",
        inStock: true,
        images: ["images/konverti2.jpg"]
    },
    {
        id: 129,
        title: {
            ka: "კონვერტი A4 240*320 110გრ",
            en: "Envelope A4 240*320 110g",
            ru: "Конверт А4 240*320 110г"
        },
        price: 0.25,
        category: "office",
        inStock: true,
        images: ["images/konverti3.jpg"]
    },
    {
        id: 130,
        title: {
            ka: "კონვერტი A5 160*230მმ 110გრ",
            en: "Envelope A5 160*230mm 110g",
            ru: "Конверт А5 160*230мм 110г"
        },
        price: 0.20,
        category: "office",
        inStock: true,
        images: ["images/konverti4.jpg"]
    },
    {
        id: 131,
        title: {
            ka: "კონვერტი A5+ 176*250 110გრ",
            en: "Envelope A5+ 176*250 110g",
            ru: "Конверт А5+ 176*250 110г"
        },
        price: 0.20,
        category: "office",
        inStock: true,
        images: ["images/konverti5.png"]
    },
    {
        id: 132,
        title: {
            ka: "კონვერტი A6 114*162მმ 110გრ",
            en: "Envelope A6 114*162mm 110g",
            ru: "Конверт А6 114*162мм 110г"
        },
        price: 0.10,
        category: "office",
        inStock: true,
        images: ["images/konverti6.jpg"]
    },
    {
        id: 133,
        title: {
            ka: "კონვერტი C6 114*162 110გრ",
            en: "Envelope C6 114*162 110g",
            ru: "Конверт C6 114*162 110г"
        },
        price: 0.10,
        category: "office",
        inStock: true,
        images: ["images/konverti7.jpg"]
    },
    {
        id: 134,
        title: {
            ka: "კონვერტი დიპლომატი ფანჯრით 105*240მმ 110გრ",
            en: "Envelope DL with Window 105*240mm 110g",
            ru: "Конверт DL с окном 105*240мм 110г"
        },
        price: 0.10,
        category: "office",
        inStock: true,
        images: ["images/konverti8.jpg"]
    },
    {
        id: 135,
        title: {
            ka: "კონვერტი დიპლომატი ფანჯრით 105*240მმ 110გრ",
            en: "Envelope DL with Window 105*240mm 110g",
            ru: "Конверт DL с окном 105*240мм 110г"
        },
        price: 0.10,
        category: "office",
        inStock: true,
        images: ["images/konverti8.jpg"]
    },
    {
        id: 136,
        title: {
            ka: "კონვერტი დიპლომატი 105*240მმ 110გრ",
            en: "Envelope DL 105*240mm 110g",
            ru: "Конверт DL 105*240мм 110г"
        },
        price: 0.10,
        category: "office",
        inStock: true,
        images: ["images/konverti8.jpg"]
    },
    {
        id: 137,
        title: {
            ka: "კონვერტი ბუკლეტი 110*220მმ 110გრ",
            en: "Envelope Booklet 110*220mm 110g",
            ru: "Конверт для буклетов 110*220мм 110г"
        },
        price: 0.10,
        category: "office",
        inStock: true,
        images: ["images/konverti11.jpg"]
    },
    {
        id: 138,
        title: {
            ka: "ფაილი A4 0.30 (100ც) HL-253-30",
            en: "Sheet Protector A4 0.30 (100 pcs) HL-253-30",
            ru: "Файл A4 0.30 (100 шт) HL-253-30"
        },
        price: 3.50,
        category: "stationary",
        inStock: true,
        images: ["images/faili1.jpg"]
    },
    {
        id: 139,
        title: {
            ka: "ფაილი A4 0.30 (100ც) HL-30330",
            en: "Sheet Protector A4 0.30 (100 pcs) HL-30330",
            ru: "Файл A4 0.30 (100 шт) HL-30330"
        },
        price: 4.20,
        category: "stationary",
        inStock: true,
        images: ["images/faili1.jpg"]
    },
    {
        id: 140,
        title: {
            ka: "ფაილი A4 0.35 (100ც) HL-30335",
            en: "Sheet Protector A4 0.35 (100 pcs) HL-30335",
            ru: "Файл A4 0.35 (100 шт) HL-30335"
        },
        price: 4.00,
        category: "stationary",
        inStock: true,
        images: ["images/faili1.jpg"]
    },
    {
        id: 141,
        title: {
            ka: "ფაილი A4 0.40 (100ც) 30340",
            en: "Sheet Protector A4 0.40 (100 pcs) 30340",
            ru: "Файл A4 0.40 (100 шт) 30340"
        },
        price: 5.00,
        category: "stationary",
        inStock: true,
        images: ["images/faili1.jpg"]
    },
    {
        id: 142,
        title: {
            ka: "ფაილი A5 0.35 (100ც) HL-30535",
            en: "Sheet Protector A5 0.35 (100 pcs) HL-30535",
            ru: "Файл A5 0.35 (100 шт) HL-30535"
        },
        price: 3.00,
        category: "stationary",
        inStock: true,
        images: ["images/faili1.jpg"]
    },
    {
        id: 143,
        title: {
            ka: "ფაილი A4 40 მიკრონი (100ც) Deli",
            en: "Sheet Protector A4 40 Micron (100 pcs) Deli",
            ru: "Файл A4 40 микрон (100 шт) Deli"
        },
        price: 7.00,
        category: "stationary",
        inStock: true,
        images: ["images/faili2.jpg"]
    },
    {
        id: 144,
        title: {
            ka: "ფაილი A4 (100ც) 0.80 F20302 DELI",
            en: "Sheet Protector A4 (100 pcs) 0.80 F20302 DELI",
            ru: "Файл A4 (100 шт) 0.80 F20302 DELI"
        },
        price: 15.00,
        category: "stationary",
        inStock: true,
        images: ["images/faili3.jpg"]
    },
    {
        id: 145,
        title: {
            ka: "ფაილი A4 40 მიკრონი (100ც) Deli",
            en: "Sheet Protector A4 40 Micron (100 pcs) Deli",
            ru: "Файл A4 40 микрон (100 шт) Deli"
        },
        price: 7.00,
        category: "stationary",
        inStock: true,
        images: ["images/faili3.jpg"]
    },
    {
        id: 146,
        title: {
            ka: "პლასტიკური საქაღალდე (კუთხე ფაილი) Deli",
            en: "Plastic Corner Folder A4 Deli",
            ru: "Пластиковая папка-уголок A4 Deli"
        },
        price: 0.40,
        category: "stationary",
        inStock: true,
        images: ["images/faili4.jpg"]
    },
    {
        id: 147,
        title: {
            ka: "ფაილი A4 40 მიკრონი (100ც) Deli",
            en: "Sheet Protector A4 40 Micron (100 pcs) Deli",
            ru: "Файл A4 40 микрон (100 шт) Deli"
        },
        price: 7.00,
        category: "stationary",
        inStock: true,
        images: ["images/faili2.jpg"]
    },
    {
        id: 148,
        title: {
            ka: "ფაილი A4 0.70 (100ც) 30370",
            en: "Sheet Protector A4 0.70 (100 pcs) 30370",
            ru: "Файл A4 0.70 (100 шт) 30370"
        },
        price: 9.00,
        category: "stationary",
        inStock: true,
        images: ["images/faili1.jpg"]
    },
    {
        id: 149,
        title: {
            ka: "აკვარელის ქაღალდი A1 (610X860მმ) 200გრ 300ფურცელი",
            en: "Watercolor Paper A1 (610X860mm) 200g 300 sheets",
            ru: "Акварельная бумага А1 (610х860мм) 200г 300 листов"
        },
        price: 380.00,
        category: "paper",
        inStock: true,
        images: ["images/vatmani1.jpg"]
    },
    {
        id: 150,
        title: {
            ka: "აკვარელის ქაღალდი 16ფურცელი A3 C270-A3 DELI",
            en: "Watercolor Paper Pad 16 sheets A3 C270-A3 DELI",
            ru: "Бумага для акварели 16 листов A3 C270-A3 DELI"
        },
        price: 15.00,
        category: "paper",
        inStock: true,
        images: ["images/vatmani2.jpg"]
    },
    {
        id: 151,
        title: {
            ka: "ვატმანი სახაზავი A3 300ფურცელი",
            en: "Drawing Paper A3 300 sheets",
            ru: "Ватман A3 300 листов"
        },
        price: 80.00,
        category: "paper",
        inStock: true,
        images: ["images/vatmani3.jpg"]
    },
    {
        id: 152,
        title: {
            ka: "ქაღალდი A1 ზომის (ვატმანი)",
            en: "Drawing Paper Sheet A1 (Whatman)",
            ru: "Бумага формата А1 (Ватман)"
        },
        price: 1.50,
        category: "paper",
        inStock: true,
        images: ["images/vatmani4.jpg"]
    },
    {
        id: 153,
        title: {
            ka: "აკვარელის ქაღალდი 16ფურცელი A3 C270-A3 DELI",
            en: "Watercolor Paper Pad 16 sheets A3 C270-A3 DELI",
            ru: "Бумага для акварели 16 листов A3 C270-A3 DELI"
        },
        price: 15.00,
        category: "paper",
        inStock: true,
        images: ["images/vatmani2.jpg"]
    },
    {
        id: 154,
        title: {
            ka: "მუყაოს სწრაფჩამკერი",
            en: "Cardboard Fastener Folder",
            ru: "Картонная папка-скоросшиватель"
        },
        price: 0.40,
        category: "stationary",
        inStock: true,
        images: ["images/chamkeri1.jpg"]
    },
    {
        id: 155,
        title: {
            ka: "სწრაფჩამკერი პლასტიკური 2058",
            en: "Plastic Fastener Folder 2058",
            ru: "Пластиковая папка-скоросшиватель 2058"
        },
        price: 0.40,
        category: "stationary",
        inStock: true,
        images: ["images/chamkeri2.jpg"]
    },
    {
        id: 156,
        title: {
            ka: "სწრაფჩამკერი პლასტიკური Deli",
            en: "Plastic Fastener Folder Deli",
            ru: "Пластиковая папка-скоросшиватель Deli"
        },
        price: 0.70,
        category: "stationary",
        inStock: true,
        images: ["images/chamkeri3.jpg"]
    },
    {
        id: 157,
        title: {
            ka: "სწრაფჩამკერი პლასტიკური EF320 DELI",
            en: "Plastic Fastener Folder EF320 DELI",
            ru: "Пластиковая папка-скоросшиватель EF320 DELI"
        },
        price: 0.55,
        category: "stationary",
        inStock: true,
        images: ["images/chamkeri4.jpg"]
    },
    {
        id: 158,
        title: {
            ka: "ლეიბლი A4 1*1 100ფურცელი (210x297) - 1 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*1 100 sheets (210x297) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*1 100 листов (210x297) Tanex"
        },
        price: 15.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli1.jpg"]
    },
    {
        id: 159,
        title: {
            ka: "ლეიბლი A4 1*1 100ფურცელი (199.6x289.1) - 1 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*1 100 sheets (199.6x289.1) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*1 100 листов (199.6x289.1) Tanex"
        },
        price: 15.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli2.jpg"]
    },
    {
        id: 160,
        title: {
            ka: "ლეიბლი A4 1*12 100ფურცელი (105x48) - 12 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*12 100 sheets (105x48) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*12 100 листов (105x48) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli3.jpg"]
    },
    {
        id: 161,
        title: {
            ka: "ლეიბლი A4 1*10 100ფურცელი (99.06x57) - 10 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*10 100 sheets (99.06x57) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*10 100 листов (99.06x57) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli4.jpg"]
    },
    {
        id: 162,
        title: {
            ka: "ლეიბლი A4 1*15 100ფურცელი (70x56) - 15 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*15 100 sheets (70x56) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*15 100 листов (70x56) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli5.jpg"]
    },
    {
        id: 163,
        title: {
            ka: "ლეიბლი A4 1*12 100ფურცელი (105 x 46) 2512",
            en: "Self-Adhesive Labels A4 1*12 100 sheets (105x46) 2512",
            ru: "Этикетки самоклеящиеся A4 1*12 100 листов (105x46) 2512"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli6.jpg"]
    },
    {
        id: 164,
        title: {
            ka: "ლეიბლი A4 1*14 100ფურცელი (105.1*42.69) - 14 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*14 100 sheets (105.1x42.69) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*14 100 листов (105.1x42.69) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli7.jpg"]
    },
    {
        id: 165,
        title: {
            ka: "ლეიბლი A4 1*4 100ფურცელი (105x148.5) 2204",
            en: "Self-Adhesive Labels A4 1*4 100 sheets (105x148.5) 2204",
            ru: "Этикетки самоклеящиеся A4 1*4 100 листов (105x148.5) 2204"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli8.jpg"]
    },
    {
        id: 166,
        title: {
            ka: "ლეიბლი A4 1*16 100ფურცელი (99.1x34) - 16 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*16 100 sheets (99.1x34) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*16 100 листов (99.1x34) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli9.jpg"]
    },
    {
        id: 167,
        title: {
            ka: "ლეიბლი A4 1*180 100ფურცელი (30x9) 180 ნაჭრიანი",
            en: "Self-Adhesive Labels A4 1*180 100 sheets (30x9)",
            ru: "Этикетки самоклеящиеся A4 1*180 100 листов (30x9)"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli10.jpg"]
    },
    {
        id: 168,
        title: {
            ka: "ლეიბლი A4 1*24 100ფურცელი (64x34) - 24 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*24 100 sheets (64x34) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*24 100 листов (64x34) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli11.jpg"]
    },
    {
        id: 169,
        title: {
            ka: "ლეიბლი A4 1*2 100ფურცელი (210x148.5) - 2 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*2 100 sheets (210x148.5) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*2 100 листов (210x148.5) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli12.jpg"]
    },
    {
        id: 170,
        title: {
            ka: "ლეიბლი A4 1*2 (199.6*143.5) 100ფურცელი - 2 ნაჭრიანი",
            en: "Self-Adhesive Labels A4 1*2 100 sheets (199.6x143.5)",
            ru: "Этикетки самоклеящиеся A4 1*2 100 листов (199.6x143.5)"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli13.jpg"]
    },
    {
        id: 171,
        title: {
            ka: "ლეიბლი A4 1*16 100ფურცელი (105x37.125) 2105",
            en: "Self-Adhesive Labels A4 1*16 100 sheets (105x37.125) 2105",
            ru: "Этикетки самоклеящиеся A4 1*16 100 листов (105x37.125) 2105"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli14.jpg"]
    },
    {
        id: 172,
        title: {
            ka: "ლეიბლი A4 1*10 100ფურცელი (105x57) 2610",
            en: "Self-Adhesive Labels A4 1*10 100 sheets (105x57) 2610",
            ru: "Этикетки самоклеящиеся A4 1*10 100 листов (105x57) 2610"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli15.jpg"]
    },
    {
        id: 173,
        title: {
            ka: "ლეიბლი A4 1*64 100ფურცელი (48.5*16.9) - 64 ნაჭრიანი",
            en: "Self-Adhesive Labels A4 1*64 100 sheets (48.5x16.9)",
            ru: "Этикетки самоклеящиеся A4 1*64 100 листов (48.5x16.9)"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli16.jpg"]
    },
    {
        id: 174,
        title: {
            ka: "ლეიბლი A4 1*21 100ფურცელი (63.5*38.1) 21 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*21 100 sheets (63.5x38.1) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*21 100 листов (63.5x38.1) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli17.jpg"]
    },
    {
        id: 175,
        title: {
            ka: "ლეიბლი A4 1*4 100ფურცელი (99.1*139) 4 ნაჭრიანი",
            en: "Self-Adhesive Labels A4 1*4 100 sheets (99.1x139)",
            ru: "Этикетки самоклеящиеся A4 1*4 100 листов (99.1x139)"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli18.jpg"]
    },
    {
        id: 176,
        title: {
            ka: "ლეიბლი A4 1*65 100ფურცელი (38.1x21.2) - 65 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*65 100 sheets (38.1x21.2) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*65 100 листов (38.1x21.2) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli19.jpg"]
    },
    {
        id: 177,
        title: {
            ka: "ლეიბლი A4 1*8 100ფურცელი (99.1x67.7) - 8 ნაჭრიანი",
            en: "Self-Adhesive Labels A4 1*8 100 sheets (99.1x67.7)",
            ru: "Этикетки самоклеящиеся A4 1*8 100 листов (99.1x67.7)"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli20.jpg"]
    },
    {
        id: 178,
        title: {
            ka: "ლეიბლი A4 1*70 100ფურცელი (40x20) - 70 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*70 100 sheets (40x20) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*70 100 листов (40x20) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli21.jpg"]
    },
    {
        id: 179,
        title: {
            ka: "ლეიბლი A4 1*8 100ფურცელი (105x72) - 8 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*8 100 sheets (105x72) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*8 100 листов (105x72) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli22.jpg"]
    },
    {
        id: 180,
        title: {
            ka: "ლეიბლი A4 1*21 100ფურცელი (70x42.43) 21 ნაჭრიანი",
            en: "Self-Adhesive Labels A4 1*21 100 sheets (70x42.43)",
            ru: "Этикетки самоклеящиеся A4 1*21 100 листов (70x42.43)"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli23.jpg"]
    },
    {
        id: 181,
        title: {
            ka: "ლეიბლი A4 1*65 100ფურცელი (38.1x21.2) - 65 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*65 100 sheets (38.1x21.2) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*65 100 листов (38.1x21.2) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli24.jpg"]
    },
    {
        id: 182,
        title: {
            ka: "ლეიბლი A4 1*40 100ფურცელი (52.5x29.7) - 40 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*40 100 sheets (52.5x29.7) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*40 100 листов (52.5x29.7) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli25.jpg"]
    },
    {
        id: 183,
        title: {
            ka: "ლეიბლი A4 1*16 100ფურცელი (105x35) 2216",
            en: "Self-Adhesive Labels A4 1*16 100 sheets (105x35) 2216",
            ru: "Этикетки самоклеящиеся A4 1*16 100 листов (105x35) 2216"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli26.jpg"]
    },
    {
        id: 184,
        title: {
            ka: "ლეიბლი A4 1*4 100ფურცელი (210x74.25) - 4 ნაჭრიანი",
            en: "Self-Adhesive Labels A4 1*4 100 sheets (210x74.25)",
            ru: "Этикетки самоклеящиеся A4 1*4 100 листов (210x74.25)"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli27.jpg"]
    },
    {
        id: 185,
        title: {
            ka: "ლეიბლი A4 1*80 100ფურცელი (26.2x29.7) 80 ნაჭრიანი",
            en: "Self-Adhesive Labels A4 1*80 100 sheets (26.2x29.7)",
            ru: "Этикетки самоклеящиеся A4 1*80 100 листов (26.2x29.7)"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli28.jpg"]
    },
    {
        id: 186,
        title: {
            ka: "ლეიბლი A4 1*22 100ფურცელი (50*22) - 22 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*22 100 sheets (50x22) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*22 100 листов (50x22) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli29.jpg"]
    },
    {
        id: 187,
        title: {
            ka: "ლეიბლი A4 1*6 100ფურცელი (210x47.81) - 6 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*6 100 sheets (210x47.81) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*6 100 листов (210x47.81) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli30.jpg"]
    },
    {
        id: 188,
        title: {
            ka: "ლეიბლი A4 1*24 100ფურცელი (70*37.125) 2037",
            en: "Self-Adhesive Labels A4 1*24 100 sheets (70x37.125) 2037",
            ru: "Этикетки самоклеящиеся A4 1*24 100 листов (70x37.125) 2037"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli31.jpg"]
    },
    {
        id: 189,
        title: {
            ka: "ლეიბლი A4 1*72 100ფურცელი (35x23) 72 ნაჭრიანი",
            en: "Self-Adhesive Labels A4 1*72 100 sheets (35x23)",
            ru: "Этикетки самоклеящиеся A4 1*72 100 листов (35x23)"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli271.jpg"]
    },
    {
        id: 190,
        title: {
            ka: "ლეიბლი A4 1*30 100ფურცელი (70X29.7) - 30 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*30 100 sheets (70x29.7) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*30 100 листов (70x29.7) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli33.jpg"]
    },
    {
        id: 191,
        title: {
            ka: "ლეიბლი A4 1*6 100ფურცელი (99.1x93.1) - 6 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*6 100 sheets (99.1x93.1) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*6 100 листов (99.1x93.1) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli34.jpg"]
    },
    {
        id: 192,
        title: {
            ka: "ლეიბლი A4 1*36 100ფურცელი (45*30) - 36 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*36 100 sheets (45x30) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*36 100 листов (45x30) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli35.jpg"]
    },
    {
        id: 193,
        title: {
            ka: "ლეიბლი A4 1*44 100ფურცელი (48.5x25.4) - 44 ნაჭრიანი",
            en: "Self-Adhesive Labels A4 1*44 100 sheets (48.5x25.4)",
            ru: "Этикетки самоклеящиеся A4 1*44 100 листов (48.5x25.4)"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli36.jpg"]
    },
    {
        id: 194,
        title: {
            ka: "ლეიბლი A4 1*48 100ფურცელი (52.5x23) - 48 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*48 100 sheets (52.5x23) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*48 100 листов (52.5x23) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli37.jpg"]
    },
    {
        id: 195,
        title: {
            ka: "ლეიბლი A4 40მმ წრე 100ფურცელი 2140",
            en: "Self-Adhesive Labels A4 40mm Round 100 sheets 2140",
            ru: "Этикетки самоклеящиеся A4 40мм Круг 100 листов 2140"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli38.jpg"]
    },
    {
        id: 196,
        title: {
            ka: "ლეიბლი A4 1*33 100ფურცელი (70x23) 33 ნაჭრიანი",
            en: "Self-Adhesive Labels A4 1*33 100 sheets (70x23)",
            ru: "Этикетки самоклеящиеся A4 1*33 100 листов (70x23)"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli39.jpg"]
    },
    {
        id: 197,
        title: {
            ka: "ლეიბლი A4 1*33 100ფურცელი (63.5x25.4) - 33 ნაჭრიანი Tanex",
            en: "Self-Adhesive Labels A4 1*33 100 sheets (63.5x25.4) Tanex",
            ru: "Этикетки самоклеящиеся A4 1*33 100 листов (63.5x25.4) Tanex"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli40.jpeg"]
    },
    {
        id: 198,
        title: {
            ka: "ლეიბლი A4 1*95 100ფურცელი (30x12) 2095",
            en: "Self-Adhesive Labels A4 1*95 100 sheets (30x12) 2095",
            ru: "Этикетки самоклеящиеся A4 1*95 100 листов (30x12) 2095"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli41.jpg"]
    },
    {
        id: 199,
        title: {
            ka: "ლეიბლი A4 1*32 100ფურცელი (52.5*35) 2032",
            en: "Self-Adhesive Labels A4 1*32 100 sheets (52.5x35) 2032",
            ru: "Этикетки самоклеящиеся A4 1*32 100 листов (52.5x35) 2032"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli42.jpg"]
    },
    {
        id: 200,
        title: {
            ka: "ლეიბლი A4 1*18 100ფურცელი (58.4x42.3) 2118",
            en: "Self-Adhesive Labels A4 1*18 100 sheets (58.4x42.3) 2118",
            ru: "Этикетки самоклеящиеся A4 1*18 100 листов (58.4x42.3) 2118"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli43.jpg"]
    },
    {
        id: 201,
        title: {
            ka: "ლეიბლი A4 40.6x25.4 მმ ოვალი 2148",
            en: "Self-Adhesive Labels A4 40.6x25.4 mm Oval 2148",
            ru: "Этикетки самоклеящиеся A4 40.6x25.4 мм Овал 2148"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli44.jpg"]
    },
    {
        id: 202,
        title: {
            ka: "ლეიბლი A4 1*90 100ფურცელი (33x19) 2319",
            en: "Self-Adhesive Labels A4 1*90 100 sheets (33x19) 2319",
            ru: "Этикетки самоклеящиеся A4 1*90 100 листов (33x19) 2319"
        },
        price: 22.00,
        category: "paper",
        inStock: true,
        images: ["images/leibli45.jpg"]
    },
    {
        id: 203,
        title: {
            ka: "18 საგნიანი სამაგიდე ორგანიზატორი Deli",
            en: "18-Piece Desk Organizer Deli",
            ru: "Настольный органайзер 18 предметов Deli"
        },
        price: 24.00,
        category: "office",
        inStock: true,
        images: ["images/organaizeri1.jpg"]
    },
    {
        id: 204,
        title: {
            ka: "15 საგნიანი სამაგიდე ორგანიზატორი Deli",
            en: "15-Piece Desk Organizer Deli",
            ru: "Настольный органайзер 15 предметов Deli"
        },
        price: 18.00,
        category: "office",
        inStock: true,
        images: ["images/organaizeri2.png"]
    },
    {
        id: 205,
        title: {
            ka: "17 საგნიანი სამაგიდე ორგანიზატორი Deli",
            en: "17-Piece Desk Organizer Deli",
            ru: "Настольный органайзер 17 предметов Deli"
        },
        price: 22.00,
        category: "office",
        inStock: true,
        images: ["images/organaizeri3.png"]
    },
    {
        id: 206,
        title: {
            ka: "მოლბერტი \"ეტუდიანი-ორგანიზატორი\" 3 თაროიანი, 2308199",
            en: "Easel Box Organizer 3 Shelves, 2308199",
            ru: "Мольберт-этюдник-органайзер 3-полочный, 2308199"
        },
        price: 150.00,
        category: "office",
        inStock: true,
        images: ["images/organaizeri4.jpg"]
    },
    {
        id: 207,
        title: {
            ka: "სამაგიდე ორგანიზატორი Deli",
            en: "Desk Organizer Deli",
            ru: "Настольный органайзер Deli"
        },
        price: 11.00,
        category: "office",
        inStock: true,
        images: ["images/organaizeri5.jpg"]
    },
    {
        id: 208,
        title: {
            ka: "სამაგიდე ორგანიზატორი Deli",
            en: "Desk Organizer Deli",
            ru: "Настольный органайзер Deli"
        },
        price: 8.50,
        category: "office",
        inStock: true,
        images: ["images/organaizeri6.jpg"]
    },
    {
        id: 209,
        title: {
            ka: "ორგანიზატორი სამაგიდე ნაკრები 16 საგნიანი 38254 DELI",
            en: "Desk Organizer Set 16-Piece 38254 DELI",
            ru: "Настольный набор-органайзер 16 предметов 38254 DELI"
        },
        price: 20.00,
        category: "office",
        inStock: true,
        images: ["images/organaizeri7.png"]
    },
    {
        id: 210,
        title: {
            ka: "ორგანიზატორი სამაგიდე ნაკრები 12 საგნიანი 38253 DELI",
            en: "Desk Organizer Set 12-Piece 38253 DELI",
            ru: "Настольный набор-органайзер 12 предметов 38253 DELI"
        },
        price: 14.00,
        category: "office",
        inStock: true,
        images: ["images/organaizeri8.png"]
    },
    {
        id: 211,
        title: {
            ka: "სამაგიდე ორგანიზატორი 9147 DELI",
            en: "Desk Organizer 9147 DELI",
            ru: "Настольный органайзер 9147 DELI"
        },
        price: 5.20,
        category: "office",
        inStock: true,
        images: ["images/organaizeri9.jpg"]
    },
    {
        id: 212,
        title: {
            ka: "სამაგიდე ორგანიზატორი Z25140 DELI",
            en: "Desk Organizer Z25140 DELI",
            ru: "Настольный органайзер Z25140 DELI"
        },
        price: 10.50,
        category: "office",
        inStock: true,
        images: ["images/organaizeri10.jpg"]
    },
    {
        id: 213,
        title: {
            ka: "სამაგიდე ორგანიზატორი Z25150 DELI",
            en: "Desk Organizer Z25150 DELI",
            ru: "Настольный органайзер Z25150 DELI"
        },
        price: 10.50,
        category: "office",
        inStock: true,
        images: ["images/organaizeri11.jpg"]
    },
    {
        id: 214,
        title: {
            ka: "სამაგიდე ორგანიზატორი Z25130 DELI",
            en: "Desk Organizer Z25130 DELI",
            ru: "Настольный органайзер Z25130 DELI"
        },
        price: 10.50,
        category: "office",
        inStock: true,
        images: ["images/organaizeri12.jpg"]
    },
    {
        id: 215,
        title: {
            ka: "ორგანიზატორი სამაგიდე 9110 DELI",
            en: "Desk Organizer 9110 DELI",
            ru: "Настольный органайзер 9110 DELI"
        },
        price: 16.00,
        category: "office",
        inStock: true,
        images: ["images/organaizeri13.jpg"]
    },
    {
        id: 216,
        title: {
            ka: "კალმების ჩასადები ჭიქა ბადე LY 9109",
            en: "Mesh Metal Pen Cup Holder LY 9109",
            ru: "Сетчатый стаканчик для ручек LY 9109"
        },
        price: 16.00,
        category: "office",
        inStock: true,
        images: ["images/kalchasadebi.jpg"]
    },
        {
        id: 217,
        title: {
            ka: "კალმის და ჩასანიშნის  ჩასადები ჭიქა ბადე Deli Stationery",
            en: "metal pen and stationery holder, Deli Stationery",
            ru: "металлическая подставка для ручек и канцелярских принадлежностей Deli Stationery"
        },
        price: 8.00,
        category: "office",
        inStock: true,
        images: ["images/kalchasadebi2.jpg"]
    },
        {
        id: 218,
        title: {
            ka: "კალმის პლასტიკური ჩასადები Deli Stationery",
            en: "Plastic Pen Holder Deli Stationery",
            ru: "Пластиковый держатель для ручек Deli Stationery"
        },
        price: 7.00,
        category: "office",
        inStock: true,
        images: ["images/kalchasadebi3.jpg"]
    },

        {
        id: 219,
        title: {
            ka: "კალმის ჩასადები პლასტიკური 120*155*96mm NS950 ,DELI",
            en: "Plastic Pen Holder 120×155×96mm NS950, DELI",
            ru: "Пластиковый держатель для ручек 120×155×96 мм NS950, DELI"
        },
        price: 9.80,
        category: "office",
        inStock: true,
        images: ["images/kalchasadebi4.jpg"]
    },

        {
        id: 220,
        title: {
            ka: "კალმის ჩასადები პლასტიკური 120*91*205mm 8939 ,DELI",
            en: "Plastic Pen Holder 120×91×205mm 8939, DELI",
            ru: "Пластиковый держатель для ручек 120×91×205 мм 8939, DELI"
        },
        price: 6.20,
        category: "office",
        inStock: true,
        images: ["images/kalchasadebi5.jpg"]
    },

        {
        id: 221,
        title: {
            ka: "კალმის ჩასადები პლასტიკური 84×84×86mm NS011 ,DELI",
            en: "Plastic Pen Holder 84×84×86mm NS011, DELI",
            ru: "Пластиковый держатель для ручек 84×84×86 мм NS011, DELI"
        },
        price: 9.50,
        category: "office",
        inStock: true,
        images: ["images/kalchasadebi6.jpg"]
    },

        {
        id: 222,
        title: {
            ka: "ლითონის საკანცელარიო ჭიქა Deli Stationery",
            en: "Metal Stationery Cup, Deli Stationery",
            ru: "Металлический стакан для канцелярских принадлежностей, Deli Stationery"
        },
        price: 3.00,
        category: "office",
        inStock: true,
        images: ["images/kalchasadebi7.jpg"]
    },
        {
        id: 222,
        title: {
            ka: "ლითონის საკანცელარიო ჭიქა Deli Stationery",
            en: "Metal Stationery Cup, Deli Stationery",
            ru: "Металлический стакан для канцелярских принадлежностей, Deli Stationery"
        },
        price: 3.00,
        category: "office",
        inStock: true,
        images: ["images/kalchasadebi8.png"]
    },
         {
        id: 223,
        title: {
            ka: "ვერტიკალური საქაღალდე 5 განყოფილებით 9838",
            en: "Vertical File Organizer with 5 Compartments 9838",
            ru: "Вертикальный органайзер для документов с 5 отделениями 9838"
        },
        price: 14.00,
        category: "office",
        inStock: true,
        images: ["images/taro1.jpg"]
    },
       {
        id: 224,
        title: {
            ka: "საკანცელარიო თარო ლითონის - 2 ცალიანი Deli Stationery",
            en: "Metal Stationery Shelf – 2-Piece Set, Deli Stationery",
            ru: "Металлическая канцелярская полка — набор из 2 штук, Deli Stationery"
        },
        price: 25.00,
        category: "office",
        inStock: true,
        images: ["images/taro2.jpg"]
    },
       {
        id: 223,
        title: {
            ka: "საკანცელარიო თარო ლითონის - 3 ცალიანი Deli Stationery",
            en: "Metal Stationery Shelf – 3-Piece Set, Deli Stationery",
            ru: "Металлическая канцелярская полка — набор из 3 штук, Deli Stationery"
        },
        price: 28.00,
        category: "office",
        inStock: true,
        images: ["images/taro3.png"]
    },
      {
        id: 224,
        title: {
            ka: "საკანცელარიო თაროები (2 სართული) Deli Stationery",
            en: "2-Tier Stationery Shelf, Deli Stationery",
            ru: "Канцелярская полка (2 яруса), Deli Stationery"
        },
        price: 15.00,
        category: "office",
        inStock: true,
        images: ["images/taro4.png"]
    },
     {
        id: 225,
        title: {
            ka: "საკანცელარიო თაროები (3 სართული) Deli Stationery",
            en: "3-Tier Stationery Shelf, Deli Stationery",
            ru: "Канцелярская полка (3 яруса), Deli Stationery"
        },
        price: 22.00,
        category: "office",
        inStock: true,
        images: ["images/taro5.png"]
    },
       {
        id: 226,
        title: {
            ka: "საკანცელარიო ჯამი ვერტიკალური 2050",
            en: "Vertical Stationery Organizer 2050",
            ru: "Вертикальный канцелярский органайзер 2050"
        },
        price: 5.00,
        category: "office",
        inStock: true,
        images: ["images/taro6.jpg"]
    },
    {
        id: 227,
        title: {
            ka: "საქაღალდე ვერტიკალური 4 განყოფილებიანი Deli Stationery",
            en: "Vertical File Organizer with 4 Compartments, Deli Stationery",
            ru: "Вертикальный органайзер для документов с 4 отделениями, Deli Stationery"
        },
        price: 13.00,
        category: "office",
        inStock: true,
        images: ["images/taro7.png"]
    },
     {
        id: 228,
        title: {
            ka: "საქაღალდე ვერტიკალური EB41102 , DELI",
            en: "Vertical File Organizer EB41102, DELI",
            ru: "Вертикальный органайзер для документов EB41102, DELI"
        },
        price: 12.00,
        category: "office",
        inStock: true,
        images: ["images/taro8.jpg"]
    },
     {
        id: 229,
        title: {
            ka: "ჯამი საკანცელარიო 2სართ. LY 9207",
            en: "2-Tier Stationery Organizer LY 9207",
            ru: "2-ярусный канцелярский органайзер LY 9207"
        },
        price: 15.00,
        category: "office",
        inStock: true,
        images: ["images/taro9.png"]
    },
    {
        id: 230,
        title: {
            ka: "ჯამი საკანცელარიო 370",
            en: "Stationery Organizer 370",
            ru: "Канцелярский органайзер 370"
        },
        price: 5.00,
        category: "office",
        inStock: true,
        images: ["images/taro10.jpg"]
    },
        {
        id: 231,
        title: {
            ka: "ჯამი საკანცელარიო 3სართ.",
            en: "3-Tier Stationery Organizer",
            ru: "3-ярусный канцелярский органайзер"
        },
        price: 18.00,
        category: "office",
        inStock: true,
        images: ["images/taro11.jpg"]
    },
    {
        id: 232,
        title: {
            ka: "ჯამი საკანცელარიო 4 სართ.",
            en: "4-Tier Stationery Organizer",
            ru: "4-ярусный канцелярский органайзер"
        },
        price: 20.00,
        category: "office",
        inStock: true,
        images: ["images/taro12.png"]
    },
       {
        id: 233,
        title: {
            ka: "ფირნიში სამაგიდე 168*75*220mm TF301, DELI",
            en: "Desktop Nameplate 168×75×220mm TF301, DELI",
            ru: "Настольная табличка 168×75×220 мм TF301, DELI"
        },
        price: 7.50,
        category: "office",
        inStock: true,
        images: ["images/firnish1.jpg"]
    },
          {
        id: 234,
        title: {
            ka: "ფირნიში სამაგიდე 180*100mm TF108, DELI",
            en: "Desktop Nameplate 180×100mm TF108, DELI",
            ru: "Настольная табличка 180×100 мм TF108, DELI"
        },
        price: 3.30,
        category: "office",
        inStock: true,
        images: ["images/firnishi2.jpg"]
    },
        {
        id: 235,
        title: {
            ka: "ფირნიში სამაგიდე 209*72*105mm TF109, DELI",
            en: "Desktop Nameplate 209×72×105mm TF109, DELI",
            ru: "Настольная табличка 209×72×105 мм TF109, DELI"
        },
        price: 3.30,
        category: "office",
        inStock: true,
        images: ["images/firnishi3.jpg"]
    },
      {
        id: 236,
        title: {
            ka: "ფირნიში სამაგიდე 150*60mm Deli Stationery",
            en: "Desktop Nameplate 150×60mm, Deli Stationery",
            ru: "Настольная табличка 150×60 мм, Deli Stationery"
        },
        price: 4.90,
        category: "office",
        inStock: true,
        images: ["images/firnishi4.jpg"]
    },
    {
        id: 237,
        title: {
            ka: "სავიზიტე ბარათების ჩასადები (ბადე) LY 9132",
            en: "Business Card Holder (Mesh) LY 9132",
            ru: "Подставка для визитных карточек (сетка) LY 9132"
        },
        price: 2.40,
        category: "office",
        inStock: true,
        images: ["images/savizite1.png"]
    },
        {
        id: 238,
        title: {
            ka: "სავიზიტე ბარათების ჩასადები Deli Stationery",
            en: "Business Card Holder, Deli Stationery",
            ru: "Подставка для визитных карточек, Deli Stationery"
        },
        price: 7.80,
        category: "office",
        inStock: true,
        images: ["images/savizite2.jpg"]
    },
    {
        id: 240,
        title: {
            ka: "სავიზიტე ბარათების ჩასადები პლასტიკური Deli Stationery",
            en: "Plastic Business Card Holder, Deli Stationery",
            ru: "Пластиковая подставка для визитных карточек, Deli Stationery"
        },
        price: 2.60,
        category: "office",
        inStock: true,
        images: ["images/savizite4.jpg"]
    },
      {
        id: 241,
        title: {
            ka: "Camelion მაგიდის სანათები SR KD-313 SR 230V 60W",
            en: "Camelion Desk Lamp SR KD-313 SR, 230V 60W",
            ru: "Настольная лампа Camelion SR KD-313 SR, 230V 60W"
        },
        price: 45.00,
        category: "office",
        inStock: true,
        images: ["images/sanati1.jpg"]
    },
       {
        id: 242,
        title: {
            ka: "სამაგიდე სანათი 4316 , DELI",
            en: "Desk Lamp 4316, DELI",
            ru: "Настольная лампа 4316, DELI"
        },
        price: 34.00,
        category: "office",
        inStock: true,
        images: ["images/sanati2.jpg"]
    },
      {
        id: 243,
        title: {
            ka: "დანა 2045 , DELI",
            en: "Utility Knife 2045, DELI",
            ru: "Канцелярский нож 2045, DELI"
        },
        price: 7.50,
        category: "stationary",
        inStock: true,
        images: ["images/dana1.jpg"]
    },
          {
        id: 244,
        title: {
            ka: "დანა 2053 ,DELI",
            en: "Utility Knife 2053, DELI",
            ru: "Канцелярский нож 2053, DELI"
        },
        price: 1.30,
        category: "stationary",
        inStock: true,
        images: ["images/dana2.jpg"]
    },
         {
        id: 245,
        title: {
            ka: "დანა Trapezoidal blade 3 blades SK5 DL006Z , DELI",
            en: "Trapezoidal Blade Utility Knife, 3 SK5 Blades DL006Z, DELI",
            ru: "Канцелярский нож с трапециевидным лезвием, 3 лезвия SK5 DL006Z, DELI"
        },
        price: 14.00,
        category: "stationary",
        inStock: true,
        images: ["images/dana3.jpg"]
    },
      {
        id: 246,
        title: {
            ka: "დანა საკანცელარიო 2040, DELI",
            en: "Utility Knife 2040, DELI",
            ru: "Канцелярский нож 2040, DELI"
        },
        price: 3.60,
        category: "stationary",
        inStock: true,
        images: ["images/dana4.jpeg"]
    },
     {
        id: 247,
        title: {
            ka: "დანა საკანცელარიო Deli Stationery",
            en: "Utility Knife, Deli Stationery",
            ru: "Канцелярский нож, Deli Stationery"
        },
        price: 1.00,
        category: "stationary",
        inStock: true,
        images: ["images/dana5.jpg"]
    },
      {
        id: 248,
        title: {
            ka: "დანა საკანცელარიო საშუალო FX-122/678279",
            en: "Medium Utility Knife FX-122/678279",
            ru: "Канцелярский нож средний FX-122/678279"
        },
        price: 0.30,
        category: "stationary",
        inStock: true,
        images: ["images/dana6.jpg"]
    },
      {
        id: 249,
        title: {
            ka: "დანა საკანცელარიო დიდი რეზინის სახელურით M580 DELI",
            en: "Large Utility Knife with Rubber Handle M580, DELI",
            ru: "Большой канцелярский нож с резиновой ручкой M580, DELI"
        },
        price: 3.50,
        category: "stationary",
        inStock: true,
        images: ["images/dana7.jpg"]
    },
      {
        id: 250,
        title: {
            ka: "დანა საკანცელარიო Deli Stationery",
            en: "Utility Knife, Deli Stationery",
            ru: "Канцелярский нож, Deli Stationery"
        },
        price: 1.20,
        category: "stationary",
        inStock: true,
        images: ["images/dana8.png"]
    },
 
  {
    id: 251,
    title: {
      ka: "ავეჯის სტეპლერი 53/8 Deli Stationery",
      en: "Furniture Stapler 53/8 Deli Stationery",
      ru: "Мебельный степлер 53/8 Deli Stationery"
    },
    price: 30.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri251.png"]
  },
  {
    id: 252,
    title: {
      ka: "ავეჯის სტეპლერი 53/8 T35011, DELI",
      en: "Furniture Stapler 53/8 T35011, DELI",
      ru: "Мебельный степлер 53/8 T35011, DELI"
    },
    price: 25.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri252.jpg"]
  },
  {
    id: 253,
    title: {
      ka: "ავეჯის სტეპლერი DL1313B, DELI",
      en: "Furniture Stapler DL1313B, DELI",
      ru: "Мебельный степлер DL1313B, DELI"
    },
    price: 14.50,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri253.jpg"]
  },
  {
    id: 254,
    title: {
      ka: "ანტისტიპლერი Deli Stationery",
      en: "Staple Remover Deli Stationery",
      ru: "Антистеплер Deli Stationery"
    },
    price: 1.60,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri254.png"]
  },
  {
    id: 255,
    title: {
      ka: "სტეპლერი 23/25 210 ფურცლისთვის Deli Stationery",
      en: "Stapler 23/25 210 Sheets Deli Stationery",
      ru: "Степлер 23/25 на 210 листов Deli Stationery"
    },
    price: 65.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri255.png"]
  },
  {
    id: 256,
    title: {
      ka: "სტეპლერი #10 Deli Stationery",
      en: "Stapler #10 Deli Stationery",
      ru: "Степлер #10 Deli Stationery"
    },
    price: 6.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri256.jpg"]
  },
  {
    id: 257,
    title: {
      ka: "სტეპლერი 0416 Deli Stationery",
      en: "Stapler 0416 Deli Stationery",
      ru: "Степлер 0416 Deli Stationery"
    },
    price: 13.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri257.jpg"]
  },
  {
    id: 258,
    title: {
      ka: "სტეპლერი 12sheets, 24/6 & 26/6 NS083F, DELI",
      en: "Stapler 12sheets, 24/6 & 26/6 NS083F, DELI",
      ru: "Степлер 12 листов, 24/6 & 26/6 NS083F, DELI"
    },
    price: 4.90,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri258.jpg"]
  },
  {
    id: 259,
    title: {
      ka: "სტეპლერი 12sheets, 24/6 & 26/6 TA302, DELI",
      en: "Stapler 12sheets, 24/6 & 26/6 TA302, DELI",
      ru: "Степлер 12 листов, 24/6 & 26/6 TA302, DELI"
    },
    price: 5.50,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri259.jpg"]
  },
  {
    id: 260,
    title: {
      ka: "სტეპლერი 15 sheets, 24/6 & 26/6 EM212, Deli",
      en: "Stapler 15 sheets, 24/6 & 26/6 EM212, Deli",
      ru: "Степлер 15 листов, 24/6 & 26/6 EM212, Deli"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri260.jpg"]
  },
  {
    id: 261,
    title: {
      ka: "სტეპლერი 15 sheets, 24/6 & 26/6 EM413, Deli",
      en: "Stapler 15 sheets, 24/6 & 26/6 EM413, Deli",
      ru: "Степлер 15 листов, 24/6 & 26/6 EM413, Deli"
    },
    price: 2.90,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri261.jpg"]
  },
  {
    id: 262,
    title: {
      ka: "სტეპლერი 20sheets, 24/6 & 26/6 NS084, DELI",
      en: "Stapler 20sheets, 24/6 & 26/6 NS084, DELI",
      ru: "Степлер 20 листов, 24/6 & 26/6 NS084, DELI"
    },
    price: 7.50,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri262.jpg"]
  },
  {
    id: 263,
    title: {
      ka: "სტეპლერი 23/10 100 ფურცლისთვის Deli Stationery",
      en: "Stapler 23/10 100 Sheets Deli Stationery",
      ru: "Степлер 23/10 на 100 листов Deli Stationery"
    },
    price: 35.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri263.png"]
  },
  {
    id: 264,
    title: {
      ka: "სტეპლერი 23/10 50ფ 0392, DELI",
      en: "Stapler 23/10 50 Sheets 0392, DELI",
      ru: "Степлер 23/10 50 листов 0392, DELI"
    },
    price: 25.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri264.png"]
  },
  {
    id: 265,
    title: {
      ka: "სტეპლერი 23/10 60 ფურცლის აკინძვის საშუალებით Deli",
      en: "Stapler 23/10 60 Sheets Binding Capacity Deli",
      ru: "Степлер 23/10 с сшиванием до 60 листов Deli"
    },
    price: 33.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri265.png"]
  },
  {
    id: 266,
    title: {
      ka: "სტეპლერი 23/10 60ფურცლისთვის Deli Stationery",
      en: "Stapler 23/10 60 Sheets Deli Stationery",
      ru: "Степлер 23/10 на 60 листов Deli Stationery"
    },
    price: 22.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri266.png"]
  },
  {
    id: 267,
    title: {
      ka: "სტეპლერი 23/13 80 ფურცლის აკინძვის საშუალებით Deli",
      en: "Stapler 23/13 80 Sheets Binding Capacity Deli",
      ru: "Степлер 23/13 с сшиванием до 80 листов Deli"
    },
    price: 50.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri267.png"]
  },
  {
    id: 268,
    title: {
      ka: "სტეპლერი 23/17 120 ფურცლის აკინძვის საშუალებით Deli",
      en: "Stapler 23/17 120 Sheets Binding Capacity Deli",
      ru: "Степлер 23/17 с сшиванием до 120 листов Deli"
    },
    price: 65.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri268.jpg"]
  },
  {
    id: 269,
    title: {
      ka: "სტეპლერი 23/25 210 ფურცლიანი Deli Stationery",
      en: "Stapler 23/25 210 Sheets Capacity Deli Stationery",
      ru: "Степлер 23/25 на 210 листов Deli Stationery"
    },
    price: 60.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri269.png"]
  },
  {
    id: 270,
    title: {
      ka: "სტეპლერი 24/6 0346 Deli Stationery",
      en: "Stapler 24/6 0346 Deli Stationery",
      ru: "Степлер 24/6 0346 Deli Stationery"
    },
    price: 10.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri270.jpg"]
  },
  {
    id: 271,
    title: {
      ka: "სტეპლერი 24/6 Deli Stationery",
      en: "Stapler 24/6 Deli Stationery",
      ru: "Степлер 24/6 Deli Stationery"
    },
    price: 12.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri271.jpg"]
  },
  {
    id: 272,
    title: {
      ka: "სტეპლერი 24/6 Deli Stationery (გრძელი)",
      en: "Long Arm Stapler 24/6 Deli Stationery",
      ru: "Длинноплечий степлер 24/6 Deli Stationery"
    },
    price: 15.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri272.png"]
  },
  {
    id: 273,
    title: {
      ka: "სტეპლერი 24/6 Deli Stationery (ფერადი)",
      en: "Stapler 24/6 Deli Stationery (Colored)",
      ru: "Степлер 24/6 Deli Stationery (Цветной)"
    },
    price: 6.30,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri273.jpg"]
  },
  {
    id: 274,
    title: {
      ka: "სტეპლერი 24/6 0319, DELI",
      en: "Stapler 24/6 0319, DELI",
      ru: "Степлер 24/6 0319, DELI"
    },
    price: 5.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri274.png"]
  },
  {
    id: 275,
    title: {
      ka: "სტეპლერი 24/6 Deli Stationery (მინი)",
      en: "Mini Stapler 24/6 Deli Stationery",
      ru: "Мини-степлер 24/6 Deli Stationery"
    },
    price: 4.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri275.jpg"]
  },
  {
    id: 276,
    title: {
      ka: "სტეპლერი 24/6 Deli Stationery (ფორმირებული)",
      en: "Ergonomic Stapler 24/6 Deli Stationery",
      ru: "Эргономичный степлер 24/6 Deli Stationery"
    },
    price: 5.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri276.png"]
  },
  {
    id: 277,
    title: {
      ka: "სტეპლერი 24/6 Deli Stationery (შავი)",
      en: "Black Stapler 24/6 Deli Stationery",
      ru: "Черный степлер 24/6 Deli Stationery"
    },
    price: 9.60,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri277.png"]
  },
  {
    id: 278,
    title: {
      ka: "სტეპლერი 24/6 Deli Stationery (კომპლექტი)",
      en: "Stapler Set 24/6 Deli Stationery",
      ru: "Набор степлеров 24/6 Deli Stationery"
    },
    price: 5.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri278.jpg"]
  },
  {
    id: 279,
    title: {
      ka: "სტეპლერი 24/6 Deli Stationery (კლასიკი)",
      en: "Classic Stapler 24/6 Deli Stationery",
      ru: "Классический степлер 24/6 Deli Stationery"
    },
    price: 5.50,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri279.png"]
  },
  {
    id: 280,
    title: {
      ka: "სტეპლერი 24/6 Deli Stationery (თეთრი/ნაცრისფერი)",
      en: "White/Grey Stapler 24/6 Deli Stationery",
      ru: "Бело-серый степлер 24/6 Deli Stationery"
    },
    price: 12.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri280.png"]
  },

  {
    id: 281,
    title: {
      ka: "სტეპლერი 24/6 Deli Stationery",
      en: "Stapler 24/6 Deli Stationery",
      ru: "Степлер 24/6 Deli Stationery"
    },
    price: 5.50,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri281.jpg"]
  },
  {
    id: 282,
    title: {
      ka: "სტეპლერი 24/6 E0402F, DELI",
      en: "Stapler 24/6 E0402F, DELI",
      ru: "Степлер 24/6 E0402F, DELI"
    },
    price: 5.70,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri282.jpg"]
  },
  {
    id: 283,
    title: {
      ka: "სტეპლერი 24/6 E0425, Deli",
      en: "Stapler 24/6 E0425, Deli",
      ru: "Степлер 24/6 E0425, Deli"
    },
    price: 3.90,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri283.png"]
  },
  {
    id: 284,
    title: {
      ka: "სტეპლერი 24/6 E0426, Deli",
      en: "Stapler 24/6 E0426, Deli",
      ru: "Степлер 24/6 E0426, Deli"
    },
    price: 6.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri284.jpg"]
  },
  {
    id: 285,
    title: {
      ka: "სტეპლერი 24/6 E0464, DELI",
      en: "Stapler 24/6 E0464, DELI",
      ru: "Степлер 24/6 E0464, DELI"
    },
    price: 8.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri285.jpg"]
  },
  {
    id: 286,
    title: {
      ka: "სტეპლერი 24/6&26/6 25ფ. E0350",
      en: "Stapler 24/6&26/6 25 Sheets E0350",
      ru: "Степлер 24/6&26/6 25 листов E0350"
    },
    price: 5.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri286.jpg"]
  },
  {
    id: 287,
    title: {
      ka: "სტეპლერი 24/6,26/6 25ფ E0300, DELI",
      en: "Stapler 24/6,26/6 25 Sheets E0300, DELI",
      ru: "Степлер 24/6,26/6 25 листов E0300, DELI"
    },
    price: 5.50,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri287.jpg"]
  },
  {
    id: 288,
    title: {
      ka: "სტეპლერი 24/6,26/6 25ფ E0463, DELI",
      en: "Stapler 24/6,26/6 25 Sheets E0463, DELI",
      ru: "Степлер 24/6,26/6 25 листов E0463, DELI"
    },
    price: 11.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri288.png"]
  },
  {
    id: 289,
    title: {
      ka: "სტეპლერი 25 sheets, 24/6 & 26/6 EM390, DELI",
      en: "Stapler 25 sheets, 24/6 & 26/6 EM390, DELI",
      ru: "Степлер 25 листов, 24/6 & 26/6 EM390, DELI"
    },
    price: 8.40,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri289.jpg"]
  },
  {
    id: 290,
    title: {
      ka: "სტეპლერი 25 ფურცლის აკინძვის საშუალებით Deli Stationery",
      en: "Stapler 25 Sheets Binding Capacity Deli Stationery",
      ru: "Степлер с сшиванием до 25 листов Deli Stationery"
    },
    price: 18.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri290.png"]
  },
  {
    id: 291,
    title: {
      ka: "სტეპლერი 25ფ. 24/6 & 26/6 E0434, DELI",
      en: "Stapler 25 Sheets 24/6 & 26/6 E0434, DELI",
      ru: "Степлер 25 листов 24/6 & 26/6 E0434, DELI"
    },
    price: 7.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri291.png"]
  },
  {
    id: 292,
    title: {
      ka: "სტეპლერი Mini Stapler 24/6 K203, DELI",
      en: "Mini Stapler 24/6 K203, DELI",
      ru: "Мини-степлер 24/6 K203, DELI"
    },
    price: 3.50,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri292.jpg"]
  },
  {
    id: 293,
    title: {
      ka: "სტეპლერი №10 0281, DELI",
      en: "Stapler №10 0281, DELI",
      ru: "Степлер №10 0281, DELI"
    },
    price: 3.10,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri293.jpg"]
  },
  {
    id: 294,
    title: {
      ka: "სტეპლერი №10 ტყვიით 0282, DELI",
      en: "Stapler №10 with Staples 0282, DELI",
      ru: "Степлер №10 со скобами 0282, DELI"
    },
    price: 3.10,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri294.jpg"]
  },
  {
    id: 295,
    title: {
      ka: "სტეპლერი №10, სტეპლერის ტყვიებით კომპლექტში Deli",
      en: "Stapler №10 with Staples Set Deli",
      ru: "Степлер №10 со скобами в комплекте Deli"
    },
    price: 3.60,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri295.png"]
  },
  {
    id: 296,
    title: {
      ka: "სტეპლერი №12 Deli Stationery",
      en: "Stapler №12 Deli Stationery",
      ru: "Степлер №12 Deli Stationery"
    },
    price: 13.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri296.png"]
  },
  {
    id: 297,
    title: {
      ka: "სტეპლერი Stapler 24/6 M331, DELI",
      en: "Stapler 24/6 M331, DELI",
      ru: "Степлер 24/6 M331, DELI"
    },
    price: 4.20,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri297.jpg"]
  },
  {
    id: 298,
    title: {
      ka: "სტეპლერი №10 0224",
      en: "Stapler №10 0224",
      ru: "Степлер №10 0224"
    },
    price: 2.50,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri298.png"]
  },
  {
    id: 299,
    title: {
      ka: "სტეპლერი №10 0238 deli",
      en: "Stapler №10 0238 deli",
      ru: "Степлер №10 0238 deli"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri299.jpg"]
  },
  {
    id: 300,
    title: {
      ka: "სტეპლერი №10 0260",
      en: "Stapler №10 0260",
      ru: "Степлер №10 0260"
    },
    price: 2.70,
    inStock: true,
    category: "stationery",
    images: ["images/stepleri300.png"]
  },
   {
    id: 301,
    title: {
      ka: "ბეიჯი ვერტიკალური, დამჭერით 5743 ,DELI",
      en: "Vertical Badge Holder with Clip 5743, DELI",
      ru: "Vertical Badge Holder with Clip 5743, DELI"
    },
    price: 0.45,
    inStock: true,
    category: "office",
    images: ["images/beiji1.jpg"]
  },
    {
    id: 302,
    title: {
      ka: "ბეიჯი ვერტიკალური, თასმით Deli Stationery",
      en: "Vertical Badge Holder with Lanyard, Deli Stationery",
      ru: "Вертикальный держатель для бейджа с лентой, Deli Stationery"
    },
    price: 1.00,
    inStock: true,
    category: "office",
    images: ["images/beiji2.png"]
  },
    {
    id: 303,
    title: {
      ka: "ბეიჯი ვერტიკალური, თასმით Deli Stationery",
      en: "Horizontal Badge Holder with Lanyard, Deli Stationery",
      ru: "Горизонтальный держатель для бейджа с лентой, Deli Stationery"
    },
    price: 1.10,
    inStock: true,
    category: "office",
    images: ["images/beiji3.png"]
  },
   {
    id: 304,
    title: {
      ka: "ბეიჯი ვერტიკალური, თასმით Deli Stationery",
      en: "Horizontal Badge Holder with Clip, Deli Stationery",
      ru: "Горизонтальный держатель для бейджа с клипсой, Deli Stationery"
    },
    price: 0.50,
    inStock: true,
    category: "office",
    images: ["images/beiji4.png"]
  },
 {
    id: 305,
    title: {
      ka: "ბეიჯის ზონარი Deli Stationery",
      en: "Badge Lanyard, Deli Stationery",
      ru: "Шнурок для бейджа, Deli Stationery"
    },
    price: 0.70,
    inStock: true,
    category: "office",
    images: ["images/beiji5.png"]
  },
 {
    id: 306,
    title: {
      ka: "კლიპსი მეტალის 76მმ Deli Stationery",
      en: "Retractable Badge Lanyard 8309, DELI",
      ru: "Выдвижной шнурок для бейджа 8309, DELI"
    },
    price: 2.00,
    inStock: true,
    category: "office",
    images: ["images/beiji6.jpg"]
  },
  {
    id: 307,
    title: {
      ka: "ბეიჯის გაჭიმვადი ზონარი 8309 , DELI",
      en: "Metal Paper Clip 76mm, Deli Stationery",
      ru: "Металлический зажим для бумаг 76 мм, Deli Stationery"
    },
    price: 1.40,
    inStock: true,
    category: "stationary",
    images: ["images/klipsi1.jpg"]
  },
   {
    id: 308,
    title: {
      ka: "კლიპსი მეტალის ფერადი 15მმ (შეკვრაში 60ცალი) Deli Stationery",
      en: "Colored Metal Paper Clips 15mm (Pack of 60), Deli Stationery",
      ru: "Цветные металлические зажимы для бумаг 15 мм (60 шт. в упаковке), Deli Stationery"
    },
    price: 5.00,
    inStock: true,
    category: "statyonary",
    images: ["images/klipsi2.jpg"]
  },
   {
    id: 309,
    title: {
      ka: "კლიპსი მეტალის ფერადი 19მმ (შეკვრაში 40ცალი) Deli Stationery",
      en: "Colored Metal Paper Clips 19mm (Pack of 40), Deli Stationery",
      ru: "Цветные металлические зажимы для бумаг 19 мм (40 шт. в упаковке), Deli Stationery"
    },
    price: 4.00,
    inStock: true,
    category: "stationary",
    images: ["images/klipsi3.jpeg"]
  },
   {
    id: 310,
    title: {
      ka: "კლიპსი მეტალის ფერადი 25მმ (შეკვრაში 48ცალი) Deli Stationery",
      en: "Colored Metal Paper Clips 25mm (Pack of 48), Deli Stationery",
      ru: "Цветные металлические зажимы для бумаг 25 мм (48 шт. в упаковке), Deli Stationery"
    },
    price: 7.00,
    inStock: true,
    category: "stationary",
    images: ["images/klipsi4.jpg"]
  },
  {
    id: 311,
    title: {
      ka: "ნაკრები:საკანცელარიო კლიფსი(ლითონის),სკრეპი, 78552 , DELI",
      en: "Set: Metal Paper Clips and Staples 78552, DELI",
      ru: "Набор: металлические скрепки и канцелярские скобы 78552, DELI"
    },
    price: 10.00,
    inStock: true,
    category: "stationary",
    images: ["images/skrepi1.jpg"]
  },{
    id: 312,
    title: {
      ka: "ნაკრები: კლიპსი(ლითონის), სკრეპი, ჭიკარტი Deli Stationery",
      en: "Set: Metal Paper Clips, Staples and Push Pins, Deli Stationery",
      ru: "Набор: металлические скрепки, канцелярские скобы и кнопки, Deli Stationery"
    },
    price: 7.50,
    inStock: true,
    category: "stationary",
    images: ["images/skrepi2.jpg"]
  },{
    id: 313,
    title: {
      ka: "სკრეპი 50მმ 100 ცალი Deli Stationery",
      en: "Paper Clips 50mm, 100 pcs, Deli Stationery",
      ru: "Скрепки 50 мм, 100 шт., Deli Stationery"
    },
    price: 2.00,
    inStock: true,
    category: "stationary",
    images: ["images/skrepi3.png"]
  },
  {
    id: 314,
    title: {
      ka: "სკრეპი N3 200 ცალი Deli Stationery",
      en: "Paper Clips No. 3, 200 pcs, Deli Stationery",
      ru: "Скрепки №3, 200 шт., Deli Stationery"
    },
    price: 2.80,
    inStock: true,
    category: "stationary",
    images: ["images/skrepi4.jpg"]
  },
  {
    id: 315,
    title: {
      ka: "სკრეპი ფერადი N3 200 ცალი Deli Stationery",
      en: "Colored Paper Clips No. 3, 200 pcs, Deli Stationery",
      ru: "Цветные скрепки №3, 200 шт., Deli Stationery"
    },
    price: 3.00,
    inStock: true,
    category: "stationary",
    images: ["images/skrepi5.jpg"]
  },
  {
    id: 316,
    title: {
      ka: "სკრეპი ფერადი N3 ფერადი Deli Stationery",
      en: "Colored Paper Clips No. 3, Deli Stationery",
      ru: "Цветные скрепки №3, Deli Stationery"
    },
    price: 1.50,
    inStock: true,
    category: "stationary",
    images: ["images/skrepi6.png"]
  },
    {
    id: 317,
    title: {
      ka: "თითის დასასველებელი Deli Stationery",
      en: "Finger Moistener, Deli Stationery",
      ru: "Увлажнитель для пальцев, Deli Stationery"
    },
    price: 3.00,
    inStock: true,
    category: "office",
    images: ["images/titi1.png"]
  },
   {
    id: 318,
    title: {
      ka: "გასაღებების ყუთი 120 გასაღებისათვის 50803 , 398*63*782mm DELI",
      en: "Key Cabinet for 120 Keys 50803, 398×63×782mm, DELI",
      ru: "Ключница на 120 ключей 50803, 398×63×782 мм, DELI"
    },
    price: 170.00,
    inStock: true,
    category: "office",
    images: ["images/gagsagebi1.jpg"]
  },
 {
    id: 319,
    title: {
      ka: "გასაღებების ყუთი 120 გასაღებისათვის Deli Stationery",
      en: " Key Cabinet for 120 Keys, Deli Stationery",
      ru: "Ключница на 120 ключей, Deli Stationery"
    },
    price: 220.00,
    inStock: true,
    category: "office",
    images: ["images/gasagebi2.jpg"]
  },
 {
    id: 320,
    title: {
      ka: "გასაღებების ყუთი 24 გასაღებისათვის 50800 , DELI",
      en: "Key Cabinet for 24 Keys 50800, DELI",
      ru: "Ключница на 24 ключа 50800, DELI"
    },
    price: 65.00,
    inStock: true,
    category: "office",
    images: ["images/gasagebi3.jpg"]
  },

  {
    id: 320,
    title: {
      ka: "გასაღებების ყუთი 72 გასაღებისათვის Deli Stationery",
      en: "Key Cabinet for 72 Keys, Deli Stationery",
      ru: "Ключница на 72 ключа, Deli Stationery"
    },
    price: 200.00,
    inStock: true,
    category: "office",
    images: ["images/gasagebi4.jpg"]
  },
    {
    id: 321,
    title: {
      ka: "გასაღებების ყუთი 96 გასაღებისათვის 398*63*630mm 50802 , DELI",
      en: "Key Cabinet for 96 Keys 398×63×630mm 50802, DELI",
      ru: "Ключница на 96 ключей 398×63×630 мм 50802, DELI"
    },
    price: 135.00,
    inStock: true,
    category: "office",
    images: ["images/gasagebi5.jpg"]
  },
  
  {
    id: 322,
    title: {
      ka: "გასაღებების ყუთი 96 გასაღებისათვის Deli Stationery",
      en: "Key Cabinet for 96 Keys, Deli Stationery",
      ru: "Ключница на 96 ключей, Deli Stationery"
    },
    price: 200.00,
    inStock: true,
    category: "office",
    images: ["images/gasagebi6.jpg"]
  },
  {
    id: 323,
    title: {
      ka: "გასაღების ბრელოკი 40×28სმ Deli Stationery",
      en: "Key Tag 40×28cm, Deli Stationery",
      ru: "Брелок для ключей 40×28 см, Deli Stationery"
    },
    price: 0.50,
    inStock: true,
    category: "office",
    images: ["images/gasagebi7.jpg"]
  },
  {
    id: 324,
    title: {
      ka: "გასაღების ბრელოკი პლასტმასის (24ც) 40×28სმ Deli Stationery",
      en: "Plastic Key Tags (24 pcs) 40×28cm, Deli Stationery",
      ru: "Пластиковые брелоки для ключей (24 шт.) 40×28 см, Deli Stationery"
    },
    price: 11.00,
    inStock: true,
    category: "office",
    images: ["images/gasagebi3.jpg"]
  },
  {
    id: 325,
    title: {
      ka: "ურნა მეტალის ბადე LY9102",
      en: "Metal Mesh Wastebasket LY9102",
      ru: "Металлическая сетчатая корзина для мусора LY9102"
    },
    price: 7.00,
    inStock: true,
    category: "office",
    images: ["images/urna1.jpg"]
  },
   {
    id: 326,
    title: {
      ka: "ურნა მეტალის ბადე LY9103",
      en: "Metal Mesh Wastebasket LY9103",
      ru: "Металлическая сетчатая корзина для мусора LY9103"
    },
    price: 6.00,
    inStock: true,
    category: "office",
    images: ["images/urna2.jpg"]
  },
  {
    id: 327,
    title: {
      ka: "საფერფლე ურნა, მეტალის საშუალო FS-M",
      en: "Medium Metal Ashtray Bin FS-M",
      ru: "Металлическая урна-пепельница, средняя FS-M"
    },
    price: 35.00,
    inStock: true,
    category: "office",
    images: ["images/urna3.jpg"]
  },
    {
    id: 328,
    title: {
      ka: "ცოცხი/აქანდაზი 32sm*87.5sm LQ580 . DELI",
      en: "Broom and Dustpan 32×87.5cm LQ580, DELI",
      ru: "Набор: веник и совок 32×87,5 см LQ580, DELI"
    },
    price: 17.00,
    inStock: true,
    category: "office",
    images: ["images/urna4.jpg"]
  },
  {
    id: 329,
    title: {
      ka: "პაპკა პლანშეტი სამდივნო ორმაგი Deli Stationery",
      en: "Clipboard Folder Double Deli Stationery",
      ru: "Папка-планшет двойная Deli Stationery"
    },
    price: 9.50,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno1.jpg"]
  },
  {
    id: 330,
    title: {
      ka: "პლანშეტი ერთმაგი A4 38153A BLUE, DELI",
      en: "Single Clipboard A4 38153A BLUE, DELI",
      ru: "Планшет одинарный A4 38153A BLUE, DELI"
    },
    price: 2.60,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno2.jpg"]
  },
  {
    id: 331,
    title: {
      ka: "პლანშეტი ერთმაგი A4 38153B BLACK, DELI",
      en: "Single Clipboard A4 38153B BLACK, DELI",
      ru: "Планшет одинарный A4 38153B BLACK, DELI"
    },
    price: 2.60,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno3.png"]
  },
  {
    id: 332,
    title: {
      ka: "პლანშეტი ორმაგი A4 38154A BLUE, DELI",
      en: "Double Clipboard A4 38154A BLUE, DELI",
      ru: "Планшет двойной A4 38154A BLUE, DELI"
    },
    price: 4.00,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno4.jpg"]
  },
  {
    id: 333,
    title: {
      ka: "პლანშეტი ორმაგი A4 38154B BLACK, DELI",
      en: "Double Clipboard A4 38154B BLACK, DELI",
      ru: "Планшет двойной A4 38154B BLACK, DELI"
    },
    price: 4.00,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno5.jpg"]
  },
  {
    id: 334,
    title: {
      ka: "პლანშეტი პლასტიკური F403, DELI",
      en: "Plastic Clipboard F403, DELI",
      ru: "Планшет пластиковый F403, DELI"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno6.jpg"]
  },
  {
    id: 335,
    title: {
      ka: "პლანშეტი პლასტიკური F404, DELI",
      en: "Plastic Clipboard F404, DELI",
      ru: "Планшет пластиковый F404, DELI"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno7.jpg"]
  },
  {
    id: 336,
    title: {
      ka: "პლანშეტი პლასტიკური F75422, DELI",
      en: "Plastic Clipboard F75422, DELI",
      ru: "Планшет пластиковый F75422, DELI"
    },
    price: 4.50,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno8.jpg"]
  },
  {
    id: 337,
    title: {
      ka: "პლანშეტი პლასტიკური F75432, DELI",
      en: "Plastic Clipboard F75432, DELI",
      ru: "Планшет пластиковый F75432, DELI"
    },
    price: 4.50,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno9.jpg"]
  },
  {
    id: 338,
    title: {
      ka: "პლანშეტი პლასტიკური F75632, DELI",
      en: "Plastic Clipboard F75632, DELI",
      ru: "Планшет пластиковый F75632, DELI"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno10.jpg"]
  },
  {
    id: 339,
    title: {
      ka: "პლანშეტი პლასტიკური P64, DELI",
      en: "Plastic Clipboard P64, DELI",
      ru: "Планшет пластиковый P64, DELI"
    },
    price: 4.90,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno11.jpg"]
  },
  {
    id: 340,
    title: {
      ka: "პლანშეტი პლასტიკური PE107, DELI",
      en: "Plastic Clipboard PE107, DELI",
      ru: "Планшет пластиковый PE107, DELI"
    },
    price: 4.00,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno12.jpg"]
  },
  {
    id: 341,
    title: {
      ka: "პლანშეტი პლასტიკური TB403, DELI",
      en: "Plastic Clipboard TB403, DELI",
      ru: "Планшет пластиковый TB403, DELI"
    },
    price: 7.80,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno13.jpg"]
  },
  {
    id: 342,
    title: {
      ka: "პლანშეტი სამდივნო 64506, DELI",
      en: "Clipboard Folder 64506, DELI",
      ru: "Планшет планшетный 64506, DELI"
    },
    price: 10.00,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno14.jpg"]
  },
  {
    id: 343,
    title: {
      ka: "პლანშეტი სამდივნო A5 64507, DELI",
      en: "Clipboard Folder A5 64507, DELI",
      ru: "Планшет планшетный A5 64507, DELI"
    },
    price: 9.00,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno15.jpg"]
  },
  {
    id: 344,
    title: {
      ka: "პლანშეტი სამდივნო ორმაგი 64513, DELI",
      en: "Double Clipboard Folder 64513, DELI",
      ru: "Папка-планшет двойная 64513, DELI"
    },
    price: 6.60,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno16.jpg"]
  },
  {
    id: 345,
    title: {
      ka: "სამდივნო დაფა A4 9226 Deli Stationery",
      en: "Wooden Clipboard A4 9226 Deli Stationery",
      ru: "Деревянный планшет A4 9226 Deli Stationery"
    },
    price: 4.50,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno17.png"]
  },
  {
    id: 346,
    title: {
      ka: "სამდივნო დაფა A4 Deli Stationery",
      en: "Clipboard A4 Deli Stationery",
      ru: "Планшет A4 Deli Stationery"
    },
    price: 4.50,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno18.jpg"]
  },
  {
    id: 347,
    title: {
      ka: "სამდივნო დაფა Deli Stationery",
      en: "Clipboard Deli Stationery",
      ru: "Планшет Deli Stationery"
    },
    price: 4.20,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno19.jpg"]
  },
  {
    id: 348,
    title: {
      ka: "სამდივნო დაფა კალკულატორით Deli Stationery",
      en: "Clipboard with Calculator Deli Stationery",
      ru: "Планшет с калькулятором Deli Stationery"
    },
    price: 16.00,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno20.png"]
  },
  {
    id: 349,
    title: {
      ka: "სამდივნო დაფა პლასტიკური Deli Stationery",
      en: "Plastic Clipboard Deli Stationery",
      ru: "Пластиковый планшет Deli Stationery"
    },
    price: 6.90,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno21.png"]
  },
  {
    id: 350,
    title: {
      ka: "სამდივნო დაფა პლასტიკური Deli Stationery",
      en: "Plastic Clipboard Deli Stationery",
      ru: "Пластиковый планшет Deli Stationery"
    },
    price: 5.50,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno22.png"]
  },
  {
    id: 351,
    title: {
      ka: "სამდივნო დაფა სადგამით Deli Stationery",
      en: "Clipboard with Stand Deli Stationery",
      ru: "Планшет с подставкой Deli Stationery"
    },
    price: 10.00,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno23.jpg"]
  },
  {
    id: 352,
    title: {
      ka: "სამდივნო დაფა, ორმხრივი 64504, DELI",
      en: "Double-Sided Clipboard 64504, DELI",
      ru: "Двусторонний планшет 64504, DELI"
    },
    price: 8.00,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno24.jpg"]
  },
  {
    id: 353,
    title: {
      ka: "საქაღალდე პლასტიკური A4 NS501, DELI",
      en: "Plastic Folder A4 NS501, DELI",
      ru: "Пластиковая папка A4 NS501, DELI"
    },
    price: 6.00,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno25.jpg"]
  },
  {
    id: 354,
    title: {
      ka: "საქაღალდე პლასტიკური A4 PE102, DELI",
      en: "Plastic Folder A4 PE102, DELI",
      ru: "Пластиковая папка A4 PE102, DELI"
    },
    price: 7.90,
    inStock: true,
    category: "stationery",
    images: ["images/samdivno26.png"]
  },
  {
    id: 355,
    title: {
      ka: "ჩასანიშნი ქაღალდი 85*85 300 ფურცელი",
      en: "Memo Pad 85×85mm, 300 Sheets",
      ru: "Блок для заметок 85×85 мм, 300 листов"
    },
    price: 3.30,
    inStock: true,
    category: "stationery",
    images: ["images/chasanishni1.jpg"]
  },
    {
    id: 356,
    title: {
      ka: "ჩასანიშნი ქაღალდი 85*85 500 ფურცელი",
      en: "Memo Pad 85×85mm, 500 Sheets",
      ru: "Блок для заметок 85×85 мм, 500 листов"
    },
    price: 4.00,
    inStock: true,
    category: "stationery",
    images: ["images/chasanishni1.jpg"]
  },
   {
    id: 357,
    title: {
      ka: "ჩასანიშნი ქაღალდი 85*85 500 ფურცელი",
      en: "Sticky Notes 76×76mm, 100 Sheets, A03Y",
      ru: "Клейкие заметки 76×76 мм, 100 листов, A03Y"
    },
    price: 0.70,
    inStock: true,
    category: "stationery",
    images: ["images/chasanishni3.jpg"]
  },
     {
    id: 358,
    title: {
      ka: "ჩასანიშნი წებოვანი 76x76მმ 400ფ T4-400/901258",
      en: "Sticky Notes 76×76mm, 400 Sheets, T4-400/901258",
      ru: "Клейкие заметки 76×76 мм, 400 листов, T4-400/901258"
    },
    price: 2.50,
    inStock: true,
    category: "stationery",
    images: ["images/chasanishni4.jpg"]
  },
   {
    id: 359,
    title: {
      ka: "ჩასანიშნი წებოვანი ნეონი 51x51მმ 400ფ A03303, DELI",
      en: "Neon Sticky Notes 51×51mm, 400 Sheets, A03303, DELI",
      ru: "Неоновые клейкие заметки 51×51 мм, 400 листов, A03303, DELI"
    },
    price: 3.60,
    inStock: true,
    category: "stationery",
    images: ["images/chasanishni5.jpg"]
  },
     {
    id: 360,
    title: {
      ka: "წებოვანი ჩასანიშნი Deli Stationery",
      en: "Sticky Notes, Deli Stationery",
      ru: "Клейкие заметки, Deli Stationery"
    },
    price: 5.00,
    inStock: true,
    category: "stationery",
    images: ["images/chasanishni6.png"]
  },
       {
    id: 361,
    title: {
      ka: "ჩასანიშნი ქაღალდი ყუთში D.A",
      en: "Memo Paper in a Box, D.A",
      ru: "Бумага для заметок в коробке, D.A"
    },
    price: 1.80,
    inStock: true,
    category: "stationery",
    images: ["images/chasanishni7.jpg"]
  },
    {
    id: 362,
    title: {
      ka: "სახვრეტელა 150 ფურცლიანი 0150",
      en: "150-Sheet Hole Punch 0150",
      ru: "Дырокол на 150 листов 0150"
    },
    price: 170.00,
    inStock: true,
    category: "stationery",
    images: ["images/saxvretela1.jpg"]
  },
      {
    id: 363,
    title: {
      ka: "სახვრეტელა 10 ფურცლისათვის Deli Stationery",
      en: "10-Sheet Hole Punch, Deli Stationery",
      ru: "Дырокол на 10 листов, Deli Stationery"
    },
    price: 4.50,
    inStock: true,
    category: "stationery",
    images: ["images/saxvretela2.png"]
  },
      {
    id: 364,
    title: {
      ka: "სახვრეტელა 100 ფურცლიანი Deli Stationery",
      en: "100-Sheet Hole Punch, Deli Stationery",
      ru: "Дырокол на 100 листов, Deli Stationery"
    },
    price: 100.00,
    inStock: true,
    category: "stationery",
    images: ["images/saxvretela3.png"]
  },
      {
    id: 365,
    title: {
      ka: "სახვრეტელა 15 ფურც 0105",
      en: "15-Sheet Hole Punch 0105",
      ru: "Дырокол на 15 листов 0105"
    },
    price: 10.00,
    inStock: true,
    category: "stationery",
    images: ["images/saxvretela4.jpg"]
  },
      {
    id: 366,
    title: {
      ka: "სახვრეტელა 15 ფურც 0105",
      en: "15-Sheet Hole Punch 0105",
      ru: "Дырокол на 15 листов 0105"
    },
    price: 10.00,
    inStock: true,
    category: "stationery",
    images: ["images/saxvretela1.jpg"]
  },
       {
    id: 366,
    title: {
      ka: "მშრალი წებო 21გრ Deli Stationery",
      en: "15-Sheet Hole Punch 0105",
      ru: "Дырокол на 15 листов 0105"
    },
    price: 10.00,
    inStock: true,
    category: "stationery",
    images: ["images/webo1.png"]
  },
  {
    id: 366,
    title: {
      ka: "მშრალი წებო 21გრ Deli Stationery",
      en: "Glue Stick 21g, Deli Stationery",
      ru: "Клей-карандаш 21 г, Deli Stationery"
    },
    price: 1.15,
    inStock: true,
    category: "stationery",
    images: ["images/webo1.png"]
  },
    {
    id: 367,
    title: {
      ka: "მშრალი წებო 36გრ Deli Stationery",
      en: "Glue Stick 36g, Deli Stationery",
      ru: "Клей-карандаш 36 г, Deli Stationery"
    },
    price: 1.80,
    inStock: true,
    category: "stationery",
    images: ["images/webo2.png"]
  },
      {
    id: 368,
    title: {
      ka: "მშრალი წებო 60 ცალიანი ნაკრები Deli Stationery",
      en: "Glue Stick Set, 60 pcs, Deli Stationery",
      ru: "Клей-карандаш 36 г, Deli StationeryНабор клея-карандаша, 60 шт., Deli Stationery"
    },
    price: 85.00,
    inStock: true,
    category: "stationery",
    images: ["images/webo3.png"]
  },
     {
    id: 369,
    title: {
      ka: "წებო თხევადი 125მლ E7303S, DELI",
      en: "Liquid Glue 125ml E7303S, DELI",
      ru: "Жидкий клей 125 мл E7303S, DELI"
    },
    price: 1.80,
    inStock: true,
    category: "stationery",
    images: ["images/webo4.jpg"]
  },
     {
    id: 370,
    title: {
      ka: "წებო თხევადი 30მლ A251 , DELI",
      en: "Liquid Glue 30ml A251, DELI",
      ru: "Жидкий клей 30 мл A251, DELI"
    },
    price: 0.60,
    inStock: true,
    category: "stationery",
    images: ["images/webo5.jpg"]
  },
    {
    id: 371,
    title: {
      ka: "თვითწებოვანი REUSABLE MAGIC TACK A21710, DELI",
      en: "Reusable Magic Tack Adhesive A21710, DELI",
      ru: "Многоразовый клейкий пластилин Magic Tack A21710, DELI"
    },
    price: 3.50,
    inStock: true,
    category: "stationery",
    images: ["images/webo5.jpg"]
  },
      {
    id: 372,
    title: {
      ka: "მაკრატელი 135mm 6068, DELI",
      en: "Scissors 135mm 6068, DELI",
      ru: "Ножницы 135 мм 6068, DELI"
    },
    price: 2.50,
    inStock: true,
    category: "stationery",
    images: ["images/makrateli1.jpg"]
  },
      {
    id: 373,
    title: {
      ka: "მაკრატელი 130mm D60402 , DELI",
      en: "Scissors 135mm 6068, DELI",
      ru: "Ножницы 135 мм 6068, DELI"
    },
    price: 1.80,
    inStock: true,
    category: "stationery",
    images: ["images/makrateli2.jpg"]
  },
     {
    id: 374,
    title: {
      ka: "კალკულატორი M120 , DELI",
      en: "Calculator M120, DELI",
      ru: "Калькулятор M120, DELI"
    },
    price: 8.00,
    inStock: true,
    category: "stationery",
    images: ["images/kalkulatori1.jpg"]
  },
  {
    id: 375,
    title: {
      ka: "კალკულატორი M130 , DELI",
      en: "Calculator M130, DELI",
      ru: "Калькулятор M130, DELI"
    },
    price: 6.00,
    inStock: true,
    category: "stationery",
    images: ["images/kalkulatori2.jpg"]
  },
  {
    id: 376,
    title: {
      ka: "კალკულატორი M01120 , DELI",
      en: "Calculator M01120, DELI",
      ru: "Калькулятор M01120, DELI"
    },
    price: 16.00,
    inStock: true,
    category: "stationery",
    images: ["images/kalkulatori3.png"]
  },
    {
    id: 377,
    title: {
      ka: "კალკულატორი M01120 , DELI",
      en: "Calculator M01120, DELI",
      ru: "Калькулятор M01120, DELI"
    },
    price: 9.50,
    inStock: true,
    category: "stationery",
    images: ["images/kalkulatori4.jpg"]
  },
   {
    id: 378,
    title: {
      ka: "კალკულატორი M01120 , DELI",
      en: "12-Digit Calculator M888A ORANGE, Deli",
      ru: "12-разрядный калькулятор M888A ORANGE, Deli"
    },
    price: 19.00,
    inStock: true,
    category: "stationery",
    images: ["images/kalkulatori5.jpg"]
  },
   {
    id: 379,
    title: {
      ka: "კალკულატორი 12 თანრიგიანი EM18C , Deli",
      en: "12-Digit Calculator M888A ORANGE, Deli",
      ru: "12-разрядный калькулятор M888A ORANGE, Deli"
    },
    price: 9.80,
    inStock: true,
    category: "stationery",
    images: ["images/kalkulatori6.jpg"]
  },
   {
    id: 380,
    title: {
      ka: "კალკულატორი 12 თანრიგიანი EM18C , Deli",
      en: "12-Digit Calculator EM18C, Deli",
      ru: "разрядный калькулятор EM18C, Deli"
    },
    price: 20.00,
    inStock: true,
    category: "stationery",
    images: ["images/kalkulatori7.png"]
  },
   {
    id: 381,
    title: {
      ka: "კალკულატორი 12 თანრიგიანი 1589/P DELI",
      en: "12-Digit Calculator 1589/P, DELI",
      ru: "12-разрядный калькулятор 1589/P, DELI"
    },
    price: 27.00,
    inStock: true,
    category: "stationery",
    images: ["images/kalkulatori8.jpg"]
  },
    {
    id: 382,
    title: {
      ka: "კორექტორი 39299 , DELI",
      en: "Correction Tape 39299, DELI",
      ru: "Корректирующая лента 39299, DELI"
    },
    price: 1.00,
    inStock: true,
    category: "stationery",
    images: ["images/koreqtori1.jpg"]
  },
     {
    id: 382,
    title: {
       ka: "კორექტორი კალამი EH10590 , DELI",
      en: "Correction Tape 5mm × 8m H20101, DELI",
      ru: "Корректирующая лента 5 мм × 8 м H20101, DELI"
    },
    price: 1.60,
    inStock: true,
    category: "stationery",
    images: ["images/koreqtori2.jpg"]
  },
   {
    id: 383,
    title: {
      ka: "კორექტორი კალამი EH10790 , DELI",
      en: " Correction Pen EH10590, DELI",
      ru: "Корректирующий карандаш EH10590, DEL"
    },
    price: 0.80,
    inStock: true,
    category: "stationery",
    images: ["images/koreqtori3.jpg"]
  },
   {
    id: 384,
    title: {
      ka: "კორექტორი კალამი EH10790 , DELI",
      en: " Correction Pen EH10790, DELI",
      ru: "Корректирующий карандаш EH10790, DELI"
    },
    price: 0.80,
    inStock: true,
    category: "stationery",
    images: ["images/koreqtori4.jpg"]
  },
  {
    id: 385,
    title: {
      ka: "კორექტორი კალამი Helio-206",
      en: " Correction Pen Helio-206",
      ru: "Корректирующая ручка Helio-206"
    },
    price: 0.80,
    inStock: true,
    category: "stationery",
    images: ["images/koreqtori5.jpg"]
  },
  {
    id: 386,
    title: {
      ka: "თხევადი საპონი რძე და თაფლი 5ლ 126105",
      en: "Liquid Soap Milk and Honey 5L 126105",
      ru: "Жидкое мыло Молоко и мед 5л 126105"
    },
    price: 36,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi1.jpg"]
  },
  {
    id: 387,
    title: {
      ka: "თხევადი საპონი მარგალიტი 5ლ 126205",
      en: "Liquid Soap Pearl 5L 126205",
      ru: "Жидкое мыло Жемчужина 5л 126205"
    },
    price: 36,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi2.jpg"]
  },
  {
    id: 388,
    title: {
      ka: "თხევადი საპონი იოგურტი 5ლ 126305",
      en: "Liquid Soap Yogurt 5L 126305",
      ru: "Жидкое мыло Йогурт 5л 126305"
    },
    price: 36,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi3.jpg"]
  },
  {
    id: 389,
    title: {
      ka: "თხევადი საპონი ალუბალი 5ლ 126405",
      en: "Liquid Soap Cherry 5L 126405",
      ru: "Жидкое мыло Вишня 5л 126405"
    },
    price: 36,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi4.jpg"]
  },
  {
    id: 390,
    title: {
      ka: "თხევადი საპონი ალოე 5ლ 126605",
      en: "Liquid Soap Aloe 5L 126605",
      ru: "Жидкое мыло Алоэ 5л 126605"
    },
    price: 36,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi5.jpg"]
  },
  {
    id: 391,
    title: {
      ka: "თხევადი საპონი ბუბლიგუმი 5ლ 125318",
      en: "Liquid Soap Bubble Gum 5L 125318",
      ru: "Жидкое мыло Баббл Гам 5л 125318"
    },
    price: 36,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi6.jpg"]
  },
  {
    id: 392,
    title: {
      ka: "ანტიბაქტერიული თხევადი საპონი 5ლ 125361",
      en: "Antibacterial Liquid Soap 5L 125361",
      ru: "Антибактериальное жидкое мыло 5л 125361"
    },
    price: 36,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi7.jpg"]
  },
  {
    id: 393,
    title: {
      ka: "ქაფი საპონი 5ლ 125362",
      en: "Foam Soap 5L 125362",
      ru: "Мыло-пена 5л 125362"
    },
    price: 36,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi8.jpg"]
  },
  {
    id: 394,
    title: {
      ka: "შუშის საწმენდი ხსნარი 0.6მლ 130600",
      en: "Glass Cleaning Solution 0.6L 130600",
      ru: "Средство для мытья стекол 0.6л 130600"
    },
    price: 8,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi9.jpg"]
  },
  {
    id: 395,
    title: {
      ka: "შუშის საწმენდი ხსნარი 0.6მლ 125247",
      en: "Glass Cleaner Solution 0.6L 125247",
      ru: "Средство для очистки стекол 0.6л 125247"
    },
    price: 8,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi10.jpg"]
  },
  {
    id: 396,
    title: {
      ka: "შუშის საწმენდი ხსნარი 0.6მლ 125241",
      en: "Glass Cleaning Spray 0.6L 125241",
      ru: "Средство для стекол 0.6л 125241"
    },
    price: 8,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi11.jpg"]
  },
  {
    id: 397,
    title: {
      ka: "მყარი იატაკის სარეცხი ხსნარი Arena 1ლ 125184",
      en: "Hard Floor Cleaner Arena 1L 125184",
      ru: "Моющее средство для пола Arena 1л 125184"
    },
    price: 9.5,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi12.jpg"]
  },
  {
    id: 398,
    title: {
      ka: "მყარი იატაკის სარეცხი ხსნარი Arena 1ლ 125905",
      en: "Floor Wash Solution Arena 1L 125905",
      ru: "Средство для мытья полов Arena 1л 125905"
    },
    price: 9.5,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi13.jpg"]
  },
  {
    id: 399,
    title: {
      ka: "მყარი იატაკის სარეცხი ხსნარი Arena 1ლ 125904",
      en: "Hard Floor Cleaner Solution Arena 1L 125904",
      ru: "Средство для пола Arena 1л 125904"
    },
    price: 9.5,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi14.jpg"]
  },
  {
    id: 400,
    title: {
      ka: "მყარი იატაკის სარეცხი ხსნარი Arena 1ლ 125185",
      en: "Floor Cleaner Arena 1L 125185",
      ru: "Жидкость для мытья пола Arena 1л 125185"
    },
    price: 9.5,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi15.jpg"]
  },
  {
    id: 401,
    title: {
      ka: "მყარი იატაკის სარეცხი ხსნარი Floor Wash 5ლ 125195",
      en: "Floor Cleaner Solution Floor Wash 5L 125195",
      ru: "Средство для мытья пола Floor Wash 5л 125195"
    },
    price: 67,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi16.jpg"]
  },
  {
    id: 402,
    title: {
      ka: "მყარი იატაკის სარეცხი ხსნარი ძლიერი დაბინძურების Floor 125193",
      en: "Heavy Duty Floor Cleaner Solution Floor 125193",
      ru: "Моющее средство для сильных загрязнений пола Floor 125193"
    },
    price: 78,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi17.jpg"]
  },
  {
    id: 403,
    title: {
      ka: "მყარი იატაკის სარეცხი ხსნარი ძლიერი დაბინძურების Floor 125520",
      en: "Heavy Duty Floor Wash Solution Floor 125520",
      ru: "Средство для глубокой очистки пола Floor 125520"
    },
    price: 225,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi18.jpg"]
  },
  {
    id: 404,
    title: {
      ka: "ხის ზედაპირის სარეცხი ხსნარი Arena 5ლ 218005",
      en: "Wood Surface Cleaner Arena 5L 218005",
      ru: "Средство для мытья деревянных поверхностей Arena 5л 218005"
    },
    price: 67,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi19.jpg"]
  },
  {
    id: 405,
    title: {
      ka: "მყარი ზედაპირის სარეცხი საშუალება დაბალქაფიანი Prograss 5ლ 125337",
      en: "Low Foam Hard Surface Cleaner Prograss 5L 125337",
      ru: "Низкопенное средство для твердых поверхностей Prograss 5л 125337"
    },
    price: 35,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi20.jpg"]
  },
  {
    id: 406,
    title: {
      ka: "უნივერსალური საწმენდი საშუალება Universacl Cleaner 0.6 112600",
      en: "Universal Cleaner Solution 0.6L 112600",
      ru: "Универсальное моющее средство Universacl Cleaner 0.6л 112600"
    },
    price: 10,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi21.jpg"]
  },
  {
    id: 407,
    title: {
      ka: "რბილი იატაკის, ავეჯის საწმენდი ხსნარი Carpet Cleaner 5ლ 125200",
      en: "Carpet and Furniture Cleaner Solution 5L 125200",
      ru: "Средство для чистки ковров и мебели Carpet Cleaner 5л 125200"
    },
    price: 69,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi22.jpg"]
  },
  {
    id: 408,
    title: {
      ka: "რემონტის შემდგომი საწმენდი ხსნარი Cement Remover 125442",
      en: "Post-Renovation Cement Remover Solution 125442",
      ru: "Средство после ремонта Cement Remover 125442"
    },
    price: 68,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi23.jpg"]
  },
  {
    id: 409,
    title: {
      ka: "რემონტის შემდგომი სარეცხი ხსნარი Cement Cleaner 125305",
      en: "Post-Renovation Cement Cleaner Solution 125305",
      ru: "Моющее средство после ремонта Cement Cleaner 125305"
    },
    price: 65,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi24.jpg"]
  },
  {
    id: 410,
    title: {
      ka: "ჭურჭლის სარეცხი გელი Velly 5ლ 125420",
      en: "Dishwashing Gel Velly 5L 125420",
      ru: "Гель для мытья посуды Velly 5л 125420"
    },
    price: 45,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi25.jpg"]
  },
  {
    id: 411,
    title: {
      ka: "ჭურჭლის სარეცხი გელი Velly გრეიფრუტი 5ლ 125847",
      en: "Dishwashing Gel Velly Grapefruit 5L 125847",
      ru: "Гель для мытья посуды Velly Грейпфрут 5л 125847"
    },
    price: 40,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi26.jpg"]
  },
  {
    id: 412,
    title: {
      ka: "ჭურჭლის მანქანის ტაბლეტი ColoritPlus All in 1 100ც 125717",
      en: "Dishwasher Tablets ColoritPlus All in 1 100pcs 125717",
      ru: "Таблетки для посудомоечной машины ColoritPlus All in 1 100шт 125717"
    },
    price: 75,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi27.jpg"]
  },
  {
    id: 413,
    title: {
      ka: "ჭურჭლის მანქანის სარეცხი ხსნარი Dishwasher 1ლ 216110",
      en: "Dishwasher Liquid Solution 1L 216110",
      ru: "Моющее средство для посудомоечной машины Dishwasher 1л 216110"
    },
    price: 28,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi28.jpg"]
  },
  {
    id: 414,
    title: {
      ka: "ჭურჭლის მანქანის დამარბილებელი ხსნარი Conditioner Dish 1ლ 216100",
      en: "Dishwasher Rinse Aid Conditioner Dish 1L 216100",
      ru: "Ополаскиватель для посудомоечной машины Conditioner Dish 1л 216100"
    },
    price: 16,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi29.jpg"]
  },
  {
    id: 415,
    title: {
      ka: "გაზქურის საწმენდი ხსნარი Azelit 0.6 მლ 218600",
      en: "Oven & Stove Cleaner Azelit 0.6L 218600",
      ru: "Средство для чистки плит Azelit 0.6л 218600"
    },
    price: 13,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi30.jpg"]
  },
  {
    id: 416,
    title: {
      ka: "გაზქურის საწმენდი ხსნარი Azelit 0.6 მლ 125375",
      en: "Kitchen Cleaner Spray Azelit 0.6L 125375",
      ru: "Жидкость для чистки плит Azelit 0.6л 125375"
    },
    price: 13,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi31.jpg"]
  },
  {
    id: 417,
    title: {
      ka: "გაზქურის საწმენდი გელი Azelit 5 ლ 125239",
      en: "Oven Cleaner Gel Azelit 5L 125239",
      ru: "Гель для чистки плит Azelit 5л 125239"
    },
    price: 76,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi32.jpg"]
  },
  {
    id: 418,
    title: {
      ka: "გაზქურის საწმენდი ხსნარი Grill 0.6 მლ 125470",
      en: "Grill Cleaner Solution 0.6L 125470",
      ru: "Средство для чистки гриля Grill 0.6л 125470"
    },
    price: 17,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi33.jpg"]
  },
  {
    id: 419,
    title: {
      ka: "გაზქურის საწმენდი ხსნარი Grill 5 ლ 125586",
      en: "Grill Cleaner Solution 5L 125586",
      ru: "Средство для чистки гриля Grill 5л 125586"
    },
    price: 87,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi34.jpg"]
  },
  {
    id: 420,
    title: {
      ka: "აბაზანის საწმენდი გელი Gloss gel 0.6 მლ 221500",
      en: "Bathroom Cleaner Gel Gloss 0.6L 221500",
      ru: "Гель для чистки ванной Gloss gel 0.6л 221500"
    },
    price: 9,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi35.jpg"]
  },
  {
    id: 421,
    title: {
      ka: "აბაზანის საწმენდი ხსნარი Gloss 1ლ 125322",
      en: "Bathroom Cleaning Solution Gloss 1L 125322",
      ru: "Средство для чистки ванной Gloss 1л 125322"
    },
    price: 23,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi36.jpg"]
  },
  {
    id: 422,
    title: {
      ka: "აბაზანის საწმენდი ხსნარი Gloss 5ლ 125323",
      en: "Bathroom Cleaner Solution Gloss 5L 125323",
      ru: "Средство для чистки ванной Gloss 5л 125323"
    },
    price: 65,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi37.jpg"]
  },
  {
    id: 423,
    title: {
      ka: "აბაზანის-ობის მომხსნელი ხსნარი Dos-Clean 0.6 ml 125489",
      en: "Mold & Mildew Remover Dos-Clean 0.6L 125489",
      ru: "Средство от плесени Dos-Clean 0.6л 125489"
    },
    price: 12,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi38.jpg"]
  },
  {
    id: 424,
    title: {
      ka: "აბაზანის-ობის მომხსნელი ხსნარი Dos-Clean 0.6 ml 125445",
      en: "Bathroom Mold Remover Dos-Clean 0.6L 125445",
      ru: "Средство для удаления плесени Dos-Clean 0.6л 125445"
    },
    price: 14,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi39.jpg"]
  },
  {
    id: 425,
    title: {
      ka: "აბაზანის-უნიტაზის საწმენდი გელი WC-Gel 1ლ 125437",
      en: "Toilet & Bathroom Cleaner Gel WC-Gel 1L 125437",
      ru: "Гель для сантехники и туалета WC-Gel 1л 125437"
    },
    price: 11,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi40.jpg"]
  },
  {
    id: 426,
    title: {
      ka: "აბაზანის-უნიტაზის საწმენდი გელი WC-Gel 5ლ 125203",
      en: "Toilet & Bathroom Cleaner Gel WC-Gel 5L 125203",
      ru: "Гель для сантехники и туалета WC-Gel 5л 125203"
    },
    price: 48,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi41.jpg"]
  },
  {
    id: 427,
    title: {
      ka: "აბაზანის-უნიტაზის სადეზინფექციო გელი Dos-Gel 1ლ 125436",
      en: "Disinfectant Toilet Gel Dos-Gel 1L 125436",
      ru: "Дезинфицирующий гель для туалета Dos-Gel 1л 125436"
    },
    price: 11,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi42.jpg"]
  },
  {
    id: 428,
    title: {
      ka: "აბაზანის-უნიტაზის სადეზინფექციო გელი Dos-Gel 5ლ 125240",
      en: "Disinfectant Toilet Gel Dos-Gel 5L 125240",
      ru: "Дезинфицирующий гель для туалета Dos-Gel 5л 125240"
    },
    price: 42,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi43.jpg"]
  },
  {
    id: 429,
    title: {
      ka: "საკანალიზაციო მილების საწმენდი გელი Digger-Gel 1ლ 125438",
      en: "Drain Cleaning Gel Digger-Gel 1L 125438",
      ru: "Гель для очистки водосточных труб Digger-Gel 1л 125438"
    },
    price: 10,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi44.jpg"]
  },
  {
    id: 430,
    title: {
      ka: "საკანალიზაციო მილების საწმენდი გელი Digger-Gel 5ლ 125206",
      en: "Drain Cleaning Gel Digger-Gel 5L 125206",
      ru: "Гель для очистки водосточных труб Digger-Gel 5л 125206"
    },
    price: 29,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi45.jpg"]
  },
  {
    id: 431,
    title: {
      ka: "სუნის ჩამხშობი Smell Block 0.6მლ 802004",
      en: "Odor Neutralizer Smell Block 0.6L 802004",
      ru: "Нейтрализатор запаха Smell Block 0.6л 802004"
    },
    price: 13,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi46.jpg"]
  },
  {
    id: 432,
    title: {
      ka: "სუნის ჩამხშობი Smell Block 0.6მლ 125536",
      en: "Odor Neutralizer Smell Block 0.6L 125536",
      ru: "Нейтрализатор запаха Smell Block 0.6л 125536"
    },
    price: 25,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi47.jpg"]
  },
  {
    id: 433,
    title: {
      ka: "ხის ზედაპირის გამწმენდი Torus 0.6მლ 219600",
      en: "Wood Surface Cleaner Torus 0.6L 219600",
      ru: "Средство для чистки деревянных поверхностей Torus 0.6л 219600"
    },
    price: 11,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi48.jpg"]
  },
  {
    id: 434,
    title: {
      ka: "საღებავის, წებოვანი ლენტის მომხსნელი საშუალება Antigrafiti 0.6მლ 117107",
      en: "Paint & Tape Remover Antigrafiti 0.6L 117107",
      ru: "Средство для удаления краски и скотча Antigrafiti 0.6л 117107"
    },
    price: 28,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi49.jpg"]
  },
  {
    id: 435,
    title: {
      ka: "საღებავის, წებოვანი ლენტის მომხსნელი საშუალება Antigrafiti 0.6მლ 125602",
      en: "Paint & Tape Remover Antigrafiti 0.6L 125602",
      ru: "Средство для удаления скотча и граффити Antigrafiti 0.6л 125602"
    },
    price: 29,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi50.jpg"]
  },
  {
    id: 436,
    title: {
      ka: "საღებავის, წებოვანი ლენტის მომხსნელი საშუალება Antigrafiti 5ლ 140101",
      en: "Paint & Tape Remover Antigrafiti 5L 140101",
      ru: "Средство для удаления краски и скотча Antigrafiti 5л 140101"
    },
    price: 179,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi51.jpg"]
  },
  {
    id: 437,
    title: {
      ka: "ანტისკოჩი 0.25მლ 110588",
      en: "Anti-Sticker Spray 0.25L 110588",
      ru: "Средство для удаления скотча 0.25л 110588"
    },
    price: 14,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi52.jpg"]
  },
  {
    id: 438,
    title: {
      ka: "საწმენდი ტილო მიკროფიბრა 30*30 IT-0649",
      en: "Microfiber Cleaning Cloth 30x30 IT-0649",
      ru: "Микрофибровая салфетка 30x30 IT-0649"
    },
    price: 3,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi53.jpg"]
  },
  {
    id: 439,
    title: {
      ka: "საწმენდი ტილო მიკროფიბრა 80*100 IT-0460",
      en: "Microfiber Cleaning Cloth 80x100 IT-0460",
      ru: "Микрофибровая салфетка 80x100 IT-0460"
    },
    price: 29,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi54.jpg"]
  },
  {
    id: 440,
    title: {
      ka: "გელ-კონდენციონერი ყველა სახის თეთრეულისთვის Dory 1.8მლ 125874",
      en: "Fabric Softener Conditioner Dory 1.8L 125874",
      ru: "Гель-кондиционер для белья Dory 1.8л 125874"
    },
    price: 15,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi55.jpg"]
  },
  {
    id: 441,
    title: {
      ka: "გელ-კონდენციონერი მუქი თეთრეულისთვის ALPI 1.8 მლ 125747",
      en: "Fabric Softener Gel for Dark Clothes ALPI 1.8L 125747",
      ru: "Гель-кондиционер для темного белья ALPI 1.8л 125747"
    },
    price: 25,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi56.jpg"]
  },
  {
    id: 442,
    title: {
      ka: "კონცენტრირებული თხევადი სარეცხი საშუალება ALPI sensetive gel 125732",
      en: "Concentrated Liquid Detergent ALPI Sensitive Gel 125732",
      ru: "Концентрированное жидкое средство для стирки ALPI Sensitive Gel 125732"
    },
    price: 25,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi57.jpg"]
  },
  {
    id: 443,
    title: {
      ka: "კონცენტრირებული თხევადი სარეცხი საშუალება ALPI white gel 1.8 მლ 125733",
      en: "Concentrated Liquid Detergent ALPI White Gel 1.8L 125733",
      ru: "Концентрированное жидкое средство для стирки ALPI White Gel 1.8л 125733"
    },
    price: 25,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi58.jpg"]
  },
  {
    id: 444,
    title: {
      ka: "გელ-კონცენტრატი შალი და აბრეშუმი ALPI 1.8 მლ 125748",
      en: "Detergent Gel Concentrate Wool & Silk ALPI 1.8L 125748",
      ru: "Гель-концентрат для шерсти и шелка ALPI 1.8л 125748"
    },
    price: 25,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi59.jpg"]
  },
  {
    id: 445,
    title: {
      ka: "ჭურჭლის მანქანის დამარბილებელი სავლები ხსნარი Velly 0.5 მლ 125770",
      en: "Dishwasher Rinse Aid Velly 0.5L 125770",
      ru: "Ополаскиватель для посудомоечной машины Velly 0.5л 125770"
    },
    price: 10,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi60.jpg"]
  },
  {
    id: 446,
    title: {
      ka: "სარეცხი მანქანის საწმენდი Skalex 0.2 მლ 125886",
      en: "Washing Machine Cleaner Skalex 0.2L 125886",
      ru: "Средство для чистки стиральных машин Skalex 0.2л 125886"
    },
    price: 9,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi61.jpg"]
  },
  {
    id: 447,
    title: {
      ka: "ობის მომხსნელი ხსნარი Bimold 1ლ 125443",
      en: "Mold Remover Solution Bimold 1L 125443",
      ru: "Средство для удаления плесени Bimold 1л 125443"
    },
    price: 15,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi62.jpg"]
  },
  {
    id: 448,
    title: {
      ka: "უნივერსალური საწმენდი Home cleaner 0.6 მლ 126155",
      en: "Universal Surface Cleaner Home Cleaner 0.6L 126155",
      ru: "Универсальное чистящее средство Home Cleaner 0.6л 126155"
    },
    price: 12,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi63.jpg"]
  },
  {
    id: 449,
    title: {
      ka: "ჰაერის არომატიზატორი Milana Spring Bloom 0.3 მლ 145126",
      en: "Air Freshener Milana Spring Bloom 0.3L 145126",
      ru: "Освежитель воздуха Milana Spring Bloom 0.3л 145126"
    },
    price: 15,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi64.jpg"]
  },
  {
    id: 450,
    title: {
      ka: "ჰაერის არომატიზატორი Milana Oud Rood 0.3 მლ 145130",
      en: "Air Freshener Milana Oud Rood 0.3L 145130",
      ru: "Освежитель воздуха Milana Oud Rood 0.3л 145130"
    },
    price: 15,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi65.jpg"]
  },
  {
    id: 451,
    barcode: "6921734910790",
    title: {
      ka: "Clean glass Professional 5ლ 125572",
      en: "Clean Glass Professional 5L 125572",
      ru: "Clean Glass Professional 5л 125572"
    },
    price: 29,
    inStock: true,
    category: "hygiene",
    images: ["images/grasi66.jpg"]
  },



















    
    
    
    
];

let cart = JSON.parse(localStorage.getItem('cart_items')) || [];
let currentUser = JSON.parse(localStorage.getItem('logged_user')) || null;
const currentImageIndexes = {};
let pendingGoogleUser = null;
let currentLang = localStorage.getItem('site_lang') || 'ka';

// ==========================================
// 0. ავტორიზაციის ფორმების გადართვა (TOGGLE)
// ==========================================
function toggleAuthForms(showLogin) {
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');

    if (loginForm && registerForm) {
        if (showLogin) {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
        } else {
            loginForm.style.display = 'none';
            registerForm.style.display = 'block';
        }
    }
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('site_lang', lang);
    const prodList = (typeof products !== 'undefined' ? products : []);
    renderProducts(prodList);
}

function getUsersFromStorage() {
    return JSON.parse(localStorage.getItem('registered_users')) || [];
}

// ==========================================
// 1. Google Sign-In & პროფილის დასრულება
// ==========================================
function parseJwt(token) {
    try {
        const base64Url = token.split('.')[1];
        const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));
        return JSON.parse(jsonPayload);
    } catch (e) {
        console.error("JWT დეკოდირების შეცდომა:", e);
        return null;
    }
}

function handleCredentialResponse(response) {
    const responsePayload = parseJwt(response.credential);
    if (!responsePayload) {
        alert("⚠️ Google-ით ავტორიზაცია ვერ მოხერხდა.");
        return;
    }

    const email = responsePayload.email;
    const name = responsePayload.name;
    const googleId = responsePayload.sub;

    const users = getUsersFromStorage();
    let foundUser = users.find(u => u.email === email || u.googleId === googleId);

    if (foundUser) {
        currentUser = foundUser;
        localStorage.setItem('logged_user', JSON.stringify(currentUser));
        updateUserNav();
        renderOrderHistory();
        alert(`კეთილი იყოს თქვენი მობრძანება, ${currentUser.username}!`);
        showPage('home');
    } else {
        pendingGoogleUser = {
            username: name,
            email: email,
            googleId: googleId,
            phone: '',
            address: '',
            pass: '',
            orderHistory: []
        };

        const modal = document.getElementById('complete-profile-modal');
        if (modal) {
            modal.style.display = 'block';
        }
    }
}

function saveGoogleUserInfo(e) {
    e.preventDefault();
    const phone = document.getElementById('google-phone').value.trim();
    const address = document.getElementById('google-address').value.trim();

    if (!phone || !address) {
        alert('გთხოვთ შეავსოთ ტელეფონის ნომერი და მისამართი!');
        return;
    }

    if (pendingGoogleUser) {
        pendingGoogleUser.phone = phone;
        pendingGoogleUser.address = address;

        const users = getUsersFromStorage();
        users.push(pendingGoogleUser);
        localStorage.setItem('registered_users', JSON.stringify(users));

        currentUser = pendingGoogleUser;
        localStorage.setItem('logged_user', JSON.stringify(currentUser));

        pendingGoogleUser = null;

        const modal = document.getElementById('complete-profile-modal');
        if (modal) modal.style.display = 'none';

        updateUserNav();
        renderOrderHistory();
        alert(`🎉 რეგისტრაცია წარმატებით დასრულდა! კეთილი იყოს თქვენი მობრძანება, ${currentUser.username}!`);
        showPage('home');
    }
}

// ==========================================
// 2. SPA გვერდების გადართვა & მენიუ
// ==========================================
function showPage(pageId) {
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => section.classList.remove('active-section'));

    const targetPage = document.getElementById(pageId);
    if (targetPage) targetPage.classList.add('active-section');
    
    const navMenu = document.getElementById('nav-menu');
    if (navMenu && navMenu.classList.contains('active-menu')) {
        navMenu.classList.remove('active-menu');
    }

    if (pageId === 'profile-section' || pageId === 'history-section') {
        renderOrderHistory();
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    if (navMenu) {
        navMenu.classList.toggle('active');
        navMenu.classList.toggle('active-menu');
    }
}

// ==========================================
// 3. მომხმარებლის ნავბარი & პროფილის მოდალი
// ==========================================
function updateUserNav() {
    const navUserInfo = document.getElementById('nav-user-info');
    const loggedUsername = document.getElementById('logged-username');
    const navLogin = document.getElementById('nav-login');
    const navLogout = document.getElementById('nav-logout');
    const navHistory = document.getElementById('nav-history');

    if (currentUser) {
        if (loggedUsername) loggedUsername.innerText = `👤 ${currentUser.username}`;
        if (navUserInfo) navUserInfo.style.display = 'inline-block';
        if (navLogout) navLogout.style.display = 'inline-block';
        if (navHistory) navHistory.style.display = 'inline-block';
        if (navLogin) navLogin.style.display = 'none';
    } else {
        if (navUserInfo) navUserInfo.style.display = 'none';
        if (navLogout) navLogout.style.display = 'none';
        if (navHistory) navHistory.style.display = 'none';
        if (navLogin) navLogin.style.display = 'inline-block';
    }
}

function openProfileModal() {
    if (!currentUser) return;

    const pUsername = document.getElementById('p-username');
    const pPhone = document.getElementById('p-phone');
    const pAddress = document.getElementById('p-address');

    if (pUsername) pUsername.innerText = currentUser.username || 'არ არის მითითებული';
    if (pPhone) pPhone.innerText = currentUser.phone || 'არ არის მითითებული';
    if (pAddress) pAddress.innerText = currentUser.address || 'არ არის მითითებული';

    const modal = document.getElementById('profile-modal');
    if (modal) modal.style.display = 'block';
}

function closeProfileModal() {
    const modal = document.getElementById('profile-modal');
    if (modal) modal.style.display = 'none';
}

function logout() {
    currentUser = null;
    localStorage.removeItem('logged_user');
    updateUserNav();
    alert('წარმატებით გამოხვედით სისტემიდან.');
    showPage('home');
}

function renderOrderHistory() {
    const historyList = document.getElementById('order-history-list');
    if (!historyList) return;

    if (!currentUser || !currentUser.orderHistory || currentUser.orderHistory.length === 0) {
        historyList.innerHTML = '<p>შეკვეთების ისტორია ცარიელია.</p>';
        return;
    }

    historyList.innerHTML = currentUser.orderHistory.map(order => `
        <div style="border: 1px solid #ccc; padding: 10px; margin-bottom: 10px; border-radius: 6px;">
            <p><strong>შეკვეთა:</strong> ${order.orderId}</p>
            <p><strong>ჯამი:</strong> ${order.totalSum} ₾</p>
        </div>
    `).join('');
}

// ==========================================
// 🌐 პროდუქციის თარგმნის დამხმარე ფუნქცია
// ==========================================
function getTranslatedText(value) {
    if (value === null || value === undefined) return '';

    if (typeof value === 'object' && !Array.isArray(value)) {
        return (
            value[currentLang] ||
            value.ka ||
            value.ge ||
            value.en ||
            value.ru ||
            Object.values(value)[0] ||
            ''
        );
    }

    return String(value);
}

function getLangText(ka, en, ru) {
    return ({ ka, en, ru }[currentLang]) || ka;
}

// ==========================================
// 4. პროდუქციის გამოჩენა (Render Products)
// ==========================================
function renderProducts(productList = (typeof products !== 'undefined' ? products : [])) {
    const grid = document.getElementById('products-grid');
    if (!grid) return;
    
    if (productList.length === 0) {
        const noProdText = {
            ka: "პროდუქტი ვერ მოიძებნა.",
            en: "No products found.",
            ru: "Продукты не найдены."
        };
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; padding: 20px;">${noProdText[currentLang] || noProdText.ka}</p>`;
        return;
    }

    grid.innerHTML = productList.map(prod => {
        const imgList = prod.images && prod.images.length > 0 ? prod.images : ['https://via.placeholder.com/200'];
        const isAvailable = prod.inStock !== false;
        const hasMultipleImages = imgList.length > 1;

        const rawName = prod.title || prod.name || prod.productName;
        const productName = getTranslatedText(rawName) || 'უსახელო პროდუქტი';

        const btnTexts = {
            ka: isAvailable ? '👁️ დეტალურად / ყიდვა' : '🚫 ამოყიდულია',
            en: isAvailable ? '👁️ Details / Buy' : '🚫 Out of Stock',
            ru: isAvailable ? '👁️ Подробнее / Купить' : '🚫 Нет в наличии'
        };

        const outOfStockBadge = {
            ka: '❌ არ არის მარაგში',
            en: '❌ Out of stock',
            ru: '❌ Нет в наличии'
        };

        if (!(prod.id in currentImageIndexes)) {
            currentImageIndexes[prod.id] = 0;
        }

        return `
            <div class="product-card ${!isAvailable ? 'out-of-stock-card' : ''}" id="card-${prod.id}" style="position: relative;">
                ${!isAvailable ? `<span style="position: absolute; top: 10px; right: 10px; background: #ef4444; color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; z-index: 2;">${outOfStockBadge[currentLang] || outOfStockBadge.ka}</span>` : ''}
                
                <div class="product-img-container" style="height: 200px; border-radius: 8px; overflow: hidden; position: relative; opacity: ${isAvailable ? '1' : '0.5'};">
                    <img id="card-img-${prod.id}" src="${imgList[currentImageIndexes[prod.id]]}" class="product-img" alt="${productName}" onclick="openProductModal(${prod.id})" loading="lazy" decoding="async" style="width:100%; height:100%; object-fit:cover; cursor:pointer;">
                    
                    ${hasMultipleImages ? `
                        <button onclick="event.stopPropagation(); changeImage(${prod.id}, -1)" style="position: absolute; left: 5px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; border-radius: 50%; width: 28px; height: 28px; cursor: pointer; z-index: 3;">❮</button>
                        <button onclick="event.stopPropagation(); changeImage(${prod.id}, 1)" style="position: absolute; right: 5px; top: 50%; transform: translateY(-50%); background: rgba(0,0,0,0.5); color: white; border: none; border-radius: 50%; width: 28px; height: 28px; cursor: pointer; z-index: 3;">❯</button>
                    ` : ''}
                </div>

                <div onclick="openProductModal(${prod.id})" style="cursor: pointer;">
                    <h4 style="margin-top: 10px;">${productName}</h4>
                    <p class="price">${prod.price ? Number(prod.price).toFixed(2) : '0.00'} ₾</p>
                </div>
                
                <button class="add-btn" 
                        style="${!isAvailable ? 'background-color: #9ca3af; cursor: not-allowed;' : ''}" 
                        onclick="openProductModal(${prod.id})" 
                        ${!isAvailable ? 'disabled' : ''}>
                    ${btnTexts[currentLang] || btnTexts.ka}
                </button>
            </div>
        `;
    }).join('');
}

function changeImage(productId, direction) {
    const prodList = (typeof products !== 'undefined' ? products : []);
    const prod = prodList.find(p => p.id === productId);
    if (!prod || !prod.images || prod.images.length <= 1) return;

    let currentIndex = currentImageIndexes[productId] || 0;
    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = prod.images.length - 1;
    } else if (currentIndex >= prod.images.length) {
        currentIndex = 0;
    }

    currentImageIndexes[productId] = currentIndex;
    const imgElement = document.getElementById(`card-img-${productId}`);
    if (imgElement) {
        imgElement.src = prod.images[currentIndex];
    }
}

// ==========================================
// 5. ძებნის ფუნქციონალი & ინიციალიზაცია
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search-input') || document.querySelector('.search-box input');

    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase().trim();
            const prodList = (typeof products !== 'undefined' ? products : []);

            const filteredProducts = prodList.filter(prod => {
                let productName = '';
                let rawName = prod.title || prod.name || prod.productName;
                if (typeof rawName === 'object' && rawName !== null) {
                    productName = (rawName[currentLang] || rawName.ka || '').toLowerCase();
                } else if (typeof rawName === 'string') {
                    productName = rawName.toLowerCase();
                }

                const nameMatch = productName.includes(searchTerm);
                
                let descMatch = false;
                if (typeof prod.description === 'object' && prod.description !== null) {
                    const descStr = (prod.description[currentLang] || prod.description.ka || '').toLowerCase();
                    descMatch = descStr.includes(searchTerm);
                } else if (Array.isArray(prod.description)) {
                    descMatch = prod.description.some(d => d.toLowerCase().includes(searchTerm));
                } else if (typeof prod.description === 'string') {
                    descMatch = prod.description.toLowerCase().includes(searchTerm);
                }

                const barcodeMatch = prod.barcode ? String(prod.barcode).toLowerCase().includes(searchTerm) : false;

                return nameMatch || descMatch || barcodeMatch;
            });

            renderProducts(filteredProducts);
        });
    }

    updateUserNav();
    updateCart();
    renderOrderHistory();
});

// ==========================================
// 6. Modal & URL Link & Price Updates
// ==========================================
function updateModalPrice(productId) {
    const prodList = (typeof products !== 'undefined' ? products : []);
    const prod = prodList.find(p => p.id === productId);
    if (!prod) return;

    let selectedPrice = prod.price;

    const brandSelect = document.getElementById(`modal-brand-${productId}`);
    if (brandSelect && brandSelect.options[brandSelect.selectedIndex]) {
        const p = brandSelect.options[brandSelect.selectedIndex].getAttribute('data-price');
        if (p) selectedPrice = parseFloat(p);
    }

    const sizeSelect = document.getElementById(`modal-size-${productId}`);
    if (sizeSelect && sizeSelect.options[sizeSelect.selectedIndex]) {
        const p = sizeSelect.options[sizeSelect.selectedIndex].getAttribute('data-price');
        if (p) selectedPrice = parseFloat(p);
    }

    const priceEl = document.getElementById(`modal-price-${productId}`);
    if (priceEl) priceEl.innerText = `${selectedPrice.toFixed(2)} ₾`;
}

function openProductModal(productId) {
    const prodList = (typeof products !== 'undefined' ? products : []);
    const prod = prodList.find(p => p.id === productId);
    if (!prod) return;

    window.location.hash = `product-${productId}`;

    const modal = document.getElementById('product-modal');
    const modalBody = document.getElementById('modal-body');
    const imgList = prod.images && prod.images.length > 0 ? prod.images : ['https://via.placeholder.com/300'];
    const isAvailable = prod.inStock !== false;

    let productName = 'უსახელო პროდუქტი';
    let rawName = prod.title || prod.name || prod.productName;
    if (typeof rawName === 'object' && rawName !== null) {
        productName = rawName[currentLang] || rawName.ka || Object.values(rawName)[0] || 'უსახელო პროდუქტი';
    } else if (typeof rawName === 'string') {
        productName = rawName;
    }

    let descText = '';
    if (typeof prod.description === 'object' && prod.description !== null && !Array.isArray(prod.description)) {
        descText = prod.description[currentLang] || prod.description.ka || Object.values(prod.description)[0];
    } else if (Array.isArray(prod.description)) {
        descText = prod.description.join(', ');
    } else {
        descText = prod.description || 'მაღალი ხარისხის საოფისე/საკანცელარიო პროდუქცია.';
    }

    const statusText = {
        ka: isAvailable ? '🟢 მარაგშია' : '🔴 არ არის მარაგში',
        en: isAvailable ? '🟢 In Stock' : '🔴 Out of Stock',
        ru: isAvailable ? '🟢 В наличии' : '🔴 Нет в наличии'
    };

    const btnText = {
        ka: isAvailable ? '🛒 კალათაში დამატება' : '🚫 არ არის მარაგში',
        en: isAvailable ? '🛒 Add to Cart' : '🚫 Out of Stock',
        ru: isAvailable ? '🛒 В корзину' : '🚫 Нет в наличии'
    };

    let brandHTML = '';
    if (prod.brands && prod.brands.length > 0) {
        brandHTML = `
            <div style="margin-bottom:10px;">
                <label><strong>${getLangText('ფირმა:', 'Brand:', 'Бренд:')}</strong></label>
                <select id="modal-brand-${prod.id}" onchange="updateModalPrice(${prod.id})">
                    ${prod.brands.map(b => {
                        const text = getTranslatedText(b.name !== undefined ? b : b);
                        const value = typeof b === 'object' ? (b.name || text) : b;
                        const price = typeof b === 'object' && b.price !== undefined ? `data-price="${b.price}"` : '';
                        return `<option value="${value}" ${price}>${text}</option>`;
                    }).join('')}
                </select>
            </div>`;
    }

    let colorHTML = '';
    if (prod.colors && prod.colors.length > 0) {
        colorHTML = `
            <div style="margin-bottom:10px;">
                <label><strong>${getLangText('ფერი:', 'Color:', 'Цвет:')}</strong></label>
                <select id="modal-color-${prod.id}">
                    ${prod.colors.map(c => {
                        const text = getTranslatedText(c);
                        const value = typeof c === 'object' ? (c[currentLang] || c.ka || text) : c;
                        return `<option value="${value}">${text}</option>`;
                    }).join('')}
                </select>
            </div>`;
    }

    let sizeHTML = '';
    if (prod.sizes && prod.sizes.length > 0) {
        sizeHTML = `
            <div style="margin-bottom:10px;">
                <label><strong>${getLangText('ზომა:', 'Size:', 'Размер:')}</strong></label>
                <select id="modal-size-${prod.id}" onchange="updateModalPrice(${prod.id})">
                    ${prod.sizes.map(item => {
                        const text = getTranslatedText(item);
                        const value = typeof item === 'object' ? (item[currentLang] || item.ka || item.name || text) : item;
                        const price = typeof item === 'object' && item.price !== undefined ? `data-price="${item.price}"` : '';
                        return `<option value="${value}" ${price}>${text}</option>`;
                    }).join('')}
                </select>
            </div>`;
    }

    modalBody.innerHTML = `
        <div class="modal-product-details">
            <div>
                <img id="modal-img-${prod.id}" src="${imgList[0]}" loading="lazy" decoding="async" style="width:100%; border-radius:8px; max-height:300px; object-fit:cover;">
            </div>
            <div>
                <h2>${productName}</h2>
                <h3 id="modal-price-${prod.id}" style="color: #2563eb; margin: 10px 0;">${prod.price ? Number(prod.price).toFixed(2) : '0.00'} ₾</h3>
                
                <p style="margin-bottom: 6px;">
                    <strong>${getLangText('სტატუსი:', 'Status:', 'Статус:')}</strong> 
                    <span style="color: ${isAvailable ? '#16a34a' : '#dc2626'}; font-weight: bold;">
                        ${statusText[currentLang] || statusText.ka}
                    </span>
                </p>

                <!-- 🏷️ შტრიხკოდის გამოჩენა -->
                <p style="margin-bottom: 10px;">
                    <strong>${getLangText('შტრიხკოდი:', 'Barcode:', 'Штрихкод:')}</strong> 
                    <span style="color: #475569; font-weight: 600;">${prod.barcode || '—'}</span>
                </p>

                <p style="font-size: 14px; color: #555;">${descText}</p>
                <hr style="margin: 15px 0;">
                
                ${brandHTML}
                ${sizeHTML}
                ${colorHTML}

                <div style="margin: 15px 0;">
                    <label><strong>${getLangText('რაოდენობა:', 'Quantity:', 'Количество:')}</strong></label>
                    <input type="number" id="modal-qty-${prod.id}" value="1" min="1" max="99" style="width:60px; padding:4px; text-align:center;" ${!isAvailable ? 'disabled' : ''}>
                </div>

                <button class="add-btn" 
                        style="width:100%; padding:10px; background:${isAvailable ? '#2563eb' : '#9ca3af'}; color:white; border:none; border-radius:6px; cursor:${isAvailable ? 'pointer' : 'not-allowed'};" 
                        onclick="addToCartFromModal(${prod.id})" 
                        ${!isAvailable ? 'disabled' : ''}>
                    ${btnText[currentLang] || btnText.ka}
                </button>
            </div>
        </div>
    `;

    if (modal) modal.style.display = 'block';
}

function closeProductModal() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.style.display = 'none';
    history.pushState("", document.title, window.location.pathname + window.location.search);
}

window.onclick = function(event) {
    const modal = document.getElementById('product-modal');
    const profileModal = document.getElementById('profile-modal');
    const googleModal = document.getElementById('complete-profile-modal');
    
    if (event.target === modal) closeProductModal();
    if (event.target === profileModal) closeProfileModal();
    if (event.target === googleModal) googleModal.style.display = 'none';
};

window.addEventListener('load', checkUrlHash);
window.addEventListener('hashchange', checkUrlHash);

function checkUrlHash() {
    const hash = window.location.hash;
    if (hash.startsWith('#product-')) {
        const productId = parseInt(hash.replace('#product-', ''));
        if (productId) {
            openProductModal(productId);
        }
    }
}

function addToCartFromModal(productId) {
    const prodList = (typeof products !== 'undefined' ? products : []);
    const prod = prodList.find(p => p.id === productId);
    if (!prod) return;

    if (prod.inStock === false) {
        alert(getLangText('⚠️ სამწუხაროდ, ეს პროდუქტი დროებით მარაგში არ არის!', '⚠️ Unfortunately, this product is temporarily out of stock!', '⚠️ К сожалению, этого товара временно нет в наличии!'));
        return;
    }

    const qtyInput = document.getElementById(`modal-qty-${productId}`);
    const qty = qtyInput ? parseInt(qtyInput.value) || 1 : 1;
    
    let finalPrice = prod.price;
    const priceEl = document.getElementById(`modal-price-${productId}`);
    if (priceEl) {
        finalPrice = parseFloat(priceEl.innerText) || prod.price;
    }

    const sizeSelect = document.getElementById(`modal-size-${productId}`);
    const colorSelect = document.getElementById(`modal-color-${productId}`);
    const selectedSize = sizeSelect ? sizeSelect.value : null;
    const selectedColor = colorSelect ? colorSelect.value : null;

    let rawName = prod.title || prod.name || prod.productName;
    let prodNameStr = getTranslatedText(rawName) || 'უსახელო პროდუქტი';

    const existingIndex = cart.findIndex(item => 
        item.id === productId && 
        item.selectedSize === selectedSize && 
        item.selectedColor === selectedColor
    );

    if (existingIndex > -1) {
        cart[existingIndex].quantity += qty;
    } else {
        cart.push({ 
            ...prod, 
            displayName: prodNameStr,
            price: finalPrice, 
            quantity: qty,
            selectedSize: selectedSize,
            selectedColor: selectedColor
        });
    }

    updateCart();
    alert(`✅ "${prodNameStr}" (${qty} ${getLangText('ცალი', 'pcs', 'шт.')}) ${getLangText('დაემატა კალათაში!', 'was added to the cart!', 'добавлен в корзину!')}`);
    closeProductModal();
}

function filterCategory(categoryName, element) {
    if (element) {
        const menuItems = document.querySelectorAll('.category-menu li');
        menuItems.forEach(item => item.classList.remove('active'));
        element.classList.add('active');
    }

    const prodList = (typeof products !== 'undefined' ? products : []);

    if (categoryName === 'all') {
        renderProducts(prodList);
    } else {
        const filtered = prodList.filter(p => p.category === categoryName);
        renderProducts(filtered);
    }
}

// ==========================================
// 7. კალათა & შეკვეთის გაფორმება (CHECKOUT)
// ==========================================
function updateCart() {
    localStorage.setItem('cart_items', JSON.stringify(cart));

    const cartCountEl = document.getElementById('cart-count');
    const cartListEl = document.getElementById('cart-list');
    const totalPriceEl = document.getElementById('cart-total-price');
    const checkoutSection = document.getElementById('checkout-section');

    const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (cartCountEl) cartCountEl.innerText = totalCount;

    if (!cartListEl) return;

    if (cart.length === 0) {
        cartListEl.innerHTML = '<p class="empty-msg" data-i18n="emptyCartMsg">თქვენი კალათა ამჟამად ცარიელია.</p>';
        if (checkoutSection) checkoutSection.style.display = 'none';
        return;
    }

    if (checkoutSection) checkoutSection.style.display = 'block';
    cartListEl.innerHTML = '';
    let totalSum = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        totalSum += itemTotal;

        const optionsText = [
            item.selectedSize ? `${getLangText('ზომა:', 'Size:', 'Размер:')} ${item.selectedSize}` : '',
            item.selectedColor ? `${getLangText('ფერი:', 'Color:', 'Цвет:')} ${item.selectedColor}` : ''
        ].filter(Boolean).join(', ');

        let nameToShow = item.displayName || item.title || item.name;
        nameToShow = getTranslatedText(nameToShow);

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; padding: 8px; border-bottom: 1px solid #ddd;";
        itemDiv.innerHTML = `
            <div>
                <strong>${nameToShow}</strong> ${optionsText ? `<small style="color:#666;">(${optionsText})</small>` : ''}<br>
                <small>${item.price.toFixed(2)} ₾ x ${item.quantity} = ${itemTotal.toFixed(2)} ₾</small>
            </div>
            <button class="qty-btn" style="background:#ef4444; color:white; border:none; padding:6px 10px; border-radius:4px; cursor:pointer;" onclick="removeFromCart(${index})">🗑️</button>
        `;
        cartListEl.appendChild(itemDiv);
    });

    if (totalPriceEl) totalPriceEl.innerText = totalSum.toFixed(2);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

async function checkout() {
    if (!currentUser) {
        alert('⚠️ შეკვეთის გასაფორმებლად გთხოვთ გაიაროთ ავტორიზაცია ან დარეგისტრირდეთ!');
        if (typeof showPage === 'function') showPage('auth-section');
        return;
    }
    
    if (!cart || cart.length === 0) {
        alert('კალათა ცარიელია!');
        return;
    }

    let paperTotal = 0;
    let otherTotal = 0;

    cart.forEach(item => {
        const itemPrice = Number(item.price) || 0;
        const itemQty = Number(item.quantity) || 1;
        const itemSum = itemPrice * itemQty;

        const isPaperProduct = 
            item.category === 'paper' || 
            item.isPaper === true || 
            (typeof item.category === 'string' && item.category.toLowerCase().includes('paper')) ||
            (typeof item.name === 'string' && item.name.toLowerCase().includes('ქაღალდი')) ||
            (typeof item.title === 'string' && item.title.toLowerCase().includes('ქაღალდი'));

        if (isPaperProduct) {
            paperTotal += itemSum;
        } else {
            otherTotal += itemSum;
        }
    });

    if (otherTotal === 0 && paperTotal > 0) {
        if (paperTotal < 200) {
            alert(`⚠️ მხოლოდ საბეჭდი ქაღალდის შეკვეთისას მინიმალური თანხა შეადგენს 200 ₾-ს.\nთქვენი ქაღალდის ჯამი: ${paperTotal.toFixed(2)} ₾`);
            return;
        }
    }

    if (otherTotal > 0) {
        if (otherTotal < 50) {
            alert(`⚠️ შეკვეთის გასაფორმებლად პროდუქტების ჯამური თანხა (საბეჭდი ქაღალდის გარეშე) უნდა იყოს ნაკლები 50 ₾-ზე.\nთქვენი პროდუქტების ჯამი (ქაღალდის გარეშე): ${otherTotal.toFixed(2)} ₾`);
            return;
        }
    }

    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.disabled = true;
        checkoutBtn.innerText = 'მუშავდება...';
    }

    const orderId = '#' + Math.floor(10000 + Math.random() * 90000);
    const totalSum = cart.reduce((sum, item) => sum + (Number(item.price) * Number(item.quantity || 1)), 0).toFixed(2);
    
    const userInfo = `${currentUser.username || ''} (${currentUser.phone || 'ტელეფონი არ არის'})`;
    const address = currentUser.address || 'არ არის მითითებული';
    const lang = typeof currentLang !== 'undefined' ? currentLang : 'ka';

    const orderData = {
        orderId,
        userInfo,
        address,
        cart: cart.map(item => {
            let itemName = item.displayName || item.title || item.name || 'უცნობი პროდუქტი';
            if (typeof itemName === 'object') {
                itemName = itemName[lang] || itemName.ka || Object.values(itemName)[0];
            }

            // 📸 სურათის მისამართების გარდაქმნა სრულ დომენურ URL-ად
            const rawImages = Array.isArray(item.images) ? item.images : (item.images ? [item.images] : []);
            const fullUrlImages = rawImages.map(img => {
                if (typeof img === 'string' && img.startsWith('http')) {
                    return img;
                }
                const cleanImgPath = String(img).replace(/^\//, '');
                return `https://gltrade.ge/${cleanImgPath}`;
            });

            return {
                id: item.id,
                barcode: item.barcode || '', // 🏷️ შტრიხკოდის გაგზავნა
                name: itemName,
                price: Number(item.price),
                quantity: item.quantity || 1,
                images: fullUrlImages, // 🌐 სრული URL-ები Telegram-ისთვის
                selectedSize: item.selectedSize || null,
                selectedColor: item.selectedColor || null
            };
        }),
        totalSum: Number(totalSum)
    };

    try {
        const token = currentUser.token || localStorage.getItem('auth_token');
        const headers = { 'Content-Type': 'application/json' };
        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch('https://gltrade-backend.onrender.com/api/checkout', {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(orderData)
        });

        if (response.ok) {
            alert('🎉 შეკვეთა წარმატებით გაფორმდა!');
            if (!currentUser.orderHistory) currentUser.orderHistory = [];
            currentUser.orderHistory.push(orderData);
            localStorage.setItem('logged_user', JSON.stringify(currentUser));
            
            cart = [];
            updateCart();
            showPage('home');
        } else {
            alert('⚠️ შეკვეთის გაგზავნისას დაფიქსირდა შეცდომა.');
        }
    } catch (err) {
        console.error('Checkout error:', err);
        alert('⚠️ სერვერთან კავშირი ვერ დამყარდა.');
    } finally {
        if (checkoutBtn) {
            checkoutBtn.disabled = false;
            checkoutBtn.innerText = '✅ შეკვეთის გაფორმება';
        }
    }
}

// ==========================================
// 8. შეკვეთების ისტორია & გამეორება (RE-ORDER)
// ==========================================
function renderOrderHistory() {
    const historyContainer = document.getElementById('order-history-list');
    if (!historyContainer) return;

    if (!currentUser || !currentUser.orderHistory || currentUser.orderHistory.length === 0) {
        historyContainer.innerHTML = '<p style="text-align:center; padding: 20px;">შეკვეთების ისტორია ცარიელია.</p>';
        return;
    }

    historyContainer.innerHTML = currentUser.orderHistory.map(order => `
        <div class="order-card" style="border: 1px solid #e2e8f0; padding: 15px; margin-bottom: 15px; border-radius: 8px; background: #fff;">
            <div style="display:flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #eee; padding-bottom: 8px;">
                <strong>შეკვეთა ${order.orderId}</strong>
                <small style="color: #666;">${order.date}</small>
            </div>
            
            <ul style="margin: 10px 0; padding-left: 20px;">
                ${order.cart.map(item => `
                    <li>${item.name} ${item.selectedSize ? `[${item.selectedSize}]` : ''} ${item.selectedColor ? `[${item.selectedColor}]` : ''} - ${item.quantity} ცალი (${(item.price * item.quantity).toFixed(2)} ₾)</li>
                `).join('')}
            </ul>
            
            <div style="display:flex; justify-content: space-between; align-items: center; margin-top: 15px; flex-wrap: wrap; gap: 10px;">
                <strong>სულ: ${order.totalSum} ₾</strong>
                
                <button onclick="repeatOrder('${order.orderId}')" style="background: #2563eb; color: white; border: none; padding: 8px 14px; border-radius: 6px; cursor: pointer; font-weight: bold;">
                    🔄 შეკვეთის გამეორება
                </button>
            </div>
        </div>
    `).join('');
}

function repeatOrder(orderId) {
    if (!currentUser || !currentUser.orderHistory) return;

    const pastOrder = currentUser.orderHistory.find(o => o.orderId === orderId);
    
    if (!pastOrder) {
        alert('⚠️ შეკვეთა ვერ მოიძებნა!');
        return;
    }

    pastOrder.cart.forEach(item => {
        const existingIndex = cart.findIndex(c => 
            c.name === item.name && 
            c.selectedSize === item.selectedSize && 
            c.selectedColor === item.selectedColor
        );

        if (existingIndex > -1) {
            cart[existingIndex].quantity += item.quantity;
        } else {
            cart.push({ ...item });
        }
    });

    updateCart();
    alert('✅ პროდუქტები წარმატებით დაემატა კალათაში!');
    showPage('cart');
}
// ==========================================
// 8. ენები (i18n) & Dark Mode & Init
// ==========================================
const translations = {
    ka: {
        navHome: "🏠 მთავარი",
        navCatalog: "📦 პროდუქცია",
        navAbout: "ℹ️ ჩვენს შესახებ",
        navTerms: "📜 მომსახურების პირობები",
        navCart: "🛒 კალათა",
        navLogin: "🔑 შესვლა / რეგისტრაცია",
        navLogout: "🚪 გამოსვლა",
        searchPlaceholder: "მოძებნეთ პროდუქტი...",
        heroTitle: "🏢 GLTrade - მარაგები თქვენი ოფისისთვის",
        heroSubtitle: "საბითუმო მომარაგება სწრაფად, მარტივად და საუკეთესო ფასად.",
        heroBtn: "🛍️ იხილეთ პროდუქცია",
        contactUs: "დაგვიკავშირდით:",
        locationTitle: "📍 ჩვენი ოფისის ლოკაცია",
        addressLabel: "მისამართი:",
        addressText: "ქ. თბილისი, ვაჟა-ფშაველას გამზირი #45",
        phoneLabel: "ტელეფონი:",
        hoursLabel: "სამუშაო საათები:",
        hoursText: "ორშ - პარ: 09:00 - 18:00",
        emailLabel: "ელ-ფოსტა:",
        
        // Categories (კატეგორიები)
        catTitle: "კატეგორიები",
        catAll: "📦 ყველა პროდუქტი",
        catPaper: "📄 ქაღალდის ნივთები",
        catstationary: "✂️ საკანცელარიო ნივთები",
        catwriting: "✏️ საწერინივთები",
        catoffice: "📂 საოფისე ნივთები",
        cathygiene: "🏥 ჰიგიენური და სამედიცინო საშუალებები",

        //bank
        bankLabel: "საბანკო ანგარიში:",
        accountLabel: "ანგარიშის ნომერი:",
        recipientLabel: "მიმღები:",

        barcodeLabel: "შტრიხკოდი:",
            

        loginTitle: "🔑 სისტემაში შესვლა",
        orGoogle: "ან გაიარეთ ავტორიზაცია Google-ით",
        regTitle: "📝 რეგისტრაცია",
        userPlaceholder: "მომხმარებლის სახელი",
        passPlaceholder: "პაროლი",
        emailPlaceholder: "ელ-ფოსტა",
        phonePlaceholder: "5XX XX XX XX",
        addressPlaceholder: "მიწოდების მისამართი",
        sendCodeBtn: "📲 კოდის გაგზავნა",
        codePlaceholder: "ჩაწერეთ 4-ნიშნა SMS კოდი",
        loginBtn: "შესვლა",
        regBtn: "რეგისტრაცია",
        noAccountMsg: "ჯერ არ გაქვთ ანგარიში?",
        hasAccountMsg: "უკვე გაქვთ ანგარიში?",
        regLink: "დარეგისტრირდით",
        loginLink: "შედით",
        aboutTitle: "🏢 GLTrade-ის შესახებ",
        aboutText: "GLTrade არის დისტრიბუციული კომპანია, რომელიც ბიზნესებს ყოველდღიურად საჭირო პროდუქციით ამარაგებს. ჩვენი საქმიანობის ძირითადი მიმართულებებია საკანცელარიო და საოფისე პროდუქცია, დასუფთავებისა და ჰიგიენის საშუალებები, სარეცხი საშუალებები, ასევე სასტუმროსა და სხვა კომერციული ობიექტებისთვის საჭირო ინვენტარი. ჩვენ ვთანამშრომლობთ კომპანიებთან, ოფისებთან, სასტუმროებთან, რესტორნებთან და სხვადასხვა ორგანიზაციასთან. ჩვენი მთავარი მიზანია მომხმარებელს შევთავაზოთ ხარისხიანი პროდუქცია, კონკურენტული ფასები, დროული მიწოდება და საიმედო მომსახურება. GLTrade — თქვენი ბიზნესის ყოველდღიური საჭიროებები ერთ სივრცეში.",
        termsTitle: "📜 მომსახურების პირობები",
        termsMainTitle: "📜 ჩვენი მომსახურების პირობები",
        termsIntro: "ჩვენი კომპანია იურიდიულ და ფიზიკურ პირებს სთავაზობს საოფისე ნივთების ონლაინ შეძენას და უფასო მიტანის სერვისს მთელი საქართველოს მასშტაბით.",
        termsOrderTitle: "1. შეკვეთის განთავსება",
        termsOrderRule1: "შეკვეთის მინიმალური ჯამური ღირებულება შეადგენს 50 ლარს (საბეჭდი ქაღალდის ღირებულების გარეშე).",
        termsOrderRule2: "შეკვეთის გასაფორმებლად აუცილებელია საიტზე რეგისტრაცია და მოთხოვნილი ინფორმაციის შევსება.",
        termsOrderRule3: "რეგისტრაციის დასრულების შემდეგ მომხმარებელს ეძლევა შესაძლებლობა ისარგებლოს პროდუქციის ონლაინ შეძენისა და უფასო მიტანის სერვისით.",
        termsOrderRule4: "შეკვეთის დადასტურება გამოგეგზავნებათ მითითებულ ელექტრონულ ფოსტაზე, რაც ნიშნავს, რომ კომპანია ადასტურებს შეკვეთის მიღებას და მისი მიწოდებისთვის მზადყოფნას.",
        termsDeliveryTitle: "2. მიწოდების პირობები",
        termsDeliveryRule1: "თბილისში შეკვეთის მიწოდება ხორციელდება 1 სამუშაო დღის განმატავლობაში.",
        termsDeliveryRule2: "რეგიონებში შეკვეთის მიწოდება ხორციელდება 3 სამუშაო დღის განმატავლობაში.",
        termsDeliveryRule3: "მიწოდება ხორციელდება უფასოდ.",
        termsPaymentTitle: "3. გადახდის პირობები",
        termsPaymentRule1: "ანგარიშსწორება ხორციელდება მხოლოდ უნაღდო ფორმით.",
        termsPaymentRule2: "გადახდა სასურველია განხორციელდეს შეკვეთის გაფორმებისთანავე.",
        termsPaymentRule3: "შეკვეთის მიწოდება ხორციელდება ანგარიშსწორების დადასტურების შემდეგ.",
        termsImportantTitle: "მნიშვნელოვანი ინფორმაცია",
        termsImportantText: "შეკვეთის გაფორმებამდე გთხოვთ, ყურადღებით გადაამოწმოთ მითითებული საკონტაქტო და მიწოდების ინფორმაცია, რათა შეკვეთის დროული და შეუფერხებელი მიწოდება უზრუნველვყოთ.",
        cartTitle: "🛒 თქვენი კალათა",
        emptyCartMsg: "თქვენი კალათა ამჟამად ცარიელია.",
        totalLabel: "ჯამური თანხა:",
        orderCodeLabel: "შეკვეთის კოდი:",
        checkoutBtn: "✅ შეკვეთის გაფორმება",
        
        // Profile & History
        profileTitle: "👤 ჩემი პროფილი",
        nameLabel: "სახელი:",
        profilePhoneLabel: "ტელეფონი:",
        profileAddressLabel: "მისამართი:",
        historyBtn: "📄 შეკვეთების ისტორია",
        historyTitle: "📦 შეკვეთების ისტორია",
        noHistoryMsg: "შეკვეთების ისტორია ცარიელია.",
        completeProfileTitle: "📍 მონაცემების შევსება",
        completeProfileSubtitle: "შეკვეთის გასაფორმებლად გთხოვთ მიუთითოთ თქვენი ტელეფონის ნომერი და მისამართი.",
        saveBtn: "💾 შენახვა და გაგრძელება",
        
        footerRights: "© 2026 GLTrade. ყველა უფლება დაცულია."
    },
    en: {
        navHome: "🏠 Home",
        navCatalog: "📦 Products",
        navAbout: "ℹ️ About Us",
        navTerms: "📜 Terms of Service",
        navCart: "🛒 Cart",
        navLogin: "🔑 Login / Register",
        navLogout: "🚪 Logout",
        searchPlaceholder: "Search product...",
        heroTitle: "🏢 GLTrade - Supplies for Your Office",
        heroSubtitle: "Wholesale supply quickly, easily, and at the best price.",
        heroBtn: "🛍️ View Products",
        contactUs: "Contact Us:",
        locationTitle: "📍 Our Office Location",
        addressLabel: "Address:",
        addressText: "Tbilisi, Vazha-Pshavela Ave. #45",
        phoneLabel: "Phone:",
        hoursLabel: "Working Hours:",
        hoursText: "Mon - Fri: 09:00 - 18:00",
        emailLabel: "Email:",
        
        // Categories
        catTitle: "Categories",
        catAll: "📦 All Products",
        catPaper: "📄 Paper Products",
        catstationary: "✂️ Stationery",
        catwriting: "✏️ Writing Supplies",
        catoffice: "📂 Office Supplies",
        cathygiene: "🏥 Hygiene & Medical Supplies",

        //bank
        bankLabel: "Bank Account:",
        accountLabel: "Account Number:",
        recipientLabel: "Recipient:",

        barcodeLabel: "Barcode:",
        

        loginTitle: "🔑 User Login",
        orGoogle: "Or sign in with Google",
        regTitle: "📝 Registration",
        userPlaceholder: "Username",
        passPlaceholder: "Password",
        emailPlaceholder: "Email",
        phonePlaceholder: "5XX XX XX XX",
        addressPlaceholder: "Delivery Address",
        sendCodeBtn: "📲 Send Code",
        codePlaceholder: "Enter 4-digit SMS code",
        loginBtn: "Login",
        regBtn: "Register",
        noAccountMsg: "Don't have an account?",
        hasAccountMsg: "Already have an account?",
        regLink: "Register here",
        loginLink: "Log in",
        aboutTitle: "🏢 About GLTrade",
        aboutText: "GLTrade is a distribution company that supplies businesses with everyday essential products. Our main fields of activity are stationery and office supplies, cleaning and hygiene products, detergents, as well as equipment for hotels and other commercial facilities. We cooperate with companies, offices, hotels, restaurants, and various organizations. Our main goal is to offer customers quality products, competitive prices, timely delivery, and reliable service. GLTrade — your business's daily needs in one space.",
        termsTitle: "📜 Terms of Service",
        termsMainTitle: "📜 Terms of Service",
        termsIntro: "Our company offers legal entities and individuals online purchase of office supplies and free delivery service throughout Georgia.",
        termsOrderTitle: "1. Placing an Order",
        termsOrderRule1: "The minimum total order value is 50 GEL (excluding printing paper).",
        termsOrderRule2: "To place an order, it is necessary to register on the website and fill in the required information.",
        termsOrderRule3: "After completing registration, the user gets access to online purchases and free delivery services.",
        termsOrderRule4: "An order confirmation will be sent to your email, indicating that the company accepts the order and is ready for delivery.",
        termsDeliveryTitle: "2. Delivery Terms",
        termsDeliveryRule1: "Delivery in Tbilisi is carried out within 1 working day.",
        termsDeliveryRule2: "Delivery to regions is carried out within 3 working days.",
        termsDeliveryRule3: "Delivery is free of charge.",
        termsPaymentTitle: "3. Payment Terms",
        termsPaymentRule1: "Payment is made exclusively by non-cash methods.",
        termsPaymentRule2: "Payment is recommended immediately upon placing the order.",
        termsPaymentRule3: "Order delivery is performed after confirmation of payment.",
        termsImportantTitle: "Important Information",
        termsImportantText: "Before placing an order, please double-check your contact and delivery information to ensure timely and smooth delivery.",
        cartTitle: "🛒 Your Cart",
        emptyCartMsg: "Your cart is currently empty.",
        totalLabel: "Total Amount:",
        orderCodeLabel: "Order ID:",
        checkoutBtn: "✅ Place Order",
        
        // Profile & History
        profileTitle: "👤 My Profile",
        nameLabel: "Name:",
        profilePhoneLabel: "Phone:",
        profileAddressLabel: "Address:",
        historyBtn: "📄 Order History",
        historyTitle: "📦 Order History",
        noHistoryMsg: "Order history is empty.",
        completeProfileTitle: "📍 Complete Your Profile",
        completeProfileSubtitle: "Please provide your phone number and address to complete the order.",
        saveBtn: "💾 Save & Continue",
        
        footerRights: "© 2026 GLTrade. All rights reserved."
    },
    ru: {
        navHome: "🏠 Главная",
        navCatalog: "📦 Продукция",
        navAbout: "ℹ️ О нас",
        navTerms: "📜 Условия обслуживания",
        navCart: "🛒 Корзина",
        navLogin: "🔑 Вход / Регистрация",
        navLogout: "🚪 Выход",
        searchPlaceholder: "Поиск товара...",
        heroTitle: "🏢 GLTrade - Товары для вашего офиса",
        heroSubtitle: "Оптовые поставки быстро, просто и по лучшей цене.",
        heroBtn: "🛍️ Смотреть товары",
        contactUs: "Свяжитесь с нами:",
        locationTitle: "📍 Локация нашего офиса",
        addressLabel: "Адрес:",
        addressText: "г. Тбилиси, пр. Важа-Пшавела #45",
        phoneLabel: "Телефон:",
        hoursLabel: "Часы работы:",
        hoursText: "Пн - Пт: 09:00 - 18:00",
        emailLabel: "Эл. почта:",
        
        // Categories
        catTitle: "Категории",
        catAll: "📦 Все товары",
        catPaper: "📄 Бумажная продукция",
        catstationary: "✂️ Канцтовары",
        catwriting: "✏️ Письменные принадлежности",
        catoffice: "📂 Офисные принадлежности",
        cathygiene: "🏥 Гигиенические и медицинские средства",

        //bank
        bankLabel: "Банковский счет:",
        accountLabel: "Номер счета:",
        recipientLabel: "Получатель:",
        
       barcodeLabel: "Штрихкод:",
     
        loginTitle: "🔑 Вход в систему",
        orGoogle: "Или войдите через Google",
        regTitle: "📝 Регистрация",
        userPlaceholder: "Имя пользователя",
        passPlaceholder: "Пароль",
        emailPlaceholder: "Эл. почта",
        phonePlaceholder: "5XX XX XX XX",
        addressPlaceholder: "Адрес доставки",
        sendCodeBtn: "📲 Отправить код",
        codePlaceholder: "Введите 4-значный SMS код",
        loginBtn: "Войти",
        regBtn: "Зарегистрироваться",
        noAccountMsg: "Еще нет аккаунта?",
        hasAccountMsg: "Уже есть аккаунт?",
        regLink: "Зарегистрируйтесь",
        loginLink: "Войдите",
        aboutTitle: "🏢 Об GLTrade",
        aboutText: "GLTrade — это дистрибьюторская компания, которая обеспечивает бизнес всеми необходимыми повседневными товарами. Основные направления нашей деятельности — канцелярия и офисные принадлежности, чистящие и гигиенические средства, моющие средства, а также инвентарь для отелей и других коммерческих объектов. Мы сотрудничаем с компаниями, офисами, отелями, ресторанами и различными организациями. Наша главная цель — предложить клиентам качественную продукцию, конкурентоспособные цены, своевременную доставку и надежный сервис. GLTrade — повседневные потребности вашего бизнеса в одном пространстве.",
        termsTitle: "📜 Условия обслуживания",
        termsMainTitle: "📜 Условия обслуживания",
        termsIntro: "Наша компания предлагает юридическим и физическим лицам онлайн-покупку офисных товаров и бесплатную доставку по всей Грузии.",
        termsOrderTitle: "1. Оформление заказа",
        termsOrderRule1: "Минимальная общая сумма заказа составляет 50 лари (без учета стоимости бумаги для печати).",
        termsOrderRule2: "Для оформления заказа необходимо зарегистрироваться на сайте и заполнить требуемую информацию.",
        termsOrderRule3: "После завершения регистрации пользователь получает возможность пользоваться онлайн-покупками и бесплатной доставкой.",
        termsOrderRule4: "Подтверждение заказа будет отправлено на указанную эл. почту, что означает принятие заказа компанией и готовность к доставке.",
        termsDeliveryTitle: "2. Условия доставки",
        termsDeliveryRule1: "Доставка по Тбилиси осуществляется в течение 1 рабочего дня.",
        termsDeliveryRule2: "Доставка в регионы осуществляется в течение 3 рабочих дней.",
        termsDeliveryRule3: "Доставка осуществляется бесплатно.",
        termsPaymentTitle: "3. Условия оплаты",
        termsPaymentRule1: "Расчет производится только в безналичной форме.",
        termsPaymentRule2: "Оплату желательно произвести сразу после оформления заказа.",
        termsPaymentRule3: "Доставка заказа осуществляется после подтверждения оплаты.",
        termsImportantTitle: "Важная информация",
        termsImportantText: "Перед оформлением заказа, пожалуйста, внимательно проверьте контактную информацию и адрес доставки для своевременного выполнения заказа.",
        cartTitle: "🛒 Ваша корзина",
        emptyCartMsg: "Ваша корзина пуста.",
        totalLabel: "Итоговая сумма:",
        orderCodeLabel: "Код заказа:",
        checkoutBtn: "✅ Оформить заказ",
        
        // Profile & History
        profileTitle: "👤 Мой профиль",
        nameLabel: "Имя:",
        profilePhoneLabel: "Телефон:",
        profileAddressLabel: "Адрес:",
        historyBtn: "📄 История заказов",
        historyTitle: "📦 История заказов",
        noHistoryMsg: "История заказов пуста.",
        completeProfileTitle: "📍 Заполнение данных",
        completeProfileSubtitle: "Укажите номер телефона и адрес для завершения заказа.",
        saveBtn: "💾 Сохранить и продолжить",
        
        footerRights: "© 2026 GLTrade. Все права защищены."
    }
};


function changeLanguage(lang) {
    currentLang = lang;

    const langBtns = document.querySelectorAll('.lang-btn');
    langBtns.forEach(btn => btn.classList.remove('active'));

    const activeBtn = document.getElementById(`btn-${lang}`);
    if (activeBtn) activeBtn.classList.add('active');

    // გვერდის ტექსტების განახლება
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            el.innerText = translations[lang][key];
        }
    });

    // Placeholder-ების განახლება
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (translations[lang] && translations[lang][key]) {
            el.placeholder = translations[lang][key];
        }
    });

    // პროდუქტების ხელახლა დახატვა ახალ ენაზე
    const prodList = typeof products !== 'undefined' ? products : [];
    renderProducts(prodList);

    // კალათის ტექსტების განახლება
    updateCart();

    // ერთიანი localStorage key
    localStorage.setItem('site_lang', lang);
    localStorage.setItem('app_lang', lang);
}


function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    const isDark = document.body.classList.contains('dark-mode');
    localStorage.setItem('dark_mode', isDark);
    
    const themeBtn = document.getElementById('theme-toggle');
    if (themeBtn) {
        themeBtn.innerText = isDark ? '☀️ Light' : '🌙 Dark';
    }
}

// ინიციალიზაცია გვერდის ჩატვირთვისას
document.addEventListener('DOMContentLoaded', () => {
    const savedLang = localStorage.getItem('site_lang') || localStorage.getItem('app_lang') || 'ka';
    changeLanguage(savedLang);

    if (localStorage.getItem('dark_mode') === 'true') {
        document.body.classList.add('dark-mode');
        const themeBtn = document.getElementById('theme-toggle');
        if (themeBtn) themeBtn.innerText = '☀️ Light';
    }

    updateUserNav();
    updateCart();
});