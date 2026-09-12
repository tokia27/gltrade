// ==========================================
// 1. პროდუქტების მონაცემთა ბაზა
// ==========================================
const products = [
{
        "id": 1,
        'barcode': 'ა4და DA',
        "title": {
            "ka": "საბეჭდი ქაღალდი A4 (500 ფურცლიანი) Double A",
            "en": "A4 Copy Paper (500 sheets) Double A",
            "ru": "Бумага для печати А4 (500 листов) Double A"
        },
        "category": "paper",
        "subcategory": "print_paper",
        "price": 12.50,
        "inStock": true,
        "images": ["images/images.jpg"],
        "brands": ["Double A"]
    },
{
        "id": 2,
        "title": {
            "ka": "საბეჭდი ქაღალდი A4 (500 ფურცლიანი) Ballet",
            "en": "A4 Copy Paper (500 sheets) Ballet",
            "ru": "Бумага для печати А4 (500 листов) Ballet"
        },
        "category": "paper",
        "subcategory": "print_paper",
        "price": 7.45,
        "inStock": true,
        "images": ["images/furceli2.jpg"],
        "brands": ["Ballet"]
    },
{
        "id": 3,
        'barcode': 'ა4/პრო',
        "title": {
            "ka": "საბეჭდი ქაღალდი A4 (500 ფურცლიანი) PROJECTA",
            "en": "A4 Copy Paper (500 sheets) PROJECTA",
            "ru": "Бумага для печати А4 (500 листов) PROJECTA"
        },
        "category": "paper",
        "subcategory": "print_paper",
        "price": 7.45,
        "inStock": true, 
        "images": ["images/furceli 3.jpg"],
        "brands": ["PROJECTA"]
    },
{
  "id": 4,
  "title": {
    "ka": "ბაინდერი A4",
    "en": "Ring Binder A4",
    "ru": "Папка-регистратор А4"
  },
  "category": "stationery",
  "subcategory": "binder",
  "price": 3.50,
  "inStock": true,
  "images": ["images/saqagalde7.jpg"],
  "sizes": [{ "ka": "განიერი", "en": "Wide", "ru": "Широкий" }],
  "colors": [{ "ka": "ლურჯი", "en": "Blue", "ru": "Синий" }]
},
{
  "id": 5,
  "title": {
    "ka": "ბაინდერი A4",
    "en": "Ring Binder A4",
    "ru": "Папка-регистратор А4"
  },
  "category": "stationery",
  "subcategory": "binder",
  "price": 3.50,
  "inStock": true,
  "images": ["images/saqagalde12.jpg"],
  "sizes": [{ "ka": "განიერი", "en": "Wide", "ru": "Широкий" }],
  "colors": [{ "ka": "შავი", "en": "Black", "ru": "Черный" }]
},
{
  "id": 6,
  "title": {
    "ka": "ბაინდერი A4",
    "en": "Ring Binder A4",
    "ru": "Папка-регистратор А4"
  },
  "category": "stationery",
  "subcategory": "binder",
  "price": 4.00,
  "inStock": true,
  "images": ["images/saqagalde8.jpg"],
  "sizes": [{ "ka": "განიერი", "en": "Wide", "ru": "Широкий" }],
  "colors": [{ "ka": "მწვანე", "en": "Green", "ru": "Зеленый" }]
},
{
  "id": 7,
  "title": {
    "ka": "ბაინდერი A4",
    "en": "Ring Binder A4",
    "ru": "Папка-регистратор А4"
  },
  "category": "stationery",
  "subcategory": "binder",
  "price": 3.00,
  "inStock": true,
  "images": ["images/saqagalde13.jpg"],
  "sizes": [{ "ka": "ვიწრო", "en": "Narrow", "ru": "Узкий" }],
  "colors": [{ "ka": "ლურჯი", "en": "Blue", "ru": "Синий" }]
},
{
  "id": 8,
  "title": {
    "ka": "ბაინდერი A4",
    "en": "Ring Binder A4",
    "ru": "Папка-регистратор А4"
  },
  "category": "stationery",
  "subcategory": "binder",
  "price": 3.00,
  "inStock": true,
  "images": ["images/saqagalde9.jpg"],
  "sizes": [{ "ka": "ვიწრო", "en": "Narrow", "ru": "Узкий" }],
  "colors": [{ "ka": "შავი", "en": "Black", "ru": "Черный" }]
},
{
  "id": 9,
  "title": {
    "ka": "ბაინდერი A4",
    "en": "Ring Binder A4",
    "ru": "Папка-регистратор А4"
  },
  "category": "stationery",
  "subcategory": "binder",
  "price": 4.00,
  "inStock": true,
  "images": ["images/saqagalde14.jpg"],
  "sizes": [{ "ka": "ვიწრო", "en": "Narrow", "ru": "Узкий" }],
  "colors": [{ "ka": "მწვანე", "en": "Green", "ru": "Зеленый" }]
},
{
  "id": 10,
  "title": {
    "ka": "ბაინდერი A5",
    "en": "Ring Binder A5",
    "ru": "Папка-регистратор А5"
  },
  "category": "stationery",
  "subcategory": "binder",
  "price": 4.00,
  "inStock": true,
  "images": ["images/saqagalde a5.jpg"]
},
{
        "id": 11,
        'barcode': 'ა4/სპეც',
        "title": {
            "ka": "ქაღალდი ქსეროქსის A3 80გრ. 500 ფურცელი PROJECTA",
            "en": "A3 Copy Paper 80g 500 sheets PROJECTA",
            "ru": "Бумага ксероксная А3 80г 500 листов PROJECTA"
        },
        "category": "paper",
        "subcategory": "print_paper",
        "price": 16.50,
        "inStock": true,
        "images": ["images/furceli1.jpg"],
        "brands": [{ "name": "Projecta", "price": 16.50 }]
    },
{
        "id": 12,
        'barcode': 'ა3',
        "title": {
            "ka": "ქაღალდი ქსეროქსის A3 80გრ. 500 ფურცელი Double A",
            "en": "A3 Copy Paper 80g 500 sheets Double A",
            "ru": "Бумага ксероксная А3 80г 500 листов Double A"
        },
        "category": "paper",
        "subcategory": "print_paper",
        "price": 28.50,
        "inStock": true,
        "images": ["images/images.jpg"],
        "brands": [{ "name": "Double A", "price": 28.50 }]
    },
{
  "id": 32,
  "barcode": "NS722-HB",
  "title": {
    "ka": "ფანქარი 10 ცალი HB Deli",
    "en": "Pencil 10 pcs HB Deli",
    "ru": "Карандаш 10 шт HB Deli"
  },
  "price": 4.90,
  "category": "writing",
  "subcategory": "pencil",
  "inStock": true,
  "images": ["images/kalami1.jpg"]
},

{
  "id": 33,
  "barcode": "58100",
  "title": {
    "ka": "ფანქარი 12ც Deli",
    "en": "Pencil 12 pcs Deli",
    "ru": "Карандаш 12 шт Deli"
  },
  "price": 3.20,
  "category": "writing",
  "subcategory": "pencil",
  "inStock": true,
  "images": ["images/kalami2.jpg"]
},

{
  "id": 34,
  "barcode": "C001-HB",
  "title": {
    "ka": "ფანქარი 2B (12 ცალი) HB Deli",
    "en": "Pencil 2B (12 pcs) HB Deli",
    "ru": "Карандаш 2B (12 шт) HB Deli"
  },
  "price": 2.50,
  "category": "writing",
  "subcategory": "pencil",
  "inStock": true,
  "images": ["images/fanqari3.png"]
},

{
  "id": 35,
  "barcode": "U51806",
  "title": {
    "ka": "ფანქარი HB (48 ცალიანი შეკვრა) Deli",
    "en": "Pencil HB (48 pcs pack) Deli",
    "ru": "Карандаш HB (упаковка 48 шт) Deli"
  },
  "price": 15.00,
  "category": "writing",
  "subcategory": "pencil",
  "inStock": true,
  "images": ["images/fanqari4.jpg"]
},

{
  "id": 36,
  "barcode": "38039",
  "title": {
    "ka": "ფანქარი 12 ცალი HB Deli",
    "en": "Pencil 12 pcs HB Deli",
    "ru": "Карандаш 12 шт HB Deli"
  },
  "price": 3.30,
  "category": "writing",
  "subcategory": "pencil",
  "inStock": true,
  "images": ["images/fanqari5.jpg"]
},

{
  "id": 37,
  "barcode": "S999",
  "title": {
    "ka": "ფანქარი SKETCHING PENCIL Deli",
    "en": "Sketching Pencil Deli",
    "ru": "Карандаш для эскизов Deli"
  },
  "price": 480.00,
  "category": "writing",
  "subcategory": "pencil",
  "inStock": true,
  "images": ["images/fanqari6.jpg"]
},

{
  "id": 38,
  "barcode": "C27",
  "title": {
    "ka": "ფანქარი SKETCHING PENCIL (27ცალი) Deli",
    "en": "Sketching Pencil Set (27 pcs) Deli",
    "ru": "Набор карандашей для эскизов (27 шт) Deli"
  },
  "price": 26.00,
  "category": "writing",
  "subcategory": "pencil",
  "inStock": true,
  "images": ["images/fanqari7.jpg"]
},

{
  "id": 39,
  "barcode": "38029",
  "title": {
    "ka": "ფანქარი HB 12ც შეკვრაში Deli",
    "en": "Pencil HB 12 pcs per pack Deli",
    "ru": "Карандаш HB 12 шт в упаковке Deli"
  },
  "price": 2.70,
  "category": "writing",
  "subcategory": "pencil",
  "inStock": true,
  "images": ["images/fanqari8.jpg"]
},

{
  "id": 40,
  "barcode": "C0052B",
  "title": {
    "ka": "ფანქარი 2B (12 ცალი) HB Deli",
    "en": "Pencil 2B (12 pcs) HB Deli",
    "ru": "Карандаш 2B (12 шт) HB Deli"
  },
  "price": 4.50,
  "category": "writing",
  "subcategory": "pencil",
  "inStock": true,
  "images": ["images/fanqari9.jpg"]
},

{
  "id": 41,
  "barcode": "Q00320",
  "title": {
    "ka": "კალამი ბურთულიანი 0.7MM შავი DELI",
    "en": "Ballpoint Pen 0.7mm Black DELI",
    "ru": "Шариковая ручка 0.7мм Черная DELI"
  },
  "price": 0.30,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami3.jpg"]
},

{
  "id": 42,
  "barcode": "Q00220",
  "title": {
    "ka": "კალამი ბურთულიანი 0.7MM შავი DELI",
    "en": "Ballpoint Pen 0.7mm Black DELI",
    "ru": "Шариковая ручка 0.7мм Черная DELI"
  },
  "price": 0.40,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami4.jpg"]
},
{
  "id": 41,
  "barcode": "Q00320",
  "title": {
    "ka": "კალამი ბურთულიანი 0.7MM შავი DELI",
    "en": "Ballpoint Pen 0.7mm Black DELI",
    "ru": "Шариковая ручка 0.7мм Черная DELI"
  },
  "price": 0.30,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami3.jpg"]
},

{
  "id": 42,
  "barcode": "Q00220",
  "title": {
    "ka": "კალამი ბურთულიანი 0.7MM შავი DELI",
    "en": "Ballpoint Pen 0.7mm Black DELI",
    "ru": "Шариковая ручка 0.7мм Черная DELI"
  },
  "price": 0.40,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami4.jpg"]
},

{
  "id": 43,
  "barcode": "Q1-BL",
  "title": {
    "ka": "კალამი ბურთულიანი BULLET TIP 0.7MM BLUE DELI",
    "en": "Ballpoint Pen Bullet Tip 0.7mm Blue DELI",
    "ru": "Шариковая ручка Bullet Tip 0.7мм Синяя DELI"
  },
  "price": 0.20,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami5.jpg"]
},

{
  "id": 44,
  "barcode": "Q19-BL",
  "title": {
    "ka": "კალამი ბურთულიანი 1MM BLUE DELI",
    "en": "Ballpoint Pen 1mm Blue DELI",
    "ru": "Шариковая ручка 1мм Синяя DELI"
  },
  "price": 0.30,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami6.jpg"]
},

{
  "id": 45,
  barcode:'Q3-RD',
  "title": {
    "ka": "კალამი ბურთულიანი 0.7MM RED DELI",
    "en": "Ballpoint Pen 0.7mm Red DELI",
    "ru": "Шариковая ручка 0.7мм Красная DELI"
  },
  "price": 0.20,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami7.jpg"]
},

{
  "id": 46,
  'barcode':'Q2RD',
  "title": {
    "ka": "კალამი ბურთულიანი 0.7MM RED DELI",
    "en": "Ballpoint Pen 0.7mm Red DELI",
    "ru": "Шариковая ручка 0.7мм Красная DELI"
  },
  "price": 0.30,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami8.jpg"]
},

{
  "id": 47,
  "barcode": "Q25BL",
  "title": {
    "ka": "კალამი ბურთულიანი 0.7MM Q25BL DELI",
    "en": "Ballpoint Pen 0.7mm Q25BL DELI",
    "ru": "Шариковая ручка 0.7мм Q25BL DELI"
  },
  "price": 0.40,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami9.jpg"]
},

{
  "id": 48,
  'barcode':'PT209',
  "title": {
    "ka": "კალამი ბურთულიანი 0.7MM წვერით PIANO",
    "en": "Ballpoint Pen 0.7mm Tip PIANO",
    "ru": "Шариковая ручка 0.7мм PIANO"
  },
  "price": 0.70,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami10.jpg"]
},

{
  "id": 49,
  "barcode": "555ლ",
  "title": {
    "ka": "კალამი 555",
    "en": "Pen 555",
    "ru": "Ручка 555"
  },
  "price": 0.15,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami11.jpg"]
},

{
  "id": 50,
  "barcode": "8901015285111",
  "title": {
    "ka": "ბურთულიანი კალმისტარი MONTEX TRICON (50)",
    "en": "Ballpoint Pen MONTEX TRICON (50)",
    "ru": "Шариковая ручка MONTEX TRICON (50)"
  },
  "price": 0.40,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami12.jpg"]
},

{
  "id": 51,
  "barcode": "8901015272005",
  "title": {
    "ka": "ბურთულიანი კალამი MONTEX STYLISH",
    "en": "Ballpoint Pen MONTEX STYLISH",
    "ru": "Шариковая ручка MONTEX STYLISH"
  },
  "price": 0.80,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami13.jpg"]
},

{
  "id": 52,
  "barcode": "Q50-BK",
  "title": {
    "ka": "კალამი ბურთულიანი BULLET TIP 0.7MM BLACK Q50-BK DELI",
    "en": "Ballpoint Pen Bullet Tip 0.7mm Black Q50-BK DELI",
    "ru": "Шариковая ручка Bullet Tip 0.7мм Черная Q50-BK DELI"
  },
  "price": 1.20,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami14.jpg"]
},

{
  "id": 54,
  'barcode':'G11BK',
  "title": {
    "ka": "კალამი მელნიანი GEL PEN 0.7MM G11-BK DELI",
    "en": "Gel Pen 0.7mm G11-BK DELI",
    "ru": "Гелевая ручка 0.7мм G11-BK DELI"
  },
  "price": 1.10,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami16.jpg"]
},

{
  "id": 55,
  'barcode':'G11BL',
  "title": {
    "ka": "კალამი მელნიანი GEL PEN 0.7MM G11-BL DELI",
    "en": "Gel Pen 0.7mm G11-BL DELI",
    "ru": "Гелевая ручка 0.7мм G11-BL DELI"
  },
  "price": 1.10,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami17.jpg"]
},

{
  "id": 56,
  barcode:'E6796',
  "title": {
    "ka": "კალამი სამაგრით GEL PEN 0.5MM წვერით DELI STATIONARY შავი",
    "en": "Gel Pen with Clip 0.5mm Tip DELI Black",
    "ru": "Гелевая ручка с зажимом 0.5мм DELI Черная"
  },
  "price": 3.50,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami18.jpg"]
},

{
  "id": 57,
  "barcode": "Q10530",
  "title": {
    "ka": "გელიანი კალამი 0.5MM წვერით ლურჯი DELI STATIONARY",
    "en": "Gel Pen 0.5mm Tip Blue DELI",
    "ru": "Гелевая ручка 0.5мм Синяя DELI"
  },
  "price": 0.70,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami19.jpg"]
},

{
  "id": 58,
  "barcode": "S86",
  "title": {
    "ka": "გელიანი კალამი 0.5MM წვერით შავი DELI STATIONARY",
    "en": "Gel Pen 0.5mm Tip Black DELI",
    "ru": "Гелевая ручка 0.5мм Черная DELI"
  },
  "price": 10.00,
  "category": "writing",
  "subcategory": "pen",
  "inStock": true,
  "images": ["images/kalami20.jpg"]
},
{
    "id": 60,
    "barcode": "EU10420",
    "title": {
        "ka": "პერმანენტ მარკერი ორმხრივი წვერით DELI STATIONARY",
        "en": "Double-ended Permanent Marker DELI",
        "ru": "Двусторонний перманентный маркер DELI"
    },
    "price": 0.80,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri1.png"]
},

{
    "id": 61,
    "barcode": 'EU10430',
    "title": {
        "ka": "პერმანენტ მარკერი ორმხრივი წვერით DELI STATIONARY",
        "en": "Double-ended Permanent Marker DELI",
        "ru": "Двусторонний перманентный маркер DELI"
    },
    "price": 0.80,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri2.jpg"]
},

{
    "id": 63,
    "barcode": "U72-BK",
    "title": {
        "ka": "პერმანენტ მარკერი ორმხრივი წვერით DELI U72-BK",
        "en": "Double-ended Permanent Marker DELI U72-BK",
        "ru": "Двусторонний перманентный маркер DELI U72-BK"
    },
    "price": 1.00,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri3.jpg"]
},

{
    "id": 64,
    "barcode": "U72-BL",
    "title": {
        "ka": "პერმანენტ მარკერი ორმხრივი წვერით DELI U72-BL",
        "en": "Double-ended Permanent Marker DELI U72-BL",
        "ru": "Двусторонний перманентный маркер DELI U72-BL"
    },
    "price": 1.00,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri4.jpg"]
},

{
    "id": 65,
    "barcode": "U72-RD",
    "title": {
        "ka": "პერმანენტ მარკერი ორმხრივი წვერით DELI U72-RD",
        "en": "Double-ended Permanent Marker DELI U72-RD",
        "ru": "Двусторонний перманентный маркер DELI U72-RD"
    },
    "price": 1.00,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri5.jpg"]
},

{
    "id": 66,
    "barcode": "U216-BK",
    "title": {
        "ka": "პერმანენტ მარკერი DELI U216-BK",
        "en": "Permanent Marker DELI U216-BK",
        "ru": "Перманентный маркер DELI U216-BK"
    },
    "price": 0.50,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri6.jpg"]
},

{
    "id": 67,
    "barcode": "U366-OR",
    "title": {
        "ka": "ტექსტ მარკერი DELI U366-OR ORANGE",
        "en": "Highlighter DELI U366-OR Orange",
        "ru": "Текстовыделитель DELI U366-OR Оранжевый"
    },
    "price": 0.80,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri7.jpg"]
},

{
    "id": 68,
    "barcode": "U366-GN",
    "title": {
        "ka": "ტექსტ მარკერი DELI U366-GN GREEN",
        "en": "Highlighter DELI U366-GN Green",
        "ru": "Текстовыделитель DELI U366-GN Зеленый"
    },
    "price": 0.80,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri8.jpg"]
},

{
    "id": 69,
    "barcode": "EU356-OR",
    "title": {
        "ka": "ტექსტ მარკერი DELI EU356-OR ORANGE",
        "en": "Highlighter DELI EU356-OR Orange",
        "ru": "Текстовыделитель DELI EU356-OR Оранжевый"
    },
    "price": 0.90,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri9.jpg"]
},

{
    "id": 70,
    "barcode": "U35460",
    "title": {
        "ka": "ტექსტ მარკერი DELI U35460 ORANGE",
        "en": "Highlighter DELI U35460 Orange",
        "ru": "Текстовыделитель DELI U35460 Оранжевый"
    },
    "price": 0.90,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri10.jpg"]
},

{
    "id": 71,
    "title": {
        "ka": "დაფის მარკერი DELI STATIONARY ლურჯი",
        "en": "Whiteboard Marker DELI Blue",
        "ru": "Маркер для доски DELI Синий"
    },
    "price": 0.80,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri11.jpg"]
},

{
    "id": 72,
    "barcode": "U00630",
    "title": {
        "ka": "დაფის მარკერი DELI ლურჯი U00630",
        "en": "Whiteboard Marker DELI Blue U00630",
        "ru": "Маркер для доски DELI Синий U00630"
    },
    "price": 0.70,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri12.jpg"]
},

{
    "id": 73,
    "title": {
        "ka": "პერმანენტული მარკერი DELI STATIONARY ლურჯი",
        "en": "Permanent Marker DELI Blue",
        "ru": "Перманентный маркер DELI Синий"
    },
    "price": 0.60,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri13.jpg"]
},

{
    "id": 74,
    "barcode": "S621/P",
    "title": {
        "ka": "ტექსტ მარკერი DELI S621/P",
        "en": "Highlighter DELI S621/P",
        "ru": "Текстовыделитель DELI S621/P"
    },
    "price": 0.70,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri14.jpg"]
},

{
    "id": 75,
    "title": {
        "ka": "ტექსტმარკერის ნაკრები 4 ფერიანი DELI STATIONARY",
        "en": "Highlighter Set 4 Colors DELI",
        "ru": "Набор текстовыделителей 4 цвета DELI"
    },
    "price": 4.00,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri15.png"]
},

{
    "id": 76,
    "barcode": "U00640",
    "title": {
        "ka": "დაფის მარკერი წითელი U00640 DELI",
        "en": "Whiteboard Marker Red U00640 DELI",
        "ru": "Маркер для доски Красный U00640 DELI"
    },
    "price": 0.70,
    "category": "writing",
    "subcategory": "markers",
    "inStock": true,
    "images": ["images/markeri16.jpg"]
},
{
    'id': 77,
    'barcode': "6208",
    'title': {
        'ka': "სახაზავი დრეკადი 20სმ DELI STATIONARY",
        'en': "Flexible Ruler 20cm DELI",
        'ru': "Линейка гибкая 20см DELI"
    },
    'price': 1.30,
    'category': "stationery",
    'subcategory': "ruler",
    inStock: true,
    images: ["images/saxazavi1.jpg"]
},

{
    id: 78,
    barcode: "4601822000030",
    title: {
        ka: "ხის სახაზავი 20სმ Можга",
        en: "Wooden Ruler 20cm Mozhga",
        ru: "Линейка деревянная 20см Можга"
    },
    price: 0.50,
    category: "stationery",
    subcategory: "ruler",
    inStock: true,
    images: ["images/saxazavi2.jpg"]
},

{
    id: 79,
    barcode: "8464",
    title: {
        ka: "სახაზავი ლითონის 50სმ Deli Stationery",
        en: "Metal Ruler 50cm Deli",
        ru: "Линейка металлическая 50см Deli"
    },
    price: 5.50,
    category: "stationery",
    subcategory: "ruler",
    inStock: true,
    images: ["images/saxazavi3.jpg"]
},

{
    id: 80,
    'barcode': "H11",
    title: {
        ka: "სახაზავი 30სმ H11 DELI",
        en: "Ruler 30cm H11 DELI",
        ru: "Линейка 30см H11 DELI"
    },
    price: 0.80,
    category: "stationery",
    subcategory: "ruler",
    inStock: true,
    images: ["images/saxazavi4.jpg"]
},
{
    id: 81,
    barcode: "E9609",
    title: {
        ka: "სახაზავების ნაკრები Deli Stationery",
        en: "Ruler Set Deli",
        ru: "Набор линеек Deli"
    },
    price: 5.00,
    category: "stationery",
    subcategory: "ruler",
    inStock: true,
    images: ["images/saxazavi5.png"]
},

{
    id: 82,
    barcode: "E8462",
    title: {
        ka: "ლითონის სახაზავი 20სმ Deli Stationery",
        en: "Metal Ruler 20cm Deli",
        ru: "Линейка металлическая 20см Deli"
    },
    price: 2.00,
    category: "stationery",
    subcategory: "ruler",
    inStock: true,
    images: ["images/saxazavi6.jpg"]
},
{
    id: 83,
    barcode: "0629",
    title: {
        ka: "მექანიკური სათლელი Deli Stationery",
        en: "Mechanical Pencil Sharpener Deli",
        ru: "Механическая точилка Deli"
    },
    price: 11.20,
    category: "stationery",
    subcategory: "sharpener",
    inStock: true,
    images: ["images/satleli1.png"]
},

{
    id: 84,
    barcode: "90526",
    title: {
        ka: "სათლელი 0526 Deli Stationery",
        en: "Pencil Sharpener 0526 Deli",
        ru: "Точилка 0526 Deli"
    },
    price: 1.80,
    category: "stationery",
    subcategory: "sharpener",
    inStock: true,
    images: ["images/satleli2.png"]
},

{
    id: 85,
    barcode: "905789",
    title: {
        ka: "სათლელი Deli Stationery",
        en: "Pencil Sharpener Deli",
        ru: "Точилка Deli"
    },
    price: 0.80,
    category: "stationery",
    subcategory: "sharpener",
    inStock: true,
    images: ["images/satleli3.png", "images/satleli.png"]
},

{
    id: 86,
    barcode: "0594",
    title: {
        ka: "სათლელი 0594",
        en: "Pencil Sharpener 0594",
        ru: "Точилка 0594"
    },
    price: 0.60,
    category: "stationery",
    subcategory: "sharpener",
    inStock: true,
    images: ["images/satleli4.jpg"]
},

{
    id: 87,
    barcode: "39762",
    title: {
        ka: "სათლელი ლითონის ორმაგი Deli Stationery",
        en: "Double Metal Pencil Sharpener Deli",
        ru: "Двойная металлическая точилка Deli"
    },
    price: 0.80,
    category: "stationery",
    subcategory: "sharpener",
    inStock: true,
    images: ["images/satleli5.png"]
},

{
    id: 88,
    barcode: "71160",
    title: {
        ka: "სათლელი სამაგიდე 71160 DELI",
        en: "Desktop Pencil Sharpener 71160 DELI",
        ru: "Настольная точилка 71160 DELI"
    },
    price: 15.20,
    category: "stationery",
    subcategory: "sharpener",
    inStock: true,
    images: ["images/satleli6.jpg"]
},

{
    id: 90,
    title: {
        ka: "ფანქრის სათლელი XL-379",
        en: "Pencil Sharpener XL-379",
        ru: "Точилка для карандашей XL-379"
    },
    price: 0.90,
    category: "stationery",
    subcategory: "sharpener",
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
    category: "stationery",
    subcategory: "sharpener",
    inStock: true,
    images: ["images/satleli9.png"]
},

{
    id: 92,
    barcode: "H558",
    title: {
        ka: "სათლელი H558 DELI",
        en: "Pencil Sharpener H558 DELI",
        ru: "Точилка H558 DELI"
    },
    price: 1.70,
    category: "stationery",
    subcategory: "sharpener",
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
    category: "stationery",
    subcategory: "sharpener",
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
    category: "stationery",
    subcategory: "eraser",
    inStock: true,
    images: ["images/sashleli1.jpg"]
},
{
    id: 94,
    barcode: "H315",
    title: {
        ka: "საშლელი H315 DELI",
        en: "Eraser H315 DELI",
        ru: "Ластик H315 DELI"
    },
    price: 1.30,
    category: "stationery",
    subcategory: "eraser",
    inStock: true,
    images: ["images/sashleli1.jpg"]
},

{
    id: 95,
    barcode: "H316",
    title: {
        ka: "საშლელი H316 DELI",
        en: "Eraser H316 DELI",
        ru: "Ластик H316 DELI"
    },
    price: 0.50,
    category: "stationery",
    subcategory: "eraser",
    inStock: true,
    images: ["images/sashleli2.jpg"]
},

{
    id: 96,
    barcode: "71053",
    title: {
        ka: "საშლელი Deli Stationery",
        en: "Eraser Deli",
        ru: "Ластик Deli"
    },
    price: 0.70,
    category: "stationery",
    subcategory: "eraser",
    inStock: true,
    images: ["images/sashleli3.png"]
},

{
    id: 961,
    title: {
        ka: "საშლელი Deli Stationery",
        en: "Eraser Deli",
        ru: "Ластик Deli"
    },
    price: 0.65,
    category: "stationery",
    subcategory: "eraser",
    inStock: true,
    images: ["images/sashleli4.png"]
},

{
    id: 97,
    barcode: "H01720",
    title: {
        ka: "ფანქრის საშლელი Scribe Infinite Deli Stationery",
        en: "Pencil Eraser Scribe Infinite Deli",
        ru: "Ластик для карандашей Scribe Infinite Deli"
    },
    price: 0.70,
    category: "stationery",
    subcategory: "eraser",
    inStock: true,
    images: ["images/sashleli5.jpg"]
},
{
    id: 98,
    barcode: "8601",
    title: {
        ka: "ფარგალი 8601 DELI",
        en: "Compass 8601 DELI",
        ru: "Циркуль 8601 DELI"
    },
    price: 3.50,
    category: "stationery",
    subcategory: "ruler",
    inStock: true,
    images: ["images/fargali1.jpg"]
},

{
    id: 99,
    barcode: "E8605",
    title: {
        ka: "ფარგალი Deli Stationery",
        en: "Compass Deli",
        ru: "Циркуль Deli"
    },
    price: 13.00,
    category: "stationery",
    subcategory: "ruler",
    inStock: true,
    images: ["images/fargali2.jpeg"]
},

{
    id: 100,
    barcode: "8604",
    title: {
        ka: "ფარგალი Deli Stationery",
        en: "Compass Deli",
        ru: "Циркуль Deli"
    },
    price: 8.00,
    category: "stationery",
    subcategory: "ruler",
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
    category: "stationery",
    subcategory: "ruler",
    inStock: true,
    images: ["images/fargali4.png"]
},

{
    id: 102,
    barcode: "G20502",
    title: {
        ka: "ფარგალი G20502 DELI",
        en: "Compass G20502 DELI",
        ru: "Циркуль G20502 DELI"
    },
    price: 3.90,
    category: "stationery",
    subcategory: "ruler",
    inStock: true,
    images: ["images/fargali5.jpg"]
},
{
        id: 103,
        barcode:'6921734964915',
        title: {
            ka: "მექანიკური ფანქარი 0.7მმ წვერით Deli Stationery",
            en: "Mechanical Pencil 0.7mm Tip Deli",
            ru: "Механический карандаш 0.7мм Deli"
        },
        price: 3.00,
        category: "writing",
        subcategory: "pencil",
        inStock: true,
        images: ["images/fanqari10.jpg"]
    },
{
        id: 104,
        barcode:'E6490',
        title: {
            ka: "მექანიკური ფანქარი 0.5მმ წვერით Deli Stationery",
            en: "Mechanical Pencil 0.5mm Tip Deli",
            ru: "Механический карандаш 0.5мм Deli"
        },
        price: 3.00,
        category: "writing",
        subcategory: "pencil",
        inStock: true,
        images: ["images/fanqari11.jpg"]
    },
    {
    id: 105,
    barcode: "5725A",
    title: {
        ka: "დივაიდერი A4-12 pages E5725 DELI",
        en: "Divider A4-12 pages E5725 DELI",
        ru: "Разделитель А4-12 страниц E5725 DELI"
    },
    price: 2.50,
    category: "stationery",
    subcategory: "divider",
    inStock: true,
    images: ["images/divaideri1.png"]
},

{
    id: 106,
    barcode: "38157",
    title: {
        ka: "დივაიდერი A4-20 pages 38157 DELI",
        en: "Divider A4-20 pages 38157 DELI",
        ru: "Разделитель А4-20 страниц 38157 DELI"
    },
    price: 4.00,
    category: "stationery",
    subcategory: "divider",
    inStock: true,
    images: ["images/divaideri1.png"]
},

{
    id: 107,
    barcode: "E38158",
    title: {
        ka: "დივაიდერი პლასტიკური 1-31 ციფრი Deli",
        en: "Plastic Index Divider 1-31 Deli",
        ru: "Пластиковый разделитель 1-31 Deli"
    },
    price: 6.00,
    category: "stationery",
    subcategory: "divider",
    inStock: true,
    images: ["images/divaideri1.png"]
},

{
    id: 109,
    barcode: "5724A",
    title: {
        ka: "დივაიდერი A4-10 pages E5724 DELI",
        en: "Divider A4-10 pages E5724 DELI",
        ru: "Разделитель А4-10 страниц E5724 DELI"
    },
    price: 2.20,
    category: "stationery",
    subcategory: "divider",
    inStock: true,
    images: ["images/divaideri1.png"]
},

{
    id: 110,
    barcode: "KS-12A",
    title: {
        ka: "დივაიდერი KS-12A",
        en: "Divider KS-12A",
        ru: "Разделитель KS-12A"
    },
    price: 2.00,
    category: "stationery",
    subcategory: "divider",
    inStock: true,
    images: ["images/divaideri2.jpg"]
},
{
  id: 111,
  barcode: '3005-02/A3',
  title: {

    ka: "ასაკინძი ყდა A3 PC3005-02 (Beige C02) 100 (ფურც)",
    en: "Binding Cover A3 PC3005-02 (Beige C02) 100 sheets",
    ru: "Переплетная обложка А3 PC3005-02 (Beige C02) 100 листов"

  },
  price: 25.00,
  category: "paper",
  subcategory: "binding_cover",
  inStock: true,
  images: ["images/askyda1.jpg"]
},
{
  id: 112,
  barcode: '3005-14/A3',
  title: {

    ka: "ასაკინძი ყდა A3 შავი 100 ფურცელი",
    en: "Binding Cover A3 Black 100 sheets",
    ru: "Переплетная обложка А3 Черная 100 листов"

  },
  price: 28.00,
  category: "paper",
  subcategory: "binding_cover",
  inStock: true,
  images: ["images/askyda2.jpg"]
},
{
  id: 113,
  barcode:'3004/09',
  title: {

    ka: "ასაკინძი ყდა A4 (Saffron C09) 100 ფურცელი 230 გრამი",
    en: "Binding Cover A4 (Saffron C09) 100 sheets 230g",
    ru: "Переплетная обложка А4 (Saffron C09) 100 листов 230г"

  },
  price: 14.00,
  category: "paper",
  subcategory: "binding_cover",
  inStock: true,
  images: ["images/askyda3.jpg"]
},
{
  id: 114,
  barcode:'3004/06',
  title: {

    ka: "ასაკინძი ყდა A4 PC3004-06 (Grey C06) 100 ფურცელი 230 გრამი",
    en: "Binding Cover A4 PC3004-06 (Grey C06) 100 sheets 230g",
    ru: "Переплетная обложка А4 PC3004-06 (Grey C06) 100 листов 230г"

  },
  price: 14.00,
  category: "paper",
  subcategory: "binding_cover",
  inStock: true,
  images: ["images/askyda4.jpg"]
},
{
  id: 115,
  barcode: '3004/12',
  title: {

    ka: "ასაკინძი ყდა A4 PC3004-12 (Green C12) 100 ფურცელი",
    en: "Binding Cover A4 PC3004-12 (Green C12) 100 sheets",
    ru: "Переплетная обложка А4 PC3004-12 (Green C12) 100 листов"

  },
  price: 14.00,
  category: "paper",
  subcategory: "binding_cover",
  inStock: true,
  images: ["images/askyda5.jpg"]
},
{
  id: 116,
  barcode:'3004/08',
  title: {

    ka: "ასაკინძი ყდა A4 ოქროსფერი 100 ფურცელი 230 გრამი",
    en: "Binding Cover A4 Gold 100 sheets 230g",
    ru: "Переплетная обложка А4 Золотая 100 листов 230г"

  },
  price: 14.00,
  category: "paper",
  subcategory: "binding_cover",
  inStock: true,
  images: ["images/askyda6.jpg"]
},
{
  id: 117,
  barcode:'3004/13',
  title: {

    ka: "ასაკინძი ყდა A4 მუქი ლურჯი 100 ფურცელი 230 გრამი",
    en: "Binding Cover A4 Dark Blue 100 sheets 230g",
    ru: "Переплетная обложка А4 Темно-синяя 100 листов 230г"

  },
  price: 14.00,
  category: "paper",
  subcategory: "binding_cover",
  inStock: true,
  images: ["images/askyda7.jpg"]
},
{
  id: 118,
  barcode:'2004/685323',
  title: {

    ka: "ასაკინძი ყდა გამჭვირვალე A4 100 ფურცელი 150 მიკრონი",
    en: "Binding Cover Transparent A4 100 sheets 150 micron",
    ru: "Переплетная обложка прозрачная А4 100 листов 150 микрон"

  },
  price: 18.00,
  category: "paper",
  subcategory: "binding_cover",
  inStock: true,
  images: ["images/askyda8.jpg"]
},
{
  id: 120,
  barcode:'2003/180',
  title: {

    ka: "ასაკინძი ყდა გამჭვირვალე A3 100 ფურცელი 180 მიკრონი",
    en: "Binding Cover Transparent A3 100 sheets 180 micron",
    ru: "Переплетная обложка прозрачная А3 100 листов 180 микрон"

  },
  price: 40.00,
  category: "paper",
  subcategory: "binding_cover",
  inStock: true,
  images: ["images/askyda9.jpg"]
},
{
  id: 121,
  barcode:'2003/150',
  title: {

    ka: "ასაკინძი ყდა გამჭვირვალე A3 100 ფურცელი 150 მიკრონი",
    en: "Binding Cover Transparent A3 100 sheets 150 micron",
    ru: "Переплетная обложка прозрачная А3 100 листов 150 микрон"

  },
  price: 35.00,
  category: "paper",
  subcategory: "binding_cover",
  inStock: true,
  images: ["images/askyda9.jpg"]
},
{
  id: 122,
  barcode:'2004/180',
  title: {

    ka: "ასაკინძი ყდა გამჭვირვალე A4 100 ფურცელი 150 მიკრონი",
    en: "Binding Cover Transparent A4 100 sheets 150 micron",
    ru: "Переплетная обложка прозрачная А4 100 листов 150 микрон"

  },
  price: 20.00,
  category: "paper",
  subcategory: "binding_cover",
  inStock: true,
  images: ["images/askyda9.jpg"]
},
{
        id: 123,
        barcode:'05718//',
        title: {
            ka: "თერმოქაღალდი 0.57 - 18 მეტრი",
            en: "Thermal Paper Roll 0.57 - 18m",
            ru: "Термобумага 0.57 - 18 м"
        },
        price: 0.50,
        category: "paper",
        subcategory: "termo_paper",
        inStock: true,
        images: ["images/terqagaldi1.jpg"]
    },
{
        id: 124,
        barcode:'80300',
        title: {
            ka: "თერმოქაღალდი 55-80/25 - 300 მეტრი",
            en: "Thermal Paper Roll 55-80/25 - 300m",
            ru: "Термобумага 55-80/25 - 300 м"
        },
        price: 14.00,
        category: "paper",
        subcategory: "termo_paper",
        inStock: true,
        images: ["images/terqagaldi2.jpg"]
    },
{
        id: 125,
        barcode: '5830700',
        title: {
            ka: "სასწორის ეტიკეტი 58*30მმ",
            en: "Scale Label Sticker 58*30mm",
            ru: "Этикетка для весов 58*30мм"
        },
        price: 3.00,
        category: "paper",
        subcategory: "etiket",
        inStock: true,
        images: ["images/sasetiketi1.jpg"]
    },
{
        id: 126,
        barcode: '58405001',
        title: {
            ka: "სასწორის ეტიკეტი 58*40მმ",
            en: "Scale Label Sticker 58*40mm",
            ru: "Этикетка для весов 58*40мм"
        },
        price: 3.00,
        category: "paper",
        subcategory: "etiket",
        inStock: true,
        images: ["images/sasetiketi2.jpg"]
    },
{
    id: 127,
    barcode: "ა3 320/420",
    title: {
        ka: "კონვერტი A3 320*420 110გრ",
        en: "Envelope A3 320*420 110g",
        ru: "Конверт А3 320*420 110г"
    },
    price: 0.35,
    category: "paper",
    subcategory: "envelope",
    inStock: true,
    images: ["images/konverti.jpg"]
},

{
    id: 128,
    barcode: "ა3 330/450",
    title: {
        ka: "კონვერტი A3+ 330*450მმ 110გრ",
        en: "Envelope A3+ 330*450mm 110g",
        ru: "Конверт А3+ 330*450мм 110г"
    },
    price: 0.40,
    category: "paper",
    subcategory: "envelope",
    inStock: true,
    images: ["images/konverti2.jpg"]
},

{
    id: 129,
    barcode: "ა4240/320",
    title: {
        ka: "კონვერტი A4 240*320 110გრ",
        en: "Envelope A4 240*320 110g",
        ru: "Конверт А4 240*320 110г"
    },
    price: 0.25,
    category: "paper",
    subcategory: "envelope",
    inStock: true,
    images: ["images/konverti3.jpg"]
},

{
    id: 130,
    barcode: "ა5 160/230",
    title: {
        ka: "კონვერტი A5 160*230მმ 110გრ",
        en: "Envelope A5 160*230mm 110g",
        ru: "Конверт А5 160*230мм 110г"
    },
    price: 0.20,
    category: "paper",
    subcategory: "envelope",
    inStock: true,
    images: ["images/konverti4.jpg"]
},

{
    id: 131,
    barcode: "ა5+176*250",
    title: {
        ka: "კონვერტი A5+ 176*250 110გრ",
        en: "Envelope A5+ 176*250 110g",
        ru: "Конверт А5+ 176*250 110г"
    },
    price: 0.20,
    category: "paper",
    subcategory: "envelope",
    inStock: true,
    images: ["images/konverti5.png"]
},

{
    id: 132,
    barcode: "ა6 114/162",
    title: {
        ka: "კონვერტი A6 114*162მმ 110გრ",
        en: "Envelope A6 114*162mm 110g",
        ru: "Конверт А6 114*162мм 110г"
    },
    price: 0.10,
    category: "paper",
    subcategory: "envelope",
    inStock: true,
    images: ["images/konverti6.jpg"]
},

{
    id: 133,
    barcode: "ც6 114/162",
    title: {
        ka: "კონვერტი C6 114*162 110გრ",
        en: "Envelope C6 114*162 110g",
        ru: "Конверт C6 114*162 110г"
    },
    price: 0.10,
    category: "paper",
    subcategory: "envelope",
    inStock: true,
    images: ["images/konverti7.jpg"]
},

{
    id: 134,
    barcode: "105/240დიპ",
    title: {
        ka: "კონვერტი დიპლომატი ფანჯრით 105*240მმ 110გრ",
        en: "Envelope DL with Window 105*240mm 110g",
        ru: "Конверт DL с окном 105*240мм 110г"
    },
    price: 0.10,
    category: "paper",
    subcategory: "envelope",
    inStock: true,
    images: ["images/konverti8.jpg"]
},

{
    id: 136,
    barcode: "105/240",
    title: {
        ka: "კონვერტი დიპლომატი 105*240მმ 110გრ",
        en: "Envelope DL 105*240mm 110g",
        ru: "Конверт DL 105*240мм 110г"
    },
    price: 0.10,
    category: "paper",
    subcategory: "envelope",
    inStock: true,
    images: ["images/konverti8.jpg"]
},

{
    id: 137,
    barcode: "ბ110/220",
    title: {
        ka: "კონვერტი ბუკლეტი 110*220მმ 110გრ",
        en: "Envelope Booklet 110*220mm 110g",
        ru: "Конверт для буклетов 110*220мм 110г"
    },
    price: 0.10,
    category: "paper",
    subcategory: "envelope",
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
        category: "stationery",
        subcategory: "file_folder",
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
        category: "stationery",
        subcategory: "file_folder",
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
        category: "stationery",
        subcategory: "file_folder",
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
        category: "stationery",
        subcategory: "file_folder",
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
        category: "stationery",
        subcategory: "file_folder",
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
        category: "stationery",
        subcategory: "file_folder",
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
        category: "stationery",
        subcategory: "file_folder",
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
        category: "stationery",
        subcategory: "file_folder",
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
        category: "stationery",
        subcategory: "file_folder",
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
        category: "stationery",
        subcategory: "file_folder",
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
        category: "stationery",
        subcategory: "file_folder",
        inStock: true,
        images: ["images/faili1.jpg"]
    },
{
        id: 149,
        barcode: 'ა1/200/300',
        title: {
            ka: "აკვარელის ქაღალდი A1 (610X860მმ) 200გრ 300ფურცელი",
            en: "Watercolor Paper A1 (610X860mm) 200g 300 sheets",
            ru: "Акварельная бумага А1 (610х860мм) 200г 300 листов"
        },
        price: 380.00,
        category: "paper",
        subcategory: "watercolor",
        inStock: true,
        images: ["images/vatmani1.jpg"]
    },
{
        id: 150,
        barcode: 'C270-A3',
        title: {
            ka: "აკვარელის ქაღალდი 16ფურცელი A3 C270-A3 DELI",
            en: "Watercolor Paper Pad 16 sheets A3 C270-A3 DELI",
            ru: "Бумага для акварели 16 листов A3 C270-A3 DELI"
        },
        price: 15.00,
        category: "paper",
        subcategory: "watercolor",
        inStock: true,
        images: ["images/vatmani2.jpg"]
    },
{
        id: 151,
        barcode: 'ა3/300',
        title: {
            ka: "ვატმანი სახაზავი A3 300ფურცელი",
            en: "Drawing Paper A3 300 sheets",
            ru: "Ватман A3 300 листов"
        },
        price: 80.00,
        category: "paper",
        subcategory: "watercolor",
        inStock: true,
        images: ["images/vatmani3.jpg"]
    },
{
        id: 152,
        barcode: '808082',
        title: {
            ka: "ქაღალდი A1 ზომის (ვატმანი)",
            en: "Drawing Paper Sheet A1 (Whatman)",
            ru: "Бумага формата А1 (Ватман)"
        },
        price: 1.50,
        category: "paper",
        subcategory: "watercolor",
        inStock: true,
        images: ["images/vatmani4.jpg"]
    },
{
    id: 154,
    barcode: "586738",
    title: {
        ka: "მუყაოს სწრაფჩამკერი",
        en: "Cardboard Fastener Folder",
        ru: "Картонная папка-скоросшиватель"
    },
    price: 0.40,
    category: "stationery",
    subcategory: "binder_folder",
    inStock: true,
    images: ["images/chamkeri1.jpg"]
},

{
    id: 155,
    barcode: "320128",
    title: {
        ka: "სწრაფჩამკერი პლასტიკური 2058",
        en: "Plastic Fastener Folder 2058",
        ru: "Пластиковая папка-скоросшиватель 2058"
    },
    price: 0.40,
    category: "stationery",
    subcategory: "binder_folder",
    inStock: true,
    images: ["images/chamkeri2.jpg"]
},

{
    id: 156,
    barcode: "E39535",
    title: {
        ka: "სწრაფჩამკერი პლასტიკური Deli",
        en: "Plastic Fastener Folder Deli",
        ru: "Пластиковая папка-скоросшиватель Deli"
    },
    price: 0.70,
    category: "stationery",
    subcategory: "binder_folder",
    inStock: true,
    images: ["images/chamkeri3.jpg"]
},

{
    id: 157,
    barcode: 'EF320',
    title: {
        ka: "სწრაფჩამკერი პლასტიკური EF320 DELI",
        en: "Plastic Fastener Folder EF320 DELI",
        ru: "Пластиковая папка-скоросшиватель EF320 DELI"
    },
    price: 0.55,
    category: "stationery",
    subcategory: "binder_folder",
    inStock: true,
    images: ["images/chamkeri4.jpg"]
},
    {
    "id": 158,
    "barcode": "2000",
    "title": {
        "ka": "ლეიბლი A4 1*1 100ფურცელი (210x297) - 1 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*1 100 sheets (210x297) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*1 100 листов (210x297) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli1.jpg"]
},
{
    "id": 159,
    "barcode": "2001",
    "title": {
        "ka": "ლეიბლი A4 1*1 100ფურცელი (199.6x289.1) - 1 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*1 100 sheets (199.6x289.1) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*1 100 листов (199.6x289.1) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli2.jpg"]
},
{
    "id": 160,
    "barcode": "2612",
    "title": {
        "ka": "ლეიბლი A4 1*12 100ფურცელი (105x48) - 12 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*12 100 sheets (105x48) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*12 100 листов (105x48) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli3.jpg"]
},
{
    "id": 161,
    "barcode": "2010/10",
    "title": {
        "ka": "ლეიბლი A4 1*10 100ფურცელი (99.06x57) - 10 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*10 100 sheets (99.06x57) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*10 100 листов (99.06x57) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli4.jpg"]
},
{
    "id": 162,
    "barcode": "2115",
    "title": {
        "ka": "ლეიბლი A4 1*15 100ფურცელი (70x56) - 15 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*15 100 sheets (70x56) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*15 100 листов (70x56) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli5.jpg"]
},
{
    "id": 163,
    "barcode": "2512",
    "title": {
        "ka": "ლეიბლი A4 1*12 100ფურცელი (105 x 46) 2512",
        "en": "Self-Adhesive Labels A4 1*12 100 sheets (105x46) 2512",
        "ru": "Этикетки самоклеящиеся A4 1*12 100 листов (105x46) 2512"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli6.jpg"]
},
{
    "id": 164,
    "barcode": "2712",
    "title": {
        "ka": "ლეიბლი A4 1*14 100ფურცელი (105.1*42.69) - 14 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*14 100 sheets (105.1x42.69) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*14 100 листов (105.1x42.69) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli7.jpg"]
},
{
    "id": 165,
    "barcode": "TW2204",
    "title": {
        "ka": "ლეიბლი A4 1*4 100ფურცელი (105x148.5) 2204",
        "en": "Self-Adhesive Labels A4 1*4 100 sheets (105x148.5) 2204",
        "ru": "Этикетки самоклеящиеся A4 1*4 100 листов (105x148.5) 2204"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli8.jpg"]
},
{
    "id": 166,
    "barcode": "2016",
    "title": {
        "ka": "ლეიბლი A4 1*16 100ფურცელი (99.1x34) - 16 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*16 100 sheets (99.1x34) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*16 100 листов (99.1x34) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli9.jpg"]
},
{
    "id": 167,
    "barcode": "2060",
    "title": {
        "ka": "ლეიბლი A4 1*180 100ფურცელი (30x9) 180 ნაჭრიანი",
        "en": "Self-Adhesive Labels A4 1*180 100 sheets (30x9)",
        "ru": "Этикетки самоклеящиеся A4 1*180 100 листов (30x9)"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli10.jpg"]
},
{
    "id": 168,
    "barcode": "2024",
    "title": {
        "ka": "ლეიბლი A4 1*24 100ფურცელი (64x34) - 24 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*24 100 sheets (64x34) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*24 100 листов (64x34) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli11.jpg"]
},
{
    "id": 169,
    "barcode": "2102",
    "title": {
        "ka": "ლეიბლი A4 1*2 100ფურცელი (210x148.5) - 2 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*2 100 sheets (210x148.5) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*2 100 листов (210x148.5) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli12.jpg"]
},
{
    "id": 170,
    "barcode": "2002",
    "title": {
        "ka": "ლეიბლი A4 1*2 (199.6*143.5) 100ფურცელი - 2 ნაჭრიანი",
        "en": "Self-Adhesive Labels A4 1*2 100 sheets (199.6x143.5)",
        "ru": "Этикетки самоклеящиеся A4 1*2 100 листов (199.6x143.5)"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli13.jpg"]
},
{
    "id": 171,
    "barcode": "TW2105",
    "title": {
        "ka": "ლეიბლი A4 1*16 100ფურცელი (105x37.125) 2105",
        "en": "Self-Adhesive Labels A4 1*16 100 sheets (105x37.125) 2105",
        "ru": "Этикетки самоклеящиеся A4 1*16 100 листов (105x37.125) 2105"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli14.jpg"]
},
{
    "id": 172,
    "barcode": "2610/10",
    "title": {
        "ka": "ლეიბლი A4 1*10 100ფურცელი (105x57) 2610",
        "en": "Self-Adhesive Labels A4 1*10 100 sheets (105x57) 2610",
        "ru": "Этикетки самоклеящиеся A4 1*10 100 листов (105x57) 2610"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli15.jpg"]
},
{
    "id": 173,
    "barcode": "2564",
    "title": {
        "ka": "ლეიბლი A4 1*64 100ფურცელი (48.5*16.9) - 64 ნაჭრიანი",
        "en": "Self-Adhesive Labels A4 1*64 100 sheets (48.5x16.9)",
        "ru": "Этикетки самоклеящиеся A4 1*64 100 листов (48.5x16.9)"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli16.jpg"]
},
{
    "id": 174,
    "barcode": "2021",
    "title": {
        "ka": "ლეიბლი A4 1*21 100ფურცელი (63.5*38.1) 21 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*21 100 sheets (63.5x38.1) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*21 100 листов (63.5x38.1) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli17.jpg"]
},
{
    "id": 175,
    "barcode": "2004",
    "title": {
        "ka": "ლეიბლი A4 1*4 100ფურცელი (99.1*139) 4 ნაჭრიანი",
        "en": "Self-Adhesive Labels A4 1*4 100 sheets (99.1x139)",
        "ru": "Этикетки самоклеящиеся A4 1*4 100 листов (99.1x139)"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli18.jpg"]
},
{
    "id": 176,
    "barcode": "2065",
    "title": {
        "ka": "ლეიბლი A4 1*65 100ფურცელი (38.1x21.2) - 65 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*65 100 sheets (38.1x21.2) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*65 100 листов (38.1x21.2) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli19.jpg"]
},
{
    "id": 177,
    "barcode": "2008",
    "title": {
        "ka": "ლეიბლი A4 1*8 100ფურცელი (99.1x67.7) - 8 ნაჭრიანი",
        "en": "Self-Adhesive Labels A4 1*8 100 sheets (99.1x67.7)",
        "ru": "Этикетки самоклеящиеся A4 1*8 100 листов (99.1x67.7)"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli20.jpg"]
},
{
    "id": 178,
    "barcode": "2270",
    "title": {
        "ka": "ლეიბლი A4 1*70 100ფურცელი (40x20) - 70 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*70 100 sheets (40x20) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*70 100 листов (40x20) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli21.jpg"]
},
{
    "id": 179,
    "barcode": "2408",
    "title": {
        "ka": "ლეიბლი A4 1*8 100ფურცელი (105x72) - 8 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*8 100 sheets (105x72) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*8 100 листов (105x72) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli22.jpg"]
},
{
    "id": 180,
    "barcode": "2124/21",
    "title": {
        "ka": "ლეიბლი A4 1*21 100ფურცელი (70x42.43) 21 ნაჭრიანი",
        "en": "Self-Adhesive Labels A4 1*21 100 sheets (70x42.43)",
        "ru": "Этикетки самоклеящиеся A4 1*21 100 листов (70x42.43)"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli23.jpg"]
},
{
    "id": 181,
    "barcode": "2165",
    "title": {
        "ka": "ლეიბლი A4 1*65 100ფურცელი (38.1x21.2) - 65 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*65 100 sheets (38.1x21.2) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*65 100 листов (38.1x21.2) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli24.jpg"]
},
{
    "id": 182,
    "barcode": "2040",
    "title": {
        "ka": "ლეიბლი A4 1*40 100ფურცელი (52.5x29.7) - 40 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*40 100 sheets (52.5x29.7) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*40 100 листов (52.5x29.7) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli25.jpg"]
},
{
    "id": 183,
    "barcode": "TW2216",
    "title": {
        "ka": "ლეიბლი A4 1*16 100ფურცელი (105x35) 2216",
        "en": "Self-Adhesive Labels A4 1*16 100 sheets (105x35) 2216",
        "ru": "Этикетки самоклеящиеся A4 1*16 100 листов (105x35) 2216"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli26.jpg"]
},
{
    "id": 184,
    "barcode": "2404",
    "title": {
        "ka": "ლეიბლი A4 1*4 100ფურცელი (210x74.25) - 4 ნაჭრიანი",
        "en": "Self-Adhesive Labels A4 1*4 100 sheets (210x74.25)",
        "ru": "Этикетки самоклеящиеся A4 1*4 100 листов (210x74.25)"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli27.jpg"]
},
{
    "id": 185,
    "barcode": "TW2080",
    "title": {
        "ka": "ლეიბლი A4 1*80 100ფურცელი (26.2x29.7) 80 ნაჭრიანი",
        "en": "Self-Adhesive Labels A4 1*80 100 sheets (26.2x29.7)",
        "ru": "Этикетки самоклеящиеся A4 1*80 100 листов (26.2x29.7)"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli28.jpg"]
},
{
    "id": 186,
    "barcode": "2022",
    "title": {
        "ka": "ლეიბლი A4 1*22 100ფურცელი (50*22) - 22 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*22 100 sheets (50x22) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*22 100 листов (50x22) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli29.jpg"]
},
{
    "id": 187,
    "barcode": "2047",
    "title": {
        "ka": "ლეიბლი A4 1*6 100ფურცელი (210x47.81) - 6 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*6 100 sheets (210x47.81) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*6 100 листов (210x47.81) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli30.jpg"]
},
{
    "id": 188,
    "barcode": "2037/24",
    "title": {
        "ka": "ლეიბლი A4 1*24 100ფურცელი (70*37.125) 2037",
        "en": "Self-Adhesive Labels A4 1*24 100 sheets (70x37.125) 2037",
        "ru": "Этикетки самоклеящиеся A4 1*24 100 листов (70x37.125) 2037"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli31.jpg"]
},
{
    "id": 189,
    "barcode": "2172",
    "title": {
        "ka": "ლეიბლი A4 1*72 100ფურცელი (35x23) 72 ნაჭრიანი",
        "en": "Self-Adhesive Labels A4 1*72 100 sheets (35x23)",
        "ru": "Этикетки самоклеящиеся A4 1*72 100 листов (35x23)"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli271.jpg"]
},
{
    "id": 190,
    "barcode": "2229",
    "title": {
        "ka": "ლეიბლი A4 1*30 100ფურცელი (70X29.7) - 30 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*30 100 sheets (70x29.7) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*30 100 листов (70x29.7) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli33.jpg"]
},
{
    "id": 191,
    "barcode": "2006",
    "title": {
        "ka": "ლეიბლი A4 1*6 100ფურცელი (99.1x93.1) - 6 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*6 100 sheets (99.1x93.1) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*6 100 листов (99.1x93.1) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli34.jpg"]
},
{
    "id": 192,
    "barcode": "2036",
    "title": {
        "ka": "ლეიბლი A4 1*36 100ფურცელი (45*30) - 36 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*36 100 sheets (45x30) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*36 100 листов (45x30) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli35.jpg"]
},
{
    "id": 193,
    "barcode": "2044",
    "title": {
        "ka": "ლეიბლი A4 1*44 100ფურცელი (48.5x25.4) - 44 ნაჭრიანი",
        "en": "Self-Adhesive Labels A4 1*44 100 sheets (48.5x25.4)",
        "ru": "Этикетки самоклеящиеся A4 1*44 100 листов (48.5x25.4)"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli36.jpg"]
},
{
    "id": 194,
    "barcode": "2248",
    "title": {
        "ka": "ლეიბლი A4 1*48 100ფურცელი (52.5x23) - 48 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*48 100 sheets (52.5x23) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*48 100 листов (52.5x23) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli37.jpg"]
},
{
    "id": 195,
    "barcode": "2140",
    "title": {
        "ka": "ლეიბლი A4 40მმ წრე 100ფურცელი 2140",
        "en": "Self-Adhesive Labels A4 40mm Round 100 sheets 2140",
        "ru": "Этикетки самоклеящиеся A4 40мм Круг 100 листов 2140"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli38.jpg"]
},
{
    "id": 196,
    "barcode": "2433",
    "title": {
        "ka": "ლეიბლი A4 1*33 100ფურცელი (70x23) 33 ნაჭრიანი",
        "en": "Self-Adhesive Labels A4 1*33 100 sheets (70x23)",
        "ru": "Этикетки самоклеящиеся A4 1*33 100 листов (70x23)"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli39.jpg"]
},
{
    "id": 197,
    "barcode": "2033",
    "title": {
        "ka": "ლეიბლი A4 1*33 100ფურცელი (63.5x25.4) - 33 ნაჭრიანი Tanex",
        "en": "Self-Adhesive Labels A4 1*33 100 sheets (63.5x25.4) Tanex",
        "ru": "Этикетки самоклеящиеся A4 1*33 100 листов (63.5x25.4) Tanex"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli40.jpeg"]
},
{
    "id": 198,
    "barcode": "2095",
    "title": {
        "ka": "ლეიბლი A4 1*95 100ფურცელი (30x12) 2095",
        "en": "Self-Adhesive Labels A4 1*95 100 sheets (30x12) 2095",
        "ru": "Этикетки самоклеящиеся A4 1*95 100 листов (30x12) 2095"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli41.jpg"]
},
{
    "id": 199,
    "barcode": "2032",
    "title": {
        "ka": "ლეიბლი A4 1*32 100ფურცელი (52.5*35) 2032",
        "en": "Self-Adhesive Labels A4 1*32 100 sheets (52.5x35) 2032",
        "ru": "Этикетки самоклеящиеся A4 1*32 100 листов (52.5x35) 2032"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli42.jpg"]
},
{
    "id": 200,
    "barcode": "2118",
    "title": {
        "ka": "ლეიბლი A4 1*18 100ფურცელი (58.4x42.3) 2118",
        "en": "Self-Adhesive Labels A4 1*18 100 sheets (58.4x42.3) 2118",
        "ru": "Этикетки самоклеящиеся A4 1*18 100 листов (58.4x42.3) 2118"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli43.jpg"]
},
{
    "id": 201,
    "barcode": "2148",
    "title": {
        "ka": "ლეიბლი A4 40.6x25.4 მმ ოვალი 2148",
        "en": "Self-Adhesive Labels A4 40.6x25.4 mm Oval 2148",
        "ru": "Этикетки самоклеящиеся A4 40.6x25.4 мм Овал 2148"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli44.jpg"]
},
{
    "id": 202,
    "barcode": "2319",
    "title": {
        "ka": "ლეიბლი A4 1*90 100ფურცელი (33x19) 2319",
        "en": "Self-Adhesive Labels A4 1*90 100 sheets (33x19) 2319",
        "ru": "Этикетки самоклеящиеся A4 1*90 100 листов (33x19) 2319"
    },
    "price": 20.00,
    "category": "paper",
    "subcategory": "label",
    "inStock": true,
    "images": ["images/leibli45.jpg"]
},     
  {
    "id": 203,
    "barcode": "382528",
    "title": {
        "ka": "18 საგნიანი სამაგიდე ორგანიზატორი Deli",
        "en": "18-Piece Desk Organizer Deli",
        "ru": "Настольный органайзер 18 предметов Deli"
    },
    "price": 24.00,
    "category": "office",
    "subcategory": "organizer",
    "inStock": true,
    "images": ["images/organaizeri1.jpg"]
},

{
    "id": 204,
    "barcode": "382504",
    "title": {
        "ka": "15 საგნიანი სამაგიდე ორგანიზატორი Deli",
        "en": "15-Piece Desk Organizer Deli",
        "ru": "Настольный органайзер 15 предметов Deli"
    },
    "price": 18.00,
    "category": "office",
    "subcategory": "organizer",
    "inStock": true,
    "images": ["images/organaizeri2.png"]
},

{
    "id": 205,
    "barcode": "382511",
    "title": {
        "ka": "17 საგნიანი სამაგიდე ორგანიზატორი Deli",
        "en": "17-Piece Desk Organizer Deli",
        "ru": "Настольный органайзер 17 предметов Deli"
    },
    "price": 22.00,
    "category": "office",
    "subcategory": "organizer",
    "inStock": true,
    "images": ["images/organaizeri3.png"]
},

{
    "id": 207,
    "barcode": "Z00220",
    "title": {
        "ka": "სამაგიდე ორგანიზატორი Deli",
        "en": "Desk Organizer Deli",
        "ru": "Настольный органайзер Deli"
    },
    "price": 11.00,
    "category": "office",
    "subcategory": "organizer",
    "inStock": true,
    "images": ["images/organaizeri5.jpg"]
},

{
    "id": 208,
    "barcode": "903",
    "title": {
        "ka": "სამაგიდე ორგანიზატორი Deli",
        "en": "Desk Organizer Deli",
        "ru": "Настольный органайзер Deli"
    },
    "price": 8.50,
    "category": "office",
    "subcategory": "organizer",
    "inStock": true,
    "images": ["images/organaizeri6.jpg"]
},

{
    "id": 209,
    "barcode": "38254",
    "title": {
        "ka": "ორგანიზატორი სამაგიდე ნაკრები 16 საგნიანი 38254 DELI",
        "en": "Desk Organizer Set 16-Piece 38254 DELI",
        "ru": "Настольный набор-органайзер 16 предметов 38254 DELI"
    },
    "price": 20.00,
    "category": "office",
    "subcategory": "organizer",
    "inStock": true,
    "images": ["images/organaizeri7.png"]
},

{
    "id": 210,
    "barcode": "38253",
    "title": {
        "ka": "ორგანიზატორი სამაგიდე ნაკრები 12 საგნიანი 38253 DELI",
        "en": "Desk Organizer Set 12-Piece 38253 DELI",
        "ru": "Настольный набор-органайзер 12 предметов 38253 DELI"
    },
    "price": 14.00,
    "category": "office",
    "subcategory": "organizer",
    "inStock": true,
    "images": ["images/organaizeri8.png"]
},

{
    "id": 211,
    "barcode": "E9147",
    "title": {
        "ka": "სამაგიდე ორგანიზატორი 9147 DELI",
        "en": "Desk Organizer 9147 DELI",
        "ru": "Настольный органайзер 9147 DELI"
    },
    "price": 5.20,
    "category": "office",
    "subcategory": "organizer",
    "inStock": true,
    "images": ["images/organaizeri9.jpg"]
},

{
    "id": 212,
    "barcode": "Z25140",
    "title": {
        "ka": "სამაგიდე ორგანიზატორი Z25140 DELI",
        "en": "Desk Organizer Z25140 DELI",
        "ru": "Настольный органайзер Z25140 DELI"
    },
    "price": 10.50,
    "category": "office",
    "subcategory": "organizer",
    "inStock": true,
    "images": ["images/organaizeri10.jpg"]
},

{
    "id": 213,
    "barcode": "Z25150",
    "title": {
        "ka": "სამაგიდე ორგანიზატორი Z25150 DELI",
        "en": "Desk Organizer Z25150 DELI",
        "ru": "Настольный органайзер Z25150 DELI"
    },
    "price": 10.50,
    "category": "office",
    "subcategory": "organizer",
    "inStock": true,
    "images": ["images/organaizeri11.jpg"]
},

{
    "id": 214,
    "barcode": "Z25130",
    "title": {
        "ka": "სამაგიდე ორგანიზატორი Z25130 DELI",
        "en": "Desk Organizer Z25130 DELI",
        "ru": "Настольный органайзер Z25130 DELI"
    },
    "price": 10.50,
    "category": "office",
    "subcategory": "organizer",
    "inStock": true,
    "images": ["images/organaizeri12.jpg"]
},

{
    "id": 215,
    "barcode": "E9110",
    "title": {
        "ka": "ორგანიზატორი სამაგიდე 9110 DELI",
        "en": "Desk Organizer 9110 DELI",
        "ru": "Настольный органайзер 9110 DELI"
    },
    "price": 16.00,
    "category": "office",
    "subcategory": "organizer",
    "inStock": true,
    "images": ["images/organaizeri13.jpg"]
},
  {
  "id": 216,
  "barcode": "9109ლუ",
  "title": {
    "ka": "კალმების ჩასადები ჭიქა ბადე LY 9109",
    "en": "Mesh Metal Pen Cup Holder LY 9109",
    "ru": "Сетчатый стаканчик для ручек LY 9109"
  },
  "price": 1.5,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/kalchasadebi.jpg"]
},

{
  "id": 217,
  "barcode": "9175",
  "title": {
    "ka": "კალმის და ჩასანიშნის  ჩასადები ჭიქა ბადე Deli Stationery",
    "en": "metal pen and stationery holder, Deli Stationery",
    "ru": "металлическая подставка для ручек и канцелярских принадлежностей Deli Stationery"
  },
  "price": 8.00,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/kalchasadebi2.jpg"]
},

{
  "id": 218,
  "barcode": "9137",
  "title": {
    "ka": "კალმის პლასტიკური ჩასადები Deli Stationery",
    "en": "Plastic Pen Holder Deli Stationery",
    "ru": "Пластиковый держатель для ручек Deli Stationery"
  },
  "price": 7.00,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/kalchasadebi3.jpg"]
},

{
  "id": 219,
  "barcode": "NS950",
  "title": {
    "ka": "კალმის ჩასადები პლასტიკური 120*155*96mm NS950 ,DELI",
    "en": "Plastic Pen Holder 120×155×96mm NS950, DELI",
    "ru": "Пластиковый держатель для ручек 120×155×96 мм NS950, DELI"
  },
  "price": 9.80,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/kalchasadebi4.jpg"]
},

{
  "id": 220,
  "barcode": "8939",
  "title": {
    "ka": "კალმის ჩასადები პლასტიკური 120*91*205mm 8939 ,DELI",
    "en": "Plastic Pen Holder 120×91×205mm 8939, DELI",
    "ru": "Пластиковый держатель для ручек 120×91×205 мм 8939, DELI"
  },
  "price": 6.20,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/kalchasadebi5.jpg"]
},

{
  "id": 221,
  "barcode": "NS011",
  "title": {
    "ka": "კალმის ჩასადები პლასტიკური 84×84×86mm NS011 ,DELI",
    "en": "Plastic Pen Holder 84×84×86mm NS011, DELI",
    "ru": "Пластиковый держатель для ручек 84×84×86 мм NS011, DELI"
  },
  "price": 9.50,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/kalchasadebi6.jpg"]
},

{
  "id": 222,
  "barcode": "6921734991720",
  "title": {
    "ka": "ლითონის საკანცელარიო ჭიქა Deli Stationery",
    "en": "Metal Stationery Cup, Deli Stationery",
    "ru": "Металлический стакан для канцелярских принадлежностей, Deli Stationery"
  },
  "price": 3.00,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/kalchasadebi7.jpg"]
},

{
  "id": 223,
  "barcode": "E9174",
  "title": {
    "ka": "ლითონის საკანცელარიო ჭიქა Deli Stationery",
    "en": "Metal Stationery Cup, Deli Stationery",
    "ru": "Металлический стакан для канцелярских принадлежностей Deli Stationery"
  },
  "price": 3.00,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/kalchasadebi8.png"]
},

{
  "id": 229,
  "barcode": "2050ჯ",
  "title": {
    "ka": "საკანცელარიო ჯამი ვერტიკალური 2050",
    "en": "Vertical Stationery Organizer 2050",
    "ru": "Вертикальный канцелярский органайзер 2050"
  },
  "price": 5.00,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/taro6.jpg"]
},
{
  "id": 230,
  barcode:'9846',
  "title": {
    "ka": "საქაღალდე ვერტიკალური 4 განყოფილებიანი Deli Stationery",
    "en": "Vertical File Organizer with 4 Compartments, Deli Stationery",
    "ru": "Вертикальный органайзер для документов с 4 отделениями, Deli Stationery"
  },
  "price": 13.00,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/taro7.png"]
},
{
  "id": 231,
  barcode:'EB41102',
  "title": {
    "ka": "საქაღალდე ვერტიკალური EB41102 , DELI",
    "en": "Vertical File Organizer EB41102, DELI",
    "ru": "Вертикальный органайзер для документов EB41102, DELI"
  },
  "price": 12.00,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/taro8.jpg"]
},
{
  "id": 232,
  barcode:'9207ლუ',
  "title": {
    "ka": "ჯამი საკანცელარიო 2სართ. LY 9207",
    "en": "2-Tier Stationery Organizer LY 9207",
    "ru": "2-ярусный канцелярский органайзер LY 9207"
  },
  "price": 15.00,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/taro9.png"]
},
{
  "id": 233,
  barcode:'ჯამი',
  "title": {
    "ka": "ჯამი საკანცელარიო 370",
    "en": "Stationery Organizer 370",
    "ru": "Канцелярский органайзер 370"
  },
  "price": 5.00,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/taro10.jpg"]
},
{
  "id": 234,
  barcode:'9205ლუ',
  "title": {
    "ka": "ჯამი საკანცელარიო 3სართ.",
    "en": "3-Tier Stationery Organizer",
    "ru": "3-ярусный канцелярский органайзер"
  },
  "price": 18.00,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/taro11.jpg"]
},
{
  "id": 235,
  barcode:'9204ლუ',
  "title": {
    "ka": "ჯამი საკანცელარიო 4 სართ.",
    "en": "4-Tier Stationery Organizer",
    "ru": "4-Tier Stationery Organizer"
  },
  "price": 20.00,
  "category": "office",
  "subcategory": "organizer",
  "inStock": true,
  "images": ["images/taro12.png"]
},
  {
    "id": 236,
    "title": {
      "ka": "ფირნიში სამაგიდე 168*75*220mm TF301, DELI",
      "en": "Desktop Nameplate 168×75×220mm TF301, DELI",
      "ru": "Настольная табличка 168×75×220 мм TF301, DELI"
    },
    "price": 7.50,
    "category": "office",
    "subcategory": "signboard",
    "inStock": true,
    "images": ["images/firnish1.jpg"]
  },
  {
    "id": 237,
    "title": {
      "ka": "ფირნიში სამაგიდე 180*100mm TF108, DELI",
      "en": "Desktop Nameplate 180×100mm TF108, DELI",
      "ru": "Настольная табличка 180×100 мм TF108, DELI"
    },
    "price": 3.30,
    "category": "office",
    "subcategory": "signboard",
    "inStock": true,
    "images": ["images/firnishi2.jpg"]
  },
  {
    "id": 238,
    "title": {
      "ka": "ფირნიში სამაგიდე 209*72*105mm TF109, DELI",
      "en": "Desktop Nameplate 209×72×105mm TF109, DELI",
      "ru": "Настольная табличка 209×72×105 мм TF109, DELI"
    },
    "price": 3.30,
    "category": "office",
    "subcategory": "signboard",
    "inStock": true,
    "images": ["images/firnishi3.jpg"]
  },
  {
    "id": 239,
    "title": {
      "ka": "ფირნიში სამაგიდე 150*60mm Deli Stationery",
      "en": "Desktop Nameplate 150×60mm, Deli Stationery",
      "ru": "Настольная табличка 150×60 мм, Deli Stationery"
    },
    "price": 4.90,
    "category": "office",
    "subcategory": "signboard",
    "inStock": true,
    "images": ["images/firnishi4.jpg"]
  },
  {
    "id": 240,
    barcode:'9132ლუ',
    "title": {
      "ka": "სავიზიტე ბარათების ჩასადები (ბადე) LY 9132",
      "en": "Business Card Holder (Mesh) LY 9132",
      "ru": "Подставка для визитных карточек (сетка) LY 9132"
    },
    "price": 2.40,
    "category": "office",
    "subcategory": "business_card_holder",
    "inStock": true,
    "images": ["images/savizite1.png"]
  },
  {
    "id": 241,
    barcode:'7628',
    "title": {
      "ka": "სავიზიტე ბარათების ჩასადები Deli Stationery",
      "en": "Business Card Holder, Deli Stationery",
      "ru": "Подставка для визитных карточек, Deli Stationery"
    },
    "price": 7.80,
    "category": "office",
    "subcategory": "business_card_holder",
    "inStock": true,
    "images": ["images/savizite2.jpg"]
  },
  {
    "id": 242,
    barcode:'7623',
    "title": {
      "ka": "სავიზიტე ბარათების ჩასადები პლასტიკური Deli Stationery",
      "en": "Plastic Business Card Holder, Deli Stationery",
      "ru": "Пластиковая подставка для визитных карточек, Deli Stationery"
    },
    "price": 2.60,
    "category": "office",
    "subcategory": "business_card_holder",
    "inStock": true,
    "images": ["images/savizite4.jpg"]
  },
  {
    "id": 243,
    "barcode": "2045",
    "title": {
        "ka": "დანა 2045 , DELI",
        "en": "Utility Knife 2045, DELI",
        "ru": "Канцелярский нож 2045, DELI"
    },
    "price": 7.50,
    "category": "stationery",
    "subcategory": "utility_knife",
    "inStock": true,
    "images": ["images/dana1.jpg"]
},
{
    "id": 244,
    "barcode": "2053",
    "title": {
        "ka": "დანა 2053 ,DELI",
        "en": "Utility Knife 2053, DELI",
        "ru": "Канцелярский нож 2053, DELI"
    },
    "price": 1.30,
    "category": "stationery",
    "subcategory": "utility_knife",
    "inStock": true,
    "images": ["images/dana2.jpg"]
},
{
    "id": 245,
    "title": {
        "ka": "დანა Trapezoidal blade 3 blades SK5 DL006Z , DELI",
        "en": "Trapezoidal Blade Utility Knife, 3 SK5 Blades DL006Z, DELI",
        "ru": "Канцелярский нож с трапециевидным лезвием, 3 лезвия SK5 DL006Z, DELI"
    },
    "price": 14.00,
    "category": "stationery",
    "subcategory": "utility_knife",
    "inStock": true,
    "images": ["images/dana3.jpg"]
},
{
    "id": 246,
    "barcode": "E2040",
    "title": {
        "ka": "დანა საკანცელარიო 2040, DELI",
        "en": "Utility Knife 2040, DELI",
        "ru": "Канцелярский нож 2040, DELI"
    },
    "price": 3.60,
    "category": "stationery",
    "subcategory": "utility_knife",
    "inStock": true,
    "images": ["images/dana4.jpeg"]
},

{
    "id": 247,
    "barcode": "E2066",
    "title": {
        "ka": "დანა საკანცელარიო Deli Stationery",
        "en": "Utility Knife, Deli Stationery",
        "ru": "Канцелярский нож, Deli Stationery"
    },
    "price": 1.00,
    "category": "stationery",
    "subcategory": "utility_knife",
    "inStock": true,
    "images": ["images/dana5.jpg"]
},

{
    "id": 248,
    "barcode": "FX122",
    "title": {
        "ka": "დანა საკანცელარიო საშუალო FX-122/678279",
        "en": "Medium Utility Knife FX-122/678279",
        "ru": "Канцелярский нож средний FX-122/678279"
    },
    "price": 0.30,
    "category": "stationery",
    "subcategory": "utility_knife",
    "inStock": true,
    "images": ["images/dana6.jpg"]
},

{
    "id": 249,
    "title": {
        "ka": "დანა საკანცელარიო დიდი რეზინის სახელურით M580 DELI",
        "en": "Large Utility Knife with Rubber Handle M580, DELI",
        "ru": "Большой канцелярский нож с резиновой ручкой M580, DELI"
    },
    "price": 3.50,
    "category": "stationery",
    "subcategory": "utility_knife",
    "inStock": true,
    "images": ["images/dana7.jpg"]
},

{
    "id": 250,
    "barcode": "6921734920010",
    "title": {
        "ka": "დანა საკანცელარიო Deli Stationery",
        "en": "Utility Knife, Deli Stationery",
        "ru": "Канцелярский нож, Deli Stationery"
    },
    "price": 1.20,
    "category": "stationery",
    "subcategory": "utility_knife",
    "inStock": true,
    "images": ["images/dana8.png"]
},
  {
    id: 251,
    barcode: "4600",
    title: {
      ka: "ავეჯის სტეპლერი 53/8 Deli",
      en: "Furniture Stapler 53/8 Deli",
      ru: "Степлер мебельный 53/8 Deli"
    },
    price: 30.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri251.png"]
  },
  {
    id: 252,
    barcode: "T35011",
    title: {
      ka: "ავეჯის სტეპლერი 53/8 T35011 DELI",
      en: "Furniture Stapler 53/8 T35011 DELI",
      ru: "Степлер мебельный 53/8 T35011 DELI"
    },
    price: 25.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri252.jpg"]
  },
  {
    id: 253,
    barcode: "DL1313B",
    title: {
      ka: "სტეპლერი ავეჯის DL1313B DELI",
      en: "Furniture Stapler DL1313B DELI",
      ru: "Степлер мебельный DL1313B DELI"
    },
    price: 14.50,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri253.jpg"]
  },
  {
    id: 254,
    barcode: "902313",
    title: {
      ka: "სტეპლერის ტყვიის ამოსაღები Deli",
      en: "Staple Remover Deli",
      ru: "Антистеплер Deli"
    },
    price: 1.60,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri254.png"]
  },
  {
    id: 255,
    barcode: "903938",
    title: {
      ka: "სტეპლერი 23/25 210 ფურცელი Deli",
      en: "Stapler 23/25 210 Sheets Deli",
      ru: "Степлер 23/25 на 210 листов Deli"
    },
    price: 65.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri255.png"]
  },
  {
    id: 256,
    barcode: "903655",
    title: {
      ka: "სტეპლერი №10 Deli",
      en: "Stapler No.10 Deli",
      ru: "Степлер №10 Deli"
    },
    price: 6.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri256.jpg"]
  },
  {
    id: 257,
    barcode: "6921734904164",
    title: {
      ka: "სტეპლერი 0416 Deli",
      en: "Stapler 0416 Deli",
      ru: "Степлер 0416 Deli"
    },
    price: 13.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri257.jpg"]
  },
  {
    id: 258,
    barcode: "NS083F",
    title: {
      ka: "სტეპლერი 12 ფურცელი 24/6 & 26/6 NS083F DELI",
      en: "Stapler 12 Sheets 24/6 & 26/6 NS083F DELI",
      ru: "Степлер на 12 листов 24/6 & 26/6 NS083F DELI"
    },
    price: 4.90,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri258.jpg"]
  },
  {
    id: 259,
    barcode: "TA302",
    title: {
      ka: "სტეპლერი 12 ფურცელი 24/6 & 26/6 TA302 DELI",
      en: "Stapler 12 Sheets 24/6 & 26/6 TA302 DELI",
      ru: "Степлер на 12 листов 24/6 & 26/6 TA302 DELI"
    },
    price: 5.50,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri259.jpg"]
  },
  {
    id: 260,
    barcode: "EM212",
    title: {
      ka: "სტეპლერი 15 ფურცელი 24/6 & 26/6 EM212 Deli",
      en: "Stapler 15 Sheets 24/6 & 26/6 EM212 Deli",
      ru: "Степлер на 15 листов 24/6 & 26/6 EM212 Deli"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri260.jpg"]
  },
  {
    id: 261,
    barcode: "EM413",
    title: {
      ka: "სტეპლერი 15 ფურცელი 24/6 & 26/6 EM413 Deli",
      en: "Stapler 15 Sheets 24/6 & 26/6 EM413 Deli",
      ru: "Степлер на 15 листов 24/6 & 26/6 EM413 Deli"
    },
    price: 2.90,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri261.jpg"]
  },
  {
    id: 262,
    barcode: "NS084",
    title: {
      ka: "სტეპლერი 20 ფურცელი 24/6 & 26/6 NS084 DELI",
      en: "Stapler 20 Sheets 24/6 & 26/6 NS084 DELI",
      ru: "Степлер на 20 листов 24/6 & 26/6 NS084 DELI"
    },
    price: 7.50,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri262.jpg"]
  },
  {
    id: 263,
    barcode: "903945",
    title: {
      ka: "სტეპლერი 23/10 100 ფურცელი Deli",
      en: "Stapler 23/10 100 Sheets Deli",
      ru: "Степлер 23/10 на 100 листов Deli"
    },
    price: 35.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri263.png"]
  },
  {
    id: 264,
    barcode: "E0392",
    title: {
      ka: "სტეპლერი 23/10 50 ფურცელი 0392 DELI",
      en: "Stapler 23/10 50 Sheets 0392 DELI",
      ru: "Степлер 23/10 на 50 листов 0392 DELI"
    },
    price: 25.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri264.png"]
  },
  {
    id: 265,
    barcode: "6921734904652",
    title: {
      ka: "სტეპლერი 23/10 60 ფურცელი Deli",
      en: "Stapler 23/10 60 Sheets Deli",
      ru: "Степлер 23/10 на 60 листов Deli"
    },
    price: 33.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri265.png"]
  },
  {
    id: 266,
    barcode: "903914",
    title: {
      ka: "სტეპლერი 23/10 60 ფურცელი Deli",
      en: "Stapler 23/10 60 Sheets Deli",
      ru: "Степлер 23/10 на 60 листов Deli"
    },
    price: 22.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri266.png"]
  },
  {
    id: 267,
    barcode: "903877",
    title: {
      ka: "სტეპლერი 23/13 80 ფურცელი Deli",
      en: "Stapler 23/13 80 Sheets Deli",
      ru: "Степлер 23/13 на 80 листов Deli"
    },
    price: 50.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri267.png"]
  },
  {
    id: 268,
    barcode: "903860",
    title: {
      ka: "სტეპლერი 23/17 120 ფურცელი Deli",
      en: "Stapler 23/17 120 Sheets Deli",
      ru: "Степлер 23/17 на 120 листов Deli"
    },
    price: 65.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri268.jpg"]
  },
  {
    id: 269,
    barcode: "903952",
    title: {
      ka: "სტეპლერი 23/25 210 ფურცელი Deli",
      en: "Stapler 23/25 210 Sheets Deli",
      ru: "Степлер 23/25 на 210 листов Deli"
    },
    price: 60.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri269.png"]
  },
  {
    id: 270,
    barcode: "903464",
    title: {
      ka: "სტეპლერი 24/6 0346 Deli",
      en: "Stapler 24/6 0346 Deli",
      ru: "Степлер 24/6 0346 Deli"
    },
    price: 10.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri270.jpg"]
  },
  {
    id: 271,
    barcode: "903297",
    title: {
      ka: "სტეპლერი 24/6 Deli",
      en: "Stapler 24/6 Deli",
      ru: "Степлер 24/6 Deli"
    },
    price: 12.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri271.jpg"]
  },
  {
    id: 272,
    barcode: "903341",
    title: {
      ka: "გრძელი სტეპლერი 24/6 Deli",
      en: "Long Arm Stapler 24/6 Deli",
      ru: "Длинный степлер 24/6 Deli"
    },
    price: 15.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri272.png"]
  },
  {
    id: 273,
    barcode: "904270",
    title: {
      ka: "ფერადი სტეპლერი 24/6 Deli",
      en: "Colored Stapler 24/6 Deli",
      ru: "Цветной степлер 24/6 Deli"
    },
    price: 6.30,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri273.jpg"]
  },
  {
    id: 274,
    barcode: "903198",
    title: {
      ka: "სტეპლერი 24/6 0319 DELI",
      en: "Stapler 24/6 0319 DELI",
      ru: "Степлер 24/6 0319 DELI"
    },
    price: 5.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri274.png"]
  },
  {
    id: 275,
    barcode: "903259",
    title: {
      ka: "მინი სტეპლერი 24/6 Deli",
      en: "Mini Stapler 24/6 Deli",
      ru: "Мини-степлер 24/6 Deli"
    },
    price: 4.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri275.jpg"]
  },
  {
    id: 276,
    barcode: "903273",
    title: {
      ka: "ერგონომიული სტეპლერი 24/6 Deli",
      en: "Ergonomic Stapler 24/6 Deli",
      ru: "Эргономичный степлер 24/6 Deli"
    },
    price: 5.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri276.png"]
  },
  {
    id: 277,
    barcode: "903686",
    title: {
      ka: "შავი სტეპლერი 24/6 Deli",
      en: "Black Stapler 24/6 Deli",
      ru: "Черный степлер 24/6 Deli"
    },
    price: 9.60,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri277.png"]
  },
  {
    id: 278,
    barcode: "903129",
    title: {
      ka: "სტეპლერის ნაკრები 24/6 Deli",
      en: "Stapler Set 24/6 Deli",
      ru: "Набор степлера 24/6 Deli"
    },
    price: 5.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri278.jpg"]
  },
  {
    id: 279,
    barcode: "0306",
    title: {
      ka: "კლასიკური სტეპლერი 24/6 Deli",
      en: "Classic Stapler 24/6 Deli",
      ru: "Классический степлер 24/6 Deli"
    },
    price: 5.50,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri279.png"]
  },
  {
    id: 280,
    barcode: "E0367",
    title: {
      ka: "თეთრი/ნაცრისფერი სტეპლერი 24/6 Deli",
      en: "White/Grey Stapler 24/6 Deli",
      ru: "Белый/серый степлер 24/6 Deli"
    },
    price: 12.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri280.png"]
  },
  {
    id: 281,
    barcode: "E0335",
    title: {
      ka: "სტეპლერი 24/6 Deli",
      en: "Stapler 24/6 Deli",
      ru: "Степлер 24/6 Deli"
    },
    price: 5.50,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri281.jpg"]
  },
  {
    id: 282,
    barcode: "E0402F",
    title: {
      ka: "სტეპლერი 24/6 E0402F DELI",
      en: "Stapler 24/6 E0402F DELI",
      ru: "Степлер 24/6 E0402F DELI"
    },
    price: 5.70,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri282.jpg"]
  },
  {
    id: 283,
    barcode: "E0425",
    title: {
      ka: "სტეპლერი 24/6 E0425 Deli",
      en: "Stapler 24/6 E0425 Deli",
      ru: "Степлер 24/6 E0425 Deli"
    },
    price: 3.90,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri283.png"]
  },
  {
    id: 284,
    barcode: "E0426",
    title: {
      ka: "სტეპლერი 24/6 E0426 Deli",
      en: "Stapler 24/6 E0426 Deli",
      ru: "Степлер 24/6 E0426 Deli"
    },
    price: 6.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri284.jpg"]
  },
  {
    id: 285,
    barcode: "E0464",
    title: {
      ka: "სტეპლერი 24/6 E0464 DELI",
      en: "Stapler 24/6 E0464 DELI",
      ru: "Степлер 24/6 E0464 DELI"
    },
    price: 8.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri285.jpg"]
  },
  {
    id: 286,
    barcode: "E0350",
    title: {
      ka: "სტეპლერი 24/6&26/6 25 ფურცელი E0350",
      en: "Stapler 24/6&26/6 25 Sheets E0350",
      ru: "Степлер 24/6&26/6 на 25 листов E0350"
    },
    price: 5.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri286.jpg"]
  },
  {
    id: 287,
    barcode: "E0300",
    title: {
      ka: "სტეპლერი 24/6,26/6 25 ფურცელი E0300 DELI",
      en: "Stapler 24/6,26/6 25 Sheets E0300 DELI",
      ru: "Степлер 24/6,26/6 на 25 листов E0300 DELI"
    },
    price: 5.50,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri287.jpg"]
  },
  {
    id: 288,
    barcode: "E0463",
    title: {
      ka: "სტეპლერი 24/6,26/6 25 ფურცელი E0463 DELI",
      en: "Stapler 24/6,26/6 25 Sheets E0463 DELI",
      ru: "Степлер 24/6,26/6 на 25 листов E0463 DELI"
    },
    price: 11.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri288.png"]
  },
  {
    id: 289,
    barcode: "EM390",
    title: {
      ka: "სტეპლერი 25 ფურცელი 24/6 & 26/6 EM390 DELI",
      en: "Stapler 25 Sheets 24/6 & 26/6 EM390 DELI",
      ru: "Степлер на 25 листов 24/6 & 26/6 EM390 DELI"
    },
    price: 8.40,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri289.jpg"]
  },
  {
    id: 290,
    barcode: "E0477",
    title: {
      ka: "სტეპლერი 25 ფურცელი Deli",
      en: "Stapler 25 Sheets Deli",
      ru: "Степлер на 25 листов Deli"
    },
    price: 18.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri290.png"]
  },
  {
    id: 291,
    barcode: "E0434",
    title: {
      ka: "სტეპლერი 25 ფურცელი 24/6 & 26/6 E0434 DELI",
      en: "Stapler 25 Sheets 24/6 & 26/6 E0434 DELI",
      ru: "Степлер на 25 листов 24/6 & 26/6 E0434 DELI"
    },
    price: 7.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri291.png"]
  },
  {
    id: 292,
    barcode: "K203",
    title: {
      ka: "მინი სტეპლერი 24/6 K203 DELI",
      en: "Mini Stapler 24/6 K203 DELI",
      ru: "Мини-степлер 24/6 K203 DELI"
    },
    price: 3.50,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri292.jpg"]
  },
  {
    id: 293,
    barcode: "E0281",
    title: {
      ka: "სტეპლერი №10 0281 DELI",
      en: "Stapler No.10 0281 DELI",
      ru: "Степлер №10 0281 DELI"
    },
    price: 3.10,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri293.jpg"]
  },
  {
    id: 294,
    barcode: "E0282",
    title: {
      ka: "სტეპლერი №10 ტყვიებით 0282 DELI",
      en: "Stapler No.10 with Staples 0282 DELI",
      ru: "Степлер №10 со скобами 0282 DELI"
    },
    price: 3.10,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri294.jpg"]
  },
  {
    id: 295,
    barcode: "904539",
    title: {
      ka: "სტეპლერი №10 ტყვიებით ნაკრები Deli",
      en: "Stapler No.10 with Staples Set Deli",
      ru: "Набор степлера №10 со скобами Deli"
    },
    price: 3.60,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri295.png"]
  },
  {
    id: 296,
    barcode: "903495",
    title: {
      ka: "სტეპლერი №12 Deli",
      en: "Stapler No.12 Deli",
      ru: "Степлер №12 Deli"
    },
    price: 13.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri296.png"]
  },
  {
    id: 297,
    barcode: "M331",
    title: {
      ka: "სტეპლერი 24/6 M331 DELI",
      en: "Stapler 24/6 M331 DELI",
      ru: "Степлер 24/6 M331 DELI"
    },
    price: 4.20,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri297.jpg"]
  },
  {
    id: 298,
    barcode: "902245",
    title: {
      ka: "სტეპლერი №10 0224",
      en: "Stapler No.10 0224",
      ru: "Степлер №10 0224"
    },
    price: 2.50,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri298.png"]
  },
  {
    id: 299,
    barcode: "902382",
    title: {
      ka: "სტეპლერი №10 0238 deli",
      en: "Stapler No.10 0238 Deli",
      ru: "Степлер №10 0238 Deli"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri299.jpg"]
  },
  {
    id: 300,
    barcode: "0260",
    title: {
      ka: "სტეპლერი №10 0260",
      en: "Stapler No.10 0260",
      ru: "Степлер №10 0260"
    },
    price: 2.70,
    inStock: true,
    category: "stationery",
    subcategory: "stapler",
    images: ["images/stepleri300.png"]
  },
    {
    "id": 301,
    "barcode": "E5743",
    "title": {
        "ka": "ბეიჯი ვერტიკალური, დამჭერით 5743 ,DELI",
        "en": "Vertical Badge Holder with Clip 5743, DELI",
        "ru": "Vertical Badge Holder with Clip 5743, DELI"
    },
    "price": 0.45,
    "category": "office",
    "subcategory": "badge",
    "inStock": true,
    "images": ["images/beiji1.jpg"]
},

{
    "id": 302,
    "barcode": "957573",
    "title": {
        "ka": "ბეიჯი ვერტიკალური, თასმით Deli Stationery",
        "en": "Vertical Badge Holder with Lanyard, Deli Stationery",
        "ru": "Вертикальный держатель для бейджа с лентой, Deli Stationery"
    },
    "price": 1.00,
    "category": "office",
    "subcategory": "badge",
    "inStock": true,
    "images": ["images/beiji2.png"]
},

{
    "id": 303,
    "barcode": "5756",
    "title": {
        "ka": "ბეიჯი ვერტიკალური, თასმით Deli Stationery",
        "en": "Horizontal Badge Holder with Lanyard, Deli Stationery",
        "ru": "Горизонтальный держатель для бейджа с лентой, Deli Stationery"
    },
    "price": 1.10,
    "category": "office",
    "subcategory": "badge",
    "inStock": true,
    "images": ["images/beiji3.png"]
},

{
    "id": 304,
    "barcode": "957429",
    "title": {
        "ka": "ბეიჯი ვერტიკალური, თასმით Deli Stationery",
        "en": "Horizontal Badge Holder with Clip, Deli Stationery",
        "ru": "Горизонтальный держатель для бейджа с клипсой, Deli Stationery"
    },
    "price": 0.50,
    "category": "office",
    "subcategory": "badge",
    "inStock": true,
    "images": ["images/beiji4.png"]
},

{
    "id": 305,
    "barcode": "6921734957641",
    "title": {
        "ka": "ბეიჯის ზონარი Deli Stationery",
        "en": "Badge Lanyard, Deli Stationery",
        "ru": "Шнурок для бейджа, Deli Stationery"
    },
    "price": 0.70,
    "category": "office",
    "subcategory": "badge",
    "inStock": true,
    "images": ["images/beiji5.png"]
},

{
    "id": 306,
    "barcode": "5744",
    "title": {
        "ka": "ბეიჯის გაჭიმვადი ზონარი 8309 , DELI",
        "en": "Metal Paper Clip 76mm, Deli Stationery",
        "ru": "Металлический зажим для бумаг 76 мм, Deli Stationery"
    },
    "price": 2.00,
    "category": "office",
    "subcategory": "badge",
    "inStock": true,
    "images": ["images/beiji6.jpg"]
},
    {
    "id": 308,
    "barcode": "8556",
    "title": {
        "ka": "კლიპსი მეტალის ფერადი 15მმ (შეკვრაში 60ცალი) Deli Stationery",
        "en": "Colored Metal Paper Clips 15mm (Pack of 60), Deli Stationery",
        "ru": "Цветные металлические зажимы для бумаг 15 мм (60 шт. в упаковке), Deli Stationery"
    },
    "price": 5.00,
    "category": "stationery",
    "subcategory": "clips",
    "inStock": true,
    "images": ["images/klipsi2.jpg"]
},

{
    "id": 309,
    "barcode": "8555",
    "title": {
        "ka": "კლიპსი მეტალის ფერადი 19მმ (შეკვრაში 40ცალი) Deli Stationery",
        "en": "Colored Metal Paper Clips 19mm (Pack of 40), Deli Stationery",
        "ru": "Цветные металлические зажимы для бумаг 19 мм (40 шт. в упаковке), Deli Stationery"
    },
    "price": 4.00,
    "category": "stationery",
    "subcategory": "clips",
    "inStock": true,
    "images": ["images/klipsi3.jpeg"]
},

{
    "id": 310,
    "barcode": "8554",
    "title": {
        "ka": "კლიპსი მეტალის ფერადი 25მმ (შეკვრაში 48ცალი) Deli Stationery",
        "en": "Colored Metal Paper Clips 25mm (Pack of 48), Deli Stationery",
        "ru": "Цветные металлические зажимы для бумаг 25 мм (48 шт. в упаковке), Deli Stationery"
    },
    "price": 7.00,
    "category": "stationery",
    "subcategory": "clips",
    "inStock": true,
    "images": ["images/klipsi4.jpg"]
},

{
    "id": 311,
    "barcode": "78552",
    "title": {
        "ka": "ნაკრები:საკანცელარიო კლიფსი(ლითონის),სკრეპი, 78552 , DELI",
        "en": "Set: Metal Paper Clips and Staples 78552, DELI",
        "ru": "Набор: металлические скрепки и канцелярские скобы 78552, DELI"
    },
    "price": 10.00,
    "category": "stationery",
    "subcategory": "clips",
    "inStock": true,
    "images": ["images/skrepi1.jpg"]
},

{
    "id": 312,
    "barcode": "Z20703",
    "title": {
        "ka": "ნაკრები: კლიპსი(ლითონის), სკრეპი, ჭიკარტი Deli Stationery",
        "en": "Set: Metal Paper Clips, Staples and Push Pins, Deli Stationery",
        "ru": "Набор: металлические скрепки, канцелярские скобы и кнопки, Deli Stationery"
    },
    "price": 7.50,
    "category": "stationery",
    "subcategory": "clips",
    "inStock": true,
    "images": ["images/skrepi2.jpg"]
},

{
    "id": 313,
    "barcode": "6935205397133",
    "title": {
        "ka": "სკრეპი 50მმ 100 ცალი Deli Stationery",
        "en": "Paper Clips 50mm, 100 pcs, Deli Stationery",
        "ru": "Скрепки 50 мм, 100 шт., Deli Stationery"
    },
    "price": 2.00,
    "category": "stationery",
    "subcategory": "clips",
    "inStock": true,
    "images": ["images/skrepi3.png"]
},

{
    "id": 314,
    "barcode": "E0052",
    "title": {
        "ka": "სკრეპი N3 200 ცალი Deli Stationery",
        "en": "Paper Clips No. 3, 200 pcs, Deli Stationery",
        "ru": "Скрепки №3, 200 шт., Deli Stationery"
    },
    "price": 2.80,
    "category": "stationery",
    "subcategory": "clips",
    "inStock": true,
    "images": ["images/skrepi4.jpg"]
},

{
    "id": 315,
    "barcode": "E0053",
    "title": {
        "ka": "სკრეპი ფერადი N3 200 ცალი Deli Stationery",
        "en": "Colored Paper Clips No. 3, 200 pcs, Deli Stationery",
        "ru": "Цветные скрепки №3, 200 шт., Deli Stationery"
    },
    "price": 3.00,
    "category": "stationery",
    "subcategory": "clips",
    "inStock": true,
    "images": ["images/skrepi5.jpg"]
},

{
    "id": 316,
    "barcode": "0024",
    "title": {
        "ka": "სკრეპი ფერადი N3 ფერადი Deli Stationery",
        "en": "Colored Paper Clips No. 3, Deli Stationery",
        "ru": "Цветные скрепки №3, Deli Stationery"
    },
    "price": 1.50,
    "category": "stationery",
    "subcategory": "clips",
    "inStock": true,
    "images": ["images/skrepi6.png"]
},
    {
        "id": 317,
        barcode:'9109',
        "title": {
            "ka": "თითის დასასველებელი Deli Stationery",
            "en": "Finger Moistener, Deli Stationery",
            "ru": "Увлажнитель для пальцев, Deli Stationery"
        },
        "price": 3.00,
        "category": "office",
        "subcategory": "finger",
        "inStock": true,
        "images": ["images/titi1.png"]
    },
    {
    "id": 318,
    "barcode": "50803",
    "title": {
        "ka": "გასაღებების ყუთი 120 გასაღებისათვის 50803 , 398*63*782mm DELI",
        "en": "Key Cabinet for 120 Keys 50803, 398×63×782mm, DELI",
        "ru": "Ключница на 120 ключей 50803, 398×63×782 мм, DELI"
    },
    "price": 170.00,
    "category": "office",
    "subcategory": "key_box",
    "inStock": true,
    "images": ["images/gagsagebi1.jpg"]
},
{
    "id": 319,
    barcode:'999326',
    "title": {
        "ka": "გასაღებების ყუთი 120 გასაღებისათვის Deli Stationery",
        "en": " Key Cabinet for 120 Keys, Deli Stationery",
        "ru": "Ключница на 120 ключей, Deli Stationery"
    },
    "price": 220.00,
    "category": "office",
    "subcategory": "key_box",
    "inStock": true,
    "images": ["images/gasagebi2.jpg"]
},
{
    "id": 320,
    "barcode": "50800",
    "title": {
        "ka": "გასაღებების ყუთი 24 გასაღებისათვის 50800 , DELI",
        "en": "Key Cabinet for 24 Keys 50800, DELI",
        "ru": "Ключница на 24 ключа 50800, DELI"
    },
    "price": 65.00,
    "category": "office",
    "subcategory": "key_box",
    "inStock": true,
    "images": ["images/gasagebi3.jpg"]
},
{
    "id": 321,
    "barcode": "E9324",
    "title": {
        "ka": "გასაღებების ყუთი 72 გასაღებისათვის Deli Stationery",
        "en": "Key Cabinet for 72 Keys, Deli Stationery",
        "ru": "Ключница на 72 ключа, Deli Stationery"
    },
    "price": 200.00,
    "category": "office",
    "subcategory": "key_box",
    "inStock": true,
    "images": ["images/gasagebi4.jpg"]
},
{
    "id": 322,
    "barcode": "50802",
    "title": {
        "ka": "გასაღებების ყუთი 96 გასაღებისათვის Deli Stationery",
        "en": "Key Cabinet for 96 Keys, Deli Stationery",
        "ru": "Ключница на 96 ключей, Deli Stationery"
    },
    "price": 200.00,
    "inStock": true,
    "category": "office",
    "subcategory": "key_box",
    "images": ["images/gasagebi6.jpg"]
},
{
    "id": 323,
    barcode:'999330/1',
    "title": {
        "ka": "გასაღების ბრელოკი 40×28სმ Deli Stationery",
        "en": "Key Tag 40×28cm, Deli Stationery",
        "ru": "Брелок для ключей 40×28 см, Deli Stationery"
    },
    "price": 0.50,
    "inStock": true,
    "category": "office",
    "subcategory": "key_box",
    "images": ["images/gasagebi7.jpg"]
},
{
    "id": 324,
    "barcode": "9330",
    "title": {
        "ka": "გასაღების ბრელოკი პლასტმასის (24ც) 40×28სმ Deli Stationery",
        "en": "Plastic Key Tags (24 pcs) 40×28cm, Deli Stationery",
        "ru": "Пластиковые брелоки для ключей (24 шт.) 40×28 см, Deli Stationery"
    },
    "price": 11.00,
    "inStock": true,
    "category": "office",
    "subcategory": "key_box",
    "images": ["images/gasagebi3.jpg"]
},
  {
    "id": 325,
    barcode:'9102ლუ',
    "title": {
      "ka": "ურნა მეტალის ბადე LY9102",
      "en": "Metal Mesh Wastebasket LY9102",
      "ru": "Металлическая сетчатая корзина для мусора LY9102"
    },
    "price": 7.00,
    "inStock": true,
    "category": "office",
    "subcategory": "cleaning_set",
    "images": ["images/urna1.jpg"]
  },
  {
    "id": 326,
    barcode:'9103უ',
    "title": {
      "ka": "ურნა მეტალის ბადე LY9103",
      "en": "Metal Mesh Wastebasket LY9103",
      "ru": "Металлическая сетчатая корзина для мусора LY9103"
    },
    "price": 6.00,
    "inStock": true,
    "category": "office",
    "subcategory": "cleaning_set",
    "images": ["images/urna2.jpg"]
  },
  {
    "id": 327,
    barcode:'FS-M',
    "title": {
      "ka": "საფერფლე ურნა, მეტალის საშუალო FS-M",
      "en": "Medium Metal Ashtray Bin FS-M",
      "ru": "Металлическая урна-пепельница, средняя FS-M"
    },
    "price": 35.00,
    "inStock": true,
    "category": "office",
    "subcategory": "cleaning_set",
    "images": ["images/urna3.jpg"]
  },
  {
    "id": 328,
    "title": {
      "ka": "ცოცხი/აქანდაზი 32sm*87.5sm LQ580 . DELI",
      "en": "Broom and Dustpan 32×87.5cm LQ580, DELI",
      "ru": "Набор: веник и совок 32×87,5 см LQ580, DELI"
    },
    "price": 17.00,
    "inStock": true,
    "category": "Household Goods",
    "subcategory": "Broom",
    "images": ["images/urna4.jpg"]
  },
  {
    id: 329,
    barcode: "5440",
    title: {
        ka: "პაპკა პლანშეტი სამდივნო ორმაგი Deli Stationery",
        en: "Clipboard Folder Double Deli Stationery",
        ru: "Папка-планшет двойная Deli Stationery"
    },
    price: 9.50,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno1.jpg"]
},

{
    id: 330,
    barcode: "38153A",
    title: {
        ka: "პლანშეტი ერთმაგი A4 38153A BLUE, DELI",
        en: "Single Clipboard A4 38153A BLUE, DELI",
        ru: "Планшет одинарный A4 38153A BLUE, DELI"
    },
    price: 2.60,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno2.jpg"]
},

{
    id: 331,
    barcode: "38153B",
    title: {
        ka: "პლანშეტი ერთმაგი A4 38153B BLACK, DELI",
        en: "Single Clipboard A4 38153B BLACK, DELI",
        ru: "Планшет одинарный A4 38153B BLACK, DELI"
    },
    price: 2.60,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno3.png"]
},

{
    id: 332,
    barcode: "38154A",
    title: {
        ka: "პლანშეტი ორმაგი A4 38154A BLUE, DELI",
        en: "Double Clipboard A4 38154A BLUE, DELI",
        ru: "Планшет двойной A4 38154A BLUE, DELI"
    },
    price: 4.00,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno4.jpg"]
},

{
    id: 333,
    barcode: "38154B",
    title: {
        ka: "პლანშეტი ორმაგი A4 38154B BLACK, DELI",
        en: "Double Clipboard A4 38154B BLACK, DELI",
        ru: "Планшет двойной A4 38154B BLACK, DELI"
    },
    price: 4.00,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno5.jpg"]
},

{
    id: 334,
    barcode: "F403",
    title: {
        ka: "პლანშეტი პლასტიკური F403, DELI",
        en: "Plastic Clipboard F403, DELI",
        ru: "Планшет пластиковый F403, DELI"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno6.jpg"]
},

{
    id: 335,
    barcode: "F404",
    title: {
        ka: "პლანშეტი პლასტიკური F404, DELI",
        en: "Plastic Clipboard F404, DELI",
        ru: "Планшет пластиковый F404, DELI"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno7.jpg"]
},

{
    id: 336,
    barcode: "F75422",
    title: {
        ka: "პლანშეტი პლასტიკური F75422, DELI",
        en: "Plastic Clipboard F75422, DELI",
        ru: "Планшет пластиковый F75422, DELI"
    },
    price: 4.50,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno8.jpg"]
},

{
    id: 337,
    barcode: "F75432",
    title: {
        ka: "პლანშეტი პლასტიკური F75432, DELI",
        en: "Plastic Clipboard F75432, DELI",
        ru: "Планшет пластиковый F75432, DELI"
    },
    price: 4.50,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno9.jpg"]
},

{
    id: 338,
    barcode: "F75632",
    title: {
        ka: "პლანშეტი პლასტიკური F75632, DELI",
        en: "Plastic Clipboard F75632, DELI",
        ru: "Планшет пластиковый F75632, DELI"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno10.jpg"]
},

{
    id: 339,
    barcode: "P64",
    title: {
        ka: "პლანშეტი პლასტიკური P64, DELI",
        en: "Plastic Clipboard P64, DELI",
        ru: "Планшет пластиковый P64, DELI"
    },
    price: 4.90,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno11.jpg"]
},

{
    id: 340,
    barcode: "PE107",
    title: {
        ka: "პლანშეტი პლასტიკური PE107, DELI",
        en: "Plastic Clipboard PE107, DELI",
        ru: "Планшет пластиковый PE107, DELI"
    },
    price: 4.00,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno12.jpg"]
},

{
    id: 341,
    barcode: "TB403",
    title: {
        ka: "პლანშეტი პლასტიკური TB403, DELI",
        en: "Plastic Clipboard TB403, DELI",
        ru: "Планшет пластиковый TB403, DELI"
    },
    price: 7.80,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno13.jpg"]
},

{
    id: 342,
    barcode: "64506",
    title: {
        ka: "პლანშეტი სამდივნო 64506, DELI",
        en: "Clipboard Folder 64506, DELI",
        ru: "Планшет планшетный 64506, DELI"
    },
    price: 10.00,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno14.jpg"]
},

{
    id: 343,
    barcode: "64507",
    title: {
        ka: "პლანშეტი სამდივნო A5 64507, DELI",
        en: "Clipboard Folder A5 64507, DELI",
        ru: "Планшет планшетный A5 64507, DELI"
    },
    price: 9.00,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno15.jpg"]
},

{
    id: 344,
    barcode: "64513",
    title: {
        ka: "პლანშეტი სამდივნო ორმაგი 64513, DELI",
        en: "Double Clipboard Folder 64513, DELI",
        ru: "Папка-планшет двойная 64513, DELI"
    },
    price: 6.60,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno16.jpg"]
},

{
    id: 345,
    barcode: "9226",
    title: {
        ka: "სამდივნო დაფა A4 9226 Deli Stationery",
        en: "Wooden Clipboard A4 9226 Deli Stationery",
        ru: "Деревянный планшет A4 9226 Deli Stationery"
    },
    price: 4.50,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno17.png"]
},

{
    id: 346,
    barcode: "9244",
    title: {
        ka: "სამდივნო დაფა A4 Deli Stationery",
        en: "Clipboard A4 Deli Stationery",
        ru: "Планшет A4 Deli Stationery"
    },
    price: 4.50,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno18.jpg"]
},

{
    id: 347,
    barcode: "9248",
    title: {
        ka: "სამდივნო დაფა Deli Stationery",
        en: "Clipboard Deli Stationery",
        ru: "Планшет Deli Stationery"
    },
    price: 4.20,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno19.jpg"]
},

{
    id: 348,
    barcode: "9259",
    title: {
        ka: "სამდივნო დაფა კალკულატორით Deli Stationery",
        en: "Clipboard with Calculator Deli Stationery",
        ru: "Планшет с калькулятором Deli Stationery"
    },
    price: 16.00,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno20.png"]
},

{
    id: 349,
    barcode: "F75002",
    title: {
        ka: "სამდივნო დაფა პლასტიკური Deli Stationery",
        en: "Plastic Clipboard Deli Stationery",
        ru: "Пластиковый планшет Deli Stationery"
    },
    price: 6.90,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno21.png"]
},

{
    id: 350,
    barcode: "F75202",
    title: {
        ka: "სამდივნო დაფა პლასტიკური Deli Stationery",
        en: "Plastic Clipboard Deli Stationery",
        ru: "Пластиковый планшет Deli Stationery"
    },
    price: 5.50,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno22.png"]
},

{
    id: 351,
    barcode: "9258",
    title: {
        ka: "სამდივნო დაფა სადგამით Deli Stationery",
        en: "Clipboard with Stand Deli Stationery",
        ru: "Планшет с подставкой Deli Stationery"
    },
    price: 10.00,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno23.jpg"]
},

{
    id: 352,
    barcode: "64504",
    title: {
        ka: "სამდივნო დაფა, ორმხრივი 64504, DELI",
        en: "Double-Sided Clipboard 64504, DELI",
        ru: "Двусторонний планшет 64504, DELI"
    },
    price: 8.00,
    inStock: true,
    category: "stationery",
    subcategory: "pl",
    images: ["images/samdivno24.jpg"]
},
  {
    "id": 360,
    barcode: 'A03003',
    "title": {
      "ka": "წებოვანი ჩასანიშნი Deli Stationery",
      "en": "Sticky Notes, Deli Stationery",
      "ru": "Клейкие заметки, Deli Stationery"
    },
    "price": 5.00,
    "inStock": true,
    "category": "paper",
    "subcategory": "sticky_notes",
    "images": ["images/chasanishni6.png"]
  },
  {
    "id": 361,
    barcode: 'დამინი ბოქსი',
    "title": {
      "ka": "ჩასანიშნი ქაღალდი ყუთში D.A",
      "en": "Memo Paper in a Box, D.A",
      "ru": "Бумага для заметок в коробке, D.A"
    },
    "price": 1.80,
    "inStock": true,
    "category": "paper",
    "subcategory": "sticky_notes",
    "images": ["images/chasanishni7.jpg"]
  },
  {
  "id": 362,
  "barcode": "E0150",
  "title": {
    "ka": "სახვრეტელა 150 ფურცლიანი 0150",
    "en": "150-Sheet Hole Punch 0150",
    "ru": "Дырокол на 150 листов 0150"
  },
  "price": 170.00,
  "inStock": true,
  "category": "stationery",
  "subcategory": "sa",
  "images": ["images/saxvretela1.jpg"]
},

{
  "id": 363,
  "barcode": "901019",
  "title": {
    "ka": "სახვრეტელა 10 ფურცლისათვის Deli Stationery",
    "en": "10-Sheet Hole Punch, Deli Stationery",
    "ru": "Дырокол на 10 листов, Deli Stationery"
  },
  "price": 4.50,
  "inStock": true,
  "category": "stationery",
  "subcategory": "sa",
  "images": ["images/saxvretela2.png"]
},

{
  "id": 364,
  "barcode": "E0130",
  "title": {
    "ka": "სახვრეტელა 100 ფურცლიანი Deli Stationery",
    "en": "100-Sheet Hole Punch, Deli Stationery",
    "ru": "Дырокол на 100 листов, Deli Stationery"
  },
  "price": 100.00,
  "inStock": true,
  "category": "stationery",
  "subcategory": "sa",
  "images": ["images/saxvretela3.png"]
},

{
  "id": 365,
  "barcode": "901057",
  "title": {
    "ka": "სახვრეტელა 15 ფურც 0105",
    "en": "15-Sheet Hole Punch 0105",
    "ru": "Дырокол на 15 листов 0105"
  },
  "price": 10.00,
  "inStock": true,
  "category": "stationery",
  "subcategory": "sa",
  "images": ["images/saxvretela4.jpg"]
},
  {
  "id": 367,
  "barcode": "E7122",
  "title": {
    "ka": "მშრალი წებო 21გრ Deli Stationery",
    "en": "Glue Stick 21g, Deli Stationery",
    "ru": "Клей-карандаш 21 г, Deli Stationery"
  },
  "price": 1.15,
  "inStock": true,
  "category": "stationery",
  "subcategory": "glue",
  "images": ["images/webo1.png"]
},

{
  "id": 368,
  "barcode": "E7123",
  "title": {
    "ka": "მშრალი წებო 36გრ Deli Stationery",
    "en": "Glue Stick 36g, Deli Stationery",
    "ru": "Клей-карандаш 36 г, Deli Stationery"
  },
  "price": 1.80,
  "inStock": true,
  "category": "stationery",
  "subcategory": "glue",
  "images": ["images/webo2.png"]
},

{
  "id": 369,
  "barcode": "A20413",
  "title": {
    "ka": "მშრალი წებო 60 ცალიანი ნაკრები Deli Stationery",
    "en": "Glue Stick Set, 60 pcs, Deli Stationery",
    "ru": "Набор клея-карандаша, 60 шт., Deli Stationery"
  },
  "price": 85.00,
  "inStock": true,
  "category": "stationery",
  "subcategory": "glue",
  "images": ["images/webo3.png"]
},

{
  "id": 370,
  "barcode": "E7303S",
  "title": {
    "ka": "წებო თხევადი 125მლ E7303S, DELI",
    "en": "Liquid Glue 125ml E7303S, DELI",
    "ru": "Жидкий клей 125 мл E7303S, DELI"
  },
  "price": 1.80,
  "inStock": true,
  "category": "stationery",
  "subcategory": "glue",
  "images": ["images/webo4.jpg"]
},

{
  "id": 371,
  "barcode": "A251",
  "title": {
    "ka": "წებო თხევადი 30მლ A251 , DELI",
    "en": "Liquid Glue 30ml A251, DELI",
    "ru": "Жидкий клей 30 мл A251, DELI"
  },
  "price": 0.60,
  "inStock": true,
  "category": "stationery",
  "subcategory": "glue",
  "images": ["images/webo5.jpg"]
},

{
  "id": 372,
  "barcode": "A21710",
  "title": {
    "ka": "თვითწებოვანი REUSABLE MAGIC TACK A21710, DELI",
    "en": "Reusable Magic Tack Adhesive A21710, DELI",
    "ru": "Многоразовый клейкий пластилин Magic Tack A21710, DELI"
  },
    "price": 3.50,
    "inStock": true,
    "category": "stationery",
    "subcategory": "glue",
    "images": ["images/webo5.jpg"]
  },
  {
    "id": 373,
    barcode:'6068',
    "title": {
      "ka": "მაკრატელი 135mm 6068, DELI",
      "en": "Scissors 135mm 6068, DELI",
      "ru": "Ножницы 135 мм 6068, DELI"
    },
    "price": 2.50,
    "inStock": true,
    "category": "stationery",
    "subcategory": "utility_knife",
    "images": ["images/makrateli1.jpg"]
  },
  {
    "id": 374,
    barcode: 'D60402',
    "title": {
      "ka": "მაკრატელი 130mm D60402 , DELI",
      "en": "Scissors 130mm D60402, DELI",
      "ru": "Ножницы 130 мм D60402, DELI"
    },
    "price": 1.80,
    "inStock": true,
    "category": "stationery",
    "subcategory": "utility_knife",
    "images": ["images/makrateli2.jpg"]
  },
 {
  "id": 375,
  barcode:'M120',
  "title": {
    "ka": "კალკულატორი M120 , DELI",
    "en": "Calculator M120, DELI",
    "ru": "Калькулятор M120, DELI"
  },
  "price": 8.00,
  "inStock": true,
  "category": "stationery",
  "subcategory": "calculator",
  "images": ["images/kalkulatori1.jpg"]
},

{
  "id": 376,
  barcode:'M130',
  "title": {
    "ka": "კალკულატორი M130 , DELI",
    "en": "Calculator M130, DELI",
    "ru": "Калькулятор M130, DELI"
  },
  "price": 6.00,
  "inStock": true,
  "category": "stationery",
  "subcategory": "calculator",
  "images": ["images/kalkulatori2.jpg"]
},

{
  "id": 377,
  barcode:'M01120',
  "title": {
    "ka": "კალკულატორი M01120 , DELI",
    "en": "Calculator M01120, DELI",
    "ru": "Калькулятор M01120, DELI"
  },
  "price": 16.00,
  "inStock": true,
  "category": "stationery",
  "subcategory": "calculator",
  "images": ["images/kalkulatori3.png"]
},

{
  "id": 378,
  barcode:'TE837C-BLUE',
  "title": {
    "ka": "კალკულატორი M01120 , DELI",
    "en": "Calculator M01120, DELI",
    "ru": "Калькулятор M01120, DELI"
  },
  "price": 9.50,
  "inStock": true,
  "category": "stationery",
  "subcategory": "calculator",
  "images": ["images/kalkulatori4.jpg"]
},

{
  "id": 379,
  "barcode": "M888A OR",
  "title": {
    "ka": "კალკულატორი M01120 , DELI",
    "en": "12-Digit Calculator M888A ORANGE, Deli",
    "ru": "12-разрядный калькулятор M888A ORANGE, Deli"
  },
  "price": 19.00,
  "inStock": true,
  "category": "stationery",
  "subcategory": "calculator",
  "images": ["images/kalkulatori5.jpg"]
},

{
  "id": 380,
  "barcode": "EM18C",
  "title": {
    "ka": "კალკულატორი 12 თანრიგიანი EM18C , Deli",
    "en": "12-Digit Calculator M888A ORANGE, Deli",
    "ru": "12-разрядный калькулятор M888A ORANGE, Deli"
  },
  "price": 9.80,
  "inStock": true,
  "category": "stationery",
  "subcategory": "calculator",
  "images": ["images/kalkulatori6.jpg"]
},

{
  "id": 381,
  barcode:'EM01541',
  "title": {
    "ka": "კალკულატორი 12 თანრიგიანი EM18C , Deli",
    "en": "12-Digit Calculator EM18C, Deli",
    "ru": "12-разрядный калькулятор EM18C, Deli"
  },
  "price": 20.00,
  "inStock": true,
  "category": "stationery",
  "subcategory": "calculator",
  "images": ["images/kalkulatori7.png"]
},

{
  "id": 382,
  "barcode": "P1589",
  "title": {
    "ka": "კალკულატორი 12 თანრიგიანი 1589/P DELI",
    "en": "12-Digit Calculator 1589/P, DELI",
    "ru": "12-разрядный калькулятор 1589/P, DELI"
  },
  "price": 27.00,
  "inStock": true,
  "category": "stationery",
  "subcategory": "calculator",
  "images": ["images/kalkulatori8.jpg"]
},
{
  "id": 388,
  "barcode": "126105",
  "title": {
    "ka": "თხევადი საპონი რძე და თაფლი 5ლ 126105",
    "en": "Liquid Soap Milk and Honey 5L 126105",
    "ru": "Жидкое мыло Молоко и мед 5л 126105"
  },
  "price": 36,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/126105.webp"]
},
{
  "id": 389,
  "barcode": "126205",
  "title": {
    "ka": "თხევადი საპონი მარგალიტი 5ლ 126205",
    "en": "Liquid Soap Pearl 5L 126205",
    "ru": "Жидкое мыло Жемчужина 5л 126205"
  },
  "price": 36,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/126205.jpg"]
},
{
  "id": 390,
  "barcode": "126305",
  "title": {
    "ka": "თხევადი საპონი იოგურტი 5ლ 126305",
    "en": "Liquid Soap Yogurt 5L 126305",
    "ru": "Жидкое мыло Йогурт 5л 126305"
  },
  "price": 36,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/126305.jpg"]
},
{
  "id": 391,
  "barcode": "126405",
  "title": {
    "ka": "თხევადი საპონი ალუბალი 5ლ 126405",
    "en": "Liquid Soap Cherry 5L 126405",
    "ru": "Жидкое мыло Вишня 5л 126405"
  },
  "price": 36,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/126405.jpg"]
},
{
  "id": 392,
  "barcode": "126605",
  "title": {
    "ka": "თხევადი საპონი ალოე 5ლ 126605",
    "en": "Liquid Soap Aloe 5L 126605",
    "ru": "Жидкое мыло Алоэ 5л 126605"
  },
  "price": 36,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/126605.jpg"]
},
{
  "id": 393,
  "barcode": "125318",
  "title": {
    "ka": "თხევადი საპონი ბუბლიგუმი 5ლ 125318",
    "en": "Liquid Soap Bubble Gum 5L 125318",
    "ru": "Жидкое мыло Баббл Гам 5л 125318"
  },
  "price": 36,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125318.jpg"]
},
{
  "id": 394,
  "barcode": "125361",
  "title": {
    "ka": "ანტიბაქტერიული თხევადი საპონი 5ლ 125361",
    "en": "Antibacterial Liquid Soap 5L 125361",
    "ru": "Антибактериальное жидкое мыло 5л 125361"
  },
  "price": 36,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125361.webp"]
},
{
  "id": 395,
  "barcode": "125362",
  "title": {
    "ka": "ქაფი საპონი 5ლ 125362",
    "en": "Foam Soap 5L 125362",
    "ru": "Мыло-пена 5л 125362"
  },
  "price": 36,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/ქაფი საპონი 5ლ 125362.jpg"]
},
{
  "id": 396,
  "barcode": "130600",
  "title": {
    "ka": "შუშის საწმენდი ხსნარი 0.6მლ 130600",
    "en": "Glass Cleaning Solution 0.6L 130600",
    "ru": "Средство для мытья стекол 0.6л 130600"
  },
  "price": 8,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/130600.png"]
},
{
  "id": 397,
  "barcode": "125247",
  "title": {
    "ka": "შუშის საწმენდი ხსნარი 0.6მლ 125247",
    "en": "Glass Cleaner Solution 0.6L 125247",
    "ru": "Средство для очистки стекол 0.6л 125247"
  },
  "price": 8,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125247.png"]
},
{
  "id": 398,
  "barcode": "125241",
  "title": {
    "ka": "შუშის საწმენდი ხსნარი 0.6მლ 125241",
    "en": "Glass Cleaning Spray 0.6L 125241",
    "ru": "Средство для стекол 0.6л 125241"
  },
  "price": 8,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125241.png"]
},
{
  "id": 399,
  "barcode": "125184",
  "title": {
    "ka": "მყარი იატაკის სარეცხი ხსნარი Arena 1ლ 125184",
    "en": "Hard Floor Cleaner Arena 1L 125184",
    "ru": "Моющее средство для пола Arena 1л 125184"
  },
  "price": 9.5,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125184.jpg"]
},
{
  "id": 400,
  "barcode": "125905",
  "title": {
    "ka": "მყარი იატაკის სარეცხი ხსნარი Arena 1ლ 125905",
    "en": "Floor Wash Solution Arena 1L 125905",
    "ru": "Средство для мытья полов Arena 1л 125905"
  },
  "price": 9.5,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125905.jpg"]
},
{
  "id": 401,
  "barcode": "125904",
  "title": {
    "ka": "მყარი იატაკის სარეცხი ხსნარი Arena 1ლ 125904",
    "en": "Hard Floor Cleaner Solution Arena 1L 125904",
    "ru": "Средство для пола Arena 1л 125904"
  },
  "price": 9.5,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125904.jpg"]
},
{
  "id": 402,
  "barcode": "125185",
  "title": {
    "ka": "მყარი იატაკის სარეცხი ხსნარი Arena 1ლ 125185",
    "en": "Floor Cleaner Arena 1L 125185",
    "ru": "Жидкость для мытья пола Arena 1л 125185"
  },
  "price": 9.5,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125185.jpg"]
},
{
  "id": 403,
  "barcode": "125195",
  "title": {
    "ka": "მყარი იატაკის სარეცხი ხსნარი Floor Wash 5ლ 125195",
    "en": "Floor Cleaner Solution Floor Wash 5L 125195",
    "ru": "Средство для мытья пола Floor Wash 5л 125195"
  },
  "price": 67,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125195.jpg"]
},
{
  "id": 404,
  "barcode": "125193",
  "title": {
    "ka": "მყარი იატაკის სარეცხი ხსნარი ძლიერი დაბინძურების Floor 125193",
    "en": "Heavy Duty Floor Cleaner Solution Floor 125193",
    "ru": "Моющее средство для сильных загрязнений пола Floor 125193"
  },
  "price": 78,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125193.jpg"]
},
{
  "id": 405,
  "barcode": "125520",
  "title": {
    "ka": "მყარი იატაკის სარეცხი ხსნარი ძლიერი დაბინძურების Floor 125520",
    "en": "Heavy Duty Floor Wash Solution Floor 125520",
    "ru": "Средство для глубокой очистки пола Floor 125520"
  },
  "price": 225,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125520.jpg"]
},
{
  "id": 406,
  "barcode": "218005",
  "title": {
    "ka": "ხის ზედაპირის სარეცხი ხსნარი Arena 5ლ 218005",
    "en": "Wood Surface Cleaner Arena 5L 218005",
    "ru": "Средство для мытья деревянных поверхностей Arena 5л 218005"
  },
  "price": 67,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/218005.jpg"]
},
{
  "id": 407,
  "barcode": "125337",
  "title": {
    "ka": "მყარი ზედაპირის სარეცხი საშუალება დაბალქაფიანი Prograss 5ლ 125337",
    "en": "Low Foam Hard Surface Cleaner Prograss 5L 125337",
    "ru": "Низкопенное средство для твердых поверхностей Prograss 5л 125337"
  },
  "price": 35,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125337.jpg"]
},
{
  "id": 408,
  "barcode": "112600",
  "title": {
    "ka": "უნივერსალური საწმენდი საშუალება Universacl Cleaner 0.6 112600",
    "en": "Universal Cleaner Solution 0.6L 112600",
    "ru": "Универсальное моющее средство Universacl Cleaner 0.6л 112600"
  },
  "price": 10,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/112600.jpg"]
},
{
  "id": 409,
  "barcode": "125200",
  "title": {
    "ka": "რბილი იატაკის, ავეჯის საწმენდი ხსნარი Carpet Cleaner 5ლ 125200",
    "en": "Carpet and Furniture Cleaner Solution 5L 125200",
    "ru": "Средство для чистки ковров и мебели Carpet Cleaner 5л 125200"
  },
  "price": 69,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125200.jpg"]
},
{
  "id": 410,
  "barcode": "125442",
  "title": {
    "ka": "რემონტის შემდგომი საწმენდი ხსნარი Cement Remover 125442",
    "en": "Post-Renovation Cement Remover Solution 125442",
    "ru": "Средство после ремонта Cement Remover 125442"
  },
  "price": 68,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125442.jpg"]
},
{
  "id": 411,
  "barcode": "125305",
  "title": {
    "ka": "რემონტის შემდგომი სარეცხი ხსნარი Cement Cleaner 125305",
    "en": "Post-Renovation Cement Cleaner Solution 125305",
    "ru": "Моющее средство после ремонта Cement Cleaner 125305"
  },
  "price": 65,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125305.jpg"]
},
{
  "id": 412,
  "barcode": "125420",
  "title": {
    "ka": "ჭურჭლის სარეცხი გელი Velly 5ლ 125420",
    "en": "Dishwashing Gel Velly 5L 125420",
    "ru": "Гель для мытья посуды Velly 5л 125420"
  },
  "price": 45,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125420.jpg"]
},
{
  "id": 413,
  "barcode": "125847",
  "title": {
    "ka": "ჭურჭლის სარეცხი გელი Velly გრეიფრუტი 5ლ 125847",
    "en": "Dishwashing Gel Velly Grapefruit 5L 125847",
    "ru": "Гель для мытья посуды Velly Грейпфрут 5л 125847"
  },
  "price": 40,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125847.jpg"]
},
{
  "id": 414,
  "barcode": "125717",
  "title": {
    "ka": "ჭურჭლის მანქანის ტაბლეტი ColoritPlus All in 1 100ც 125717",
    "en": "Dishwasher Tablets ColoritPlus All in 1 100pcs 125717",
    "ru": "Таблетки для посудомоечной машины ColoritPlus All in 1 100шт 125717"
  },
  "price": 75,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125717.jpg"]
},
{
  "id": 415,
  "barcode": "216110",
  "title": {
    "ka": "ჭურჭლის მანქანის სარეცხი ხსნარი Dishwasher 1ლ 216110",
    "en": "Dishwasher Liquid Solution 1L 216110",
    "ru": "Моющее средство для посудомоечной машины Dishwasher 1л 216110"
  },
  "price": 28,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/216110.jpg"]
},
{
  "id": 416,
  "barcode": "216100",
  "title": {
    "ka": "ჭურჭლის მანქანის დამარბილებელი ხსნარი Conditioner Dish 1ლ 216100",
    "en": "Dishwasher Rinse Aid Conditioner Dish 1L 216100",
    "ru": "Ополаскиватель для посудомоечной машины Conditioner Dish 1л 216100"
  },
  "price": 16,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/216100.jpg"]
},
{
  "id": 417,
  "barcode": "218600",
  "title": {
    "ka": "გაზქურის საწმენდი ხსნარი Azelit 0.6 მლ 218600",
    "en": "Oven & Stove Cleaner Azelit 0.6L 218600",
    "ru": "Средство для чистки плит Azelit 0.6л 218600"
  },
  "price": 13,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/218600.jpg"]
},
{
  "id": 418,
  "barcode": "125375",
  "title": {
    "ka": "გაზქურის საწმენდი ხსნარი Azelit 0.6 მლ 125375",
    "en": "Kitchen Cleaner Spray Azelit 0.6L 125375",
    "ru": "Жидкость для чистки плит Azelit 0.6л 125375"
  },
  "price": 13,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125375.jpg"]
},
{
  "id": 419,
  "barcode": "125239",
  "title": {
    "ka": "გაზქურის საწმენდი გელი Azelit 5 ლ 125239",
    "en": "Oven Cleaner Gel Azelit 5L 125239",
    "ru": "Гель для чистки плит Azelit 5л 125239"
  },
  "price": 76,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125239.jpg"]
},
{
  "id": 420,
  "barcode": "125470",
  "title": {
    "ka": "გაზქურის საწმენდი ხსნარი Grill 0.6 მლ 125470",
    "en": "Grill Cleaner Solution 0.6L 125470",
    "ru": "Средство для чистки гриля Grill 0.6л 125470"
  },
  "price": 17,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125470.jpg"]
},
{
  "id": 421,
  "barcode": "125586",
  "title": {
    "ka": "გაზქურის საწმენდი ხსნარი Grill 5 ლ 125586",
    "en": "Grill Cleaner Solution 5L 125586",
    "ru": "Средство для чистки гриля Grill 5л 125586"
  },
  "price": 87,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125586.jpg"]
},
{
  "id": 422,
  "barcode": "221500",
  "title": {
    "ka": "აბაზანის საწმენდი გელი Gloss gel 0.6 მლ 221500",
    "en": "Bathroom Cleaner Gel Gloss 0.6L 221500",
    "ru": "Гель для чистки ванной Gloss 0.6л 221500"
  },
  "price": 9,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/221500.jpg"]
},
{
  "id": 423,
  "barcode": "125322",
  "title": {
    "ka": "აბაზანის საწმენდი ხსნარი Gloss 1ლ 125322",
    "en": "Bathroom Cleaning Solution Gloss 1L 125322",
    "ru": "Средство для чистки ванной Gloss 1л 125322"
  },
  "price": 23,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125322.jpg"]
},
{
  "id": 424,
  "barcode": "125323",
  "title": {
    "ka": "აბაზანის საწმენდი ხსნარი Gloss 5ლ 125323",
    "en": "Bathroom Cleaner Solution Gloss 5L 125323",
    "ru": "Средство для чистки ванной Gloss 5л 125323"
  },
  "price": 65,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125323.jpg"]
},
{
  "id": 425,
  "barcode": "125489",
  "title": {
    "ka": "აბაზანის-ობის მომხსნელი ხსნარი Dos-Clean 0.6 ml 125489",
    "en": "Mold & Mildew Remover Dos-Clean 0.6L 125489",
    "ru": "Средство от плесени Dos-Clean 0.6л 125489"
  },
  "price": 12,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125489.jpg"]
},
{
  "id": 426,
  "barcode": "125203",
  "title": {
    "ka": "აბაზანის-უნიტაზის საწმენდი გელი WC-Gel 5ლ 125203",
    "en": "Toilet & Bathroom Cleaner Gel WC-Gel 5L 125203",
    "ru": "Гель для сантехники и туалета WC-Gel 5л 125203"
  },
  "price": 48,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125203.jpg"]
},
{
  "id": 427,
  "barcode": "125436",
  "title": {
    "ka": "აბაზანის-უნიტაზის სადეზინფექციო გელი Dos-Gel 1ლ 125436",
    "en": "Disinfectant Toilet Gel Dos-Gel 1L 125436",
    "ru": "Дезинфицирующий гель для туалета Dos-Gel 1л 125436"
  },
  "price": 11,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125436.jpg"]
},
{
  "id": 428,
  "barcode": "125240",
  "title": {
    "ka": "აბაზანის-უნიტაზის სადეზინფექციო გელი Dos-Gel 5ლ 125240",
    "en": "Disinfectant Toilet Gel Dos-Gel 5L 125240",
    "ru": "Дезинфицирующий гель для туалета Dos-Gel 5л 125240"
  },
  "price": 42,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125240.jpg"]
},
{
  "id": 429,
  "barcode": "125438",
  "title": {
    "ka": "საკანალიზაციო მილების საწმენდი გელი Digger-Gel 1ლ 125438",
    "en": "Drain Cleaning Gel Digger-Gel 1L 125438",
    "ru": "Гель для очистки водосточных труб Digger-Gel 1л 125438"
  },
  "price": 10,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125438.jpeg"]
},
{
  "id": 430,
  "barcode": "125206",
  "title": {
    "ka": "საკანალიზაციო მილების საწმენდი გელი Digger-Gel 5ლ 125206",
    "en": "Drain Cleaning Gel Digger-Gel 5L 125206",
    "ru": "Гель для очистки водосточных труб Digger-Gel 5л 125206"
  },
  "price": 29,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125206.jpg"]
},
{
  "id": 431,
  "barcode": "802004",
  "title": {
    "ka": "სუნის ჩამხშობი Smell Block 0.6მლ 802004",
    "en": "Odor Neutralizer Smell Block 0.6L 802004",
    "ru": "Нейтрализатор запаха Smell Block 0.6л 802004"
  },
  "price": 13,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/802004.jpg"]
},
{
  "id": 432,
  "barcode": "125536",
  "title": {
    "ka": "სუნის ჩამხშობი Smell Block 0.6მლ 125536",
    "en": "Odor Neutralizer Smell Block 0.6L 125536",
    "ru": "Нейтрализатор запаха Smell Block 0.6л 125536"
  },
  "price": 25,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125536.jpg"]
},
{
  "id": 433,
  "barcode": "219600",
  "title": {
    "ka": "ხის ზედაპირის გამწმენდი Torus 0.6მლ 219600",
    "en": "Wood Surface Cleaner Torus 0.6L 219600",
    "ru": "Средство для чистки деревянных поверхностей Torus 0.6л 219600"
  },
  "price": 11,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/219600.jpg"]
},
{
  "id": 434,
  "barcode": "117107",
  "title": {
    "ka": "საღებავის, წებოვანი ლენტის მომხსნელი საშუალება Antigrafiti 0.6მლ 117107",
    "en": "Paint & Tape Remover Antigrafiti 0.6L 117107",
    "ru": "Средство для удаления краски и скотча Antigrafiti 0.6л 117107"
  },
  "price": 28,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/117107.jpg"]
},
{
  "id": 435,
  "barcode": "125602",
  "title": {
    "ka": "საღებავის, წებოვანი ლენტის მომხსნელი საშუალება Antigrafiti 0.6მლ 125602",
    "en": "Paint & Tape Remover Antigrafiti 0.6L 125602",
    "ru": "Средство для удаления скотча и граффити Antigrafiti 0.6л 125602"
  },
  "price": 29,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125602.jpg"]
},
{
  "id": 436,
  "barcode": "140101",
  "title": {
    "ka": "საღებავის, წებოვანი ლენტის მომხსნელი საშუალება Antigrafiti 5ლ 140101",
    "en": "Paint & Tape Remover Antigrafiti 5L 140101",
    "ru": "Средство для удаления краски и скотча Antigrafiti 5л 140101"
  },
  "price": 179,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/140101.jpg"]
},
{
  "id": 437,
  "barcode": "110588",
  "title": {
    "ka": "ანტისკოჩი 0.25მლ 110588",
    "en": "Anti-Sticker Spray 0.25L 110588",
    "ru": "Средство для удаления скотча 0.25л 110588"
  },
  "price": 14,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/110588.png"]
},
{
  "id": 438,
  "barcode": "IT-0649",
  "title": {
    "ka": "საწმენდი ტილო მიკროფიბრა 30*30 IT-0649",
    "en": "Microfiber Cleaning Cloth 30x30 IT-0649",
    "ru": "Микрофибровая салфетка 30x30 IT-0649"
  },
  "price": 3,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/IT-0649.jpg"]
},
{
  "id": 439,
  "barcode": "IT-0460",
  "title": {
    "ka": "საწმენდი ტილო მიკროფიბრა 80*100 IT-0460",
    "en": "Microfiber Cleaning Cloth 80x100 IT-0460",
    "ru": "Микрофибровая салфетка 80x100 IT-0460"
  },
  "price": 29,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/IT-0460.jpg"]
},
{
  "id": 440,
  "barcode": "125874",
  "title": {
    "ka": "გელ-კონდენციონერი ყველა სახის თეთრეულისთვის Dory 1.8მლ 125874",
    "en": "Fabric Softener Conditioner Dory 1.8L 125874",
    "ru": "Гель-кондиционер для белья Dory 1.8л 125874"
  },
  "price": 15,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125874.jpg"]
},
{
  "id": 441,
  "barcode": "125747",
  "title": {
    "ka": "გელ-კონდენციონერი მუქი თეთრეულისთვის ALPI 1.8 მლ 125747",
    "en": "Fabric Softener Gel for Dark Clothes ALPI 1.8L 125747",
    "ru": "Гель-кондиционер для темного белья ALPI 1.8л 125747"
  },
  "price": 25,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125747.jpg"]
},
{
  "id": 442,
  "barcode": "125732",
  "title": {
    "ka": "კონცენტრირებული თხევადი სარეცხი საშუალება ALPI sensetive gel 125732",
    "en": "Concentrated Liquid Detergent ALPI Sensitive Gel 125732",
    "ru": "Концентрированное жидкое средство для стирки ALPI Sensitive Gel 125732"
  },
  "price": 25,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125732.jpg"]
},
{
  "id": 443,
  "barcode": "125733",
  "title": {
    "ka": "კონცენტრირებული თხევადი სარეცხი საშუალება ALPI white gel 1.8 მლ 125733",
    "en": "Concentrated Liquid Detergent ALPI White Gel 1.8L 125733",
    "ru": "Концентрированное жидкое средство для стирки ALPI White Gel 1.8л 125733"
  },
  "price": 25,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125733.jpg"]
},
{
  "id": 444,
  "barcode": "125748",
  "title": {
    "ka": "გელ-კონცენტრატი შალი და აბრეშუმი ALPI 1.8 მლ 125748",
    "en": "Detergent Gel Concentrate Wool & Silk ALPI 1.8L 125748",
    "ru": "Гель-концентрат для шерсти и шелка ALPI 1.8л 125748"
  },
  "price": 25,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125748.jpg"]
},
{
  "id": 445,
  "barcode": "125770",
  "title": {
    "ka": "ჭურჭლის მანქანის დამარბილებელი სავლები ხსნარი Velly 0.5 მლ 125770",
    "en": "Dishwasher Rinse Aid Velly 0.5L 125770",
    "ru": "Ополаскиватель для посудомоечной машины Velly 0.5л 125770"
  },
  "price": 10,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125770.jpg"]
},
{
  "id": 446,
  "barcode": "125886",
  "title": {
    "ka": "სარეცხი მანქანის საწმენდი Skalex 0.2 მლ 125886",
    "en": "Washing Machine Cleaner Skalex 0.2L 125886",
    "ru": "Средство для чистки стиральных машин Skalex 0.2л 125886"
  },
  "price": 9,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125886.jpg"]
},
{
  "id": 447,
  "barcode": "125443",
  "title": {
    "ka": "ობის მომხსნელი ხსნარი Bimold 1ლ 125443",
    "en": "Mold Remover Solution Bimold 1L 125443",
    "ru": "Средство для удаления плесени Bimold 1л 125443"
  },
  "price": 15,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125443.jpg"]
},
{
  "id": 448,
  "barcode": "126155",
  "title": {
    "ka": "უნივერსალური საწმენდი Home cleaner 0.6 მლ 126155",
    "en": "Universal Surface Cleaner Home Cleaner 0.6L 126155",
    "ru": "Универсальное чистящее средство Home Cleaner 0.6л 126155"
  },
  "price": 12,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/126155.jpg"]
},
{
  "id": 449,
  "barcode": "145126",
  "title": {
    "ka": "ჰაერის არომატიზატორი Milana Spring Bloom 0.3 მლ 145126",
    "en": "Air Freshener Milana Spring Bloom 0.3L 145126",
    "ru": "Освежитель воздуха Milana Spring Bloom 0.3л 145126"
  },
  "price": 15,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/145126.jpg"]
},
{
  "id": 450,
  "barcode": "145130",
  "title": {
    "ka": "ჰაერის არომატიზატორი Milana Oud Rood 0.3 მლ 145130",
    "en": "Air Freshener Milana Oud Rood 0.3L 145130",
    "ru": "Освежитель воздуха Milana Oud Rood 0.3л 145130"
  },
  "price": 15,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/145130.jpg"]
},
{
  "id": 451,
  "barcode": "125572",
  "title": {
    "ka": "Clean glass Professional 5ლ 125572",
    "en": "Clean Glass Professional 5L 125572",
    "ru": "Clean Glass Professional 5л 125572"
  },
  "price": 29,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "grass",
  "images": ["images/125572.jpg"]
},
{
  "id": 452,
  "barcode": "4128",
  "title": {
    "ka": "ბაგის ავნიტი, ნადების მოსაცილებელი, 3ლიტ.",
    "en": "Bagi Avnit Limescale Remover 3L",
    "ru": "Баги Авнит Средство от накипи и известкового налета 3л"
  },
  "price": 61,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/4128.jpg"]
},
{
  "id": 453,
  "barcode": "65",
  "title": {
    "ka": "ბაგის ავნიტი, ნადების მოსაცილებელი, 550მლ.",
    "en": "Bagi Avnit Limescale Remover 550ml",
    "ru": "Баги Авнит Средство от накипи и известкового налета 550мл"
  },
  "price": 17.9,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/65.jpg"]
},
{
  "id": 454,
  "barcode": "5613",
  "title": {
    "ka": "ბაგის აკრილანი, აბაზანისა და ნიჟარების საწმენდი, 3ლიტ.",
    "en": "Bagi Acrilan Bathroom & Sink Cleaner 3L",
    "ru": "Баги Акрилан Средство для чистки ванн и раковин 3л"
  },
  "price": 53.2,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5613.jpg"]
},
{
  "id": 455,
  "barcode": "8214",
  "title": {
    "ka": "ბაგის აკრილანი, სპრეი, აბაზანისა და ნიჟარების საწმენდი, 400მლ.",
    "en": "Bagi Acrilan Spray Bathroom & Sink Cleaner 400ml",
    "ru": "Баги Акрилан Спрей для чистки ванн и раковин 400мл"
  },
  "price": 15.95,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/8214.jpg"]
},
{
  "id": 456,
  "barcode": "5590",
  "title": {
    "ka": "ბაგის აკრილანი, სპრეი, აბაზანისა და ნიჟარების საწმენდი, 750მლ.",
    "en": "Bagi Acrilan Spray Bathroom & Sink Cleaner 750ml",
    "ru": "Баги Акрилан Спрей для чистки ванн и раковин 750мл"
  },
  "price": 21.85,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5590.jpg"]
},
{
  "id": 457,
  "barcode": "4135",
  "title": {
    "ka": "ბაგის ანტი კალკი, ნიჟარების საწმენდი, ჟანგის საწინააღმდეგო, 750მლ.",
    "en": "Bagi Anti Kalk Sink & Rust Remover 750ml",
    "ru": "Баги Анти Кальк Средство для раковин и удаления ржавчины 750мл"
  },
  "price": 19.75,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/4135.jpg"]
},
{
  "id": 458,
  "barcode": "5101",
  "title": {
    "ka": "ბაგის ანტი პლესენი, აბაზანის საწმენდი, ობის და სოკოს საწინააღმდეგო, 500მლ.",
    "en": "Bagi Anti Mold Bathroom Anti-Mold & Anti-Fungal Cleaner 500ml",
    "ru": "Баги Анти Плесень Средство против плесени и грибка для ванной 500мл"
  },
  "price": 16.9,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5101.jpg"]
},
{
  "id": 459,
  "barcode": "8320",
  "title": {
    "ka": "ბაგის კლინერი, შუშების და სარკეების საწმენდი, 500მლ.",
    "en": "Bagi Cleaner Glass & Mirror Cleaner 500ml",
    "ru": "Баги Клинер Средство для мытья стекол и зеркал 500мл"
  },
  "price": 13.1,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/8320.jpg"]
},
{
  "id": 460,
  "barcode": "5125",
  "title": {
    "ka": "ბაგის კლინერი, შუშების და სარკეების საწმენდი, 750მლ.",
    "en": "Bagi Cleaner Glass & Mirror Cleaner 750ml",
    "ru": "Баги Клинер Средство для мытья стекол и зеркал 750мл"
  },
  "price": 15.5,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5125.jpg"]
},
{
  "id": 461,
  "barcode": "5316",
  "title": {
    "ka": "ბაგის ლამინატი, ლამინატის იატაკის საწმენდი, 1ლიტ.",
    "en": "Bagi Laminate Laminate Floor Cleaner 1L",
    "ru": "Баги Ламинат Средство для мытья ламината 1л"
  },
  "price": 20.75,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5316.jpg"]
},
{
  "id": 462,
  "barcode": "8344",
  "title": {
    "ka": "ბაგის ლამინატი, ლამინატის იატაკის საწმენდი, 550ლიტ.",
    "en": "Bagi Laminate Laminate Floor Cleaner 550ml",
    "ru": "Баги Ламинат Средство для мытья ламината 550мл"
  },
  "price": 15,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/8344.jpg"]
},
{
  "id": 463,
  "barcode": "4289",
  "title": {
    "ka": "ბაგის მაგიდის ტილო, უნივერსალური, შემწოვი (1 ცალიანი), 38x40სმ",
    "en": "Bagi Universal Absorbent Table Cloth (1 pc), 38x40cm",
    "ru": "Баги Салфетка настольная универсальная впитывающая (1 шт), 38x40см"
  },
  "price": 2.1,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/4289.jpg"]
},
{
  "id": 464,
  "barcode": "5446",
  "title": {
    "ka": "ბაგის მასტიკა, ლამინატის და პარკეტის იატაკის მოსაპრიალებელი, 1ლიტ.",
    "en": "Bagi Mastic Laminate & Parquet Floor Polish 1L",
    "ru": "Баги Мастика Полироль для ламината и паркета 1л"
  },
  "price": 31,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5446.jpg"]
},
{
  "id": 465,
  "barcode": "4418",
  "title": {
    "ka": "ბაგის მასტიკა, ლამინატის და პარკეტის იატაკის მოსაპრიალებელი, 3ლიტ.",
    "en": "Bagi Mastic Laminate & Parquet Floor Polish 3L",
    "ru": "Баги Мастика Полироль для ламината и паркета 3л"
  },
  "price": 67.5,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/4418.jpg"]
},
{
  "id": 466,
  "barcode": "5422",
  "title": {
    "ka": "ბაგის მასტიკა, ლამინატის და პარკეტის იატაკის მოსაპრიალებელი, 500მლ.",
    "en": "Bagi Mastic Laminate & Parquet Floor Polish 500ml",
    "ru": "Баги Мастика Полироль для ламината и паркета 500мл"
  },
  "price": 17.9,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5422.jpg"]
},
{
  "id": 467,
  "barcode": "218",
  "title": {
    "ka": "ბაგის მეტეორი, ნიჟარებისა და კერამიკული ფილების საწმენდი, 3ლიტ.",
    "en": "Bagi Meteor Sink & Ceramic Tile Cleaner 3L",
    "ru": "Баги Метеор Средство для чистки раковин и керамической плитки 3л"
  },
  "price": 37.8,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/218.jpg"]
},
{
  "id": 468,
  "barcode": "8368",
  "title": {
    "ka": "ბაგის მეტეორი, სპრეი, ნიჟარებისა და კერამიკული ფილების საწმენდი, 400მლ.",
    "en": "Bagi Meteor Spray Sink & Ceramic Tile Cleaner 400ml",
    "ru": "Баги Метеор Спрей для чистки раковин и керамической плитки 400мл"
  },
  "price": 13.8,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/8368.jpg"]
},
{
  "id": 469,
  "barcode": "4241",
  "title": {
    "ka": "ბაგის მიკროფიბრული ტილო, უჯრედებიანი, 40x40სმ",
    "en": "Bagi Microfiber Cloth Waffle Texture 40x40cm",
    "ru": "Баги Микрофибровая салфетка ячеистая 40x40см"
  },
  "price": 6.7,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/4241.jpg"]
},
{
  "id": 470,
  "barcode": "4227",
  "title": {
    "ka": "ბაგის მიკროფიბრული ტილო, უჯრედებიანი, 50x80სმ",
    "en": "Bagi Microfiber Cloth Waffle Texture 50x80cm",
    "ru": "Баги Микрофибровая салфетка ячеистая 50x80см"
  },
  "price": 12.85,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/4227.jpg"]
},
{
  "id": 471,
  "barcode": "5309",
  "title": {
    "ka": "ბაგის ორანიტი, გრანიტის და ხის იატაკის უნივერსალური საწმენდი, 1ლიტ.",
    "en": "Bagi Oranit Universal Granite & Wood Floor Cleaner 1L",
    "ru": "Баги Оранит Универсальное средство для гранита и деревянных полов 1л"
  },
  "price": 21.75,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5309.jpg"]
},
{
  "id": 472,
  "barcode": "232",
  "title": {
    "ka": "ბაგის ორანიტი, გრანიტის და ხის იატაკის უნივერსალური საწმენდი, 3ლიტ.",
    "en": "Bagi Oranit Universal Granite & Wood Floor Cleaner 3L",
    "ru": "Баги Оранит Универсальное средство для гранита и деревянных полов 3л"
  },
  "price": 33.9,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/232.jpg"]
},
{
  "id": 473,
  "barcode": "9107",
  "title": {
    "ka": "ბაგის ორანიტი, გრანიტის და ხის იატაკის უნივერსალური საწმენდი, 500მლ.",
    "en": "Bagi Oranit Universal Granite & Wood Floor Cleaner 500ml",
    "ru": "Баги Оранит Универсальное средство для гранита и деревянных полов 500мл"
  },
  "price": 12.95,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/9107.jpg"]
},
{
  "id": 474,
  "barcode": "5583",
  "title": {
    "ka": "ბაგის პარკეტი ბლესკი, პარკეტის იატაკის საწმენდი დამცავი ცვილით, 1ლიტ.",
    "en": "Bagi Parquet Blesk Parquet Cleaner with Protective Wax 1L",
    "ru": "Баги Паркет Блеск Средство для паркета с защитным воском 1л"
  },
  "price": 24.95,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5583.jpg"]
},
{
  "id": 475,
  "barcode": "8412",
  "title": {
    "ka": "ბაგის პარკეტი, პარკეტის იატაკის საწმენდი, 500მლ.",
    "en": "Bagi Parquet Parquet Floor Cleaner 500ml",
    "ru": "Баги Паркет Средство для мытья паркета 500мл"
  },
  "price": 14.7,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/8412.jpg"]
},
{
  "id": 476,
  "barcode": "294",
  "title": {
    "ka": "ბაგის პერფექტ სოლი, ჭურჭლის სარცხი მანქანის გამწმენდი მარილი, 1,1 ლიტ.",
    "en": "Bagi Perfect Sol Dishwasher Salt 1.1L",
    "ru": "Баги Перфект Соль Соль для посудомоечных машин 1.1л"
  },
  "price": 17.65,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/294.jpg"]
},
{
  "id": 477,
  "barcode": "5057",
  "title": {
    "ka": "ბაგის პოთხანი, მილების გამწმენდი გრანულები, 600გრ.",
    "en": "Bagi Pothan Drain Cleaner Granules 600g",
    "ru": "Баги Потхан Гранулы для прочистки труб 600г"
  },
  "price": 22.55,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5057.jpg"]
},
{
  "id": 478,
  "barcode": "8238",
  "title": {
    "ka": "ბაგის ჟაველი ლიმონი, უნიტაზის საწმენდი, 650მლ.",
    "en": "Bagi Javel Lemon Toilet Bowl Cleaner 650ml",
    "ru": "Баги Жавель Лимон Средство для чистки унитаза 650мл"
  },
  "price": 15.45,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/8238.jpg"]
},
{
  "id": 479,
  "barcode": "8450",
  "title": {
    "ka": "ბაგის რაიტიტი, ავეჯის საწმენდი, 400მლ.",
    "en": "Bagi Raytit Furniture Polish & Cleaner 400ml",
    "ru": "Баги Райтит Средство для чистки мебели 400мл"
  },
  "price": 15.95,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/8450.jpg"]
},
{
  "id": 480,
  "barcode": "8474",
  "title": {
    "ka": "ბაგის სილიკონი, მინების და სარკეების საწმენდი სილიკონით, 500მლ.",
    "en": "Bagi Silicone Glass & Mirror Cleaner with Silicone 500ml",
    "ru": "Баги Силикон Средство для стекол и зеркал с силиконом 500мл"
  },
  "price": 13.8,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/8474.jpg"]
},
{
  "id": 481,
  "barcode": "8498",
  "title": {
    "ka": "ბაგის ტყავის საწმენდი, გამწმენდი, მკვებავი, განმაახლებელი, 400მლ.",
    "en": "Bagi Leather Cleaner, Conditioner & Restorer 400ml",
    "ru": "Баги Средство для чистки кожи, очиститель, питающий и восстанавливающий 400мл"
  },
  "price": 15.85,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/8498.jpg"]
},
{
  "id": 482,
  "barcode": "5798",
  "title": {
    "ka": "ბაგის შამპოლიში, ჭურჭლის სარეცხი ჟელე, 750მლ.",
    "en": "Bagi Shampolish Dishwashing Gel 750ml",
    "ru": "Баги Шамполиш Гель для мытья посуды 750мл"
  },
  "price": 14.35,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5798.jpg"]
},
{
  "id": 483,
  "barcode": "5262",
  "title": {
    "ka": "ბაგის შტიხონიტი, ნაჭრის რბილი ავეჯის, მანქანის სალონის საწმენდი, 500მლ.",
    "en": "Bagi Shtihonit Upholstery & Car Interior Cleaner 500ml",
    "ru": "Баги Штихонит Средство для чистки мягкой мебели и салона авто 500мл"
  },
  "price": 17.15,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5262.jpg"]
},
{
  "id": 484,
  "barcode": "140",
  "title": {
    "ka": "ბაგის შუმანიტი, ცხიმების მოსაშორებელი ემალირებული ზედაპირიდან, 3ლიტ.",
    "en": "Bagi Shumanit Grease Remover for Enameled Surfaces 3L",
    "ru": "Баги Шуманит Жироудалитель для эмалированных поверхностей 3л"
  },
  "price": 61.55,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/140.jpg"]
},
{
  "id": 485,
  "barcode": "8559",
  "title": {
    "ka": "ბაგის შუმანიტი, ცხიმების მოსაშორებელი ემალირებული ზედაპირიდან, 400მლ.",
    "en": "Bagi Shumanit Grease Remover for Enameled Surfaces 400ml",
    "ru": "Баги Шуманит Жироудалитель для эмалированных поверхностей 400мл"
  },
  "price": 15.95,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/8559.jpg"]
},
{
  "id": 486,
  "barcode": "5675",
  "title": {
    "ka": "ბაგის შუმანიტი, ცხიმების მოსაშორებელი ემალირებული ზედაპირიდან, 750მლ.",
    "en": "Bagi Shumanit Grease Remover for Enameled Surfaces 750ml",
    "ru": "Баги Шуманит Жироудалитель для эмалированных поверхностей 750мл"
  },
  "price": 22.55,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5675.jpg"]
},
{
  "id": 487,
  "barcode": "5682",
  "title": {
    "ka": "ბაგის შუმანიტი, ცხიმების მოსაშორებელი მინის გაზქურებისთვის, 500მლ.",
    "en": "Bagi Shumanit Grease Remover for Glass Ceramic Stoves 500ml",
    "ru": "Баги Шуманит Жироудалитель для стеклокерамических плит 500мл"
  },
  "price": 17.75,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5682.jpg"]
},
{
  "id": 488,
  "barcode": "997",
  "title": {
    "ka": "ბაგის ჩუდო ღრუბელი, ჭურჭლის სარეცხი ტეფლონის ღრუბელი, 1ც.",
    "en": "Bagi Miracle Sponge Dishwashing Teflon Sponge 1pc",
    "ru": "Баги Чудо Губка Губка для мытья посуды с тефлоновым покрытием 1шт"
  },
  "price": 3.4,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/997.jpg"]
},
{
  "id": 489,
  "barcode": "911",
  "title": {
    "ka": "ბაგის ჩუდო ხელსახოცი, მრავალჯერადი ხელსახოცი ყველა ზედაპირისთვის, თეთრი, 20x20სმ, 180ც.",
    "en": "Bagi Miracle Wipe Multi-Use All Surface Wipe White 20x20cm 180pcs",
    "ru": "Баги Чудо Салфетка Многоразовая салфетка для всех поверхностей белая 20x20см 180шт"
  },
  "price": 19.8,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/911.jpg"]
},
{
  "id": 490,
  "barcode": "935",
  "title": {
    "ka": "ბაგის ჩუდო, უნივერსალური მრავალჯერადი ხელსახოცი, თეთრი, 25x22სმ, 140ც.",
    "en": "Bagi Miracle Wipe Universal Multi-Use Wipe White 25x22cm 140pcs",
    "ru": "Баги Чудо Универсальная многоразовая салфетка белая 25x22см 140шт"
  },
  "price": 18.3,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/935.jpg"]
},
{
  "id": 491,
  "barcode": "5569",
  "title": {
    "ka": "ბაგის ჩუდო, უნივერსალური მრავალჯერადი ხელსახოცი, ყვითელი, 25x23სმ, 33ც.",
    "en": "Bagi Miracle Wipe Universal Multi-Use Wipe Yellow 25x23cm 33pcs",
    "ru": "Баги Чудо Универсальная многоразовая салфетка желтая 25x23см 33шт"
  },
  "price": 18.9,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5569.jpg"]
},
{
  "id": 492,
  "barcode": "5972",
  "title": {
    "ka": "ბაგის ცემენტინი, რემონტის შემდგომი დასუფთავებისთვის, 1ლიტ.",
    "en": "Bagi Cementin Post-Renovation Cleaner 1L",
    "ru": "Баги Цементин Средство для уборки после ремонта 1л"
  },
  "price": 27.5,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/5972.jpg"]
},
{
  "id": 493,
  "barcode": "4104",
  "title": {
    "ka": "ბაგის ცემენტინი, რემონტის შემდგომი დასუფთავებისთვის, 500მლ.",
    "en": "Bagi Cementin Post-Renovation Cleaner 500ml",
    "ru": "Баги Цементин Средство для уборки после ремонта 500мл"
  },
  "price": 16.7,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/4104.jpg"]
},
{
  "id": 494,
  "barcode": "9235",
  "title": {
    "ka": "ბაგის პოთხანი, მილების გამწმენდი გრანულები, 70გრ.",
    "en": "Bagi Pothan Drain Cleaner Granules 70g",
    "ru": "Баги Потхан Гранулы для прочистки труб 70г"
  },
  "price": 4.8,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/9235.jpg"]
},
{
  "id": 495,
  "barcode": "9570",
  "title": {
    "ka": "ბაგის შუმანიტი, ცხიმების მოსაშორებელი ემალირებული ზედაპირიდან, 250მლ.",
    "en": "Bagi Shumanit Grease Remover for Enameled Surfaces 250ml",
    "ru": "Баги Шуманит Жироудалитель для эмалированных поверхностей 250мл"
  },
  "price": 11.3,
  "inStock": true,
  "category": "Household Goods",
  "subcategory": "bagi",
  "images": ["images/9570.jpg"]
},
  {
    id: 496,
    barcode: "",
    title: {
        ka: "ISBL375 ძაძებიანი ტილო  (მაკარონკა)",
        en: "ISBL375 ძაძებიანი ტილო  (მაკარონკა)",
        ru: "ISBL375 ძაძებიანი ტილო  (მაკარონკა)"
    },
    price: 14.8,
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo1.jpg"]
},
{
    id: 498,
    barcode: "",
    title: {
        ka: "DUST MOP 50CM (SYNTHETIC)",
        en: "DUST MOP 50CM (SYNTHETIC)",
        ru: "DUST MOP 50CM (SYNTHETIC)"
    },
    price: 15.95,
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo3.jpg"]
},

{
    id: 499,
    barcode: "",
    title: {
        ka: "STANDART MOP HOLDER იატაკის ტილოს დამჭერი",
        en: "STANDART MOP HOLDER იატაკის ტილოს დამჭერი",
        ru: "STANDART MOP HOLDER იატაკის ტილოს დამჭერი"
    },
    price: 21.5,
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo4.jpg"]
},

{
    id: 500,
    barcode: "",
    title: {
        ka: "ვედრო 22ლ BUCKET 22LT",
        en: "ვედრო 22ლ BUCKET 22LT",
        ru: "ვედრო 22ლ BUCKET 22LT"
    },
    price: 140,
    inStock: true,
    category: "Household Goods",
    subcategory: "Bucket",
    images: ["images/sameurneo5.jpg"]
},

{
    id: 501,
    barcode: "",
    title: {
        ka: "მოპის საკიდი 4 დამჭერით MOP HANGER",
        en: "მოპის საკიდი 4 დამჭერით MOP HANGER",
        ru: "მოპის საკიდი 4 დამჭერით MOP HANGER"
    },
    price: 43.75,
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo6.jpg"]
},

{
    id: 502,
    barcode: "",
    title: {
        ka: "MOP HANGER WITH ONE",
        en: "MOP HANGER WITH ONE",
        ru: "MOP HANGER WITH ONE"
    },
    price: 19,
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo7.jpg"]
},

{
    id: 503,
    barcode: "",
    title: {
        ka: "MOP HANGER WITH TWO",
        en: "MOP HANGER WITH TWO",
        ru: "MOP HANGER WITH TWO"
    },
    price: 33.7,
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo8.jpg"]
},

{
    id: 504,
    barcode: "",
    title: {
        ka: "ტუალეტის ქაღალდიT3333 (შეკვრაში 12 ცალი)",
        en: "ტუალეტის ქაღალდიT3333 (შეკვრაში 12 ცალი)",
        ru: "ტუალეტის ქაღალდიT3333 (შეკვრაში 12 ცალი)"
    },
    price: 2.65,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet paper",
    images: ["images/sameurneo9.jpg"]
},

{
    id: 505,
    barcode: "",
    title: {
        ka: "ტუალეტის ქაღალდიT8888",
        en: "ტუალეტის ქაღალდიT8888",
        ru: "ტუალეტის ქაღალდიT8888"
    },
    price: 3.7,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet paper",
    images: ["images/sameurneo10.jpg"]
},

{
    id: 506,
    barcode: "",
    title: {
        ka: "ტუალეტის ქაღალდიT6666 (შეკვრაში 12 ცალი)",
        en: "ტუალეტის ქაღალდიT6666 (შეკვრაში 12 ცალი)",
        ru: "ტუალეტის ქაღალდიT6666 (შეკვრაში 12 ცალი)"
    },
    price: 2.6,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet paper",
    images: ["images/sameurneo11.jpg"]
},

{
    id: 507,
    barcode: "",
    title: {
        ka: "ტუალეტის ქაღალდიT1111 (შეკვრაში 12 ცალი)",
        en: "ტუალეტის ქაღალდიT1111 (შეკვრაში 12 ცალი)",
        ru: "ტუალეტის ქაღალდიT1111 (შეკვრაში 12 ცალი)"
    },
    price: 3.4,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet paper",
    images: ["images/sameurneo12.jpg"]
},

{
    id: 508,
    barcode: "",
    title: {
        ka: "Multi Cream 0,5L/0,75KG საწმენდი საშუალება,",
        en: "Multi Cream 0,5L/0,75KG საწმენდი საშუალება,",
        ru: "Multi Cream 0,5L/0,75KG საწმენდი საშუალება,"
    },
    price: 11.95,
    inStock: true,
    category: "Household Goods",
    subcategory: "Cleaning agent",
    images: ["images/sameurneo13.jpg"]
},

{
    id: 509,
    barcode: "",
    title: {
        ka: "Zoma ფერია პრემიუმი (ლიმ.), ჭურჭლის სარეცხი, 5 ლ, zoma0712 (HDPE)",
        en: "Zoma ფერია პრემიუმი (ლიმ.), ჭურჭლის სარეცხი, 5 ლ, zoma0712 (HDPE)",
        ru: "Zoma ფერია პრემიუმი (ლიმ.), ჭურჭლის სარეცხი, 5 ლ, zoma0712 (HDPE)"
    },
    price: 29,
    inStock: true,
    category: "Household Goods",
    subcategory: "Cleaning agent",
    images: ["images/sameurneo14.jpg"]
},

{
    id: 510,
    barcode: "",
    title: {
        ka: "ჭურჭლის სარეცხი საშუალება ლიმონი 5ლ (PET) - zoma0711",
        en: "ჭურჭლის სარეცხი საშუალება ლიმონი 5ლ (PET) - zoma0711",
        ru: "ჭურჭლის სარეცხი საშუალება ლიმონი 5ლ (PET) - zoma0711"
    },
    price: 14,
    inStock: true,
    category: "Household Goods",
    subcategory: "Cleaning agent",
    images: ["images/sameurneo15.jpg"]
},

{
    id: 511,
    barcode: "",
    title: {
        ka: "ZEO GELE - ჭურჭლის სარეცხი საშუალება ლიმონი 500მლ (PET), ZG0500",
        en: "ZEO GELE - ჭურჭლის სარეცხი საშუალება ლიმონი 500მლ (PET), ZG0500",
        ru: "ZEO GELE - ჭურჭლის სარეცხი საშუალება ლიმონი 500მლ (PET), ZG0500"
    },
    price: 2.5,
    inStock: true,
    category: "Household Goods",
    subcategory: "Cleaning agent",
    images: ["images/sameurneo16.jpg"]
},

{
    id: 512,
    barcode: "",
    title: {
        ka: "ტუალეტის ქაღალდიT7020(შეკვრაში 26 ცალი)",
        en: "ტუალეტის ქაღალდიT7020(შეკვრაში 26 ცალი)",
        ru: "ტუალეტის ქაღალდიT7020(შეკვრაში 26 ცალი)"
    },
    price: 2,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet paper",
    images: ["images/sameurneo17.jpg"]
},

{
    id: 513,
    barcode: "",
    title: {
        ka: "ტუალეტის ქაღალდიT7777 (შეკვრაში 12 ცალი)",
        en: "ტუალეტის ქაღალდიT7777 (შეკვრაში 12 ცალი)",
        ru: "ტუალეტის ქაღალდიT7777 (შეკვრაში 12 ცალი)"
    },
    price: 3.8,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet paper",
    images: ["images/sameurneo18.jpg"]
},

{
    id: 514,
    barcode: "",
    title: {
        ka: "ხელსახოცი (რულონი)L1030 (შეკვრაში 6 ცალი)",
        en: "ხელსახოცი (რულონი)L1030 (შეკვრაში 6 ცალი)",
        ru: "ხელსახოცი (რულონი)L1030 (შეკვრაში 6 ცალი)"
    },
    price: 5.4,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/sameurneo19.jpg"]
},

{
    id: 515,
    barcode: "",
    title: {
        ka: "ხელსახოცი (რულონი)L1040 (შეკვრაში 6 ცალი)",
        en: "ხელსახოცი (რულონი)L1040 (შეკვრაში 6 ცალი)",
        ru: "ხელსახოცი (რულონი)L1040 (შეკვრაში 6 ცალი)"
    },
    price: 7.5,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/sameurneo20.jpg"]
},

{
    id: 516,
    barcode: "",
    title: {
        ka: "ხელსახოცი (რულონი)L1050(შეკვრაში 6 ცალი)",
        en: "ხელსახოცი (რულონი)L1050(შეკვრაში 6 ცალი)",
        ru: "ხელსახოცი (რულონი)L1050(შეკვრაში 6 ცალი)"
    },
    price: 8.5,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/sameurneo21.jpg"]
},

{
    id: 517,
    barcode: "",
    title: {
        ka: "DUSTPAN BROOM SET CLOSED BLUE",
        en: "DUSTPAN BROOM SET CLOSED BLUE",
        ru: "DUSTPAN BROOM SET CLOSED BLUE"
    },
    price: 27.5,
    inStock: true,
    category: "Household Goods",
    subcategory: "Broom",
    images: ["images/sameurneo22.jpg"]
},

{
    id: 518,
    barcode: "",
    title: {
        ka: "ჯოხი დაგრელების ფუნქციით TELESCOPIC POLE 1.5*3 4.5M",
        en: "ჯოხი დაგრელების ფუნქციით TELESCOPIC POLE 1.5*3 4.5M",
        ru: "ჯოხი დაგრელების ფუნქციით TELESCOPIC POLE 1.5*3 4.5M"
    },
    price: 185,
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo23.jpg"]
},

{
    id: 519,
    barcode: "",
    title: {
        ka: "შუშის საწმენდი ტილო 35 სმ",
        en: "შუშის საწმენდი ტილო 35 სმ",
        ru: "შუშის საწმენდი ტილო 35 სმ"
    },
    price: 10,
    inStock: true,
    category: "Household Goods",
    subcategory: "Cleaning",
    images: ["images/sameurneo24.jpg"]
},

{
    id: 520,
    barcode: "",
    title: {
        ka: "ZEO GELE - ჭურჭლის სარეცხი საშუალება ლიმონი 5ლ (PET), ZG5000",
        en: "ZEO GELE - ჭურჭლის სარეცხი საშუალება ლიმონი 5ლ (PET), ZG5000",
        ru: "ZEO GELE - ჭურჭლის სარეცხი საშუალება ლიმონი 5ლ (PET), ZG5000"
    },
    price: 10,
    inStock: true,
    category: "Household Goods",
    subcategory: "Cleaning agent",
    images: ["images/sameurneo25.jpg"]
},

{
    id: 521,
    barcode: "",
    title: {
        ka: "ტილოს დამჭერი 35 სმ",
        en: "ტილოს დამჭერი 35 სმ",
        ru: "ტილოს დამჭერი 35 სმ"
    },
    price: 8.45,
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo26.jpg"]
},

{
    id: 522,
    barcode: "",
    title: {
        ka: "ერთავზიანი ურიკა (ლურჯი)",
        en: "ერთავზიანი ურიკა (ლურჯი)",
        ru: "ერთავზიანი ურიკა (ლურჯი)"
    },
    price: 190,
    inStock: true,
    category: "Household Goods",
    subcategory: "Bucket",
    images: ["images/sameurneo27.jpg"]
},

{
    id: 523,
    barcode: "",
    title: {
        ka: "ორავზიანი ურიკა",
        en: "ორავზიანი ურიკა",
        ru: "ორავზიანი ურიკა"
    },
    price: 235,
    inStock: true,
    category: "Household Goods",
    subcategory: "Bucket",
    images: ["images/sameurneo28.jpg"]
},

{
    id: 524,
    barcode: "",
    title: {
        ka: "საწური ერმოპის-ლურჯი",
        en: "საწური ერმოპის-ლურჯი",
        ru: "საწური ერმოპის-ლურჯი"
    },
    price: 95,
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo29.jpg"]
},

{
    id: 525,
    barcode: "",
    title: {
        ka: "K.1-T Z Folded Paper Towel Dispenser Transp. ხელის საწმენდი ქაღალდის დისპენსერი",
        en: "K.1-T Z Folded Paper Towel Dispenser Transp. ხელის საწმენდი ქაღალდის დისპენსერი",
        ru: "K.1-T Z Folded Paper Towel Dispenser Transp. ხელის საწმენდი ქაღალდის დისპენსერი"
    },
    price: 24,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper dispensers",
    images: ["images/sameurneo30.jpg"]
},

{
    id: 526,
    barcode: "",
    title: {
        ka: "Manual Autocut Dispenser - White - ქაღალდის მექანიკური დისპენსერი თეთრი",
        en: "Manual Autocut Dispenser - White - ქაღალდის მექანიკური დისპენსერი თეთრი",
        ru: "Manual Autocut Dispenser - White - ქაღალდის მექანიკური დისპენსერი თეთრი"
    },
    price: 230,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper dispensers",
    images: ["images/sameurneo31.jpg"]
},

{
    id: 527,
    barcode: "",
    title: {
        ka: "MJ1 - Mini Jumbo WC Papear Disp. San (white) საპირფარეშოს ქაღალდის დისპენსერი",
        en: "MJ1 - Mini Jumbo WC Papear Disp. San (white) საპირფარეშოს ქაღალდის დისპენსერი",
        ru: "MJ1 - Mini Jumbo WC Papear Disp. San (white) საპირფარეშოს ქაღალდის დისპენსერი"
    },
    price: 26,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet Paper dispensers",
    images: ["images/sameurneo32.jpg"]
},

{
    id: 528,
    barcode: "",
    title: {
        ka: "Mini Jumbo WC Tissue Disp. (Transparent) საპირფარეშოს ქაღალდის დისპენსერი",
        en: "Mini Jumbo WC Tissue Disp. (Transparent) საპირფარეშოს ქაღალდის დისპენსერი",
        ru: "Mini Jumbo WC Tissue Disp. (Transparent) საპირფარეშოს ქაღალდის დისპენსერი"
    },
    price: 25.5,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet Paper dispensers",
    images: ["images/sameurneo33.jpg"]
},

{
    id: 529,
    barcode: "",
    title: {
        ka: "მოპის ტილო 60სმ მწვანე SPECIAL TUFTED DAMP MOP 60 CM-GREEN",
        en: "მოპის ტილო 60სმ მწვანე SPECIAL TUFTED DAMP MOP 60 CM-GREEN",
        ru: "მოპის ტილო 60სმ მწვანე SPECIAL TUFTED DAMP MOP 60 CM-GREEN"
    },
    price: 14,
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo34.jpg"]
},

{
    id: 530,
    barcode: "",
    title: {
        ka: "მოპის დამჭერი ლითონის (ლურჯი)",
        en: "მოპის დამჭერი ლითონის (ლურჯი)",
        ru: "მოპის დამჭერი ლითონის (ლურჯი)"
    },
    price: 11,
    sizes: [ { name: "80", price: 11.00 }, { name: "60", price: 10.70 }, { name: "100", price: 11.70 } ],
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo35.jpg"]

},

{
    id: 531,
    barcode: "",
    title: {
        ka: "საშხვეპი 75სმ FLOOR WIPER 75 CM BLUE",
        en: "საშხვეპი 75სმ FLOOR WIPER 75 CM BLUE",
        ru: "საშხვეპი 75სმ FLOOR WIPER 75 CM BLUE"
    },
    price: 34,
     sizes: [ { name: "55", price: 26.00 }, { name: "75", price: 34.0 }, ],
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo36.jpg"]
},

{
    id: 532,
    barcode: "",
    title: {
        ka: "CAUTION BOARD",
        en: "CAUTION BOARD",
        ru: "CAUTION BOARD"
    },
    price: 40,
    inStock: true,
    category: "Household Goods",
    subcategory: "Security",
    images: ["images/sameurneo37.jpg"]
},

{
    id: 533,
    barcode: "",
    title: {
        ka: "K6C - C FOLDED TOILET TISSUE DISPENSER WHITE დაკეცილი ტუალეტის ქაღალდის დისპენსერი თეთრი",
        en: "K6C - C FOLDED TOILET TISSUE DISPENSER WHITE დაკეცილი ტუალეტის ქაღალდის დისპენსერი თეთრი",
        ru: "K6C - C FOLDED TOILET TISSUE DISPENSER WHITE დაკეცილი ტუალეტის ქაღალდის დისპენსერი თეთრი"
    },
    price: 17,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet Paper dispensers",
    images: ["images/sameurneo38.jpg"]
},

{
    id: 534,
    barcode: "",
    title: {
        ka: "C FOLDED TOILET TISSUE DISPENSER TRANSPARENT",
        en: "C FOLDED TOILET TISSUE DISPENSER TRANSPARENT",
        ru: "C FOLDED TOILET TISSUE DISPENSER TRANSPARENT"
    },
    price: 11,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet Paper dispensers",
    images: ["images/sameurneo39.jpg"]
},

{
    id: 535,
    barcode: "",
    title: {
        ka: "S5 - soap disp. with tank 500ml/white თხევადი საპნის და სადეზინფექციო საშუალებების დისპენსერი",
        en: "S5 - soap disp. with tank 500ml/white თხევადი საპნის და სადეზინფექციო საშუალებების დისპენსერი",
        ru: "S5 - soap disp. with tank 500ml/white თხევადი საპნის და სადეზინფექციო საშუალებების დისპენსერი"
    },
    price: 20,
    inStock: true,
    category: "Household Goods",
    subcategory: "Soap dispensers",
    images: ["images/sameurneo40.jpg"]
},

{
    id: 536,
    barcode: "",
    title: {
        ka: "S2 LIQUID SOAP DISP. 500ML WHITE თხევადი საპნის დისპენსერი თეთრი",
        en: "S2 LIQUID SOAP DISP. 500ML WHITE თხევადი საპნის დისპენსერი თეთრი",
        ru: "S2 LIQUID SOAP DISP. 500ML WHITE თხევადი საპნის დისპენსერი თეთრი"
    },
    price: 10,
    inStock: true,
    category: "Household Goods",
    subcategory: "Soap dispensers",
    images: ["images/sameurneo41.jpg"]
},

{
    id: 537,
    barcode: "",
    title: {
        ka: "Zoma Drainex - საკანალიზაციო მილების საწმენდი, 1 kg. (12 ცალი/ყუთში)",
        en: "Zoma Drainex - საკანალიზაციო მილების საწმენდი, 1 kg. (12 ცალი/ყუთში)",
        ru: "Zoma Drainex - საკანალიზაციო მილების საწმენდი, 1 kg. (12 ცალი/ყუთში)"
    },
    price: 22,
    inStock: true,
    category: "Household Goods",
    subcategory: "Sewer cleaning agents",
    images: ["images/sameurneo42.jpg"]
},

{
    id: 538,
    barcode: "",
    title: {
        ka: "ქაღალდის ხელსახოცი Z ტიპის Z6031  (შეკვრაში 15 ცალი)",
        en: "ქაღალდის ხელსახოცი Z ტიპის Z6031  (შეკვრაში 15 ცალი)",
        ru: "ქაღალდის ხელსახოცი Z ტიპის Z6031  (შეკვრაში 15 ცალი)"
    },
    price: 2.2,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/sameurneo43.jpg"]
},

{
    id: 539,
    barcode: "",
    title: {
        ka: "ქაღალდის ხელსახოცი Z ტიპის Z6007 (შეკვრაში 20 ცალი)",
        en: "ქაღალდის ხელსახოცი Z ტიპის Z6007 (შეკვრაში 20 ცალი)",
        ru: "ქაღალდის ხელსახოცი Z ტიპის Z6007 (შეკვრაში 20 ცალი)"
    },
    price: 2.25,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/sameurneo44.jpg"]
},

{
    id: 540,
    barcode: "",
    title: {
        ka: "ქაღალდის ხელსახოცი Z ტიპის Z4011 (შეკვრაში 15 ცალი)",
        en: "ქაღალდის ხელსახოცი Z ტიპის Z4011 (შეკვრაში 15 ცალი)",
        ru: "ქაღალდის ხელსახოცი Z ტიპის Z4011 (შეკვრაში 15 ცალი)"
    },
    price: 2.15,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/sameurneo45.jpg"]
},

{
    id: 541,
    barcode: "",
    title: {
        ka: "ჩუდესა-მიკროფიბრა \"კლეტკა\", 40*40, მ/ტ, ცისფერი",
        en: "ჩუდესა-მიკროფიბრა \"კლეტკა\", 40*40, მ/ტ, ცისფერი",
        ru: "ჩუდესა-მიკროფიბრა \"კლეტკა\", 40*40, მ/ტ, ცისფერი"
    },
    price: 1.35,
    inStock: true,
    category: "Household Goods",
    subcategory: "Cleaning",
    images: ["images/sameurneo46.jpg"]
},

{
    id: 542,
    barcode: "",
    title: {
        ka: "ჩუდესა-მიკროფიბრა ბრაითი, 60*80, ი/ტ, ლურჯი",
        en: "ჩუდესა-მიკროფიბრა ბრაითი, 60*80, ი/ტ, ლურჯი",
        ru: "ჩუდესა-მიკროფიბრა ბრაითი, 60*80, ი/ტ, ლურჯი"
    },
    price: 3.8,
    inStock: true,
    category: "Household Goods",
    subcategory: "Cleaning",
    images: ["images/sameurneo47.jpg"]
},

{
    id: 543,
    barcode: "",
    title: {
        ka: "WIPEXPERT 120 Super Strong 4C Extended Use Wipes  122 120B- 33x42cm- 25pcs/bag - ლურჯი",
        en: "WIPEXPERT 120 Super Strong 4C Extended Use Wipes  122 120B- 33x42cm- 25pcs/bag - ლურჯი",
        ru: "WIPEXPERT 120 Super Strong 4C Extended Use Wipes  122 120B- 33x42cm- 25pcs/bag - ლურჯი"
    },
    price: 21.9,
    inStock: true,
    category: "Household Goods",
    subcategory: "Cleaning",
    images: ["images/sameurneo48.jpg"]
},

{
    id: 544,
    barcode: "",
    title: {
        ka: "ZEN Gagra Legends - გაგრის ლეგენდები 120მლ",
        en: "ZEN Gagra Legends - გაგრის ლეგენდები 120მლ",
        ru: "ZEN Gagra Legends - გაგრის ლეგენდები 120მლ"
    },
    price: 25,
    inStock: true,
    category: "Household Goods",
    subcategory: "Other",
    images: ["images/sameurneo49.jpg"]
},

{
    id: 545,
    barcode: "",
    title: {
        ka: "ZEN Sokhumi Dream - სოხუმის ოცნება 120მლ",
        en: "ZEN Sokhumi Dream - სოხუმის ოცნება 120მლ",
        ru: "ZEN Sokhumi Dream - სოხუმის ოცნება 120მლ"
    },
    price: 25,
    inStock: true,
    category: "Household Goods",
    subcategory: "Other",
    images: ["images/sameurneo50.jpg"]
},
{
    id: 551,
    barcode: "",
    title: {
        ka: "მოპის დამჭერი ლითონის (ლურჯი)",
        en: "მოპის დამჭერი ლითონის (ლურჯი)",
        ru: "მოპის დამჭერი ლითონის (ლურჯი)"
    },
    price: 11,
    sizes: [ { name: "50", price: 10.20 }, { name: "40", price: 10.40 }, ],
    inStock: true,
    category: "Household Goods",
    subcategory: "Floor",
    images: ["images/sameurneo51.jpg"]

},
{
  id: 552,
  barcode: "1881",
  title: {
    ka: "KDUSB2002-1M, KINGDA, USB 2.0 A female to micro B 5Pin male cable,CU ,1M",
    en: "KDUSB2002-1M, KINGDA, USB 2.0 A female to micro B 5Pin male cable,CU ,1M",
    ru: "KDUSB2002-1M, KINGDA, USB 2.0 A female to micro B 5Pin male cable,CU ,1M"
  },
  price: 2.6,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/1881.webp"]
},
{
  id: 553,
  barcode: "2965",
  title: {
    ka: "PP12-2M CAT5e UTP Patch cord, gray, 2m GEMBIRD Cablexpert",
    en: "PP12-2M CAT5e UTP Patch cord, gray, 2m GEMBIRD Cablexpert",
    ru: "PP12-2M CAT5e UTP Patch cord, gray, 2m GEMBIRD Cablexpert"
  },
  price: 3.0,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/2965.webp"]
},
{
  id: 554,
  barcode: "2118",
  title: {
    ka: "Printer High Quality cable USB 1.5m",
    en: "Printer High Quality cable USB 1.5m",
    ru: "Printer High Quality cable USB 1.5m"
  },
  price: 3.1,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/2118.webp"]
},
{
  id: 555,
  barcode: "2514",
  title: {
    ka: "Y-C451GBK Unitek USB 2.0 to Micro USB Charging Data sync Cable, Black, 1M, 0.25Y",
    en: "Y-C451GBK Unitek USB 2.0 to Micro USB Charging Data sync Cable, Black, 1M, 0.25Y",
    ru: "Y-C451GBK Unitek USB 2.0 to Micro USB Charging Data sync Cable, Black, 1M, 0.25Y"
  },
  price: 3.2,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/2514.webp"]
},
{
  id: 556,
  barcode: "946",
  title: {
    ka: "FEF-H-001, Kingda, HDMI female to HDMI female adaptor",
    en: "FEF-H-001, Kingda, HDMI female to HDMI female adaptor",
    ru: "FEF-H-001, Kingda, HDMI female to HDMI female adaptor"
  },
  price: 3.3,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/946.webp"]
},
{
  id: 557,
  barcode: "2513",
  title: {
    ka: "Y-C442GBK, UNITEK, 1.5M USB 2.0 USB-A (M) to USB-A (M) Cable",
    en: "Y-C442GBK, UNITEK, 1.5M USB 2.0 USB-A (M) to USB-A (M) Cable",
    ru: "Y-C442GBK, UNITEK, 1.5M USB 2.0 USB-A (M) to USB-A (M) Cable"
  },
  price: 3.5,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/2513.webp"]
},
{
  id: 558,
  barcode: "948",
  title: {
    ka: "FEF-V-001, Kingda, VGA female to VGA female adaptor",
    en: "FEF-V-001, Kingda, VGA female to VGA female adaptor",
    ru: "FEF-V-001, Kingda, VGA female to VGA female adaptor"
  },
  price: 4.1,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/948.webp"]
},
{
  id: 559,
  barcode: "1888",
  title: {
    ka: "KDUSB3001-0.5M, KINGDA USB Plug Cable to USB 3.0 Micro B Plug for external HDD 0,5 m",
    en: "KDUSB3001-0.5M, KINGDA USB Plug Cable to USB 3.0 Micro B Plug for external HDD 0,5 m",
    ru: "KDUSB3001-0.5M, KINGDA USB Plug Cable to USB 3.0 Micro B Plug for external HDD 0,5 m"
  },
  price: 4.2,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/1888.webp"]
},
{
  id: 560,
  barcode: "2806",
  title: {
    ka: "PP12-5M CAT5e UTP Patch cord, 5m GEMBIRD Cablexpert",
    en: "PP12-5M CAT5e UTP Patch cord, 5m GEMBIRD Cablexpert",
    ru: "PP12-5M CAT5e UTP Patch cord, 5m GEMBIRD Cablexpert"
  },
  price: 5.0,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/2806.webp"]
},
{
  id: 561,
  barcode: "2505",
  title: {
    ka: "Y-C137M,UNITEK 1.5M, HDMI (M) to HDMI (M) Cable 4K 60Hz",
    en: "Y-C137M,UNITEK 1.5M, HDMI (M) to HDMI (M) Cable 4K 60Hz",
    ru: "Y-C137M,UNITEK 1.5M, HDMI (M) to HDMI (M) Cable 4K 60Hz"
  },
  price: 7.7,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/2505.webp"]
},
{
  id: 562,
  barcode: "23",
  title: {
    ka: "A1046A, UNITEK, Adapter, 90° & 270° Right Angle HDMI Adapter 8K 60Hz & 4K 120Hz.",
    en: "A1046A, UNITEK, Adapter, 90° & 270° Right Angle HDMI Adapter 8K 60Hz & 4K 120Hz.",
    ru: "A1046A, UNITEK, Adapter, 90° & 270° Right Angle HDMI Adapter 8K 60Hz & 4K 120Hz."
  },
  price: 8.5,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/23.webp"]
},
{
  id: 563,
  barcode: "1893",
  title: {
    ka: "KDUSBC3005, KINGDA Type C Plug Cable to USB 3.0 Micro B Plug for external HDD 0,5 m",
    en: "KDUSBC3005, KINGDA Type C Plug Cable to USB 3.0 Micro B Plug for external HDD 0,5 m",
    ru: "KDUSBC3005, KINGDA Type C Plug Cable to USB 3.0 Micro B Plug for external HDD 0,5 m"
  },
  price: 8.9,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/1893.webp"]
},
{
  id: 564,
  barcode: "1900",
  title: {
    ka: "KDUSBSTE4001, Kingda Type C To 3.5 audio for android - stereo with mic",
    en: "KDUSBSTE4001, Kingda Type C To 3.5 audio for android - stereo with mic",
    ru: "KDUSBSTE4001, Kingda Type C To 3.5 audio for android - stereo with mic"
  },
  price: 9.5,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/1900.webp"]
},
{
  id: 565,
  barcode: "3678",
  title: {
    ka: "VAA-B06-B200 , Cable, Cable, .2K, 3D, 4K, Full HD 1080p, UHD 2160p .",
    en: "VAA-B06-B200 , Cable, Cable, .2K, 3D, 4K, Full HD 1080p, UHD 2160p .",
    ru: "VAA-B06-B200 , Cable, Cable, .2K, 3D, 4K, Full HD 1080p, UHD 2160p ."
  },
  price: 9.5,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/3678.webp"]
},
{
  id: 566,
  barcode: "1905",
  title: {
    ka: "KDVGA1001-3M, Kingda, 3+4 VGA Cable,Al shield,Copper,Nickel Plated Connector,double Ferrites,0.8mm",
    en: "KDVGA1001-3M, Kingda, 3+4 VGA Cable,Al shield,Copper,Nickel Plated Connector,double Ferrites,0.8mm",
    ru: "KDVGA1001-3M, Kingda, 3+4 VGA Cable,Al shield,Copper,Nickel Plated Connector,double Ferrites,0.8mm"
  },
  price: 9.8,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/1905.webp"]
},
{
  id: 567,
  barcode: "684",
  title: {
    ka: "AV141 UGREEN (30620) 3.5mm male to 2 Female Audio Cable ABS Case (Black)",
    en: "AV141 UGREEN (30620) 3.5mm male to 2 Female Audio Cable ABS Case (Black)",
    ru: "AV141 UGREEN (30620) 3.5mm male to 2 Female Audio Cable ABS Case (Black)"
  },
  price: 11.0,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/684.webp"]
},
{
  id: 568,
  barcode: "2805",
  title: {
    ka: "PP12-15M, Cablexpert CAT5e UTP Patch cord, gray, 15 m GEMBIRD",
    en: "PP12-15M, Cablexpert CAT5e UTP Patch cord, gray, 15 m GEMBIRD",
    ru: "PP12-15M, Cablexpert CAT5e UTP Patch cord, gray, 15 m GEMBIRD"
  },
  price: 11.2,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/2805.webp"]
},
{
  id: 569,
  barcode: "1092",
  title: {
    ka: "KDHMAD7001B, KINGDA, HDMI to VGA Adaptor",
    en: "KDHMAD7001B, KINGDA, HDMI to VGA Adaptor",
    ru: "KDHMAD7001B, KINGDA, HDMI to VGA Adaptor"
  },
  price: 12.0,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/1092.webp"]
},
{
  id: 570,
  barcode: "609",
  title: {
    ka: "ACC-A2CC-3A, GENIUS Fast charging USB 3.0 1.5m, and sync a USB-C device from any USB-A charger, Black",
    en: "ACC-A2CC-3A, GENIUS Fast charging USB 3.0 1.5m, and sync a USB-C device from any USB-A charger, Black",
    ru: "ACC-A2CC-3A, GENIUS Fast charging USB 3.0 1.5m, and sync a USB-C device from any USB-A charger, Black"
  },
  price: 13.0,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/609.webp"]
},
{
  id: 571,
  barcode: "714",
  title: {
    ka: "C14059BK, UNITEK, 2M USB-C CM to CM PD 100W Charging Cable",
    en: "C14059BK, UNITEK, 2M USB-C CM to CM PD 100W Charging Cable",
    ru: "C14059BK, UNITEK, 2M USB-C CM to CM PD 100W Charging Cable"
  },
  price: 13.2,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/714.webp"]
},
{
  id: 572,
  barcode: "2871",
  title: {
    ka: "LALBH, VENTION, USB 2.0 Type-C Male to Lightning Male 3A Cable 2M Aluminum Alloy Type.",
    en: "LALBH, VENTION, USB 2.0 Type-C Male to Lightning Male 3A Cable 2M Aluminum Alloy Type.",
    ru: "LALBH, VENTION, USB 2.0 Type-C Male to Lightning Male 3A Cable 2M Aluminum Alloy Type."
  },
  price: 14.5,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/2871.webp"]
},
{
  id: 573,
  barcode: "1105",
  title: {
    ka: "KDMHLHM8016, Kingda,MHL to HDMI adapter",
    en: "KDMHLHM8016, Kingda,MHL to HDMI adapter",
    ru: "KDMHLHM8016, Kingda,MHL to HDMI adapter"
  },
  price: 18.5,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/1105.webp"]
},
{
  id: 574,
  barcode: "3674",
  title: {
    ka: "HACBH DP, Cable, HACBH DP Cable 2M Black.",
    en: "HACBH DP, Cable, HACBH DP Cable 2M Black.",
    ru: "HACBH DP, Cable, HACBH DP Cable 2M Black."
  },
  price: 20.0,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/3674.webp"]
},
{
  id: 575,
  barcode: "2489",
  title: {
    ka: "Y-277,UNITEK 5M, USB2.0 Active Extension Cable",
    en: "Y-277,UNITEK 5M, USB2.0 Active Extension Cable",
    ru: "Y-277,UNITEK 5M, USB2.0 Active Extension Cable"
  },
  price: 23.8,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/2489.webp"]
},
{
  id: 576,
  barcode: "2438",
  title: {
    ka: "V1608A, UNITEK 1.8M, DP1.2 To HDMI 4K 60Hz Adapter Cable, Balck",
    en: "V1608A, UNITEK 1.8M, DP1.2 To HDMI 4K 60Hz Adapter Cable, Balck",
    ru: "V1608A, UNITEK 1.8M, DP1.2 To HDMI 4K 60Hz Adapter Cable, Balck"
  },
  price: 31.1,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/2438.webp"]
},
{
  id: 577,
  barcode: "2437",
  title: {
    ka: "V1423C, UNITEK 1.8M, USB-C To DP1.4 8K 60Hz Adapter Cable, Space Grey",
    en: "V1423C, UNITEK 1.8M, USB-C To DP1.4 8K 60Hz Adapter Cable, Space Grey",
    ru: "V1423C, UNITEK 1.8M, USB-C To DP1.4 8K 60Hz Adapter Cable, Space Grey"
  },
  price: 39.6,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/2437.webp"]
},
{
  id: 578,
  barcode: "2414",
  title: {
    ka: "UGREEN CM596 (90748), Bluetooth, AUX, Car Adapter, Black",
    en: "UGREEN CM596 (90748), Bluetooth, AUX, Car Adapter, Black",
    ru: "UGREEN CM596 (90748), Bluetooth, AUX, Car Adapter, Black"
  },
  price: 49.5,
  inStock: true,
  category: "computers",
  subcategory: "Cabels",
  images: ["images/2414.webp"]
},
{
  id: 579,
  barcode: "66010199425",
  title: {
    ka: "Extensa 15 EX215-56-390J, ACER, Notebook, 15.6\" FHD Intel Core 3 100U 16GB 512GB SSD.",
    en: "Extensa 15 EX215-56-390J, ACER, Notebook, 15.6\" FHD Intel Core 3 100U 16GB 512GB SSD.",
    ru: "Extensa 15 EX215-56-390J, ACER, Notebook, 15.6\" FHD Intel Core 3 100U 16GB 512GB SSD."
  },
  price: 1599.0,
  inStock: true,
  category: "computers",
  subcategory: "Leptops",
  images: ["images/66010199425.webp"]
},
{
  id: 580,
  barcode: "66010198216",
  title: {
    ka: "HP OmniBook 5 16\" 2K (1920x1200) Ultra 5-225U, 16GB DDR5X 7467 MT/s, 512GB, Sky blue, aluminum AI PC CanopyR 25C1, C09G3EA",
    en: "HP OmniBook 5 16\" 2K (1920x1200) Ultra 5-225U, 16GB DDR5X 7467 MT/s, 512GB, Sky blue, aluminum AI PC CanopyR 25C1, C09G3EA",
    ru: "HP OmniBook 5 16\" 2K (1920x1200) Ultra 5-225U, 16GB DDR5X 7467 MT/s, 512GB, Sky blue, aluminum AI PC CanopyR 25C1, C09G3EA"
  },
  price: 2575.0,
  inStock: true,
  category: "computers",
  subcategory: "Leptops",
  images: ["images/66010198216.webp"]
},
{
  id: 581,
  barcode: "66010198753",
  title: {
    ka: "Thinkpad E16 G3 Lenovo, Notebook, 16\" FHD+ Ultra 7 255H 16C, 16GB. 512GB M.2, DOS,2Y.",
    en: "Thinkpad E16 G3 Lenovo, Notebook, 16\" FHD+ Ultra 7 255H 16C, 16GB. 512GB M.2, DOS,2Y.",
    ru: "Thinkpad E16 G3 Lenovo, Notebook, 16\" FHD+ Ultra 7 255H 16C, 16GB. 512GB M.2, DOS,2Y."
  },
  price: 3696.0,
  inStock: true,
  category: "computers",
  subcategory: "Leptops",
  images: ["images/66010198753.webp"]
},
{
  id: 582,
  barcode: "66010193891",
  title: {
    ka: "Lenovo Legion Pro 7, 16\"2.5K OLED 240Hz U9 275HX, 64GB, 1TB, RTX5090-24G, 16IAX10H",
    en: "Lenovo Legion Pro 7, 16\"2.5K OLED 240Hz U9 275HX, 64GB, 1TB, RTX5090-24G, 16IAX10H",
    ru: "Lenovo Legion Pro 7, 16\"2.5K OLED 240Hz U9 275HX, 64GB, 1TB, RTX5090-24G, 16IAX10H"
  },
  price: 13311.0,
  inStock: true,
  category: "computers",
  subcategory: "Leptops",
  images: ["images/66010193891.webp"]
},
{
  id: 583,
  barcode: "66010197462",
  title: {
    ka: "DAHUA A200Y Monitor 23.8\"",
    en: "DAHUA A200Y Monitor 23.8\"",
    ru: "DAHUA A200Y Monitor 23.8\""
  },
  price: 217.0,
  inStock: true,
  category: "computers",
  subcategory: "Monitors",
  images: ["images/66010197462.webp"]
},
{
  id: 584,
  barcode: "66010199424",
  title: {
    ka: "Acer Nitro KG240YP0BI 23.8\" FHD gaming Monitor",
    en: "Acer Nitro KG240YP0BI 23.8\" FHD gaming Monitor",
    ru: "Acer Nitro KG240YP0BI 23.8\" FHD gaming Monitor"
  },
  price: 245.0,
  inStock: true,
  category: "computers",
  subcategory: "Monitors",
  images: ["images/66010199424.webp"]
},
{
  id: 585,
  barcode: "66010190334",
  title: {
    ka: "Philips 24E1N1100A/01 Monitor 23,8\"",
    en: "Philips 24E1N1100A/01 Monitor 23,8\"",
    ru: "Philips 24E1N1100A/01 Monitor 23,8\""
  },
  price: 246.0,
  inStock: true,
  category: "computers",
  subcategory: "Monitors",
  images: ["images/66010190334.webp"]
},
{
  id: 586,
  barcode: "66010192489",
  title: {
    ka: "SAMSUNG Essential S3 S30GD LS27D300 Monitor 27\"",
    en: "SAMSUNG Essential S3 S30GD LS27D300 Monitor 27\"",
    ru: "SAMSUNG Essential S3 S30GD LS27D300 Monitor 27\""
  },
  price: 342.0,
  inStock: true,
  category: "computers",
  subcategory: "Monitors",
  images: ["images/66010192489.webp"]
},
{
  id: 587,
  barcode: "66010199392",
  title: {
    ka: "SE2726H, DELL, Monitor, 27\" 2хHDMI, IPS, 144Hz, FreeSyncc.",
    en: "SE2726H, DELL, Monitor, 27\" 2хHDMI, IPS, 144Hz, FreeSyncc.",
    ru: "SE2726H, DELL, Monitor, 27\" 2хHDMI, IPS, 144Hz, FreeSyncc."
  },
  price: 365.0,
  inStock: true,
  category: "computers",
  subcategory: "Monitors",
  images: ["images/66010199392.webp"]
},
{
  id: 588,
  barcode: "66010198601",
  title: {
    ka: "LG 29U531A-W 29\" UltraWide 21:9 WFHD Monitor",
    en: "LG 29U531A-W 29\" UltraWide 21:9 WFHD Monitor",
    ru: "LG 29U531A-W 29\" UltraWide 21:9 WFHD Monitor"
  },
  price: 702.0,
  inStock: true,
  category: "computers",
  subcategory: "Monitors",
  images: ["images/66010198601.webp"]
},
{
  id: 589,
  barcode: "FC-202",
  title: {
    ka: "მაუსი FC-202",
    en: "მაუსი FC-202",
    ru: "მაუსი FC-202"
  },
  price: 8.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/FC-202.webp"]
},
{
  id: 590,
  barcode: "RF-4000",
  title: {
    ka: "მაუსი RF-4000",
    en: "მაუსი RF-4000",
    ru: "მაუსი RF-4000"
  },
  price: 12.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/RF-4000.webp"]
},
{
  id: 591,
  barcode: "RF-2812",
  title: {
    ka: "მაუსი RF-2812",
    en: "მაუსი RF-2812",
    ru: "მაუსი RF-2812"
  },
  price: 13.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/RF-2812.webp"]
},
{
  id: 592,
  barcode: "RF-5084B",
  title: {
    ka: "მაუსი RF-5084B",
    en: "მაუსი RF-5084B",
    ru: "მაუსი RF-5084B"
  },
  price: 13.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/RF-5084B.webp"]
},
{
  id: 593,
  barcode: "21*26*0.3",
  title: {
    ka: "მაუსის დასადები 21*26*0.3",
    en: "მაუსის დასადები 21*26*0.3",
    ru: "მაუსის დასადები 21*26*0.3"
  },
  price: 2.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/21260.3.webp"]
},
{
  id: 594,
  barcode: "3691პ",
  title: {
    ka: "მაუსის დასადები 3691",
    en: "მაუსის დასადები 3691",
    ru: "მაუსის დასადები 3691"
  },
  price: 6.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/3691პ.webp"]
},
{
  id: 595,
  barcode: "30*25",
  title: {
    ka: "მაუსის დასადები 30*25",
    en: "მაუსის დასადები 30*25",
    ru: "მაუსის დასადები 30*25"
  },
  price: 6.5,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/3025.webp"]
},
{
  id: 596,
  barcode: "2537",
  title: {
    ka: "CD-R დისკი DELI 700Mb 2537",
    en: "CD-R დისკი DELI 700Mb 2537",
    ru: "CD-R დისკი DELI 700Mb 2537"
  },
  price: 0.8,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/2537.webp"]
},
{
  id: 597,
  barcode: "CD/50",
  title: {
    ka: "Cd-R დისკი (50ც) Princo",
    en: "Cd-R დისკი (50ც) Princo",
    ru: "Cd-R დისკი (50ც) Princo"
  },
  price: 22.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/CD50.webp"]
},
{
  id: 598,
  barcode: "DVD/50",
  title: {
    ka: "Dvd-R დისკი (50ც) Princo",
    en: "Dvd-R დისკი (50ც) Princo",
    ru: "Dvd-R დისკი (50ც) Princo"
  },
  price: 30.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/DVD50.webp"]
},
{
  id: 599,
  barcode: "E3725",
  title: {
    ka: "CD-R დისკი 700Mb 50 ცალი Deli Stationery",
    en: "CD-R დისკი 700Mb 50 ცალი Deli Stationery",
    ru: "CD-R დისკი 700Mb 50 ცალი Deli Stationery"
  },
  price: 36.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/E3725.webp"]
},
{
  id: 600,
  barcode: "E3724",
  title: {
    ka: "DVD-R დისკი 4.7GB 50 ცალი Deli Stationery",
    en: "DVD-R დისკი 4.7GB 50 ცალი Deli Stationery",
    ru: "DVD-R დისკი 4.7GB 50 ცალი Deli Stationery"
  },
  price: 40.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/E3724.webp"]
},
{
  id: 601,
  barcode: "66010188151",
  title: {
    ka: "logitech, K380s Pebble Keys 2, Keyboard Grey",
    en: "logitech, K380s Pebble Keys 2, Keyboard Grey",
    ru: "logitech, K380s Pebble Keys 2, Keyboard Grey"
  },
  price: 159.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/66010188151.webp"]
},
{
  id: 602,
  barcode: "66010196545",
  title: {
    ka: "2E, Projector, Deimos FHD (1920×1080), LED lumens 200 ANSI, HDMI, USB, MicroSD, WiFi, Bluetooth Speaker 5 W.",
    en: "2E, Projector, Deimos FHD (1920×1080), LED lumens 200 ANSI, HDMI, USB, MicroSD, WiFi, Bluetooth Speaker 5 W.",
    ru: "2E, Projector, Deimos FHD (1920×1080), LED lumens 200 ANSI, HDMI, USB, MicroSD, WiFi, Bluetooth Speaker 5 W."
  },
  price: 330.0,
  inStock: true,
  category: "computers",
  subcategory: "Projectors",
  images: ["images/66010196545.webp"]
},
{
  id: 603,
  barcode: "66010196576",
  title: {
    ka: "HP Projector CC360 LED LCD",
    en: "HP Projector CC360 LED LCD",
    ru: "HP Projector CC360 LED LCD"
  },
  price: 658.0,
  inStock: true,
  category: "computers",
  subcategory: "Projectors",
  images: ["images/66010196576.webp"]
},
{
  id: 604,
  barcode: "66010192475",
  title: {
    ka: "Byintek, X30 Smart LCD Projector, FHD 1920x1080, 650lm, Black",
    en: "Byintek, X30 Smart LCD Projector, FHD 1920x1080, 650lm, Black",
    ru: "Byintek, X30 Smart LCD Projector, FHD 1920x1080, 650lm, Black"
  },
  price: 700.0,
  inStock: true,
  category: "computers",
  subcategory: "Projectors",
  images: ["images/66010192475.webp"]
},
{
  id: 605,
  barcode: "66010187222",
  title: {
    ka: "MR.JWM11.001, Aopen QF15A LED -Projection system LCD -Wireless Projection, HDMI,MicroSD, 1USB,1080p,500 Lumens,30,000 H",
    en: "MR.JWM11.001, Aopen QF15A LED -Projection system LCD -Wireless Projection, HDMI,MicroSD, 1USB,1080p,500 Lumens,30,000 H",
    ru: "MR.JWM11.001, Aopen QF15A LED -Projection system LCD -Wireless Projection, HDMI,MicroSD, 1USB,1080p,500 Lumens,30,000 H"
  },
  price: 954.0,
  inStock: true,
  category: "computers",
  subcategory: "Projectors",
  images: ["images/66010187222.webp"]
},
{
  id: 606,
  barcode: "66010196546",
  title: {
    ka: "HP Projector MP2000 PRO LED TI DLP",
    en: "HP Projector MP2000 PRO LED TI DLP",
    ru: "HP Projector MP2000 PRO LED TI DLP"
  },
  price: 1956.0,
  inStock: true,
  category: "computers",
  subcategory: "Projectors",
  images: ["images/66010196546.webp"]
},
{
  id: 607,
  barcode: "66010197284",
  title: {
    ka: "EPSON Projector EB-W53 3LCD",
    en: "EPSON Projector EB-W53 3LCD",
    ru: "EPSON Projector EB-W53 3LCD"
  },
  price: 2296.0,
  inStock: true,
  category: "computers",
  subcategory: "Projectors",
  images: ["images/66010197284.webp"]
},
{
  id: 608,
  barcode: "66010184371",
  title: {
    ka: "MR.JR511.001,ACER PL6510 DLP Laser Projector,FHD, LampType Laser,Stand Mode Bright. 5500 LM,Lamp Life30 000H,Speaker10w,120Hz",
    en: "MR.JR511.001,ACER PL6510 DLP Laser Projector,FHD, LampType Laser,Stand Mode Bright. 5500 LM,Lamp Life30 000H,Speaker10w,120Hz",
    ru: "MR.JR511.001,ACER PL6510 DLP Laser Projector,FHD, LampType Laser,Stand Mode Bright. 5500 LM,Lamp Life30 000H,Speaker10w,120Hz"
  },
  price: 7465.0,
  inStock: true,
  category: "computers",
  subcategory: "Projectors",
  images: ["images/66010184371.webp"]
},
{
  id: 609,
  barcode: "66010176821",
  title: {
    ka: "JZ.J7400.002, Acer M87-S01MW Roll-Up Projection Screen External dimensions (W x H): 181 x 191 cm",
    en: "JZ.J7400.002, Acer M87-S01MW Roll-Up Projection Screen External dimensions (W x H): 181 x 191 cm",
    ru: "JZ.J7400.002, Acer M87-S01MW Roll-Up Projection Screen External dimensions (W x H): 181 x 191 cm"
  },
  price: 313.0,
  inStock: true,
  category: "computers",
  subcategory: "Projectors",
  images: ["images/66010176821.webp"]
},
{
  id: 610,
  barcode: "66010176822",
  title: {
    ka: "MC.JBG11.00F, Acer T87-S01M Projection Screen+Tripod External dimensions (W x H): 180 x 146 cm",
    en: "MC.JBG11.00F, Acer T87-S01M Projection Screen+Tripod External dimensions (W x H): 180 x 146 cm",
    ru: "MC.JBG11.00F, Acer T87-S01M Projection Screen+Tripod External dimensions (W x H): 180 x 146 cm"
  },
  price: 369.0,
  inStock: true,
  category: "computers",
  subcategory: "Projectors",
  images: ["images/66010176822.webp"]
},
{
  id: 611,
  barcode: "66010176823",
  title: {
    ka: "MC.JBG11.009, Acer E100-W01MW Projection Screen-Control Electric-External dim. (W x H): 221x159 cm",
    en: "MC.JBG11.009, Acer E100-W01MW Projection Screen-Control Electric-External dim. (W x H): 221x159 cm",
    ru: "MC.JBG11.009, Acer E100-W01MW Projection Screen-Control Electric-External dim. (W x H): 221x159 cm"
  },
  price: 686.0,
  inStock: true,
  category: "computers",
  subcategory: "Projectors",
  images: ["images/66010176823.webp"]
},
{
  id: 612,
  barcode: "66010152565",
  title: {
    ka: "Media Pointer 100 ,Genius,Smart 2.4GHz Presenter",
    en: "Media Pointer 100 ,Genius,Smart 2.4GHz Presenter",
    ru: "Media Pointer 100 ,Genius,Smart 2.4GHz Presenter"
  },
  price: 71.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/66010152565.webp"]
},
{
  id: 613,
  barcode: "66010184364",
  title: {
    ka: "R500s LOGITECH Bluetooth Presentation Remote - MID GREY L910-006520",
    en: "R500s LOGITECH Bluetooth Presentation Remote - MID GREY L910-006520",
    ru: "R500s LOGITECH Bluetooth Presentation Remote - MID GREY L910-006520"
  },
  price: 139.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/66010184364.webp"]
},
{
  id: 614,
  barcode: "66010185556",
  title: {
    ka: "R500s LOGITECH Bluetooth Presentation Remote - GRAPHITE L910-005843",
    en: "R500s LOGITECH Bluetooth Presentation Remote - GRAPHITE L910-005843",
    ru: "R500s LOGITECH Bluetooth Presentation Remote - GRAPHITE L910-005843"
  },
  price: 139.0,
  inStock: true,
  category: "computers",
  subcategory: "Peripheral devices",
  images: ["images/66010185556.webp"]
},
{
  id: 615,
  barcode: "66010195053",
  title: {
    ka: "NETAC, U197, 64GB, USB2.0, Black+Red",
    en: "NETAC, U197, 64GB, USB2.0, Black+Red",
    ru: "NETAC, U197, 64GB, USB2.0, Black+Red"
  },
  price: 23.5,
  inStock: true,
  category: "computers",
  subcategory: "Flesh cards",
  images: ["images/66010195053.webp"]
},
{
  id: 616,
  barcode: "66010170146",
  title: {
    ka: "KINGSTON, DTX/128GB, USB3.2, Black + Yellow.",
    en: "KINGSTON, DTX/128GB, USB3.2, Black + Yellow.",
    ru: "KINGSTON, DTX/128GB, USB3.2, Black + Yellow."
  },
  price: 35.5,
  inStock: true,
  category: "computers",
  subcategory: "Flesh cards",
  images: ["images/66010170146.webp"]
},
{
  id: 617,
  barcode: "66010190067",
  title: {
    ka: "KINGSTON, DTSE9G3/64GB, USB 3.2",
    en: "KINGSTON, DTSE9G3/64GB, USB 3.2",
    ru: "KINGSTON, DTSE9G3/64GB, USB 3.2"
  },
  price: 51.0,
  inStock: true,
  category: "computers",
  subcategory: "Flesh cards",
  images: ["images/66010190067.webp"]
},
{
  id: 618,
  barcode: "66010177769",
  title: {
    ka: "KINGSTON, DTKN/64GB, USB 3.2",
    en: "KINGSTON, DTKN/64GB, USB 3.2",
    ru: "KINGSTON, DTKN/64GB, USB 3.2"
  },
  price: 57.0,
  inStock: true,
  category: "computers",
  subcategory: "Flesh cards",
  images: ["images/66010177769.webp"]
},
{
  id: 619,
  barcode: "66010195081",
  title: {
    ka: "NETAC, U336, 128GB, USB3.2, Write protection, Black",
    en: "NETAC, U336, 128GB, USB3.2, Write protection, Black",
    ru: "NETAC, U336, 128GB, USB3.2, Write protection, Black"
  },
  price: 66.5,
  inStock: true,
  category: "computers",
  subcategory: "Flesh cards",
  images: ["images/66010195081.webp"]
},
{
  id: 620,
  barcode: "66010177770",
  title: {
    ka: "KINGSTON, DTKN/128GB, USB 3.2",
    en: "KINGSTON, DTKN/128GB, USB 3.2",
    ru: "KINGSTON, DTKN/128GB, USB 3.2"
  },
  price: 93.0,
  inStock: true,
  category: "computers",
  subcategory: "Flesh cards",
  images: ["images/66010177770.webp"]
},
{
  id: 621,
  barcode: "66010190068",
  title: {
    ka: "KINGSTON, DTSE9G3/128GB, USB 3.2",
    en: "KINGSTON, DTSE9G3/128GB, USB 3.2",
    ru: "KINGSTON, DTSE9G3/128GB, USB 3.2"
  },
  price: 95.0,
  inStock: true,
  category: "computers",
  subcategory: "Flesh cards",
  images: ["images/66010190068.webp"]
},
{
  id: 622,
  barcode: "66010195589",
  title: {
    ka: "KINGSTON, DTMC3G2/256GB, USB 3.2",
    en: "KINGSTON, DTMC3G2/256GB, USB 3.2",
    ru: "KINGSTON, DTMC3G2/256GB, USB 3.2"
  },
  price: 187.0,
  inStock: true,
  category: "computers",
  subcategory: "Flesh cards",
  images: ["images/66010195589.webp"]
},
{
  id: 623,
  barcode: "66010135041",
  title: {
    ka: "NRN-236GV, Sumdex iPad Case",
    en: "NRN-236GV, Sumdex iPad Case",
    ru: "NRN-236GV, Sumdex iPad Case"
  },
  price: 29.0,
  inStock: true,
  category: "computers",
  subcategory: "Begs",
  images: ["images/66010135041.webp"]
},
{
  id: 624,
  barcode: "66010164042",
  title: {
    ka: "21551 TRUST PRIMO CARRY BAG FOR 16\" LAPTOPS Black",
    en: "21551 TRUST PRIMO CARRY BAG FOR 16\" LAPTOPS Black",
    ru: "21551 TRUST PRIMO CARRY BAG FOR 16\" LAPTOPS Black"
  },
  price: 30.0,
  inStock: true,
  category: "computers",
  subcategory: "Begs",
  images: ["images/66010164042.webp"]
},
{
  id: 625,
  barcode: "66010170656",
  title: {
    ka: "B210 Lenovo 15.6 Bag Laptop Casual Backpack GRAY (GX40Q17227)",
    en: "B210 Lenovo 15.6 Bag Laptop Casual Backpack GRAY (GX40Q17227)",
    ru: "B210 Lenovo 15.6 Bag Laptop Casual Backpack GRAY (GX40Q17227)"
  },
  price: 37.0,
  inStock: true,
  category: "computers",
  subcategory: "Begs",
  images: ["images/66010170656.webp"]
},
{
  id: 626,
  barcode: "66010186882",
  title: {
    ka: "B510 LENOVO CASE_BO 15.6 Backpack 375.6 x 253.4 x 22.7 mm - BLACK GX40Q75214",
    en: "B510 LENOVO CASE_BO 15.6 Backpack 375.6 x 253.4 x 22.7 mm - BLACK GX40Q75214",
    ru: "B510 LENOVO CASE_BO 15.6 Backpack 375.6 x 253.4 x 22.7 mm - BLACK GX40Q75214"
  },
  price: 60.0,
  inStock: true,
  category: "computers",
  subcategory: "Begs",
  images: ["images/66010186882.webp"]
},
{
  id: 627,
  barcode: "66010196046",
  title: {
    ka: "RC81-03640101-0000, RAZER, BAGS FOR NOTEBOOK, Razer Rogue Backpack (15.6\") V3, black.",
    en: "RC81-03640101-0000, RAZER, BAGS FOR NOTEBOOK, Razer Rogue Backpack (15.6\") V3, black.",
    ru: "RC81-03640101-0000, RAZER, BAGS FOR NOTEBOOK, Razer Rogue Backpack (15.6\") V3, black."
  },
  price: 292.0,
  inStock: true,
  category: "computers",
  subcategory: "Begs",
  images: ["images/66010196046.webp"]
},
{
  id: 628,
  barcode: "66010152579",
  title: {
    ka: "GXP1625, Grandstream business IP Phone with 2 lines, 132x48 LCD, HD audio, 3-way conferencing POE",
    en: "GXP1625, Grandstream business IP Phone with 2 lines, 132x48 LCD, HD audio, 3-way conferencing POE",
    ru: "GXP1625, Grandstream business IP Phone with 2 lines, 132x48 LCD, HD audio, 3-way conferencing POE"
  },
  price: 127.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010152579.webp"]
},
{
  id: 629,
  barcode: "66010188821",
  title: {
    ka: "GXP2160 Grandstream Enterprise IP Telephone: 6-line Enterprise HD IP Phone; 480x272 TFT color LCD",
    en: "GXP2160 Grandstream Enterprise IP Telephone: 6-line Enterprise HD IP Phone; 480x272 TFT color LCD",
    ru: "GXP2160 Grandstream Enterprise IP Telephone: 6-line Enterprise HD IP Phone; 480x272 TFT color LCD"
  },
  price: 343.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010188821.webp"]
},
{
  id: 630,
  barcode: "66010177486",
  title: {
    ka: "GRP2634 Grandstream GRP2634, Carrier-Grade IP Phones, 8 line keys, 4 SIP accounts, 32 VPK and 10 MPK",
    en: "GRP2634 Grandstream GRP2634, Carrier-Grade IP Phones, 8 line keys, 4 SIP accounts, 32 VPK and 10 MPK",
    ru: "GRP2634 Grandstream GRP2634, Carrier-Grade IP Phones, 8 line keys, 4 SIP accounts, 32 VPK and 10 MPK"
  },
  price: 354.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010177486.webp"]
},
{
  id: 631,
  barcode: "66010152511",
  title: {
    ka: "SPA962-EU, Linksys, 6-Line IP Telephone with 2-Port",
    en: "SPA962-EU, Linksys, 6-Line IP Telephone with 2-Port",
    ru: "SPA962-EU, Linksys, 6-Line IP Telephone with 2-Port"
  },
  price: 573.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010152511.webp"]
},
{
  id: 632,
  barcode: "66010196618",
  title: {
    ka: "TP-Link, Archer TX20U, Wi-Fi USB Adapter, AX1800",
    en: "TP-Link, Archer TX20U, Wi-Fi USB Adapter, AX1800",
    ru: "TP-Link, Archer TX20U, Wi-Fi USB Adapter, AX1800"
  },
  price: 85.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Adapters",
  images: ["images/66010196618.webp"]
},
{
  id: 633,
  barcode: "66010184655",
  title: {
    ka: "TP-Link, Archer TX20U Plus, AX1800, Wireless USB Adapter",
    en: "TP-Link, Archer TX20U Plus, AX1800, Wireless USB Adapter",
    ru: "TP-Link, Archer TX20U Plus, AX1800, Wireless USB Adapter"
  },
  price: 99.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Adapters",
  images: ["images/66010184655.webp"]
},
{
  id: 634,
  barcode: "66010197991",
  title: {
    ka: "TP-Link, Archer TXE75E, AXE5400 Wi-Fi 6E Bluetooth PCIe Adapter",
    en: "TP-Link, Archer TXE75E, AXE5400 Wi-Fi 6E Bluetooth PCIe Adapter",
    ru: "TP-Link, Archer TXE75E, AXE5400 Wi-Fi 6E Bluetooth PCIe Adapter"
  },
  price: 195.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Adapters",
  images: ["images/66010197991.webp"]
},
{
  id: 635,
  barcode: "66010197236",
  title: {
    ka: "TP-Link, Archer TBE400UH, BE6500 Wi-Fi 7 High Gain Wireless USB Adapter",
    en: "TP-Link, Archer TBE400UH, BE6500 Wi-Fi 7 High Gain Wireless USB Adapter",
    ru: "TP-Link, Archer TBE400UH, BE6500 Wi-Fi 7 High Gain Wireless USB Adapter"
  },
  price: 239.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Adapters",
  images: ["images/66010197236.webp"]
},
{
  id: 636,
  barcode: "66010195995",
  title: {
    ka: "TP-Link, RE505X, AX1500 Wi-Fi 6 Range Extender",
    en: "TP-Link, RE505X, AX1500 Wi-Fi 6 Range Extender",
    ru: "TP-Link, RE505X, AX1500 Wi-Fi 6 Range Extender"
  },
  price: 130.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010195995.webp"]
},
{
  id: 637,
  barcode: "66010197238",
  title: {
    ka: "TP-Link, RE705X, Range Extender, AX3000 Mesh WiFi 6 Extender",
    en: "TP-Link, RE705X, Range Extender, AX3000 Mesh WiFi 6 Extender",
    ru: "TP-Link, RE705X, Range Extender, AX3000 Mesh WiFi 6 Extender"
  },
  price: 210.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010197238.webp"]
},
{
  id: 638,
  barcode: "66010197986",
  title: {
    ka: "TP-Link, RE225BE, BE3600 Wi-Fi 7 Range Extender",
    en: "TP-Link, RE225BE, BE3600 Wi-Fi 7 Range Extender",
    ru: "TP-Link, RE225BE, BE3600 Wi-Fi 7 Range Extender"
  },
  price: 265.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010197986.webp"]
},
{
  id: 639,
  barcode: "66010145374",
  title: {
    ka: "TP-Link, Archer C60 AC1350 Wireless Dual Band Router",
    en: "TP-Link, Archer C60 AC1350 Wireless Dual Band Router",
    ru: "TP-Link, Archer C60 AC1350 Wireless Dual Band Router"
  },
  price: 93.5,
  inStock: true,
  category: "Network equipment",
  subcategory: "Routers",
  images: ["images/66010145374.webp"]
},
{
  id: 640,
  barcode: "66010161131",
  title: {
    ka: "TP-Link, Archer C6 AC1200 Wireless MU-MIMO Gigabit Router",
    en: "TP-Link, Archer C6 AC1200 Wireless MU-MIMO Gigabit Router",
    ru: "TP-Link, Archer C6 AC1200 Wireless MU-MIMO Gigabit Router"
  },
  price: 99.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Routers",
  images: ["images/66010161131.webp"]
},
{
  id: 641,
  barcode: "66010197882",
  title: {
    ka: "TP-Link, Archer AX56, Wi-Fi 6 Router",
    en: "TP-Link, Archer AX56, Wi-Fi 6 Router",
    ru: "TP-Link, Archer AX56, Wi-Fi 6 Router"
  },
  price: 200.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Routers",
  images: ["images/66010197882.webp"]
},
{
  id: 642,
  barcode: "66010183822",
  title: {
    ka: "TP-Link, Archer AX53, AX3000 Wi-Fi 6 Router",
    en: "TP-Link, Archer AX53, AX3000 Wi-Fi 6 Router",
    ru: "TP-Link, Archer AX53, AX3000 Wi-Fi 6 Router"
  },
  price: 200.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Routers",
  images: ["images/66010183822.webp"]
},
{
  id: 643,
  barcode: "66010184652",
  title: {
    ka: "TP-Link, Archer AXE75, AXE5400 Tri-Band Wi-Fi 6E Router",
    en: "TP-Link, Archer AXE75, AXE5400 Tri-Band Wi-Fi 6E Router",
    ru: "TP-Link, Archer AXE75, AXE5400 Tri-Band Wi-Fi 6E Router"
  },
  price: 405.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Routers",
  images: ["images/66010184652.webp"]
},
{
  id: 644,
  barcode: "66010184645",
  title: {
    ka: "TP-Link, Deco M4(1-pack), AC1200 Whole Home Mesh Wi-Fi",
    en: "TP-Link, Deco M4(1-pack), AC1200 Whole Home Mesh Wi-Fi",
    ru: "TP-Link, Deco M4(1-pack), AC1200 Whole Home Mesh Wi-Fi"
  },
  price: 125.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010184645.webp"]
},
{
  id: 645,
  barcode: "66010169117",
  title: {
    ka: "TP-Link, Deco M4(2-pack), AC1200 Whole-Home Wi-Fi system",
    en: "TP-Link, Deco M4(2-pack), AC1200 Whole-Home Wi-Fi system",
    ru: "TP-Link, Deco M4(2-pack), AC1200 Whole-Home Wi-Fi system"
  },
  price: 250.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010169117.webp"]
},
{
  id: 646,
  barcode: "66010184138",
  title: {
    ka: "TP-Link, Deco M4(3-pack), AC1200 Whole-Home Wi-Fi system",
    en: "TP-Link, Deco M4(3-pack), AC1200 Whole-Home Wi-Fi system",
    ru: "TP-Link, Deco M4(3-pack), AC1200 Whole-Home Wi-Fi system"
  },
  price: 359.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010184138.webp"]
},
{
  id: 647,
  barcode: "66010195432",
  title: {
    ka: "TP-Link, Deco X50(1-pack), AX3000 Whole Home Mesh Wi-Fi 6",
    en: "TP-Link, Deco X50(1-pack), AX3000 Whole Home Mesh Wi-Fi 6",
    ru: "TP-Link, Deco X50(1-pack), AX3000 Whole Home Mesh Wi-Fi 6"
  },
  price: 239.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010195432.webp"]
},
{
  id: 648,
  barcode: "66010190797",
  title: {
    ka: "TP-Link, Deco X50(2-pack), AX3000 Whole Home Mesh Wi-Fi 6 System",
    en: "TP-Link, Deco X50(2-pack), AX3000 Whole Home Mesh Wi-Fi 6 System",
    ru: "TP-Link, Deco X50(2-pack), AX3000 Whole Home Mesh Wi-Fi 6 System"
  },
  price: 465.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010190797.webp"]
},
{
  id: 649,
  barcode: "66010183827",
  title: {
    ka: "TP-Link, Deco X50(3-pack), AX3000 Whole Home Mesh Wi-Fi 6 System",
    en: "TP-Link, Deco X50(3-pack), AX3000 Whole Home Mesh Wi-Fi 6 System",
    ru: "TP-Link, Deco X50(3-pack), AX3000 Whole Home Mesh Wi-Fi 6 System"
  },
  price: 659.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010183827.webp"]
},
{
  id: 650,
  barcode: "66010195834",
  title: {
    ka: "TP-Link, Deco BE22(1-pack), BE3600 Whole Home Mesh Wi-Fi 7",
    en: "TP-Link, Deco BE22(1-pack), BE3600 Whole Home Mesh Wi-Fi 7",
    ru: "TP-Link, Deco BE22(1-pack), BE3600 Whole Home Mesh Wi-Fi 7"
  },
  price: 289.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010195834.webp"]
},
{
  id: 651,
  barcode: "66010196986",
  title: {
    ka: "TP-Link, Deco BE22(2-pack), BE3600 Whole Home Mesh WiFi 7 System",
    en: "TP-Link, Deco BE22(2-pack), BE3600 Whole Home Mesh WiFi 7 System",
    ru: "TP-Link, Deco BE22(2-pack), BE3600 Whole Home Mesh WiFi 7 System"
  },
  price: 549.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010196986.jpg"]
},
{
  id: 652,
  barcode: "66010194689",
  title: {
    ka: "TP-Link, Deco BE22(3-pack), BE3600 Whole Home Mesh WiFi 7 System",
    en: "TP-Link, Deco BE22(3-pack), BE3600 Whole Home Mesh WiFi 7 System",
    ru: "TP-Link, Deco BE22(3-pack), BE3600 Whole Home Mesh WiFi 7 System"
  },
  price: 789.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010194689.webp"]
},
{
  id: 653,
  barcode: "66010197989",
  title: {
    ka: "TP-Link, Deco XE75(2-pack), AXE5400 Whole Home Mesh Wi-Fi 6E System",
    en: "TP-Link, Deco XE75(2-pack), AXE5400 Whole Home Mesh Wi-Fi 6E System",
    ru: "TP-Link, Deco XE75(2-pack), AXE5400 Whole Home Mesh Wi-Fi 6E System"
  },
  price: 849.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010197989.webp"]
},
{
  id: 654,
  barcode: "66010197988",
  title: {
    ka: "TP-Link, Deco XE75(3-pack), AXE5400 Whole Home Mesh Wi-Fi 6E System",
    en: "TP-Link, Deco XE75(3-pack), AXE5400 Whole Home Mesh Wi-Fi 6E System",
    ru: "TP-Link, Deco XE75(3-pack), AXE5400 Whole Home Mesh Wi-Fi 6E System"
  },
  price: 1199.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010197988.webp"]
},
{
  id: 655,
  barcode: "66010191067",
  title: {
    ka: "TP-Link, EAP223, AC1350 Wireless Dual Band Ceiling Mount Access Point",
    en: "TP-Link, EAP223, AC1350 Wireless Dual Band Ceiling Mount Access Point",
    ru: "TP-Link, EAP223, AC1350 Wireless Dual Band Ceiling Mount Access Point"
  },
  price: 185.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010191067.webp"]
},
{
  id: 656,
  barcode: "66010183828",
  title: {
    ka: "TP-Link, EAP660 HD, AX3600 Wireless Dual-Band Multi-Gigabit Ceiling Mount Access Point",
    en: "TP-Link, EAP660 HD, AX3600 Wireless Dual-Band Multi-Gigabit Ceiling Mount Access Point",
    ru: "TP-Link, EAP660 HD, AX3600 Wireless Dual-Band Multi-Gigabit Ceiling Mount Access Point"
  },
  price: 865.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010183828.webp"]
},
{
  id: 657,
  barcode: "66010195466",
  title: {
    ka: "TP-Link, Omada EAP650-Outdoor, AX3000, Wi-Fi 6 AP",
    en: "TP-Link, Omada EAP650-Outdoor, AX3000, Wi-Fi 6 AP",
    ru: "TP-Link, Omada EAP650-Outdoor, AX3000, Wi-Fi 6 AP"
  },
  price: 509.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010195466.webp"]
},
{
  id: 658,
  barcode: "66010196989",
  title: {
    ka: "TP-Link, Omada EAP772-Outdoor, Access Point, BE9300 Indoor/Outdoor Wi-Fi 7",
    en: "TP-Link, Omada EAP772-Outdoor, Access Point, BE9300 Indoor/Outdoor Wi-Fi 7",
    ru: "TP-Link, Omada EAP772-Outdoor, Access Point, BE9300 Indoor/Outdoor Wi-Fi 7"
  },
  price: 859.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Signals",
  images: ["images/66010196989.webp"]
},
{
  id: 659,
  barcode: "66010192540",
  title: {
    ka: "TP-Link, Festa FS308GP, 8-Port Gigabit Smart Switch with 4-Port PoE+ 62W",
    en: "TP-Link, Festa FS308GP, 8-Port Gigabit Smart Switch with 4-Port PoE+ 62W",
    ru: "TP-Link, Festa FS308GP, 8-Port Gigabit Smart Switch with 4-Port PoE+ 62W"
  },
  price: 228.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Switches",
  images: ["images/66010192540.webp"]
},
{
  id: 660,
  barcode: "66010111271",
  title: {
    ka: "TP-Link, TL-SF1005D, 5-port 10/100M mini Desktop Switch, Plastic case",
    en: "TP-Link, TL-SF1005D, 5-port 10/100M mini Desktop Switch, Plastic case",
    ru: "TP-Link, TL-SF1005D, 5-port 10/100M mini Desktop Switch, Plastic case"
  },
  price: 25.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Switches",
  images: ["images/66010111271.webp"]
},
{
  id: 661,
  barcode: "10020202339",
  title: {
    ka: "TP-Link, TL-SF1008D, 8-port 10/100M mini Desktop Switch, 8 10/100M RJ45 ports, Plastic case",
    en: "TP-Link, TL-SF1008D, 8-port 10/100M mini Desktop Switch, 8 10/100M RJ45 ports, Plastic case",
    ru: "TP-Link, TL-SF1008D, 8-port 10/100M mini Desktop Switch, 8 10/100M RJ45 ports, Plastic case"
  },
  price: 30.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Switches",
  images: ["images/10020202339.webp"]
},
{
  id: 662,
  barcode: "66010126167",
  title: {
    ka: "TP-Link, TL-SG105, 5-Port 10/100/1000Mbps Desktop Switch",
    en: "TP-Link, TL-SG105, 5-Port 10/100/1000Mbps Desktop Switch",
    ru: "TP-Link, TL-SG105, 5-Port 10/100/1000Mbps Desktop Switch"
  },
  price: 55.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Switches",
  images: ["images/66010126167.webp"]
},
{
  id: 663,
  barcode: "66010113745",
  title: {
    ka: "TP-Link, TL-SG1008D, 8-port Gigabit Switch, 8 10/100/1000M RJ45 ports, plastic case",
    en: "TP-Link, TL-SG1008D, 8-port Gigabit Switch, 8 10/100/1000M RJ45 ports, plastic case",
    ru: "TP-Link, TL-SG1008D, 8-port Gigabit Switch, 8 10/100/1000M RJ45 ports, plastic case"
  },
  price: 65.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Switches",
  images: ["images/66010113745.webp"]
},
{
  id: 664,
  barcode: "66010160921",
  title: {
    ka: "TP-Link, TL-SG1016D, 16-port Gigabit Switch, 16 10/100/1000, Desktop/Rackmount switch",
    en: "TP-Link, TL-SG1016D, 16-port Gigabit Switch, 16 10/100/1000, Desktop/Rackmount switch",
    ru: "TP-Link, TL-SG1016D, 16-port Gigabit Switch, 16 10/100/1000, Desktop/Rackmount switch"
  },
  price: 200.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Racks",
  images: ["images/66010160921.webp"]
},
{
  id: 665,
  barcode: "66010118264",
  title: {
    ka: "TP-Link, TL-SG1024D, 24-port Gigabit Switch, 24 10/100/1000M RJ45 ports, metal case",
    en: "TP-Link, TL-SG1024D, 24-port Gigabit Switch, 24 10/100/1000M RJ45 ports, metal case",
    ru: "TP-Link, TL-SG1024D, 24-port Gigabit Switch, 24 10/100/1000M RJ45 ports, metal case"
  },
  price: 270.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Racks",
  images: ["images/66010118264.webp"]
},
{
  id: 666,
  barcode: "66010152595",
  title: {
    ka: "TP-Link, TL-SG1048, 48-port Gigabit Switch, 48 10/100/1000 Rackmount Switch",
    en: "TP-Link, TL-SG1048, 48-port Gigabit Switch, 48 10/100/1000 Rackmount Switch",
    ru: "TP-Link, TL-SG1048, 48-port Gigabit Switch, 48 10/100/1000 Rackmount Switch"
  },
  price: 920.0,
  inStock: true,
  category: "Network equipment",
  subcategory: "Racks",
  images: ["images/66010152595.webp"]
},
{
  id: 667,
  barcode: "66010195099",
  title: {
    ka: "POWERCOM RPT-600A, 600VA/360W, Line-Interactive, Automatic internal bypass, Black.",
    en: "POWERCOM RPT-600A, 600VA/360W, Line-Interactive, Automatic internal bypass, Black.",
    ru: "POWERCOM RPT-600A, 600VA/360W, Line-Interactive, Automatic internal bypass, Black."
  },
  price: 90.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195099.webp"]
},
{
  id: 668,
  barcode: "66010195100",
  title: {
    ka: "POWERCOM RPT-800A, 800VA/480W, Line-Interactive, Automatic internal bypass, Black.",
    en: "POWERCOM RPT-800A, 800VA/480W, Line-Interactive, Automatic internal bypass, Black.",
    ru: "POWERCOM RPT-800A, 800VA/480W, Line-Interactive, Automatic internal bypass, Black."
  },
  price: 108.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195100.webp"]
},
{
  id: 669,
  barcode: "66010195101",
  title: {
    ka: "POWERCOM RPT-1000A, 1000VA/600W, Line-Interactive, Automatic internal bypass, Black.",
    en: "POWERCOM RPT-1000A, 1000VA/600W, Line-Interactive, Automatic internal bypass, Black.",
    ru: "POWERCOM RPT-1000A, 1000VA/600W, Line-Interactive, Automatic internal bypass, Black."
  },
  price: 138.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195101.webp"]
},
{
  id: 670,
  barcode: "66010195085",
  title: {
    ka: "POWERCOM WOW-700U, 700VA/350W, Offline, Automatic internal bypass, Black.",
    en: "POWERCOM WOW-700U, 700VA/350W, Offline, Automatic internal bypass, Black.",
    ru: "POWERCOM WOW-700U, 700VA/350W, Offline, Automatic internal bypass, Black."
  },
  price: 146.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195085.webp"]
},
{
  id: 671,
  barcode: "66010150810",
  title: {
    ka: "ARTRONIC ART 600, 600VA/360W, Black. Internal automatic bypass.",
    en: "ARTRONIC ART 600, 600VA/360W, Black. Internal automatic bypass.",
    ru: "ARTRONIC ART 600, 600VA/360W, Black. Internal automatic bypass."
  },
  price: 165.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010150810.webp"]
},
{
  id: 672,
  barcode: "66010156939",
  title: {
    ka: "APC Easy UPS BV650I-GR, 650VA/375W Floor/Wall Mount, Line-Interactive, 230V, Internal automatic bypass, Black.",
    en: "APC Easy UPS BV650I-GR, 650VA/375W Floor/Wall Mount, Line-Interactive, 230V, Internal automatic bypass, Black.",
    ru: "APC Easy UPS BV650I-GR, 650VA/375W Floor/Wall Mount, Line-Interactive, 230V, Internal automatic bypass, Black."
  },
  price: 170.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010156939.webp"]
},
{
  id: 673,
  barcode: "66010195148",
  title: {
    ka: "POWERCOM WOW-850S, 850VA/425W, Offline, Automatic internal bypass, Black.",
    en: "POWERCOM WOW-850S, 850VA/425W, Offline, Automatic internal bypass, Black.",
    ru: "POWERCOM WOW-850S, 850VA/425W, Offline, Automatic internal bypass, Black."
  },
  price: 182.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195148.webp"]
},
{
  id: 674,
  barcode: "66010195149",
  title: {
    ka: "POWERCOM WOW-1000S, 1000VA/500W, Offline, Automatic internal bypass, Black.",
    en: "POWERCOM WOW-1000S, 1000VA/500W, Offline, Automatic internal bypass, Black.",
    ru: "POWERCOM WOW-1000S, 1000VA/500W, Offline, Automatic internal bypass, Black."
  },
  price: 198.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195149.webp"]
},
{
  id: 675,
  barcode: "66010157308",
  title: {
    ka: "APC BV800I-GR, 800VA/450W, Line-Interactive, Automatic internal bypass, Black.",
    en: "APC BV800I-GR, 800VA/450W, Line-Interactive, Automatic internal bypass, Black.",
    ru: "APC BV800I-GR, 800VA/450W, Line-Interactive, Automatic internal bypass, Black."
  },
  price: 201.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010157308.webp"]
},
{
  id: 676,
  barcode: "66010195102",
  title: {
    ka: "POWERCOM RPT-1025AP, 1025VA/615W, Line-Interactive, Automatic internal bypass, Black.",
    en: "POWERCOM RPT-1025AP, 1025VA/615W, Line-Interactive, Automatic internal bypass, Black.",
    ru: "POWERCOM RPT-1025AP, 1025VA/615W, Line-Interactive, Automatic internal bypass, Black."
  },
  price: 210.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195102.webp"]
},
{
  id: 677,
  barcode: "66010195103",
  title: {
    ka: "POWERCOM RPT-1500AP, 1500VA/900W, Line-Interactive, Automatic internal bypass, Black.",
    en: "POWERCOM RPT-1500AP, 1500VA/900W, Line-Interactive, Automatic internal bypass, Black.",
    ru: "POWERCOM RPT-1500AP, 1500VA/900W, Line-Interactive, Automatic internal bypass, Black."
  },
  price: 229.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195103.webp"]
},
{
  id: 678,
  barcode: "66010143747",
  title: {
    ka: "ARTRONIC ART 1000, 1000VA/600W, Line-Interactive, Internal automatic bypass, Black.",
    en: "ARTRONIC ART 1000, 1000VA/600W, Line-Interactive, Internal automatic bypass, Black.",
    ru: "ARTRONIC ART 1000, 1000VA/600W, Line-Interactive, Internal automatic bypass, Black."
  },
  price: 330.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010143747.webp"]
},
{
  id: 679,
  barcode: "66010194026",
  title: {
    ka: "APC BVX1600LI-GR, 1600VA/900W, Black. Automatic internal bypass.",
    en: "APC BVX1600LI-GR, 1600VA/900W, Black. Automatic internal bypass.",
    ru: "APC BVX1600LI-GR, 1600VA/900W, Black. Automatic internal bypass."
  },
  price: 527.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010194026.webp"]
},
{
  id: 680,
  barcode: "66010146469",
  title: {
    ka: "ARTRONIC ART 2000, 2000VA/1200W, Line-Interactive, Black.",
    en: "ARTRONIC ART 2000, 2000VA/1200W, Line-Interactive, Black.",
    ru: "ARTRONIC ART 2000, 2000VA/1200W, Line-Interactive, Black."
  },
  price: 548.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010146469.webp"]
},
{
  id: 681,
  barcode: "66010195106",
  title: {
    ka: "POWERCOM MAC-1000, 1000VA/1000W, Online, Black.",
    en: "POWERCOM MAC-1000, 1000VA/1000W, Online, Black.",
    ru: "POWERCOM MAC-1000, 1000VA/1000W, Online, Black."
  },
  price: 629.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195106.webp"]
},
{
  id: 682,
  barcode: "66010195107",
  title: {
    ka: "POWERCOM MAC-1500, 1500VA/1500W, Online, Automatic and manual internal bypass, Black.",
    en: "POWERCOM MAC-1500, 1500VA/1500W, Online, Automatic and manual internal bypass, Black.",
    ru: "POWERCOM MAC-1500, 1500VA/1500W, Online, Automatic and manual internal bypass, Black."
  },
  price: 847.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195107.webp"]
},
{
  id: 683,
  barcode: "66010143750",
  title: {
    ka: "ARTRONIC ARTon Beta 1kVA, 800W, On-LINE, USB, RJ45-RS232 port.",
    en: "ARTRONIC ARTon Beta 1kVA, 800W, On-LINE, USB, RJ45-RS232 port.",
    ru: "ARTRONIC ARTon Beta 1kVA, 800W, On-LINE, USB, RJ45-RS232 port."
  },
  price: 910.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010143750.webp"]
},
{
  id: 684,
  barcode: "66010144859",
  title: {
    ka: "ARTRONIC ALFA 1kVA, 1000VA/900W, Online, Internal automatic and manual bypass, Black.",
    en: "ARTRONIC ALFA 1kVA, 1000VA/900W, Online, Internal automatic and manual bypass, Black.",
    ru: "ARTRONIC ALFA 1kVA, 1000VA/900W, Online, Internal automatic and manual bypass, Black."
  },
  price: 1040.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010144859.webp"]
},
{
  id: 685,
  barcode: "66010195108",
  title: {
    ka: "POWERCOM MAC-2000, 2000VA/2000W, Online, Automatic and manual internal bypass, Black.",
    en: "POWERCOM MAC-2000, 2000VA/2000W, Online, Automatic and manual internal bypass, Black.",
    ru: "POWERCOM MAC-2000, 2000VA/2000W, Online, Automatic and manual internal bypass, Black."
  },
  price: 1048.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195108.webp"]
},
{
  id: 686,
  barcode: "66010149946",
  title: {
    ka: "ARTRONIC ARTon Titanium Liion RT 1KVA, 900W, ONLINE, RS232 port.",
    en: "ARTRONIC ARTon Titanium Liion RT 1KVA, 900W, ONLINE, RS232 port.",
    ru: "ARTRONIC ARTon Titanium Liion RT 1KVA, 900W, ONLINE, RS232 port."
  },
  price: 1195.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010149946.webp"]
},
{
  id: 687,
  barcode: "66010143753",
  title: {
    ka: "ARTRONIC ARTon Beta 2kVA, 1600W, On-LINE, USB, RJ45-RS232 port.",
    en: "ARTRONIC ARTon Beta 2kVA, 1600W, On-LINE, USB, RJ45-RS232 port.",
    ru: "ARTRONIC ARTon Beta 2kVA, 1600W, On-LINE, USB, RJ45-RS232 port."
  },
  price: 1356.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010143753.webp"]
},
{
  id: 688,
  barcode: "66010144860",
  title: {
    ka: "ARTRONIC ALFA 2kVA, 2000VA/1800W, Online, USB, RJ45-RS232 port.",
    en: "ARTRONIC ALFA 2kVA, 2000VA/1800W, Online, USB, RJ45-RS232 port.",
    ru: "ARTRONIC ALFA 2kVA, 2000VA/1800W, Online, USB, RJ45-RS232 port."
  },
  price: 1551.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010144860.webp"]
},
{
  id: 689,
  barcode: "66010149947",
  title: {
    ka: "ARTRONIC UPS ARTon Titanium Liion RT 2KVA, 1800W, ONLINE, USB, RS232 port.",
    en: "ARTRONIC UPS ARTon Titanium Liion RT 2KVA, 1800W, ONLINE, USB, RS232 port.",
    ru: "ARTRONIC UPS ARTon Titanium Liion RT 2KVA, 1800W, ONLINE, USB, RS232 port."
  },
  price: 1691.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010149947.webp"]
},
{
  id: 690,
  barcode: "66010143755",
  title: {
    ka: "ARTRONIC ARTon Beta 3kVA, 2400W, On-LINE, USB, RJ45-RS232 port.",
    en: "ARTRONIC ARTon Beta 3kVA, 2400W, On-LINE, USB, RJ45-RS232 port.",
    ru: "ARTRONIC ARTon Beta 3kVA, 2400W, On-LINE, USB, RJ45-RS232 port."
  },
  price: 2069.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010143755.webp"]
},
{
  id: 691,
  barcode: "66010150811",
  title: {
    ka: "ARTRONIC ARTon Titanium Liion RT 3KVA, 2700W, Online, Black.",
    en: "ARTRONIC ARTon Titanium Liion RT 3KVA, 2700W, Online, Black.",
    ru: "ARTRONIC ARTon Titanium Liion RT 3KVA, 2700W, Online, Black."
  },
  price: 2362.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010150811.webp"]
},
{
  id: 692,
  barcode: "66010191263",
  title: {
    ka: "APC SRV6KI, 6kVA/6kW, LCD, Online, Automatic internal bypass, Black.",
    en: "APC SRV6KI, 6kVA/6kW, LCD, Online, Automatic internal bypass, Black.",
    ru: "APC SRV6KI, 6kVA/6kW, LCD, Online, Automatic internal bypass, Black."
  },
  price: 4058.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010191263.webp"]
},
{
  id: 693,
  barcode: "66010152653",
  title: {
    ka: "ARTRONIC ARTon Beta 6kVA, 4800W, ONLINE, USB, RJ45-RS232 port.",
    en: "ARTRONIC ARTon Beta 6kVA, 4800W, ONLINE, USB, RJ45-RS232 port.",
    ru: "ARTRONIC ARTon Beta 6kVA, 4800W, ONLINE, USB, RJ45-RS232 port."
  },
  price: 4310.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010152653.webp"]
},
{
  id: 694,
  barcode: "66010195154",
  title: {
    ka: "POWERCOM MAC-6K, 6000VA/6000W, Online, Automatic and manual internal bypass, Black.",
    en: "POWERCOM MAC-6K, 6000VA/6000W, Online, Automatic and manual internal bypass, Black.",
    ru: "POWERCOM MAC-6K, 6000VA/6000W, Online, Automatic and manual internal bypass, Black."
  },
  price: 4353.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195154.webp"]
},
{
  id: 695,
  barcode: "66010169997",
  title: {
    ka: "ARTRONIC ARTon Beta 10kVA, 8000W, ONLINE, USB, RJ45-RS232 port.",
    en: "ARTRONIC ARTon Beta 10kVA, 8000W, ONLINE, USB, RJ45-RS232 port.",
    ru: "ARTRONIC ARTon Beta 10kVA, 8000W, ONLINE, USB, RJ45-RS232 port."
  },
  price: 5011.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010169997.webp"]
},
{
  id: 696,
  barcode: "66010195155",
  title: {
    ka: "POWERCOM MAC-10K, 10000VA/10000W, Online, Automatic and manual internal bypass, Black.",
    en: "POWERCOM MAC-10K, 10000VA/10000W, Online, Automatic and manual internal bypass, Black.",
    ru: "POWERCOM MAC-10K, 10000VA/10000W, Online, Automatic and manual internal bypass, Black."
  },
  price: 5561.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010195155.webp"]
},
{
  id: 697,
  barcode: "66010196433",
  title: {
    ka: "REDOH, TRUST, Power Bank, 10000mAh POWERBANK 20W USB-C, USB-A BLUE.",
    en: "REDOH, TRUST, Power Bank, 10000mAh POWERBANK 20W USB-C, USB-A BLUE.",
    ru: "REDOH, TRUST, Power Bank, 10000mAh POWERBANK 20W USB-C, USB-A BLUE."
  },
  price: 45.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010196433.webp"]
},
{
  id: 698,
  barcode: "66010179788",
  title: {
    ka: "TRUST, 24678 , Power Bank, PRIMO ECO 10000 USB-C micro-USB.3.0A/15W, Black.",
    en: "TRUST, 24678 , Power Bank, PRIMO ECO 10000 USB-C micro-USB.3.0A/15W, Black.",
    ru: "TRUST, 24678 , Power Bank, PRIMO ECO 10000 USB-C micro-USB.3.0A/15W, Black."
  },
  price: 45.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010179788.webp"]
},
{
  id: 699,
  barcode: "66010199193",
  title: {
    ka: "P15ZM, XIAOMI, Power Bank, 10000mAh, Type-C, USB Two-way 22.5W fast charging, Integrated Cable, Ice Blue, BHR9073GL.",
    en: "P15ZM, XIAOMI, Power Bank, 10000mAh, Type-C, USB Two-way 22.5W fast charging, Integrated Cable, Ice Blue, BHR9073GL.",
    ru: "P15ZM, XIAOMI, Power Bank, 10000mAh, Type-C, USB Two-way 22.5W fast charging, Integrated Cable, Ice Blue, BHR9073GL."
  },
  price: 54.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010199193.webp"]
},
{
  id: 700,
  barcode: "66010179787",
  title: {
    ka: "TRUST, 24677, Power Bank, PRIMO ECO 15000 USB-C micro-USB.3.0A/15W, USB-C, Black.",
    en: "TRUST, 24677, Power Bank, PRIMO ECO 15000 USB-C micro-USB.3.0A/15W, USB-C, Black.",
    ru: "TRUST, 24677, Power Bank, PRIMO ECO 15000 USB-C micro-USB.3.0A/15W, USB-C, Black."
  },
  price: 54.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010179787.webp"]
},
{
  id: 701,
  barcode: "66010189844",
  title: {
    ka: "CHOETECH, B728, Power Bank, 10000mAh, 22.5W, Dual USB-A+Type-C, Digital Screen.",
    en: "CHOETECH, B728, Power Bank, 10000mAh, 22.5W, Dual USB-A+Type-C, Digital Screen.",
    ru: "CHOETECH, B728, Power Bank, 10000mAh, 22.5W, Dual USB-A+Type-C, Digital Screen."
  },
  price: 57.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010189844.webp"]
},
{
  id: 702,
  barcode: "66010199194",
  title: {
    ka: "PB2020MI, XIAOMI, Power Bank, 20000mAh, Type-C, USB Two-way 22,5W fast charging, Integrated Cable, 342g, Gray, BHR9738GL.",
    en: "PB2020MI, XIAOMI, Power Bank, 20000mAh, Type-C, USB Two-way 22,5W fast charging, Integrated Cable, 342g, Gray, BHR9738GL.",
    ru: "PB2020MI, XIAOMI, Power Bank, 20000mAh, Type-C, USB Two-way 22,5W fast charging, Integrated Cable, 342g, Gray, BHR9738GL."
  },
  price: 68.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010199194.webp"]
},
{
  id: 703,
  barcode: "66010193102",
  title: {
    ka: "Choetech, B730 , Power Bank, 30000mAh, 22.5W, Dual USB-A+Type-C Power bank Digital Screen",
    en: "Choetech, B730 , Power Bank, 30000mAh, 22.5W, Dual USB-A+Type-C Power bank Digital Screen",
    ru: "Choetech, B730 , Power Bank, 30000mAh, 22.5W, Dual USB-A+Type-C Power bank Digital Screen"
  },
  price: 106.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010193102.webp"]
},
{
  id: 704,
  barcode: "66010199104",
  title: {
    ka: "LARO, TRUST, Power Bank, 65W 65W 20,000mAh USB-C LAPTOP POWERBANK.",
    en: "LARO, TRUST, Power Bank, 65W 65W 20,000mAh USB-C LAPTOP POWERBANK.",
    ru: "LARO, TRUST, Power Bank, 65W 65W 20,000mAh USB-C LAPTOP POWERBANK."
  },
  price: 150.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010199104.webp"]
},
{
  id: 705,
  barcode: "66010123929",
  title: {
    ka: "DEFENDER, Surge Protector, 10A, 5 Sockets.",
    en: "DEFENDER, Surge Protector, 10A, 5 Sockets.",
    ru: "DEFENDER, Surge Protector, 10A, 5 Sockets."
  },
  price: 10.5,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Power strip",
  images: ["images/66010123929.webp"]
},
{
  id: 706,
  barcode: "66010139115",
  title: {
    ka: "KD-PDU-GM-1U-P8, Kingda, 19\" Power distribution unit,German type",
    en: "KD-PDU-GM-1U-P8, Kingda, 19\" Power distribution unit,German type",
    ru: "KD-PDU-GM-1U-P8, Kingda, 19\" Power distribution unit,German type"
  },
  price: 49.5,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Power strip",
  images: ["images/66010139115.webp"]
},
{
  id: 707,
  barcode: "66010191955",
  title: {
    ka: "AR3-1000G, EconoPower , Surge Protector, AUTOMATIC VOLTAGE REGULATOR 1000VA/500W.",
    en: "AR3-1000G, EconoPower , Surge Protector, AUTOMATIC VOLTAGE REGULATOR 1000VA/500W.",
    ru: "AR3-1000G, EconoPower , Surge Protector, AUTOMATIC VOLTAGE REGULATOR 1000VA/500W."
  },
  price: 76.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010191955.webp"]
},
{
  id: 708,
  barcode: "66010194860",
  title: {
    ka: "AR3-2200G, EconoPower , Surge Protector, AUTOMATIC VOLTAGE REGULATOR 2200VA/1100W.",
    en: "AR3-2200G, EconoPower , Surge Protector, AUTOMATIC VOLTAGE REGULATOR 2200VA/1100W.",
    ru: "AR3-2200G, EconoPower , Surge Protector, AUTOMATIC VOLTAGE REGULATOR 2200VA/1100W."
  },
  price: 129.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "Ups",
  images: ["images/66010194860.webp"]
},
{
  id: 709,
  barcode: "66010196224",
  title: {
    ka: "CR2016-2CPU5, GP, Battery, CR2016.",
    en: "CR2016-2CPU5, GP, Battery, CR2016.",
    ru: "CR2016-2CPU5, GP, Battery, CR2016."
  },
  price: 1.3,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010196224.webp"]
},
{
  id: 710,
  barcode: "66010184326",
  title: {
    ka: "GPPBA27AF002, GP, Battery, 12.0V 27AF-U5 Alkaline for Remote control.",
    en: "GPPBA27AF002, GP, Battery, 12.0V 27AF-U5 Alkaline for Remote control.",
    ru: "GPPBA27AF002, GP, Battery, 12.0V 27AF-U5 Alkaline for Remote control."
  },
  price: 1.4,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010184326.webp"]
},
{
  id: 711,
  barcode: "66010161603",
  title: {
    ka: "Maxell BATARY CR2032 4902580131258",
    en: "Maxell BATARY CR2032 4902580131258",
    ru: "Maxell BATARY CR2032 4902580131258"
  },
  price: 1.4,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010161603.webp"]
},
{
  id: 712,
  barcode: "66010184325",
  title: {
    ka: "GPPBA23AF002, GP 12.0V 23AF-U5 Alkaline for Remote control 4891199042140",
    en: "GPPBA23AF002, GP 12.0V 23AF-U5 Alkaline for Remote control 4891199042140",
    ru: "GPPBA23AF002, GP 12.0V 23AF-U5 Alkaline for Remote control 4891199042140"
  },
  price: 1.4,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010184325.webp"]
},
{
  id: 713,
  barcode: "66010187787",
  title: {
    ka: "CR2025-2CPUS, GP, Battery, CR2025.",
    en: "CR2025-2CPUS, GP, Battery, CR2025.",
    ru: "CR2025-2CPUS, GP, Battery, CR2025."
  },
  price: 1.5,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010187787.webp"]
},
{
  id: 714,
  barcode: "66010186748",
  title: {
    ka: "LR3/AAA Duracell Basic Blister 24, 24xAAA, 1.5V/B 1 piece from a pack 60118",
    en: "LR3/AAA Duracell Basic Blister 24, 24xAAA, 1.5V/B 1 piece from a pack 60118",
    ru: "LR3/AAA Duracell Basic Blister 24, 24xAAA, 1.5V/B 1 piece from a pack 60118"
  },
  price: 1.95,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010186748.webp"]
},
{
  id: 715,
  barcode: "66010193607",
  title: {
    ka: "CR1620 CP-5C TOSHIBA",
    en: "CR1620 CP-5C TOSHIBA",
    ru: "CR1620 CP-5C TOSHIBA"
  },
  price: 2.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010193607.webp"]
},
{
  id: 716,
  barcode: "66010186747",
  title: {
    ka: "LR6/AA Duracell Basic Blister 24, 24xAA, 1.5V/B 1 piece from a pack 160071",
    en: "LR6/AA Duracell Basic Blister 24, 24xAA, 1.5V/B 1 piece from a pack 160071",
    ru: "LR6/AA Duracell Basic Blister 24, 24xAA, 1.5V/B 1 piece from a pack 160071"
  },
  price: 2.2,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010186747.webp"]
},
{
  id: 717,
  barcode: "66010196221",
  title: {
    ka: "GPPCA24AU641, GP, Battery, AAAx2, 1.5V, Ultra Alkaline.",
    en: "GPPCA24AU641, GP, Battery, AAAx2, 1.5V, Ultra Alkaline.",
    ru: "GPPCA24AU641, GP, Battery, AAAx2, 1.5V, Ultra Alkaline."
  },
  price: 2.5,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010196221.webp"]
},
{
  id: 718,
  barcode: "66010196218",
  title: {
    ka: "GPPCA15AU719, GP, Battery, AAx2, 1.5V, Ultra Alkaline.",
    en: "GPPCA15AU719, GP, Battery, AAx2, 1.5V, Ultra Alkaline.",
    ru: "GPPCA15AU719, GP, Battery, AAx2, 1.5V, Ultra Alkaline."
  },
  price: 2.5,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010196218.webp"]
},
{
  id: 719,
  barcode: "66010166660",
  title: {
    ka: "GPPVCF9VG006, GP, Battery, 9.0V.",
    en: "GPPVCF9VG006, GP, Battery, 9.0V.",
    ru: "GPPVCF9VG006, GP, Battery, 9.0V."
  },
  price: 2.6,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010166660.webp"]
},
{
  id: 720,
  barcode: "66010186753",
  title: {
    ka: "PBL1632, GP, Battery, 3V, Lithium.",
    en: "PBL1632, GP, Battery, 3V, Lithium.",
    ru: "PBL1632, GP, Battery, 3V, Lithium."
  },
  price: 3.6,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010186753.webp"]
},
{
  id: 721,
  barcode: "66010193355",
  title: {
    ka: "GPPVA9VAS781 1604A21-SBC1 bat Super ALKALINE GP 4891199002311",
    en: "GPPVA9VAS781 1604A21-SBC1 bat Super ALKALINE GP 4891199002311",
    ru: "GPPVA9VAS781 1604A21-SBC1 bat Super ALKALINE GP 4891199002311"
  },
  price: 4.1,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010193355.webp"]
},
{
  id: 722,
  barcode: "66010196210",
  title: {
    ka: "GPPCA24AS529, GP, Battery, AAAx4, Super Alkaline.",
    en: "GPPCA24AS529, GP, Battery, AAAx4, Super Alkaline.",
    ru: "GPPCA24AS529, GP, Battery, AAAx4, Super Alkaline."
  },
  price: 4.2,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010196210.webp"]
},
{
  id: 723,
  barcode: "66010192491",
  title: {
    ka: "GPPCA15UP200, GP AAx4, 15AUPETA21-2GSB4 bat. Ultra+ ALKALINE (AA) 4891199203923",
    en: "GPPCA15UP200, GP AAx4, 15AUPETA21-2GSB4 bat. Ultra+ ALKALINE (AA) 4891199203923",
    ru: "GPPCA15UP200, GP AAx4, 15AUPETA21-2GSB4 bat. Ultra+ ALKALINE (AA) 4891199203923"
  },
  price: 5.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010192491.webp"]
},
{
  id: 724,
  barcode: "66010189128",
  title: {
    ka: "PVA9VUP046, GP, Battery, 9V, 6LR61, Ultra Alkaline.",
    en: "PVA9VUP046, GP, Battery, 9V, 6LR61, Ultra Alkaline.",
    ru: "PVA9VUP046, GP, Battery, 9V, 6LR61, Ultra Alkaline."
  },
  price: 6.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010189128.webp"]
},
{
  id: 725,
  barcode: "66010191030",
  title: {
    ka: "PCA24UP178, GP, Battery, AAAx4, 1.5V, LR03, Ultra Alkaline.",
    en: "PCA24UP178, GP, Battery, AAAx4, 1.5V, LR03, Ultra Alkaline.",
    ru: "PCA24UP178, GP, Battery, AAAx4, 1.5V, LR03, Ultra Alkaline."
  },
  price: 6.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010191030.webp"]
},
{
  id: 726,
  barcode: "66010182498",
  title: {
    ka: "LR03/MX2400, DURACELL ultra 2xAAA (060425)",
    en: "LR03/MX2400, DURACELL ultra 2xAAA (060425)",
    ru: "LR03/MX2400, DURACELL ultra 2xAAA (060425)"
  },
  price: 6.1,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010182498.webp"]
},
{
  id: 727,
  barcode: "66010196228",
  title: {
    ka: "GPPCA14AS096, GP, Battery, Cx2 1.5V, LR14, Super Alkaline.",
    en: "GPPCA14AS096, GP, Battery, Cx2 1.5V, LR14, Super Alkaline.",
    ru: "GPPCA14AS096, GP, Battery, Cx2 1.5V, LR14, Super Alkaline."
  },
  price: 6.5,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010196228.webp"]
},
{
  id: 728,
  barcode: "66010163876",
  title: {
    ka: "DL/CR2032, DURACELL, Battery, 3V, 2 pack.",
    en: "DL/CR2032, DURACELL, Battery, 3V, 2 pack.",
    ru: "DL/CR2032, DURACELL, Battery, 3V, 2 pack."
  },
  price: 7.7,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010163876.webp"]
},
{
  id: 729,
  barcode: "66010172433",
  title: {
    ka: "DURACELL LI 2025 2BL (045514)",
    en: "DURACELL LI 2025 2BL (045514)",
    ru: "DURACELL LI 2025 2BL (045514)"
  },
  price: 7.7,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010172433.webp"]
},
{
  id: 730,
  barcode: "66010196225",
  title: {
    ka: "GPPCA13AS127, GP, Battery, Dx2, 1.5V Super Alkaline.",
    en: "GPPCA13AS127, GP, Battery, Dx2, 1.5V Super Alkaline.",
    ru: "GPPCA13AS127, GP, Battery, Dx2, 1.5V Super Alkaline."
  },
  price: 8.5,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010196225.webp"]
},
{
  id: 731,
  barcode: "66010192023",
  title: {
    ka: "GPPCA13UP037 GP 13AUP21-SB2 bat. Ultra+ ALKALINE (SIZE-D) 4891199220159",
    en: "GPPCA13UP037 GP 13AUP21-SB2 bat. Ultra+ ALKALINE (SIZE-D) 4891199220159",
    ru: "GPPCA13UP037 GP 13AUP21-SB2 bat. Ultra+ ALKALINE (SIZE-D) 4891199220159"
  },
  price: 8.9,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010192023.webp"]
},
{
  id: 732,
  barcode: "66010186340",
  title: {
    ka: "Duracell Basic LR6 / AA Blister 4pcs 5000394127050 1.5 ALKALINE LR6/MN1500",
    en: "Duracell Basic LR6 / AA Blister 4pcs 5000394127050 1.5 ALKALINE LR6/MN1500",
    ru: "Duracell Basic LR6 / AA Blister 4pcs 5000394127050 1.5 ALKALINE LR6/MN1500"
  },
  price: 10.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010186340.webp"]
},
{
  id: 733,
  barcode: "66010196231",
  title: {
    ka: "PCL123A136, GP, Battery, CR123A, Lithium Pro.",
    en: "PCL123A136, GP, Battery, CR123A, Lithium Pro.",
    ru: "PCL123A136, GP, Battery, CR123A, Lithium Pro."
  },
  price: 10.1,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010196231.webp"]
},
{
  id: 734,
  barcode: "66010192043",
  title: {
    ka: "GPRHCH63E041 GP65AAAHCER21-2TLB2 NiMH 1.2V 650mAh (AAA) x2 GP 4891199212666",
    en: "GPRHCH63E041 GP65AAAHCER21-2TLB2 NiMH 1.2V 650mAh (AAA) x2 GP 4891199212666",
    ru: "GPRHCH63E041 GP65AAAHCER21-2TLB2 NiMH 1.2V 650mAh (AAA) x2 GP 4891199212666"
  },
  price: 11.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010192043.webp"]
},
{
  id: 735,
  barcode: "66010186339",
  title: {
    ka: "Duracell Basic LR3 / AAA Blister 4 5000394127326 1.5 ALKALINE LR03/MN2400",
    en: "Duracell Basic LR3 / AAA Blister 4 5000394127326 1.5 ALKALINE LR03/MN2400",
    ru: "Duracell Basic LR3 / AAA Blister 4 5000394127326 1.5 ALKALINE LR03/MN2400"
  },
  price: 11.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010186339.webp"]
},
{
  id: 736,
  barcode: "66010187781",
  title: {
    ka: "6LR61/MN1604, Duracell Basic Blister 9V (125308)",
    en: "6LR61/MN1604, Duracell Basic Blister 9V (125308)",
    ru: "6LR61/MN1604, Duracell Basic Blister 9V (125308)"
  },
  price: 11.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010187781.webp"]
},
{
  id: 737,
  barcode: "66010179928",
  title: {
    ka: "5000394158696 DURACELL OPTIMUM AA 4x BKP CEE 3L, MX1500, 1.5V/B, UP TO 30X EXTRA LIFE",
    en: "5000394158696 DURACELL OPTIMUM AA 4x BKP CEE 3L, MX1500, 1.5V/B, UP TO 30X EXTRA LIFE",
    ru: "5000394158696 DURACELL OPTIMUM AA 4x BKP CEE 3L, MX1500, 1.5V/B, UP TO 30X EXTRA LIFE"
  },
  price: 12.0,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010179928.webp"]
},
{
  id: 738,
  barcode: "66010196227",
  title: {
    ka: "RHC103E041, GP, Battery, AAAx2, NiMH 1.2V 950mAh Rechargeable.",
    en: "RHC103E041, GP, Battery, AAAx2, NiMH 1.2V 950mAh Rechargeable.",
    ru: "RHC103E041, GP, Battery, AAAx2, NiMH 1.2V 950mAh Rechargeable."
  },
  price: 12.5,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010196227.webp"]
},
{
  id: 739,
  barcode: "66010192024",
  title: {
    ka: "GPRHC272E045, GP, Battery, AAx2 Rechargeable, NiMH 1.2V 2600mA.",
    en: "GPRHC272E045, GP, Battery, AAx2 Rechargeable, NiMH 1.2V 2600mA.",
    ru: "GPRHC272E045, GP, Battery, AAx2 Rechargeable, NiMH 1.2V 2600mA."
  },
  price: 21.5,
  inStock: true,
  category: "Electrical energy",
  subcategory: "External chargers",
  images: ["images/66010192024.webp"]
},
{
    id: 740,
    barcode: "1",
    title: {
      ka: "ერთჯერადი საპონი, 15გრ",
      en: "Disposable Soap, 15g",
      ru: "Одноразовое мыло, 15г"
    },
    price: 0.60,
    inStock: true,
    category: "Hotel",
    images: ["images/1.jpg"]
  },
  {
    id: 741,
    barcode: "2",
    title: {
      ka: "ერთჯერადი კბილის პასტა და ჯაგრისი (100*20)",
      en: "Disposable Toothpaste and Toothbrush (100*20)",
      ru: "Одноразовая зубная паста и щетка (100*20)"
    },
    price: 0.60,
    inStock: true,
    category: "Hotel",
    images: ["images/2.jpg"]
  },
  {
    id: 742,
    barcode: "3",
    title: {
      ka: "ერთჯერადი შხაპის გელი, 20მლ.",
      en: "Disposable Shower Gel, 20ml",
      ru: "Одноразовый гель для душа, 20мл."
    },
    price: 0.60,
    inStock: true,
    category: "Hotel",
    images: ["images/3.jpg"]
  },
  {
    id: 743,
    barcode: "4",
    title: {
      ka: "ერთჯერადი შამპუნი, 20მლ.",
      en: "Disposable Shampoo, 20ml",
      ru: "Одноразовый шампунь, 20мл."
    },
    price: 0.60,
    inStock: true,
    category: "Hotel",
    images: ["images/4.jpg"]
  },
  {
    id: 744,
    barcode: "5",
    title: {
      ka: "ერთჯერადი წვერის საპარსის ნაკრები 250 ცალი",
      en: "Disposable Shaving Kit, 250 pcs",
      ru: "Одноразовый набор для бритья, 250 шт."
    },
    price: 1.00,
    inStock: true,
    category: "Hotel",
    images: ["images/5.jpg"]
  },
  {
    id: 745,
    barcode: "6",
    title: {
      ka: "ერთჯერადი ჩუსტი თხელი სტანდარტული ზომის",
      en: "Disposable Slippers, Thin Standard Size",
      ru: "Одноразовые тапочки, тонкие, стандартный размер"
    },
    price: 1.30,
    inStock: true,
    category: "Hotel",
    images: ["images/6.jpg"]
  },
{
  id: 746,
  barcode: "11",
  title: {
    ka: "Jacobs Monarch იაკობსი ხსნადი ყავა 400გრ",
    en: "Jacobs Monarch Instant Coffee 400g",
    ru: "Jacobs Monarch Растворимый кофе 400г"
  },
  price: 45,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/11.jpg"]
},
{
  id: 747,
  barcode: "22",
  title: {
    ka: "Jacobs Monarch იაკობსი ხსნადი ყავა 300გრ",
    en: "Jacobs Monarch Instant Coffee 300g",
    ru: "Jacobs Monarch Растворимый кофе 300г"
  },
  price: 36.9,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/22.jpg"]
},
{
  id: 748,
  barcode: "33",
  title: {
    ka: "jacobs Monarch იაკობსი ხსნადი ყავა 190გრ",
    en: "Jacobs Monarch Instant Coffee 190g",
    ru: "Jacobs Monarch Растворимый кофе 190г"
  },
  price: 24,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/33.jpg"]
},
{
  id: 749,
  barcode: "44",
  title: {
    ka: "Jacobs იაკობსი ერთჯერადი ყავა კაპუჩინო 300გრ",
    en: "Jacobs Cappuccino Instant Coffee 300g",
    ru: "Jacobs Растворимый кофе Капучино 300г"
  },
  price: 12,
  inStock: true,
  category: "Office Food",
  subcategory: "disposable coffee",
  images: ["images/44.jpg"]
},
{
  id: 750,
  barcode: "55",
  title: {
    ka: "Jacobs იაკობსი ერთჯერადი ყავა ლატე 300გრ",
    en: "Jacobs Latte Instant Coffee 300g",
    ru: "Jacobs Растворимый кофе Латте 300г"
  },
  price: 12,
  inStock: true,
  category: "Office Food",
  subcategory: "disposable coffee",
  images: ["images/55.jpg"]
},
{
  id: 751,
  barcode: "66",
  title: {
    ka: "Jacobs იაკობსი ერთჯერადი ყავა ინტეზა 300გრ",
    en: "Jacobs Intenza Instant Coffee 300g",
    ru: "Jacobs Растворимый кофе Intenza 300г"
  },
  price: 12,
  inStock: true,
  category: "Office Food",
  subcategory: "disposable coffee",
  images: ["images/66.jpg"]
},
{
  id: 752,
  barcode: "77",
  title: {
    ka: "Jacobs იაკობსი ერთჯერადი ყავა კარამელი ლატე",
    en: "Jacobs Caramel Latte Instant Coffee",
    ru: "Jacobs Растворимый кофе Карамельный Латте"
  },
  price: 12,
  inStock: true,
  category: "Office Food",
  subcategory: "disposable coffee",
  images: ["images/77.jpg"]
},
{
  id: 753,
  barcode: "88",
  title: {
    ka: "ACOBS-იაკობსი MONARCH დაფქული ყავა 200გრ",
    en: "Jacobs Monarch Ground Coffee 200g",
    ru: "Jacobs Monarch Молотый кофе 200г"
  },
  price: 11.55,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/88.jpg"]
},
{
  id: 754,
  barcode: "99",
  title: {
    ka: "Jacobs იაკობსი მარცვალი 500გრ",
    en: "Jacobs Coffee Beans 500g",
    ru: "Jacobs Кофе в зернах 500г"
  },
  price: 39.9,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/1515.jpg"]
},
{
  id: 755,
  barcode: "1010",
  title: {
    ka: "ACOBS-იაკობსი MONARCH დაფქული ყავა 80გრ",
    en: "Jacobs Monarch Ground Coffee 80g",
    ru: "Jacobs Monarch Молотый кофе 80г"
  },
  price: 6.5,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/1010.jpg"]
},
{
  id: 756,
  barcode: "1212",
  title: {
    ka: "JACOBS კაფსულა ლუნგო ინტენსი 52გრ",
    en: "Jacobs Lungo Intenso Coffee Capsules 52g",
    ru: "Jacobs Кофейные капсулы Lungo Intenso 52г"
  },
  price: 11.3,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/1212.jpg"]
},
{
  id: 757,
  barcode: "1313",
  title: {
    ka: "JACOBS კაფსულა ესპრესო კლასიკი 52გრ",
    en: "Jacobs Espresso Classico Coffee Capsules 52g",
    ru: "Jacobs Кофейные капсулы Espresso Classico 52г"
  },
  price: 11.3,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/1313.jpg"]
},
{
  id: 758,
  barcode: "1414",
  title: {
    ka: "JACOBS კაფსულა ესპრესო ინტენსო 52გრ",
    en: "Jacobs Espresso Intenso Coffee Capsules 52g",
    ru: "Jacobs Кофейные капсулы Espresso Intenso 52г"
  },
  price: 11.3,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/1414.jpg"]
},
{
  id: 759,
  barcode: "1515",
  title: {
    ka: "JACOBS ყავის მარცვალი 1კგ",
    en: "Jacobs Coffee Beans 1kg",
    ru: "Jacobs Кофе в зернах 1кг"
  },
  price: 75.49,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/1515.jpg"]
},
{
  id: 760,
  barcode: "1616",
  title: {
    ka: "ჩაი გურიელი ტრადიციული შავი 50გრ",
    en: "Gurieli Traditional Black Tea 50g",
    ru: "Gurieli Традиционный черный чай 50г"
  },
  price: 5.19,
  inStock: true,
  category: "Office Food",
  subcategory: "tea",
  images: ["images/1616.jpg"]
},
{
  id: 761,
  barcode: "1717",
  title: {
    ka: "ჩაი გურიელი ტრადიციული მწვანე 50გრ",
    en: "Gurieli Traditional Green Tea 50g",
    ru: "Gurieli Традиционный зеленый чай 50г"
  },
  price: 4,
  inStock: true,
  category: "Office Food",
  subcategory: "tea",
  images: ["images/1717.jpg"]
},
{
  id: 762,
  barcode: "1818",
  title: {
    ka: "ჩაი გურიელი შავი ბერგამოტით 50გრ",
    en: "Gurieli Black Tea with Bergamot 50g",
    ru: "Gurieli Черный чай с бергамотом 50г"
  },
  price: 4,
  inStock: true,
  category: "Office Food",
  subcategory: "tea",
  images: ["images/1818.jpg"]
},
{
  id: 763,
  barcode: "1919",
  title: {
    ka: "ჩაი გურიელი ქართული კენკრა 50გრ",
    en: "Gurieli Georgian Berries Tea 50g",
    ru: "Gurieli Чай Грузинские ягоды 50г"
  },
  price: 4,
  inStock: true,
  category: "Office Food",
  subcategory: "tea",
  images: ["images/1919.jpg"]
},
{
  id: 764,
  barcode: "2020",
  title: {
    ka: "ჩაი გურიელი ტყის ხილი 50გრ",
    en: "Gurieli Forest Fruits Tea 50g",
    ru: "Gurieli Чай Лесные ягоды 50г"
  },
  price: 4,
  inStock: true,
  category: "Office Food",
  subcategory: "tea",
  images: ["images/2020.jpg"]
},
{
  id: 765,
  barcode: "2121",
  title: {
    ka: "ჩაი გურიელი ტრადიციული შავი 200გრ",
    en: "Gurieli Traditional Black Tea 200g",
    ru: "Gurieli Традиционный черный чай 200г"
  },
  price: 14.2,
  inStock: true,
  category: "Office Food",
  subcategory: "tea",
  images: ["images/2121.jpg"]
},
{
  id: 766,
  barcode: "2222",
  title: {
    ka: "\"GREENFIELD\"-შავი ჩაი \"გოლდენ ცეილონ\" 2გრX25ც",
    en: "Greenfield Golden Ceylon Black Tea 2g x 25",
    ru: "Greenfield Golden Ceylon Черный чай 2г x 25"
  },
  price: 5.6,
  inStock: true,
  category: "Office Food",
  subcategory: "tea",
  images: ["images/2222.jpg"]
},
{
  id: 767,
  barcode: "2323",
  title: {
    ka: "\"GREENFIELD\"-შავი ჩაი \"სანრაიზ\" 2გრx25ც",
    en: "Greenfield Sunrise Black Tea 2g x 25",
    ru: "Greenfield Sunrise Черный чай 2г x 25"
  },
  price: 5.6,
  inStock: true,
  category: "Office Food",
  subcategory: "tea",
  images: ["images/2323.jpg"]
},
{
  id: 768,
  barcode: "2424",
  title: {
    ka: "GREENFIELD-მწვანე ჩაი \"ფლაინგ დრაგონ\" 2გრX25ც",
    en: "Greenfield Flying Dragon Green Tea 2g x 25",
    ru: "Greenfield Flying Dragon Зеленый чай 2г x 25"
  },
  price: 5.6,
  inStock: true,
  category: "Office Food",
  subcategory: "tea",
  images: ["images/2424.jpg"]
},
{
  id: 769,
  barcode: "2525",
  title: {
    ka: "კარტ ნუარ 190გ ხსნადი ყავა",
    en: "Carte Noire Instant Coffee 190g",
    ru: "Carte Noire Растворимый кофе 190г"
  },
  price: 45,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/2525.jpg"]
},
{
  id: 770,
  barcode: "2626",
  title: {
    ka: "კარტ ნუარ 75გ ხსნადი ყავა",
    en: "Carte Noire Instant Coffee 75g",
    ru: "Carte Noire Растворимый кофе 75г"
  },
  price: 28,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/2626.jpg"]
},
{
  id: 771,
  barcode: "2727",
  title: {
    ka: "კარტ ნუარი ორიგინალი 800 გრ მარცვალი ყავა",
    en: "Carte Noire Original Coffee Beans 800g",
    ru: "Carte Noire Original Кофе в зернах 800г"
  },
  price: 85,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/2727.jpg"]
},
{
  id: 772,
  barcode: "2828",
  title: {
    ka: "კარტე ნუარი ერთჯერადი ხსნადი ყავა 1.8გრ",
    en: "Carte Noire Instant Coffee Sachet 1.8g",
    ru: "Carte Noire Растворимый кофе в стике 1.8г"
  },
  price: 0.8,
  inStock: true,
  category: "Office Food",
  subcategory: "disposable coffee",
  images: ["images/2828.jpg"]
},
{
  id: 773,
  barcode: "2929",
  title: {
    ka: "კარტე ნუარ- დაფქვილი ყავა Fine Grind 200გრ",
    en: "Carte Noire Fine Grind Ground Coffee 200g",
    ru: "Carte Noire Fine Grind Молотый кофе 200г"
  },
  price: 15,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/2929.jpg"]
},
{
  id: 774,
  barcode: "3030",
  title: {
    ka: "JACOBS-იაკობსი MONARCH ხსნადი ყავა შუშის ქილაში 190გრ",
    en: "Jacobs Monarch Instant Coffee in Glass Jar 190g",
    ru: "Jacobs Monarch Растворимый кофе в стеклянной банке 190г"
  },
  price: 27,
  inStock: true,
  category: "Office Food",
  subcategory: "coffe",
  images: ["images/3030.jpg"]
},
{
  id: 775,
  barcode: "3131",
  title: {
    ka: "შაქარი ყავისფერი \"ლერწმის\" 800 გრ",
    en: "Brown Cane Sugar 800g",
    ru: "Коричневый тростниковый сахар 800г"
  },
  price: 6,
  inStock: true,
  category: "Office Food",
  subcategory: "sugar",
  images: ["images/3131.jpg"]
},
{
  id: 776,
  barcode: "3232",
  title: {
    ka: "შაქარი ნატეხი \"აზერ შაქარი\" 150გრ",
    en: "Azer Shakar Cube Sugar 150g",
    ru: "Azer Shakar Кусковой сахар 150г"
  },
  price: 2.8,
  inStock: true,
  category: "Office Food",
  subcategory: "sugar",
  images: ["images/3232.jpg"]
},
{
  id: 777,
  barcode: "3333",
  title: {
    ka: "შაქარი \"ჯაკომო\" 800გრ",
    en: "Jakomo Sugar 800g",
    ru: "Jakomo Сахар 800г"
  },
  price: 5,
  inStock: true,
  category: "Office Food",
  subcategory: "sugar",
  images: ["images/3333.jpg"]
},
{
  id: 778,
  barcode: "3434",
  title: {
    ka: "შაქარი 0.9კგ სუპრემო",
    en: "Supremo Sugar 900g",
    ru: "Supremo Сахар 900г"
  },
  price: 5.55,
  inStock: true,
  category: "Office Food",
  subcategory: "sugar",
  images: ["images/3434.jpg"]
},
  {
    id: 779,
    barcode: "00-00036497",
    title: {
      ka: "Selpak სელპაკი ტუალეტის ქაღალდი 3 ფენა, 32ც",
      en: "Selpak Toilet Paper 3 Ply, 32 pcs",
      ru: "Selpak Туалетная бумага 3 слоя, 32 шт."
    },
    price: 33.45,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet paper",
    images: ["images/00-00036497.jpg"]
  },
  {
    id: 780,
    barcode: "00-147153",
    title: {
      ka: "ობუხოვი ტუალეტის ქაღალდი 1 ფენიანი",
      en: "Obukhov Toilet Paper 1 Ply",
      ru: "Obukhov Туалетная бумага 1 слой"
    },
    price: 1.6,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet paper",
    images: ["images/00-147153.jpg"]
  },
  {
    id: 781,
    barcode: "00-21155613",
    title: {
      ka: "NUA ტუალეტის ქაღალდი 32 ც (ნუა)",
      en: "NUA Toilet Paper 32 pcs",
      ru: "NUA Туалетная бумага 32 шт."
    },
    price: 29.99,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet paper",
    images: ["images/00-21155613.jpg"]
  },
  {
    id: 782,
    barcode: "00-00036497",
    title: {
      ka: "სოფია ტუალეტის ქაღალდი 32 sofia",
      en: "Sofia Toilet Paper 32 pcs",
      ru: "Sofia Туалетная бумага 32 шт."
    },
    price: 25,
    inStock: true,
    category: "Household Goods",
    subcategory: "Toilet paper",
    images: ["images/00-00036497.jpg"]
  },
  {
    id: 783,
    barcode: "00-21155616",
    title: {
      ka: "NUA სამზარეულოს პირსახოცი 12 ც (ნუა)",
      en: "NUA Kitchen Towels 12 pcs",
      ru: "NUA Кухонные полотенца 12 шт."
    },
    price: 20.99,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/00-21155616.jpg"]
  },
  {
    id: 784,
    barcode: "00-11150209",
    title: {
      ka: "KRIALA 2 ფენიანი სამზარეულოს ხელსახოცი 1 ც (კრიალა)",
      en: "KRIALA 2 Ply Kitchen Towel 1 pc",
      ru: "KRIALA Кухонное полотенце 2 слоя, 1 шт."
    },
    price: 2.99,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/00-11150209.jpg"]
  },
  {
    id: 785,
    barcode: "111111",
    title: {
      ka: "Selpak ქაღალდის ხელსახოცი სელპაკი 10ც",
      en: "Selpak Paper Napkins 10 pcs",
      ru: "Selpak Бумажные салфетки 10 шт."
    },
    price: 3.6,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/111111.jpg"]
  },
  {
    id: 786,
    barcode: "00-00000710",
    title: {
      ka: "SELPAK სამფენიანი სამზარეულოს პირსახოცი 2 ც (სელპაკი)",
      en: "SELPAK 3 Ply Kitchen Towels 2 pcs",
      ru: "SELPAK Кухонные полотенца 3 слоя, 2 шт."
    },
    price: 6.99,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/00-00000710.jpg"]
  },
  {
    id: 787,
    barcode: "00-00040616",
    title: {
      ka: "FAMILIA სამზარეულოს ხელსახოცი (ფამილია)",
      en: "FAMILIA Kitchen Napkins",
      ru: "FAMILIA Кухонные салфетки"
    },
    price: 6.7,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/00-00040616.jpg"]
  },
  {
    id: 788,
    barcode: "00-21151090",
    title: {
      ka: "SELPAK ხელსახოცი 100 ც (სელპაკი)",
      en: "SELPAK Paper Napkins 100 pcs",
      ru: "SELPAK Бумажные салфетки 100 шт."
    },
    price: 6.75,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/00-21151090.jpg"]
  },
  {
    id: 789,
    barcode: "00-21151701",
    title: {
      ka: "SELPAK ორფენიანი ხელსახოცი 75 ც (სელპაკი)",
      en: "SELPAK 2 Ply Paper Napkins 75 pcs",
      ru: "SELPAK Бумажные салфетки 2 слоя, 75 шт."
    },
    price: 5.95,
    inStock: true,
    category: "Household Goods",
    subcategory: "Paper napkins",
    images: ["images/00-21151701.jpg"]
  },
  {
    id: 790,
    barcode: "12015",
    title: {
      ka: "FINO ნაგვის პარკი 120 ლ 15 ც (ფინო)",
      en: "FINO Garbage Bags 120L 15 pcs",
      ru: "FINO Мусорные пакеты 120 л, 15 шт."
    },
    price: 16.5,
    inStock: true,
    category: "Household Goods",
    subcategory: "trash beg",
    images: ["images/12015.webp"]
  },
  {
    id: 791,
    barcode: "3515",
    title: {
      ka: "FINO ნაგვის პარკი სახელურით 35 ლ 15 ც (ფინო)",
      en: "FINO Garbage Bags with Handles 35L 15 pcs",
      ru: "FINO Мусорные пакеты с ручками 35 л, 15 шт."
    },
    price: 4.8,
    inStock: true,
    category: "Household Goods",
    subcategory: "trash beg",
    images: ["images/3515.webp"]
  },
  {
    id: 792,
    barcode: "3530",
    title: {
      ka: "FINO ნაგვის პარკი 35 ლ/30 ც (ფინო)",
      en: "FINO Garbage Bags 35L 30 pcs",
      ru: "FINO Мусорные пакеты 35 л, 30 шт."
    },
    price: 5.8,
    inStock: true,
    category: "Household Goods",
    subcategory: "trash beg",
    images: ["images/3530.webp"]
  },
  {
    id: 793,
    barcode: "6020",
    title: {
      ka: "FINO ნაგვის პარკი 60 ლ-20 ც (ფინო)",
      en: "FINO Garbage Bags 60L 20 pcs",
      ru: "FINO Мусорные пакеты 60 л, 20 шт."
    },
    price: 9.2,
    inStock: true,
    category: "Household Goods",
    subcategory: "trash beg",
    images: ["images/6020.webp"]
  },
  {
    id: 794,
    barcode: "9020",
    title: {
      ka: "ნაგვის პარკები Fino 90ლ 20ც",
      en: "FINO Garbage Bags 90L 20 pcs",
      ru: "FINO Мусорные пакеты 90 л, 20 шт."
    },
    price: 16.8,
    inStock: true,
    category: "Household Goods",
    subcategory: "trash beg",
    images: ["images/9020.jpg"]
  },
  {
    id: 795,
    barcode: "24010",
    title: {
      ka: "FINO ნაგვის პარკი 240ლ 10ც",
      en: "FINO Garbage Bags 240L 10 pcs",
      ru: "FINO Мусорные пакеты 240 л, 10 шт."
    },
    price: 18.4,
    inStock: true,
    category: "Household Goods",
    subcategory: "trash beg",
    images: ["images/24010.webp"]
  },
  {
    id: 796,
    barcode: "16010",
    title: {
      ka: "FINO ნაგვის პარკი 160 ლ 10 ც (ფინო)",
      en: "FINO Garbage Bags 160L 10 pcs",
      ru: "FINO Мусорные пакеты 160 л, 10 шт."
    },
    price: 19.2,
    inStock: true,
    category: "Household Goods",
    subcategory: "trash beg",
    images: ["images/16010.webp"]
  },
  {
    id: 797,
    barcode: "22296",
    title: {
      ka: "ბლოკნოტი 32K 100ფურც., 22296 DELI",
      en: "Deli Notebook 32K, 100 Sheets, 22296",
      ru: "Блокнот Deli 32K, 100 листов, 22296"
    },
    price: 26.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/22296.jpg"]
  },
  {
    id: 798,
    barcode: "22298",
    title: {
      ka: "ბლოკნოტი 25K 180ფურც., 22298 DELI",
      en: "Deli Notebook 25K, 180 Sheets, 22298",
      ru: "Блокнот Deli 25K, 180 листов, 22298"
    },
    price: 7.50,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/22298.jpg"]
  },
  {
    id: 799,
    barcode: "22295",
    title: {
      ka: "ბლოკნოტი 25K 96ფურც., 22295 DELI",
      en: "Deli Notebook 25K, 96 Sheets, 22295",
      ru: "Блокнот Deli 25K, 96 листов, 22295"
    },
    price: 8.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/22295.jpg"]
  },
  {
    id: 800,
    barcode: "E7903",
    title: {
      ka: "ბლოკნოტი 80 ფურცელი Deli Stationery",
      en: "Deli Stationery Notebook, 80 Sheets, 7903",
      ru: "Блокнот Deli Stationery, 80 листов, 7903"
    },
    price: 3.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/E7903.jpg"]
  },
  {
    id: 801,
    barcode: "E7902",
    title: {
      ka: "ბლოკნოტი 80 ფურცელი Deli Stationery",
      en: "Deli Stationery Notebook, 80 Sheets, 7902",
      ru: "Блокнот Deli Stationery, 80 листов, 7902"
    },
    price: 4.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/7902.jpg"]
  },
  {
    id: 802,
    barcode: "23218",
    title: {
      ka: "ბლოკნოტი A4 100ფურც., 23218 DELI",
      en: "Deli Notebook A4, 100 Sheets, 23218",
      ru: "Блокнот Deli A4, 100 листов, 23218"
    },
    price: 4.20,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/23218.jpg"]
  },
  {
    id: 803,
    barcode: "23216",
    title: {
      ka: "ბლოკნოტი A4 60ფურც., 23216 DELI",
      en: "Deli Notebook A4, 60 Sheets, 23216",
      ru: "Блокнот Deli A4, 60 листов, 23216"
    },
    price: 2.80,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/23216.jpg"]
  },
  {
    id: 804,
    barcode: "23217",
    title: {
      ka: "ბლოკნოტი A4 80ფურც., 23217 DELI",
      en: "Deli Notebook A4, 80 Sheets, 23217",
      ru: "Блокнот Deli A4, 80 листов, 23217"
    },
    price: 3.50,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/23217.jpg"]
  },
  {
    id: 805,
    barcode: "E3281",
    title: {
      ka: "ბლოკნოტი A4 98 ფურცელი Deli Stationery",
      en: "Deli Stationery Notebook A4, 98 Sheets, 3281",
      ru: "Блокнот Deli Stationery A4, 98 листов, 3281"
    },
    price: 6.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/E3281.jpg"]
  },
  {
    id: 806,
    barcode: "7711",
    title: {
      ka: "ბლოკნოტი A4 ზედა გასაშლელი ყდით 70 ფურცელი Deli Stationery",
      en: "Deli Stationery A4 Notebook, Top Opening Cover, 70 Sheets, 7711",
      ru: "Блокнот Deli Stationery A4, с верхней открывающейся обложкой, 70 листов, 7711"
    },
    price: 4.50,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/6921734977113.jpg"]
  },
  {
    id: 807,
    barcode: "N141L",
    title: {
      ka: "ბლოკნოტი A5 112ფურც. N141L ხაზი, DELI",
      en: "Deli A5 Notebook N141L, Lined, 112 Sheets",
      ru: "Блокнот Deli A5 N141L, в линейку, 112 листов"
    },
    price: 8.40,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/N141L.jpg"]
  },
  {
    id: 808,
    barcode: "N139G",
    title: {
      ka: "ბლოკნოტი A5 120 sheets მაგნიტური ჩამკეტით N139G, DELI",
      en: "Deli A5 Notebook N139G, Magnetic Closure, 120 Sheets",
      ru: "Блокнот Deli A5 N139G, с магнитной застежкой, 120 листов"
    },
    price: 12.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/N139G.jpg"]
  },
  {
    id: 809,
    barcode: "7912",
    title: {
      ka: "ბლოკნოტი A5 120 ფურცელი Deli Stationery",
      en: "Deli Stationery A5 Notebook, 120 Sheets, 7912",
      ru: "Блокнот Deli Stationery A5, 120 листов, 7912"
    },
    price: 5.50,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/7912.jpg"]
  },
  {
    id: 810,
    barcode: "E3315",
    title: {
      ka: "ბლოკნოტი A5 120 ფურცელი Deli Stationery",
      en: "Deli Stationery A5 Notebook, 120 Sheets, 3315",
      ru: "Блокнот Deli Stationery A5, 120 листов, 3315"
    },
    price: 13.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/E3315.jpg"]
  },
  {
    id: 811,
    barcode: "N139L",
    title: {
      ka: "ბლოკნოტი A5 120ფურც. N139L, DELI",
      en: "Deli A5 Notebook N139L, 120 Sheets",
      ru: "Блокнот Deli A5 N139L, 120 листов"
    },
    price: 12.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/N139L.jpg"]
  },
  {
    id: 812,
    barcode: "22263",
    title: {
      ka: "ბლოკნოტი 205x143.80ფ, 22263 DELI",
      en: "Deli Notebook 205 x 143 mm, 80 Sheets, 22263",
      ru: "Блокнот Deli 205×143 мм, 80 листов, 22263"
    },
    price: 5.60,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/22263.jpg"]
  },
  {
    id: 813,
    barcode: "3317",
    title: {
      ka: "ბლოკნოტი 250X175მმ 82 ფურცელი Deli Stationery",
      en: "Deli Stationery Notebook 250 x 175 mm, 82 Sheets, 3317",
      ru: "Блокнот Deli Stationery 250×175 мм, 82 листа, 3317"
    },
    price: 9.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/3317.jpg"]
  },
  {
    id: 814,
    barcode: "BP119",
    title: {
      ka: "ბლოკნოტი 110*75 96ფურც. BP119, DELI",
      en: "Deli Notebook 110 x 75 mm, 96 Sheets, BP119",
      ru: "Блокнот Deli 110×75 мм, 96 листов, BP119"
    },
    price: 2.80,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/BP119.jpg"]
  },
  {
    id: 815,
    barcode: "T16160",
    title: {
      ka: "ბლოკნოტი 16K 160ფურც., T16160 DELI",
      en: "Deli Notebook 16K, 160 Sheets, T16160",
      ru: "Блокнот Deli 16K, 160 листов, T16160"
    },
    price: 8.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/T16160.jpg"]
  },
  {
    id: 816,
    barcode: "N001",
    title: {
      ka: "ბლოკნოტი A5 120ფურც. უჯრა N001, DELI",
      en: "Deli A5 Notebook N001, Grid, 120 Sheets",
      ru: "Блокнот Deli A5 N001, в клетку, 120 листов"
    },
    price: 8.50,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/N001.jpg"]
  },
  {
    id: 817,
    barcode: "N130L",
    title: {
      ka: "ბლოკნოტი A5 96ფურც. N130L, DELI",
      en: "Deli A5 Notebook N130L, 96 Sheets",
      ru: "Блокнот Deli A5 N130L, 96 листов"
    },
    price: 7.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/N130L.jpg"]
  },
  {
    id: 818,
    barcode: "E3197",
    title: {
      ka: "ბლოკნოტი A5 Deli Stationery",
      en: "Deli Stationery A5 Notebook, 3197",
      ru: "Блокнот Deli Stationery A5, 3197"
    },
    price: 30.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/E3197.jpg"]
  },
  {
    id: 819,
    barcode: "7712",
    title: {
      ka: "ბლოკნოტი A5 ზედა გასაშლელი ყდით 70 ფურცელი Deli Stationery",
      en: "Deli Stationery A5 Notebook, Top Opening Cover, 70 Sheets, 7712",
      ru: "Блокнот Deli Stationery A5, с верхней открывающейся обложкой, 70 листов, 7712"
    },
    price: 2.50,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/7712.jpg"]
  },
  {
    id: 820,
    barcode: "7713",
    title: {
      ka: "ბლოკნოტი A6 ზედა გასაშლელი ყდით 70 ფურცელი Deli Stationery",
      en: "Deli Stationery A6 Notebook, Top Opening Cover, 70 Sheets, 7713",
      ru: "Блокнот Deli Stationery A6, с верхней открывающейся обложкой, 70 листов, 7713"
    },
    price: 1.20,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/7713.jpg"]
  },
  {
    id: 821,
    barcode: "E3185",
    title: {
      ka: "ბლოკნოტი ტყავის ყდით 3185, DELI",
      en: "Deli Notebook with Leather Cover, 3185",
      ru: "Блокнот Deli с кожаной обложкой, 3185"
    },
    price: 15.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/E3185.jpg"]
  },
  {
    id: 822,
    barcode: "რ11",
    title: {
      ka: "რვეული A5 ზამბარიანი 40ფურ",
      en: "A5 Spiral Notebook, 40 Sheets, R11",
      ru: "Тетрадь A5 на спирали, 40 листов, R11"
    },
    price: 1.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/რ11.jpg"]
  },
  {
    id: 823,
    barcode: "A4/სპეც",
    title: {
      ka: "ქაღალდის ქაღალდი A4 80გრ PROJECTA Special (500ც)",
      en: "PROJECTA Special A4 80gsm (500 sheets)",
      ru: "Бумага PROJECTA Special A4 80 г/м² (500 листов)"
    },
    price: 8.5,
    inStock: true,
    category: "paper",
    subcategory: "print_paper",
    images: ["images/ა4სპეც.jpg"]
  },
  {
    id: 824,
    barcode: "A4/ულტრა",
    title: {
      ka: "ქაღალდის ქაღალდი A4 80გრ PROJECTA ULTRA (500ც)",
      en: "PROJECTA ULTRA A4 80gsm (500 sheets)",
      ru: "Бумага PROJECTA ULTRA A4 80 г/м² (500 листов)"
    },
    price: 9.5,
    inStock: true,
    category: "paper",
    subcategory: "print_paper",
    images: ["images/ა4ულტრა.jpg"]
  },
  {
    id: 825,
    barcode: "250/108",
    title: {
      ka: "საბეჭდი ქაღალდი A4 160გრ 250(ფურც) 108 Bright White",
      en: "A4 160gsm Bright White Printing Paper 250 sheets",
      ru: "Бумага для печати A4 160 г/м² Bright White, 250 листов"
    },
    price: 21,
    inStock: true,
    category: "paper",
    subcategory: "print_paper",
    images: ["images/250108.jpg"]
  },
  {
    id: 826,
    barcode: "A4 D'A 100",
    title: {
      ka: "ქაღალდის (საბეჭდი) ქაღალდი A4 80გრ (100ც) Double A",
      en: "Double A A4 80gsm Printing Paper (100 sheets)",
      ru: "Бумага Double A A4 80 г/м² (100 листов)"
    },
    price: 3.2,
    inStock: true,
    category: "paper",
    subcategory: "print_paper",
    images: ["images/ა4დაDA100.jpg"]
  },
  {
    id: 827,
    barcode: "A5 D'A",
    title: {
      ka: "ქაღალდის (საბეჭდი) ქაღალდი A5 80გრ (500ც) Double A",
      en: "Double A A5 80gsm Printing Paper (500 sheets)",
      ru: "Бумага Double A A5 80 г/м² (500 листов)"
    },
    price: 7,
    inStock: true,
    category: "paper",
    subcategory: "print_paper",
    images: ["images/ა5დაDA.jpg"]
  },
  {
    id: 828,
    barcode: "A490გრ",
    title: {
      ka: "საბეჭდი ქაღალდი A4 90გრ (500ც) Color Print",
      en: "Color Print A4 90gsm Printing Paper (500 sheets)",
      ru: "Бумага Color Print A4 90 г/м² (500 листов)"
    },
    price: 15,
    inStock: true,
    category: "paper",
    subcategory: "print_paper",
    images: ["images/ა490გრ.png"]
  },
  {
    id: 829,
    barcode: "999408",
    title: {
      ka: "საბეჭდი ქაღალდი A3 70გრ 500 (ფურც) Double A",
      en: "Double A A3 70gsm Printing Paper (500 sheets)",
      ru: "Бумага Double A A3 70 г/м² (500 листов)"
    },
    price: 25,
    inStock: true,
    category: "paper",
    subcategory: "print_paper",
    images: ["images/999408.jpg"]
  },
  {
    id: 830,
    barcode: "451შ",
    title: {
      ka: "კარტრიჯი PGI-451BK (Black)",
      en: "PGI-451BK Cartridge (Black)",
      ru: "Картридж PGI-451BK (Black)"
    },
    price: 8,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/451შ.jpg"]
  },
  {
    id: 831,
    barcode: "451ლ",
    title: {
      ka: "კარტრიჯი PGI-451C (Cyan)",
      en: "PGI-451C Cartridge (Cyan)",
      ru: "Картридж PGI-451C (Cyan)"
    },
    price: 12,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/451ლ.jpg"]
  },
  {
    id: 832,
    barcode: "451წ",
    title: {
      ka: "კარტრიჯი PGI-451M (Magenta)",
      en: "PGI-451M Cartridge (Magenta)",
      ru: "Картридж PGI-451M (Magenta)"
    },
    price: 12,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/451წ.jpg"]
  },
  {
    id: 833,
    barcode: "450შ",
    title: {
      ka: "კარტრიჯი PGI-450PGBK (Pigment Black)",
      en: "PGI-450PGBK Cartridge (Pigment Black)",
      ru: "Картридж PGI-450PGBK (Pigment Black)"
    },
    price: 12,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/450შ.jpg"]
  },
  {
    id: 834,
    barcode: "CF233A",
    title: {
      ka: "კარტრიჯი CF233A",
      en: "CF233A Cartridge",
      ru: "Картридж CF233A"
    },
    price: 18,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/CF233A.jpg"]
  },
  {
    id: 835,
    barcode: "CF217A W/CHIP",
    title: {
      ka: "კარტრიჯი CF217A W/CHIP",
      en: "CF217A W/CHIP Cartridge",
      ru: "Картридж CF217A W/CHIP"
    },
    price: 20,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/CF217AWCHIP.jpg"]
  },
  {
    id: 836,
    barcode: "2612/303/FX10",
    title: {
      ka: "კარტრიჯი HPLJ1010/1020/M1005/CanonMF4018/LBP2900 Q2612 FX10/9 303/703 Universal",
      en: "Universal Cartridge HPLJ1010/1020/M1005/CanonMF4018/LBP2900 Q2612 FX10/9 303/703",
      ru: "Универсальный картридж HPLJ1010/1020/M1005/CanonMF4018/LBP2900 Q2612 FX10/9 303/703"
    },
    price: 20,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/2612303FX10.jpg"]
  },
  {
    id: 837,
    barcode: "278 728",
    title: {
      ka: "კარტრიჯი HPLJP1536/1560/1606 CE278/CanonMF4410/4570 CRG728/328",
      en: "Cartridge HPLJP1536/1560/1606 CE278/CanonMF4410/4570 CRG728/328",
      ru: "Картридж HPLJP1536/1560/1606 CE278/CanonMF4410/4570 CRG728/328"
    },
    price: 20,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/278728.jpg"]
  },
  {
    id: 838,
    barcode: "ეპ27",
    title: {
      ka: "კარტრიჯი Canon LBP 3200/3110 EP-27/EP-26",
      en: "Canon LBP 3200/3110 EP-27/EP-26 Cartridge",
      ru: "Картридж Canon LBP 3200/3110 EP-27/EP-26"
    },
    price: 25,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/ეპ27.jpg"]
  },
  {
    id: 839,
    barcode: "CF212ACC322/CB542UNI",
    title: {
      ka: "კარტრიჯი CF212ACC322/CB542UNI",
      en: "CF212ACC322/CB542UNI Cartridge",
      ru: "Картридж CF212ACC322/CB542UNI"
    },
    price: 25,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/CF212ACC322CB542UNI.jpg"]
  },
  {
    id: 840,
    barcode: "351კ",
    title: {
      ka: "კარტრიჯი HP130A Cyan M153/M176/M177 CF351A",
      en: "HP130A Cyan M153/M176/M177 CF351A Cartridge",
      ru: "Картридж HP130A Cyan M153/M176/M177 CF351A"
    },
    price: 25,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/351კ.jpg"]
  },
  {
    id: 841,
    barcode: "353კ",
    title: {
      ka: "კარტრიჯი HP130A Magenta M153/M176/M177 CF353A",
      en: "HP130A Magenta M153/M176/M177 CF353A Cartridge",
      ru: "Картридж HP130A Magenta M153/M176/M177 CF353A"
    },
    price: 25,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/353კ.jpg"]
  },
  {
    id: 842,
    barcode: "2160კ დ101",
    title: {
      ka: "კარტრიჯი Samsung ML-2160/2165/2165W/SCX3405/3400 D101",
      en: "Samsung ML-2160/2165/2165W/SCX3405/3400 D101 Cartridge",
      ru: "Картридж Samsung ML-2160/2165/2165W/SCX3405/3400 D101"
    },
    price: 25,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/2160კ_დ101.jpg"]
  },
  {
    id: 843,
    barcode: "MLT-D115L",
    title: {
      ka: "კარტრიჯი Samsung SL-M2620/2820/M2670/2870 MLT-D115L",
      en: "Samsung SL-M2620/2820/M2670/2870 MLT-D115L Cartridge",
      ru: "Картридж Samsung SL-M2620/2820/M2670/2870 MLT-D115L"
    },
    price: 25,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/MLT-D115L.jpg"]
  },
  {
    id: 844,
    barcode: "4600//",
    title: {
      ka: "კარტრიჯი Samsung SCX-4600 MLT D105",
      en: "Samsung SCX-4600 MLT D105 Cartridge",
      ru: "Картридж Samsung SCX-4600 MLT D105"
    },
    price: 30,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/4600.jpg"]
  },
  {
    id: 845,
    barcode: "დ111/2022",
    title: {
      ka: "კარტრიჯი Xpress M2022/2020/2070/2071 MLT-D111S არაორიგინალი",
      en: "Xpress M2022/2020/2070/2071 MLT-D111S Compatible Cartridge",
      ru: "Совместимый картридж Xpress M2022/2020/2070/2071 MLT-D111S"
    },
    price: 30,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/დ111_2022.jpg"]
  },
  {
    id: 846,
    barcode: "203/204Lex",
    title: {
      ka: "კარტრიჯი Lexmark LJ X203/X204",
      en: "Lexmark LJ X203/X204 Cartridge",
      ru: "Картридж Lexmark LJ X203/X204"
    },
    price: 30,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/203204Lex.jpg"]
  },
  {
    id: 847,
    barcode: "411",
    title: {
      ka: "კარტრიჯი HP LJ Pro400color CE411A",
      en: "HP LJ Pro400color CE411A Cartridge",
      ru: "Картридж HP LJ Pro400color CE411A"
    },
    price: 40,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/411.jpg"]
  },
  {
    id: 848,
    barcode: "3215/3225/3052/3260",
    title: {
      ka: "კარტრიჯი Xerox WC 3215H/3225H/Phaser 3052H/3260",
      en: "Xerox WC 3215H/3225H/Phaser 3052H/3260 Cartridge",
      ru: "Картридж Xerox WC 3215H/3225H/Phaser 3052H/3260"
    },
    price: 45,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/3215322530523260.jpg"]
  },
  {
    id: 849,
    barcode: "390ა",
    title: {
      ka: "კარტრიჯი HPLJ Enterprise M601 CE390A",
      en: "HP LJ Enterprise M601 CE390A Cartridge",
      ru: "Картридж HP LJ Enterprise M601 CE390A"
    },
    price: 45,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/390ა.jpg"]
  },
  {
    id: 850,
    barcode: "7551",
    title: {
      ka: "კარტრიჯი HP LJ P3005 7551C",
      en: "HP LJ P3005 7551C Cartridge",
      ru: "Картридж HP LJ P3005 7551C"
    },
    price: 60,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/7551.jpg"]
  },
  {
    id: 851,
    barcode: "410/510",
    title: {
      ka: "კარტრიჯი Lexmark MX310/410/510/610/611 60F2H00",
      en: "Lexmark MX310/410/510/610/611 60F2H00 Cartridge",
      ru: "Картридж Lexmark MX310/410/510/610/611 60F2H00"
    },
    price: 90,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/410510.jpg"]
  },
  {
    id: 852,
    barcode: "7551X",
    title: {
      ka: "კარტრიჯი HP LJ P3005, P3005d, P3005dn 7551X",
      en: "HP LJ P3005, P3005d, P3005dn 7551X Cartridge",
      ru: "Картридж HP LJ P3005, P3005d, P3005dn 7551X"
    },
    price: 100,
    inStock: true,
    category: "Computers",
    subcategory: "Cartridge",
    images: ["images/7551X.jpg"]
  },
   {
    id: 853,
    barcode: "E3344",
    title: {
      ka: "ბლოკნოტი 250mm*175mm/120ფურც 3344 DELI",
      en: "Deli Notebook 250mm x 175mm, 120 Sheets, 3344",
      ru: "Блокнот Deli 250×175 мм, 120 листов, 3344"
    },
    price: 13.00,
    inStock: true,
    category: "paper",
    subcategory: "notebook",
    images: ["images/E3344.jpg"]
  },
  {
    id: 854,
    barcode: "C018HB",
    title: {
      ka: "ფანქარი 12ც. HB C018HB, DELI",
      en: "Pencil 12ც. HB C018HB, DELI",
      ru: "Карандаш 12ც. HB C018HB, DELI"
    },
    price: 2.50,
    inStock: true,
    category: "writing",
    subCategory: "pencil",
    images: ["images/C018HB.JPG"]
  },
  {
    id: 855,
    barcode: "C003HB",
    title: {
      ka: "ფანქარი HB(12ცალი) C003HB , DELI",
      en: "Pencil HB(12pcs) C003HB , DELI",
      ru: "Карандаш HB(12шт.) C003HB , DELI"
    },
    price: 2.75,
    inStock: true,
    category: "writing",
    subCategory: "pencil",
    images: ["images/C003HB.JPG"]
  },
  {
    id: 856,
    barcode: "58103",
    title: {
      ka: "ფანქარი 12ც 2B 58103 , Deli",
      en: "Pencil 12ც 2B 58103 , Deli",
      ru: "Карандаш 12ц 2B 58103 , Deli"
    },
    price: 3.20,
    inStock: true,
    category: "writing",
    subCategory: "pencil",
    images: ["images/58103.JPG"]
  },
  {
    id: 857,
    barcode: "C007HB",
    title: {
      ka: "ფანქარი HB(12ცალი) C007HB , DELI",
      en: "Pencil HB(12pcs) C007HB , DELI",
      ru: "Карандаш HB(12шт.) C007HB , DELI"
    },
    price: 3.40,
    inStock: true,
    category: "writing",
    subCategory: "pencil",
    images: ["images/C007HB.JPG"]
  },
  {
    id: 858,
    barcode: "U50806",
    title: {
      ka: "ფანქარი 2B (50 ცალიანი შეკვრა) Deli Stationery",
      en: "Pencil 2B (50 pcsანი pack) Deli Stationery",
      ru: "Карандаш 2B (50 шт.ანი упаковка) Deli Stationery"
    },
    price: 10.00,
    inStock: true,
    category: "writing",
    subCategory: "pencil",
    images: ["images/U50806.JPG"]
  },
  {
    id: 859,
    barcode: "39761",
    title: {
      ka: "ფანქრის სათლელი 39761 , DELI",
      en: "ფანქრის Pencil Sharpener 39761 , DELI",
      ru: "ფანქრის Точилка 39761 , DELI"
    },
    price: 0.50,
    inStock: true,
    category: "stationery",
    subCategory: "sharpener",
    images: ["images/39761.JPG"]
  },
  {
    id: 860,
    barcode: "R00803",
    title: {
      ka: "სათლელი R00803 , DELI",
      en: "Pencil Sharpener R00803 , DELI",
      ru: "Точилка R00803 , DELI"
    },
    price: 0.80,
    inStock: true,
    category: "stationery",
    subCategory: "sharpener",
    images: ["images/R00803.JPG"]
  },
  {
    id: 861,
    barcode: "68660",
    title: {
      ka: "სათლელი 68660 , DELI",
      en: "Pencil Sharpener 68660 , DELI",
      ru: "Точилка 68660 , DELI"
    },
    price: 1.50,
    inStock: true,
    category: "stationery",
    subCategory: "sharpener",
    images: ["images/68660.JPG"]
  },
  {
    id: 862,
    barcode: "Q00530",
    title: {
      ka: "კალამი ბურთულიანი 0.7mm წვერით ლურჯი Deli Stationery",
      en: "Pen ბურთუLიანი 0.7mm tip Lურჯი Deli Stationery",
      ru: "Ручка ბურთუлიანი 0.7mm с наконечником лურჯი Deli Stationery"
    },
    price: 0.60,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/Q00530.JPG"]
  },
  {
    id: 863,
    barcode: "Z4",
    title: {
      ka: "კალამი ბურთულიანი 0.7 წვერით Vinson Z4",
      en: "Pen ბურთუLიანი 0.7 tip Vinson Z4",
      ru: "Ручка ბურთუлიანი 0.7 с наконечником Vinson Z4"
    },
    price: 0.70,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/Z4.JPG"]
  },
  {
    id: 864,
    barcode: "8901015263003",
    title: {
      ka: "ბურთულიანი კალამი MONTEX GLIDER",
      en: "Ballpoint Pen MONTEX GLIDER",
      ru: "Шариковая ручка MONTEX GLIDER"
    },
    price: 0.70,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/8901015263003.JPG"]
  },
  {
    id: 865,
    barcode: "8901015231019",
    title: {
      ka: "ბურთულიანი კალამი MONTEX GALAXY",
      en: "Ballpoint Pen MONTEX GALAXY",
      ru: "Шариковая ручка MONTEX GALAXY"
    },
    price: 0.70,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/8901015231019.JPG"]
  },
  {
    id: 866,
    barcode: "Q90",
    title: {
      ka: "კალამი ბურთულიანი 0.7mm Q90 Blue, DELI",
      en: "Pen ბურთუLიანი 0.7mm Q90 Blue, DELI",
      ru: "Ручка ბურთუлიანი 0.7mm Q90 Blue, DELI"
    },
    price: 0.60,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/Q90.JPG"]
  },
  {
    id: 867,
    barcode: "Q10530",
    title: {
      ka: "გელიანი კალამი 0.5მმ წვერით ლურჯი Deli Stationery",
      en: "Gel Pen 0.5mm tip Lურჯი Deli Stationery",
      ru: "Гелевая ручка 0.5мм с наконечником лურჯი Deli Stationery"
    },
    price: 0.70,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/Q10530.JPG"]
  },
  {
    id: 868,
    barcode: "PT186",
    title: {
      ka: "კალამი ბურთულიანი 0.7 წვერით Piano",
      en: "Pen ბურთუLიანი 0.7 tip Piano",
      ru: "Ручка ბურთუлიანი 0.7 с наконечником Piano"
    },
    price: 0.70,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/PT186.JPG"]
  },
  {
    id: 869,
    barcode: "BL-SG-7-L",
    title: {
      ka: "გელიანი კალამი - Super Gel - Pilot 0.7მმ წვერით Pilot",
      en: "Gel Pen - Super Gel - Pilot 0.7mm tip Pilot",
      ru: "Гелевая ручка - Super Gel - Pilot 0.7мм с наконечником Pilot"
    },
    price: 1.95,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/BL-SG-7-L.JPG"]
  },
  {
    id: 870,
    barcode: "U052-BL",
    title: {
      ka: "დაფის მარკერი ლურჯი U052-BL Blue, DELI",
      en: "Whiteboard Marker Lურჯი U052-BL Blue, DELI",
      ru: "Маркер для доски лურჯი U052-BL Blue, DELI"
    },
    price: 1.00,
    inStock: true,
    category: "writing",
    subCategory: "markers",
    images: ["images/U052-BL.JPG"]
  },
  {
    id: 871,
    barcode: "U052-BK",
    title: {
      ka: "დაფის მარკერი შავი U052-BK Black, DELI",
      en: "Whiteboard Marker Black U052-BK Black, DELI",
      ru: "Маркер для доски черный U052-BK Black, DELI"
    },
    price: 1.00,
    inStock: true,
    category: "writing",
    subCategory: "markers",
    images: ["images/U052-BK.JPG"]
  },
  {
    id: 872,
    barcode: "U500-BK",
    title: {
      ka: "მარკერი Paint Marker U500-BK BLACK , DELI",
      en: "Marker Paint Marker U500-BK BLACK , DELI",
      ru: "Маркер Paint Marker U500-BK BLACK , DELI"
    },
    price: 1.50,
    inStock: true,
    category: "writing",
    subCategory: "markers",
    images: ["images/U500-BK.JPG"]
  },
  {
    id: 873,
    barcode: "U500-GD",
    title: {
      ka: "მარკერი Paint Marker U500-GD GOLDEN , DELI",
      en: "Marker Paint Marker U500-GD GOLDEN , DELI",
      ru: "Маркер Paint Marker U500-GD GOLDEN , DELI"
    },
    price: 1.50,
    inStock: true,
    category: "writing",
    subCategory: "markers",
    images: ["images/U500-GD.JPG"]
  },
  {
    id: 874,
    barcode: "U500-SL",
    title: {
      ka: "მარკერი Paint Marker U500-SL SILVER , DELI",
      en: "Marker Paint Marker U500-SL SILVER , DELI",
      ru: "Маркер Paint Marker U500-SL SILVER , DELI"
    },
    price: 1.50,
    inStock: true,
    category: "writing",
    subCategory: "markers",
    images: ["images/U500-SL.JPG"]
  },
  {
    id: 875,
    barcode: "EU00101",
    title: {
      ka: "დაფის მარკერი 4 ფერიანი შეკვრა Deli Stationery",
      en: "Whiteboard Marker 4 colored pack Deli Stationery",
      ru: "Маркер для доски 4 цветной упаковка Deli Stationery"
    },
    price: 3.00,
    inStock: true,
    category: "writing",
    subCategory: "markers",
    images: ["images/EU00101.JPG"]
  },
  {
    id: 876,
    barcode: "U10101",
    title: {
      ka: "მარკერი პერმანენტული 4ცალი U10101, DELI",
      en: "Marker Permanent 4pcs U10101, DELI",
      ru: "Маркер პერმანენტუлი 4шт. U10101, DELI"
    },
    price: 3.00,
    inStock: true,
    category: "writing",
    subCategory: "markers",
    images: ["images/U10101.JPG"]
  },
  {
    id: 877,
    barcode: "S506",
    title: {
      ka: "დაფის მარკერი 12ფ, S506 DELI",
      en: "Whiteboard Marker 12ფ, S506 DELI",
      ru: "Маркер для доски 12ფ, S506 DELI"
    },
    price: 9.70,
    inStock: true,
    category: "writing",
    subCategory: "markers",
    images: ["images/S506.JPG"]
  },
  {
    id: 878,
    barcode: "7536",
    title: {
      ka: "საშლელი 42X17X10მმ Deli Stationery",
      en: "Eraser 42X17X10mm Deli Stationery",
      ru: "Ластик 42X17X10мм Deli Stationery"
    },
    price: 0.30,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/7536.JPG"]
  },
  {
    id: 879,
    barcode: "7534",
    title: {
      ka: "საშლელი 4B Deli Stationery",
      en: "Eraser 4B Deli Stationery",
      ru: "Ластик 4B Deli Stationery"
    },
    price: 0.40,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/7534.JPG"]
  },
  {
    id: 880,
    barcode: "E7003",
    title: {
      ka: "მექანიკური ფანქრის გული 0.5mm 2B Deli Stationery",
      en: "Mechanical Pencil Leads 0.5mm 2B Deli Stationery",
      ru: "Грифели для механического карандаша 0.5mm 2B Deli Stationery"
    },
    price: 0.70,
    inStock: true,
    category: "Household Goods",
    subCategory: "Other",
    images: ["images/E7003.JPG"]
  },
  {
    id: 881,
    barcode: "SH209",
    title: {
      ka: "მექანიკური ფანქრის გული HB 0.5-60mm SH209 , DELI",
      en: "Mechanical Pencil Leads HB 0.5-60mm SH209 , DELI",
      ru: "Грифели для механического карандаша HB 0.5-60mm SH209 , DELI"
    },
    price: 1.00,
    inStock: true,
    category: "Household Goods",
    subCategory: "Other",
    images: ["images/SH209.JPG"]
  },
  {
    id: 882,
    barcode: "S1209",
    title: {
      ka: "ფანქარი მექანიკური 0.7მმ წვერით S1209 ,DELI",
      en: "Pencil მექანიკური 0.7mm tip S1209 ,DELI",
      ru: "Карандаш მექანიკური 0.7мм с наконечником S1209 ,DELI"
    },
    price: 1.70,
    inStock: true,
    category: "writing",
    subCategory: "pencil",
    images: ["images/S1209.JPG"]
  },
    {
    id: 883,
    barcode: "H01800",
    title: {
      ka: "საშლელი φ22x130mm H01800,DELI",
      en: "Eraser φ22x130mm H01800,DELI",
      ru: "Ластик φ22x130mm H01800,DELI"
    },
    price: 1.80,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/H01800.JPG"]
  },
  {
    id: 884,
    barcode: "6034",
    title: {
      ka: "მაკრატელი 16სმ Deli Stationery",
      en: "Scissors 16cm Deli Stationery",
      ru: "Ножницы 16см Deli Stationery"
    },
    price: 2.70,
    inStock: true,
    category: "stationery",
    subCategory: "utility_knife",
    images: ["images/6034.JPG"]
  },
  {
    id: 885,
    barcode: "6027",
    title: {
      ka: "მაკრატელი 17.5 Deli Stationery",
      en: "Scissors 17.5 Deli Stationery",
      ru: "Ножницы 17.5 Deli Stationery"
    },
    price: 6.00,
    inStock: true,
    category: "stationery",
    subCategory: "utility_knife",
    images: ["images/6027.JPG"]
  },
  {
    id: 886,
    barcode: "6053",
    title: {
      ka: "მაკრატელი 17.5სმ Deli Stationery",
      en: "Scissors 17.5cm Deli Stationery",
      ru: "Ножницы 17.5см Deli Stationery"
    },
    price: 8.50,
    inStock: true,
    category: "stationery",
    subCategory: "utility_knife",
    images: ["images/6053.JPG"]
  },
  {
    id: 887,
    barcode: "A10602",
    title: {
      ka: "გვერდის მოსანიშნი Deli Stationery",
      en: "Page Marker Deli Stationery",
      ru: "Закладки-маркеры Deli Stationery"
    },
    price: 1.80,
    inStock: true,
    category: "paper",
    subCategory: "sticky_notes",
    images: ["images/A10602.JPG"]
  },
  {
    id: 888,
    barcode: "6921734943460",
    title: {
      ka: "გვერდის მოსანიშნი 76×19mm,4×100sh. A11202 , DELI",
      en: "Page Marker 76×19mm,4×100sh. A11202 , DELI",
      ru: "Закладки-маркеры 76×19mm,4×100sh. A11202 , DELI"
    },
    price: 2.00,
    inStock: true,
    category: "paper",
    subCategory: "sticky_notes",
    images: ["images/6921734943460.JPG"]
  },
  {
    id: 889,
    barcode: "8080500",
    title: {
      ka: "ჩასანიშნი ქაღალდი ფერადი 80*80 500 ფურცელი",
      en: "Sticky Notes Colored 80*80 500 sheets",
      ru: "Бумага для заметок цветной 80*80 500 листов"
    },
    price: 2.00,
    inStock: true,
    category: "paper",
    subCategory: "sticky_notes",
    images: ["images/8080500.JPG"]
  },
  {
    id: 890,
    barcode: "TH15",
    title: {
      ka: "ჩასანიშნი ქაღალდი 85*85 300 ფურცელი",
      en: "Sticky Notes 85*85 300 sheets",
      ru: "Бумага для заметок 85*85 300 листов"
    },
    price: 3.30,
    inStock: true,
    category: "paper",
    subCategory: "sticky_notes",
    images: ["images/TH15.JPG"]
  },
  {
    id: 891,
    barcode: "TH12",
    title: {
      ka: "ჩასანიშნი ქაღალდი 85*85 500 ფურცელი",
      en: "Sticky Notes 85*85 500 sheets",
      ru: "Бумага для заметок 85*85 500 листов"
    },
    price: 4.00,
    inStock: true,
    category: "paper",
    subCategory: "sticky_notes",
    images: ["images/TH12.JPG"]
  },
  {
    id: 892,
    barcode: "9090871",
    title: {
      ka: "ჩასანიშნი ქაღალდი ფერადი 90*90*871 Plastic box",
      en: "Sticky Notes Colored 90*90*871 Plastic box",
      ru: "Бумага для заметок цветной 90*90*871 Plastic box"
    },
    price: 5.80,
    inStock: true,
    category: "paper",
    subCategory: "sticky_notes",
    images: ["images/9090871.JPG"]
  },
  {
    id: 893,
    barcode: "900203",
    title: {
      ka: "ჭიკარტი 100ც 0020 Deli Stationery",
      en: "Push Pins 100 pcs 0020 Deli Stationery",
      ru: "Кнопки 100 шт. 0020 Deli Stationery"
    },
    price: 1.00,
    inStock: true,
    category: "stationery",
    subCategory: "rubber",
    images: ["images/900203.JPG"]
  },
  {
    id: 894,
    barcode: "900210",
    title: {
      ka: "ჭიკარტი ლურსმანი 35 ცალიანი Deli Stationery",
      en: "Push Pins Nail Type 35 pcs Deli Stationery",
      ru: "Кнопки-гвоздики 35 шт. Deli Stationery"
    },
    price: 1.40,
    inStock: true,
    category: "stationery",
    subCategory: "rubber",
    images: ["images/900210.JPG"]
  },
  {
    id: 895,
    barcode: "E0030",
    title: {
      ka: "ჭიკარტი (100 ცალი) - ნეონი Deli Stationery",
      en: "Push Pins (100 pcs) - Neon Deli Stationery",
      ru: "Кнопки (100 шт.) - Неон Deli Stationery"
    },
    price: 2.80,
    inStock: true,
    category: "stationery",
    subCategory: "rubber",
    images: ["images/E0030.JPG"]
  },
  {
    id: 896,
    barcode: "0031",
    title: {
      ka: "ჭიკარტი ლურსმანი (100ც) Deli Stationery",
      en: "Push Pins Nail Type (100 pcs) Deli Stationery",
      ru: "Кнопки-гвоздики (100 шт.) Deli Stationery"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    subCategory: "rubber",
    images: ["images/0031.JPG"]
  },
  {
    id: 897,
    barcode: "4316",
    title: {
      ka: "სამაგიდე სანათი 4316 , DELI",
      en: "Desk Lamp 4316 , DELI",
      ru: "Настольная лампа 4316 , DELI"
    },
    price: 34.00,
    inStock: true,
    category: "office",
    subCategory: "desk_lamp",
    images: ["images/4316.JPG"]
  },
  {
    id: 898,
    barcode: "E3933",
    title: {
      ka: "ლაზერული კალამი 3933, DELI",
      en: "Laser Pointer Pen 3933, DELI",
      ru: "Лазерная указка-ручка 3933, DELI"
    },
    price: 10.00,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/E3933.JPG"]
  },
  {
    id: 899,
    barcode: "50870",
    title: {
      ka: "მაგნიტური ჩარჩო A3 50870, DELI",
      en: "Magnetic Frame A3 50870, DELI",
      ru: "Магнитная рамка A3 50870, DELI"
    },
    price: 13.00,
    inStock: true,
    category: "stationery",
    subCategory: "Frame",
    images: ["images/50870.JPG"]
  },
  {
    id: 900,
    barcode: "3045AER",
    title: {
      ka: "დაფა მაგნიტური 30*45",
      en: "Magnetic Whiteboard 30*45",
      ru: "Магнитная доска 30*45"
    },
    price: 12.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/3045AER.JPG"]
  },
  {
    id: 901,
    barcode: "4560AER",
    title: {
      ka: "დაფა მაგნიტური 45*60",
      en: "Magnetic Whiteboard 45*60",
      ru: "Магнитная доска 45*60"
    },
    price: 18.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/4560AER.JPG"]
  },
  {
    id: 902,
    barcode: "60/90AER",
    title: {
      ka: "დაფა მაგნიტური 60*90",
      en: "Magnetic Whiteboard 60*90",
      ru: "Магнитная доска 60*90"
    },
    price: 24.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/60/90AER.JPG"]
  },
  {
    id: 903,
    barcode: "90120AER",
    title: {
      ka: "დაფა მაგნიტური 90*120",
      en: "Magnetic Whiteboard 90*120",
      ru: "Магнитная доска 90*120"
    },
    price: 50.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/90120AER.JPG"]
  },
  {
    id: 904,
    barcode: "GR90120",
    title: {
      ka: "დაფა მაგნიტური 90*120 GR90120",
      en: "Magnetic Whiteboard 90*120 GR90120",
      ru: "Магнитная доска 90*120 GR90120"
    },
    price: 50.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/GR90120.JPG"]
  },
  {
    id: 905,
    barcode: "7816",
    title: {
      ka: "დაფა მაგნიტური ჩამოსაკიდი 60*90სმ Deli Stationery",
      en: "Hanging Magnetic Whiteboard 60*90cm Deli Stationery",
      ru: "Подвесная магнитная доска 60*90см Deli Stationery"
    },
    price: 60.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/7816.JPG"]
  },
  {
    id: 906,
    barcode: "100150AER",
    title: {
      ka: "დაფა მაგნიტური 100*150",
      en: "Magnetic Whiteboard 100*150",
      ru: "Магнитная доска 100*150"
    },
    price: 65.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/100150AER.JPG"]
  },
  {
    id: 907,
    barcode: "100200W",
    title: {
      ka: "დაფა მაგნიტური 100*200 ორმხრივი",
      en: "Magnetic Whiteboard 100*200 Double-Sided",
      ru: "Магнитная доска 100*200 двусторонняя"
    },
    price: 110.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/100200W.JPG"]
  },
  {
    id: 908,
    barcode: "120240W",
    title: {
      ka: "დაფა მაგნიტური 120*240 W120240",
      en: "Magnetic Whiteboard 120*240 W120240",
      ru: "Магнитная доска 120*240 W120240"
    },
    price: 130.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/120240W.JPG"]
  },
  {
    id: 909,
    barcode: "E7881",
    title: {
      ka: "მაგნიტური დაფა სადგამით 60*90სმ ორმხრივი Deli Stationery",
      en: "Magnetic Whiteboard with Stand 60*90cm Double-Sided Deli Stationery",
      ru: "Магнитная доска с подставкой 60*90см двусторонняя Deli Stationery"
    },
    price: 200.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/E7881.JPG"]
  },
  {
    id: 910,
    barcode: "E7882",
    title: {
      ka: "დაფა მაგნიტური სადგამით 90*120 ორმხრივი Deli Stationery",
      en: "Magnetic Whiteboard with Stand 90*120 Double-Sided Deli Stationery",
      ru: "Магнитная доска с подставкой 90*120 двусторонняя Deli Stationery"
    },
    price: 280.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/E7882.JPG"]
  },
  {
    id: 911,
    barcode: "E7883",
    title: {
      ka: "მაგნიტური დაფა სადგამით 90*150სმ - ორმხრივი Deli Stationery",
      en: "Magnetic Whiteboard with Stand 90*150cm - Double-Sided Deli Stationery",
      ru: "Магнитная доска с подставкой 90*150см - двусторонняя Deli Stationery"
    },
    price: 320.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/E7883.JPG"]
  },
  {
    id: 912,
    barcode: "39052",
    title: {
      ka: "განცხადების (კორპის) დაფა 60*45სმ Deli Stationery",
      en: "Cork Notice Board 60*45cm Deli Stationery",
      ru: "Пробковая доска объявлений 60*45см Deli Stationery"
    },
    price: 20.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/39052.JPG"]
  },
  {
    id: 913,
    barcode: "39053",
    title: {
      ka: "განცხადების (კორპის) დაფა 60*90სმ Deli Stationery",
      en: "Cork Notice Board 60*90cm Deli Stationery",
      ru: "Пробковая доска объявлений 60*90см Deli Stationery"
    },
    price: 34.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/39053.JPG"]
  },
  {
    id: 914,
    barcode: "39054",
    title: {
      ka: "განცხადების (კორპის) დაფა 90*120სმ Deli Stationery",
      en: "Cork Notice Board 90*120cm Deli Stationery",
      ru: "Пробковая доска объявлений 90*120см Deli Stationery"
    },
    price: 70.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/39054.JPG"]
  },
  {
    id: 915,
    barcode: "39057",
    title: {
      ka: "კორპის ჩამოსაკიდი დაფა 120*180სმ Deli Stationery",
      en: "Hanging Cork Board 120*180cm Deli Stationery",
      ru: "Подвесная пробковая доска 120*180см Deli Stationery"
    },
    price: 180.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/39057.JPG"]
  },
  {
    id: 916,
    barcode: "7833AER",
    title: {
      ka: "დაფის სადგამი AER7833 მაქს ზომა 120*240",
      en: "Whiteboard Stand AER7833 Max Size 120*240",
      ru: "Подставка для доски AER7833 макс. размер 120*240"
    },
    price: 75.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/7833AER.JPG"]
  },
  {
    id: 917,
    barcode: "DL165",
    title: {
      ka: "დაფის საშლელი მაგნიტური DL165",
      en: "Magnetic Whiteboard Eraser DL165",
      ru: "Магнитная губка для доски DL165"
    },
    price: 1.60,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/DL165.JPG"]
  },
  {
    id: 918,
    barcode: "7810",
    title: {
      ka: "დაფის საშლელი Deli Stationery",
      en: "Whiteboard Eraser Deli Stationery",
      ru: "Губка для доски Deli Stationery"
    },
    price: 1.70,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/7810.JPG"]
  },
  {
    id: 919,
    barcode: "7834",
    title: {
      ka: "მაგნიტური დაფის საშლელი Deli Stationery",
      en: "Magnetic Whiteboard Eraser Deli Stationery",
      ru: "Магнитная губка для доски Deli Stationery"
    },
    price: 2.60,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/7834.JPG"]
  },
  {
    id: 920,
    barcode: "7838",
    title: {
      ka: "დაფის საშლელი Deli Stationery",
      en: "Whiteboard Eraser Deli Stationery",
      ru: "Губка для доски Deli Stationery"
    },
    price: 2.90,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/7838.JPG"]
  },
  {
    id: 921,
    barcode: "7859",
    title: {
      ka: "დაფის საწმენდი სეტი Deli Stationery",
      en: "Whiteboard Cleaning Set Deli Stationery",
      ru: "Набор для очистки доски Deli Stationery"
    },
    price: 9.50,
    inStock: true,
    category: "Household Goods",
    subCategory: "Other",
    images: ["images/7859.JPG"]
  },
  {
    id: 922,
    barcode: "7839",
    title: {
      ka: "დაფის აქსესუარების ნაკრები (საწმენდი სპრეი,ღრუბელი,მარკერი) Deli Stationery",
      en: "Whiteboard Accessories Set (Cleaning Spray, Sponge, Marker) Deli Stationery",
      ru: "Набор аксессуаров для доски (спрей, губка, маркер) Deli Stationery"
    },
    price: 13.00,
    inStock: true,
    category: "writing",
    subCategory: "markers",
    images: ["images/7839.JPG"]
  },
  {
    id: 923,
    barcode: "7823",
    title: {
      ka: "დაფის მაგნიტი 15მმ (12ცალი) 7823 , DELI",
      en: "Whiteboard Magnet 15mm (12pcs) 7823 , DELI",
      ru: "Магнит для доски 15мм (12шт.) 7823 , DELI"
    },
    price: 2.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/7823.JPG"]
  },
  {
    id: 924,
    barcode: "7825",
    title: {
      ka: "დაფის მაგნიტი 30მმ (6ცალი) Deli Stationery",
      en: "Whiteboard Magnet 30mm (6pcs) Deli Stationery",
      ru: "Магнит для доски 30мм (6шт.) Deli Stationery"
    },
    price: 2.20,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/7825.JPG"]
  },
  {
    id: 925,
    barcode: "7824",
    title: {
      ka: "დაფის მაგნიტი 20მმ (შეკვრაში 12ცალი) Deli Stationery",
      en: "Whiteboard Magnet 20mm (12pcs per pack) Deli Stationery",
      ru: "Магнит для доски 20мм (12шт. в упаковке) Deli Stationery"
    },
    price: 2.40,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/7824.JPG"]
  },
  {
    id: 926,
    barcode: "E7822",
    title: {
      ka: "დაფის მაგნიტი 40მმ (6ცალი) Deli Stationery",
      en: "Whiteboard Magnet 40mm (6pcs) Deli Stationery",
      ru: "Магнит для доски 40мм (6шт.) Deli Stationery"
    },
    price: 3.40,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/E7822.JPG"]
  },
  {
    id: 927,
    barcode: "8725",
    title: {
      ka: "დაფის მაგნიტები 30მმ (48ც შეკვრაში) Deli Stationery",
      en: "Whiteboard Magnets 30mm (48pcs per pack) Deli Stationery",
      ru: "Магниты для доски 30мм (48шт. в упаковке) Deli Stationery"
    },
    price: 13.00,
    inStock: true,
    category: "writing",
    subCategory: "board",
    images: ["images/8725.JPG"]
  },
  {
    id: 928,
    barcode: "E30014",
    title: {
      ka: "სკოჩი პატარა 12x20 E30014, Deli",
      en: "Small Tape 12x20 E30014, Deli",
      ru: "Маленький скотч 12x20 E30014, Deli"
    },
    price: 0.30,
    inStock: true,
    category: "stationery",
    subCategory: "scotch",
    images: ["images/E30014.JPG"]
  },
  {
    id: 929,
    barcode: "30064-1",
    title: {
      ka: "სკოჩი პატარა 18მმ*20მ 30064 -1 DELI",
      en: "Small Tape 18mm*20m 30064-1 DELI",
      ru: "Маленький скотч 18мм*20м 30064-1 DELI"
    },
    price: 0.40,
    inStock: true,
    category: "stationery",
    subCategory: "scotch",
    images: ["images/30064-1.JPG"]
  },
  {
    id: 930,
    barcode: "E30064",
    title: {
      ka: "სკოჩი პატარა 18მმ*20მ 8 ცალი შეკრაში Deli Stationery",
      en: "Small Tape 18mm*20m 8 pcs per pack Deli Stationery",
      ru: "Маленький скотч 18мм*20м 8 шт. в упаковке Deli Stationery"
    },
    price: 2.90,
    inStock: true,
    category: "stationery",
    subCategory: "scotch",
    images: ["images/E30064.JPG"]
  },
  {
    id: 931,
    barcode: "30183",
    title: {
      ka: "სკოჩი 45მმX100მ Deli Stationery",
      en: "Tape 45mmX100m Deli Stationery",
      ru: "Скотч 45ммX100м Deli Stationery"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    subCategory: "scotch",
    images: ["images/30183.JPG"]
  },
  {
    id: 932,
    barcode: "30215",
    title: {
      ka: "სკოჩი დიდი 48მმX200მ Deli Stationery",
      en: "Large Tape 48mmX200m Deli Stationery",
      ru: "Большой скотч 48ммX200м Deli Stationery"
    },
    price: 6.00,
    inStock: true,
    category: "stationery",
    subCategory: "scotch",
    images: ["images/30215.JPG"]
  },
  {
    id: 933,
    barcode: "37700",
    title: {
      ka: "სკოჩი შესაფუთი 48MM×50M (6 ცალი) Deli Stationery",
      en: "Packing Tape 48MM×50M (6 pcs) Deli Stationery",
      ru: "Упаковочный скотч 48MM×50M (6 шт.) Deli Stationery"
    },
    price: 16.00,
    inStock: true,
    category: "stationery",
    subCategory: "scotch",
    images: ["images/37700.JPG"]
  },
  {
    id: 934,
    barcode: "814",
    title: {
      ka: "სკოჩის მოსახევი მაგიდის Deli Stationery",
      en: "Desktop Tape Dispenser Deli Stationery",
      ru: "Настольный диспенсер для скотча Deli Stationery"
    },
    price: 3.50,
    inStock: true,
    category: "stationery",
    subCategory: "scotch",
    images: ["images/814.JPG"]
  },
  {
    id: 935,
    barcode: "800",
    title: {
      ka: "სკოჩის მოსახევი Deli Stationery",
      en: "Tape Dispenser Deli Stationery",
      ru: "Диспенсер для скотча Deli Stationery"
    },
    price: 17.00,
    inStock: true,
    category: "stationery",
    subCategory: "scotch",
    images: ["images/800.JPG"]
  },
  {
    id: 936,
    barcode: "E3214",
    title: {
      ka: "ფულის შესაკრავი რეზინა 50გრ Deli Stationery",
      en: "Money Rubber Bands 50g Deli Stationery",
      ru: "Резинки для денег 50г Deli Stationery"
    },
    price: 2.60,
    inStock: true,
    category: "stationery",
    subCategory: "Money gum",
    images: ["images/E3214.JPG"]
  },
  {
    id: 937,
    barcode: "932150",
    title: {
      ka: "ფულის შესაკრავი რეზინა 100გრ. 3215",
      en: "Money Rubber Bands 100g. 3215",
      ru: "Резинки для денег 100г. 3215"
    },
    price: 4.80,
    inStock: true,
    category: "stationery",
    subCategory: "Money gum",
    images: ["images/932150.JPG"]
  },
  {
    id: 938,
    barcode: "რბ100500",
    title: {
      ka: "ფულის შესაკრავი რეზინი 500გრ.",
      en: "Money Rubber Bands 500g",
      ru: "Резинки для денег 500г"
    },
    price: 10.00,
    inStock: true,
    category: "Household Goods",
    subCategory: "Other",
    images: ["images/რბ100500.JPG"]
  },
  {
    id: 939,
    barcode: "RB500HELIO",
    title: {
      ka: "საკანცელარიო რეზინა (განიერი) 500გრ",
      en: "Stationery Rubber Bands (Wide) 500g",
      ru: "Канцелярские резинки (широкие) 500г"
    },
    price: 13.00,
    inStock: true,
    category: "stationery",
    subCategory: "rubber",
    images: ["images/RB500HELIO.JPG"]
  },
  {
    id: 940,
    barcode: "E0027",
    title: {
      ka: "სტეპლერის ტყვია 24/8 Deli Stationery",
      en: "Staple Pins 24/8 Deli Stationery",
      ru: "Скобы для степлера 24/8 Deli Stationery"
    },
    price: 0.60,
    inStock: true,
    category: "stationery",
    subCategory: "stapler",
    images: ["images/E0027.JPG"]
  },
  {
    id: 941,
    barcode: "T70010",
    title: {
      ka: "სტეპლერის ტყვია 13/8 Deli Stationery",
      en: "Staple Pins 13/8 Deli Stationery",
      ru: "Скобы для степлера 13/8 Deli Stationery"
    },
    price: 1.70,
    inStock: true,
    category: "stationery",
    subCategory: "stapler",
    images: ["images/T70010.JPG"]
  },
  {
    id: 942,
    barcode: "39446",
    title: {
      ka: "წებო პვა 80მლ Deli Stationery",
      en: "PVA Glue 80ml Deli Stationery",
      ru: "Клей ПВА 80мл Deli Stationery"
    },
    price: 1.30,
    inStock: true,
    category: "stationery",
    subCategory: "glue",
    images: ["images/39446.JPG"]
  },
  {
    id: 943,
    barcode: "E39447",
    title: {
      ka: "წებო პვა 120მლ Deli Stationery",
      en: "PVA Glue 120ml Deli Stationery",
      ru: "Клей ПВА 120мл Deli Stationery"
    },
    price: 1.60,
    inStock: true,
    category: "stationery",
    subCategory: "glue",
    images: ["images/E39447.JPG"]
  },
  {
    id: 944,
    barcode: "E39448",
    title: {
      ka: "წებო პვა 250მლ Deli Stationery",
      en: "PVA Glue 250ml Deli Stationery",
      ru: "Клей ПВА 250мл Deli Stationery"
    },
    price: 3.00,
    inStock: true,
    category: "stationery",
    subCategory: "glue",
    images: ["images/E39448.JPG"]
  },
  {
    id: 945,
    barcode: "38563",
    title: {
      ka: "კლიფსი მეტალის 32მმ შეკვრაში 12 ცალი Deli Stationery",
      en: "Metal Binder Clips 32mm, 12 pcs Deli Stationery",
      ru: "Металлические зажимы 32мм, 12 шт. Deli Stationery"
    },
    price: 2.00,
    inStock: true,
    category: "stationery",
    subCategory: "clips",
    images: ["images/38563.JPG"]
  },
  {
    id: 946,
    barcode: "998558",
    title: {
      ka: "კლიპსი ფერადი 19მმ, 25 ცალიანი შეკვრა Deli Stationery",
      en: "Colored Paper Clips 19mm, 25 pcs Deli Stationery",
      ru: "Цветные скрепки 19мм, 25 шт. Deli Stationery"
    },
    price: 3.60,
    inStock: true,
    category: "stationery",
    subCategory: "clips",
    images: ["images/998558.JPG"]
  },
  {
    id: 947,
    barcode: "8555",
    title: {
      ka: "კლიპსი მეტალის ფერადი 19მმ (შეკვრაში 40ცალი) Deli Stationery",
      en: "Colored Metal Paper Clips 19mm (40 pcs per pack) Deli Stationery",
      ru: "Цветные металлические скрепки 19мм (40 шт. в упаковке) Deli Stationery"
    },
    price: 4.00,
    inStock: true,
    category: "stationery",
    subCategory: "clips",
    images: ["images/8555.JPG"]
  },
  {
    id: 948,
    barcode: "8556",
    title: {
      ka: "კლიპსი მეტალის ფერადი 15მმ (შეკვრაში 60ცალი) Deli Stationery",
      en: "Colored Metal Paper Clips 15mm (60 pcs per pack) Deli Stationery",
      ru: "Цветные металлические скрепки 15мм (60 шт. в упаковке) Deli Stationery"
    },
    price: 5.00,
    inStock: true,
    category: "stationery",
    subCategory: "clips",
    images: ["images/8556.JPG"]
  },
  {
    id: 949,
    barcode: "8561",
    title: {
      ka: "კლიფსი მეტალის 51მმ შეკვრაში 12 ცალი Deli Stationery",
      en: "Metal Binder Clips 51mm, 12 pcs Deli Stationery",
      ru: "Металлические зажимы 51мм, 12 шт. Deli Stationery"
    },
    price: 5.00,
    inStock: true,
    category: "stationery",
    subCategory: "clips",
    images: ["images/8561.JPG"]
  },
  {
    id: 950,
    barcode: "998557",
    title: {
      ka: "კლიპსი ფერადი 15მმ, 50 ცალიანი შეკვრა Deli Stationery",
      en: "Colored Paper Clips 15mm, 50 pcs Deli Stationery",
      ru: "Цветные скрепки 15мм, 50 шт. Deli Stationery"
    },
    price: 5.60,
    inStock: true,
    category: "stationery",
    subCategory: "clips",
    images: ["images/998557.JPG"]
  },
  {
    id: 951,
    barcode: "114",
    title: {
      ka: "სახვრეტელა ერთნახვრეტიანი 0114 DELI",
      en: "Single-Hole Punch 0114 DELI",
      ru: "Одноотверстный дырокол 0114 DELI"
    },
    price: 2.50,
    inStock: true,
    category: "stationery",
    subCategory: "sa",
    images: ["images/114.JPG"]
  },
  {
    id: 952,
    barcode: "E0102",
    title: {
      ka: "სახვრეტელა 20 ფურცლიანი Deli Stationery",
      en: "Hole Punch 20 Sheets Deli Stationery",
      ru: "Дырокол на 20 листов Deli Stationery"
    },
    price: 8.00,
    inStock: true,
    category: "stationery",
    subCategory: "sa",
    images: ["images/E0102.JPG"]
  },
  {
    id: 953,
    barcode: "901132",
    title: {
      ka: "სახვრეტელა 20 ფურცლისათვის Deli Stationery",
      en: "Hole Punch for 20 Sheets Deli Stationery",
      ru: "Дырокол на 20 листов Deli Stationery"
    },
    price: 12.00,
    inStock: true,
    category: "stationery",
    subCategory: "sa",
    images: ["images/901132.JPG"]
  },
  {
    id: 954,
    barcode: "901217",
    title: {
      ka: "სახვრეტელა 4 ნახვრეტისათვის Deli Stationery",
      en: "4-Hole Punch Deli Stationery",
      ru: "Дырокол на 4 отверстия Deli Stationery"
    },
    price: 28.00,
    inStock: true,
    category: "stationery",
    subCategory: "sa",
    images: ["images/901217.JPG"]
  },
  {
    id: 955,
    barcode: "510PVC",
    title: {
      ka: "ასაკინძი ზამბარა 10მმ 55ფ (100ცალი)CB510",
      en: "Binding Spines 10mm 55 Sheets (100pcs) CB510",
      ru: "Пружины для переплёта 10мм 55 листов (100шт.) CB510"
    },
    price: 14.00,
    inStock: true,
    category: "stationery",
    subCategory: "Springs",
    images: ["images/510PVC.JPG"]
  },
  {
    id: 956,
    barcode: "512",
    title: {
      ka: "ასაკინძი ზამბარა 12მმ 65 ფურცლისთვის (100ცალი) CB512",
      en: "Binding Spines 12mm 65 sheets (100pcs) CB512",
      ru: "Пружины для переплёта 12мм 65 листов (100шт.) CB512"
    },
    price: 16.00,
    inStock: true,
    category: "stationery",
    subCategory: "Springs",
    images: ["images/512.JPG"]
  },
  {
    id: 957,
    barcode: "514",
    title: {
      ka: "ასაკინძი ზამბარა 14მმ 100 ფურცლისთვის (100ცალი) CB514",
      en: "Binding Spines 14mm 100 sheets (100pcs) CB514",
      ru: "Пружины для переплёта 14мм 100 листов (100шт.) CB514"
    },
    price: 16.00,
    inStock: true,
    category: "stationery",
    subCategory: "Springs",
    images: ["images/514.JPG"]
  },
  {
    id: 958,
    barcode: "516PVC",
    title: {
      ka: "ასაკინძი ზამბარა 16მმ 115 ფურცლისთვის (100 ცალი)",
      en: "Binding Spines 16mm 115 sheets (100 pcs)",
      ru: "Пружины для переплёта 16мм 115 листов (100 шт.)"
    },
    price: 20.00,
    inStock: true,
    category: "stationery",
    subCategory: "Springs",
    images: ["images/516PVC.JPG"]
  },
  {
    id: 959,
    barcode: "518PVC",
    title: {
      ka: "ასაკინძი ზამბარა 18მმ 125 ფურცლისთვის (100 ცალი)",
      en: "Binding Spines 18mm 125 sheets (100 pcs)",
      ru: "Пружины для переплёта 18мм 125 листов (100 шт.)"
    },
    price: 25.00,
    inStock: true,
    category: "stationery",
    subCategory: "Springs",
    images: ["images/518PVC.JPG"]
  },
  {
    id: 960,
    barcode: "520PVC",
    title: {
      ka: "ასაკინძი ზამბარა 20მმ 150 ფურცლისთვის (100 ცალი)",
      en: "Binding Spines 20mm 150 sheets (100 pcs)",
      ru: "Пружины для переплёта 20мм 150 листов (100 шт.)"
    },
    price: 25.00,
    inStock: true,
    category: "stationery",
    subCategory: "Springs",
    images: ["images/520PVC.JPG"]
  },
  {
    id: 961,
    barcode: "528PVC",
    title: {
      ka: "ასაკინძი ზამბარა 28მმ 240ფ (50ცალი) 528",
      en: "Binding Spines 28mm 240 Sheets (50pcs) 528",
      ru: "Пружины для переплёта 28мм 240 листов (50шт.) 528"
    },
    price: 25.00,
    inStock: true,
    category: "stationery",
    subCategory: "Springs",
    images: ["images/528PVC.JPG"]
  },
  {
    id: 962,
    barcode: "538PVC",
    title: {
      ka: "ასაკინძი ზამბარა 38მმ 340 ფურცლისთვის 50ცალი Deli Stationery",
      en: "Binding Spines 38mm 340 Sheets 50pcs Deli Stationery",
      ru: "Пружины для переплёта 38мм 340 листов 50шт. Deli Stationery"
    },
    price: 30.00,
    inStock: true,
    category: "stationery",
    subCategory: "Springs",
    images: ["images/538PVC.JPG"]
  },
  {
    id: 963,
    barcode: "506",
    title: {
      ka: "ასაკინძი ზამბარა 6მმ 20 ფურცლისთვის (100ცალი) CB506",
      en: "Binding Spines 6mm 20 Sheets (100pcs) CB506",
      ru: "Пружины для переплёта 6мм 20 листов (100шт.) CB506"
    },
    price: 11.00,
    inStock: true,
    category: "stationery",
    subCategory: "Springs",
    images: ["images/506.JPG"]
  },
  {
    id: 964,
    barcode: "EH10490",
    title: {
      ka: "კორექტორი კალამი EH10490 , DELI",
      en: "Correction Fluid Pen EH10490 , DELI",
      ru: "Корректор-ручка EH10490 , DELI"
    },
    price: 1.50,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/EH10490.JPG"]
  },
  {
    id: 965,
    barcode: "EH10790",
    title: {
      ka: "კორექტორი კალამი EH10790 , DELI",
      en: "Correction Fluid Pen EH10790 , DELI",
      ru: "Корректор-ручка EH10790 , DELI"
    },
    price: 1.50,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/EH10790.JPG"]
  },
  {
    id: 966,
    barcode: "206კორ",
    title: {
      ka: "კორექტორი კალამი Helio-206",
      en: "Correction Fluid Pen Helio-206",
      ru: "Корректор-ручка Helio-206"
    },
    price: 1.00,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/206კორ.JPG"]
  },
  {
    id: 967,
    barcode: "H20201",
    title: {
      ka: "კორექტორი ლენტი 12მ Deli Stationery",
      en: "Correction Tape 12m Deli Stationery",
      ru: "Корректирующая лента 12м Deli Stationery"
    },
    price: 2.00,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/H20201.JPG"]
  },
  {
    id: 968,
    barcode: "NS157",
    title: {
      ka: "კორექტორი ლენტი 5mmx12m NS157 DELI",
      en: "Correction Tape 5mmx12m NS157 DELI",
      ru: "Корректирующая лента 5mmx12m NS157 DELI"
    },
    price: 2.00,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/NS157.JPG"]
  },
  {
    id: 969,
    barcode: "234კორ",
    title: {
      ka: "კორექტორი ფუნჯით 20მლ Helio",
      en: "Correction Fluid with Brush 20ml Helio",
      ru: "Корректор с кисточкой 20мл Helio"
    },
    price: 1.00,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/234კორ.JPG"]
  },
  {
    id: 970,
    barcode: "39291",
    title: {
      ka: "კორექტორი ფუნჯით 39291 , DELI",
      en: "Correction Fluid with Brush 39291 , DELI",
      ru: "Корректор с кисточкой 39291 , DELI"
    },
    price: 1.40,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/39291.JPG"]
  },
  {
    id: 971,
    barcode: "E7286",
    title: {
      ka: "კორექტორი კალამი 7286 DELI",
      en: "Correction Fluid Pen 7286 DELI",
      ru: "Корректор-ручка 7286 DELI"
    },
    price: 1.00,
    inStock: true,
    category: "writing",
    subCategory: "pen",
    images: ["images/E7286.JPG"]
  },
  {
    id: 972,
    barcode: "EH381",
    title: {
      ka: "კორექტორი ლენტი 5mm*8m EH381 , deli",
      en: "Correction Tape 5mm*8m EH381 , deli",
      ru: "Корректирующая лента 5mm*8m EH381 , deli"
    },
    price: 1.60,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/EH381.JPG"]
  },
  {
    id: 973,
    barcode: "H20101",
    title: {
      ka: "კორექტორი 5mmx8m H20101,DELI",
      en: "Correction Tape 5mmx8m H20101,DELI",
      ru: "Корректор 5mmx8m H20101,DELI"
    },
    price: 1.60,
    inStock: true,
    category: "stationery",
    subCategory: "eraser",
    images: ["images/H20101.JPG"]
  },
  {
    id: 974,
    barcode: "F20202",
    title: {
      ka: "ფაილი A4 (100ც) 0.60 F20202 , DELI",
      en: "File Folder A4 (100pcs) 0.60 F20202 , DELI",
      ru: "Файл-вкладыш A4 (100шт.) 0.60 F20202 , DELI"
    },
    price: 10.00,
    inStock: true,
    category: "stationery",
    subCategory: "file_folder",
    images: ["images/F20202.JPG"]
  },
  {
    id: 975,
    barcode: "F20302",
    title: {
      ka: "ფაილი A4 (100ც) 0.80 F20302 , DELI",
      en: "File Folder A4 (100pcs) 0.80 F20302 , DELI",
      ru: "Файл-вкладыш A4 (100шт.) 0.80 F20302 , DELI"
    },
    price: 15.00,
    inStock: true,
    category: "stationery",
    subCategory: "file_folder",
    images: ["images/F20302.JPG"]
  },
  {
    id: 976,
    barcode: "F20002",
    title: {
      ka: "ფაილი A4 35 მიკრონიანი (100ც) Deli Stationery",
      en: "File Folder A4 35 Micron (100pcs) Deli Stationery",
      ru: "Файл-вкладыш A4 35 микрон (100шт.) Deli Stationery"
    },
    price: 7.00,
    inStock: true,
    category: "stationery",
    subCategory: "file_folder",
    images: ["images/F20002.JPG"]
  },
  {
    id: 977,
    barcode: "5468",
    title: {
      ka: "ჩამოსაკიდი ფაილი A4 Deli Stationery",
      en: "Hanging File Folder A4 Deli Stationery",
      ru: "Подвесной файл-вкладыш A4 Deli Stationery"
    },
    price: 2.00,
    inStock: true,
    category: "stationery",
    subCategory: "file_folder",
    images: ["images/5468.JPG"]
  },
  {
    id: 978,
    barcode: "E5469",
    title: {
      ka: "ჩამოსაკიდი ფაილი Deli Stationery",
      en: "Hanging File Folder Deli Stationery",
      ru: "Подвесной файл-вкладыш Deli Stationery"
    },
    price: 2.00,
    inStock: true,
    category: "stationery",
    subCategory: "file_folder",
    images: ["images/E5469.JPG"]
  },
  {
    id: 979,
    barcode: "30330",
    title: {
      ka: "ფაილი A4 0.30 (100ც) HL-30330",
      en: "File Folder A4 0.30 (100pcs) HL-30330",
      ru: "Файл-вкладыш A4 0.30 (100шт.) HL-30330"
    },
    price: 4.20,
    inStock: true,
    category: "stationery",
    subCategory: "file_folder",
    images: ["images/30330.JPG"]
  },
  {
    id: 980,
    barcode: "30335",
    title: {
      ka: "ფაილი A4 0.35 (100ც) HL-30335",
      en: "File Folder A4 0.35 (100pcs) HL-30335",
      ru: "Файл-вкладыш A4 0.35 (100шт.) HL-30335"
    },
    price: 4.00,
    inStock: true,
    category: "stationery",
    subCategory: "file_folder",
    images: ["images/30335.JPG"]
  },
  {
    id: 981,
    barcode: "30340",
    title: {
      ka: "ფაილი A4 0.40 (100ც) 30340",
      en: "File Folder A4 0.40 (100pcs) 30340",
      ru: "Файл-вкладыш A4 0.40 (100шт.) 30340"
    },
    price: 5.00,
    inStock: true,
    category: "stationery",
    subCategory: "file_folder",
    images: ["images/30340.JPG"]
  },
  {
    id: 982,
    barcode: "30350",
    title: {
      ka: "ფაილი A4 0.50 (100ც) 30350",
      en: "File Folder A4 0.50 (100pcs) 30350",
      ru: "Файл-вкладыш A4 0.50 (100шт.) 30350"
    },
    price: 5.50,
    inStock: true,
    category: "stationery",
    subCategory: "file_folder",
    images: ["images/30350.JPG"]
  },
  {
    id: 983,
    barcode: "30360",
    title: {
      ka: "ფაილი A4 0.60 (100ც) 30360",
      en: "File Folder A4 0.60 (100pcs) 30360",
      ru: "Файл-вкладыш A4 0.60 (100шт.) 30360"
    },
    price: 6.50,
    inStock: true,
    category: "stationery",
    subCategory: "file_folder",
    images: ["images/30360.JPG"]
  },
  {
    id: 984,
    barcode: "30370",
    title: {
      ka: "ფაილი A4 0.70 (100ც) 30370",
      en: "File Folder A4 0.70 (100pcs) 30370",
      ru: "Файл-вкладыш A4 0.70 (100шт.) 30370"
    },
    price: 9.00,
    inStock: true,
    category: "stationery",
    subCategory: "file_folder",
    images: ["images/30370.JPG"]
  },
  {
    id: 985,
    barcode: "021GC24I",
    title: {
      ka: "ცარცი Soft pastel chalks. Cardboard box of 24 colours. 021GC24I PRIMO",
      en: "Chalk Soft pastel chalks. Cardboard box of 24 colours. 021GC24I PRIMO",
      ru: "Мел Soft pastel chalks. Cardboard box of 24 colours. 021GC24I PRIMO"
    },
    price: 21.00,
    inStock: true,
    category: "writing",
    subCategory: "chalk",
    images: ["images/021GC24I.JPG"]
  },
  {
    id: 986,
    barcode: "UZ801",
    title: {
      ka: "ცარცი თეთრი 100ც UZ801 , DELI",
      en: "White Chalk 100pcs UZ801 , DELI",
      ru: "Белый мел 100шт. UZ801 , DELI"
    },
    price: 4.80,
    inStock: true,
    category: "writing",
    subCategory: "chalk",
    images: ["images/UZ801.JPG"]
  },
  {
    id: 987,
    barcode: "2304191",
    title: {
      ka: "ცარცი ფერადი 5ც.\"Мультики\" ГАММА",
      en: "Colored Chalk 5pcs. \"Мультики\" ГАММА",
      ru: "Цветной мел 5шт. \"Мультики\" ГАММА"
    },
    price: 1.70,
    inStock: true,
    category: "writing",
    subCategory: "chalk",
    images: ["images/2304191.JPG"]
  },
  {
    id: 988,
    barcode: "00-21168782",
    title: {
      ka: "FINO სამზარეულოს ღრუბელი 5+2 (ფინო)",
      en: "FINO Kitchen Sponge 5+2",
      ru: "FINO Губка для кухни 5+2"
    },
    price: 6.50,
    inStock: true,
    category: "Household Goods",
    subCategory: "spong",
    images: ["images/00-21168782.JPG"]
  },
  {
    id: 989,
    barcode: "00-21154417",
    title: {
      ka: "DOMI ჭურჭლის სარეცხი ღრუბელი 6 ც (დომი)",
      en: "DOMI Dishwashing Sponge 6 pcs",
      ru: "DOMI Губка для мытья посуды 6 шт."
    },
    price: 6.50,
    inStock: true,
    category: "Household Goods",
    subCategory: "spong",
    images: ["images/00-21154417.JPG"]
  },
  {
    id: 990,
    barcode: "FI3515",
    title: {
      ka: "FINO ნაგვის პარკი 35 ლ 15 ც (ფინო)",
      en: "FINO Garbage Bags 35 L 15 pcs",
      ru: "FINO Мусорные пакеты 35 л 15 шт."
    },
    price: 5.50,
    inStock: true,
    category: "Household Goods",
    subCategory: "trash beg",
    images: ["images/FI3515.JPG"]
  },
  {
    id: 991,
    barcode: "FI3550",
    title: {
      ka: "FINO ნაგვის პარკი თასმით 35 ლ, 50 ც (ფინო)",
      en: "FINO Garbage Bags with Drawstring 35 L, 50 pcs",
      ru: "FINO Мусорные пакеты с завязками 35 л, 50 шт."
    },
    price: 16.50,
    inStock: true,
    category: "Household Goods",
    subCategory: "trash beg",
    images: ["images/FI3550.JPG"]
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

    // ეს ნაწილი ეძებს ყველა [data-i18n] ელემენტს და უცვლის ტექსტს არჩეული ენის მიხედვით
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        if (translations[lang] && translations[lang][key]) {
            element.innerText = translations[lang][key];
        }
    });

    // პროდუქტების სავალდებულო განახლება
    const prodList = (typeof products !== 'undefined' ? products : []);
    if (typeof renderProducts === 'function') {
        renderProducts(prodList);
    }
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
    const pPhoneText = document.getElementById('p-phone-text');
    const pAddressText = document.getElementById('p-address-text');

    if (pUsername) pUsername.innerText = currentUser.username || 'არ არის მითითებული';
    if (pPhoneText) pPhoneText.innerText = currentUser.phone || 'არ არის მითითებული';
    if (pAddressText) pAddressText.innerText = currentUser.address || 'არ არის მითითებული';

    // დასუფთავება რედაქტირების რეჟიმიდან მოსვლისას
    document.getElementById('p-phone-input').style.display = 'none';
    document.getElementById('p-phone-text').style.display = 'inline';
    document.getElementById('p-phone-btn').innerText = '✏️';

    document.getElementById('p-address-input').style.display = 'none';
    document.getElementById('p-address-text').style.display = 'inline';
    document.getElementById('p-address-btn').innerText = '✏️';

    const modal = document.getElementById('profile-modal');
    if (modal) modal.style.display = 'block';
}

function toggleEdit(field) {
    const textSpan = document.getElementById(`p-${field}-text`);
    const inputField = document.getElementById(`p-${field}-input`);
    const btn = document.getElementById(`p-${field}-btn`);

    // თუ ინპუთი დამალულია, ვრთავთ რედაქტირების რეჟიმს
    if (inputField.style.display === 'none') {
        inputField.value = textSpan.innerText === 'არ არის მითითებული' ? '' : textSpan.innerText;
        textSpan.style.display = 'none';
        inputField.style.display = 'inline-block';
        inputField.focus();
        btn.innerText = '✅'; // ფანქარი იცვლება טיჩკით (შენახვა)
    } else {
        // ღილაკზე (✅) დაჭერისას ვინახავთ მონაცემს
        const newValue = inputField.value.trim();
        
        if (field === 'phone') {
            currentUser.phone = newValue;
        } else if (field === 'address') {
            currentUser.address = newValue;
        }

        // ვინახავთ localStorage-ში (ან ბაზაში, გააჩნია სერვერს როგორ აწყვია)
        localStorage.setItem('current_user', JSON.stringify(currentUser));
        
        // ეკრანზე განახლება
        textSpan.innerText = newValue || 'არ არის მითითებული';
        textSpan.style.display = 'inline';
        inputField.style.display = 'none';
        btn.innerText = '✏️'; // ისევ უბრუნდება ფანქრის ხატულა
    }
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
                
                <div class="product-img-container" style="height: 200px; border-radius: 8px; overflow: hidden; position: relative; background: var(--bg-color, #f8fafc); display: flex; align-items: center; justify-content: center; opacity: ${isAvailable ? '1' : '0.5'};">
                    <img id="card-img-${prod.id}" src="${imgList[currentImageIndexes[prod.id]]}" class="product-img" alt="${productName}" onclick="openProductModal(${prod.id})" loading="lazy" decoding="async" style="width:100%; height:100%; object-fit:contain; cursor:pointer;">
                    
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
            <div style="background: var(--bg-color, #f8fafc); border-radius: 8px; display: flex; align-items: center; justify-content: center; height: 300px; overflow: hidden;">
                <img id="modal-img-${prod.id}" src="${imgList[0]}" loading="lazy" decoding="async" style="width:100%; height:100%; border-radius:8px; object-fit:contain;">
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
function filterBysubcategory(brandName) {
    // 1. თუ გაქვს კატალოგის გვერდზე გადასვლის ფუნქცია
    if (typeof showSection === 'function') {
        showSection('catalog'); 
    }
    
    // 2. ვფილტრავთ პროდუქტებს, სადაც ქვეკატეგორია ან ბრენდი ემთხვევა მითებულს
    const filtered = (typeof products !== 'undefined' ? products : []).filter(p => {
        const subCat = (p.subcategory || p.subCategory || '').toLowerCase();
        const brand = (p.brand || '').toLowerCase();
        const query = brandName.toLowerCase();
        
        return subCat.includes(query) || brand.includes(query);
    });

    // 3. გამოვსახავთ გაფილტრულ პროდუქტებს
    if (typeof renderProducts === 'function') {
        renderProducts(filtered);
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
// 7. კატეგორიები და ქვეკატეგორიები
// ==========================================

// მთავარი კატეგორიის გაფილტვრა
// ==========================================
// 7. კატეგორიები და ქვეკატეგორიები
// ==========================================

// ტექსტის გასუფთავება შედარებისთვის
function normalizeCategoryValue(value) {
    if (value === null || value === undefined) return '';

    return String(value)
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '_')
        .replace(/-/g, '_');
}


// ==========================================
// მთავარი კატეგორიის გაფილტვრა
// ==========================================
function filterCategory(categoryName, element) {

    const prodList = (typeof products !== 'undefined' ? products : []);

    // აქტიური კატეგორიის მონიშვნა
    document.querySelectorAll('.category-main-item').forEach(item => {
        item.classList.remove('active');
    });

    if (element) {
        const parentItem = element.closest('.category-main-item');

        if (parentItem) {
            parentItem.classList.add('active');
        }
    }

    // ყველა პროდუქტი
    if (categoryName === 'all') {
        renderProducts(prodList);
        return;
    }

    const wantedCategory = normalizeCategoryValue(categoryName);

    const filtered = prodList.filter(product => {

        const category =
            product.category ??
            product.categoryName ??
            product.mainCategory ??
            product.main_category;

        return normalizeCategoryValue(category) === wantedCategory;
    });

    console.log('მთავარი კატეგორია:', categoryName);
    console.log('ნაპოვნი პროდუქტები:', filtered);

    renderProducts(filtered);
}


// ==========================================
// ქვეკატეგორიის მენიუს გახსნა / დახურვა
// ==========================================
function toggleSubcategoryMenu(subId) {
    const targetSub = document.getElementById(subId);

    if (!targetSub) {
        console.error(`ქვეკატეგორია ვერ მოიძებნა: ${subId}`);
        return;
    }

    // ამ ქვეკატეგორიის მშობელი
    const parentItem = targetSub.closest('.category-main-item');

    // ყველა სხვა ქვეკატეგორიის დახურვა
    document.querySelectorAll('.subcategory-menu').forEach(sub => {
        if (sub !== targetSub) {
            sub.classList.remove('subcategory-open');

            const otherParent = sub.closest('.category-main-item');
            if (otherParent) {
                otherParent.classList.remove('active');
            }
        }
    });

    // თუ გახსნილია → დავხუროთ
    if (targetSub.classList.contains('subcategory-open')) {
        targetSub.classList.remove('subcategory-open');

        if (parentItem) {
            parentItem.classList.remove('active');
        }
    } 
    // თუ დახურულია → გავხსნათ
    else {
        targetSub.classList.add('subcategory-open');

        if (parentItem) {
            parentItem.classList.add('active');
        }
    }
}


// ==========================================
// ქვეკატეგორიის მიხედვით გაფილტვრა
// ==========================================
function filterSubcategory(categoryName, subcategoryName) {

    const prodList = (typeof products !== 'undefined' ? products : []);

    const wantedCategory = normalizeCategoryValue(categoryName);
    const wantedSubcategory = normalizeCategoryValue(subcategoryName);

    console.log('==============================');
    console.log('კატეგორია:', wantedCategory);
    console.log('ქვეკატეგორია:', wantedSubcategory);
    console.log('==============================');

    // ==========================================
    // "ყველა" ქვეკატეგორიაში
    // ==========================================
    if (subcategoryName === 'all') {

        const filtered = prodList.filter(product => {

            const category =
                product.category ??
                product.categoryName ??
                product.mainCategory ??
                product.main_category;

            return normalizeCategoryValue(category) === wantedCategory;
        });

        console.log('ყველა პროდუქტი კატეგორიაში:', filtered);

        renderProducts(filtered);
        return;
    }


    // ==========================================
    // ჩვეულებრივი ქვეკატეგორია
    // ==========================================
    const filtered = prodList.filter(product => {

        // ძირითადი კატეგორია
        const category =
            product.category ??
            product.categoryName ??
            product.mainCategory ??
            product.main_category;

        // ქვეკატეგორია
        const subcategory =
            product.subcategory ??
            product.subCategory ??
            product.sub_category ??
            product.category2 ??
            product.category_2 ??
            product.type;

        const actualCategory =
            normalizeCategoryValue(category);

        const actualSubcategory =
            normalizeCategoryValue(subcategory);

        console.log(
            'პროდუქტი:',
            product.title || product.name,
            '| category:',
            actualCategory,
            '| subcategory:',
            actualSubcategory
        );

        return (
            actualCategory === wantedCategory &&
            actualSubcategory === wantedSubcategory
        );
    });


    console.log('ნაპოვნი პროდუქტები:', filtered);

    renderProducts(filtered);


    // ==========================================
    // აქტიური ქვეკატეგორიის მონიშვნა
    // ==========================================
    document.querySelectorAll('.subcategory-menu li').forEach(item => {
        item.classList.remove('active-subcategory');
    });

    const clickedItem = Array.from(
        document.querySelectorAll('.subcategory-menu li')
    ).find(item => {

        const onclick = item.getAttribute('onclick');

        return onclick &&
            onclick.includes(
                `filterSubcategory('${categoryName}', '${subcategoryName}')`
            );
    });

    if (clickedItem) {
        clickedItem.classList.add('active-subcategory');
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

        // 🖼️ პროდუქტის ფოტოს მისამართის მიღება (პირველი სურათი მასივიდან)
        const imgSrc = (item.images && item.images.length > 0) ? item.images[0] : 'images/default.jpg';

        const itemDiv = document.createElement('div');
        itemDiv.className = 'cart-item';
        itemDiv.style.cssText = "display: flex; justify-content: space-between; align-items: center; margin-bottom: 10px; padding: 8px; border-bottom: 1px solid #ddd;";
        itemDiv.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px;">
                <img src="${imgSrc}" alt="${nameToShow}" style="width: 45px; height: 45px; object-fit: cover; border-radius: 4px; border: 1px solid #eee;">
                <div>
                    <strong>${nameToShow}</strong> ${optionsText ? `<small style="color:#666;">(${optionsText})</small>` : ''}<br>
                    <small>${item.price.toFixed(2)} ₾ x ${item.quantity} = ${itemTotal.toFixed(2)} ₾</small>
                </div>
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
let isCheckoutProcessing = false;

async function checkout() {

    // თუ შეკვეთა უკვე მუშავდება, ხელმეორედ აღარ გაიგზავნოს
    if (isCheckoutProcessing) {
        return;
    }

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
            alert(`⚠️ მხოლოდ საბეჭდი ქაღალდის შეკვეთისას მინიმალური თანხა შეადგენს 200 ₾-ს.
თქვენი ქაღალდის ჯამი: ${paperTotal.toFixed(2)} ₾`);
            return;
        }
    }

    if (otherTotal > 0) {

        if (otherTotal < 50) {
            alert(`⚠️ შეკვეთის გასაფორმებლად პროდუქტების ჯამური თანხა (საბეჭდი ქაღალდის გარეშე) უნდა იყოს ნაკლები 50 ₾-ზე.
თქვენი პროდუქტების ჯამი (ქაღალდის გარეშე): ${otherTotal.toFixed(2)} ₾`);
            return;
        }
    }

    // ==========================================
    // შეკვეთის გაგზავნის დაწყება
    // ==========================================

    isCheckoutProcessing = true;

    const checkoutBtn = document.getElementById('checkout-btn');

    if (checkoutBtn) {
        checkoutBtn.disabled = true;
        checkoutBtn.innerText = 'მუშავდება...';
    }

    const orderId = '#' + Math.floor(10000 + Math.random() * 90000);

    const totalSum = cart.reduce(
        (sum, item) =>
            sum + (Number(item.price) * Number(item.quantity || 1)),
        0
    ).toFixed(2);

    const userInfo = `${currentUser.username || ''} (${currentUser.phone || 'ტელეფონი არ არის'})`;

    const address = currentUser.address || 'არ არის მითითებული';

    const lang = typeof currentLang !== 'undefined'
        ? currentLang
        : 'ka';

    const orderData = {

        orderId,

        userInfo,

        address,

        cart: cart.map(item => {

            let itemName =
                item.displayName ||
                item.title ||
                item.name ||
                'უცნობი პროდუქტი';

            if (typeof itemName === 'object') {
                itemName =
                    itemName[lang] ||
                    itemName.ka ||
                    Object.values(itemName)[0];
            }

            // 📸 სურათის მისამართების გარდაქმნა სრულ დომენურ URL-ად
            const rawImages = Array.isArray(item.images)
                ? item.images
                : (item.images ? [item.images] : []);

            const fullUrlImages = rawImages.map(img => {

                if (typeof img === 'string' && img.startsWith('http')) {
                    return img;
                }

                const cleanImgPath = String(img)
                    .replace(/^\/+/, '');

                return `https://gltrade.ge/${cleanImgPath}`;
            });

            return {

                id: item.id,

                barcode: item.barcode || '',

                name: itemName,

                price: Number(item.price),

                quantity: item.quantity || 1,

                images: fullUrlImages,

                selectedSize: item.selectedSize || null,

                selectedColor: item.selectedColor || null
            };
        }),

        totalSum: Number(totalSum)
    };

    try {

        const token =
            currentUser.token ||
            localStorage.getItem('auth_token');

        const headers = {
            'Content-Type': 'application/json'
        };

        if (token) {
            headers['Authorization'] = `Bearer ${token}`;
        }

        const response = await fetch(
            'https://gltrade-backend.onrender.com/api/checkout',
            {
                method: 'POST',
                headers: headers,
                body: JSON.stringify(orderData)
            }
        );

        if (response.ok) {

            alert('🎉 შეკვეთა წარმატებით გაფორმდა!');

            if (!currentUser.orderHistory) {
                currentUser.orderHistory = [];
            }

            currentUser.orderHistory.push(orderData);

            localStorage.setItem(
                'logged_user',
                JSON.stringify(currentUser)
            );

            cart = [];

            updateCart();

            showPage('home');

        } else {

            alert('⚠️ შეკვეთის გაგზავნისას დაფიქსირდა შეცდომა.');

            // მხოლოდ შეცდომის შემთხვევაში გავხსნათ ღილაკი
            isCheckoutProcessing = false;

            if (checkoutBtn) {
                checkoutBtn.disabled = false;
                checkoutBtn.innerText = '✅ შეკვეთის გაფორმება';
            }
        }

    } catch (err) {

        console.error('Checkout error:', err);

        alert('⚠️ სერვერთან კავშირი ვერ დამყარდა.');

        // კავშირის შეცდომის შემთხვევაში ხელახლა ცდის უფლება
        isCheckoutProcessing = false;

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
        heroTitle: "🏢 GLTrade - თქვენი სანდო პარტნიორი",
        heroSubtitle: "საბითუმო მომარაგება სწრაფად, მარტივად და საუკეთესო ფასად.",
        heroBtn: "🛍️ იხილეთ პროდუქცია",
        contactUs: "დაგვიკავშირდით:",
        locationTitle: "📍 ჩვენი ლოკაცია",
        addressLabel: "მისამართი:",
        addressText: "ქ. თბილისი, ვ.გულისაშვილის 18 ბ ",
        phoneLabel: "ტელეფონი:",
        hoursLabel: "სამუშაო საათები:",
        hoursText: "ორშ - პარ: 09:00 - 18:00",
        emailLabel: "ელ-ფოსტა:",
        
        // Categories (კატეგორიები)
     catTitle: "კატეგორიები",
    catAll: "📦 ყველა პროდუქტი",
    catPaper: "📄 ქაღალდის პროდუქცია",
    catPrintPaper: "საბეჭდი ქაღალდი",
    catWatercolor: "აკვარელის ქაღალდი",
    catLabel: "ლეიბლი",
    catStickyNotes: "ჩასანიშნი ქაღალდი",
    catNotebook: "ბლოკნოტი",
    catEnvelope: "კონვერტი",
    
    catStationery: "✂️ საკანცელარიო ნივთები",
    catRuler: "სახაზავი",
    catSharpener: "სათლელი",
    catEraser: "საშლელი",
    catFileFolder: "ფაილი",
    catBinderFolder: "სწრაფჩამკერი",
    catUtilityKnife: "საკანცელარიო დანა",
    catClips: "კლიპსი",
    catPaperclips: "სკრეპი",
    catPenHolder: "საკანცელარიო ჭიქა",
    catDeskShelf: "საკანცელარიო თარო",
    
    catWriting: "✏️ საწერი ნივთები",
    catPen: "კალამი",
    catPencil: "ფანქარი",
    
    catOffice: "📂 საოფისე ნივთები",
    catBinder: "ბაინდერი",
    catDivider: "დივაიდერი",
    catBindingCover: "ასაკინძი ყდა",
    catOrganizer: "ორგანაიზერი",
    catSignboard: "ფირნიში",
    catBusinessCardHolder: "სავიზიტე",
    catDeskLamp: "სამაგიდე სანათი",
    catBadge: "ბეიჯი / ბეიჯის თოკი",
    catKeyBox: "გასაღების ყუთი / ბრელოკი",
    catCleaningSet: "საოფისე ურნა / ცოცხი და აქანდაზი",
    
    catHygiene: "🏥 ჰიგიენა და დასუფთავება",
    catGrass: "ჰიგიენა გრასი",
    catBagi: "ჰიგიენა ბაგი",

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
        aboutNewStandard: "🚀 ახალი სტანდარტი ბიზნესის მომარაგებაში",
        aboutText1: "დღეს კომპანიებისთვის პროდუქციის შეძენა მხოლოდ საჭირო ნივთების მოძიებას აღარ ნიშნავს. მნიშვნელოვანია სწორი არჩევანი, კონკურენტული პირობები, ხელმისაწვდომობა და მომსახურების ხარისხი — ყველაფერი ერთად.",
        aboutText2: "GLTrade სწორედ ამ საჭიროებაზე შეიქმნა.",
        aboutText3: "ჩვენ ვაერთიანებთ ტექნოლოგიურ, საოფისე და ყოველდღიური საქმიანობისთვის აუცილებელ პროდუქციას და ბიზნესებს ვთავაზობთ მომარაგების ერთიან, მოქნილ და პროფესიონალურ გადაწყვეტას.",
        aboutText4: "ჩვენი პორტფელი მოიცავს IT ტექნიკას და აღჭურვილობას, კომპიუტერებსა და პერიფერიულ მოწყობილობებს, პრინტერებსა და ბეჭდვის მასალებს, საოფისე და საკანცელარიო პროდუქციას, ჰიგიენისა და დასუფთავების საშუალებებს და სხვა აუცილებელ პროდუქტებს.",
        
        aboutMoreChoice: "📦 მეტი არჩევანი. ნაკლები სირთულე.",
        aboutText5: "ჩვენი მიზანია, კომპანიას აღარ დასჭირდეს დროის დახარჯვა სხვადასხვა პროდუქტის სხვადასხვა ადგილას მოსაძიებლად.",
        aboutText6: "GLTrade აერთიანებს მრავალ მიმართულებას ერთ სივრცეში და მომხმარებელს აძლევს შესაძლებლობას, სხვადასხვა საჭიროება ერთი საიმედო პარტნიორის მეშვეობით მოაგვაროს.",
        aboutText7: "ეს ნიშნავს უფრო მარტივ შესყიდვებს, ნაკლებ კომუნიკაციას, უკეთ ორგანიზებულ პროცესს და მეტ დროს იმ საქმიანობისთვის, რომელიც ბიზნესისთვის რეალურად მნიშვნელოვანია.",

        aboutProfessionalism: "⭐ პროფესიონალიზმი იწყება დეტალებიდან",
        aboutText8: "ჩვენთვის ხარისხიანი მომსახურება მხოლოდ შეკვეთის შესრულება არ არის.",
        aboutText9: "ეს არის ზუსტად გაგებული მოთხოვნა, სწორად შერჩეული პროდუქტი, მკაფიო კომერციული პირობები, დროული რეაგირება და პასუხისმგებლობა თითოეულ შეთანხმებაზე.",
        aboutText10: "ჩვენ ვცდილობთ, თითოეული თანამშრომლობა ავაშენოთ ნდობაზე, გამჭვირვალობაზე და რეალურ შედეგზე.",

        aboutSolutions: "🤝 გადაწყვეტილებები, რომლებიც ბიზნესს შეესაბამება",
        aboutText11: "ყველა ორგანიზაციას განსხვავებული მოთხოვნა აქვს.",
        aboutText12: "ამიტომ ჩვენ არ ვთავაზობთ ყველას ერთსა და იმავე მიდგომას. კონკრეტული საჭიროებიდან გამომდინარე, ვარჩევთ შესაბამის პროდუქტებს, ვაყალიბებთ კომერციულ პირობებს და ვთავაზობთ თანამშრომლობის ფორმატს, რომელიც მომხმარებლისთვის პრაქტიკული და ეფექტურია.",
        aboutText13: "იქნება ეს ერთჯერადი შესყიდვა, რეგულარული მომარაგება თუ ხანგრძლივი თანამშრომლობა — ჩვენთვის მნიშვნელოვანია, რომ მიღებული გადაწყვეტილება რეალურ ღირებულებას ქმნიდეს.",

        aboutVision: "🎯 ჩვენი ხედვა",
        aboutText14: "ჩვენ ვაშენებთ GLTrade-ს, როგორც ძლიერ, თანამედროვე და სანდო კომპანიას, რომელიც საქართველოში ბიზნესის მომარაგების სფეროში ხარისხისა და მომსახურების მაღალი სტანდარტის შექმნას შეძლებს.",
        aboutText15: "ჩვენი განვითარების საფუძველია მუდმივი გაუმჯობესება — პროდუქციის ასორტიმენტის გაფართოება, მომსახურების პროცესების დახვეწა და მომხმარებლისთვის უფრო მეტი შესაძლებლობის შექმნა.",
        aboutText16: "ჩვენთვის საუკეთესო შედეგი არის ის მომენტი, როდესაც მომხმარებელი GLTrade-ს უბრალოდ მომწოდებლად აღარ აღიქვამს და მას საკუთარ საიმედო პარტნიორად მიიჩნევს.",
    
        termsTitle: "📜 მომსახურების პირობები",
        termsMainTitle: "📜 ჩვენი მომსახურების პირობები",
        termsIntro: "ჩვენი კომპანია იურიდიულ და ფიზიკურ პირებს სთავაზობს საოფისე ნივთების ონლაინ შეძენას და უფასო მიტანის სერვისს მთელი საქართველოს მასშტაბით.",
        termsOrderTitle: "1. შეკვეთის განთავსება",
        termsOrderRule1: "შეკვეთის მინიმალური ჯამური ღირებულება შეადგენს 50 ლარს (საბეჭდი ქაღალდის ღირებულების გარეშე).",
        termsOrderRule2: "შეკვეთის გასაფორმებლად აუცილებელია საიტზე რეგისტრაცია და მოთხოვნილი ინფორმაციის შევსება.",
        termsOrderRule3: "რეგისტრაციის დასრულების შემდეგ მომხმარებელს ეძლევა შესაძლებლობა ისარგებლოს პროდუქციის ონლაინ შეძენისა და უფასო მიტანის სერვისით.",
        termsOrderRule4: "შეკვეთა განხორციელებულად ითვლება შეკვეთის გაფორმების შემდგომ GL Trade-ის წარმომადგენლის მიერ თქვენს მიერ მითითებულ ელექტრონულ ფოსტაზე ან/და ტელეფონის ნომერზე დაკავშირებისა და დადასტურების შემდგომ.",
        termsOrderRule5: "ანგარიშის ნომრები: IBANK-GE03BG0000000613125631 , TBC-GE69TB7874536020100009",
        
        termsDeliveryTitle: "2. მიწოდების პირობები",
        termsDeliveryRule1: "თბილისში შეკვეთის მიწოდება ხორციელდება 1 სამუშაო დღის განმავლობაში ანგარიშწორების განხორციელების მომენტიდან.",
        termsDeliveryRule2: "რეგიონებში შეკვეთის მიწოდება ხორციელდება 3 სამუშაო დღის განმავლობაში ანგარიშწორების განხორციელების მომენტიდან",
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
        heroTitle: "🏢 GLTrade - Your trusted partner",
        heroSubtitle: "Wholesale supply quickly, easily, and at the best price.",
        heroBtn: "🛍️ View Products",
        contactUs: "Contact Us:",
        locationTitle: "📍 Our Location",
        addressLabel: "Address:",
        addressText: "Tbilisi, V. Gulisashvili 18 b",
        phoneLabel: "Phone:",
        hoursLabel: "Working Hours:",
        hoursText: "Mon - Fri: 09:00 - 18:00",
        emailLabel: "Email:",
        
        // Categories
      catTitle: "Categories",
    catAll: "📦 All Products",
    catPaper: "📄 Paper Products",
    catPrintPaper: "Print Paper",
    catWatercolor: "Watercolor Paper",
    catLabel: "Label",
    catStickyNotes: "Sticky Notes",
    catNotebook: "Notebook",
    catEnvelope: "Envelope",
    
    catStationery: "✂️ Stationery",
    catRuler: "Ruler",
    catSharpener: "Sharpener",
    catEraser: "Eraser",
    catFileFolder: "File Folder",
    catBinderFolder: "Binder Folder",
    catUtilityKnife: "Utility Knife",
    catClips: "Clips",
    catPaperclips: "Paperclips",
    catPenHolder: "Pen Holder",
    catDeskShelf: "Desk Shelf",
    
    catWriting: "✏️ Writing Supplies",
    catPen: "Pen",
    catPencil: "Pencil",
    
    catOffice: "📂 Office Supplies",
    catBinder: "Binder",
    catDivider: "Divider",
    catBindingCover: "Binding Cover",
    catOrganizer: "Organizer",
    catSignboard: "Signboard",
    catBusinessCardHolder: "Business Card Holder",
    catDeskLamp: "Desk Lamp",
    catBadge: "Badge / Lanyard",
    catKeyBox: "Key Box / Keychain",
    catCleaningSet: "Office Bin / Cleaning Set",
    
    catHygiene: "🏥 Hygiene & Cleaning",
    catGrass: "Grass Hygiene",
    catBagi: "Bagi Hygiene",

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
        aboutNewStandard: "🚀 A New Standard in Business Supply",
        aboutText1: "Today, purchasing products for companies is no longer just about finding the necessary items. The right choice, competitive conditions, availability, and quality of service are all important — combined.",
        aboutText2: "GLTrade was created precisely for this need.",
        aboutText3: "We unite technological, office, and everyday operational products, offering businesses a single, flexible, and professional supply solution.",
        aboutText4: "Our portfolio includes IT equipment and hardware, computers and peripherals, printers and printing supplies, office and stationery products, hygiene and cleaning products, and other essentials.",
        
        aboutMoreChoice: "📦 More Choice. Less Complexity.",
        aboutText5: "Our goal is to save companies from wasting time searching for different products in various places.",
        aboutText6: "GLTrade brings multiple directions into one space, giving customers the ability to solve various needs through a single reliable partner.",
        aboutText7: "This means simpler purchases, less communication, a better-organized process, and more time for what truly matters to your business.",

        aboutProfessionalism: "⭐ Professionalism Begins with Details",
        aboutText8: "For us, quality service is not just about fulfilling an order.",
        aboutText9: "It is about a precisely understood requirement, a correctly selected product, clear commercial terms, timely response, and responsibility for every agreement.",
        aboutText10: "We strive to build every cooperation on trust, transparency, and real results.",

        aboutSolutions: "🤝 Solutions Tailored to Business",
        aboutText11: "Every organization has different requirements.",
        aboutText12: "Therefore, we do not offer a one-size-fits-all approach. Based on specific needs, we select appropriate products, establish commercial terms, and offer a cooperation format that is practical and effective for the customer.",
        aboutText13: "Whether it's a one-time purchase, regular supply, or long-term cooperation — it is important to us that the solution creates real value.",

        aboutVision: "🎯 Our Vision",
        aboutText14: "We are building GLTrade as a strong, modern, and reliable company capable of setting high standards of quality and service in the business supply sector in Georgia.",
        aboutText15: "The foundation of our development is continuous improvement — expanding our product range, refining service processes, and creating more opportunities for customers.",
        aboutText16: "Our best result is the moment when the customer no longer perceives GLTrade merely as a supplier, but considers them their trusted partner.",
        termsMainTitle: "📜 Terms of Service",
        termsIntro: "Our company offers legal entities and individuals online purchase of office supplies and free delivery service throughout Georgia.",
        termsOrderTitle: "1. Placing an Order",
        termsOrderRule1: "The minimum total order value is 50 GEL (excluding printing paper).",
        termsOrderRule2: "To place an order, it is necessary to register on the website and fill in the required information.",
        termsOrderRule3: "After completing registration, the user gets access to online purchases and free delivery services.",
        termsOrderRule4: "The order is considered to be placed after the order is placed and a GL Trade representative contacts you at the email address and/or phone number you provided and confirms it.",
        termsOrderRule5: "Account numbers: IBANK-GE03BG0000000613125631 , TBC-GE69TB7874536020100009",
        termsDeliveryTitle: "2. Delivery Terms",
        termsDeliveryRule1: "In Tbilisi, order delivery is carried out within 1 business day from the moment of payment.",
        termsDeliveryRule2: "Orders in the regions are delivered within 3 business days from the moment of payment.",
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
        heroTitle: "🏢 GLTrade - Ваш надежный партнер",
        heroSubtitle: "Оптовые поставки быстро, просто и по лучшей цене.",
        heroBtn: "🛍️ Смотреть товары",
        contactUs: "Свяжитесь с нами:",
        locationTitle: "📍 Локация офиса",
        addressLabel: "Адрес:",
        addressText: "г. Тбилиси, В. Гулисашвили 18 б",
        phoneLabel: "Телефон:",
        hoursLabel: "Часы работы:",
        hoursText: "Пн - Пт: 09:00 - 18:00",
        emailLabel: "Эл. почта:",
        
        // Categories
       catTitle: "Категории",
    catAll: "📦 Все продукты",
    catPaper: "📄 Бумажная продукция",
    catPrintPaper: "Бумага для печати",
    catWatercolor: "Акварельная бумага",
    catLabel: "Этикетка",
    catStickyNotes: "Бумажные стикеры",
    catNotebook: "Блокнот",
    catEnvelope: "Конверт",
    
    catStationery: "✂️ Канцелярские товары",
    catRuler: "Линейка",
    catSharpener: "Точилка",
    catEraser: "Ластик",
    catFileFolder: "Файл-папка",
    catBinderFolder: "Папка-скоросшиватель",
    catUtilityKnife: "Канцелярский нож",
    catClips: "Зажимы для бумаг",
    catPaperclips: "Скрепки",
    catPenHolder: "Стакан для ручек",
    catDeskShelf: "Настольная полка",
    
    catWriting: "✏️ Письменные принадлежности",
    catPen: "Ручка",
    catPencil: "Карандаш",
    
    catOffice: "📂 Офисные принадлежности",
    catBinder: "Папка-регистратор",
    catDivider: "Разделитель",
    catBindingCover: "Обложка для переплета",
    catOrganizer: "Органайзер",
    catSignboard: "Вывеска / Табличка",
    catBusinessCardHolder: "Визитница",
    catDeskLamp: "Настольная лампа",
    catBadge: "Бейдж / Лента для бейджа",
    catKeyBox: "Ключница / Брелок",
    catCleaningSet: "Офисная урна / Инвентарь",
    
    catHygiene: "🏥 Гигиена и уборка",
    catGrass: "Гигиена Grass",
    catBagi: "Гигиена Bagi",

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
       aboutTitle: "🏢 О компании GLTrade",
        aboutNewStandard: "🚀 Новый стандарт в обеспечении бизнеса",
        aboutText1: "Сегодня для компаний закупка продукции — это не просто поиск необходимых вещей. Важны правильный выбор, конкурентные условия, доступность и качество обслуживания — все вместе.",
        aboutText2: "Компания GLTrade создана именно под эту потребность.",
        aboutText3: "Мы объединяем технологическую, офисную и повседневную продукцию, предлагая бизнесу единое, гибкое и профессиональное решение для снабжения.",
        aboutText4: "В наш портфель входят IT-оборудование и техника, компьютеры и периферия, принтеры и расходные материалы, офисные и канцелярские товары, средства гигиены и уборки, а также другие необходимые продукты.",
        
        aboutMoreChoice: "📦 Больше выбора. Меньше сложностей.",
        aboutText5: "Наша цель — избавить компании от необходимости тратить время на поиск разных товаров в разных местах.",
        aboutText6: "GLTrade объединяет множество направлений в одном пространстве, давая клиенту возможность решить различные задачи через одного надежного партнера.",
        aboutText7: "Это означает более простые закупки, меньше коммуникаций, лучше организованный процесс и больше времени для того, что действительно важно для бизнеса.",

        aboutProfessionalism: "⭐ Профессионализм начинается с деталей",
        aboutText8: "Для нас качественный сервис — это не просто выполнение заказа.",
        aboutText9: "Это точно понятое требование, правильно выбранный продукт, четкие коммерческие условия, своевременная реакция и ответственность за каждое соглашение.",
        aboutText10: "Мы стремимся строить каждое сотрудничество на доверии, прозрачности и реальных результатах.",

        aboutSolutions: "🤝 Решения, адаптированные под бизнес",
        aboutText11: "У каждой организации разные требования.",
        aboutText12: "Поэтому мы не предлагаем всем один и тот же подход. Исходя из конкретных потребностей, мы подбираем подходящие товары, формируем коммерческие условия и предлагаем формат сотрудничества, практичный и эффективный для клиента.",
        aboutText13: "Будь то разовая закупка, регулярные поставки или долгосрочное сотрудничество — для нас важно, чтобы принятое решение создавало реальную ценность.",

        aboutVision: "🎯 Наше видение",
        aboutText14: "Мы строим GLTrade как сильную, современную и надежную компанию, способную задать высокие стандарты качества и сервиса в сфере бизнес-снабжения в Грузии.",
        aboutText15: "Основа нашего развития — постоянное совершенствование: расширение ассортимента, отладка процессов обслуживания и создание новых возможностей для клиентов.",
        aboutText16: "Наш лучший результат — это момент, когда клиент больше не воспринимает GLTrade просто как поставщика, а считает своим надежным партнером.",
        termsTitle: "📜 Условия обслуживания",
        termsMainTitle: "📜 Условия обслуживания",
        termsIntro: "Наша компания предлагает юридическим и физическим лицам онлайн-покупку офисных товаров и бесплатную доставку по всей Грузии.",
        termsOrderTitle: "1. Оформление заказа",
        termsOrderRule1: "Минимальная общая сумма заказа составляет 50 лари (без учета стоимости бумаги для печати).",
        termsOrderRule2: "Для оформления заказа необходимо зарегистрироваться на сайте и заполнить требуемую информацию.",
        termsOrderRule3: "После завершения регистрации пользователь получает возможность пользоваться онлайн-покупками и бесплатной доставкой.",
        termsOrderRule5: "Номера счетов: IBANK-GE03BG0000000613125631 , TBC-GE69TB7874536020100009",termsOrderRule4: "Заказ считается размещенным после его оформления и подтверждения представителем GL Trade по указанному вами адресу электронной почты и/или номеру телефона",
        termsDeliveryRule1: "В Тбилиси доставка заказа осуществляется в течение 1 рабочего дня с момента оплаты.",
        termsDeliveryRule2: "Заказы в указанные регионы доставляются в течение 3 рабочих дней с момента оплаты.",
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