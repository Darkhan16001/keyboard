"use strict";

const $ = id => document.getElementById(id);
const langs = ["ru", "kk", "en"];
const names = {ru:"Русский", kk:"Қазақша", en:"English"};

/* 1. ПЕРЕВОДЫ */

const dict = {
    interface:"Язык интерфейса|Интерфейс тілі|Interface language",
    language:"Язык обучения|Оқыту тілі|Typing language",
    rgb:"RGB-подсветка|RGB жарығы|RGB lighting",
    rainbow:"Радужная|Кемпірқосақ|Rainbow",
    reactive:"При нажатии|Басқан кезде|Reactive",
    off:"Выключена|Өшірулі|Off",
    sound:"Звук клавиш|Перне дыбысы|Keyboard sound",
    hints:"Подсказки|Көмек|Hints",
    completed:"Пройдено уроков|Аяқталған сабақтар|Completed lessons",
    record:"Личный рекорд|Жеке рекорд|Personal best",
    pages:"Все страницы|Барлық беттер|All pages",
    expand:"Развернуть всё|Барлығын ашу|Expand all",
    collapse:"Свернуть всё|Барлығын жабу|Collapse all",
    search:"Поиск урока...|Сабақты іздеу...|Search lessons...",
    history:"Статистика|Статистика|Statistics",
    editor:"Редактор формул|Формула редакторы|Formula editor",
    learn:"Обучение|Оқыту|Learning",
    practice:"Практика|Жаттығу|Practice",
    speed:"Скорость|Жылдамдық|Speed",
    accuracy:"Точность|Дәлдік|Accuracy",
    characters:"Символы|Таңбалар|Characters",
    errors:"Ошибки|Қателер|Errors",
    time:"Время|Уақыт|Time",
    restart:"↻ Заново|↻ Қайта бастау|↻ Restart",
    previous:"← Назад|← Артқа|← Previous",
    next:"Далее →|Келесі →|Next →",
    sample:"Образец формулы|Формула үлгісі|Formula example",
    yourFormula:"Твоя формула|Сенің формулаң|Your formula",
    keyboard:"RGB-клавиатура|RGB пернетақта|RGB keyboard",
    nextKey:"Следующая клавиша|Келесі перне|Next key",
    finger:"Палец|Саусақ|Finger",
    combination:"Комбинация|Тіркесім|Combination",
    hands:"Положение рук|Қолдың орналасуы|Hand placement",
    left:"Левая рука|Сол қол|Left hand",
    right:"Правая рука|Оң қол|Right hand",
    handRule:"Указательные пальцы положи на А и О или F и J. Пробел нажимай большим пальцем.|Сұқ саусақтарыңды А және О немесе F және J пернелеріне қой. Бос орынды бас бармақпен бас.|Place index fingers on F and J or А and О. Use your thumb for Space.",
    syntax:"Для дроби используй 3/4. Для нижнего индекса H_2O. Для степени x^2. Несколько символов индекса заключай в фигурные скобки. Для корня используй sqrt(16).|Бөлшек үшін 3/4, төменгі индекс үшін H_2O, дәреже үшін x^2 жаз. Бірнеше таңбаны фигуралық жақшаға ал. Түбір үшін sqrt(16) жаз.|Use 3/4 for fractions, H_2O for subscripts, x^2 for powers. Use braces for multiple index characters and sqrt(16) for roots.",
    trainFormula:"Тренировать формулу|Формуланы жаттықтыру|Practice formula",
    selectFormula:"Выделить формулу|Формуланы белгілеу|Select formula",
    back:"Вернуться к уроку|Сабаққа оралу|Return to lesson",
    sessions:"Тренировок|Жаттығулар|Sessions",
    average:"Средняя скорость|Орташа жылдамдық|Average speed",
    examsPassed:"Сдано экзаменов|Тапсырылған емтихандар|Exams passed",
    weak:"Слабые клавиши|Қиын пернелер|Weak keys",
    trainWeak:"Тренировать слабые клавиши|Қиын пернелерді жаттықтыру|Practice weak keys",
    date:"Дата|Күні|Date",
    mode:"Режим|Режим|Mode",
    result:"Результат|Нәтиже|Result",
    clear:"Очистить прогресс|Нәтижелерді өшіру|Clear progress",
    done:"Тренировка завершена!|Жаттығу аяқталды!|Training completed!",
    close:"Закрыть|Жабу|Close",
    ready:"Начни печатать. Таймер запустится автоматически.|Теруді баста. Таймер автоматты қосылады.|Start typing. The timer starts automatically.",
    running:"Тренировка идёт...|Жаттығу жүріп жатыр...|Training in progress...",
    passed:"Пройдено|Аяқталды|Passed",
    failed:"Не пройдено|Қайта орында|Not passed",
    layout:"Переключай системную раскладку через Win + Space.|Пернетақта тілін Win + Space арқылы ауыстыр.|Switch system layout with Win + Space.",
    learnRule:"Повтори показанные символы. Для прохождения нужно 90% точности.|Көрсетілген таңбаларды қайтала. 90% дәлдік қажет.|Repeat the displayed characters. At least 90% accuracy is required.",
    practiceRule:"Практика без ограничения времени.|Уақыт шектеуінсіз жаттығу.|Practice without a time limit.",
    speedRule:"Ошибочная буква не вставляется. Нужная буква горит красным.|Қате әріп енгізілмейді. Қажетті әріп қызыл болады.|Wrong characters are rejected. The target character turns red.",
    keyRule:"Нажимай указанные клавиши. Системные сочетания можно имитировать на экране.|Көрсетілген пернелерді бас. Жүйелік тіркесімдерді экранда орындауға болады.|Press the indicated keys. System shortcuts can be simulated on screen.",
    space:"Пробел|Бос орын|Space",
    unknown:"Нужная клавиша|Қажетті перне|Required key",
    free:"Свободный тест|Еркін сынақ|Free test",
    beginner:"Начальный экзамен|Бастапқы емтихан|Beginner exam",
    intermediate:"Средний экзамен|Орташа емтихан|Intermediate exam",
    advanced:"Продвинутый экзамен|Жоғары емтихан|Advanced exam",
    expert:"Экспертный экзамен|Сарапшы емтиханы|Expert exam",
    showMenu:"Показать меню|Мәзірді көрсету|Show menu",
    hideMenu:"Скрыть меню|Мәзірді жасыру|Hide menu",
    full:"На весь экран|Толық экран|Fullscreen",
    exitFull:"Выйти из полного экрана|Толық экраннан шығу|Exit fullscreen",
    confirmClear:"Удалить весь прогресс?|Барлық нәтижелерді өшіру керек пе?|Delete all progress?",
    empty:"Пока нет результатов|Нәтиже жоқ|No results yet",
    custom:"Собственная формула|Жеке формула|Custom formula",
    requirements:"Требования|Талаптар|Requirements"
};

/* 2. СОХРАНЕНИЕ */

function defaults() {
    return {
        ui:"ru", language:"ru", rgb:"rainbow",
        sound:false, hints:true, zoom:100,
        menuHidden:false, completed:[], exams:[],
        history:[], weak:{}, best:{ru:0,kk:0,en:0}
    };
}

const STORAGE = "keyboard-up-pro-v8";

let data = defaults();

try {
    data = {
        ...data,
        ...JSON.parse(localStorage.getItem(STORAGE) || "{}")
    };
} catch {}

if (!langs.includes(data.ui)) data.ui = "ru";
if (!langs.includes(data.language)) data.language = "ru";
if (!["rainbow","reactive","off"].includes(data.rgb)) data.rgb = "rainbow";

for (const key of ["completed","exams","history"]) {
    if (!Array.isArray(data[key])) data[key] = [];
}

data.best = {...defaults().best,...data.best};
data.weak = {...data.weak};

function save() {
    try {
        localStorage.setItem(STORAGE,JSON.stringify(data));
    } catch {}
}

function tr(value) {
    return String(value).split("|")[langs.indexOf(data.ui)] ||
           String(value).split("|")[0];
}

function t(key) {
    return dict[key] ? tr(dict[key]) : key;
}

/* 3. НАЗВАНИЯ ЯЗЫКОВЫХ УРОКОВ */

const lessonNames = [
    "Первые клавиши|Алғашқы пернелер|First keys",
    "Левая рука|Сол қол|Left hand",
    "Правая рука|Оң қол|Right hand",
    "Средний ряд|Ортаңғы қатар|Home row",
    "Верхний ряд слева|Жоғарғы сол қатар|Top left",
    "Верхний ряд справа|Жоғарғы оң қатар|Top right",
    "Нижний ряд слева|Төменгі сол қатар|Bottom left",
    "Нижний ряд справа|Төменгі оң қатар|Bottom right",
    "Дополнительные буквы|Қосымша әріптер|Extra letters",
    "Короткие слова|Қысқа сөздер|Short words",
    "Длинные слова|Ұзын сөздер|Long words",
    "Заглавные буквы|Бас әріптер|Capital letters",
    "Цифры 1–5|1–5 сандары|Digits 1–5",
    "Цифры 6–0|6–0 сандары|Digits 6–0",
    "Числа и даты|Сандар мен күндер|Numbers and dates",
    "Символы ! @ # $ %|Таңбалар ! @ # $ %|Symbols ! @ # $ %",
    "Символы ^ & * ( )|Таңбалар ^ & * ( )|Symbols ^ & * ( )",
    "Пунктуация|Тыныс белгілері|Punctuation",
    "Предложения|Сөйлемдер|Sentences",
    "Итоговый урок|Қорытынды сабақ|Final lesson"
];

const common = [
    "111 222 333 444 555 12345 54321",
    "666 777 888 999 000 67890 09876",
    "25.11.2026 12:30 100 250 1500 98.5",
    "! @ # $ % !@#$% 25% student@example.com",
    "^ & * ( ) ^&*() 5*8 (25+10)",
    ".,;:!? -_+= []{} <> /\\ \"' `~ |"
];

const courses = {
    ru:[
        "ааа ооо ао оа ааоо ооаа",
        "фыва авыф фва ыва ваф",
        "олдж ждло оло джо лодж",
        "фывапролдж вода овал лава",
        "йцукен рука река урок",
        "гшщзхъ окно шаг звон",
        "ячсм мяч сам час",
        "итьбю быть пить тень",
        "ё э ъ ь ёж эхо подъезд",
        "дом мир сад лес сон свет",
        "компьютер клавиатура программа образование",
        "Алматы Москва Казахстан Россия",
        ...common,
        "Каждый день я учусь печатать быстро и точно.",
        "Моя скорость выросла на 25%! Почта: student@example.com."
    ],

    kk:[
        "ааа ооо ао оа ааоо ооаа",
        "фыва авыф фва ыва ваф",
        "олдж ждло оло джо лодж",
        "фывапролдж дала жол ауа",
        "йцукен күн ел жел",
        "гшщзхъ ғалым хабар шаң",
        "ячсм мен сен жас",
        "итьбю білім еңбек өмір",
        "ә і ң ғ ү ұ қ ө һ әке жаңа ғылым гүл құс өмір гауһар",
        "күн жер тіл ел су үй",
        "Қазақстан технология пернетақта болашақ",
        "Алматы Астана Әлия Ғалым Қазақстан",
        ...common,
        "Білім адамға жаңа мүмкіндіктер береді.",
        "Бүгін жылдамдық 25% өсті! Пошта: student@example.com."
    ],

    en:[
        "fff jjj fj jf ffjj jjff",
        "asdf fdsa sad dad add",
        "jkl; ;lkj jkl jll kll",
        "asdfghjkl; flask salad ask",
        "qwert tree water write",
        "yuiop your opinion power",
        "zxcvb cab vex box",
        "nm,. name man moon",
        "g h p q x z b v quiz zebra",
        "cat dog sun map pen book",
        "computer keyboard technology education",
        "London Paris English Kazakhstan",
        ...common,
        "Every day I learn to type faster and more accurately.",
        "My speed increased by 25%! Email: student@example.com."
    ]
};

/* 4. СОЗДАЁМ РОВНО 100 СТРАНИЦ */

const groups = [];
const pages = [];

function group(id,title,icon) {
    const g = {id,title,icon,pages:[]};
    groups.push(g);
    return g;
}

function add(g,title,kind,content,lang=null,tip="") {
    const page = {
        id:pages.length+1,
        group:g.id,
        title,kind,content,lang,tip
    };

    pages.push(page);
    g.pages.push(page);
}

/* 60 ЯЗЫКОВЫХ СТРАНИЦ */

for (const lang of langs) {

    const flags = {ru:"🇷🇺",kk:"🇰🇿",en:"🇬🇧"};

    const g = group(lang,names[lang],flags[lang]);

    courses[lang].forEach((text,i)=>{

        const tip = i>=12 && i<=17
            ? "Для цифр и специальных символов используй английскую раскладку. Верхние знаки нажимай с Shift.|Сандар мен арнайы таңбалар үшін ағылшын пернетақтасын қолдан. Жоғарғы таңбаларды Shift арқылы бас.|Use English layout for numbers and symbols. Hold Shift for upper symbols."
            : i===11
                ? "Удерживай Shift и нажимай букву.|Shift пернесін ұстап, әріпті бас.|Hold Shift while pressing the letter."
                : "Старайся печатать всеми пальцами, не глядя на клавиатуру.|Пернетақтаға қарамай, барлық саусақпен теруге тырыс.|Practice touch typing with all fingers.";

        add(g,lessonNames[i],"text",text,lang,tip);
    });
}

/* 12 ФУНКЦИОНАЛЬНЫХ СТРАНИЦ */

const functionDescriptions = [
    "Справка|Анықтама|Help",
    "Переименование файла|Файл атауын өзгерту|Rename file",
    "Поиск|Іздеу|Search",
    "Адресная строка в некоторых программах|Мекенжай жолағы|Address bar in some apps",
    "Обновление страницы|Бетті жаңарту|Refresh",
    "Переключение элементов|Элементтерді ауыстыру|Cycle interface elements",
    "Проверка правописания в некоторых редакторах|Емлені тексеру|Spell check in some editors",
    "Дополнительная функция программы|Қосымша қызмет|Application-specific function",
    "Обновление полей Word|Word өрістерін жаңарту|Update Word fields",
    "Управление меню|Мәзірді басқару|Menu control",
    "Полноэкранный режим браузера|Толық экран|Browser fullscreen",
    "Инструменты разработчика|Әзірлеуші құралдары|Developer tools"
];

const functionsGroup = group(
    "functions","Функциональные клавиши|Функциялық пернелер|Function keys","⌨"
);

functionDescriptions.forEach((description,i)=>{

    const key = "F"+(i+1);

    const titles = description.split("|").map(x=>key+" · "+x);

    add(
        functionsGroup,
        titles.join("|"),
        "keys",
        [key,key,key,"Escape",key],
        null,
        description
    );
});

/* 8 СТРАНИЦ СЛУЖЕБНЫХ КЛАВИШ */

const shortcuts = group(
    "shortcuts","Горячие клавиши|Перне тіркесімдері|Keyboard shortcuts","💻"
);

const shortcutLessons = [
    [
        "Esc, Tab, Enter",
        ["Escape","Tab","Enter","Escape","Enter"]
    ],
    [
        "Shift и Caps Lock|Shift және Caps Lock|Shift and Caps Lock",
        ["ShiftLeft","ShiftRight","CapsLock","Shift+KeyA","Shift+Digit2"]
    ],
    [
        "Ctrl и Alt|Ctrl және Alt|Ctrl and Alt",
        ["ControlLeft","ControlRight","AltLeft","AltRight","Ctrl+KeyA"]
    ],
    [
        "Копирование и вставка|Көшіру және қою|Copy and paste",
        ["Ctrl+KeyC","Ctrl+KeyV","Ctrl+KeyX","Ctrl+KeyA"]
    ],
    [
        "Отмена и сохранение|Болдырмау және сақтау|Undo and save",
        ["Ctrl+KeyZ","Ctrl+KeyY","Ctrl+KeyS","Ctrl+Shift+KeyS"]
    ],
    [
        "Стрелки и навигация|Басқару пернелері|Navigation",
        ["ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Home","End","PageUp","PageDown"]
    ],
    [
        "Удаление и редактирование|Өшіру және өңдеу|Editing",
        ["Backspace","Delete","Insert","Shift+ArrowLeft","Ctrl+ArrowRight"]
    ],
    [
        "Цифровой блок|Сандық блок|Numeric keypad",
        ["NumLock",...Array.from("1234567890",x=>"Numpad"+x),
         "NumpadAdd","NumpadSubtract","NumpadMultiply",
         "NumpadDivide","NumpadDecimal","NumpadEnter"]
    ]
];

shortcutLessons.forEach(([title,content])=>{
    add(shortcuts,title,"keys",content);
});

/* 10 СТРАНИЦ МАТЕМАТИКИ И ФИЗИКИ */

const mathGroup = group(
    "math","Математика и физика|Математика және физика|Mathematics and physics","📐"
);

const mathLessons = [
    ["Числитель и знаменатель|Алым және бөлім|Numerator and denominator",
     "1/2; 3/4; 5/8; 12/25; 17/32"],

    ["Сложение дробей|Бөлшектерді қосу|Adding fractions",
     "1/4+2/4=3/4; 2/5+1/5=3/5"],

    ["Умножение и деление|Көбейту және бөлу|Multiplication and division",
     "2/3\\times3/4=1/2; 12/4=3"],

    ["Квадраты и кубы|Квадраттар мен кубтар|Squares and cubes",
     "2^2=4; 3^3=27; 5^2=25; x^2+y^2"],

    ["Большие степени|Үлкен дәрежелер|Higher powers",
     "10^{12}; 2^{15}; x^{n+1}; a^{10}"],

    ["Маленькие буквы и индексы|Кіші әріптер және индекстер|Letter indices",
     "a_n; x_i; x_{12}; v_0; a_{n+1}"],

    ["Квадратные корни|Квадрат түбірлер|Square roots",
     "sqrt(16)=4; sqrt(81)=9; sqrt(144)=12"],

    ["Проценты и сравнения|Пайыздар және салыстыру|Percentages and comparisons",
     "25%=1/4; 5>3; 2<4; x\\geq0; a\\neq b"],

    ["Греческие буквы|Грек әріптері|Greek letters",
     "\\alpha; \\beta; \\gamma; \\pi; \\Delta; \\lambda; \\mu"],

    ["Формулы физики|Физика формулалары|Physics formulas",
     "v=s/t; I=U/R; F=ma; E=mc^2; p=F/S"]
];

mathLessons.forEach(([title,text])=>{
    add(mathGroup,title,"science",text,"en");
});

/* 10 СТРАНИЦ ХИМИИ */

const chemistry = group(
    "chemistry","Химия и научные индексы|Химия және ғылыми индекстер|Chemistry and science notation","🧪"
);

const chemistryLessons = [
    ["Символы элементов|Элемент таңбалары|Element symbols",
     "H; O; C; N; Na; Cl; Mg; Ca; Fe; Al"],

    ["Нижние индексы|Төменгі индекстер|Subscripts",
     "H_2; O_2; N_2; Cl_2; O_3; P_4"],

    ["Молекулярные формулы|Молекулалық формулалар|Molecular formulas",
     "H_2O; CO_2; NH_3; CH_4; C_6H_{12}O_6"],

    ["Сложные формулы|Күрделі формулалар|Compound formulas",
     "CaCO_3; Na_2CO_3; H_2SO_4; H_3PO_4"],

    ["Скобки и индексы|Жақшалар және индекстер|Groups and subscripts",
     "Ca(OH)_2; Al(OH)_3; Mg(NO_3)_2"],

    ["Заряды ионов|Ион зарядтары|Ion charges",
     "Na^+; Cl^-; Ca^{2+}; Al^{3+}; O^{2-}"],

    ["Сложные ионы|Күрделі иондар|Polyatomic ions",
     "NH_4^+; SO_4^{2-}; CO_3^{2-}; PO_4^{3-}"],

    ["Изотопная запись|Изотоптық жазылу|Isotope notation",
     "^{12}_6C; ^{13}_6C; ^{16}_8O; ^2_1H"],

    ["Химические обозначения и стрелки|Химиялық таңбалар|Chemical notation",
     "A+B\\rightarrow C; X\\leftrightarrow Y; \\Delta T"],

    ["Итоговый научный урок|Қорытынды ғылыми сабақ|Science final",
     "H_2O; SO_4^{2-}; C_6H_{12}O_6; a_n; v=s/t; 3/4"]
];

chemistryLessons.forEach(([title,text])=>{
    add(chemistry,title,"science",text,"en");
});

/* 5. РЕДАКТОР ФОРМУЛ */

const commands = {
    alpha:"α",beta:"β",gamma:"γ",delta:"δ",
    Delta:"Δ",pi:"π",lambda:"λ",mu:"μ",
    theta:"θ",omega:"ω",times:"×",
    pm:"±",neq:"≠",geq:"≥",leq:"≤",
    rightarrow:"→",leftrightarrow:"↔",
    infty:"∞"
};

function element(tag,text,className="") {
    const el = document.createElement(tag);

    if (text!==undefined) el.textContent = text;
    if (className) el.className = className;

    return el;
}

function formula(text,container) {

    container.replaceChildren();

    const source = String(text).slice(0,2000);

    const pattern =
        /sqrt\(([^()]*)\)|([A-Za-z0-9]+)\/([A-Za-z0-9]+)|([_^])(?:\{([^{}]*)\}|([A-Za-z0-9+\-]))|\\([A-Za-z]+)|[\s\S]/g;

    let match;

    while ((match=pattern.exec(source))!==null) {

        if (match[1]!==undefined) {

            const radical = element("span",undefined,"radical");

            radical.append(
                element("span","√"),
                element("span",match[1],"radicand")
            );

            container.append(radical);

        } else if (match[2]!==undefined) {

            const fraction = element("span",undefined,"fraction");

            fraction.append(
                element("span",match[2]),
                element("span",match[3])
            );

            container.append(fraction);

        } else if (match[4]!==undefined) {

            const tag = match[4]==="_"?"sub":"sup";

            container.append(
                element(tag,match[5] ?? match[6])
            );

        } else if (match[7]!==undefined) {

            container.append(
                document.createTextNode(
                    commands[match[7]] || match[0]
                )
            );

        } else {

            container.append(
                document.createTextNode(match[0])
            );
        }
    }
}

/* 6. РАСКЛАДКИ */

const rowCodes = [
    ["Backquote",...Array.from("1234567890",x=>"Digit"+x),"Minus","Equal"],
    [...Array.from("QWERTYUIOP",x=>"Key"+x),"BracketLeft","BracketRight","Backslash"],
    [...Array.from("ASDFGHJKL",x=>"Key"+x),"Semicolon","Quote"],
    [...Array.from("ZXCVBNM",x=>"Key"+x),"Comma","Period","Slash"]
];

const layouts = {
    en:[
        ["`1234567890-=","~!@#$%^&*()_+"],
        ["qwertyuiop[]\\","QWERTYUIOP{}|"],
        ["asdfghjkl;'","ASDFGHJKL:\""],
        ["zxcvbnm,./","ZXCVBNM<>?"]
    ],
    ru:[
        ["ё1234567890-=",'Ё!"№;%:?*()_+'],
        ["йцукенгшщзхъ\\","ЙЦУКЕНГШЩЗХЪ/"],
        ["фывапролджэ","ФЫВАПРОЛДЖЭ"],
        ["ячсмитьбю.","ЯЧСМИТЬБЮ,"]
    ],
    kk:[
        ['("әіңғ,.үұқөһ',")!ӘІҢҒ;:ҮҰҚӨҺ"],
        ["йцукенгшщзхъ\\","ЙЦУКЕНГШЩЗХЪ/"],
        ["фывапролджэ","ФЫВАПРОЛДЖЭ"],
        ["ячсмитьбю№","ЯЧСМИТЬБЮ?"]
    ]
};

const fingerMap = [
    [0,0,1,2,3,3,4,4,5,6,7,7,7],
    [0,1,2,3,3,4,4,5,6,7,7,7,7],
    [0,1,2,3,3,4,4,5,6,7,7],
    [0,1,2,3,3,4,4,5,6,7]
];

const fingerNames = [
    "Левый мизинец|Сол шынашақ|Left little finger",
    "Левый безымянный|Сол аты жоқ саусақ|Left ring finger",
    "Левый средний|Сол ортаңғы саусақ|Left middle finger",
    "Левый указательный|Сол сұқ саусақ|Left index finger",
    "Правый указательный|Оң сұқ саусақ|Right index finger",
    "Правый средний|Оң ортаңғы саусақ|Right middle finger",
    "Правый безымянный|Оң аты жоқ саусақ|Right ring finger",
    "Правый мизинец|Оң шынашақ|Right little finger",
    "Большой палец|Бас бармақ|Thumb"
];

function getRows(lang) {
    return layouts[lang].map(([normal,shift],r)=>
        Array.from(normal).map((c,i)=>({
            code:rowCodes[r][i],
            normal:c,
            shift:shift[i],
            finger:fingerMap[r][i]
        }))
    );
}

function findChar(c,lang) {

    if (c===" ") {
        return {code:"Space",normal:" ",finger:8,upper:false};
    }

    for (const k of getRows(lang).flat()) {
        if (k.normal===c) return {...k,upper:false};
        if (k.shift===c) return {...k,upper:true};
    }

    return null;
}

/* 7. СОСТОЯНИЕ ТРЕНАЖЁРА */

let page = pages[0];
let mode = "learn";
let view = "training";

let override = null;

let target = [];
let spans = [];
let position = 0;
let correct = 0;
let attempts = 0;
let mistakes = 0;

let started = false;
let finished = false;
let virtualUsed = false;

let startTime = 0;
let endTime = 0;
let interval = null;

let visibleLayout = data.language;

const buttons = new Map();
const timers = new WeakMap();
const modifiers = new Set();

const exams = [
    {name:"free",wpm:0,accuracy:0,time:0},
    {name:"beginner",wpm:20,accuracy:90,time:60},
    {name:"intermediate",wpm:35,accuracy:94,time:60},
    {name:"advanced",wpm:55,accuracy:96,time:120},
    {name:"expert",wpm:80,accuracy:98,time:180}
];

function isKeyMode() {
    return !override && page.kind==="keys";
}

function isScience() {
    return override ? override.kind==="science" : page.kind==="science";
}

function timed() {
    return mode==="speed";
}

function selectedExam() {
    return exams[Number($("exam").value)] || exams[0];
}

function limit() {
    return selectedExam().time || Number($("duration").value);
}

function focusTyping() {
    if (view==="training" && $("modal").hidden) {
        $("typing").focus({preventScroll:true});
    }
}

function pretty(code) {

    const labels = {
        Escape:"Esc",ControlLeft:"Ctrl L",
        ControlRight:"Ctrl R",ShiftLeft:"Shift L",
        ShiftRight:"Shift R",CapsLock:"Caps",
        MetaLeft:"Win",MetaRight:"Win",
        AltLeft:"Alt L",AltRight:"Alt R",
        ArrowUp:"↑",ArrowDown:"↓",ArrowLeft:"←",ArrowRight:"→",
        PageUp:"PgUp",PageDown:"PgDn",
        NumpadEnter:"Num Enter",
        NumpadAdd:"Num +",NumpadSubtract:"Num -",
        NumpadMultiply:"Num *",NumpadDivide:"Num /",
        NumpadDecimal:"Num .",
        PrintScreen:"PrtSc",ScrollLock:"ScrLk"
    };

    return code.split("+").map(x=>
        labels[x] || x.replace(/^Key/,"")
            .replace(/^Digit/,"")
            .replace(/^Numpad(\d)$/,"Num $1")
    ).join(" + ");
}

/* 8. СОЗДАНИЕ 100 КНОПОК В МЕНЮ */

const opened = new Set(["ru"]);

function renderMenu() {

    const query = $("search").value.trim().toLowerCase();

    $("menu").replaceChildren();

    let count = 0;

    for (const g of groups) {

        const items = g.pages.filter(p=>
            `${p.id} ${p.title} ${g.title}`.toLowerCase().includes(query)
        );

        if (!items.length) continue;

        count += items.length;

        const details = element("details",undefined,"menu-group");

        details.open = Boolean(query) || opened.has(g.id);

        details.append(
            element("summary",`${g.icon} ${tr(g.title)} (${items.length})`)
        );

        details.ontoggle = ()=>{
            if (query || !details.isConnected) return;

            if (details.open) opened.add(g.id);
            else opened.delete(g.id);
        };

        for (const p of items) {

            const button = element("button",undefined,"page-button");

            if (p.id===page.id) button.classList.add("active");

            button.append(
                element("small",String(p.id).padStart(2,"0")),
                element("span",tr(p.title))
            );

            if (data.completed.includes(p.id)) {
                button.append(element("b","✓"));
            }

            button.onclick = ()=>openPage(p.id);

            details.append(button);
        }

        $("menu").append(details);
    }

    $("pageCount").textContent = count+" / "+pages.length;
}

/* 9. RGB-КЛАВИАТУРА */

let keyIndex = 0;

function makeKey(code,label,weight=1,info=null) {

    const key = element("button",undefined,"key");

    key.type = "button";
    key.tabIndex = -1;
    key.title = pretty(code);

    key.style.setProperty("--weight",weight);
    key.style.setProperty("--hue",keyIndex*23%360);
    key.style.setProperty("--delay",`${-keyIndex++*.15}s`);

    if (!info) key.classList.add("special");
    if (data.rgb==="rainbow") key.classList.add("rainbow");

    if (info && info.shift!==info.normal.toUpperCase()) {
        key.append(element("small",info.shift));
    }

    key.append(element("span",label));

    buttons.set(code,key);

    key.onpointerdown = e=>e.preventDefault();

    key.onclick = ()=>virtualPress(code,info);

    return key;
}

function special(code,label=pretty(code),weight=1) {
    return makeKey(code,label,weight);
}

function row(container,items) {

    const div = element("div",undefined,"key-row");

    for (const item of items) {
        div.append(item || element("div",undefined,"key-gap"));
    }

    container.append(div);
}

function renderKeyboard(lang) {

    visibleLayout = lang;
    buttons.clear();
    modifiers.clear();
    keyIndex = 0;

    const board = $("keyboard");
    const nav = $("navigation");
    const num = $("numpad");

    [board,nav,num].forEach(x=>x.replaceChildren());

    const rows = getRows(lang);

    const letters = i=>rows[i].map(info=>
        makeKey(info.code,info.normal.toUpperCase(),1,info)
    );

    row(board,[
        special("Escape"),
        ...Array.from({length:12},(_,i)=>special("F"+(i+1)))
    ]);

    row(board,[...letters(0),special("Backspace","Backspace",2)]);
    row(board,[special("Tab","Tab",1.5),...letters(1)]);
    row(board,[special("CapsLock","Caps",1.8),...letters(2),special("Enter","Enter",2)]);

    row(board,[
        special("ShiftLeft","Shift",2.2),
        ...letters(3),
        special("ShiftRight","Shift",2.3)
    ]);

    row(board,[
        special("ControlLeft","Ctrl",1.5),
        special("MetaLeft","Win"),
        special("AltLeft","Alt"),
        special("Space","SPACE",6.5),
        special("AltRight","Alt"),
        special("MetaRight","Win"),
        special("ContextMenu","Menu"),
        special("ControlRight","Ctrl",1.5)
    ]);

    [
        ["PrintScreen","ScrollLock","Pause"],
        ["Insert","Home","PageUp"],
        ["Delete","End","PageDown"],
        [null,null,null],
        [null,"ArrowUp",null],
        ["ArrowLeft","ArrowDown","ArrowRight"]
    ].forEach(codes=>row(nav,codes.map(c=>c?special(c):null)));

    row(num,[null,null,null,null]);

    row(num,[
        special("NumLock","Num"),
        special("NumpadDivide","/"),
        special("NumpadMultiply","*"),
        special("NumpadSubtract","-")
    ]);

    row(num,[
        special("Numpad7","7"),special("Numpad8","8"),
        special("Numpad9","9"),special("NumpadAdd","+")
    ]);

    row(num,[
        special("Numpad4","4"),special("Numpad5","5"),
        special("Numpad6","6"),null
    ]);

    row(num,[
        special("Numpad1","1"),special("Numpad2","2"),
        special("Numpad3","3"),special("NumpadEnter","Enter")
    ]);

    row(num,[
        special("Numpad0","0",2),
        special("NumpadDecimal",lang==="en"?".":","),
        null
    ]);

    $("layoutName").textContent =
        names[lang]+" · RGB "+data.rgb.toUpperCase();

    renderHands();
}

function flash(code) {

    const key = buttons.get(code);

    if (!key) return;

    clearTimeout(timers.get(key));

    key.classList.remove("hit","plain-hit");

    void key.offsetWidth;

    key.style.setProperty("--hit",Math.random()*360);

    key.classList.add(data.rgb==="off"?"plain-hit":"hit");

    timers.set(key,setTimeout(()=>{
        key.classList.remove("hit","plain-hit");
    },600));
}

/* 10. ЗВУК */

let audioContext;

function sound(ok) {

    if (!data.sound) return;

    try {

        const Audio = window.AudioContext || window.webkitAudioContext;
        if (!Audio) return;

        audioContext ||= new Audio();

        if (audioContext.state==="suspended") {
            audioContext.resume().catch(()=>{});
        }

        const osc = audioContext.createOscillator();
        const gain = audioContext.createGain();

        osc.type = "triangle";
        osc.frequency.value = ok?700:170;

        gain.gain.setValueAtTime(.025,audioContext.currentTime);

        gain.gain.exponentialRampToValueAtTime(
            .001,audioContext.currentTime+.06
        );

        osc.connect(gain);
        gain.connect(audioContext.destination);

        osc.start();
        osc.stop(audioContext.currentTime+.07);

    } catch {}
}

/* 11. ПОЛОЖЕНИЕ РУК */

function renderHands() {

    const en = visibleLayout==="en";

    const colors = [
        "#f472b6","#c084fc","#38bdf8","#4ade80",
        "#4ade80","#38bdf8","#c084fc","#f472b6"
    ];

    const hands = [
        ["leftHand",en?"ASDF":"ФЫВА",0],
        ["rightHand",en?"JKL;":"ОЛДЖ",4]
    ];

    for (const [id,letters,offset] of hands) {

        $(id).replaceChildren();

        Array.from(letters).forEach((c,i)=>{

            const span = element("span",c);

            span.style.setProperty("--finger",colors[offset+i]);

            $(id).append(span);
        });
    }
}

/* 12. ГЕНЕРАЦИЯ УПРАЖНЕНИЙ */

function shuffle(items) {

    const result = [...items];

    for (let i=result.length-1;i>0;i--) {

        const j = Math.floor(Math.random()*(i+1));

        [result[i],result[j]] = [result[j],result[i]];
    }

    return result;
}

function sourceText() {
    return override ? override.text : page.content;
}

function createChunk() {

    if (isKeyMode()) {

        return mode==="learn"
            ? [...page.content]
            : shuffle(page.content);
    }

    const text = String(sourceText());

    if (mode==="learn") return Array.from(text);

    if (isScience()) {

        return Array.from(
            shuffle(text.split(/;\s*/)).join("; ")
        );
    }

    return Array.from(
        shuffle(text.split(/\s+/)).join(" ")
    );
}

function createTarget() {

    const repetitions =
        mode==="learn"?1:
        mode==="practice"?4:12;

    const result = [];

    for (let i=0;i<repetitions;i++) {

        if (i && !isKeyMode()) {
            result.push(..." ");
        }

        result.push(...createChunk());
    }

    return result;
}

function appendTarget(items) {

    const fragment = document.createDocumentFragment();

    items.forEach(item=>{

        const span = element(
            "span",
            isKeyMode()?pretty(item):item,
            isKeyMode()?"char token":"char"
        );

        spans.push(span);
        fragment.append(span);
    });

    $("typing").append(fragment);
}

function renderText() {

    $("typing").replaceChildren();
    spans = [];

    appendTarget(target);

    $("typing").scrollTop = 0;
}

/* 13. ПОДСКАЗКА СЛЕДУЮЩЕЙ КЛАВИШИ */

function highlight() {

    buttons.forEach(k=>k.classList.remove("target"));

    $("typing").querySelector(".current")?.classList.remove("current");

    const hints = data.hints && mode!=="speed";

    $("hintBox").hidden = !hints;
    $("handsBox").hidden = !hints || isKeyMode();

    if (finished || position>=target.length) return;

    const expected = target[position];
    const span = spans[position];

    span.classList.add("current");

    const box = $("typing");

    const distance = (
        span.getBoundingClientRect().bottom-
        box.getBoundingClientRect().bottom
    )/(data.zoom/100);

    if (distance>-20) box.scrollTop += distance+35;

    if (isKeyMode()) {

        const parts = expected.split("+");
        const code = parts.pop();

        $("nextKey").textContent = pretty(code);
        $("finger").textContent = "—";
        $("combination").textContent = pretty(expected);
        $("layoutNote").textContent = t("keyRule");

        if (hints) {

            buttons.get(code)?.classList.add("target");

            const map = {
                Ctrl:"ControlLeft",
                Shift:"ShiftLeft",
                Alt:"AltLeft"
            };

            parts.forEach(x=>
                buttons.get(map[x])?.classList.add("target")
            );
        }

        return;
    }

    let lang = isScience()?"en":page.lang || data.language;

    if (!override && page.id<=60) {

        const localIndex = (page.id-1)%20;

        if (localIndex>=12 && localIndex<=17) lang = "en";
    }

    if (expected===" ") lang = visibleLayout;

    let info = findChar(expected,lang);

    if (!info) {

        for (const candidate of ["en","ru","kk"]) {

            const found = findChar(expected,candidate);

            if (found) {
                lang = candidate;
                info = found;
                break;
            }
        }
    }

    if (visibleLayout!==lang) renderKeyboard(lang);

    $("layoutNote").textContent =
        names[lang]+" · "+t("layout");

    $("nextKey").textContent = expected===" "?t("space"):expected;

    $("finger").textContent =
        info && fingerNames[info.finger]
            ? tr(fingerNames[info.finger])
            : t("unknown");

    $("combination").textContent = info
        ? (info.upper?"Shift + ":"")+
          (expected===" "?"Space":info.normal.toUpperCase())
        : expected;

    if (info && hints) {

        buttons.get(info.code)?.classList.add("target");

        if (info.upper) {
            buttons.get(
                info.finger<=3?"ShiftRight":"ShiftLeft"
            )?.classList.add("target");
        }
    }
}
/* 14. ТАЙМЕР И СТАТИСТИКА */

function elapsed() {

    return started
        ? Math.max(
            0,
            ((finished?endTime:performance.now())-startTime)/1000
          )
        : 0;
}

function stats() {

    const seconds = elapsed();
    const minutes = Math.max(1,seconds)/60;

    return {
        seconds,
        wpm:Math.round(correct/5/minutes),
        cpm:Math.round(correct/minutes),
        accuracy:attempts?correct/attempts*100:100
    };
}

function formatTime(seconds) {

    seconds = Math.max(0,Math.floor(seconds));

    return String(Math.floor(seconds/60)).padStart(2,"0")+
        ":"+String(seconds%60).padStart(2,"0");
}

function updateStats() {

    const s = stats();

    $("unit").textContent = isKeyMode()?"KPM":"WPM";

    $("wpm").textContent = isKeyMode()?s.cpm:s.wpm;

    $("cpm").textContent = s.cpm;

    $("accuracy").textContent = s.accuracy.toFixed(1)+"%";

    $("errors").textContent = mistakes;

    $("timer").textContent = formatTime(
        timed()?Math.ceil(limit()-s.seconds):s.seconds
    );

    $("counter").textContent = timed()
        ? String(correct)
        : `${position} / ${target.length}`;

    const progress = timed()
        ? s.seconds/limit()*100
        : position/Math.max(1,target.length)*100;

    $("bar").style.width = Math.min(100,progress)+"%";
}

function startTimer() {

    if (started) return;

    started = true;
    startTime = performance.now();

    $("instruction").textContent = t("running");

    interval = setInterval(()=>{

        if (timed() && elapsed()>=limit()) {
            finishTraining();
        } else {
            updateStats();
        }

    },100);
}

function stopTimer() {
    clearInterval(interval);
    interval = null;
}

/* 15. НЕПРАВИЛЬНЫЕ БУКВЫ */

function registerAttempt(ok) {

    if (finished || view!=="training") return;

    if (started && timed() && elapsed()>=limit()) {
        finishTraining();
        return;
    }

    const current = spans[position];

    if (!current) return;

    startTimer();
    attempts++;

    if (!ok) {

        mistakes++;

        /*
          Неверная буква не записывается.
          Позиция не меняется.
          Нужная буква становится красной.
          Таймер продолжает работать.
        */

        current.classList.add("wrong");

        if (!isKeyMode()) {

            const expected = target[position];

            data.weak[expected] =
                (Number(data.weak[expected])||0)+1;

            save();
        }

        sound(false);

        updateStats();

        return;
    }

    // Правильное нажатие

    correct++;

    current.classList.remove("wrong","current");

    current.classList.add("correct");

    position++;

    sound(true);

    if (isScience()) {

        formula(
            target.slice(Math.max(0,position-180),position).join(""),
            $("formulaLive")
        );
    }

    // Если текст заканчивается во время теста,
    // автоматически добавляем новые упражнения.

    if (timed() && position>=target.length-1) {

        const more = isKeyMode()
            ? createChunk()
            : [" ",...createChunk()];

        target.push(...more);

        appendTarget(more);
    }

    if (!timed() && position>=target.length) {

        finishTraining();

        return;
    }

    updateStats();
    highlight();
}

/* 16. ПРОВЕРКА КОМБИНАЦИЙ */

function matches(expected,event) {

    if (!expected) return false;

    const parts = expected.split("+");
    const code = parts.pop();

    if (code!==event.code) return false;

    if (!parts.length) return true;

    return (
        Boolean(event.ctrlKey)===parts.includes("Ctrl") &&
        Boolean(event.shiftKey)===parts.includes("Shift") &&
        Boolean(event.altKey)===parts.includes("Alt") &&
        !event.metaKey
    );
}

/* 17. ФИЗИЧЕСКАЯ КЛАВИАТУРА */

document.addEventListener("keydown",event=>{

    if (
        view!=="training" ||
        !$("modal").hidden ||
        event.isComposing
    ) return;

    const tag = event.target.tagName;

    if (["INPUT","SELECT","TEXTAREA","BUTTON"].includes(tag)) {
        return;
    }

    flash(event.code);

    if (finished || !target.length) return;

    const expected = target[position];

    if (isKeyMode()) {

        event.preventDefault();

        if (event.repeat) return;

        // Модификаторы перед комбинацией
        // не считаются ошибкой.

        if (
            /^(Shift|Control|Alt|Meta)/.test(event.code) &&
            expected.includes("+")
        ) return;

        registerAttempt(matches(expected,event));

        return;
    }

    // Не перехватываем системную смену языка.

    if (
        (event.ctrlKey || event.altKey || event.metaKey) &&
        !event.getModifierState("AltGraph")
    ) return;

    if (event.key==="Backspace") {

        event.preventDefault();

        return;
    }

    if (Array.from(event.key).length!==1) return;

    event.preventDefault();

    if (event.repeat) return;

    registerAttempt(event.key===expected);
});

/* 18. ВИРТУАЛЬНАЯ КЛАВИАТУРА */

function virtualPress(code,info) {

    if (finished || view!=="training" || !target.length) return;

    // В обычных тестах скорости используется
    // только физическая клавиатура.

    if (timed() && !isKeyMode()) return;

    flash(code);

    virtualUsed = true;

    const expected = target[position];

    const modifier =
        code.startsWith("Shift")?"Shift":
        code.startsWith("Control")?"Ctrl":
        code.startsWith("Alt")?"Alt":null;

    if (
        modifier &&
        (!isKeyMode() || expected.includes("+"))
    ) {

        if (modifiers.has(modifier)) {
            modifiers.delete(modifier);
        } else {
            modifiers.add(modifier);
        }

        buttons.get(code)?.classList.toggle(
            "held",modifiers.has(modifier)
        );

        return;
    }

    if (isKeyMode()) {

        registerAttempt(matches(expected,{
            code,
            ctrlKey:modifiers.has("Ctrl"),
            shiftKey:modifiers.has("Shift"),
            altKey:modifiers.has("Alt")
        }));

    } else {

        let char = null;

        if (info) {

            char = modifiers.has("Shift")
                ? info.shift
                : info.normal;

        } else if (code==="Space") {

            char = " ";

        } else if (/^Numpad\d$/.test(code)) {

            char = code.slice(-1);

        } else {

            char = {
                NumpadAdd:"+",
                NumpadSubtract:"-",
                NumpadMultiply:"*",
                NumpadDivide:"/",
                NumpadDecimal:visibleLayout==="en"?".":","
            }[code] || null;
        }

        if (char!==null) {

            registerAttempt(char===expected);
        }
    }

    modifiers.clear();

    buttons.forEach(k=>k.classList.remove("held"));

    focusTyping();
}

/* 19. ЗАГОЛОВКИ И РЕЖИМЫ */

function currentTitle() {

    return override
        ? t(override.title)
        : `${page.id}. ${tr(page.title)}`;
}

function updateHeadings() {

    $("title").textContent =
        view==="editor"?t("editor"):
        view==="history"?t("history"):
        currentTitle();

    $("description").textContent =
        view==="training"
            ? t(isKeyMode()?"keyRule":
                mode==="learn"?"learnRule":
                mode==="practice"?"practiceRule":"speedRule")
            : "";

    $("lessonName").textContent =
        currentTitle()+" · "+t(mode);

    let rule = "";

    if (mode==="learn" && !override && page.tip) {
        rule = tr(page.tip)+". ";
    }

    if (isScience()) {
        rule += t("syntax")+" ";
    }

    if (timed() && selectedExam().time) {

        const exam = selectedExam();

        rule += `${t("requirements")}: `+
            `${exam.wpm} WPM · ${exam.accuracy}% · ${exam.time} s`;

    } else {

        rule += t(
            mode==="learn"?"learnRule":
            mode==="practice"?"practiceRule":"speedRule"
        );
    }

    $("rule").textContent = rule;

    $("previous").disabled = page.id===1;
    $("next").disabled = page.id===pages.length;

    $("instruction").textContent =
        finished?t("done"):started?t("running"):t("ready");
}

function updateControls() {

    $("duration").hidden =
        !timed() || Boolean(selectedExam().time);

    $("exam").hidden =
        !timed() || isKeyMode();

    document.querySelectorAll("[data-mode]").forEach(button=>{

        button.classList.toggle(
            "active",button.dataset.mode===mode
        );
    });
}

/* 20. ЗАПУСК НОВОЙ ТРЕНИРОВКИ */

function resetTraining() {

    stopTimer();

    started = false;
    finished = false;
    virtualUsed = false;

    position = 0;
    correct = 0;
    attempts = 0;
    mistakes = 0;

    startTime = 0;
    endTime = 0;

    $("modal").hidden = true;

    if (isKeyMode()) $("exam").value = "0";

    target = createTarget();

    renderText();

    renderKeyboard(
        isScience()?"en":
        page.lang || data.language
    );

    $("formulaBox").hidden = !isScience();

    if (isScience()) {

        formula(sourceText(),$("formulaTarget"));

        $("formulaLive").replaceChildren();
    }

    updateControls();

    updateHeadings();

    updateStats();

    updateProgress();

    highlight();

    focusTyping();
}

/* 21. ПРОГРЕСС */

function updateProgress() {

    const total = new Set(data.completed).size;

    $("completed").textContent =
        `${total} / ${pages.length}`;

    $("totalBar").style.width =
        total/pages.length*100+"%";

    $("record").textContent =
        (data.best[data.language]||0)+" WPM";
}

/* 22. ЗАВЕРШЕНИЕ И ЭКЗАМЕНЫ */

function finishTraining() {

    if (finished || !started) return;

    endTime = performance.now();

    if (timed()) {

        endTime = Math.min(
            endTime,startTime+limit()*1000
        );
    }

    finished = true;

    stopTimer();

    const s = stats();

    const exam = selectedExam();

    const examMode =
        timed() && !isKeyMode() && Boolean(exam.time);

    let passed = mode==="learn"
        ? s.accuracy>=90
        : true;

    if (examMode) {

        passed =
            s.wpm>=exam.wpm &&
            s.accuracy>=exam.accuracy &&
            !virtualUsed;

        const examId =
            `${page.id}-${$("exam").value}`;

        if (
            passed &&
            !override &&
            !data.exams.includes(examId)
        ) {

            data.exams.push(examId);
        }
    }

    // Урок засчитывается после режима обучения.

    if (
        mode==="learn" &&
        passed &&
        !override &&
        !data.completed.includes(page.id)
    ) {

        data.completed.push(page.id);
    }

    const resultLanguage =
        isScience()?"en":page.lang || data.language;

    if (timed() && !isKeyMode() && !virtualUsed) {

        data.best[resultLanguage] = Math.max(
            data.best[resultLanguage]||0,
            s.wpm
        );
    }

    const result = {
        date:new Date().toISOString(),
        page:page.id,
        custom:override?override.title:null,
        mode,
        language:resultLanguage,
        wpm:s.wpm,
        cpm:s.cpm,
        accuracy:s.accuracy,
        errors:mistakes,
        keys:isKeyMode(),
        virtual:virtualUsed,
        passed
    };

    data.history.unshift(result);

    data.history = data.history.slice(0,500);

    save();

    updateProgress();
    updateStats();
    renderMenu();

    buttons.forEach(k=>k.classList.remove("target"));

    $("instruction").textContent = t("done");

    $("resultText").textContent =
        t(passed?"passed":"failed")+
        (virtualUsed?" · "+tr("Экранный ввод|Экрандық енгізу|Virtual input"):"");

    $("resultSpeed").textContent =
        isKeyMode()?s.cpm+" KPM":s.wpm+" WPM";

    $("resultAccuracy").textContent =
        s.accuracy.toFixed(1)+"%";

    $("resultErrors").textContent = mistakes;

    $("resultNext").hidden =
        Boolean(override) ||
        !passed ||
        page.id===pages.length;

    $("modal").hidden = false;
}

/* 23. ОТКРЫТИЕ СТРАНИЦ */

function showView(name) {

    stopTimer();

    view = name;

    $("training").hidden = name!=="training";
    $("editor").hidden = name!=="editor";
    $("history").hidden = name!=="history";

    $("modal").hidden = true;

    updateHeadings();

    if (name==="history") renderHistory();

    if (name==="editor") {
        formula($("formulaInput").value,$("formulaPreview"));
    }
}

function openPage(id) {

    const found = pages[id-1];

    if (!found) return;

    page = found;

    override = null;

    if (page.kind==="text" && page.lang) {

        data.language = page.lang;

        $("language").value = page.lang;
    }

    mode = "learn";

    $("exam").value = "0";

    opened.add(page.group);

    showView("training");

    renderMenu();

    resetTraining();

    save();

    window.scrollTo({top:0,behavior:"instant"});
}

/* 24. СТАТИСТИКА И СЛАБЫЕ КЛАВИШИ */

function weakEntries() {

    return Object.entries(data.weak)
        .filter(([key,count])=>
            Array.from(key).length===1 && Number(count)>0
        )
        .sort((a,b)=>b[1]-a[1]);
}

function renderHistory() {

    const results = data.history;

    const speedResults = results.filter(r=>
        r.mode==="speed" && !r.keys && !r.virtual
    );

    const average = speedResults.length
        ? Math.round(
            speedResults.reduce((sum,r)=>sum+Number(r.wpm||0),0)/
            speedResults.length
          )
        : 0;

    $("sessions").textContent = results.length;

    $("average").textContent = average+" WPM";

    $("examsPassed").textContent =
        new Set(data.exams).size;

    $("weakKeys").replaceChildren();

    const weak = weakEntries();

    if (!weak.length) {

        $("weakKeys").append(element("p",t("empty")));

    } else {

        weak.slice(0,20).forEach(([key,count])=>{

            $("weakKeys").append(
                element(
                    "span",
                    `${key===" "?t("space"):key} · ${count}`
                )
            );
        });
    }

    $("trainWeak").disabled = !weak.length;

    const body = $("historyBody");

    body.replaceChildren();

    results.slice(0,100).forEach(result=>{

        const row = element("tr");

        const values = [
            new Date(result.date).toLocaleDateString(
                data.ui==="kk"?"kk-KZ":
                data.ui==="en"?"en-GB":"ru-RU",
                {timeZone:"Asia/Almaty"}
            ),

            result.custom
                ? t(result.custom)
                : tr(pages[result.page-1]?.title||"—"),

            t(result.mode),

            result.keys
                ? result.cpm+" KPM"
                : result.wpm+" WPM",

            Number(result.accuracy).toFixed(1)+"%",

            result.errors,

            t(result.passed?"passed":"failed")
        ];

        values.forEach((value,i)=>{

            const td = element("td",value);

            if (i===6) {

                td.style.color =
                    result.passed?"#4ade80":"#fb7185";
            }

            row.append(td);
        });

        body.append(row);
    });
}

/* 25. УПРАВЛЕНИЕ ЭКРАНОМ */

function applyScreen() {

    data.zoom = Math.max(
        50,Math.min(200,Number(data.zoom)||100)
    );

    $("workspace").style.zoom = data.zoom/100;

    $("zoom").value = data.zoom;

    $("zoomReset").textContent = data.zoom+"%";

    $("app").classList.toggle(
        "menu-hidden",Boolean(data.menuHidden)
    );

    $("toggleMenu").textContent =
        "☰ "+t(data.menuHidden?"showMenu":"hideMenu");

    $("fullscreen").textContent =
        "⛶ "+t(document.fullscreenElement?"exitFull":"full");

    save();
}

function changeZoom(value) {

    data.zoom = value;

    applyScreen();

    focusTyping();
}

$("zoomOut").onclick = ()=>changeZoom(data.zoom-10);
$("zoomIn").onclick = ()=>changeZoom(data.zoom+10);
$("zoomReset").onclick = ()=>changeZoom(100);

$("zoom").oninput = e=>{

    data.zoom = Number(e.target.value);

    applyScreen();
};

$("zoom").onchange = focusTyping;

$("toggleMenu").onclick = ()=>{

    data.menuHidden = !data.menuHidden;

    applyScreen();

    focusTyping();
};

$("fullscreen").onclick = async ()=>{

    try {

        if (document.fullscreenElement) {

            await document.exitFullscreen();

        } else {

            await document.documentElement.requestFullscreen();
        }

    } catch {

        alert(tr(
            "Полноэкранный режим недоступен. Попробуй F11.|Толық экран үшін F11 пернесін қолдан.|Fullscreen unavailable. Try F11."
        ));
    }

    applyScreen();

    focusTyping();
};

document.addEventListener("fullscreenchange",applyScreen);

/* 26. ПЕРЕВОД ИНТЕРФЕЙСА */

function translate() {

    const oldExam = $("exam").value || "0";

    document.documentElement.lang = data.ui;

    document.querySelectorAll("[data-t]").forEach(el=>{

        el.textContent = t(el.dataset.t);
    });

    $("search").placeholder = t("search");

    $("exam").replaceChildren();

    exams.forEach((exam,i)=>{

        const option = element(
            "option",
            t(exam.name)+(i?` · ${exam.wpm} WPM`:"")
        );

        option.value = i;

        $("exam").append(option);
    });

    $("exam").value = oldExam;

    renderMenu();

    updateHeadings();

    updateProgress();

    updateControls();

    applyScreen();

    if (view==="training") highlight();

    if (view==="history") renderHistory();
}

/* 27. ПЕРЕКЛЮЧАТЕЛИ */

$("ui").value = data.ui;
$("language").value = data.language;
$("rgb").value = data.rgb;
$("sound").checked = data.sound;
$("hints").checked = data.hints;

$("ui").onchange = e=>{

    data.ui = e.target.value;

    save();
    translate();
    focusTyping();
};

$("language").onchange = e=>{

    data.language = e.target.value;

    save();

    const course = groups.find(
        g=>g.id===data.language
    );

    const index = page.kind==="text"
        ? (page.id-1)%20
        : 0;

    openPage(course.pages[index].id);
};

$("rgb").onchange = e=>{

    data.rgb = e.target.value;

    save();

    renderKeyboard(visibleLayout);

    highlight();

    focusTyping();
};

$("sound").onchange = e=>{

    data.sound = e.target.checked;

    save();

    focusTyping();
};

$("hints").onchange = e=>{

    data.hints = e.target.checked;

    save();

    highlight();

    focusTyping();
};

document.querySelectorAll("[data-mode]").forEach(button=>{

    button.onclick = ()=>{

        mode = button.dataset.mode;

        $("exam").value = "0";

        resetTraining();
    };
});

$("duration").onchange = resetTraining;

$("exam").onchange = resetTraining;

/* 28. ПОИСК И МЕНЮ */

$("search").oninput = renderMenu;

$("expand").onclick = ()=>{

    groups.forEach(g=>opened.add(g.id));

    renderMenu();
};

$("collapse").onclick = ()=>{

    $("search").value = "";

    opened.clear();

    renderMenu();
};

$("previous").onclick = ()=>openPage(page.id-1);

$("next").onclick = ()=>openPage(page.id+1);

$("resultNext").onclick = ()=>openPage(page.id+1);

$("restart").onclick = resetTraining;

$("repeat").onclick = resetTraining;

$("close").onclick = ()=>{

    $("modal").hidden = true;

    focusTyping();
};

/* 29. РЕДАКТОР ФОРМУЛ */

$("editorButton").onclick = ()=>showView("editor");

$("formulaInput").oninput = ()=>{

    formula(
        $("formulaInput").value,
        $("formulaPreview")
    );
};

document.querySelectorAll("[data-insert]").forEach(button=>{

    button.onclick = ()=>{

        const input = $("formulaInput");

        input.setRangeText(
            button.dataset.insert,
            input.selectionStart,
            input.selectionEnd,
            "end"
        );

        input.focus();

        formula(input.value,$("formulaPreview"));
    };
});

$("selectFormula").onclick = ()=>{

    const selection = window.getSelection();

    if (!selection) return;

    const range = document.createRange();

    range.selectNodeContents($("formulaPreview"));

    selection.removeAllRanges();

    selection.addRange(range);
};

$("trainFormula").onclick = ()=>{

    let text = $("formulaInput").value
        .trim()
        .replace(/\s+/g," ");

    if (!text) return;

    // Перевод распространённых Unicode-индексов
    // в клавиатурную запись.

    const subs = "₀₁₂₃₄₅₆₇₈₉";
    const supers = "⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻";

    text = text.replace(/[₀-₉]+/g,m=>
        "_{"+Array.from(m,c=>subs.indexOf(c)).join("")+"}"
    );

    text = text.replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁺⁻]+/g,m=>
        "^{"+Array.from(m,c=>
            "0123456789+-"[supers.indexOf(c)]
        ).join("")+"}"
    );

    // Проверяем, можно ли набрать символы
    // на одной из поддерживаемых раскладок.

    const unavailable = Array.from(text).find(c=>
        !langs.some(lang=>findChar(c,lang))
    );

    if (unavailable) {

        alert(
            tr("Замени недоступный символ:|Қолжетімсіз таңбаны ауыстыр:|Replace unsupported character:")+
            " "+unavailable
        );

        return;
    }

    override = {
        title:"custom",
        kind:"science",
        text
    };

    mode = "practice";

    $("exam").value = "0";

    showView("training");

    resetTraining();
};

$("backEditor").onclick = ()=>openPage(page.id);

/* 30. ИСТОРИЯ */

$("historyButton").onclick = ()=>showView("history");

$("backHistory").onclick = ()=>openPage(page.id);

$("trainWeak").onclick = ()=>{

    const weak = weakEntries()
        .map(([key])=>key)
        .filter(key=>langs.some(lang=>findChar(key,lang)))
        .slice(0,12);

    if (!weak.length) return;

    const text = Array.from(
        {length:40},
        ()=>weak[Math.floor(Math.random()*weak.length)]
    ).join(" ");

    override = {
        title:"weak",
        kind:"text",
        text
    };

    mode = "practice";

    $("exam").value = "0";

    showView("training");

    resetTraining();
};

$("clear").onclick = ()=>{

    if (!confirm(t("confirmClear"))) return;

    data.completed = [];
    data.exams = [];
    data.history = [];
    data.weak = {};
    data.best = {ru:0,kk:0,en:0};

    save();

    updateProgress();

    renderHistory();

    renderMenu();
};

/* 31. ЧАСЫ АЛМАТЫ */

function updateClock() {

    $("clock").textContent =
        new Date().toLocaleTimeString("ru-RU",{
            timeZone:"Asia/Almaty",
            hour:"2-digit",
            minute:"2-digit",
            second:"2-digit"
        });
}

updateClock();

setInterval(updateClock,1000);

/* 32. ЗАПУСК САЙТА */

translate();

const first = groups.find(g=>g.id===data.language);

openPage(first.pages[0].id);

console.log(
    "KEYBOARD UP PRO 8.0 READY",
    pages.length+" pages"
);