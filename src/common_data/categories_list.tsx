import React from 'react'
import {
    CarIcon,
    SpecTechIcon,
    PartsIcon,
    ApartmentsIcon,
    JobIcon,
    ServicesIcon,
    HangerIcon,
    SofaIcon,
    ElectronicIcon,
    HobbyIcon,
    AnimalsIcon
} from '@src/components/elements/icons';
import {CategoryType} from '@root/interfaces/Categories';


const Car = '/img/categories_img/car.png';
const Transport = '/img/categories_img/transport.png';
const Parts = '/img/categories_img/parts.png';
const Estate = '/img/categories_img/estate.png';
const Job = '/img/categories_img/job.png';
const Service = '/img/categories_img/service.png';
const Goods = '/img/categories_img/goods.png';
const Home = '/img/categories_img/home.png';
const Electronics = '/img/categories_img/electronics.png';
const Hobbies = '/img/categories_img/hobbies.png';
const Animal = '/img/categories_img/animal.png';

export const categories_list: CategoryType[] = [
    {
        id: 1,
        name: 'car',
        ru_name: 'Автомобили',
        has_auction: false,
        icon: {url: Car},
        smallIcon: <CarIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'madeInUzb',
                ru_name: 'Сделано в Узбекистане'
            },
            {
                id: 2,
                name: 'foreignCars',
                ru_name: 'Иномарки'
            }
        ]
    },
    {
        id: 2,
        name: 'transport',
        ru_name: 'Спецтехника и транспорт',
        has_auction: false,
        icon: {url: Transport},
        smallIcon: <SpecTechIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'motorcyclesAndMotorTech',
                ru_name: 'Мотоциклы и мототехника',
                type: [
                    {
                        id: 1,
                        name: 'motorcycles',
                        ru_name: 'Мотоциклы'
                    },
                    {
                        id: 2,
                        name: 'mopedsAndScooters',
                        ru_name: 'Мопеды и скутеры'
                    },
                    {
                        id: 3,
                        name: 'quadBikes',
                        ru_name: 'Квадрациклы'
                    },
                    {
                        id: 4,
                        name: 'carting',
                        ru_name: 'Картинг'
                    },
                    {
                        id: 5,
                        name: 'snowmobiles',
                        ru_name: 'Снегоходы'
                    },
                    {
                        id: 6,
                        name: 'buggy',
                        ru_name: 'Багги'
                    },
                    {
                        id: 7,
                        name: 'other',
                        ru_name: "Другое"
                    }
                ]
            },
            {
                id: 2,
                name: 'busesAndTrucks',
                ru_name: 'Автобусы и грузовики',
                type: [
                    {
                        id: 8,
                        name: 'buses',
                        ru_name: 'Автобусы'
                    },
                    {
                        id: 9,
                        name: 'minibuses',
                        ru_name: 'Микроавтобусы'
                    },
                    {
                        id: 10,
                        name: 'refrigeratedTruck',
                        ru_name: 'Авторефрижератор'
                    },
                    {
                        id: 11,
                        name: 'motorHomes',
                        ru_name: 'Автодома'
                    },
                    {
                        id: 12,
                        name: 'trucks',
                        ru_name: 'Грузовики'
                    },
                    {
                        id: 13,
                        name: 'commercialTransport',
                        ru_name: 'Легкий коммерческий транспорт'
                    },
                    {
                        id: 14,
                        name: 'trailers',
                        ru_name: 'Прицепы'
                    },
                    {
                        id: 15,
                        name: 'tractorUnits',
                        ru_name: 'Тягачи'
                    },
                    {
                        id: 16,
                        name: 'foodTruck',
                        ru_name: 'Фудтрак'
                    },
                    {
                        id: 17,
                        name: 'other',
                        ru_name: "Другое"
                    }
                ]
            },
            {
                id: 3,
                name: 'specTech',
                ru_name: 'Спецтехника',
                type: [
                    {
                        id: 18,
                        name: 'aerialPlatform',
                        ru_name: 'Автовышки'
                    },
                    {
                        id: 19,
                        name: 'truckCranes',
                        ru_name: 'Автокраны'
                    },
                    {
                        id: 20,
                        name: 'bulldozers',
                        ru_name: 'Бульдозеры'
                    },
                    {
                        id: 21,
                        name: 'utilityTechnology',
                        ru_name: 'Коммунальная техника'
                    },
                    {
                        id: 22,
                        name: 'loaders',
                        ru_name: 'Погрузчики'
                    },
                    {
                        id: 23,
                        name: 'agriculturalMachinery',
                        ru_name: 'Сельхозтехника'
                    },
                    {
                        id: 24,
                        name: 'constructionMachinery',
                        ru_name: 'Строительная техника'
                    },
                    {
                        id: 25,
                        name: 'forestryEquipment',
                        ru_name: 'Лесозаготовочная техника'
                    },
                    {
                        id: 26,
                        name: 'excavators',
                        ru_name: 'Экскаваторы'
                    },
                    {
                        id: 27,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 4,
                name: 'waterTransport',
                ru_name: 'Водный транспорт',
                type: [
                    {
                        id: 28,
                        name: 'rowingBoats',
                        ru_name: 'Вёсельные лодки'
                    },
                    {
                        id: 29,
                        name: 'jetSkis',
                        ru_name: 'Гидроциклы'
                    },
                    {
                        id: 30,
                        name: 'boatsAndYachts',
                        ru_name: 'Катера и яхты'
                    },
                    {
                        id: 31,
                        name: 'kayaksAndCanoes',
                        ru_name: 'Каяки и каноэ'
                    },
                    {
                        id: 32,
                        name: 'motorBoats',
                        ru_name: 'Моторные лодки'
                    },
                    {
                        id: 33,
                        name: 'inflatableBoat',
                        ru_name: 'Надувные лодки'
                    },
                    {
                        id: 34,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            }
        ]
    },
    {
        id: 3,
        name: 'parts',
        ru_name: 'Запчасти и аксессуары',
        has_auction: true,
        icon: {url: Parts},
        smallIcon: <PartsIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'forCars',
                ru_name: 'Для легковых автомобилей'
            },
            {
                id: 2,
                name: 'forMotorcyclesAndMotortech',
                ru_name: 'Для мотоциклов и мототехники',
                type: [
                    {
                        id: 1,
                        name: 'motorcycles',
                        ru_name: 'Мотоциклы'
                    },
                    {
                        id: 2,
                        name: 'mopedsAndScooters',
                        ru_name: 'Мопеды и скутеры'
                    },
                    {
                        id: 3,
                        name: 'quadBikes',
                        ru_name: 'Квадроциклы'
                    },
                    {
                        id: 4,
                        name: 'carting',
                        ru_name: 'Картинг'
                    },
                    {
                        id: 5,
                        name: 'snowmobiles',
                        ru_name: 'Снегоходы'
                    },
                    {
                        id: 6,
                        name: 'buggy',
                        ru_name: 'Багги'
                    },
                    {
                        id: 7,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 3,
                name: 'forBusesAndTrucks',
                ru_name: 'Для автобусов и грузовиков',
                type: [
                    {
                        id: 8,
                        name: 'buses',
                        ru_name: 'Автобусы'
                    },
                    {
                        id: 9,
                        name: 'minibuses',
                        ru_name: 'Микроавтобусы'
                    },
                    {
                        id: 10,
                        name: 'refrigeratedTruck',
                        ru_name: 'Авторефрижератор'
                    },
                    {
                        id: 11,
                        name: 'motorHomes',
                        ru_name: 'Автодома'
                    },
                    {
                        id: 12,
                        name: 'trucks',
                        ru_name: 'Грузовики'
                    },
                    {
                        id: 13,
                        name: 'commercialTransport',
                        ru_name: 'Легкий коммерческий транспорт'
                    },
                    {
                        id: 14,
                        name: 'trailers',
                        ru_name: 'Прицепы'
                    },
                    {
                        id: 15,
                        name: 'tractorUnits',
                        ru_name: 'Тягачи'
                    },
                    {
                        id: 16,
                        name: 'foodTruck',
                        ru_name: 'Фудтрак'
                    },
                    {
                        id: 17,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 4,
                name: 'forSpecialTech',
                ru_name: 'Для спецтехники',
                type: [
                    {
                        id: 18,
                        name: 'aerialPlatform',
                        ru_name: 'Автовышки'
                    },
                    {
                        id: 19,
                        name: 'truckCranes',
                        ru_name: 'Автокраны'
                    },
                    {
                        id: 20,
                        name: 'bulldozers',
                        ru_name: 'Бульдозеры'
                    },
                    {
                        id: 21,
                        name: 'utilityTechnology',
                        ru_name: 'Коммунальная техника'
                    },
                    {
                        id: 22,
                        name: 'loaders',
                        ru_name: 'Погрузчики'
                    },
                    {
                        id: 23,
                        name: 'agriculturalMachinery',
                        ru_name: 'Сельхозтехника'
                    },
                    {
                        id: 24,
                        name: 'constructionMachinery',
                        ru_name: 'Строительная техника'
                    },
                    {
                        id: 25,
                        name: 'forestryEquipment',
                        ru_name: 'Лесозаготовочная техника'
                    },
                    {
                        id: 26,
                        name: 'excavators',
                        ru_name: 'Экскаваторы'
                    },
                    {
                        id: 27,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 5,
                name: 'forWaterTransport',
                ru_name: 'Для водного транспорта'
            }
        ]
    },
    {
        id: 4,
        name: 'estate',
        ru_name: 'Недвижимость',
        has_auction: false,
        icon: {url: Estate},
        smallIcon: <ApartmentsIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'apartments',
                ru_name: 'Квартиры',
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        ru_name: 'Продажа'
                    },
                    {
                        id: 2,
                        name: 'longTermRent',
                        ru_name: 'Аренда на длительное время'
                    },
                    {
                        id: 3,
                        name: 'dailyRent',
                        ru_name: 'Аренда по суточно'
                    }
                ]
            },
            {
                id: 2,
                name: 'housesCottages',
                ru_name: 'Дома, дачи, коттеджи',
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        ru_name: "Продажа"
                    },
                    {
                        id: 2,
                        name: 'longTermRent',
                        ru_name: "Аренда на длительное время"
                    },
                    {
                        id: 3,
                        name: 'dailyRent',
                        ru_name: "Аренда по суточно"
                    }
                ]
            },
            {
                id: 3,
                name: 'land',
                ru_name: 'Земельные участки',
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        ru_name: "Продажа"
                    },
                    {
                        id: 2,
                        name: 'longTermRent',
                        ru_name: "Аренда на длительное время"
                    }
                ]
            },
            {
                id: 4,
                name: 'parkingLotsAndBoxes',
                ru_name: 'Подземные стоянки и боксы',
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        ru_name: "Продажа"
                    },
                    {
                        id: 2,
                        name: 'longTermRent',
                        ru_name: "Аренда на длительное время"
                    },
                ]
            },
            {
                id: 5,
                name: 'commercialProperty',
                ru_name: 'Коммерческая недвижимость',
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        ru_name: "Продажа"
                    },
                    {
                        id: 2,
                        name: 'longTermRent',
                        ru_name: "Аренда на длительное время"
                    },
                ]
            }
        ]
    },
    {
        id: 5,
        name: 'job',
        ru_name: 'Работа',
        has_auction: false,
        icon: {url: Job},
        smallIcon: <JobIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'vacancies',
                ru_name: 'Вакансии',
                type: [
                    {
                        id: 1,
                        name: 'autoBusiness',
                        ru_name: 'Автобизнес'
                    },
                    {
                        id: 2,
                        name: 'safetyAndSecurity',
                        ru_name: 'Безопасность и охрана'
                    },
                    {
                        id: 3,
                        name: 'officeStaff',
                        ru_name: 'Офисный персонал'
                    },
                    {
                        id: 4,
                        name: 'topManagement',
                        ru_name: 'Высший менеджмент'
                    },
                    {
                        id: 5,
                        name: 'extractionMaterials',
                        ru_name: 'Добыча сырья, энергетика'
                    },
                    {
                        id: 6,
                        name: 'homeStaff',
                        ru_name: 'Домашний персонал'
                    },
                    {
                        id: 7,
                        name: 'publishersAndMedia',
                        ru_name: 'Издательства и СМИ'
                    },
                    {
                        id: 8,
                        name: 'informationTechnology',
                        ru_name: 'Информационные технологии'
                    },
                    {
                        id: 9,
                        name: 'artsAndEntertainment',
                        ru_name: 'Искусство и развлечения'
                    },
                    {
                        id: 10,
                        name: 'procurement',
                        ru_name: 'Закупки'
                    },
                    {
                        id: 11,
                        name: 'marketingAndAdvertising',
                        ru_name: 'Маркетинг и реклама'
                    },
                    {
                        id: 12,
                        name: 'medicineAndPharmaceuticals',
                        ru_name: 'Медицина и фармацевтика'
                    },
                    {
                        id: 13,
                        name: 'careerStart',
                        ru_name: 'Начало карьеры / без опыта работы'
                    },
                    {
                        id: 14,
                        name: 'educationAndScience',
                        ru_name: 'Образование и наука'
                    },
                    {
                        id: 15,
                        name: 'handymen',
                        ru_name: 'Разнорабочие'
                    },
                    {
                        id: 16,
                        name: 'logisticsAndTransport',
                        ru_name: 'Логистика и транспорт'
                    },
                    {
                        id: 17,
                        name: 'sales',
                        ru_name: 'Продажи'
                    },
                    {
                        id: 18,
                        name: 'production',
                        ru_name: 'Производство'
                    },
                    {
                        id: 19,
                        name: 'restaurantsAndCatering',
                        ru_name: 'Рестораны и общепит'
                    },
                    {
                        id: 20,
                        name: 'agriculture',
                        ru_name: 'Сельское хозяйство'
                    },
                    {
                        id: 21,
                        name: 'sportsAndBeauty',
                        ru_name: 'Спорт и красота'
                    },
                    {
                        id: 22,
                        name: 'insurance',
                        ru_name: 'Страхование'
                    },
                    {
                        id: 23,
                        name: 'constructionAndRepair',
                        ru_name: 'Строительство и ремонт'
                    },
                    {
                        id: 24,
                        name: 'tourismAndHotels',
                        ru_name: 'Туризм и гостиницы'
                    },
                    {
                        id: 25,
                        name: 'Property',
                        ru_name: 'Недвижимость'
                    },
                    {
                        id: 26,
                        name: 'accountingAndFinance',
                        ru_name: 'Бухгалтерия и финансы'
                    },
                    {
                        id: 27,
                        name: 'bankingSector',
                        ru_name: 'Банковская сфера'
                    },
                    {
                        id: 28,
                        name: 'personnelManagement',
                        ru_name: 'Управление персоналом'
                    },
                    {
                        id: 29,
                        name: 'jurisprudence',
                        ru_name: 'Юриспруденция'
                    },
                    {
                        id: 30,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 2,
                name: 'resume',
                ru_name: 'Резюме',
                type: [
                    {
                        id: 31,
                        name: "Автобизнес",
                        ru_name: "Автобизнес"
                    },
                    {
                        id: 32,
                        name: "Безопасность и охрана",
                        ru_name: "Безопасность и охрана"
                    },
                    {
                        id: 33,
                        name: "Офисный персонал",
                        ru_name: "Офисный персонал"
                    },
                    {
                        id: 34,
                        name: "Высший менеджмент",
                        ru_name: "Высший менеджмент"
                    },
                    {
                        id: 35,
                        name: "Добыча сырья, энергетика",
                        ru_name: "Добыча сырья, энергетика"
                    },
                    {
                        id: 36,
                        name: "Домашний персонал",
                        ru_name: "Домашний персонал"
                    },
                    {
                        id: 37,
                        name: "Издательства и СМИ",
                        ru_name: "Издательства и СМИ"
                    },
                    {
                        id: 38,
                        name: "Информационные технологии",
                        ru_name: "Информационные технологии"
                    },
                    {
                        id: 39,
                        name: "Искусство и развлечения",
                        ru_name: "Искусство и развлечения"
                    },
                    {
                        id: 40,
                        name: "Закупки",
                        ru_name: "Закупки"
                    },
                    {
                        id: 41,
                        name: "Маркетинг и реклама",
                        ru_name: "Маркетинг и реклама"
                    },
                    {
                        id: 42,
                        name: "Медицина и фармацевтика",
                        ru_name: "Медицина и фармацевтика"
                    },
                    {
                        id: 43,
                        name: "Начало карьеры / без опыта работы",
                        ru_name: "Начало карьеры / без опыта работы"
                    },
                    {
                        id: 44,
                        name: "Образование и наука",
                        ru_name: "Образование и наука"
                    },
                    {
                        id: 45,
                        name: "Разнорабочие",
                        ru_name: "Разнорабочие"
                    },
                    {
                        id: 46,
                        name: "Логистика и транспорт",
                        ru_name: "Логистика и транспорт"
                    },
                    {
                        id: 47,
                        name: "Продажи",
                        ru_name: "Продажи"
                    },
                    {
                        id: 48,
                        name: "Производство",
                        ru_name: "Производство"
                    },
                    {
                        id: 49,
                        name: "Рестораны и общепит",
                        ru_name: "Рестораны и общепит"
                    },
                    {
                        id: 50,
                        name: "Сельское хозяйство",
                        ru_name: "Сельское хозяйство"
                    },
                    {
                        id: 51,
                        name: "Спорт и красота",
                        ru_name: "Спорт и красота"
                    },
                    {
                        id: 52,
                        name: "Страхование",
                        ru_name: "Страхование"
                    },
                    {
                        id: 53,
                        name: "Строительство и ремонт",
                        ru_name: "Строительство и ремонт"
                    },
                    {
                        id: 54,
                        name: "Туризм и гостиницы",
                        ru_name: "Туризм и гостиницы"
                    },
                    {
                        id: 55,
                        name: "Недвижимость",
                        ru_name: "Недвижимость"
                    },
                    {
                        id: 56,
                        name: "Бухгалтерия и финансы",
                        ru_name: "Бухгалтерия и финансы"
                    },
                    {
                        id: 57,
                        name: "Банковская сфера",
                        ru_name: "Банковская сфера"
                    },
                    {
                        id: 58,
                        name: "Управление персоналом",
                        ru_name: "Управление персоналом"
                    },
                    {
                        id: 59,
                        name: "Юриспруденция",
                        ru_name: "Юриспруденция"
                    },
                    {
                        id: 60,
                        name: "other",
                        ru_name: "Другое"
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        name: 'service',
        ru_name: 'Услуги',
        has_auction: false,
        icon: {url: Service},
        smallIcon: <ServicesIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'repairAndConstruction',
                ru_name: "Ремонт и строительство",
                type: [
                    {
                        id: 1,
                        name: 'improvementGarbageDisposal',
                        ru_name: "Благоустройство, вывоз мусора"
                    },
                    {
                        id: 2,
                        name: "highWork",
                        ru_name: "Высотные работы"
                    },
                    {
                        id: 3,
                        name: "designAndArchitecture",
                        ru_name: "Дизайн и архитектура"
                    },
                    {
                        id: 4,
                        name: "dismantlingStructures",
                        ru_name: "Демонтаж сооружений и конструкций"
                    },
                    {
                        id: 5,
                        name: "complexRenovation",
                        ru_name: "Комплексный ремонт"
                    },
                    {
                        id: 6,
                        name: "roofing",
                        ru_name: "Кровельные работы"
                    },
                    {
                        id: 7,
                        name: "paintingWorks",
                        ru_name: "Малярные работы"
                    },
                    {
                        id: 8,
                        name: "windowsAndDoors",
                        ru_name: "Окна и двери"
                    },
                    {
                        id: 9,
                        name: "finishingAndRenovation",
                        ru_name: "Отделка и ремонт"
                    },
                    {
                        id: 10,
                        name: "stovesAndFireplaces",
                        ru_name: "Печи и камины"
                    },
                    {
                        id: 11,
                        name: "Plumbing",
                        ru_name: "Сантехника"
                    },
                    {
                        id: 12,
                        name: "weldingWorks",
                        ru_name: "Сварочные работы"
                    },
                    {
                        id: 13,
                        name: "constructionWorks",
                        ru_name: "Строительные работы"
                    },
                    {
                        id: 14,
                        name: "layingAndRenovationTiles",
                        ru_name: "Укладка и ремонт плитки"
                    },
                    {
                        id: 15,
                        name: "handymanServices",
                        ru_name: "Услуги разнорабочих"
                    },
                    {
                        id: 16,
                        name: "facadeWorks",
                        ru_name: "Фасадные работы"
                    },
                    {
                        id: 17,
                        name: "plasteringWorks",
                        ru_name: "Штукатурные работы"
                    },
                    {
                        id: 18,
                        name: "electrician",
                        ru_name: "Электрика"
                    },
                    {
                        id: 19,
                        name: "otherServices",
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 2,
                name: "masterForAnHour",
                ru_name: "Мастер на час",
                type: [
                    {
                        id: 20,
                        name: "pickingLocks",
                        ru_name: "Вскрытие замков"
                    },
                    {
                        id: 21,
                        name: "masterForAnHour",
                        ru_name: "Мастер на час"
                    },
                    {
                        id: 22,
                        name: "productionOfKeys",
                        ru_name: "Изготовление ключей"
                    },
                    {
                        id: 23,
                        name: "furnitureAssemblyAndRepair",
                        ru_name: "Сборка и ремонт мебели"
                    },
                    {
                        id: 24,
                        name: "otherServices",
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 3,
                name: "Няни и сиделки",
                ru_name: "babysittersAndNurses",
                type: [
                    {
                        id: 25,
                        name: "babysittingAndGoverness",
                        ru_name: "Няни, гувернантки"
                    },
                    {
                        id: 26,
                        name: "nurses",
                        ru_name: "Сиделки"
                    }
                ]
            },
            {
                id: 4,
                name: "transportation",
                ru_name: "Перевозки",
                type: [
                    {
                        id: 27,
                        name: "rentCar",
                        ru_name: "Аренда авто"
                    },
                    {
                        id: 28,
                        name: "rentSpecialTech",
                        ru_name: "Аренда спецтехники"
                    },
                    {
                        id: 29,
                        name: "garbageRemoval",
                        ru_name: "Вывоз мусора"
                    },
                    {
                        id: 30,
                        name: "cargoTransportation",
                        ru_name: "Грузоперевозки"
                    },
                    {
                        id: 31,
                        name: "courier",
                        ru_name: "Курьер"
                    },
                    {
                        id: 32,
                        name: "movers",
                        ru_name: "Грузчики"
                    },
                    {
                        id: 33,
                        name: "distillation",
                        ru_name: "Перегон"
                    },
                    {
                        id: 34,
                        name: "passengerTransportation",
                        ru_name: "Пассажирские перевозки"
                    },
                    {
                        id: 35,
                        name: "driverServices",
                        ru_name: "Услуги водителя"
                    },
                    {
                        id: 36,
                        name: "towTruckServices",
                        ru_name: "Услуги эвакуатора"
                    },
                    {
                        id: 37,
                        name: 'otherServices',
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 5,
                name: "beautyAndHealth",
                ru_name: "Красота и здоровье",
                type: [
                    {
                        id: 38,
                        name: "depilationAndSugaring",
                        ru_name: "Депиляция и шугаринг Селект"
                    },
                    {
                        id: 39,
                        name: "makeup",
                        ru_name: "Макияж"
                    },
                    {
                        id: 40,
                        name: "manicureAndPedicure",
                        ru_name: "Маникюр и педикюр"
                    },
                    {
                        id: 41,
                        name: "tan",
                        ru_name: "Загар"
                    },
                    {
                        id: 42,
                        name: "hairTreatment",
                        ru_name: "Лечение волос"
                    },
                    {
                        id: 43,
                        name: "massage",
                        ru_name: "Массаж"
                    },
                    {
                        id: 44,
                        name: "hairExtension",
                        ru_name: "Наращивание волос"
                    },
                    {
                        id: 45,
                        name: "eyelashExtensionEyebrowServices",
                        ru_name: "Наращивание ресниц, услуги бровиста"
                    },
                    {
                        id: 46,
                        name: "piercing",
                        ru_name: "Пирсинг"
                    },
                    {
                        id: 47,
                        name: "stylist",
                        ru_name: "Стилист"
                    },
                    {
                        id: 48,
                        name: "spaServices",
                        ru_name: "СПА-услуги"
                    },
                    {
                        id: 49,
                        name: "tattooAndPiercing",
                        ru_name: "Тату и пирсинг"
                    },
                    {
                        id: 50,
                        name: "tattoo",
                        ru_name: "Татуаж"
                    },
                    {
                        id: 51,
                        name: "nursingServices",
                        ru_name: "Услуги медсестер"
                    },
                    {
                        id: 52,
                        name: "hairdresserServices",
                        ru_name: "Услуги парикмахера"
                    },
                    {
                        id: 53,
                        name: "otherServices",
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 6,
                name: 'computerServices',
                ru_name: "Компьютерные услуги",
                type: [
                    {
                        id: 54,
                        name: "ITOutsourcing",
                        ru_name: "IT аутсорсинг"
                    },
                    {
                        id: 55,
                        name: "webDesignBrandArt",
                        ru_name: "Веб-Дизайн, бренд, арт"
                    },
                    {
                        id: 56,
                        name: "layoutDesigner",
                        ru_name: "Верстальщик"
                    },
                    {
                        id: 57,
                        name: "designers",
                        ru_name: "Дизайнеры"
                    },
                    {
                        id: 58,
                        name: "computerHelpAndPCSetup",
                        ru_name: "Компьютерная помощь и настройка ПК"
                    },
                    {
                        id: 59,
                        name: "typingDataEntry",
                        ru_name: "Набор текста, ввод данных"
                    },
                    {
                        id: 60,
                        name: "PCAssembly",
                        ru_name: "Сборка ПК"
                    },
                    {
                        id: 61,
                        name: "internetConnection",
                        ru_name: "Подключение Интернета"
                    },
                    {
                        id: 62,
                        name: "programmer",
                        ru_name: "Программист"
                    },
                    {
                        id: 63,
                        name: "workingWithTexts",
                        ru_name: "Работа с текстами"
                    },
                    {
                        id: 64,
                        name: "webProgrammer",
                        ru_name: "Веб-программист"
                    },
                    {
                        id: 65,
                        name: "websiteDevelopmentAndPromotion",
                        ru_name: "Создание и продвижение сайтов"
                    },
                    {
                        id: 66,
                        name: "systemAdministrator",
                        ru_name: "Системный администратор"
                    },
                    {
                        id: 67,
                        name: "installingSoftware",
                        ru_name: "Установка ПО"
                    },
                    {
                        id: 68,
                        name: 'otherServices',
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 7,
                name: 'carServices',
                ru_name: "Автоуслуги",
                type: [
                    {
                        id: 69,
                        name: "installingAudioSystem",
                        ru_name: "Установка аудио системы"
                    },
                    {
                        id: 70,
                        name: "autoGlassAndMirrors",
                        ru_name: "Автостекла и зеркала"
                    },
                    {
                        id: 71,
                        name: "autoElectrician",
                        ru_name: "Автоэлектрика"
                    },
                    {
                        id: 72,
                        name: "exhaustSystem",
                        ru_name: "Выхлопная система"
                    },
                    {
                        id: 73,
                        name: "carDiagnostics",
                        ru_name: "Диагностика авто"
                    },
                    {
                        id: 74,
                        name: "detailing",
                        ru_name: "Детейлинг"
                    },
                    {
                        id: 75,
                        name: "bodyworkAndCarPainting",
                        ru_name: "Кузовные работы и покраска автомобиля"
                    },
                    {
                        id: 76,
                        name: "airConditionersAndHeating",
                        ru_name: "Кондиционеры и обогрев"
                    },
                    {
                        id: 77,
                        name: "fluidChange",
                        ru_name: "Замена жидкостей"
                    },
                    {
                        id: 78,
                        name: "carPainting",
                        ru_name: "Покраска авто"
                    },
                    {
                        id: 79,
                        name: "engineAndChassisRepair",
                        ru_name: "Ремонт двигателя и ходовой"
                    },
                    {
                        id: 80,
                        name: "repairMotorVehicles",
                        ru_name: "Ремонт мототехники"
                    },
                    {
                        id: 81,
                        name: "steeringRepair",
                        ru_name: "Ремонт рулевого управления"
                    },
                    {
                        id: 82,
                        name: "fuelSystemRepair",
                        ru_name: "Ремонт топливной системы"
                    },
                    {
                        id: 83,
                        name: "tuning",
                        ru_name: "Тюнинг и установка доп. оборудования"
                    },
                    {
                        id: 84,
                        name: "maintenance",
                        ru_name: "Техническое обслуживание"
                    },
                    {
                        id: 85,
                        name: "dryCleaningAndCarWash",
                        ru_name: "Химчистка, полировка и мойка авто"
                    },
                    {
                        id: 86,
                        name: "tireServiceAndWheelRepair",
                        ru_name: "Шиномонтаж и ремонт дисков"
                    },
                    {
                        id: 87,
                        name: "electricalEquipment",
                        ru_name: "Электрооборудование"
                    },
                    {
                        id: 88,
                        name: "otherServices",
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 8,
                name: 'repairEquipment',
                ru_name: "Ремонт техники",
                type: [
                    {
                        id: 89,
                        name: "gasEquipmentRepair",
                        ru_name: "Ремонт газового оборудования"
                    },
                    {
                        id: 90,
                        name: "repairComputersAndLaptops",
                        ru_name: "Ремонт компьютеров и ноутбуков"
                    },
                    {
                        id: 91,
                        name: "repairSmartphonesAndPhones",
                        ru_name: "Ремонт смартфонов, телефонов"
                    },
                    {
                        id: 92,
                        name: "repairAudioAndVideoEquipment",
                        ru_name: "Ремонт телевизоров, аудио и видеотехники"
                    },
                    {
                        id: 93,
                        name: "repairOfMedicalEquipment",
                        ru_name: "Ремонт медицинского оборудования"
                    },
                    {
                        id: 94,
                        name: "photoEquipmentRepair",
                        ru_name: "Ремонт фототехники"
                    },
                    {
                        id: 95,
                        name: "repairOfMusicalInstruments",
                        ru_name: "Ремонт музыкальных инструментов"
                    },
                    {
                        id: 96,
                        name: "repairOfOpticalDevices",
                        ru_name: "Ремонт оптических приборов"
                    },
                    {
                        id: 97,
                        name: "repairOfSportsEquipment",
                        ru_name: "Ремонт спортинвентаря"
                    },
                    {
                        id: 98,
                        name: "watchRepair",
                        ru_name: "Ремонт часов"
                    },
                    {
                        id: 99,
                        name: "installationAndRepairAirConditioners",
                        ru_name: "Установка и ремонт кондиционеров"
                    },
                    {
                        id: 100,
                        name: "installationSecuritySystems",
                        ru_name: "Установка систем безопасности"
                    },
                    {
                        id: 101,
                        name: "installationAndRepairHouseholdAppliances",
                        ru_name: "Установка и ремонт бытовой техники"
                    },
                    {
                        id: 102,
                        name: "otherServices",
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 9,
                name: "training",
                ru_name: "Обучение",
                type: [
                    {
                        id: 103,
                        name: "preSchoolDevelopment",
                        ru_name: "Дошкольное развитие"
                    },
                    {
                        id: 104,
                        name: "masterClassesAndTrainings",
                        ru_name: "Мастер-классы и тренинги"
                    },
                    {
                        id: 105,
                        name: "drivingTraining",
                        ru_name: "Обучение вождению"
                    },
                    {
                        id: 106,
                        name: "languageTeaching",
                        ru_name: "Обучение языкам"
                    },
                    {
                        id: 107,
                        name: "preparationForExams",
                        ru_name: "Подготовка к экзаменам"
                    },
                    {
                        id: 108,
                        name: "professionalEducation",
                        ru_name: "Профессиональное обучение"
                    },
                    {
                        id: 109,
                        name: "musicAndTheaterLessons",
                        ru_name: "Уроки музыки и театрального мастерства"
                    },
                    {
                        id: 110,
                        name: "drawingDesignAndHandicraftLessons",
                        ru_name: "Уроки рисования, дизайна и рукоделия"
                    },
                    {
                        id: 111,
                        name: "speechTherapistAndDefectologist",
                        ru_name: "Логопед и дефектолог"
                    },
                    {
                        id: 112,
                        name: "dancing",
                        ru_name: "Танцы"
                    },
                    {
                        id: 113,
                        name: "psychologists",
                        ru_name: "Психологи"
                    },
                    {
                        id: 114,
                        name: "tutors",
                        ru_name: "Репетиторы"
                    },
                    {
                        id: 115,
                        name: "trainerServices",
                        ru_name: "Услуги тренера"
                    },
                    {
                        id: 116,
                        name: "otherServices",
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 10,
                name: "businessServices",
                ru_name: "Деловые услуги",
                type: [
                    {
                        id: 117,
                        name: "lawyer",
                        ru_name: "Адвокаты"
                    },
                    {
                        id: 118,
                        name: "marriageAgencies",
                        ru_name: "Брачные агентства"
                    },
                    {
                        id: 119,
                        name: "businessConsulting",
                        ru_name: "Бизнес-консультирование"
                    },
                    {
                        id: 120,
                        name: "brokers",
                        ru_name: "Брокеры"
                    },
                    {
                        id: 121,
                        name: "accountingAndFinance",
                        ru_name: "Бухгалтерия и финансы"
                    },
                    {
                        id: 122,
                        name: "announcers",
                        ru_name: "Дикторы"
                    },
                    {
                        id: 123,
                        name: "foreignEconomicActivityConsulting",
                        ru_name: "Консультирование ВЭД"
                    },
                    {
                        id: 124,
                        name: "productionOfSignsAndAdvertisements",
                        ru_name: "Изготовление вывесок и рекламы"
                    },
                    {
                        id: 125,
                        name: "marketingAdvertisingPR",
                        ru_name: "Маркетинг, реклама, PR"
                    },
                    {
                        id: 126,
                        name: "logisticians",
                        ru_name: "Логисты"
                    },
                    {
                        id: 127,
                        name: "occupationalSafetyAndHealth",
                        ru_name: "Охрана труда"
                    },
                    {
                        id: 128,
                        name: "valuer",
                        ru_name: "Оценщик"
                    },
                    {
                        id: 129,
                        name: "simultaneousTranslation",
                        ru_name: "Синхронный перевод"
                    },
                    {
                        id: 130,
                        name: "translationOfTexts",
                        ru_name: "Перевод текстов"
                    },
                    {
                        id: 131,
                        name: "polygraphyPrintingDesign",
                        ru_name: "Полиграфия, печать, дизайн"
                    },
                    {
                        id: 132,
                        name: "realEstateServices",
                        ru_name: "Риэлторские услуги"
                    },
                    {
                        id: 133,
                        name: "HR",
                        ru_name: "HR"
                    },
                    {
                        id: 134,
                        name: "certification",
                        ru_name: "Сертификация"
                    },
                    {
                        id: 135,
                        name: "legalServices",
                        ru_name: "Юридические услуги"
                    },
                    {
                        id: 136,
                        name: "otherServices",
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 11,
                name: "equipmentAndAttractionsRental",
                ru_name: "Организация праздников",
                type: [
                    {
                        id: 137,
                        name: "equipmentAndAttractionsRental",
                        ru_name: "Аренда оборудования и аттракционов"
                    },
                    {
                        id: 138,
                        name: "leaseSite",
                        ru_name: "Аренда площадки"
                    },
                    {
                        id: 139,
                        name: "presentersMusiciansAndArtists",
                        ru_name: "Ведущие, музыканты и артисты"
                    },
                    {
                        id: 140,
                        name: "DJs",
                        ru_name: "Диджеи"
                    },
                    {
                        id: 141,
                        name: "organizationEvents",
                        ru_name: "Организация мероприятий"
                    },
                    {
                        id: 142,
                        name: "foodPreparationAndCatering",
                        ru_name: "Приготовление еды и кейтеринг"
                    },
                    {
                        id: 143,
                        name: "suitRental",
                        ru_name: "Прокат костюмов"
                    },
                    {
                        id: 144,
                        name: "promotersAndModels",
                        ru_name: "Промоутеры и модели"
                    },
                    {
                        id: 145,
                        name: "flowersDecor",
                        ru_name: "Цветы и декор"
                    },
                    {
                        id: 146,
                        name: "otherServices",
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 12,
                name: "photoAndVideoFilming",
                ru_name: "Фото и видеосъемка",
                type: [
                    {
                        id: 147,
                        name: "videoEditor",
                        ru_name: "Видеомонтажер"
                    },
                    {
                        id: 148,
                        name: "videoOperators",
                        ru_name: "Видео операторы"
                    },
                    {
                        id: 149,
                        name: "photographers",
                        ru_name: "Фотографы"
                    },
                    {
                        id: 150,
                        name: "albumAndPhotobookPrinting",
                        ru_name: "Печать альбомов и фотокниг"
                    },
                    {
                        id: 151,
                        name: "advertisingPhotography",
                        ru_name: "Рекламная фотосъемка"
                    },
                    {
                        id: 152,
                        name: "promotionalVideo",
                        ru_name: "Рекламное видео"
                    },
                    {
                        id: 153,
                        name: "photoRetouchingAndRestoration",
                        ru_name: "Ретушь и восстановление фото"
                    },
                    {
                        id: 154,
                        name: "weddingPhotographers",
                        ru_name: "Свадебные фотографы"
                    },
                    {
                        id: 155,
                        name: "studioPhotography",
                        ru_name: "Студийная фотосъемка"
                    },
                    {
                        id: 156,
                        name: "other",
                        ru_name: "Другое"
                    }
                ]
            },
            {
                id: 13,
                name: "Уборка",
                ru_name: "Уборка",
                type: [
                    {
                        id: 157,
                        name: "washingWindowsAndBalconies",
                        ru_name: "Мойка окон и балконов"
                    },
                    {
                        id: 158,
                        name: "workInTheGarden",
                        ru_name: "Работы в саду, на участке"
                    },
                    {
                        id: 159,
                        name: "cleaningOfApartmentsAndHouses",
                        ru_name: "Уборка квартир и домов"
                    },
                    {
                        id: 160,
                        name: "housekeepingServices",
                        ru_name: "Услуги домработницы"
                    },
                    {
                        id: 161,
                        name: "dryCleaningWashingAndIroning",
                        ru_name: "Химчистка, стирка и глажка"
                    },
                    {
                        id: 162,
                        name: "disinfection",
                        ru_name: "Дезинфекция"
                    },
                    {
                        id: 163,
                        name: "otherServices",
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 14,
                name: "manufacturingToOrder",
                ru_name: "Изготовление на заказ",
                type: [
                    {
                        id: 164,
                        name: "manufactureAndRepairClothesAccessories",
                        ru_name: "Изготовление и ремонт одежды, обуви, аксессуаров"
                    },
                    {
                        id: 165,
                        name: "forgedProductsToOrder",
                        ru_name: "Кованые изделия на заказ"
                    },
                    {
                        id: 166,
                        name: "customMadeFurniture",
                        ru_name: "Мебель на заказ"
                    },
                    {
                        id: 167,
                        name: "musicPoetryAndVoiceActingToOrder",
                        ru_name: "Музыка, стихи и озвучка на заказ"
                    },
                    {
                        id: 168,
                        name: "customSealsAndStamps",
                        ru_name: "Печати и штампы на заказ"
                    },
                    {
                        id: 169,
                        name: "drawingPaintingAndGraphicsToOrder",
                        ru_name: "Рисунок, живопись и графика на заказ"
                    },
                    {
                        id: 170,
                        name: "souvenirProductsAndPrinting",
                        ru_name: "Сувенирная продукция и полиграфия"
                    },
                    {
                        id: 171,
                        name: "jewelryServices",
                        ru_name: "Ювелирные услуги"
                    },
                    {
                        id: 172,
                        name: "otherServices",
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 15,
                name: "food",
                ru_name: "Продукты питания",
                type: [
                    {
                        id: 173,
                        name: "bakingAndCakesToOrder",
                        ru_name: "Выпечка и торты на заказ"
                    },
                    {
                        id: 174,
                        name: "foodToOrder",
                        ru_name: "Еда на заказ"
                    },
                    {
                        id: 175,
                        name: "cookServices",
                        ru_name: "Услуги повара"
                    },
                    {
                        id: 176,
                        name: "otherServices",
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 16,
                name: "animalCare",
                ru_name: "Уход за животными",
                type: [
                    {
                        id: 177,
                        name: "knitting",
                        ru_name: "Вязка"
                    },
                    {
                        id: 178,
                        name: "trainingAndWalking",
                        ru_name: "Дрессировка и выгул"
                    },
                    {
                        id: 179,
                        name: "overexposure",
                        ru_name: "Передержка"
                    },
                    {
                        id: 180,
                        name: "animalGroomingAndGrooming",
                        ru_name: "Стрижка и уход за животными"
                    },
                    {
                        id: 181,
                        name: "otherServices",
                        ru_name: "Другие услуги"
                    }
                ]
            },
            {
                id: 17,
                name: "Другое",
                ru_name: "other"
            }
        ]
    },
    {
        id: 7,
        name: 'goods',
        ru_name: 'Вещи, Детские товары и украшения',
        has_auction: true,
        icon: {url: Goods},
        smallIcon: <HangerIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'womenWardrobe',
                ru_name: 'Женский гардероб',
                type: [
                    {
                        id: 1,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 2,
                        name: 'blouses',
                        ru_name: 'Блузы'
                    },
                    {
                        id: 3,
                        name: 'shirts',
                        ru_name: 'Рубашки'
                    },
                    {
                        id: 4,
                        name: 'expectantMothers',
                        ru_name: 'Будущим мамам'
                    },
                    {
                        id: 5,
                        name: 'outerwear',
                        ru_name: 'Верхняя одежда'
                    },
                    {
                        id: 6,
                        name: 'hats',
                        ru_name: 'Головные уборы'
                    },
                    {
                        id: 7,
                        name: 'homeClothes',
                        ru_name: 'Домашняя одежда'
                    },
                    {
                        id: 8,
                        name: 'overalls',
                        ru_name: 'Комбинезоны'
                    },
                    {
                        id: 9,
                        name: 'swimwear',
                        ru_name: 'Купальники'
                    },
                    {
                        id: 10,
                        name: 'underwear',
                        ru_name: 'Нижнее белье'
                    },
                    {
                        id: 11,
                        name: 'footwear',
                        ru_name: 'Обувь'
                    },
                    {
                        id: 12,
                        name: 'blazersAndSuits',
                        ru_name: 'Пиджаки и костюмы'
                    },
                    {
                        id: 13,
                        name: 'dressesAndSkirts',
                        ru_name: 'Платья и юбки'
                    },
                    {
                        id: 14,
                        name: 'sweatersHoodies',
                        ru_name: 'Свитеры и толстовки'
                    },
                    {
                        id: 15,
                        name: 'sportswear',
                        ru_name: 'Спортивная одежда'
                    },
                    {
                        id: 16,
                        name: 'tShirtsAndTops',
                        ru_name: 'Футболки и топы'
                    },
                    {
                        id: 17,
                        name: 'pantsShorts',
                        ru_name: 'Штаны и шорты'
                    },
                    {
                        id: 18,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 2,
                name: 'mansWardrobe',
                ru_name: 'Мужской гардероб',
                type: [
                    {
                        id: 19,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 20,
                        name: 'outerwear',
                        ru_name: 'Верхняя одежда'
                    },
                    {
                        id: 21,
                        name: 'hats',
                        ru_name: 'Головные уборы'
                    },
                    {
                        id: 22,
                        name: 'homeClothes',
                        ru_name: 'Домашняя одежда'
                    },
                    {
                        id: 23,
                        name: 'overalls',
                        ru_name: 'Комбинезоны'
                    },
                    {
                        id: 24,
                        name: 'underwear',
                        ru_name: 'Нижнее белье'
                    },
                    {
                        id: 25,
                        name: 'footwear',
                        ru_name: 'Обувь'
                    },
                    {
                        id: 26,
                        name: 'blazersAndSuits',
                        ru_name: 'Пиджаки и костюмы'
                    },
                    {
                        id: 27,
                        name: 'shirts',
                        ru_name: 'Рубашки'
                    },
                    {
                        id: 28,
                        name: 'sweatersHoodies',
                        ru_name: 'Свитеры и толстовки'
                    },
                    {
                        id: 29,
                        name: 'overalls',
                        ru_name: 'Спецодежда'
                    },
                    {
                        id: 30,
                        name: 'sportswear',
                        ru_name: 'Спортивная одежда'
                    },
                    {
                        id: 31,
                        name: 'tShirtsAndPolos',
                        ru_name: 'Футболки и поло'
                    },
                    {
                        id: 32,
                        name: 'pantsAndShorts',
                        ru_name: 'Штаны и шорты'
                    },
                    {
                        id: 33,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 3,
                name: 'babyClothes',
                ru_name: 'Детская одежда',
                type: [
                    {
                        id: 34,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 35,
                        name: 'blousesAndShirts',
                        ru_name: 'Блузы и рубашки'
                    },
                    {
                        id: 36,
                        name: 'outerwear',
                        ru_name: 'Верхняя одежда'
                    },
                    {
                        id: 37,
                        name: 'hats',
                        ru_name: 'Головные уборы'
                    },
                    {
                        id: 38,
                        name: 'homeClothes',
                        ru_name: 'Домашняя одежда'
                    },
                    {
                        id: 39,
                        name: 'jumpsuitsBodysuits',
                        ru_name: 'Комбинезоны и боди'
                    },
                    {
                        id: 40,
                        name: 'envelopes',
                        ru_name: 'Конверты'
                    },
                    {
                        id: 41,
                        name: 'underwear',
                        ru_name: 'Нижнее белье'
                    },
                    {
                        id: 42,
                        name: 'footwear',
                        ru_name: 'Обувь'
                    },
                    {
                        id: 43,
                        name: 'blazersAndSuits',
                        ru_name: 'Пиджаки и костюмы'
                    },
                    {
                        id: 44,
                        name: 'dressesAndSkirts',
                        ru_name: 'Платья и юбки'
                    },
                    {
                        id: 45,
                        name: 'romperAndUndershirts',
                        ru_name: 'Ползунки и распашонки'
                    },
                    {
                        id: 46,
                        name: 'sweatersHoodies',
                        ru_name: 'Свитеры и толстовки'
                    },
                    {
                        id: 47,
                        name: 'sportswear',
                        ru_name: 'Спортивная одежда'
                    },
                    {
                        id: 48,
                        name: 'tShirts',
                        ru_name: 'Футболки'
                    },
                    {
                        id: 49,
                        name: 'pantsAndShorts',
                        ru_name: 'Штаны и шорты'
                    },
                    {
                        id: 50,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 4,
                name: 'productsForChildren',
                ru_name: 'Товары для детей и игрушки',
                type: [
                    {
                        id: 51,
                        name: 'carSeats',
                        ru_name: 'Автокресла'
                    },
                    {
                        id: 52,
                        name: 'healthAndCare',
                        ru_name: 'Здоровье и уход'
                    },
                    {
                        id: 53,
                        name: 'toysAndGames',
                        ru_name: 'Игрушки и игры'
                    },
                    {
                        id: 54,
                        name: 'strollers',
                        ru_name: 'Коляски'
                    },
                    {
                        id: 55,
                        name: 'feedingAndNutrition',
                        ru_name: 'Кормление и питание'
                    },
                    {
                        id: 56,
                        name: 'bathing',
                        ru_name: 'Купание'
                    },
                    {
                        id: 57,
                        name: 'arrangementNursery',
                        ru_name: 'Обустройство детской'
                    },
                    {
                        id: 58,
                        name: 'diapersAndPots',
                        ru_name: 'Подгузники и горшки'
                    },
                    {
                        id: 59,
                        name: 'radioAndVideoBabyMonitors',
                        ru_name: 'Радио и видеоняни'
                    },
                    {
                        id: 60,
                        name: 'productsForMothers',
                        ru_name: 'Товары для мам'
                    },
                    {
                        id: 61,
                        name: 'goodsForStudy',
                        ru_name: 'Товары для учебы'
                    },
                    {
                        id: 62,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 5,
                name: 'handmade',
                ru_name: 'Хэндмейд',
                type: [
                    {
                        id: 63,
                        name: 'cosmetics',
                        ru_name: 'Косметика'
                    },
                    {
                        id: 64,
                        name: 'decorations',
                        ru_name: 'Украшения'
                    },
                    {
                        id: 65,
                        name: 'dollsAndToys',
                        ru_name: 'Куклы и игрушки'
                    },
                    {
                        id: 66,
                        name: 'interiorDecoration',
                        ru_name: 'Оформление интерьера'
                    },
                    {
                        id: 67,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 68,
                        name: 'holidaysDecoration',
                        ru_name: 'Оформление праздников'
                    },
                    {
                        id: 69,
                        name: 'chancery',
                        ru_name: 'Канцелярия'
                    },
                    {
                        id: 70,
                        name: 'dishes',
                        ru_name: 'Посуда'
                    },
                    {
                        id: 71,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 6,
                name: 'beautyAndHealth',
                ru_name: 'Красота и здоровье',
                type: [
                    {
                        id: 72,
                        name: 'makeup',
                        ru_name: 'Макияж'
                    },
                    {
                        id: 73,
                        name: 'manicureAndPedicure',
                        ru_name: 'Маникюр и педикюр'
                    },
                    {
                        id: 74,
                        name: 'healthProducts',
                        ru_name: 'Товары для здоровья'
                    },
                    {
                        id: 75,
                        name: 'perfumery',
                        ru_name: 'Парфюмерия'
                    },
                    {
                        id: 76,
                        name: 'haircutAndHairRemoval',
                        ru_name: 'Стрижка и удаление волос'
                    },
                    {
                        id: 77,
                        name: 'hairCare',
                        ru_name: 'Уход за волосами'
                    },
                    {
                        id: 78,
                        name: 'skinCare',
                        ru_name: 'Уход за кожей'
                    },
                    {
                        id: 79,
                        name: 'hairDryersAndStyling',
                        ru_name: 'Фены и укладка'
                    },
                    {
                        id: 80,
                        name: 'tattooPermanentMakeup',
                        ru_name: 'Тату и татуаж'
                    },
                    {
                        id: 81,
                        name: 'solariumsAndTanning',
                        ru_name: 'Солярии и загар'
                    },
                    {
                        id: 82,
                        name: 'hygieneProducts',
                        ru_name: 'Средства для гигиены'
                    },
                    {
                        id: 83,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            }
        ]
    },
    {
        id: 8,
        name: 'home',
        ru_name: 'Для дома и дачи',
        has_auction: true,
        icon: {url: Home},
        smallIcon: <SofaIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'furnitureAndInterior',
                ru_name: 'Мебель и интерьер',
                type: [
                    {
                        id: 1,
                        name: 'sofasAndArmchairs',
                        ru_name: 'Диваны и кресла'
                    },
                    {
                        id: 2,
                        name: 'bedsAndMattresses',
                        ru_name: 'Кровати и матрасы'
                    },
                    {
                        id: 3,
                        name: 'kitchenSets',
                        ru_name: 'Кухонные гарнитуры'
                    },
                    {
                        id: 4,
                        name: 'lighting',
                        ru_name: 'Освещение'
                    },
                    {
                        id: 5,
                        name: 'interiorDecoration',
                        ru_name: 'Оформление интерьера'
                    },
                    {
                        id: 6,
                        name: 'securityAndAlarms',
                        ru_name: 'Охрана и сигнализации'
                    },
                    {
                        id: 7,
                        name: 'standsAndPedestals',
                        ru_name: 'Подставки и тумбы'
                    },
                    {
                        id: 8,
                        name: 'gardenFurniture',
                        ru_name: 'Садовая мебель'
                    },
                    {
                        id: 9,
                        name: 'garden',
                        ru_name: 'Сад и огород'
                    },
                    {
                        id: 10,
                        name: 'tablesAndChairs',
                        ru_name: 'Столы и стулья'
                    },
                    {
                        id: 11,
                        name: 'textilesAndCarpets',
                        ru_name: 'Текстиль и ковры'
                    },
                    {
                        id: 12,
                        name: 'wardrobesAndDressers',
                        ru_name: 'Шкафы и комоды'
                    },
                    {
                        id: 13,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 2,
                name: 'dishesAndGoodsForKitchen',
                ru_name: 'Посуда и товары для кухни',
                type: [
                    {
                        id: 14,
                        name: 'dishes',
                        ru_name: 'Посуда'
                    },
                    {
                        id: 15,
                        name: 'kitchenGoods',
                        ru_name: 'Товары для кухни'
                    },
                    {
                        id: 16,
                        name: 'householdChemicals',
                        ru_name: 'Бытовая химия'
                    },
                    {
                        id: 17,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 3,
                name: 'food',
                ru_name: 'Продукты питания'
            },
            {
                id: 4,
                name: 'repairAndConstruction',
                ru_name: 'Ремонт и строительство',
                type: [
                    {
                        id: 18,
                        name: 'doors',
                        ru_name: 'Двери'
                    },
                    {
                        id: 19,
                        name: 'measuringTools',
                        ru_name: 'Измерительные инструменты'
                    },
                    {
                        id: 20,
                        name: 'window',
                        ru_name: 'Окна'
                    },
                    {
                        id: 21,
                        name: 'heatingAndVentilation',
                        ru_name: 'Отопление и вентиляция'
                    },
                    {
                        id: 22,
                        name: 'ceilings',
                        ru_name: 'Потолки'
                    },
                    {
                        id: 23,
                        name: 'handTools',
                        ru_name: 'Ручные инструменты'
                    },
                    {
                        id: 24,
                        name: 'plumbingAndWaterSupply',
                        ru_name: 'Сантехника и водоснабжение'
                    },
                    {
                        id: 25,
                        name: 'buildingMaterials',
                        ru_name: 'Стройматериалы'
                    },
                    {
                        id: 26,
                        name: 'electrician',
                        ru_name: 'Электрика'
                    },
                    {
                        id: 27,
                        name: 'powerTools',
                        ru_name: 'Электроинструменты'
                    },
                    {
                        id: 28,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 5,
                name: 'plants',
                ru_name: 'Растения',
                type: [
                    {
                        id: 29,
                        name: 'seedlingAccessories',
                        ru_name: 'Аксессуары для рассады'
                    },
                    {
                        id: 30,
                        name: 'plantPots',
                        ru_name: 'Горшки для растений'
                    },
                    {
                        id: 31,
                        name: 'houseplants',
                        ru_name: 'Комнатные растения'
                    },
                    {
                        id: 32,
                        name: 'gardenPlants',
                        ru_name: 'Садовые растения'
                    },
                    {
                        id: 33,
                        name: 'seedsAndSeedlings',
                        ru_name: 'Семена и саженцы'
                    },
                    {
                        id: 34,
                        name: 'plantShelves',
                        ru_name: 'Полки для растений'
                    },
                    {
                        id: 35,
                        name: 'plantStands',
                        ru_name: 'Подставки для растений'
                    },
                    {
                        id: 36,
                        name: "Seedling",
                        ru_name: "Рассада"
                    },
                    {
                        id: 37,
                        name: 'chemistryForPlants',
                        ru_name: 'Химия для растений'
                    },
                    {
                        id: 38,
                        name: "soil",
                        ru_name: 'Почва'
                    },
                    {
                        id: 39,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        name: 'electronics',
        ru_name: 'Электроника',
        has_auction: true,
        icon: {url: Electronics},
        smallIcon: <ElectronicIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'phonesAndTablets',
                ru_name: 'Телефоны и планшеты',
                type: [
                    {
                        id: 1,
                        name: 'mobilePhones',
                        ru_name: 'Мобильные телефоны'
                    },
                    {
                        id: 2,
                        name: 'tablets',
                        ru_name: 'Планшеты'
                    },
                    {
                        id: 3,
                        name: 'smartWatchesAndBracelets',
                        ru_name: 'Умные часы и браслеты'
                    },
                    {
                        id: 4,
                        name: "eBooks",
                        ru_name: "Электронные книги"
                    },
                    {
                        id: 5,
                        name: 'landlineTelephones',
                        ru_name: 'Стационарные телефоны'
                    },
                    {
                        id: 6,
                        name: "walkieTalkiesAndSatellitePhones",
                        ru_name: "Рации и спутниковые телефоны"
                    },
                    {
                        id: 7,
                        name: 'spareParts',
                        ru_name: 'Запчасти'
                    },
                    {
                        id: 8,
                        name: 'externalBatteries',
                        ru_name: 'Внешние аккумуляторы'
                    },
                    {
                        id: 9,
                        name: 'chargingDevice',
                        ru_name: 'Зарядные устройства'
                    },
                    {
                        id: 10,
                        name: 'covers',
                        ru_name: 'Чехлы'
                    },
                    {
                        id: 11,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 12,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 2,
                name: 'photoAndVideoCameras',
                ru_name: 'Фото и видеокамеры',
                type: [
                    {
                        id: 13,
                        name: 'cameras',
                        ru_name: 'Фотоаппараты'
                    },
                    {
                        id: 14,
                        name: 'camcorders',
                        ru_name: 'Видеокамеры'
                    },
                    {
                        id: 15,
                        name: 'cctv',
                        ru_name: 'Видеонаблюдение'
                    },
                    {
                        id: 16,
                        name: 'lenses',
                        ru_name: 'Объективы'
                    },
                    {
                        id: 17,
                        name: 'photoFlashes',
                        ru_name: 'Фотовспышки'
                    },
                    {
                        id: 18,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 19,
                        name: 'tripodsAndStabilizers',
                        ru_name: 'Штативы и стабилизаторы'
                    },
                    {
                        id: 20,
                        name: 'studioEquipment',
                        ru_name: 'Студийное оборудование'
                    },
                    {
                        id: 21,
                        name: 'digitalPhotoFrames',
                        ru_name: 'Цифровые фоторамки'
                    },
                    {
                        id: 22,
                        name: 'compactPhotoPrinters',
                        ru_name: 'Компактные фотопринтеры'
                    },
                    {
                        id: 23,
                        name: 'binocularsAndOpticalInstruments',
                        ru_name: 'Бинокли и оптические приборы'
                    },
                    {
                        id: 24,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 3,
                name: 'tvAudioVideo',
                ru_name: 'Тв, аудио, видео',
                type: [
                    {
                        id: 25,
                        name: 'tvSets',
                        ru_name: 'Телевизоры'
                    },
                    {
                        id: 26,
                        name: 'projectors',
                        ru_name: 'Проекторы'
                    },
                    {
                        id: 27,
                        name: 'acousticsSpeakersSubwoofers',
                        ru_name: 'Акустика, колонки, сабвуферы'
                    },
                    {
                        id: 28,
                        name: 'homeCinemas',
                        ru_name: 'Домашние кинотеатры'
                    },
                    {
                        id: 29,
                        name: 'dvdBlurayAndMediaPlayers',
                        ru_name: 'DVD, Blu-ray и медиаплееры'
                    },
                    {
                        id: 30,
                        name: 'musicCentersAndRadioTapeRecorders',
                        ru_name: 'Музыкальные центры и магнитолы'
                    },
                    {
                        id: 31,
                        name: 'mp3PlayersAndPortableAudio',
                        ru_name: 'MP3-плееры и портативное аудио'
                    },
                    {
                        id: 32,
                        name: 'satelliteAndDigitalTv',
                        ru_name: 'Спутниковое и цифровое ТВ'
                    },
                    {
                        id: 33,
                        name: 'audioAmplifiersAndReceivers',
                        ru_name: 'Аудиоусилители и ресиверы'
                    },
                    {
                        id: 34,
                        name: 'headphones',
                        ru_name: 'Наушники'
                    },
                    {
                        id: 35,
                        name: 'microphones',
                        ru_name: 'Микрофоны'
                    },
                    {
                        id: 36,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 37,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 4,
                name: 'appliances',
                ru_name: 'Бытовая техника',
                type: [
                    {
                        id: 38,
                        name: 'libra',
                        ru_name: 'Весы'
                    },
                    {
                        id: 39,
                        name: 'hoods',
                        ru_name: 'Вытяжки'
                    },
                    {
                        id: 40,
                        name: 'grindingAndMixing',
                        ru_name: 'Измельчение и смешивание'
                    },
                    {
                        id: 41,
                        name: 'airConditioningEquipment',
                        ru_name: 'Климатическая техника'
                    },
                    {
                        id: 42,
                        name: 'coolersAndWaterFilters',
                        ru_name: 'Кулеры и фильтры для воды'
                    },
                    {
                        id: 43,
                        name: 'stovesAndOvens',
                        ru_name: 'Плиты и духовые шкафы'
                    },
                    {
                        id: 44,
                        name: 'dishwashers',
                        ru_name: 'Посудомоечные машины'
                    },
                    {
                        id: 45,
                        name: 'cooking',
                        ru_name: 'Приготовление еды'
                    },
                    {
                        id: 46,
                        name: 'preparationDrinks',
                        ru_name: 'Приготовление напитков'
                    },
                    {
                        id: 47,
                        name: 'vacuumCleanersAndSteamCleaners',
                        ru_name: 'Пылесосы и пароочистители'
                    },
                    {
                        id: 48,
                        name: 'washingMachines',
                        ru_name: 'Стиральные машины'
                    },
                    {
                        id: 49,
                        name: 'ironsAndGarmentCare',
                        ru_name: 'Утюги и уход за одеждой'
                    },
                    {
                        id: 50,
                        name: 'refrigerators',
                        ru_name: 'Холодильники'
                    },
                    {
                        id: 51,
                        name: 'sewingMachines',
                        ru_name: 'Швейное оборудование'
                    },
                    {
                        id: 52,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 5,
                name: 'computerTechnology',
                ru_name: 'Компьютерная техника',
                type: [
                    {
                        id: 53,
                        name: 'laptops',
                        ru_name: 'Ноутбуки'
                    },
                    {
                        id: 54,
                        name: 'computers',
                        ru_name: 'Компьютеры'
                    },
                    {
                        id: 55,
                        name: 'monitors',
                        ru_name: 'Мониторы'
                    },
                    {
                        id: 56,
                        name: 'keyboardsAndMice',
                        ru_name: 'Клавиатуры и мыши'
                    },
                    {
                        id: 57,
                        name: 'officeEquipmentAndConsumables',
                        ru_name: 'Оргтехника и расходники'
                    },
                    {
                        id: 58,
                        name: 'networkHardware',
                        ru_name: 'Сетевое оборудование'
                    },
                    {
                        id: 59,
                        name: 'multimedia',
                        ru_name: 'Мультимедиа'
                    },
                    {
                        id: 60,
                        name: 'dataStorageDevicesAndCardReaders',
                        ru_name: 'Накопители данных и картридеры'
                    },
                    {
                        id: 61,
                        name: 'steeringWheelsJoysticksGamepads',
                        ru_name: 'Рули, джойстики, геймпады'
                    },
                    {
                        id: 62,
                        name: 'componentsAndSpareParts',
                        ru_name: 'Комплектующие и запчасти'
                    },
                    {
                        id: 63,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 64,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 6,
                name: 'gamesConsolesAndPrograms',
                ru_name: 'Игры, приставки и программы',
                type: [
                    {
                        id: 65,
                        name: 'gamingConsoles',
                        ru_name: 'Игровые приставки'
                    },
                    {
                        id: 66,
                        name: 'gamesForConsolesAndPc',
                        ru_name: 'Игры для приставок'
                    },
                    {
                        id: 67,
                        name: "computerGames",
                        ru_name: "Компьютерные игры"
                    },
                    {
                        id: 68,
                        name: "programs",
                        ru_name: "Программы"
                    },
                    {
                        id: 69,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            }
        ]
    },
    {
        id: 10,
        name: 'hobbies',
        ru_name: 'Хобби и отдых',
        has_auction: true,
        icon: {url: Hobbies},
        smallIcon: <HobbyIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'tickets',
                ru_name: 'Билеты'
            },
            {
                id: 2,
                name: 'videoFilms',
                ru_name: 'Видеофильмы',
                type: [
                    {
                        id: 10,
                        name: "DVD",
                        ru_name: "DVD"
                    },
                    {
                        id: 11,
                        name: "Blu-Ray",
                        ru_name: "Blu-Ray"
                    },
                    {
                        id: 12,
                        name: "CD",
                        ru_name: "CD"
                    },
                    {
                        id: 13,
                        name: "VHSCassettes",
                        ru_name: "Кассеты VHS"
                    },
                    {
                        id: 14,
                        name: "onlineSubscription",
                        ru_name: "Онлайн подписка"
                    },
                    {
                        id: 15,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 3,
                name: 'booksAndMagazines',
                ru_name: 'Книги и журналы'
            },
            {
                id: 4,
                name: 'collecting',
                ru_name: 'Коллекционирование'
            },
            {
                id: 5,
                name: 'materialsForCreativity',
                ru_name: 'Материалы для творчества',
                type: [
                    {
                        id: 51,
                        name: "burningOut",
                        ru_name: "Выжигание"
                    },
                    {
                        id: 52,
                        name: "knitting",
                        ru_name: "Вязание"
                    },
                    {
                        id: 53,
                        name: "modelingSculpture",
                        ru_name: "Лепка, скульптура"
                    },
                    {
                        id: 54,
                        name: "weavingMacrame",
                        ru_name: "Плетение, макраме"
                    },
                    {
                        id: 55,
                        name: "origami",
                        ru_name: "Поделки из бумаги"
                    },
                    {
                        id: 56,
                        name: "woodCarving",
                        ru_name: "Резьба по дереву"
                    },
                    {
                        id: 57,
                        name: "drawingColoring",
                        ru_name: "Рисование, раскраски"
                    },
                    {
                        id: 58,
                        name: "sewingEmbroidery",
                        ru_name: "Шитье, вышивание"
                    },
                    {
                        id: 59,
                        name: "other",
                        ru_name: "Другое"
                    }
                ]
            },
            {
                id: 6,
                name: 'music',
                ru_name: 'Музыка'
            },
            {
                id: 7,
                name: 'musicalInstruments',
                ru_name: 'Музыкальные инструменты'
            },
            {
                id: 8,
                name: 'boardGames',
                ru_name: 'Настольные игры',
                type: [
                    {
                        id: 82,
                        name: "adventurers",
                        ru_name: "Бродилки"
                    },
                    {
                        id: 83,
                        name: "kidsGames",
                        ru_name: "Детские игры"
                    },
                    {
                        id: 84,
                        name: "partyGames",
                        ru_name: "Игры для вечеринок"
                    },
                    {
                        id: 85,
                        name: "cardGames",
                        ru_name: "Карточные игры"
                    },
                    {
                        id: 86,
                        name: "classicGames",
                        ru_name: "Классические игры"
                    },
                    {
                        id: 87,
                        name: "logicalGames",
                        ru_name: "Логические игры"
                    },
                    {
                        id: 88,
                        name: "gameSets",
                        ru_name: "Наборы игр"
                    },
                    {
                        id: 89,
                        name: "Puzzles",
                        ru_name: "Паззлы и головоломки"
                    },
                    {
                        id: 90,
                        name: "adventureGames",
                        ru_name: "Приключенческие игры"
                    },
                    {
                        id: 91,
                        name: "familyGames",
                        ru_name: "Семейные игры"
                    },
                    {
                        id: 92,
                        name: "wordsAndAssociations",
                        ru_name: "Слова и ассоциации"
                    },
                    {
                        id: 93,
                        name: "strategyGames",
                        ru_name: "Стратегические игры"
                    },
                    {
                        id: 94,
                        name: "footballHockeyBilliards",
                        ru_name: "Футбол, хоккей, бильярд"
                    },
                    {
                        id: 95,
                        name: "chessCheckersBackgammon",
                        ru_name: "Шахматы, шашки, нарды"
                    },
                    {
                        id: 96,
                        name: "economicGames",
                        ru_name: "Экономические игры"
                    },
                    {
                        id: 97,
                        name: "other",
                        ru_name: "Другое"
                    }
                ]
            },
            {
                id: 9,
                name: 'sportsAndRecreation',
                ru_name: 'Спорт и отдых'
            }
        ]
    },
    {
        id: 11,
        name: 'animal',
        ru_name: 'Животные',
        has_auction: true,
        icon: {url: Animal},
        smallIcon: <AnimalsIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'dogs',
                ru_name: 'Собаки'
            },
            {
                id: 2,
                name: 'cats',
                ru_name: 'Кошки'
            },
            {
                id: 3,
                name: 'birds',
                ru_name: 'Птицы'
            },
            {
                id: 4,
                name: 'rodents',
                ru_name: 'Грызуны'
            },
            {
                id: 5,
                name: 'fishes',
                ru_name: 'Рыбки'
            },
            {
                id: 6,
                name: 'farmAnimals',
                ru_name: 'Сельскохозяйственные животные'
            },
            {
                id: 7,
                name: 'otherAnimals',
                ru_name: 'Другие животные'
            },
            {
                id: 8,
                name: 'goodsForPets',
                ru_name: 'Товары для животных'
            }
        ]
    }
];
