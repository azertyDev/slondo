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
    AnimalsIcon,
    ForFreeIcon,
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
const Free = '/img/categories_img/free.png';

export const categories_list: CategoryType[] = [
    {
        id: 1,
        name: 'car',
        ru_name: 'Автомобили',
        has_auction: false,
        icon: { url: Car },
        smallIcon: <CarIcon />,
        subCategory: [
            {
                id: 1,
                name: 'madeInUzb',
                ru_name: 'Сделано в Узбекистане',
                parents: [
                    {
                        id: 1,
                        name: 'car',
                    },
                ],
            },
            {
                id: 2,
                name: 'foreignCars',
                ru_name: 'Иномарки',
                parents: [
                    {
                        id: 1,
                        name: 'car',
                    },
                ],
            },
        ],
    },
    {
        id: 2,
        name: 'transport',
        ru_name: 'Спецтехника и транспорт',
        has_auction: false,
        icon: { url: Transport },
        smallIcon: <SpecTechIcon />,
        subCategory: [
            {
                id: 1,
                name: 'motorcyclesAndMotorTech',
                ru_name: 'Мотоциклы и мототехника',
                parents: [{ id: 2, name: 'transport' }],
                type: [
                    {
                        id: 1,
                        name: 'motorcycles',
                        ru_name: 'Мотоциклы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 1, name: 'motorcyclesAndMotorTech' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'mopedsAndScooters',
                        ru_name: 'Мопеды и скутеры',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 1, name: 'motorcyclesAndMotorTech' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'quadBikes',
                        ru_name: 'Квадрациклы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 1, name: 'motorcyclesAndMotorTech' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'carting',
                        ru_name: 'Картинг',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 1, name: 'motorcyclesAndMotorTech' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'snowmobiles',
                        ru_name: 'Снегоходы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 1, name: 'motorcyclesAndMotorTech' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'buggy',
                        ru_name: 'Багги',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 1, name: 'motorcyclesAndMotorTech' },
                        ],
                    },
                ]
            },
            {
                id: 2,
                name: 'busesAndTrucks',
                ru_name: 'Автобусы и грузовики',
                parents: [{ id: 2, name: 'transport' }],
                type: [
                    {
                        id: 7,
                        name: 'buses',
                        ru_name: 'Автобусы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        id: 8,
                        name: 'minibuses',
                        ru_name: 'Микроавтобусы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        id: 9,
                        name: 'refrigeratedTruck',
                        ru_name: 'Авторефрижератор',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        id: 10,
                        name: 'motorHomes',
                        ru_name: 'Автодома',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        id: 11,
                        name: 'trucks',
                        ru_name: 'Грузовики',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        id: 12,
                        name: 'commercialTransport',
                        ru_name: 'Легкий коммерческий транспорт',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        id: 13,
                        name: 'trailers',
                        ru_name: 'Прицепы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        id: 14,
                        name: 'tractorUnits',
                        ru_name: 'Тягачи',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        id: 15,
                        name: 'foodTruck',
                        ru_name: 'Фудтрак',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                ]
            },
            {
                id: 3,
                name: 'specTech',
                ru_name: 'Спецтехника',
                parents: [{ id: 2, name: 'transport' }],
                type: [
                    {
                        id: 16,
                        name: 'aerialPlatform',
                        ru_name: 'Автовышки',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        id: 17,
                        name: 'truckCranes',
                        ru_name: 'Автокраны',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        id: 18,
                        name: 'bulldozers',
                        ru_name: 'Бульдозеры',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        id: 19,
                        name: 'utilityTechnology',
                        ru_name: 'Коммунальная техника',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        id: 20,
                        name: 'loaders',
                        ru_name: 'Погрузчики',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        id: 21,
                        name: 'agriculturalMachinery',
                        ru_name: 'Сельхозтехника',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        id: 22,
                        name: 'constructionMachinery',
                        ru_name: 'Строительная техника',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        id: 23,
                        name: 'forestryEquipment',
                        ru_name: 'Лесозаготовочная техника',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        id: 24,
                        name: 'excavators',
                        ru_name: 'Экскаваторы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        id: 25,
                        name: 'others',
                        ru_name: 'Другие',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                ]
            },
            {
                id: 4,
                name: 'waterTransport',
                ru_name: 'Водный транспорт',
                parents: [{ id: 2, name: 'transport' }],
                type: [
                    {
                        id: 26,
                        name: 'rowingBoats',
                        ru_name: 'Вёсельные лодки',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 4, name: 'waterTransport' },
                        ],
                    },
                    {
                        id: 27,
                        name: 'jetSkis',
                        ru_name: 'Гидроциклы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 4, name: 'waterTransport' },
                        ],
                    },
                    {
                        id: 28,
                        name: 'boatsAndYachts',
                        ru_name: 'Катера и яхты',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 4, name: 'waterTransport' },
                        ],
                    },
                    {
                        id: 29,
                        name: 'kayaksAndCanoes',
                        ru_name: 'Каяки и каноэ',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 4, name: 'waterTransport' },
                        ],
                    },
                    {
                        id: 30,
                        name: 'motorBoats',
                        ru_name: 'Моторные лодки',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 4, name: 'waterTransport' },
                        ],
                    },
                    {
                        id: 31,
                        name: 'inflatableBoat',
                        ru_name: 'Надувные лодки',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 4, name: 'waterTransport' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        name: 'parts',
        ru_name: 'Запчасти и аксессуары',
        has_auction: true,
        icon: { url: Parts },
        smallIcon: <PartsIcon />,
        subCategory: [
            {
                id: 1,
                name: 'forCars',
                ru_name: 'Для легковых автомобилей',
                parents: [{ id: 3, name: 'parts' }],
                type: [],
            },
            {
                id: 2,
                name: 'forMotorcyclesAndMotortech',
                ru_name: 'Для мотоциклов и мототехники',
                parents: [{ id: 3, name: 'parts' }],
                type: [
                    {
                        id: 1,
                        name: 'motorcycles',
                        ru_name: 'Мотоциклы',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 2, name: 'forMotorcyclesAndMotortech' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'mopedsAndScooters',
                        ru_name: 'Мопеды и скутеры',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 2, name: 'forMotorcyclesAndMotortech' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'quadBikes',
                        ru_name: 'Квадроциклы',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 2, name: 'forMotorcyclesAndMotortech' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'carting',
                        ru_name: 'Картинг',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 2, name: 'forMotorcyclesAndMotortech' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'snowmobiles',
                        ru_name: 'Снегоходы',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 2, name: 'forMotorcyclesAndMotortech' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'buggy',
                        ru_name: 'Багги',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 2, name: 'forMotorcyclesAndMotortech' },
                        ],
                    },
                ]
            },
            {
                id: 3,
                name: 'forBusesAndTrucks',
                ru_name: 'Для автобусов и грузовиков',
                parents: [{ id: 3, name: 'parts' }],
                type: [
                    {
                        id: 7,
                        name: 'buses',
                        ru_name: 'Автобусы',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 3, name: 'forBusesAndTrucks' },
                        ],
                    },
                    {
                        id: 8,
                        name: 'minibuses',
                        ru_name: 'Микроавтобусы',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 3, name: 'forBusesAndTrucks' },
                        ],
                    },
                    {
                        id: 9,
                        name: 'refrigeratedTruck',
                        ru_name: 'Авторефрижератор',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 3, name: 'forBusesAndTrucks' },
                        ],
                    },
                    {
                        id: 10,
                        name: 'motorHomes',
                        ru_name: 'Автодома',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 3, name: 'forBusesAndTrucks' },
                        ],
                    },
                    {
                        id: 11,
                        name: 'trucks',
                        ru_name: 'Грузовики',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 3, name: 'forBusesAndTrucks' },
                        ],
                    },
                    {
                        id: 12,
                        name: 'commercialTransport',
                        ru_name: 'Легкий коммерческий транспорт',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 3, name: 'forBusesAndTrucks' },
                        ],
                    },
                    {
                        id: 13,
                        name: 'trailers',
                        ru_name: 'Прицепы',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 3, name: 'forBusesAndTrucks' },
                        ],
                    },
                    {
                        id: 14,
                        name: 'tractorUnits',
                        ru_name: 'Тягачи',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 3, name: 'forBusesAndTrucks' },
                        ],
                    },
                    {
                        id: 15,
                        name: 'foodTruck',
                        ru_name: 'Фудтрак',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 3, name: 'forBusesAndTrucks' },
                        ],
                    },
                    {
                        id: 16,
                        name: 'others',
                        ru_name: 'Другие',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 3, name: 'forBusesAndTrucks' },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'forSpecialTech',
                ru_name: 'Для спецтехники',
                parents: [{ id: 3, name: 'parts' }],
                type: [
                    {
                        id: 17,
                        name: 'aerialPlatform',
                        ru_name: 'Автовышки',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 4, name: 'forSpecialTech' },
                        ],
                    },
                    {
                        id: 18,
                        name: 'truckCranes',
                        ru_name: 'Автокраны',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 4, name: 'forSpecialTech' },
                        ],
                    },
                    {
                        id: 19,
                        name: 'bulldozers',
                        ru_name: 'Бульдозеры',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 4, name: 'forSpecialTech' },
                        ],
                    },
                    {
                        id: 20,
                        name: 'utilityTechnology',
                        ru_name: 'Коммунальная техника',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 4, name: 'forSpecialTech' },
                        ],
                    },
                    {
                        id: 21,
                        name: 'loaders',
                        ru_name: 'Погрузчики',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 4, name: 'forSpecialTech' },
                        ],
                    },
                    {
                        id: 22,
                        name: 'agriculturalMachinery',
                        ru_name: 'Сельхозтехника',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 4, name: 'forSpecialTech' },
                        ],
                    },
                    {
                        id: 23,
                        name: 'constructionMachinery',
                        ru_name: 'Строительная техника',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 4, name: 'forSpecialTech' },
                        ],
                    },
                    {
                        id: 24,
                        name: 'forestryEquipment',
                        ru_name: 'Лесозаготовочная техника',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 4, name: 'forSpecialTech' },
                        ],
                    },
                    {
                        id: 25,
                        name: 'excavators',
                        ru_name: 'Экскаваторы',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 4, name: 'forSpecialTech' },
                        ],
                    },
                    {
                        id: 26,
                        name: 'others',
                        ru_name: 'Другие',
                        parents: [
                            { id: 3, name: 'parts' },
                            { id: 4, name: 'forSpecialTech' },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'forWaterTransport',
                ru_name: 'Для водного транспорта',
                parents: [{ id: 3, name: 'parts' }],
            },
        ]
    },
    {
        id: 4,
        name: 'estate',
        ru_name: 'Недвижимость',
        has_auction: false,
        icon: { url: Estate },
        smallIcon: <ApartmentsIcon />,
        subCategory: [
            {
                id: 1,
                name: 'apartments',
                ru_name: 'Квартиры',
                parents: [{ id: 4, name: 'estate' }],
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        ru_name: 'Продажа',
                        parents: [
                            { id: 4, name: 'estate' },
                            { id: 1, name: 'apartments' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'longTermRent',
                        ru_name: 'Аренда на длительное время',
                        parents: [
                            { id: 4, name: 'estate' },
                            { id: 1, name: 'apartments' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'dailyRent',
                        ru_name: 'Аренда по суточно',
                        parents: [
                            { id: 4, name: 'estate' },
                            { id: 1, name: 'apartments' },
                        ],
                    },
                ]
            },
            {
                id: 2,
                name: 'housesCottages',
                ru_name: 'Дома, дачи, коттеджи',
                parents: [{ id: 4, name: 'estate' }],
                type: [],
            },
            {
                id: 3,
                name: 'land',
                ru_name: 'Земельные участки',
                parents: [{ id: 4, name: 'estate' }],
                type: [],
            },
            {
                id: 4,
                name: 'parkingLotsAndBoxes',
                ru_name: 'Подземные стоянки и боксы',
                parents: [{ id: 4, name: 'estate' }],
                type: [],
            },
            {
                id: 5,
                name: 'commercialProperty',
                ru_name: 'Коммерческая недвижимость',
                parents: [{ id: 4, name: 'estate' }],
                type: [],
            },
        ],
    },
    {
        id: 5,
        name: 'job',
        ru_name: 'Работа',
        has_auction: false,
        icon: { url: Job },
        smallIcon: <JobIcon />,
        subCategory: [
            {
                id: 1,
                name: 'vacancies',
                ru_name: 'Вакансия',
                parents: [{ id: 5, name: 'job' }],
                type: [
                    {
                        id: 1,
                        name: 'autoBusiness',
                        ru_name: 'Автобизнес',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'safetyAndSecurity',
                        ru_name: 'Безопасность и охрана',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'officeStaff',
                        ru_name: 'Офисный персонал',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'topManagement',
                        ru_name: 'Высший менеджмент',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'extractionMaterials',
                        ru_name: 'Добыча сырья, энергетика',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'homeStaff',
                        ru_name: 'Домашний персонал',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 7,
                        name: 'publishersAndMedia',
                        ru_name: 'Издательства и СМИ',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 8,
                        name: 'informationTechnology',
                        ru_name: 'Информационные технологии',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 9,
                        name: 'artsAndEntertainment',
                        ru_name: 'Искусство и развлечения',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 10,
                        name: 'procurement',
                        ru_name: 'Закупки',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 11,
                        name: 'marketingAndAdvertising',
                        ru_name: 'Маркетинг и реклама',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 12,
                        name: 'medicineAndPharmaceuticals',
                        ru_name: 'Медицина и фармацевтика',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 13,
                        name: 'careerStart',
                        ru_name: 'Начало карьеры / без опыта работы',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 14,
                        name: 'educationAndScience',
                        ru_name: 'Образование и наука',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 15,
                        name: 'handymen',
                        ru_name: 'Разнорабочие',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 16,
                        name: 'logisticsAndTransport',
                        ru_name: 'Логистика и транспорт',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 17,
                        name: 'sales',
                        ru_name: 'Продажи',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 18,
                        name: 'production',
                        ru_name: 'Производство',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 19,
                        name: 'restaurantsAndCatering',
                        ru_name: 'Рестораны и общепит',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 20,
                        name: 'agriculture',
                        ru_name: 'Сельское хозяйство',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 21,
                        name: 'sportsAndBeauty',
                        ru_name: 'Спорт и красота',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 22,
                        name: 'insurance',
                        ru_name: 'Страхование',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 23,
                        name: 'constructionAndRepair',
                        ru_name: 'Строительство и ремонт',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 24,
                        name: 'tourismAndHotels',
                        ru_name: 'Туризм и гостиницы',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 25,
                        name: 'Property',
                        ru_name: 'Недвижимость',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 26,
                        name: 'accountingAndFinance',
                        ru_name: 'Бухгалтерия и финансы',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 27,
                        name: 'bankingSector',
                        ru_name: 'Банковская сфера',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 28,
                        name: 'personnelManagement',
                        ru_name: 'Управление персоналом',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 29,
                        name: 'jurisprudence',
                        ru_name: 'Юриспруденция',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        id: 30,
                        name: 'others',
                        ru_name: 'Другие',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                ]
            },
            {
                id: 2,
                name: 'resume',
                ru_name: 'Резюме',
                parents: [{ id: 5, name: 'job' }],
            },
        ]
    },
    {
        id: 6,
        name: 'service',
        ru_name: 'Услуги',
        has_auction: false,
        icon: { url: Service },
        smallIcon: <ServicesIcon />,
        subCategory: [
            {
                id: 1,
                name: 'repairAndConstruction',
                ru_name: 'Ремонт и строительство',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 1,
                        name: 'interiorDesign',
                        ru_name: 'Дизайн интерьера',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'housesAndCottages',
                        ru_name: 'Дома и коттеджи',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'roofing',
                        ru_name: 'Кровельные работы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'paintingWorks',
                        ru_name: 'Малярные работы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'minorRepairs',
                        ru_name: 'Мелкий ремонт',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'stretchCeiling',
                        ru_name: 'Натяжные потолки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 7,
                        name: 'apartmentRenovation',
                        ru_name: 'Отделка квартир',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 8,
                        name: 'glazingAndWindowRepair',
                        ru_name: 'Остекление и ремонт окон',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 9,
                        name: 'designWork',
                        ru_name: 'Проектные работы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 10,
                        name: 'renovationOfApartments',
                        ru_name: 'Ремонт квартир',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 11,
                        name: 'furnitureAssembly',
                        ru_name: 'Сборка мебели',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 12,
                        name: 'weldingWorks',
                        ru_name: 'Сварочные работы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 13,
                        name: 'layingAndRepairingTiles',
                        ru_name: 'Укладка и ремонт плитки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 14,
                        name: 'carpenters',
                        ru_name: 'Плотники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 15,
                        name: 'plumbers',
                        ru_name: 'Сантехники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 16,
                        name: 'electricians',
                        ru_name: 'Электрики',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 17,
                        name: 'installationAndRepairDoors',
                        ru_name: 'Установка и ремонт дверей',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 18,
                        name: 'plasteringWorks',
                        ru_name: 'Штукатурные работы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 19,
                        name: 'pickingLocks',
                        ru_name: 'Вскрытие замков',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 20,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'masterForAnHour',
                ru_name: 'Мастер на час',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 21,
                        name: 'disinfectionAndDisinsection',
                        ru_name: 'Дезинфекция и дезинсекция',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 2, name: 'masterForAnHour' },
                        ],
                    },
                    {
                        id: 22,
                        name: 'masterForAnHour',
                        ru_name: 'Мастер на час',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 2, name: 'masterForAnHour' },
                        ],
                    },
                    {
                        id: 23,
                        name: 'babysittingAndGovernessServices',
                        ru_name: 'Услуги няни и гувернантки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 2, name: 'masterForAnHour' },
                        ],
                    },
                    {
                        id: 24,
                        name: 'nursingServices',
                        ru_name: 'Услуги сиделки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 2, name: 'masterForAnHour' },
                        ],
                    },
                    {
                        id: 25,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 2, name: 'masterForAnHour' },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'transportation',
                ru_name: 'Перевозки',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 26,
                        name: 'rentCar',
                        ru_name: 'Аренда авто',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'transportation' },
                        ],
                    },
                    {
                        id: 27,
                        name: 'rentSpecialTech',
                        ru_name: 'Аренда спецтехники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'transportation' },
                        ],
                    },
                    {
                        id: 28,
                        name: 'garbageRemoval',
                        ru_name: 'Вывоз мусора',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'transportation' },
                        ],
                    },
                    {
                        id: 29,
                        name: 'cargoTransportation',
                        ru_name: 'Грузоперевозки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'transportation' },
                        ],
                    },
                    {
                        id: 30,
                        name: 'movers',
                        ru_name: 'Грузчики',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'transportation' },
                        ],
                    },
                    {
                        id: 31,
                        name: 'distillation',
                        ru_name: 'Перегон',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'transportation' },
                        ],
                    },
                    {
                        id: 32,
                        name: 'passengerTransportation',
                        ru_name: 'Пассажирские перевозки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'transportation' },
                        ],
                    },
                    {
                        id: 33,
                        name: 'driverServices',
                        ru_name: 'Услуги водителя',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'transportation' },
                        ],
                    },
                    {
                        id: 34,
                        name: 'towTruckServices',
                        ru_name: 'Услуги эвакуатора',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'transportation' },
                        ],
                    },
                    {
                        id: 35,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'transportation' },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'beautyAndHealth',
                ru_name: 'Красота и здоровье',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 36,
                        name: 'depilationAndShugaring',
                        ru_name: 'Депиляция и шугаринг',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 37,
                        name: 'makeup',
                        ru_name: 'Макияж',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 38,
                        name: 'manicureAndPedicure',
                        ru_name: 'Маникюр и педикюр',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 39,
                        name: 'massage',
                        ru_name: 'Массаж',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 40,
                        name: 'hairExtension',
                        ru_name: 'Наращивание волос',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 41,
                        name: 'eyelashExtensionEyebrowServices',
                        ru_name: 'Наращивание ресниц, услуги бровиста',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 42,
                        name: 'spaServices',
                        ru_name: 'СПА-услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 43,
                        name: 'tattooAndPiercing',
                        ru_name: 'Тату и пирсинг',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 44,
                        name: 'hairdresserServices',
                        ru_name: 'Услуги парикмахера',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 45,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'beautyAndHealth' },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'computerServices',
                ru_name: 'Компьютерные услуги',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 46,
                        name: 'webDesign',
                        ru_name: 'Веб-Дизайн',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'computerServices' },
                        ],
                    },
                    {
                        id: 47,
                        name: 'computerHelpAndPCSetup',
                        ru_name: 'Компьютерная помощь и настройка ПК',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'computerServices' },
                        ],
                    },
                    {
                        id: 48,
                        name: 'typing',
                        ru_name: 'Набор текста',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'computerServices' },
                        ],
                    },
                    {
                        id: 49,
                        name: 'pcAssembly',
                        ru_name: 'Сборка ПК',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'computerServices' },
                        ],
                    },
                    {
                        id: 50,
                        name: 'internetConnection',
                        ru_name: 'Подключение Интернета',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'computerServices' },
                        ],
                    },
                    {
                        id: 51,
                        name: 'websiteDevelopmentAndPromotion',
                        ru_name: 'Создание и продвижение сайтов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'computerServices' },
                        ],
                    },
                    {
                        id: 52,
                        name: 'installingSoftware',
                        ru_name: 'Установка ПО',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'computerServices' },
                        ],
                    },
                    {
                        id: 53,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'computerServices' },
                        ],
                    },
                ],
            },
            {
                id: 6,
                name: 'carServices',
                ru_name: 'Автоуслуги',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 54,
                        name: 'installingAudioSystem',
                        ru_name: 'Установка аудио системы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 55,
                        name: 'autoGlassAndMirrors',
                        ru_name: 'Автостекла и зеркала',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 56,
                        name: 'autoElectrician',
                        ru_name: 'Автоэлектрика',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 57,
                        name: 'carDiagnostics',
                        ru_name: 'Диагностика авто',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 58,
                        name: 'bodyworkAndCarPainting',
                        ru_name: 'Кузовные работы и покраска автомобиля',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 59,
                        name: 'airConditionersAndHeating',
                        ru_name: 'Кондиционеры и обогрев',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 60,
                        name: 'carPainting',
                        ru_name: 'Покраска авто',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 61,
                        name: 'engineAndChassisRepair',
                        ru_name: 'Ремонт двигателя и ходовой',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 62,
                        name: 'repairMotorVehicles',
                        ru_name: 'Ремонт мототехники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 63,
                        name: 'steeringRepair',
                        ru_name: 'Ремонт рулевого управления',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 64,
                        name: 'fuelSystemRepair',
                        ru_name: 'Ремонт топливной системы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 65,
                        name: 'tuning',
                        ru_name: 'Тюнинг и установка доп. оборудования',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 66,
                        name: 'maintenance',
                        ru_name: 'Техническое обслуживание',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 67,
                        name: 'dryCleaningAndCarWash',
                        ru_name: 'Химчистка, полировка и мойка авто',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 68,
                        name: 'tireServiceAndWheelRepair',
                        ru_name: 'Шиномонтаж и ремонт дисков',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 69,
                        name: 'electricalEquipment',
                        ru_name: 'Электрооборудование',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                    {
                        id: 70,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'carServices' },
                        ],
                    },
                ],
            },
            {
                id: 7,
                name: 'repairEquipment',
                ru_name: 'Ремонт техники',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 71,
                        name: 'gasEquipmentRepair',
                        ru_name: 'Ремонт газового оборудования',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'repairEquipment' },
                        ],
                    },
                    {
                        id: 72,
                        name: 'repairComputersAndLaptops',
                        ru_name: 'Ремонт компьютеров и ноутбуков',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'repairEquipment' },
                        ],
                    },
                    {
                        id: 73,
                        name: 'repairSmartphonesAndPhones',
                        ru_name: 'Ремонт смартфонов и телефонов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'repairEquipment' },
                        ],
                    },
                    {
                        id: 74,
                        name: 'repairAudioAndVideoEquipment',
                        ru_name: 'Ремонт телевизоров, аудио и -видеотехники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'repairEquipment' },
                        ],
                    },
                    {
                        id: 75,
                        name: 'photoEquipmentRepair',
                        ru_name: 'Ремонт фототехники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'repairEquipment' },
                        ],
                    },
                    {
                        id: 76,
                        name: 'watchRepair',
                        ru_name: 'Ремонт часов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'repairEquipment' },
                        ],
                    },
                    {
                        id: 77,
                        name: 'installationAndRepairAirConditioners',
                        ru_name: 'Установка и ремонт кондиционеров',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'repairEquipment' },
                        ],
                    },
                    {
                        id: 78,
                        name: 'installationSecuritySystems',
                        ru_name: 'Установка систем безопасности',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'repairEquipment' },
                        ],
                    },
                    {
                        id: 79,
                        name: 'installationAndRepairHouseholdAppliances',
                        ru_name: 'Установка и ремонт бытовой техники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'repairEquipment' },
                        ],
                    },
                    {
                        id: 80,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'repairEquipment' },
                        ],
                    },
                ],
            },
            {
                id: 8,
                name: 'training',
                ru_name: 'Обучение',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 81,
                        name: 'preSchoolDevelopment',
                        ru_name: 'Дошкольное развитие',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 82,
                        name: 'masterClassesAndTrainings',
                        ru_name: 'Мастер-классы и тренинги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 83,
                        name: 'drivingTraining',
                        ru_name: 'Обучение вождению',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 84,
                        name: 'languageTeaching',
                        ru_name: 'Обучение языкам',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 85,
                        name: 'preparationForExams',
                        ru_name: 'Подготовка к экзаменам',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 86,
                        name: 'professionalEducation',
                        ru_name: 'Профессиональное обучение',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 87,
                        name: 'musicAndTheaterLessons',
                        ru_name: 'Уроки музыки и театрального мастерства',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 88,
                        name: 'drawingDesignAndHandicraftLessons',
                        ru_name: 'Уроки рисования, дизайна и рукоделия',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 89,
                        name: 'speechTherapistAndDefectologist',
                        ru_name: 'Логопед и дефектолог',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 90,
                        name: 'dancing',
                        ru_name: 'Танцы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 91,
                        name: 'psychologists',
                        ru_name: 'Психологи',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 92,
                        name: 'tutors',
                        ru_name: 'Репетиторы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 93,
                        name: 'trainerServices',
                        ru_name: 'Услуги тренера',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                    {
                        id: 94,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'training' },
                        ],
                    },
                ],
            },
            {
                id: 9,
                name: 'businessServices',
                ru_name: 'Деловые услуги',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 95,
                        name: 'businessConsulting',
                        ru_name: 'Бизнес-консультирование',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'businessServices' },
                        ],
                    },
                    {
                        id: 96,
                        name: 'accountingAndFinance',
                        ru_name: 'Бухгалтерия и финансы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'businessServices' },
                        ],
                    },
                    {
                        id: 97,
                        name: 'foreignEconomicActivityConsulting',
                        ru_name: 'Консультирование ВЭД',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'businessServices' },
                        ],
                    },
                    {
                        id: 98,
                        name: 'productionSignsAndAdvertisements',
                        ru_name: 'Изготовление вывесок и рекламы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'businessServices' },
                        ],
                    },
                    {
                        id: 99,
                        name: 'marketingAndAdvertising',
                        ru_name: 'Маркетинг и реклама',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'businessServices' },
                        ],
                    },
                    {
                        id: 100,
                        name: 'translationTexts',
                        ru_name: 'Перевод текстов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'businessServices' },
                        ],
                    },
                    {
                        id: 101,
                        name: 'polygraphy',
                        ru_name: 'Полиграфия',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'businessServices' },
                        ],
                    },
                    {
                        id: 102,
                        name: 'realtor',
                        ru_name: 'Риэлторские услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'businessServices' },
                        ],
                    },
                    {
                        id: 103,
                        name: 'composing',
                        ru_name: 'Составление я',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'businessServices' },
                        ],
                    },
                    {
                        id: 104,
                        name: 'legalServices',
                        ru_name: 'Юридические услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'businessServices' },
                        ],
                    },
                    {
                        id: 105,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'businessServices' },
                        ],
                    },
                ],
            },
            {
                id: 10,
                name: 'equipmentAndAttractionsRental',
                ru_name: 'Организация праздников',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 106,
                        name: 'equipmentAndAttractionsRental',
                        ru_name: 'Аренда оборудования и аттракционов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'equipmentAndAttractionsRental' },
                        ],
                    },
                    {
                        id: 107,
                        name: 'leaseSite',
                        ru_name: 'Аренда площадки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'equipmentAndAttractionsRental' },
                        ],
                    },
                    {
                        id: 108,
                        name: 'presentersMusiciansAndArtists',
                        ru_name: 'Ведущие, музыканты и артисты',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'equipmentAndAttractionsRental' },
                        ],
                    },
                    {
                        id: 109,
                        name: 'organizationEvents',
                        ru_name: 'Организация мероприятий',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'equipmentAndAttractionsRental' },
                        ],
                    },
                    {
                        id: 110,
                        name: 'foodPreparationAndCatering',
                        ru_name: 'Приготовление еды и кейтеринг',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'equipmentAndAttractionsRental' },
                        ],
                    },
                    {
                        id: 111,
                        name: 'suitRental',
                        ru_name: 'Прокат костюмов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'equipmentAndAttractionsRental' },
                        ],
                    },
                    {
                        id: 112,
                        name: 'promotersAndModels',
                        ru_name: 'Промоутеры и модели',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'equipmentAndAttractionsRental' },
                        ],
                    },
                    {
                        id: 113,
                        name: 'tourismRest',
                        ru_name: 'Туризм и отдых',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'equipmentAndAttractionsRental' },
                        ],
                    },
                    {
                        id: 114,
                        name: 'flowersDecor',
                        ru_name: 'Цветы и декор',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'equipmentAndAttractionsRental' },
                        ],
                    },
                    {
                        id: 115,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'equipmentAndAttractionsRental' },
                        ],
                    },
                ],
            },
            {
                id: 11,
                name: 'photoAndVideoFilming',
                ru_name: 'Фото и видеосъемка',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 141,
                        name: 'videoEditor',
                        ru_name: 'Видеомонтажер',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 11, name: 'photoAndVideoFilming' },
                        ],
                    },
                ],
            },
            {
                id: 12,
                name: 'cleaning',
                ru_name: 'Уборка',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 116,
                        name: 'washingWindowsAndBalconies',
                        ru_name: 'Мойка окон и балконов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 12, name: 'cleaning' },
                        ],
                    },
                    {
                        id: 117,
                        name: 'cleaningApartments',
                        ru_name: 'Уборка квартир',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 12, name: 'cleaning' },
                        ],
                    },
                    {
                        id: 118,
                        name: 'houseCleaning',
                        ru_name: 'Уборка домов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 12, name: 'cleaning' },
                        ],
                    },
                    {
                        id: 119,
                        name: 'housekeepingServices',
                        ru_name: 'Услуги домработницы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 12, name: 'cleaning' },
                        ],
                    },
                    {
                        id: 120,
                        name: 'dryCleaningWashingAndIroning',
                        ru_name: 'Химчистка, стирка и глажка',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 12, name: 'cleaning' },
                        ],
                    },
                    {
                        id: 121,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 12, name: 'cleaning' },
                        ],
                    },
                ],
            },
            {
                id: 13,
                name: 'manufacturingToOrder',
                ru_name: 'Изготовление на заказ',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 122,
                        name: 'manufactureAndRepairClothesAccessories',
                        ru_name: 'Изготовление и ремонт одежды, обуви, аксессуаров',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'manufacturingToOrder' },
                        ],
                    },
                    {
                        id: 123,
                        name: 'forgedProductsToOrder',
                        ru_name: 'Кованые изделия на заказ',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'manufacturingToOrder' },
                        ],
                    },
                    {
                        id: 124,
                        name: 'customMadeFurniture',
                        ru_name: 'Мебель на заказ',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'manufacturingToOrder' },
                        ],
                    },
                    {
                        id: 125,
                        name: 'musicPoetryAndVoiceActingToOrder',
                        ru_name: 'Музыка, стихи и озвучка на заказ',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'manufacturingToOrder' },
                        ],
                    },
                    {
                        id: 126,
                        name: 'customSealsAndStamps',
                        ru_name: 'Печати и штампы на заказ',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'manufacturingToOrder' },
                        ],
                    },
                    {
                        id: 127,
                        name: 'drawingPaintingAndGraphicsToOrder',
                        ru_name: 'Рисунок, живопись и графика на заказ',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'manufacturingToOrder' },
                        ],
                    },
                    {
                        id: 128,
                        name: 'souvenirProductsAndPrinting',
                        ru_name: 'Сувенирная продукция и полиграфия',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'manufacturingToOrder' },
                        ],
                    },
                    {
                        id: 129,
                        name: 'jewelryServices',
                        ru_name: 'Ювелирные услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'manufacturingToOrder' },
                        ],
                    },
                    {
                        id: 130,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'manufacturingToOrder' },
                        ],
                    },
                ],
            },
            {
                id: 14,
                name: 'food',
                ru_name: 'Продукты питания',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 131,
                        name: 'bakingAndCakesToOrder',
                        ru_name: 'Выпечка и торты на заказ',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 14, name: 'food' },
                        ],
                    },
                    {
                        id: 132,
                        name: 'food',
                        ru_name: 'Продукты питания',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 14, name: 'food' },
                        ],
                    },
                    {
                        id: 133,
                        name: 'cookServices',
                        ru_name: 'Услуги повара',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 14, name: 'food' },
                        ],
                    },
                    {
                        id: 134,
                        name: 'teaAndCoffee',
                        ru_name: 'Чай и кофе',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 14, name: 'food' },
                        ],
                    },
                    {
                        id: 135,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 14, name: 'food' },
                        ],
                    },
                ],
            },
            {
                id: 15,
                name: 'animalCare',
                ru_name: 'Уход за животными',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        id: 136,
                        name: 'knitting',
                        ru_name: 'Вязка',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 15, name: 'animalCare' },
                        ],
                    },
                    {
                        id: 137,
                        name: 'trainingAndWalking',
                        ru_name: 'Дрессировка и выгул',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 15, name: 'animalCare' },
                        ],
                    },
                    {
                        id: 138,
                        name: 'overexposure',
                        ru_name: 'Передержка',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 15, name: 'animalCare' },
                        ],
                    },
                    {
                        id: 139,
                        name: 'animalGroomingAndGrooming',
                        ru_name: 'Стрижка и уход за животными',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 15, name: 'animalCare' },
                        ],
                    },
                    {
                        id: 140,
                        name: 'otherServices',
                        ru_name: 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 15, name: 'animalCare' },
                        ],
                    },
                ],
            },
            {
                id: 16,
                name: 'babysittersAndNurses',
                ru_name: 'Няни и сиделки',
                parents: [{ id: 6, name: 'service' }],
            },
        ]
    },
    {
        id: 7,
        name: 'goods',
        ru_name: 'Вещи, Детские товары и украшения',
        has_auction: true,
        icon: { url: Goods },
        smallIcon: <HangerIcon />,
        subCategory: [
            {
                id: 1,
                name: 'womenWardrobe',
                ru_name: 'Женский гардероб',
                parents: [{ id: 7, name: 'goods' }],
                type: [
                    {
                        id: 1,
                        name: 'accessories',
                        ru_name: 'Аксессуары',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'blouses',
                        ru_name: 'Блузы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'shirts',
                        ru_name: 'Рубашки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'expectantMothers',
                        ru_name: 'Будущим мамам',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'outerwear',
                        ru_name: 'Верхняя одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'hats',
                        ru_name: 'Головные уборы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 7,
                        name: 'homeClothes',
                        ru_name: 'Домашняя одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 8,
                        name: 'overalls',
                        ru_name: 'Комбинезоны',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 9,
                        name: 'swimwear',
                        ru_name: 'Купальники',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 10,
                        name: 'underwear',
                        ru_name: 'Нижнее белье',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 11,
                        name: 'footwear',
                        ru_name: 'Обувь',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 12,
                        name: 'blazersAndSuits',
                        ru_name: 'Пиджаки и костюмы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 13,
                        name: 'dressesAndSkirts',
                        ru_name: 'Платья и юбки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 14,
                        name: 'sweatersHoodies',
                        ru_name: 'Свитеры и толстовки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 15,
                        name: 'sportswear',
                        ru_name: 'Спортивная одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 16,
                        name: 'tShirtsAndTops',
                        ru_name: 'Футболки и топы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 17,
                        name: 'pantsShorts',
                        ru_name: 'Штаны и шорты',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 18,
                        name: 'other',
                        ru_name: 'Другое',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 19,
                        name: 'handbags',
                        ru_name: 'Сумки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 20,
                        name: 'decorations',
                        ru_name: 'Украшения',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        id: 86,
                        name: 'blouses',
                        ru_name: 'Блузы и рубашки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'mansWardrobe',
                ru_name: 'Мужской гардероб',
                parents: [{ id: 7, name: 'goods' }],
                type: [
                    {
                        id: 21,
                        name: 'accessories',
                        ru_name: 'Аксессуары',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 22,
                        name: 'outerwear',
                        ru_name: 'Верхняя одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 23,
                        name: 'hats',
                        ru_name: 'Головные уборы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 24,
                        name: 'homeClothes',
                        ru_name: 'Домашняя одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 25,
                        name: 'overalls',
                        ru_name: 'Комбинезоны',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 26,
                        name: 'underwear',
                        ru_name: 'Нижнее белье',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 27,
                        name: 'footwear',
                        ru_name: 'Обувь',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 28,
                        name: 'blazersAndSuits',
                        ru_name: 'Пиджаки и костюмы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 29,
                        name: 'shirts',
                        ru_name: 'Рубашки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 30,
                        name: 'sweatersHoodies',
                        ru_name: 'Свитеры и толстовки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 31,
                        name: 'overalls',
                        ru_name: 'Спецодежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 32,
                        name: 'sportswear',
                        ru_name: 'Спортивная одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 33,
                        name: 'tShirtsAndPolos',
                        ru_name: 'Футболки и поло',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 34,
                        name: 'pantsAndShorts',
                        ru_name: 'Штаны и шорты',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                    {
                        id: 35,
                        name: 'other',
                        ru_name: 'Другое',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'mansWardrobe' },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'babyClothes',
                ru_name: 'Детская одежда',
                parents: [{ id: 7, name: 'goods' }],
                type: [
                    {
                        id: 36,
                        name: 'accessories',
                        ru_name: 'Аксессуары',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 37,
                        name: 'blousesAndShirts',
                        ru_name: 'Блузы и рубашки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 38,
                        name: 'outerwear',
                        ru_name: 'Верхняя одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 39,
                        name: 'hats',
                        ru_name: 'Головные уборы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 40,
                        name: 'homeClothes',
                        ru_name: 'Домашняя одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 41,
                        name: 'jumpsuitsBodysuits',
                        ru_name: 'Комбинезоны и боди',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 42,
                        name: 'envelopes',
                        ru_name: 'Конверты',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 43,
                        name: 'underwear',
                        ru_name: 'Нижнее белье',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 44,
                        name: 'footwear',
                        ru_name: 'Обувь',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 45,
                        name: 'blazersAndSuits',
                        ru_name: 'Пиджаки и костюмы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 46,
                        name: 'dressesAndSkirts',
                        ru_name: 'Платья и юбки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 47,
                        name: 'romperAndUndershirts',
                        ru_name: 'Ползунки и распашонки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 48,
                        name: 'sweatersHoodies',
                        ru_name: 'Свитеры и толстовки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 49,
                        name: 'sportswear',
                        ru_name: 'Спортивная одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 50,
                        name: 'tShirts',
                        ru_name: 'Футболки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 51,
                        name: 'pantsAndShorts',
                        ru_name: 'Штаны и шорты',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                    {
                        id: 52,
                        name: 'other',
                        ru_name: 'Другое',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'babyClothes' },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'productsForChildren',
                ru_name: 'Товары для детей и игрушки',
                parents: [{ id: 7, name: 'goods' }],
                type: [
                    {
                        id: 53,
                        name: 'carSeats',
                        ru_name: 'Автокресла',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'productsForChildren' },
                        ],
                    },
                    {
                        id: 54,
                        name: 'healthAndCare',
                        ru_name: 'Здоровье и уход',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'productsForChildren' },
                        ],
                    },
                    {
                        id: 55,
                        name: 'toysAndGames',
                        ru_name: 'Игрушки и игры',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'productsForChildren' },
                        ],
                    },
                    {
                        id: 56,
                        name: 'strollers',
                        ru_name: 'Коляски',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'productsForChildren' },
                        ],
                    },
                    {
                        id: 57,
                        name: 'feedingAndNutrition',
                        ru_name: 'Кормление и питание',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'productsForChildren' },
                        ],
                    },
                    {
                        id: 58,
                        name: 'bathing',
                        ru_name: 'Купание',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'productsForChildren' },
                        ],
                    },
                    {
                        id: 59,
                        name: 'arrangementNursery',
                        ru_name: 'Обустройство детской',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'productsForChildren' },
                        ],
                    },
                    {
                        id: 60,
                        name: 'diapersAndPots',
                        ru_name: 'Подгузники и горшки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'productsForChildren' },
                        ],
                    },
                    {
                        id: 61,
                        name: 'radioAndVideoBabyMonitors',
                        ru_name: 'Радио- и видеоняни',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'productsForChildren' },
                        ],
                    },
                    {
                        id: 62,
                        name: 'productsForMothers',
                        ru_name: 'Товары для мам',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'productsForChildren' },
                        ],
                    },
                    {
                        id: 63,
                        name: 'goodsForStudy',
                        ru_name: 'Товары для учебы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'productsForChildren' },
                        ],
                    },
                    {
                        id: 64,
                        name: 'other',
                        ru_name: 'Другое',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'productsForChildren' },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'handmade',
                ru_name: 'Хэндмейд',
                parents: [{ id: 7, name: 'goods' }],
                type: [
                    {
                        id: 65,
                        name: 'cosmetics',
                        ru_name: 'Косметика',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'handmade' },
                        ],
                    },
                    {
                        id: 66,
                        name: 'decorations',
                        ru_name: 'Украшения',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'handmade' },
                        ],
                    },
                    {
                        id: 67,
                        name: 'dollsAndToys',
                        ru_name: 'Куклы и игрушки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'handmade' },
                        ],
                    },
                    {
                        id: 68,
                        name: 'interiorDecoration',
                        ru_name: 'Оформление интерьера',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'handmade' },
                        ],
                    },
                    {
                        id: 69,
                        name: 'accessories',
                        ru_name: 'Аксессуары',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'handmade' },
                        ],
                    },
                    {
                        id: 70,
                        name: 'holidaysDecoration',
                        ru_name: 'Оформление праздников',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'handmade' },
                        ],
                    },
                    {
                        id: 71,
                        name: 'chancery',
                        ru_name: 'Канцелярия',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'handmade' },
                        ],
                    },
                    {
                        id: 72,
                        name: 'dishes',
                        ru_name: 'Посуда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'handmade' },
                        ],
                    },
                    {
                        id: 73,
                        name: 'other',
                        ru_name: 'Другое',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'handmade' },
                        ],
                    },
                ],
            },
            {
                id: 6,
                name: 'beautyAndHealth',
                ru_name: 'Красота и здоровье',
                parents: [{ id: 7, name: 'goods' }],
                type: [
                    {
                        id: 74,
                        name: 'makeup',
                        ru_name: 'Макияж',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 75,
                        name: 'manicureAndPedicure',
                        ru_name: 'Маникюр и педикюр',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 76,
                        name: 'healthProducts',
                        ru_name: 'Товары для здоровья',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 77,
                        name: 'perfumery',
                        ru_name: 'Парфюмерия',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 78,
                        name: 'haircutAndHairRemoval',
                        ru_name: 'Стрижка и удаление волос',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 79,
                        name: 'hairCare',
                        ru_name: 'Уход за волосами',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 80,
                        name: 'skinCare',
                        ru_name: 'Уход за кожей',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 81,
                        name: 'hairDryersAndStyling',
                        ru_name: 'Фены и укладка',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 82,
                        name: 'tattooPermanentMakeup',
                        ru_name: 'Тату и татуаж',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 83,
                        name: 'solariumsAndTanning',
                        ru_name: 'Солярии и загар',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 84,
                        name: 'hygieneProducts',
                        ru_name: 'Средства для гигиены',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'beautyAndHealth' },
                        ],
                    },
                    {
                        id: 85,
                        name: 'other',
                        ru_name: 'Другое',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'beautyAndHealth' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 8,
        name: 'home',
        ru_name: 'Для дома и дачи',
        has_auction: true,
        icon: { url: Home },
        smallIcon: <SofaIcon />,
        subCategory: [
            {
                id: 1,
                name: 'furnitureAndInterior',
                ru_name: 'Мебель и интерьер',
                parents: [{ id: 8, name: 'home' }],
                type: [
                    {
                        id: 1,
                        name: 'sofasAndArmchairs',
                        ru_name: 'Диваны и кресла',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'bedsAndMattresses',
                        ru_name: 'Кровати и матрасы',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'kitchenSets',
                        ru_name: 'Кухонные гарнитуры',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'lighting',
                        ru_name: 'Освещение',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'interiorDecoration',
                        ru_name: 'Оформление интерьера',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'securityAndAlarms',
                        ru_name: 'Охрана и сигнализации',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 7,
                        name: 'standsAndPedestals',
                        ru_name: 'Подставки и тумбы',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 8,
                        name: 'gardenFurniture',
                        ru_name: 'Садовая мебель',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 9,
                        name: 'tablesAndChairs',
                        ru_name: 'Столы и стулья',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 10,
                        name: 'textilesAndCarpets',
                        ru_name: 'Текстиль и ковры',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 11,
                        name: 'wardrobesAndDressers',
                        ru_name: 'Шкафы и комоды',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 12,
                        name: 'householdChemicals',
                        ru_name: 'Бытовая хими',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 13,
                        name: 'garden',
                        ru_name: 'Сад и огород',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        id: 14,
                        name: 'other',
                        ru_name: 'Другое',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'dishesAndGoodsForKitchen',
                ru_name: 'Посуда и товары для кухни',
                parents: [{ id: 8, name: 'home' }],
                type: [
                    {
                        id: 15,
                        name: 'dishes',
                        ru_name: 'Посуда',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 2, name: 'dishesAndGoodsForKitchen' },
                        ],
                    },
                    {
                        id: 16,
                        name: 'kitchenGoods',
                        ru_name: 'Товары для кухни',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 2, name: 'dishesAndGoodsForKitchen' },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'food',
                ru_name: 'Продукты питания',
                parents: [{ id: 8, name: 'home' }],
                type: [],
            },
            {
                id: 4,
                name: 'repairAndConstruction',
                ru_name: 'Ремонт и строительство',
                parents: [{ id: 8, name: 'home' }],
                type: [
                    {
                        id: 17,
                        name: 'doors',
                        ru_name: 'Двери',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 18,
                        name: 'measuringTools',
                        ru_name: 'Измерительные инструменты',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 19,
                        name: 'window',
                        ru_name: 'Окна',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 20,
                        name: 'heatingAndVentilation',
                        ru_name: 'Отопление и вентиляция',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 21,
                        name: 'ceilings',
                        ru_name: 'Потолки',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 22,
                        name: 'handTools',
                        ru_name: 'Ручные инструменты',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 23,
                        name: 'plumbingAndWaterSupply',
                        ru_name: 'Сантехника и водоснабжение',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 24,
                        name: 'buildingMaterials',
                        ru_name: 'Стройматериалы',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 25,
                        name: 'electrician',
                        ru_name: 'Электрика',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 26,
                        name: 'powerTools',
                        ru_name: 'Электроинструменты',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        id: 27,
                        name: 'other',
                        ru_name: 'Другое',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'repairAndConstruction' },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'plants',
                ru_name: 'Растения',
                parents: [{ id: 8, name: 'home' }],
                type: [
                    {
                        id: 28,
                        name: 'seedlingAccessories',
                        ru_name: 'Аксессуары для рассады',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'plants' },
                        ],
                    },
                    {
                        id: 29,
                        name: 'plantPots',
                        ru_name: 'Горшки для растений',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'plants' },
                        ],
                    },
                    {
                        id: 30,
                        name: 'houseplants',
                        ru_name: 'Комнатные растения',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'plants' },
                        ],
                    },
                    {
                        id: 31,
                        name: 'gardenPlants',
                        ru_name: 'Садовые растения',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'plants' },
                        ],
                    },
                    {
                        id: 32,
                        name: 'seedsAndSeedlings',
                        ru_name: 'Семена и саженцы',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'plants' },
                        ],
                    },
                    {
                        id: 33,
                        name: 'plantShelves',
                        ru_name: 'Полки для растений',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'plants' },
                        ],
                    },
                    {
                        id: 34,
                        name: 'plantStands',
                        ru_name: 'Подставки для растений',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'plants' },
                        ],
                    },
                    {
                        id: 35,
                        name: 'chemistryForPlants',
                        ru_name: 'Химия для растений',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'plants' },
                        ],
                    },
                    {
                        id: 36,
                        name: 'soil',
                        ru_name: 'Почва',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'plants' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 9,
        name: 'electronics',
        ru_name: 'Электроника',
        has_auction: true,
        icon: { url: Electronics },
        smallIcon: <ElectronicIcon />,
        subCategory: [
            {
                id: 1,
                name: 'phonesAndTablets',
                ru_name: 'Телефоны и планшеты',
                parents: [{ id: 9, name: 'electronics' }],
                type: [
                    {
                        id: 1,
                        name: 'mobilePhones',
                        ru_name: 'Мобильные телефоны',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        id: 2,
                        name: 'tablets',
                        ru_name: 'Планшеты',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        id: 3,
                        name: 'smartWatchesAndBracelets',
                        ru_name: 'Умные часы и браслеты',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        id: 4,
                        name: 'landlineTelephonesAndSatellitePhones',
                        ru_name: 'Стационарные телефоны-Рации и спутниковые телефоны',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        id: 5,
                        name: 'spareParts',
                        ru_name: 'Запчасти',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        id: 6,
                        name: 'externalBatteries',
                        ru_name: 'Внешние аккумуляторы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        id: 7,
                        name: 'chargingDevice',
                        ru_name: 'Зарядные устройства',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        id: 8,
                        name: 'covers',
                        ru_name: 'Чехлы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        id: 9,
                        name: 'accessories',
                        ru_name: 'Аксессуары',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'photoAndVideoCameras',
                ru_name: 'Фото и видеокамеры',
                parents: [{ id: 9, name: 'electronics' }],
                type: [
                    {
                        id: 10,
                        name: 'cameras',
                        ru_name: 'Фотоаппараты',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'photoAndVideoCameras' },
                        ],
                    },
                    {
                        id: 11,
                        name: 'camcorders',
                        ru_name: 'Видеокамеры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'photoAndVideoCameras' },
                        ],
                    },
                    {
                        id: 12,
                        name: 'cctv',
                        ru_name: 'Видеонаблюдение',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'photoAndVideoCameras' },
                        ],
                    },
                    {
                        id: 13,
                        name: 'lenses',
                        ru_name: 'Объективы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'photoAndVideoCameras' },
                        ],
                    },
                    {
                        id: 14,
                        name: 'photoFlashes',
                        ru_name: 'Фотовспышки',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'photoAndVideoCameras' },
                        ],
                    },
                    {
                        id: 15,
                        name: 'accessories',
                        ru_name: 'Аксессуары',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'photoAndVideoCameras' },
                        ],
                    },
                    {
                        id: 16,
                        name: 'tripodsAndStabilizers',
                        ru_name: 'Штативы и стабилизаторы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'photoAndVideoCameras' },
                        ],
                    },
                    {
                        id: 17,
                        name: 'studioEquipment',
                        ru_name: 'Студийное оборудование',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'photoAndVideoCameras' },
                        ],
                    },
                    {
                        id: 18,
                        name: 'digitalPhotoFrames',
                        ru_name: 'Цифровые фоторамки',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'photoAndVideoCameras' },
                        ],
                    },
                    {
                        id: 19,
                        name: 'compactPhotoPrinters',
                        ru_name: 'Компактные фотопринтеры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'photoAndVideoCameras' },
                        ],
                    },
                    {
                        id: 20,
                        name: 'binocularsAndOpticalInstruments',
                        ru_name: 'Бинокли и оптические приборы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'photoAndVideoCameras' },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'tvAudioVideo',
                ru_name: 'Тв, аудио, видео',
                parents: [{ id: 9, name: 'electronics' }],
                type: [
                    {
                        id: 21,
                        name: 'tvSets',
                        ru_name: 'Телевизоры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                    {
                        id: 22,
                        name: 'projectors',
                        ru_name: 'Проекторы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                    {
                        id: 23,
                        name: 'acousticsSpeakersSubwoofers',
                        ru_name: 'Акустика, колонки, сабвуферы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                    {
                        id: 24,
                        name: 'homeCinemas',
                        ru_name: 'Домашние кинотеатры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                    {
                        id: 25,
                        name: 'dvdBlurayAndMediaPlayers',
                        ru_name: 'DVD, Blu-ray и медиаплееры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                    {
                        id: 26,
                        name: 'musicCentersAndRadioTapeRecorders',
                        ru_name: 'Музыкальные центры и магнитолы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                    {
                        id: 27,
                        name: 'mp3PlayersAndPortableAudio',
                        ru_name: 'MP3-плееры и портативное аудио',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                    {
                        id: 28,
                        name: 'eBooks',
                        ru_name: 'Электронные книги',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                    {
                        id: 29,
                        name: 'satelliteAndDigitalTv',
                        ru_name: 'Спутниковое и цифровое ТВ',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                    {
                        id: 30,
                        name: 'audioAmplifiersAndReceivers',
                        ru_name: 'Аудиоусилители и ресиверы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                    {
                        id: 31,
                        name: 'headphones',
                        ru_name: 'Наушники',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                    {
                        id: 32,
                        name: 'microphones',
                        ru_name: 'Микрофоны',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                    {
                        id: 33,
                        name: 'accessories',
                        ru_name: 'Аксессуары',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'tvAudioVideo' },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'appliances',
                ru_name: 'Бытовая техника',
                parents: [{ id: 9, name: 'electronics' }],
                type: [
                    {
                        id: 34,
                        name: 'libra',
                        ru_name: 'Весы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 35,
                        name: 'hoods',
                        ru_name: 'Вытяжки',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 36,
                        name: 'grindingAndMixing',
                        ru_name: 'Измельчение и смешивание',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 37,
                        name: 'airConditioningEquipment',
                        ru_name: 'Климатическая техника',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 38,
                        name: 'coolersAndWaterFilters',
                        ru_name: 'Кулеры и фильтры для воды',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 39,
                        name: 'stovesAndOvens',
                        ru_name: 'Плиты и духовые шкафы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 40,
                        name: 'dishwashers',
                        ru_name: 'Посудомоечные машины',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 41,
                        name: 'cooking',
                        ru_name: 'Приготовление еды',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 42,
                        name: 'preparationDrinks',
                        ru_name: 'Приготовление напитков',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 43,
                        name: 'vacuumCleanersAndSteamCleaners',
                        ru_name: 'Пылесосы и пароочистители',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 44,
                        name: 'washingMachines',
                        ru_name: 'Стиральные машины',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 45,
                        name: 'ironsAndGarmentCare',
                        ru_name: 'Утюги и уход за одеждой',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 46,
                        name: 'refrigerators',
                        ru_name: 'Холодильники',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                    {
                        id: 47,
                        name: 'sewingMachines',
                        ru_name: 'Швейное оборудование',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'appliances' },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'computerTechnology',
                ru_name: 'Компьютерная техника',
                parents: [{ id: 9, name: 'electronics' }],
                type: [
                    {
                        id: 48,
                        name: 'laptops',
                        ru_name: 'Ноутбуки',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'computerTechnology' },
                        ],
                    },
                    {
                        id: 49,
                        name: 'computers',
                        ru_name: 'Компьютеры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'computerTechnology' },
                        ],
                    },
                    {
                        id: 50,
                        name: 'monitors',
                        ru_name: 'Мониторы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'computerTechnology' },
                        ],
                    },
                    {
                        id: 51,
                        name: 'keyboardsAndMice',
                        ru_name: 'Клавиатуры и мыши',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'computerTechnology' },
                        ],
                    },
                    {
                        id: 52,
                        name: 'officeEquipmentAndConsumables',
                        ru_name: 'Оргтехника и расходники',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'computerTechnology' },
                        ],
                    },
                    {
                        id: 53,
                        name: 'networkHardware',
                        ru_name: 'Сетевое оборудование',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'computerTechnology' },
                        ],
                    },
                    {
                        id: 54,
                        name: 'multimedia',
                        ru_name: 'Мультимедиа',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'computerTechnology' },
                        ],
                    },
                    {
                        id: 55,
                        name: 'dataStorageDevicesAndCardReaders',
                        ru_name: 'Накопители данных и картридеры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'computerTechnology' },
                        ],
                    },
                    {
                        id: 56,
                        name: 'software',
                        ru_name: 'Программное обеспечение',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'computerTechnology' },
                        ],
                    },
                    {
                        id: 57,
                        name: 'steeringWheelsJoysticksGamepads',
                        ru_name: 'Рули, джойстики, геймпады',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'computerTechnology' },
                        ],
                    },
                    {
                        id: 58,
                        name: 'componentsAndSpareParts',
                        ru_name: 'Комплектующие и запчасти',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'computerTechnology' },
                        ],
                    },
                    {
                        id: 59,
                        name: 'accessories',
                        ru_name: 'Аксессуары',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'computerTechnology' },
                        ],
                    },
                ],
            },
            {
                id: 6,
                name: 'gamesConsolesAndPrograms',
                ru_name: 'Игры, приставки и программы',
                parents: [{ id: 9, name: 'electronics' }],
                type: [
                    {
                        id: 60,
                        name: 'discs',
                        ru_name: 'Диски',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 6, name: 'gamesConsolesAndPrograms' },
                        ],
                    },
                    {
                        id: 61,
                        name: 'gamingConsoles',
                        ru_name: 'Игровые приставки',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 6, name: 'gamesConsolesAndPrograms' },
                        ],
                    },
                    {
                        id: 62,
                        name: 'gamesForConsolesAndPc',
                        ru_name: 'Игры для приставок и ПК',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 6, name: 'gamesConsolesAndPrograms' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 10,
        name: 'hobbies',
        ru_name: 'Хобби и отдых',
        has_auction: true,
        icon: { url: Hobbies },
        smallIcon: <HobbyIcon />,
        subCategory: [
            {
                id: 1,
                name: 'tickets',
                ru_name: 'Билеты',
                parents: [{ id: 10, name: 'hobbies' }],
            },
            {
                id: 2,
                name: 'sportsAndRecreation',
                ru_name: 'Спорт и отдых',
                parents: [{ id: 10, name: 'hobbies' }],
                type: [
                    {
                        id: 8,
                        name: 'sportsProtection',
                        ru_name: 'Спортивная защита',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 9,
                        name: 'bicycles',
                        ru_name: 'Велосипеды',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 10,
                        name: 'rollersAndSkateboarding',
                        ru_name: 'Ролики и скейтбординг',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 11,
                        name: 'scootersAndGyroScooters',
                        ru_name: 'Самокаты и гироскутеры',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 12,
                        name: 'billiardsAndBowling',
                        ru_name: 'Бильярд и боулинг',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 13,
                        name: 'waterSports',
                        ru_name: 'Водные виды спорта',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 14,
                        name: 'martialArts',
                        ru_name: 'Единоборства',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 15,
                        name: 'winterSports',
                        ru_name: 'Зимние виды спорта',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 16,
                        name: 'ballGames',
                        ru_name: 'Игры с мячом',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 17,
                        name: 'huntingAndFishing',
                        ru_name: 'Охота и рыбалка',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 18,
                        name: 'tourismAndOutdoorRecreation',
                        ru_name: 'Туризм и отдых на природе',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 19,
                        name: 'tennisBadmintonDarts',
                        ru_name: 'Теннис, бадминтон, дартс',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 20,
                        name: 'exerciseEquipmentAndFitness',
                        ru_name: 'Тренажеры и фитнес',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 21,
                        name: 'sportsNutrition',
                        ru_name: 'Спортивное питание',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                    {
                        id: 22,
                        name: 'other',
                        ru_name: 'Другое',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'sportsAndRecreation' },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'videoFilms',
                ru_name: 'Видеофильмы',
                parents: [{ id: 10, name: 'hobbies' }],
                type: [],
            },
            {
                id: 4,
                name: 'booksAndMagazines',
                ru_name: 'Книги и журналы',
                parents: [{ id: 10, name: 'hobbies' }],
                type: [],
            },
            {
                id: 5,
                name: 'collecting',
                ru_name: 'Коллекционирование',
                parents: [{ id: 10, name: 'hobbies' }],
                type: [
                    {
                        id: 32,
                        name: 'antiqueFurnitureDishes',
                        ru_name: 'Антикварная мебель, посуда',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 33,
                        name: 'banknotes',
                        ru_name: 'Банкноты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 34,
                        name: 'tickets',
                        ru_name: 'Билеты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 35,
                        name: 'celebrityThingsAutographs',
                        ru_name: 'Вещи знаменитостей, автографы',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 36,
                        name: 'vinylRecords',
                        ru_name: 'Виниловые пластинки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 37,
                        name: 'insertsStickers',
                        ru_name: 'Вкладыши, наклейки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 38,
                        name: 'militaryStuff',
                        ru_name: 'Военные вещи',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 39,
                        name: 'documents',
                        ru_name: 'Документы',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 40,
                        name: 'tokensMedalsBadges',
                        ru_name: 'Жетоны, медали, значки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 41,
                        name: 'calendars',
                        ru_name: 'Календари',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 42,
                        name: 'kinderSurprises',
                        ru_name: 'Киндер-сюрпризы',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 43,
                        name: 'booksMagazinesManuscripts',
                        ru_name: 'Книги, журналы, рукописи',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 44,
                        name: 'envelopesPostcards',
                        ru_name: 'Конверты, открытки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 45,
                        name: 'piggyBanks',
                        ru_name: 'Копилки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 46,
                        name: 'dollsToys',
                        ru_name: 'Куклы, игрушки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 47,
                        name: 'magnets',
                        ru_name: 'Магниты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 48,
                        name: 'stamps',
                        ru_name: 'Марки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 49,
                        name: 'models',
                        ru_name: 'Модели',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 50,
                        name: 'coinsNumismatics',
                        ru_name: 'Монеты, нумизматика',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 51,
                        name: 'musicalInstruments',
                        ru_name: 'Музыкальные инструменты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 52,
                        name: 'ashtraysLighters',
                        ru_name: 'Пепельницы, зажигалки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 53,
                        name: 'plasticCards',
                        ru_name: 'Пластиковые карточки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 54,
                        name: 'artObjectsPaintings',
                        ru_name: 'Предметы искусства, картины',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 55,
                        name: 'figurinesFigurines',
                        ru_name: 'Статуэтки, фигурки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 56,
                        name: 'jewelryAccessories',
                        ru_name: 'Украшения, аксессуары',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 57,
                        name: 'photosLetters',
                        ru_name: 'Фотографии, письма',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 58,
                        name: 'chessGames',
                        ru_name: 'Шахматы, игры',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 59,
                        name: 'caskets',
                        ru_name: 'Шкатулки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 60,
                        name: 'labelsBottlesCorks',
                        ru_name: 'Этикетки, бутылки, пробки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                    {
                        id: 61,
                        name: 'other',
                        ru_name: 'Другое',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'collecting' },
                        ],
                    },
                ],
            },
            {
                id: 6,
                name: 'materialsForCreativity',
                ru_name: 'Материалы для творчества',
                parents: [{ id: 10, name: 'hobbies' }],
                type: [],
            },
            {
                id: 7,
                name: 'music',
                ru_name: 'Музыка',
                parents: [{ id: 10, name: 'hobbies' }],
                type: [],
            },
            {
                id: 8,
                name: 'musicalInstruments',
                ru_name: 'Музыкальные инструменты',
                parents: [{ id: 10, name: 'hobbies' }],
                type: [
                    {
                        id: 77,
                        name: 'accordionButtonAccordions',
                        ru_name: 'Аккордеон, гармони, баяны',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 78,
                        name: 'classicalGuitars',
                        ru_name: 'Классические гитары',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 79,
                        name: 'acousticGuitars',
                        ru_name: 'Акустические гитары',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 80,
                        name: 'bassGuitars',
                        ru_name: 'Бас-гитары',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 81,
                        name: 'electricGuitars',
                        ru_name: 'Электрогитары',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 82,
                        name: 'guitarAmplification',
                        u_name: 'Гитарное усиление',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 83,
                        name: 'windInstruments',
                        ru_name: 'Духовые инструменты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 84,
                        name: 'keyboards',
                        ru_name: 'Клавишные',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 85,
                        name: 'mixingConsoles',
                        ru_name: 'Микшерные пульты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 86,
                        name: 'folkInstruments',
                        ru_name: 'Народные инструменты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 87,
                        name: 'effectsPedals',
                        ru_name: 'Педали эффектов',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 88,
                        name: 'violinsBowed',
                        ru_name: 'Скрипки, смычковые',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 89,
                        name: 'percussionInstruments',
                        ru_name: 'Ударные инструменты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                    {
                        id: 90,
                        name: 'accessories',
                        ru_name: 'Аксессуары',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'musicalInstruments' },
                        ],
                    },
                ],
            },
            {
                id: 9,
                name: 'boardGames',
                ru_name: 'Настольные игры',
                parents: [{ id: 10, name: 'hobbies' }],
                type: [],
            },
        ],
    },
    {
        id: 11,
        name: 'animal',
        ru_name: 'Животные',
        has_auction: true,
        icon: { url: Animal },
        smallIcon: <AnimalsIcon />,
        subCategory: [
            {
                id: 1,
                name: 'dogs',
                ru_name: 'Собаки',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                id: 2,
                name: 'cats',
                ru_name: 'Кошки',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                id: 3,
                name: 'birds',
                ru_name: 'Птицы',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                id: 4,
                name: 'rodents',
                ru_name: 'Грызуны',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                id: 5,
                name: 'fishes',
                ru_name: 'Рыбки',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                id: 6,
                name: 'farmAnimals',
                ru_name: 'Сельскохозяйственные животные',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                id: 7,
                name: 'otherAnimals',
                ru_name: 'Другие животные',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                id: 8,
                name: 'goodsForPets',
                ru_name: 'Товары для животных',
                parents: [{ id: 11, name: 'animal' }],
            },
        ],
    },
    {
        id: 12,
        name: 'free',
        ru_name: 'Отдам даром',
        has_auction: false,
        icon: { url: Free },
        smallIcon: <ForFreeIcon />,
    },
];
