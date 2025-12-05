// Clean and validated i18n dictionary covering all used keys across pages
// Structure: window.I18N[lang][namespace].[key]
window.I18N = {
  en: {
    meta: {
      title: "GeniusTax — Accounting for entrepreneurs in the Netherlands",
      ogTitle: "GeniusTax — Accounting for entrepreneurs in the Netherlands",
      ogDescription: "Accounting, tax filings and advisory for entrepreneurs in NL. Transparent pricing, stress-free, always on time."
    },
    nav: { home: "Home", services: "Services", about: "About", contact: "Contacts" },
    cta: { consult: "Book a consultation", learnMore: "Learn more" },
    footer: { privacy: "Privacy Policy (GDPR)", copyright: "© 2025 All rights reserved" },

    hero: { title: "GeniusTax — accounting in your language", subtitle: "Focus on your business, leave the numbers to us.", cta: "See packages" },
    about: { lead: "GeniusTax is a trusted partner for entrepreneurs in the Netherlands." },
    aboutUs: { title: "About us", lead: "GeniusTax is a trusted partner for entrepreneurs in the Netherlands. We make accounting simple and clear: we handle bookkeeping, file tax returns, run payroll, and are always available for advice." },

    // Terms of Use page
    terms: {
      title: "Terms of Use",
      bodyHTML: "The contents of this website, including the entire website design, text, graphics, their selection and arrangement, as well as all software compilations, source code, software and all other materials, are protected by copyright owned by \u201cGeniusTax\u201d.<br><br>You may view the site and download any part of it to a personal computer solely for private viewing and for private purposes. Without our permission you may not:<br><br>- store it or any part of it other than for the purposes set out in this paragraph;<br>- print copies except for private viewing or for your own business purposes (other than republishing such material for commercial purposes); or<br>- reproduce, copy or transmit it or any part of it in any other way for any purpose or in any other medium. You are also not permitted to modify the content in any way."
    },

    features: {
      bookkeeping: { title: "Bookkeeping", desc: "Accounting for ZZP, VOF, BV and individuals." },
      registration: { title: "Registration", desc: "Company formation assistance" },
      reporting: { title: "Reporting", desc: "Year-end statements and financial documents" },
      consulting: { title: "Consulting", desc: "Personal advice on accounting and taxes." },
      taxes: { title: "Taxes", desc: "BTW, IB, VPB filings — on time and accurate." },
      payroll: { title: "Payroll", desc: "Payroll processing and reporting" }
    },

    pricing: {
      title: "Service packages",
      tiers: {
        basic: { title: "Basic", desc: "For ZZP and companies without employees" },
        standard: { title: "Standard", desc: "For small and medium companies with employees" },
        premium: { title: "Premium", desc: "For companies with high document flow" },
        oneOff: { title: "One-off services", desc: "Custom services for companies and sole proprietors" }
      }
    },

    benefits: {
      title: "Why choose us",
      transparent: { title: "Transparent pricing", desc: "We work with fixed fees and no hidden costs — you always know what you pay for." },
      fast: { title: "Fast response", desc: "We answer within 24 hours — timely support for your business." },
      full: { title: "Full range of services", desc: "From company registration to bookkeeping and tax filings — all in one place." },
      languages: { title: "Multilingual support", desc: "Consultations in Russian, Romanian and English — talk the language you prefer." }
    },

    testimonials: { title: "What our clients say" },
    home: {
      introHTML: "<i>GeniusTax — accounting for entrepreneurs in the Netherlands. We prepare and file tax returns, keep your books and consult in Russian, Romanian and English. Transparent pricing, no stress and always on time.</i>",
      question: "<i>Confused about taxes and reporting?</i>",
      answer: "<i>We take care of the numbers so you focus on business!</i>",
      learnMore: "Learn more"
    },
    stats: { clientsTrust: "clients trust us" },
    statsMore: { clients: "clients", years: "years of experience", serviceTypes: "service types", languages: "support languages" },

    contact: {
      hero: { title: "Interested in our services?", subtitle: "We reply within 24 hours!" },
      info: { addressTitle: "Address", contactsTitle: "Contacts", emailLabel: "Email", phoneLabel: "Phone", hoursLabel: "Working hours", hoursValue: "Mon–Fri 9:00 - 19:00" },
      whatsapp: { text: "Message us" },
      form: {
        labels: { name: "Name", email: "Email", phone: "Phone", service: "Service" },
        placeholders: { name: "Your name", email: "Your email", phone: "Phone format: +31(123)4567890", message: "Your message..." },
        options: { select: "Select a package...", basic: "Basic", standard: "Standard", premium: "Premium", individual: "Individual services" },
        agreeHTML: "I accept the <a href=\"#\">Terms of Use</a>",
        submit: "Send request",
        success: "Thank you! Your message has been sent.",
        error: "Sending failed. Please try again.",
        sending: "Sending message..."
      }
    },

    servicesHero: { title: "Services for entrepreneurs", subtitle: "Choose a package or request a one-off service", cta: "Get a consultation" },
    servicesPage: {
      packages: {
        title: "Packages",
        includes: "Includes:",
        cta: "Get a consultation",
        popular: "Popular",
        basic: {
          title: "Basic",
          desc: "For companies without employees and a small document flow",
          list: [
            "Quarterly and annual tax returns (BTW, IB)",
            "Invoice preparation",
            "Basic tax consultation",
            "Email support"
          ]
        },
        standard: {
          title: "Standard",
          desc: "For companies with medium workload and stable document flow",
          list: [
            "Full bookkeeping support (ZZP, VOF, BV)",
            "Payroll processing (if employees)",
            "Quarterly and annual returns (BTW, IB, VPB)",
            "Financial statements",
            "Regular consultations",
            "Priority support"
          ]
        },
        premium: {
          title: "Premium",
          desc: "For companies with high document flow or special requirements",
          list: [
            "Everything from Standard",
            "Personalized solutions for your business",
            "In-depth consulting and strategic planning",
            "Representation with the tax authority"
          ]
        },
        onetime: {
          title: "One-off services",
          desc: "One-time services without a monthly subscription for specific tasks",
          includes: "Available services:",
          list: [
            "Preparing and filing quarterly/annual returns (BTW, IB, VPB)",
            "Jaaropgave / Jaarrekening — annual reports and financial documents",
            "KvK forms — ZZP registration, extract request, changes",
            "Consultation on a specific accounting or tax question",
            "Review of existing bookkeeping",
            "Other accounting services on request"
          ]
        }
      },
      why: {
        title: "Why choose us",
        cards: {
          fast: { title: "Fast response", desc: "We answer within 24 hours — timely support for your business." },
          multilingual: { title: "Multilingual support", desc: "Consultations in Russian, Romanian and English — talk the language you prefer." }
        }
      },
      faq: {
        title: "Frequently Asked Questions",
        q1: {
          title: "What services are included in the packages?",
          html: "<p><strong>Basic package</strong> includes quarterly and annual tax returns, invoice preparation and basic consultation.</p><p><strong>Standard package</strong> is full bookkeeping support, payroll (if employees), quarterly and annual returns, financial statements and regular consultations.</p><p><strong>Premium package</strong> includes everything from the Standard package plus personalized solutions, in-depth consulting, strategic planning and representation with the tax authority.</p><p>We also offer <strong>one-off services</strong> without a monthly subscription — one-off returns, consultations, KvK registration and other services on request.</p>"
        },
        q2: {
          title: "How often do I need to file the VAT (BTW) return?",
          html: "<p>The frequency depends on your company's turnover:</p><p><strong>Quarterly (per kwartaal)</strong> — the standard option for most entrepreneurs. The return is filed every 3 months.</p><p><strong>Monthly (per maand)</strong> — for high turnover or if required by the tax authority.</p><p><strong>Annually (per jaar)</strong> — if annual VAT is below €1,883, you may file once a year by March 31.</p><p>We will handle the preparation and filing of tax returns and ensure everything is submitted on time in compliance with tax authority requirements.</p>"
        },
        q3: {
          title: "Do I need bookkeeping as a ZZP?",
          html: "<p><strong>Yes, as a ZZP you are required to keep accounting records — but hiring an accountant is not mandatory, you can manage the records yourself. However, it's important that the records are kept correctly and comply with tax authority requirements.</strong></p><p>As a ZZP you must accurately track all income and expenses. This is required for:</p><ul><li>Filing the annual income tax return (IB)</li><li>Quarterly VAT (BTW) returns (if applicable)</li><li>Complying with tax authority requirements</li><li>Controlling your business finances</li></ul><p>We can take care of bookkeeping so you can focus on your business.</p>"
        },
        q4: {
          title: "Do you help with KvK registration?",
          html: "<p><strong>Yes, we provide full support for company registration.</strong></p><p>Our services include:</p><ul><li>Consultation on choosing a legal form (ZZP, VOF, BV)</li><li>Preparation of all required documents</li><li>Registration with the Chamber of Commerce (KvK)</li><li>Requesting the KvK extract (uitreksel)</li><li>Assistance with registration changes</li></ul><p>We guide you through the process in your language.</p>"
        },
        q5: {
          title: "Do you work with companies that have employees?",
          html: "<p><strong>Yes, we provide a full Payroll service.</strong></p><p>For companies with employees we offer:</p><ul><li>Payroll processing (loonheffing)</li><li>Salary and tax calculations</li><li>Preparation and filing of payroll tax returns</li><li>Requesting a payroll tax number (loonheffingsnummer)</li><li>Preparing annual statements (jaaropgave)</li></ul><p>Payroll is included in Standard and Premium packages if you have employees.</p>"
        },
        q6: {
          title: "Can I get a one-off consultation?",
          html: "<p><strong>Yes, we offer individual services without a monthly subscription.</strong></p><p>You can order one-off services:</p><ul><li>Consultation on a specific accounting or tax question</li><li>One-off tax return (BTW, IB, VPB)</li><li>Preparing Jaaropgave / Jaarrekening</li><li>Review of existing bookkeeping</li><li>Other accounting services on request</li></ul><p>Contact us to discuss your needs and get a tailored quote.</p>"
        },
        q7: {
          title: "What if I received a large fine (e.g., €5,000) for a missed return?",
          html: "<p><strong>If you missed a filing deadline, the Belastingdienst may impose a fine.</strong></p><p>Don’t panic — we will check the periods with missing returns, prepare the outstanding filings and submit an official request to reduce the fine.</p><p>In most cases the amount can be significantly reduced if you act promptly.</p>"
        },
        q8: {
          title: "Can I have multiple companies at the same time (ZZP, VOF, BV)?",
          html: "<p><strong>You may own multiple companies, e.g., VOF or BV, but you cannot have two ZZP at the same time — in the Netherlands this is considered the same entrepreneurial activity.</strong></p><p>However, you can combine different forms (for example, be a ZZP and a BV founder).</p><p>We will help correctly separate activities and taxes so everything is legal and beneficial.</p>"
        },
        q9: {
          title: "Do I have to pay taxes if the company is temporarily inactive?",
          html: "<p><strong>Yes, even with no income you must file zero returns. This confirms that your business is active and helps avoid fines.</strong></p><p>We can prepare the zero filings and notify the tax authority on your behalf.</p>"
        }
      }
    },

    aboutPage: {
      founder: {
        name: "Nadejda Marian",
        imgAlt: "Nadejda Marian — founder of GeniusTax",
        mission: "Our mission is to make tax matters as simple as possible for entrepreneurs, so they have more time for what truly matters — their business.",
        cta: "Our services",
        experience: { title: "Experience", bodyHTML: "Accountant since 2014<br>Working in the Netherlands since 2018" },
        services: { title: "Services", bodyHTML: "Tax returns<br>Invoice preparation<br>Payroll (processing)" },
        specialization: { title: "Specialization", bodyHTML: "Accounting and tax support<br>ZZP, VOF, BV, individuals" }
      },
      sections: {
        aboutTitle: "About us",
        missionTitle: "Mission",
        missionDesc: "Our mission is to make tax topics clear and simple for entrepreneurs so you have more time to grow your business.",
        valuesTitle: "Values",
        valuesDesc: "Seriousness, transparency and genuine respect for every client are the foundation of our approach. It is important for us not only to solve technical tasks, but also to give confidence.",
        approachTitle: "Approach",
        approachDesc: "We explain complex tax things in simple words and bring peace of mind in dealings with the Belastingdienst."
      },
      servicesSection: { title: "Our services", desc: "Solutions for entrepreneurs of any size: from freelancers to companies with employees. We will help you choose a package that fits you best.", cta: "Learn more" },
      testimonials: {
        title: "What clients say about us?",
        list: [
          { name: "Valerii Agafonov", role: "Company Director", quote: "We switched to GeniusTax last year and immediately noticed the difference: transparent pricing, fast responses and proactive advice. Highly recommend!" },
          { name: "Petr Petrov", role: "Entrepreneur", quote: "I am not a native Dutch speaker, and with GeniusTax the Dutch tax system became clear. Their multilingual support is a huge advantage for entrepreneurs like me." },
          { name: "Oleg Smirnov", role: "Freelancer", quote: "As a freelancer, I used to worry about VAT deadlines. With GeniusTax everything is done quickly and professionally, and I can focus on my work." }
        ]
      }
    }
  },

  ru: {
    meta: {
      title: "GeniusTax — бухгалтерия для предпринимателей в Нидерландах",
      ogTitle: "GeniusTax — бухгалтерия для предпринимателей в Нидерландах",
      ogDescription: "Бухгалтерия, налоговые декларации и консультации. Прозрачные цены, без стресса и всегда вовремя."
    },
    nav: { home: "Главная", services: "Услуги", about: "О нас", contact: "Контакты" },
    cta: { consult: "Связаться с нами", learnMore: "Узнать больше" },
    footer: { privacy: "Политика конфиденциальности (GDPR)", copyright: "© 2025 Все права защищены" },

    hero: { title: "GeniusTax — бухгалтерия на вашем языке", subtitle: "Занимайтесь бизнесом, а цифры мы возьмём на себя.", cta: "Посмотреть пакеты" },
    about: { lead: "GeniusTax — надёжный партнёр для предпринимателей в Нидерландах." },
    aboutUs: { title: "О нас", lead: "Мы упрощаем бухгалтерию: ведём учёт, подаём декларации, ведём payroll и всегда на связи для консультаций." },

    // Страница Условия использования
    terms: {
      title: "Условия использования",
      bodyHTML: "Содержимое данного веб-сайта, включая весь дизайн веб-сайта, текст, графику, их подбор и расположение, а также все компиляции программного обеспечения, исходный код, программное обеспечение и все другие материалы, защищены авторским правом, принадлежащим \u00abGeniusTax\u00bb.<br><br>Вы можете просматривать сайт и загружать любые его части на персональный компьютер исключительно для личного просмотра и в частных целях. Без нашего разрешения вам не разрешается:<br><br>- хранить его или любую его часть, кроме как для целей, указанных в этом параграфе;<br>- распечатывать копии, кроме как для личного просмотра в частных целях или для целей вашего бизнеса (кроме повторной публикации таких материалов в коммерческих целях); или<br>- воспроизводить, копировать или передавать его или любую его часть любым другим способом для любых целей или на любом другом носителе. Вы также не имеете права изменять содержание каким-либо образом."
    },

    features: {
      bookkeeping: { title: "Бухгалтерия", desc: "Учёт для ZZP, VOF, BV и физ. лиц." },
      registration: { title: "Регистрация", desc: "Помощь в открытии компании" },
      reporting: { title: "Отчётность", desc: "Годовые отчёты и фин. документы" },
      consulting: { title: "Консалтинг", desc: "Персональные консультации по бухгалтерии и налогам" },
      taxes: { title: "Налоги", desc: "BTW, IB, VPB — вовремя и точно" },
      payroll: { title: "Зарплата (Payroll)", desc: "Начисление зарплат и отчётность" }
    },

    pricing: {
      title: "Пакеты услуг",
      tiers: {
        basic: { title: "Базовый", desc: "Для ZZP и компаний без сотрудников" },
        standard: { title: "Стандартный", desc: "Для малых и средних компаний с сотрудниками" },
        premium: { title: "Премиум", desc: "Для компаний с большим документооборотом" },
        oneOff: { title: "Индивидуальные услуги", desc: "Под задачи компаний и ИП" }
      }
    },

    benefits: {
      title: "Почему выбирают нас",
      transparent: { title: "Прозрачные цены", desc: "Фиксированные тарифы, без скрытых платежей — вы всегда знаете, за что платите." },
      fast: { title: "Быстрые ответы", desc: "Отвечаем в течение 24 часов — вовремя поддерживаем ваш бизнес." },
      full: { title: "Полный спектр услуг", desc: "От регистрации компании до бухгалтерии и деклараций — всё в одном месте." },
      languages: { title: "Многоязычная поддержка", desc: "Консультации на русском, румынском и английском языках." }
    },

    testimonials: { title: "Что говорят о нас" },
    home: {
      introHTML: "<i>GeniusTax — бухгалтерия для предпринимателей в Нидерландах. Мы готовим и подаём налоговые декларации, ведём бухгалтерию и консультируем на русском, румынском и английском языках. Прозрачные цены, никакого стресса и всегда вовремя.</i>",
      question: "<i>Запутались в налогах и отчётности?</i>",
      answer: "<i>Мы берём цифры на себя, чтобы вы занимались бизнесом!</i>",
      learnMore: "Узнать больше"
    },
    stats: { clientsTrust: "клиентов нам доверяют" },
    statsMore: { clients: "клиентов", years: "лет опыта", serviceTypes: "типов услуг", languages: "языка поддержки" },

    contact: {
      hero: { title: "Заинтересованы в наших услугах?", subtitle: "Ответим в течение 24 часов!" },
      info: { addressTitle: "Адрес", contactsTitle: "Контакты", emailLabel: "Email", phoneLabel: "Телефон", hoursLabel: "Часы работы", hoursValue: "пн–пт 9:00 - 19:00" },
      whatsapp: { text: "Написать нам" },
      form: {
        labels: { name: "Имя", email: "Email", phone: "Телефон", service: "Услуги" },
        placeholders: { name: "Ваше имя", email: "Ваш email", phone: "Формат: +31(123)4567890", message: "Ваш запрос..." },
        options: { select: "Выберите пакет услуг...", basic: "Базовый пакет", standard: "Стандартный пакет", premium: "Премиум пакет", individual: "Индивидуальные услуги" },
        agreeHTML: "Я принимаю <a href=\"#\">Условия использования</a>",
        submit: "Отправить запрос",
        success: "Спасибо! Ваше сообщение отправлено.",
        error: "Отправка не удалась. Пожалуйста, попробуйте ещё раз.",
        sending: "Отправляем сообщение..."
      }
    },

    servicesHero: { title: "Услуги для предпринимателей", subtitle: "Выберите пакет или закажите разовую услугу", cta: "Получить консультацию" },
    servicesPage: {
      packages: {
        title: "Пакеты",
        includes: "В пакет входит:",
        cta: "Получить консультацию",
        popular: "Популярный",
        basic: {
          title: "Базовый пакет",
          desc: "Для компаний без сотрудников и с небольшим объёмом документов",
          list: [
            "Квартальные и годовые налоговые декларации (BTW, IB)",
            "Подготовка счетов-фактур",
            "Базовая консультация по налогам",
            "Email-поддержка"
          ]
        },
        standard: {
          title: "Стандартный пакет",
          desc: "Для компаний со средним объёмом работы и стабильным документооборотом",
          list: [
            "Полное бухгалтерское сопровождение (ZZP, VOF, BV)",
            "Payroll — ведение зарплаты (при наличии сотрудников)",
            "Квартальные и годовые декларации (BTW, IB, VPB)",
            "Подготовка финансовых отчётов",
            "Регулярные консультации",
            "Приоритетная поддержка"
          ]
        },
        premium: {
          title: "Премиум пакет",
          desc: "Для компаний с большим документооборотом или особыми требованиями",
          list: [
            "Все услуги из Стандартного пакета",
            "Персонализированные решения под ваш бизнес",
            "Углублённые консультации и стратегическое планирование",
            "Представительство в налоговой службе"
          ]
        },
        onetime: {
          title: "Индивидуальные услуги",
          desc: "Разовые услуги без абонентской платы для конкретных задач",
          includes: "Доступные услуги:",
          list: [
            "Подготовка и подача квартальной/годовой декларации (BTW, IB, VPB)",
            "Jaaropgave / Jaarrekening — годовые отчёты и фин. документы",
            "Формы KvK — открытие ZZP, запрос uitreksel, изменения в регистрации",
            "Консультация по конкретному бухгалтерскому или налоговому вопросу",
            "Проверка существующей бухгалтерии",
            "Другие услуги по запросу"
          ]
        }
      },
      why: {
        title: "Почему выбирают нас",
        cards: {
          fast: { title: "Быстрые ответы", desc: "Отвечаем в течение 24 часов — вовремя поддерживаем ваш бизнес." },
          multilingual: { title: "Многоязычная поддержка", desc: "Консультации на русском, румынском и английском языках." }
        }
      },
      faq: {
        title: "Часто задаваемые вопросы",
        q1: {
          title: "Какие услуги входят в пакеты обслуживания?",
          html: "<p><strong>Базовый пакет</strong> включает квартальные и годовые налоговые декларации, подготовку счетов-фактур и базовую консультацию.</p><p><strong>Стандартный пакет</strong> — это полное бухгалтерское сопровождение, Payroll (при наличии сотрудников), квартальные и годовые декларации, финансовые отчёты и регулярные консультации.</p><p><strong>Премиум пакет</strong> включает все услуги из Стандартного пакета плюс персонализированные решения, углубленные консультации, стратегическое планирование и представительство в налоговой службе.</p><p>Также предлагаем <strong>индивидуальные услуги</strong> без абонентской платы — разовые декларации, консультации, регистрация в KvK и другие услуги по запросу.</p>"
        },
        q2: {
          title: "Как часто нужно подавать BTW декларацию?",
          html: "<p>Частота зависит от оборота вашей компании:</p><p><strong>Квартально (per kwartaal)</strong> — стандартный вариант для большинства предпринимателей. Декларация подается раз в 3 месяца.</p><p><strong>Ежемесячно (per maand)</strong> — при высоком обороте или по требованию налоговой службы.</p><p><strong>Ежегодно (per jaar)</strong> — если годовой BTW менее €1.883, можно подавать раз в год до 31 марта.</p><p>Мы возьмём на себя подготовку и подачу налоговых деклараций, а также проследим, чтобы всё было подано вовремя в соответствии с требованиями налоговой службы.</p>"
        },
        q3: {
          title: "Нужна ли мне бухгалтерия как ZZP?",
          html: "<p><strong>Да, как ZZP вы обязаны вести бухгалтерский учёт — но нанимать бухгалтера не обязательно, вы можете вести учёт самостоятельно. Однако важно, чтобы он вёлся правильно и соответствовал требованиям налоговой службы.</strong></p><p>Как ZZP вы должны аккуратно регистрировать все доходы и расходы. Это необходимо для:</p><ul><li>Подачи годовой налоговой декларации (IB)</li><li>Квартальных BTW деклараций (если применимо)</li><li>Соблюдения требований налоговой службы</li><li>Контроля финансов вашего бизнеса</li></ul><p>Мы возьмём бухгалтерию на себя, чтобы вы сосредоточились на бизнесе.</p>"
        },
        q4: {
          title: "Помогаете ли вы с регистрацией в KvK?",
          html: "<p><strong>Да, мы предоставляем полное сопровождение при регистрации компании.</strong></p><p>Наши услуги включают:</p><ul><li>Консультацию по выбору правовой формы (ZZP, VOF, BV)</li><li>Подготовку необходимых документов</li><li>Регистрацию в Торговой палате (KvK)</li><li>Запрос uitreksel (выписки из KvK)</li><li>Помощь с изменениями в регистрации</li></ul><p>Проведём вас через весь процесс на вашем языке.</p>"
        },
        q5: {
          title: "Работаете ли вы с компаниями с сотрудниками?",
          html: "<p><strong>Да, мы предоставляем полный спектр Payroll-услуг.</strong></p><p>Для компаний с сотрудниками мы предлагаем:</p><ul><li>Ведение зарплатной ведомости (loonheffing)</li><li>Расчёт зарплаты и налогов</li><li>Подготовку и подачу налоговых деклараций по зарплате</li><li>Запрос налогового номера на зарплату (loonheffingsnummer)</li><li>Подготовку годовых отчётов (jaaropgave)</li></ul><p>Payroll включён в Стандартный и Премиум пакеты при наличии сотрудников.</p>"
        },
        q6: {
          title: "Можно ли получить разовую консультацию?",
          html: "<p><strong>Да, мы предлагаем индивидуальные услуги без абонентской платы.</strong></p><p>Вы можете заказать разовые услуги:</p><ul><li>Консультация по конкретному бухгалтерскому или налоговому вопросу</li><li>Разовая налоговая декларация (BTW, IB, VPB)</li><li>Подготовка Jaaropgave / Jaarrekening</li><li>Проверка существующей бухгалтерии</li><li>Другие услуги по запросу</li></ul><p>Свяжитесь с нами, чтобы обсудить потребности и получить предложение.</p>"
        },
        q7: {
          title: "Что делать, если я получил большой штраф (например, €5.000) за несданную декларацию?",
          html: "<p><strong>Если вы пропустили срок подачи, Belastingdienst может начислить штраф.</strong></p><p>Не паникуйте — проверим периоды без отчётности, подготовим недостающие декларации и официальное обращение о снижении штрафа.</p><p>Во многих случаях сумму можно существенно уменьшить, если действовать вовремя.</p>"
        },
        q8: {
          title: "Могу ли я иметь несколько компаний одновременно (ZZP, VOF, BV)?",
          html: "<p><strong>Вы можете владеть VOF или BV, но иметь два ZZP одновременно нельзя — это считается одной предпринимательской деятельностью.</strong></p><p>Тем не менее, можно совмещать разные формы (например, быть ZZP и учредителем BV).</p><p>Поможем правильно разделить деятельность и налоги, чтобы всё было законно и выгодно.</p>"
        },
        q9: {
          title: "Нужно ли платить налоги, если компания временно не работает?",
          html: "<p><strong>Да, даже без дохода нужно подавать нулевые декларации. Это подтверждает активность бизнеса и помогает избежать штрафов.</strong></p><p>Мы подготовим нулевую отчётность и уведомим налоговую от вашего имени.</p>"
        }
      }
    },

    aboutPage: {
      founder: {
        name: "Надежда Мариан",
        imgAlt: "Надежда Мариан — основательница GeniusTax",
        mission: "Наша миссия – сделать налоговые вопросы максимально простыми для предпринимателей, чтобы у них оставалось больше времени на действительно важное – свой бизнес.",
        cta: "Наши услуги",
        experience: { title: "Опыт работы", bodyHTML: "Бухгалтер с 2014 года<br>Работаю в Нидерландах с 2018 года" },
        services: { title: "Услуги", bodyHTML: "Декларации<br>Подготовка счетов-фактур<br>Ведение зарплат (Payroll)" },
        specialization: { title: "Специализация", bodyHTML: "Бухгалтерское и налоговое сопровождение<br>ZZP, VOF, BV, физические лица" }
      },
      sections: {
        aboutTitle: "О нас",
        missionTitle: "Миссия",
        missionDesc: "Наша миссия — сделать налоговые вопросы максимально простыми для предпринимателей, чтобы у вас оставалось больше времени на важное — развитие бизнеса.",
        valuesTitle: "Ценности",
        valuesDesc: "Серьёзность, прозрачность и уважение к каждому клиенту — основа нашего подхода. Для нас важно не только решать технические задачи, но и дарить уверенность.",
        approachTitle: "Подход",
        approachDesc: "Мы объясняем сложные налоговые вещи простыми словами и обеспечиваем спокойствие в отношениях с Belastingdienst."
      },
      servicesSection: { title: "Наши услуги", desc: "Решения для предпринимателей любого масштаба: от фрилансеров до компаний с сотрудниками. Мы подберём пакет, который подходит именно вам.", cta: "Узнать больше" },
      testimonials: {
        title: "Что говорят о нас?",
        list: [
          { name: "Валерий Агафонов", role: "Директор компании", quote: "Мы перешли на GeniusTax в прошлом году и сразу заметили разницу: прозрачные цены, быстрые ответы и проактивные советы. Очень рекомендую!" },
          { name: "Пётр Петров", role: "Предприниматель", quote: "Я не носитель нидерландского языка, и с GeniusTax система налогов в Нидерландах стала понятной. Их многоязычная поддержка — огромное преимущество для таких предпринимателей, как я." },
          { name: "Олег Смирнов", role: "Фрилансер", quote: "Как фрилансер, я переживал из‑за сроков по НДС. С GeniusTax всё делается быстро и профессионально, а я могу сосредоточиться на работе." }
        ]
      }
    }
  },

  ro: {
    meta: {
      title: "GeniusTax — acordă servicii contabile pentru antreprenori în Țările de Jos",
      ogTitle: "GeniusTax — acordă servicii contabile pentru antreprenori în Țările de Jos",
      ogDescription: "Contabilitate, declarații fiscale și consultanță. Prețuri transparente, fără stres, mereu la timp."
    },
    nav: { home: "Acasă", services: "Servicii", about: "Despre", contact: "Contact" },
    cta: { consult: "Programează o consultație", learnMore: "Află mai mult" },
    footer: { privacy: "Politica de confidențialitate (GDPR)", copyright: "© 2025 Toate drepturile rezervate" },

    hero: { title: "GeniusTax — contabilitate în limba\u00A0ta", subtitle: "Concentrează-te pe afaceri, lasă cifrele la noi.", cta: "Vezi pachetele" },
    about: { lead: "GeniusTax este un partener de încredere pentru antreprenorii din Țările de Jos." },
    aboutUs: { title: "Despre noi", lead: "Simplificăm contabilitatea: ținem evidența, depunem declarațiile, gestionăm salarizarea și suntem mereu disponibili pentru consultanță." },

    // Pagina Termeni de utilizare
    terms: {
      title: "Termeni de utilizare",
      bodyHTML: "Conținutul acestui site web, inclusiv întregul design al site‑ului, textele, grafica, selecția și aranjarea lor, precum și toate compilațiile software, codul sursă, programele și toate celelalte materiale, sunt protejate de drepturi de autor deținute de \u201eGeniusTax\u201d.<br><br>Puteți vizualiza site‑ul și descărca orice parte a acestuia pe un computer personal exclusiv pentru vizualizare privată și în scopuri personale. Fără permisiunea noastră, nu aveți voie să:<br><br>- stocați site‑ul sau vreo parte a acestuia în alte scopuri decât cele menționate în acest paragraf;<br>- tipăriți copii, cu excepția vizualizării private sau în scopurile propriei afaceri (alte decât republicarea acestor materiale în scopuri comerciale); sau<br>- reproduceți, copiați sau transmiteți site‑ul sau vreo parte a acestuia în orice alt mod, în orice scop sau pe orice alt suport. De asemenea, nu aveți voie să modificați conținutul în niciun fel."
    },

    features: {
      bookkeeping: { title: "Contabilitate", desc: "Contabilitate pentru ZZP, VOF, BV și persoane fizice." },
      registration: { title: "Înregistrare", desc: "Asistență pentru deschiderea companiei" },
      reporting: { title: "Raportare", desc: "Situații anuale și documente financiare" },
      consulting: { title: "Consultanță", desc: "Consiliere personală privind contabilitatea și taxele." },
      taxes: { title: "Impozite", desc: "Declarații BTW, IB, VPB — la timp și corect." },
      payroll: { title: "Payroll", desc: "Salarizare și raportare" }
    },

    pricing: {
      title: "Pachete de servicii",
      tiers: {
        basic: { title: "Basic", desc: "Pentru ZZP și firme fără angajați" },
        standard: { title: "Standard", desc: "Pentru companii mici și medii cu angajați" },
        premium: { title: "Premium", desc: "Pentru companii cu volum mare de documente" },
        oneOff: { title: "Servicii punctuale", desc: "Servicii personalizate pentru firme și PFA" }
      }
    },

    benefits: {
      title: "De ce să ne alegi",
      transparent: { title: "Prețuri transparente", desc: "Tarife fixe, fără costuri ascunse — știi mereu pentru ce plătești." },
      fast: { title: "Răspuns rapid", desc: "Răspundem în 24 ore — suport la timp pentru afacerea ta." },
      full: { title: "Gama completă de servicii", desc: "De la înființarea firmei la contabilitate și declarații — totul într-un singur loc." },
      languages: { title: "Suport multilingv", desc: "Consultații în rusă, română și engleză — alege limba preferată." }
    },

    testimonials: { title: "Ce spun clienții" },
    home: {
      introHTML: "<i>GeniusTax — acordă servicii contabile pentru antreprenori în Țările de Jos. Pregătim și depunem declarațiile fiscale, ținem contabilitatea și consultăm în română, rusă și engleză. Prețuri transparente, fără stres și mereu la timp.</i>",
      question: "<i>Confuz cu taxele și raportarea?</i>",
      answer: "<i>Ne ocupăm noi de cifre, tu de afaceri!</i>",
      learnMore: "Află mai mult"
    },
    stats: { clientsTrust: "clienți au încredere" },
    statsMore: { clients: "clienți", years: "ani de experiență", serviceTypes: "tipuri de servicii", languages: "limbi de suport" },

    contact: {
      hero: { title: "Interesat de serviciile noastre?", subtitle: "Răspundem în 24 de ore!" },
      info: { addressTitle: "Adresă", contactsTitle: "Contacte", emailLabel: "Email", phoneLabel: "Telefon", hoursLabel: "Program", hoursValue: "Lun–Vin 9:00 - 19:00" },
      whatsapp: { text: "Scrie-ne" },
      form: {
        labels: { name: "Nume", email: "Email", phone: "Telefon", service: "Serviciu" },
        placeholders: { name: "Numele tău", email: "Emailul tău", phone: "Format: +31(123)4567890", message: "Mesajul tău..." },
        options: { select: "Alege un pachet...", basic: "Basic", standard: "Standard", premium: "Premium", individual: "Servicii punctuale" },
        agreeHTML: "Accept <a href=\"#\">Termenii de utilizare</a>",
        submit: "Trimite cererea",
        success: "Mulțumim! Mesajul a fost trimis.",
        error: "Trimiterea a eșuat. Încearcă din nou.",
        sending: "Se trimite..."
      }
    },

    servicesHero: { title: "Servicii pentru antreprenori", subtitle: "Alege un pachet sau cere un serviciu punctual", cta: "Programează o consultație" },
    servicesPage: {
      packages: {
        title: "Pachete",
        includes: "Include:",
        cta: "Programează o consultație",
        popular: "Popular",
        basic: {
          title: "Pachet Basic",
          desc: "Pentru firme fără angajați și volum mic de documente",
          list: [
            "Declarații trimestriale și anuale (BTW, IB)",
            "Pregătire facturi",
            "Consultanță fiscală de bază",
            "Asistență prin email"
          ]
        },
        standard: {
          title: "Pachet Standard",
          desc: "Pentru firme cu volum mediu și flux stabil de documente",
          list: [
            "Contabilitate completă (ZZP, VOF, BV)",
            "Payroll — salarizare (dacă există angajați)",
            "Declarații trimestriale și anuale (BTW, IB, VPB)",
            "Rapoarte financiare",
            "Consultanțe periodice",
            "Asistență prioritară"
          ]
        },
        premium: {
          title: "Pachet Premium",
          desc: "Pentru firme cu volum mare sau cerințe speciale",
          list: [
            "Tot din pachetul Standard",
            "Soluții personalizate pentru afacerea ta",
            "Consultanță aprofundată și planificare strategică",
            "Reprezentare în relația cu autoritatea fiscală"
          ]
        },
        onetime: {
          title: "Servicii punctuale",
          desc: "Servicii la cerere, fără abonament lunar",
          includes: "Servicii disponibile:",
          list: [
            "Pregătirea și depunerea declarațiilor trimestriale/anuale (BTW, IB, VPB)",
            "Jaaropgave / Jaarrekening — documente și rapoarte anuale",
            "Formulare KvK — deschidere ZZP, extras, modificări în registru",
            "Consultanță pe o întrebare contabilă sau fiscală concretă",
            "Verificarea contabilității existente",
            "Alte servicii contabile la cerere"
          ]
        }
      },
      why: {
        title: "De ce să ne alegi",
        cards: {
          fast: { title: "Răspuns rapid", desc: "Răspundem în 24 ore — suport la timp pentru afacerea ta." },
          multilingual: { title: "Suport multilingv", desc: "Consultații în rusă, română și engleză — alege limba preferată." }
        }
      },
      faq: {
        title: "Întrebări frecvente",
        q1: {
          title: "Ce servicii sunt incluse în pachete?",
          html: "<p><strong>Pachetul Basic</strong> include declarații trimestriale și anuale, pregătire facturi și consultanță de bază.</p><p><strong>Pachetul Standard</strong> înseamnă contabilitate completă, salarizare (dacă există angajați), declarații trimestriale și anuale, rapoarte financiare și consultanțe periodice.</p><p><strong>Pachetul Premium</strong> include tot din Standard plus soluții personalizate, consultanță aprofundată, planificare strategică și reprezentare la autoritatea fiscală.</p><p>Oferim și <strong>servicii punctuale</strong> fără abonament lunar — declarații unice, consultații, înregistrare la KvK și alte servicii la cerere.</p>"
        },
        q2: {
          title: "Cât de des trebuie depusă declarația BTW?",
          html: "<p>Frecvența depinde de cifra de afaceri:</p><p><strong>Trimestrial (per kwartaal)</strong> — opțiunea standard pentru majoritatea antreprenorilor. Depunere la fiecare 3 luni.</p><p><strong>Lunar (per maand)</strong> — la cifră de afaceri mare sau la cererea autorității fiscale.</p><p><strong>Anual (per jaar)</strong> — dacă BTW anual este sub €1.883, se poate depune o dată pe an până la 31 martie.</p><p>Ne ocupăm de pregătirea și depunerea declarațiilor fiscale și ne asigurăm că totul este depus la timp în conformitate cu cerințele autorității fiscale.</p>"
        },
        q3: {
          title: "Am nevoie de contabilitate ca ZZP?",
          html: "<p><strong>Da, ca ZZP trebuie să păstrezi evidența contabilă — dar angajarea unui contabil nu este obligatorie, poți ține evidența singur. Însă este important ca aceasta să fie ținută corect și să respecte cerințele autorității fiscale.</strong></p><p>Ca ZZP trebuie să înregistrezi corect toate veniturile și cheltuielile. Este necesar pentru:</p><ul><li>Depunerea declarației anuale de impozit pe venit (IB)</li><li>Declarații trimestriale BTW (dacă se aplică)</li><li>Respectarea cerințelor autorității fiscale</li><li>Controlul finanțelor afacerii</li></ul><p>Noi ne ocupăm de contabilitate ca tu să te concentrezi pe afaceri.</p>"
        },
        q4: {
          title: "Ajutați cu înregistrarea la KvK?",
          html: "<p><strong>Da, oferim suport complet pentru înregistrarea firmei.</strong></p><p>Serviciile noastre includ:</p><ul><li>Consultanță pentru forma juridică (ZZP, VOF, BV)</li><li>Pregătirea documentelor necesare</li><li>Înregistrare la Camera de Comerț (KvK)</li><li>Solicitare extras KvK (uitreksel)</li><li>Asistență pentru modificări în registru</li></ul><p>Te ghidăm în limba ta.</p>"
        },
        q5: {
          title: "Lucrați cu companii care au angajați?",
          html: "<p><strong>Da, oferim servicii complete de Payroll.</strong></p><p>Pentru companii cu angajați oferim:</p><ul><li>Procesare salarii (loonheffing)</li><li>Calcul salarii și taxe</li><li>Pregătire și depunere declarații de taxe salariale</li><li>Solicitare număr de taxe salariale (loonheffingsnummer)</li><li>Pregătire situații anuale (jaaropgave)</li></ul><p>Payroll este inclus în pachetele Standard și Premium când există angajați.</p>"
        },
        q6: {
          title: "Pot obține o consultație punctuală?",
          html: "<p><strong>Da, oferim servicii punctuale fără abonament lunar.</strong></p><p>Poți comanda servicii punctuale:</p><ul><li>Consultanță pe o întrebare contabilă sau fiscală</li><li>Declarație unică (BTW, IB, VPB)</li><li>Pregătire Jaaropgave / Jaarrekening</li><li>Verificarea contabilității existente</li><li>Alte servicii la cerere</li></ul><p>Contactează-ne pentru un ofertă adaptată.</p>"
        },
        q7: {
          title: "Ce fac dacă am primit o amendă mare (ex., €5.000) pentru o declarație nedepusă?",
          html: "<p><strong>Dacă ai ratat termenul de depunere, autoritatea fiscală (Belastingdienst) poate aplica o amendă.</strong></p><p>Nu intra în panică — verificăm perioadele lipsă, pregătim declarațiile și depunem o solicitare oficială de reducere a amenzii.</p><p>De multe ori suma poate fi redusă semnificativ dacă acționezi la timp.</p>"
        },
        q8: {
          title: "Pot avea mai multe companii simultan (ZZP, VOF, BV)?",
          html: "<p><strong>Poți deține mai multe companii, de exemplu VOF sau BV, dar nu poți avea două ZZP simultan — în Țările de Jos este considerată aceeași activitate antreprenorială.</strong></p><p>Totuși, poți combina forme diferite (de ex., ZZP și fondator BV).</p><p>Te ajutăm să separi corect activitățile și taxele, legal și avantajos.</p>"
        },
        q9: {
          title: "Trebuie să plătesc taxe dacă firma este temporar inactivă?",
          html: "<p><strong>Da, chiar fără venit trebuie depuse declarații zero. Astfel confirmi că firma este activă și eviți amenzile.</strong></p><p>Pregătim declarațiile zero și notificăm autoritatea fiscală în numele tău.</p>"
        }
      }
    },

    aboutPage: {
      founder: {
        name: "Nadejda Marian",
        imgAlt: "Nadejda Marian — fondatoarea GeniusTax",
        mission: "Misiunea noastră este să simplificăm subiectele fiscale pentru antreprenori, ca să rămână mai mult timp pentru ceea ce contează cu adevărat — afacerea lor.",
        cta: "Serviciile noastre",
        experience: { title: "Experiență", bodyHTML: "Contabil din 2014<br>Lucrez în Țările de Jos din 2018" },
        services: { title: "Servicii", bodyHTML: "Declarații fiscale<br>Pregătire facturi<br>Payroll (salarizare)" },
        specialization: { title: "Specializare", bodyHTML: "Suport contabil și fiscal<br>ZZP, VOF, BV, persoane fizice" }
      },
      sections: {
        aboutTitle: "Despre noi",
        missionTitle: "Misiune",
        missionDesc: "Misiunea noastră este să simplificăm fiscalitatea pentru antreprenori, ca să aveți mai mult timp pentru dezvoltarea afacerii.",
        valuesTitle: "Valori",
        valuesDesc: "Seriozitate, transparență și respect autentic pentru fiecare client — baza abordării noastre.",
        approachTitle: "Abordare",
        approachDesc: "Explicăm lucrurile fiscale complexe pe înțelesul tuturor și aducem liniște în relația cu Belastingdienst."
      },
      servicesSection: { title: "Serviciile noastre", desc: "Soluții pentru antreprenori de orice dimensiune: de la freelanceri la companii cu angajați. Alegem pachetul potrivit pentru voi.", cta: "Află mai mult" },
      testimonials: {
        title: "Ce spun clienții despre noi?",
        list: [
          { name: "Valerii Agafonov", role: "Director companie", quote: "Am trecut la GeniusTax anul trecut și am observat imediat diferența: prețuri transparente, răspunsuri rapide și sfaturi proactive. Recomand cu căldură!" },
          { name: "Petr Petrov", role: "Antreprenor", quote: "Nu sunt vorbitor nativ de olandeză, iar cu GeniusTax sistemul fiscal din Olanda a devenit clar. Suportul lor multilingv este un mare avantaj pentru antreprenori ca mine." },
          { name: "Oleg Smirnov", role: "Freelancer", quote: "Ca freelancer, mă îngrijoram de termenele TVA. Cu GeniusTax totul se face rapid și profesionist, iar eu mă pot concentra pe munca mea." }
        ]
      }
    }
  }
};
