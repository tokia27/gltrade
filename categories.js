// GLTrade — კატეგორიები და ქვეკატეგორიები.
// ქვეკატეგორია: ['id', 'სახელი']. id-ს პროდუქტის "subcategory" ველი ეთანხმება.
// პროდუქტი რამდენიმე ადგილას რომ გამოჩნდეს: "alsoIn":[{"cat":"new_year","sub":"chocolate"}]
const CATEGORIES = [
    { id: 'all', icon: 'grid', name: { ka: 'ყველა პროდუქტი', en: 'All products', ru: 'Все товары' }, subs: [] },
    // სეზონური კატეგორია — ფასდაკლება და საახალწლო ვიზუალი იმართება app.js-ში (SEASONAL_PROMO)
    { id: 'new_year', icon: 'tree', name: { ka: 'ახალი წელი', en: 'New Year', ru: 'Новый год' }, subs: [
        ['ny_tree', 'ნაძვის ხეები'], ['ny_toys', 'ნაძვის ხის სათამაშოები'], ['ny_santa', 'თოვლის ბაბუები'],
        ['ny_nutcracker', 'მაკნატუნები'], ['ny_lights', 'განათება'], ['ny_lamp', 'საახალწლო სანათები'],
        ['ny_fireplace', 'ბუხრები'], ['chocolate', 'შოკოლადი'], ['ny_other', 'სხვადასხვა საახალწლო პროდუქცია']
    ] },
    { id: 'paper', icon: 'file', name: { ka: 'ქაღალდის პროდუქცია', en: 'Paper products', ru: 'Бумажная продукция' }, subs: [
        ['binding_cover', 'ასაკინძი ყდა'], ['color paper', 'ფერადი ქაღალდი'], ['print_paper', 'საბეჭდი ქაღალდი'],
        ['watercolor', 'აკვარელის ქაღალდი'], ['termo_paper', 'თერმო ქაღალდი'], ['label', 'ლეიბლი'],
        ['etiket', 'სასწორის ეტიკეტი'], ['sticky_notes', 'ჩასანიშნი ქაღალდი'], ['notebook', 'ბლოკნოტი'], ['envelope', 'კონვერტი']
    ] },
    { id: 'stationery', icon: 'clip', name: { ka: 'საკანცელარიო ნივთები', en: 'Stationery', ru: 'Канцелярские товары' }, subs: [
        ['scotch', 'წებოვანი ლენტი'], ['rubber', 'ჭიკარტი და რეზინი'], ['pl', 'პლანშეტი'], ['binder', 'ბაინდერი'],
        ['divider', 'დივაიდერი'], ['ruler', 'სახაზავი'], ['sharpener', 'სათლელი'], ['eraser', 'საშლელი და კორექტორი'],
        ['stapler', 'სტეპლერი'], ['file_folder', 'ფაილი'], ['binder_folder', 'სწრაფჩამკერი'],
        ['utility_knife', 'საკანცელარიო დანა და მაკრატელი'], ['clips', 'კლიპსი და სკრეპი'], ['glue', 'წებო'],
        ['calculator', 'კალკულატორი'], ['sa', 'სახვრეტელა'], ['Sublimation cup', 'სუბლიმაციური ჭიქა'], ['Frame', 'ჩარჩო'],
        ['Gun and silicone', 'თოფი და სილიკონი'], ['data', 'თარიღატორი'], ['price', 'ფასის აპარატი'], ['map', 'რუკა და გლობუსი'],
        ['Springs', 'ასაკინძი ზამბარები'], ['Money gum', 'ფულის რეზინა'], ['Adhesive tape', 'წებოვანი ლენტი (ფართო)']
    ] },
    { id: 'writing', icon: 'pen', name: { ka: 'საწერი და სახატავი ნივთები', en: 'Writing & drawing', ru: 'Письменные принадлежности' }, subs: [
        ['pen', 'კალამი'], ['pencil', 'ფანქარი'], ['markers', 'მარკერი'], ['chalk', 'ცარცი'], ['board', 'დაფა და დაფის აქსესუარები']
    ] },
    { id: 'office', icon: 'briefcase', name: { ka: 'საოფისე ნივთები', en: 'Office supplies', ru: 'Офисные принадлежности' }, subs: [
        ['organizer', 'ორგანაიზერი'], ['business_card_holder', 'სავიზიტე'], ['desk_lamp', 'სამაგიდე სანათი'],
        ['badge', 'ბეიჯი / ბეიჯის თოკი'], ['key_box', 'გასაღების ყუთი / ბრელოკი'], ['cleaning_set', 'საოფისე ურნა'],
        ['finger', 'თითის დასასველებელი'], ['bell', 'ზარი'], ['clock', 'საათი'], ['Guillotine', 'გილიოტინა'],
        ['ring', 'ბეჭდის ბალიშები და მელანი'], ['chear', 'საოფისე სკამი'], ['signboard', 'სამაგიდე ფირნიში']
    ] },
    { id: 'Household Goods', icon: 'sparkles', name: { ka: 'სამეურნეო საქონელი', en: 'Cleaning & hygiene', ru: 'Хозяйственные товары' }, subs: [
        ['floor_cleaners', 'იატაკის საწმენდი საშუალებები'], ['dish', 'ჭურჭლის სარეცხი საშუალებები'],
        ['dishwasher', 'ჭურჭლის სარეცხი მანქანის საშუალებები'], ['kitchen', 'სამზარეულოს და გაზქურის საწმენდი'],
        ['bathroom', 'აბაზანის, უნიტაზის და ნადების საწმენდი'], ['glass', 'მინის და სარკის საწმენდი'],
        ['universal', 'უნივერსალური საწმენდი საშუალებები'], ['disinfect', 'სადეზინფექციო საშუალებები'],
        ['furniture', 'ავეჯის, ხალიჩის და ტყავის საწმენდი'], ['renovation', 'რემონტის შემდგომი საწმენდი'],
        ['laundry', 'სარეცხი საშუალებები და კონდიციონერები'], ['Sewer cleaning agents', 'საკანალიზაციო მილების საწმენდი'],
        ['Stain remover', 'ლაქების ამომყვანი'], ['air', 'ჰაერის არომატიზატორები'],
        ['soap', 'მყარი და თხევადი საპონი'], ['floor_care', 'იატაკის მოსავლელი აქსესუარები'],
        ['buckets', 'სათლები'],
        ['spong', 'ღრუბელი'], ['Cleaning', 'საწმენდი ტილოები და მიკროფიბრა'], ['Toilet paper', 'საპირფარეშოს ქაღალდი'], ['Paper napkins', 'ქაღალდის ხელსახოცები'],
        ['Paper dispensers', 'ქაღალდის დისპენსერები'], ['Toilet Paper dispensers', 'საპირფარეშოს ქაღალდის დისპენსერები'],
        ['Soap dispensers', 'საპნის დისპენსერები'],
        ['ladders', 'კიბეები'], ['Security', 'უსაფრთხოების ნიშნები და დაფები'], ['trash beg', 'ნაგვის პარკები']
    ] },
    { id: 'Computers', icon: 'laptop', name: { ka: 'კომპიუტერული და საოფისე ტექნიკა', en: 'Computers & office equipment', ru: 'Компьютерная и офисная техника' }, subs: [
        ['mouse', 'მაუსი'], ['keyboard', 'კლავიატურა'], ['mouse and keyboard', 'მაუსი და კლავიატურა'], ['mouse pad', 'მაუსის პადი'],
        ['disc', 'CD და DVD დისკები'], ['remote', 'პრეზენტაციის პულტი'], ['Leptops', 'ლეპტოპები'], ['Begs', 'ჩანთები'],
        ['Monitors', 'მონიტორები'], ['Projectors', 'პროექტორები'], ['Printers', 'პრინტერები'], ['Flesh cards', 'ფლეშ ბარათები'],
        ['Cabels', 'კაბელები'], ['Binding machine', 'ამკინძავი მანქანა'], ['Laminating machine', 'ლამინირების აპარატი'],
        ['destroy', 'ქაღალდის გამანადგურებელი'], ['Money inventory', 'ფულის ინვენტარი'], ['Cartridge', 'კარტრიჯი']
    ] },
    { id: 'Network equipment', icon: 'wifi', name: { ka: 'ქსელური ტექნიკა', en: 'Network equipment', ru: 'Сетевое оборудование' }, subs: [
        ['Routers', 'როუტერები'], ['Switches', 'სვიჩები'], ['Adapters', 'WIFI ადაპტერები'], ['Signals', 'WIFI სიგნალის გამაძლიერებლები'], ['Racks', 'რეკები / აქსესუარები']
    ] },
    { id: 'Electrical energy', icon: 'zap', name: { ka: 'ელ. ენერგია', en: 'Power & batteries', ru: 'Электропитание' }, subs: [
        ['External chargers', 'გარე დამტენები'], ['Power strip', 'დენის დამაგრძელებლები'], ['Ups', 'UPS უწყვეტი ენერგია']
    ] },
    { id: 'Hotel', icon: 'bell', name: { ka: 'სასტუმროს ინვენტარი', en: 'Hotel supplies', ru: 'Гостиничный инвентарь' }, subs: [
        ['amenities', 'ერთჯერადი სასტუმროს აქსესუარები']
    ] },
    { id: 'disposables', icon: 'cup', name: { ka: 'ერთჯერადი პროდუქცია', en: 'Disposable products', ru: 'Одноразовая продукция' }, subs: [
        ['disposable_tableware', 'ერთჯერადი ჭურჭელი'], ['disposable_cups', 'ერთჯერადი ჭიქები და აქსესუარები'], ['packaging', 'შესაფუთი მასალები'], ['disposable_containers', 'ერთჯერადი კონტეინერები']
    ] },
    { id: 'Office Food', icon: 'coffee', name: { ka: 'საოფისე კვება', en: 'Office food & drinks', ru: 'Офисное питание' }, subs: [
        ['chocolate', 'შოკოლადი'], ['tea', 'ჩაი'], ['coffe', 'ყავა'], ['disposable coffee', 'ერთჯერადი ყავა'], ['sugar', 'შაქარი და დამატკბობელი'], ['drink', 'წყალი და სასმელები'], ['Snakes', 'სნექები']
    ] },
    { id: 'fire safety', icon: 'flame', name: { ka: 'სახანძრო უსაფრთხოება', en: 'Fire safety', ru: 'Пожарная безопасность' }, subs: [
        ['medicine', 'პირველადი სამედიცინო დახმარება'], ['emergency', 'საევაკუაციო და უსაფრთხოების ნიშნები'], ['fire', 'ხანძარსაწინააღმდეგო საშუალებები']
    ] },
    { id: 'Medical inventory', icon: 'med', name: { ka: 'სამედიცინო ინვენტარი', en: 'Medical supplies', ru: 'Медицинский инвентарь' }, subs: [] }
];

