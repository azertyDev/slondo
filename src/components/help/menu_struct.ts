type StructType = {
    id?: number,
    section: string,
    term: string
}

export type DataStructType = {
    subSections?: StructType[]
} & StructType;

const data  = [
    {
        id: 1,
        section: 'Доступ к Slondo',
        term: 'access_to_slondo',
        subSections: [
            {section: 'Регистрация', term: 'registration'},
            {section: 'Вход в аккаунт (Авторизация на сайте)', term: 'sign_in'},
            {section: 'Забыл пароль', term: 'forgot_password'},
            {section: 'Сменить пароль', term: 'change_password'}
        ]
    },
    {
        id: 2,
        section: 'Безопасность личных данных',
        term: 'personal_data_security',
        subSections: [
            {section: 'Мой аккаунт заблокирован Администрацией сайта', term: 'account_has_been_blocked'}
        ],
    },
    {
        id: 3,
        section: 'Объявления',
        term: 'posts',
        subSections: [
            {section: 'Создание объявлений', term: 'create'},
            {section: 'Редактирование объявлений', term: 'update'},
            {section: 'Как деактивировать объявление', term: 'deactivate'},
            {section: 'Объявление отклонено', term: 'rejected'}
        ],
    },
    {
        id: 4,
        section: 'Правила сайта',
        term: 'site_rules',
        subSections: [
            {section: 'Требования к фото – материалам SLONDO', term: 'material_requirements'},
            {section: 'Запрещено размещение на сервисе SLONDO', term: 'forbidden_on_slondo'},
            {section: 'Требования к описанию товара, аукциона или услуги', term: 'service_requirements'},
            {section: 'Требования к аккаунтам пользователей сервиса', term: 'accounts_requirements'},
            {section: 'Запрещенные товары и услуги', term: 'prohibited_services'}
        ],
    },
    {
        id: 5,
        section: 'Аукцион',
        term: 'auction',
        subSections: [
            {section: 'Простой аукцион', term: 'simple'},
            {section: 'Продвинутый аукцион', term: 'advanced'},
            {section: 'Создание  аукциона', term: 'create_auction'},
            {section: 'Завершение аукциона', term: 'end'},
            {section: 'Проведение  аукциона', term: 'holding'},
            {section: 'Подача ставки', term: 'bet_submitting'}
        ],
    },
    {
        id: 6,
        section: 'Безопасная покупка',
        term: 'safe_shopping',
        subSections: [
            {section: 'Что такое безопасная покупка?', term: 'concept'},
            {section: 'Как продать товар с помощью Безопасной покупки?', term: 'sold'},
            {section: 'Как купить товар через безопасную покупку?', term: 'buy'}
        ],
    },
    {
        id: 7,
        section: 'Взаимодействие пользователей',
        term: 'user_interaction',
        subSections: [
            {section: 'Чаты', term: 'chat'},
            {section: 'Оценки и отзывы', term: 'ratings_reviews'}
        ],
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
    {id: 3, section: 'Оферта “Безопасный торг”', term: 'safe_deal_offer'},
    {id: 4, section: 'Оферта “Поднять в топ”', term: 'top_offer'},
    {id: 5, section: 'Оферта “Продвинутый аукцион”', term: 'advanced_auction_offer'}
    // {id: 6, section: 'Оферта о размещение рекламы', term: 'advertising_offer'}
];

const data4 = [
    {id: 1, section: 'Обратная связь', term: 'feedback'}
];

const dataStructs: DataStructType[][] = [data, data2, data3, data4];

export default dataStructs;