const data = [
    {
        id: 1,
        section: 'Доступ к Slondo',
        subSections: [
            {section: 'Регистрация', term: 'registration'},
            {section: 'Вход в аккаунт (Авторизация на сайте)'},
            {section: 'Забыл пароль'},
            {section: 'Сменить пароль'}
        ],
        term: 'access_to_slondo'
    },
    {
        id: 2,
        section: 'Безопасность личных данных',
        subSections: [
            'Мой аккаунт заблокирован Администрацией сайта'
        ],
        term: 'personal_data_security'
    },
    {
        id: 3,
        section: 'Объявления',
        subSections: [
            'Создание объявлений',
            'Редактирование объявлений',
            'Как деактивировать объявление',
            'Объявление отклонено'
        ],
        term: 'posts'
    },
    {
        id: 4,
        section: 'Правила сайта',
        subSections: [
            'Требования к фото – материалам SLONDO',
            'Запрещено размещение на сервисе SLONDO',
            'Требования к описанию товара,  аукциона или услуги',
            'Требования к аккаунтам пользователей сервиса',
            'Запрещенные товары и услуги'
        ],
        term: 'site_rules'
    },
    {
        id: 5,
        section: 'Аукцион',
        subSections: [
            'Простой аукцион',
            'Продвинутый аукцион',
            'Создание  аукциона',
            'Завершение аукциона',
            'Проведение  аукциона',
            'Подача ставки'
        ],
        term: 'auction'
    },
    {
        id: 6,
        section: 'Безопасная покупка',
        subSections: [
            'Что такое безопасная покупка?',
            'Как продать товар с помощью Безопасной покупки?',
            'Как купить товар через безопасную покупку?'
        ],
        term: 'safe_shopping'
    },
    {
        id: 7,
        section: 'Взаимодействие пользователей',
        subSections: [
            'Чаты',
            'Оценки и отзывы'
        ],
        term: 'user_interaction'
    },
    {
        id: 8,
        section: 'Поиск в сервисе',
        term: 'search_in_service'
    }
];

const data2 = [
    {id: 1, section: 'Как зарегистрироваться?', term: 'how_to_register'},
    {id: 2, section: 'Как участвовать в аукционе?', term: 'how_to_participate'},
    {id: 3, section: 'Как создать аукцион?', term: 'how_to_create_auction'},
    {id: 4, section: 'Как создать объявление?', term: 'how_to_create_post'}
];

const data3 = [
    {id: 1, section: 'Пользовательское соглашение', term: 'user_agreements'},
    {id: 2, section: 'Политика конфиденциальности', term: 'privacy_police'},
    {id: 3, section: 'Оферта “Безопасный торг”', term: 'safe_auction_offer'},
    {id: 4, section: 'Оферта “Поднять в топ”', term: 'top_offer'},
    {id: 5, section: 'Оферта “Продвинутый аукцион”', term: 'advanced_auction_offer'},
    {id: 6, section: 'Оферта о размещение рекламы', term: 'advertising_offer'}
];

const data4 = [
    {id: 1, section: 'Обратная связь', term: 'feedback'}
];

export default [
    data,
    data2,
    data3,
    data4
];