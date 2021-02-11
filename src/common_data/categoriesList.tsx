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
} from '@src/components/elements/icons'
import { CategoryType } from '@root/interfaces/Categories'
import { PostType } from '@root/interfaces/Post'

const Car = '/img/categories_img/car.png'
const Transport = '/img/categories_img/transport.png'
const Parts = '/img/categories_img/parts.png'
const Estate = '/img/categories_img/estate.png'
const Job = '/img/categories_img/job.png'
const Service = '/img/categories_img/service.png'
const Goods = '/img/categories_img/goods.png'
const Home = '/img/categories_img/home.png'
const Electronics = '/img/categories_img/electronics.png'
const Hobbies = '/img/categories_img/hobbies.png'
const Animal = '/img/categories_img/animal.png'
const Free = '/img/categories_img/free.png'


export const categoriesList: CategoryType[] = [
    {
        id: 1,
        name: 'car',
        has_auction: false,
        icon: { url: Car },
        smallIcon: <CarIcon />,
        model: [
            {
                id: 1,
                name: 'madeInUzb',
                parents: [{ id: 1, name: 'car' }],
            },
            {
                id: 2,
                name: 'foreignCars',
                parents: [{ id: 1, name: 'car' }],
            },
        ],
    },
    {
        id: 2,
        name: 'transport',
        has_auction: false,
        icon: { url: Transport },
        smallIcon: <SpecTechIcon />,
        model: [
            {
                id: 1,
                name: 'motorcyclesAndMotorTech',
                parents: [{ id: 2, name: 'transport' }],
                type: [
                    {
                        id: 1,
                        name: 'motorcycles',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 1, name: 'motorcyclesAndMotorTech' },
                        ],
                    },
                    {
                        'id': 2,
                        'name': 'Мопеды и скутеры',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 1, name: 'motorcyclesAndMotorTech' },
                        ],
                    },
                    {
                        'id': 3,
                        'name': 'Квадроциклы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 1, name: 'motorcyclesAndMotorTech' },
                        ],
                    },
                    {
                        'id': 4,
                        'name': 'Картинг',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 1, name: 'motorcyclesAndMotorTech' },
                        ],
                    },
                    {
                        'id': 5,
                        'name': 'Снегоходы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 1, name: 'motorcyclesAndMotorTech' },
                        ],
                    },
                    {
                        'id': 6,
                        'name': 'Багги',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 1, name: 'motorcyclesAndMotorTech' },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'busesAndTrucks',
                parents: [{ id: 2, name: 'transport' }],
                type: [
                    {
                        'id': 7,
                        'name': 'Автобусы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        'id': 8,
                        'name': 'Микроавтобусы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        'id': 9,
                        'name': 'Авторефрижератор',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        'id': 10,
                        'name': 'Автодома',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        'id': 11,
                        'name': 'Грузовики',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        'id': 12,
                        'name': 'Легкий коммерческий транспорт',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        'id': 13,
                        'name': 'Прицепы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        'id': 14,
                        'name': 'Тягачи',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                    {
                        'id': 15,
                        'name': 'Фудтрак',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 2, name: 'busesAndTrucks' },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'specTech',
                parents: [{ id: 2, name: 'transport' }],
                type: [
                    {
                        'id': 16,
                        'name': 'Автовышки',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        'id': 17,
                        'name': 'Автокраны',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        'id': 18,
                        'name': 'Бульдозеры',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        'id': 19,
                        'name': 'Коммунальная техника',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        'id': 20,
                        'name': 'Погрузчики',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        'id': 21,
                        'name': 'Сельхозтехника',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        'id': 22,
                        'name': 'Строительная техника',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        'id': 23,
                        'name': 'Лесозаготовочная техника',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        'id': 24,
                        'name': 'Экскаваторы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                    {
                        'id': 25,
                        'name': 'Другие',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 3, name: 'specTech' },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'Водный транспорт',
                parents: [{ id: 2, name: 'transport' }],
                type: [
                    {
                        'id': 26,
                        'name': 'Вёсельные лодки',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 4, name: 'Водный транспорт' },
                        ],
                    },
                    {
                        'id': 27,
                        'name': 'Гидроциклы',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 4, name: 'Водный транспорт' },
                        ],
                    },
                    {
                        'id': 28,
                        'name': 'Катера и яхты',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 4, name: 'Водный транспорт' },
                        ],
                    },
                    {
                        'id': 29,
                        'name': 'Каяки и каноэ',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 4, name: 'Водный транспорт' },
                        ],
                    },
                    {
                        'id': 30,
                        'name': 'Моторные лодки',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 4, name: 'Водный транспорт' },
                        ],
                    },
                    {
                        'id': 31,
                        'name': 'Надувные лодки',
                        parents: [
                            { id: 2, name: 'transport' },
                            { id: 4, name: 'Водный транспорт' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        name: 'parts',
        has_auction: true,
        icon: { url: Parts },
        smallIcon: <PartsIcon />,
        model: [
            {
                id: 1,
                name: 'forCars',
                parents: [{ id: 3, name: 'parts' }],
                type: [],
            },
            {
                id: 2,
                name: 'Для мотоциклов и мототехники',
                parents: [{ id: 3, name: 'parts' }],
                type: [
                    {
                        'id': 1,
                        'name': 'Мотоциклы',
                        parents: [
                            { id: 2, name: 'Для мотоциклов и мототехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 2,
                        'name': 'Мопеды и скутеры',
                        parents: [
                            { id: 2, name: 'Для мотоциклов и мототехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 3,
                        'name': 'Квадроциклы',
                        parents: [
                            { id: 2, name: 'Для мотоциклов и мототехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 4,
                        'name': 'Картинг',
                        parents: [
                            { id: 2, name: 'Для мотоциклов и мототехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 5,
                        'name': 'Снегоходы',
                        parents: [
                            { id: 2, name: 'Для мотоциклов и мототехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 6,
                        'name': 'Багги',
                        parents: [
                            { id: 2, name: 'Для мотоциклов и мототехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'Для автобусов и грузовиков',
                parents: [{ id: 3, name: 'parts' }],
                type: [
                    {
                        'id': 7,
                        'name': 'Автобусы',
                        parents: [
                            { id: 3, name: 'Для автобусов и грузовиков' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 8,
                        'name': 'Микроавтобусы',
                        parents: [
                            { id: 3, name: 'Для автобусов и грузовиков' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 9,
                        'name': 'Авторефрижератор',
                        parents: [
                            { id: 3, name: 'Для автобусов и грузовиков' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 10,
                        'name': 'Автодома',
                        parents: [
                            { id: 3, name: 'Для автобусов и грузовиков' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 11,
                        'name': 'Грузовики',
                        parents: [
                            { id: 3, name: 'Для автобусов и грузовиков' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 12,
                        'name': 'Легкий коммерческий транспорт',
                        parents: [
                            { id: 3, name: 'Для автобусов и грузовиков' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 13,
                        'name': 'Прицепы',
                        parents: [
                            { id: 3, name: 'Для автобусов и грузовиков' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 14,
                        'name': 'Тягачи',
                        parents: [
                            { id: 3, name: 'Для автобусов и грузовиков' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 15,
                        'name': 'Фудтрак',
                        parents: [
                            { id: 3, name: 'Для автобусов и грузовиков' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 16,
                        'name': 'Другие',
                        parents: [
                            { id: 3, name: 'Для автобусов и грузовиков' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'Для спецтехники',
                parents: [{ id: 3, name: 'parts' }],
                type: [
                    {
                        'id': 17,
                        'name': 'Автовышки',
                        parents: [
                            { 'id': 4, 'name': 'Для спецтехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 18,
                        'name': 'Автокраны',
                        parents: [
                            { 'id': 4, 'name': 'Для спецтехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 19,
                        'name': 'Бульдозеры',
                        parents: [
                            { 'id': 4, 'name': 'Для спецтехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 20,
                        'name': 'Коммунальная техника',
                        parents: [
                            { 'id': 4, 'name': 'Для спецтехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 21,
                        'name': 'Погрузчики',
                        parents: [
                            { 'id': 4, 'name': 'Для спецтехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 22,
                        'name': 'Сельхозтехника',
                        parents: [
                            { 'id': 4, 'name': 'Для спецтехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 23,
                        'name': 'Строительная техника',
                        parents: [
                            { 'id': 4, 'name': 'Для спецтехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 24,
                        'name': 'Лесозаготовочная техника',
                        parents: [
                            { 'id': 4, 'name': 'Для спецтехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 25,
                        'name': 'Экскаваторы',
                        parents: [
                            { 'id': 4, 'name': 'Для спецтехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                    {
                        'id': 26,
                        'name': 'Другие',
                        parents: [
                            { 'id': 4, 'name': 'Для спецтехники' },
                            { id: 1, name: 'parts' },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'Для водного транспорта',
                parents: [{ id: 3, name: 'parts' }],
                type: [],

            },
        ],
    },
    {
        id: 4,
        name: 'estate',
        has_auction: false,
        icon: { url: Estate },
        smallIcon: <ApartmentsIcon />,
        model: [
            {
                id: 1,
                name: 'apartments',
                parents: [{ id: 4, name: 'estate' }],
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        parents: [
                            { id: 4, name: 'estate' },
                            { id: 1, name: 'apartments' },
                        ],
                    },
                    {
                        'id': 2,
                        'name': 'Аренда на длительное время',
                        parents: [
                            { id: 4, name: 'estate' },
                            { id: 1, name: 'apartments' },
                        ],
                    },
                    {
                        'id': 3,
                        'name': 'Аренда по суточно',
                        parents: [
                            { id: 4, name: 'estate' },
                            { id: 1, name: 'apartments' },
                        ],
                    },
                ],
            },
            {
                'id': 2,
                'name': 'Дома, дачи, коттеджи',
                parents: [{ id: 4, name: 'estate' }],
                'type': [],
            },
            {
                'id': 3,
                'name': 'Земельные участки',
                parents: [{ id: 4, name: 'estate' }],
                'type': [],
            },
            {
                'id': 4,
                'name': 'Подземные стоянки и боксы',
                parents: [{ id: 4, name: 'estate' }],
                'type': [],
            },
            {
                'id': 5,
                'name': 'Коммерческая недвижимость',
                parents: [{ id: 4, name: 'estate' }],
                'type': [],
            },
        ],
    },
    {
        id: 5,
        name: 'job',
        has_auction: false,
        icon: { url: Job },
        smallIcon: <JobIcon />,
        model: [
            {
                id: 1,
                name: 'vacancies',
                parents: [{ id: 5, name: 'job' }],
                type: [
                    {
                        id: 1,
                        name: 'autoBusiness',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 2,
                        'name': 'Безопасность и охрана',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 3,
                        'name': 'Офисный персонал',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 4,
                        'name': 'Высший менеджмент',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 5,
                        'name': 'Добыча сырья, энергетика',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 6,
                        'name': 'Домашний персонал',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 7,
                        'name': 'Издательства и СМИ',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 8,
                        'name': 'Информационные технологии',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 9,
                        'name': 'Искусство и развлечения',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 10,
                        'name': 'Закупки',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 11,
                        'name': 'Маркетинг и реклама',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 12,
                        'name': 'Медицина и фармацевтика',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 13,
                        'name': 'Начало карьеры / без опыта работы',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 14,
                        'name': 'Образование и наука',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 15,
                        'name': 'Разнорабочие',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 16,
                        'name': 'Логистика и транспорт',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 17,
                        'name': 'Продажи',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 18,
                        'name': 'Производство',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 19,
                        'name': 'Рестораны и общепит',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 20,
                        'name': 'Сельское хозяйство',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 21,
                        'name': 'Спорт и красота',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 22,
                        'name': 'Страхование',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 23,
                        'name': 'Строительство и ремонт',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 24,
                        'name': 'Туризм и гостиницы',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 25,
                        'name': 'Недвижимость',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 26,
                        'name': 'Бухгалтерия и финансы',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 27,
                        'name': 'Банковская сфера',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 28,
                        'name': 'Управление персоналом',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 29,
                        'name': 'Юриспруденция',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                    {
                        'id': 30,
                        'name': 'Другие',
                        parents: [
                            { id: 5, name: 'job' },
                            { id: 1, name: 'vacancies' },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'Резюме',
                parents: [{ id: 5, name: 'job' }],
                type: [],
            },
        ],
    },
    {
        id: 6,
        name: 'service',
        has_auction: false,
        icon: { url: Service },
        smallIcon: <ServicesIcon />,
        model: [
            {
                id: 1,
                name: 'repairAndConstruction',
                parents: [{ id: 6, name: 'Услуги' }],
                type: [
                    {
                        id: 1,
                        name: 'interiorDesign',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 2,
                        'name': 'Дома и коттеджи',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 3,
                        'name': 'Кровельные работы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 4,
                        'name': 'Малярные работы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 5,
                        'name': 'Мелкий ремонт',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 6,
                        'name': 'Натяжные потолки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 7,
                        'name': 'Отделка квартир',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 8,
                        'name': 'Остекление и ремонт окон',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 9,
                        'name': 'Проектные работы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 10,
                        'name': 'Ремонт квартир',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 11,
                        'name': 'Сборка мебели',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 12,
                        'name': 'Сварочные работы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 13,
                        'name': 'Укладка и ремонт плитки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 14,
                        'name': 'Плотники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 15,
                        'name': 'Сантехники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 16,
                        'name': 'Электрики',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 17,
                        'name': 'Установка и ремонт дверей',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 18,
                        'name': 'Штукатурные работы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 19,
                        'name': 'Вскрытие замков',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                    {
                        'id': 20,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 1, name: 'repairAndConstruction' },
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'Мастер на час',
                parents: [{ id: 6, name: 'Услуги' }],
                type: [
                    {
                        'id': 21,
                        'name': 'Дезинфекция и дезинсекция',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 2, name: 'Мастер на час' },
                        ],
                    },
                    {
                        'id': 22,
                        'name': 'Мастер на час',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 2, name: 'Мастер на час' },
                        ],
                    },
                    {
                        'id': 23,
                        'name': 'Услуги няни и гувернантки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 2, name: 'Мастер на час' },
                        ],
                    },
                    {
                        'id': 24,
                        'name': 'Услуги сиделки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 2, name: 'Мастер на час' },
                        ],
                    },
                    {
                        'id': 25,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 2, name: 'Мастер на час' },
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'Перевозки',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        'id': 26,
                        'name': 'Аренда авто',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'Перевозки' },
                        ],
                    },
                    {
                        'id': 27,
                        'name': 'Аренда спецтехники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'Перевозки' },
                        ],
                    },
                    {
                        'id': 28,
                        'name': 'Вывоз мусора',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'Перевозки' },
                        ],
                    },
                    {
                        'id': 29,
                        'name': 'Грузоперевозки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'Перевозки' },
                        ],
                    },
                    {
                        'id': 30,
                        'name': 'Грузчики',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'Перевозки' },
                        ],
                    },
                    {
                        'id': 31,
                        'name': 'Перегон',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'Перевозки' },
                        ],
                    },
                    {
                        'id': 32,
                        'name': 'Пассажирские перевозки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'Перевозки' },
                        ],
                    },
                    {
                        'id': 33,
                        'name': 'Услуги водителя',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'Перевозки' },
                        ],
                    },
                    {
                        'id': 34,
                        'name': 'Услуги эвакуатора',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'Перевозки' },
                        ],
                    },
                    {
                        'id': 35,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 3, name: 'Перевозки' },
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'Красота и здоровье',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        'id': 36,
                        'name': 'Депиляция и шугаринг',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 37,
                        'name': 'Макияж',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 38,
                        'name': 'Маникюр и педикюр',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 39,
                        'name': 'Массаж',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 40,
                        'name': 'Наращивание волос',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 41,
                        'name': 'Наращивание ресниц, услуги бровиста',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 42,
                        'name': 'СПА-услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 43,
                        'name': 'Тату и пирсинг',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 44,
                        'name': 'Услуги парикмахера',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 45,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 4, name: 'Красота и здоровье' },
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'Компьютерные услуги',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        'id': 46,
                        'name': 'Веб-Дизайн',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'Компьютерные услуги' },
                        ],
                    },
                    {
                        'id': 47,
                        'name': 'Компьютерная помощь и настройка ПК',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'Компьютерные услуги' },
                        ],
                    },
                    {
                        'id': 48,
                        'name': 'Набор текста',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'Компьютерные услуги' },
                        ],
                    },
                    {
                        'id': 49,
                        'name': 'Сборка ПК',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'Компьютерные услуги' },
                        ],
                    },
                    {
                        'id': 50,
                        'name': 'Подключение Интернета',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'Компьютерные услуги' },
                        ],
                    },
                    {
                        'id': 51,
                        'name': 'Создание и продвижение сайтов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'Компьютерные услуги' },
                        ],
                    },
                    {
                        'id': 52,
                        'name': 'Установка ПО',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'Компьютерные услуги' },
                        ],
                    },
                    {
                        'id': 53,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 5, name: 'Компьютерные услуги' },
                        ],
                    },
                ],
            },
            {
                id: 6,
                name: 'Автоуслуги',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        'id': 54,
                        'name': 'Установка аудио системы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 55,
                        'name': 'Автостекла и зеркала',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 56,
                        'name': 'Автоэлектрика',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 57,
                        'name': 'Диагностика авто',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 58,
                        'name': 'Кузовные работы и покраска автомобиля',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 59,
                        'name': 'Кондиционеры и обогрев',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 60,
                        'name': 'Покраска авто',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 61,
                        'name': 'Ремонт двигателя и ходовой',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 62,
                        'name': 'Ремонт мототехники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 63,
                        'name': 'Ремонт рулевого управления',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 64,
                        'name': 'Ремонт топливной системы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 65,
                        'name': 'Тюнинг и установка доп. оборудования',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 66,
                        'name': 'Техническое обслуживание',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 67,
                        'name': 'Химчистка, полировка и мойка авто',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 68,
                        'name': 'Шиномонтаж и ремонт дисков',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 69,
                        'name': 'Электрооборудование',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                    {
                        'id': 70,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 6, name: 'Автоуслуги' },
                        ],
                    },
                ],
            },
            {
                id: 7,
                name: 'Ремонт техники',
                parents: [{ id: 6, name: 'service' }],
                type: [
                    {
                        'id': 71,
                        'name': 'Ремонт газового оборудования',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'Ремонт техники' },
                        ],
                    },
                    {
                        'id': 72,
                        'name': 'Ремонт компьютеров и ноутбуков',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'Ремонт техники' },
                        ],
                    },
                    {
                        'id': 73,
                        'name': 'Ремонт смартфонов и телефонов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'Ремонт техники' },
                        ],
                    },
                    {
                        'id': 74,
                        'name': 'Ремонт телевизоров, аудио и -видеотехники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'Ремонт техники' },
                        ],
                    },
                    {
                        'id': 75,
                        'name': 'Ремонт фототехники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'Ремонт техники' },
                        ],
                    },
                    {
                        'id': 76,
                        'name': 'Ремонт часов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'Ремонт техники' },
                        ],
                    },
                    {
                        'id': 77,
                        'name': 'Установка и ремонт кондиционеров',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'Ремонт техники' },
                        ],
                    },
                    {
                        'id': 78,
                        'name': 'Установка систем безопасности',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'Ремонт техники' },
                        ],
                    },
                    {
                        'id': 79,
                        'name': 'Установка и ремонт бытовой техники',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'Ремонт техники' },
                        ],
                    },
                    {
                        'id': 80,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 7, name: 'Ремонт техники' },
                        ],
                    },
                ],
            },
            {
                'id': 8,
                'name': 'Обучение',
                parents: [{ id: 6, name: 'service' }],
                'type': [
                    {
                        'id': 81,
                        'name': 'Дошкольное развитие',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 82,
                        'name': 'Мастер-классы и тренинги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 83,
                        'name': 'Обучение вождению',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 84,
                        'name': 'Обучение языкам',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 85,
                        'name': 'Подготовка к экзаменам',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 86,
                        'name': 'Профессиональное обучение',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 87,
                        'name': 'Уроки музыки и театрального мастерства',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 88,
                        'name': 'Уроки рисования, дизайна и рукоделия',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 89,
                        'name': 'Логопед и дефектолог',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 90,
                        'name': 'Танцы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 91,
                        'name': 'Психологи',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 92,
                        'name': 'Репетиторы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 93,
                        'name': 'Услуги тренера',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                    {
                        'id': 94,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 8, name: 'Обучение' },
                        ],
                    },
                ],
            },
            {
                'id': 9,
                'name': 'Деловые услуги',
                parents: [{ id: 6, name: 'service' }],
                'type': [
                    {
                        'id': 95,
                        'name': 'Бизнес-консультирование',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'Деловые услуги' },
                        ],
                    },
                    {
                        'id': 96,
                        'name': 'Бухгалтерия и финансы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'Деловые услуги' },
                        ],
                    },
                    {
                        'id': 97,
                        'name': 'Консультирование ВЭД',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'Деловые услуги' },
                        ],
                    },
                    {
                        'id': 98,
                        'name': 'Изготовление вывесок и рекламы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'Деловые услуги' },
                        ],
                    },
                    {
                        'id': 99,
                        'name': 'Маркетинг и реклама',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'Деловые услуги' },
                        ],
                    },
                    {
                        'id': 100,
                        'name': 'Перевод текстов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'Деловые услуги' },
                        ],
                    },
                    {
                        'id': 101,
                        'name': 'Полиграфия',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'Деловые услуги' },
                        ],
                    },
                    {
                        'id': 102,
                        'name': 'Риэлторские услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'Деловые услуги' },
                        ],
                    },
                    {
                        'id': 103,
                        'name': 'Составление я',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'Деловые услуги' },
                        ],
                    },
                    {
                        'id': 104,
                        'name': 'Юридические услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'Деловые услуги' },
                        ],
                    },
                    {
                        'id': 105,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 9, name: 'Деловые услуги' },
                        ],
                    },
                ],
            },
            {
                'id': 10,
                'name': 'Организация праздников',
                parents: [{ id: 6, name: 'service' }],
                'type': [
                    {
                        'id': 106,
                        'name': 'Аренда оборудования и аттракционов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'Аренда оборудования и аттракционов' },
                        ],
                    },
                    {
                        'id': 107,
                        'name': 'Аренда площадки',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'Аренда оборудования и аттракционов' },
                        ],
                    },
                    {
                        'id': 108,
                        'name': 'Ведущие, музыканты и артисты',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'Аренда оборудования и аттракционов' },
                        ],
                    },
                    {
                        'id': 109,
                        'name': 'Организация мероприятий',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'Аренда оборудования и аттракционов' },
                        ],
                    },
                    {
                        'id': 110,
                        'name': 'Приготовление еды и кейтеринг',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'Аренда оборудования и аттракционов' },
                        ],
                    },
                    {
                        'id': 111,
                        'name': 'Прокат костюмов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'Аренда оборудования и аттракционов' },
                        ],
                    },
                    {
                        'id': 112,
                        'name': 'Промоутеры и модели',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'Аренда оборудования и аттракционов' },
                        ],
                    },
                    {
                        'id': 113,
                        'name': 'Туризм и отдых',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'Аренда оборудования и аттракционов' },
                        ],
                    },
                    {
                        'id': 114,
                        'name': 'Цветы и декор',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'Аренда оборудования и аттракционов' },
                        ],
                    },
                    {
                        'id': 115,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 10, name: 'Аренда оборудования и аттракционов' },
                        ],
                    },
                ],
            },
            {
                'id': 11,
                'name': 'Фото и видеосъемка',
                parents: [{ id: 6, name: 'service' }],
                'type': [
                    {
                        'id': 141,
                        'name': 'Видеомонтажер',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 11, name: 'Фото и видеосъемка' },
                        ],
                    },
                ],
            },
            {
                'id': 12,
                'name': 'Уборка',
                parents: [{ id: 6, name: 'service' }],
                'type': [
                    {
                        'id': 116,
                        'name': 'Мойка окон и балконов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 12, name: 'Уборка' },
                        ],
                    },
                    {
                        'id': 117,
                        'name': 'Уборка квартир',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 12, name: 'Уборка' },
                        ],
                    },
                    {
                        'id': 118,
                        'name': 'Уборка домов',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 12, name: 'Уборка' },
                        ],
                    },
                    {
                        'id': 119,
                        'name': 'Услуги домработницы',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 12, name: 'Уборка' },
                        ],
                    },
                    {
                        'id': 120,
                        'name': 'Химчистка, стирка и глажка',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 12, name: 'Уборка' },
                        ],
                    },
                    {
                        'id': 121,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 12, name: 'Уборка' },
                        ],
                    },
                ],
            },
            {
                'id': 13,
                'name': 'Изготовление на заказ',
                parents: [{ id: 6, name: 'service' }],
                'type': [
                    {
                        'id': 122,
                        'name': 'Изготовление и ремонт одежды, обуви, аксессуаров',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'Изготовление на заказ' },
                        ],
                    },
                    {
                        'id': 123,
                        'name': 'Кованые изделия на заказ',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'Изготовление на заказ' },
                        ],
                    },
                    {
                        'id': 124,
                        'name': 'Мебель на заказ',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'Изготовление на заказ' },
                        ],
                    },
                    {
                        'id': 125,
                        'name': 'Музыка, стихи и озвучка на заказ',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'Изготовление на заказ' },
                        ],
                    },
                    {
                        'id': 126,
                        'name': 'Печати и штампы на заказ',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'Изготовление на заказ' },
                        ],
                    },
                    {
                        'id': 127,
                        'name': 'Рисунок, живопись и графика на заказ',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'Изготовление на заказ' },
                        ],
                    },
                    {
                        'id': 128,
                        'name': 'Сувенирная продукция и полиграфия',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'Изготовление на заказ' },
                        ],
                    },
                    {
                        'id': 129,
                        'name': 'Ювелирные услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'Изготовление на заказ' },
                        ],
                    },
                    {
                        'id': 130,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 13, name: 'Изготовление на заказ' },
                        ],
                    },
                ],
            },
            {
                'id': 14,
                'name': 'Продукты питания',
                parents: [{ id: 6, name: 'service' }],
                'type': [
                    {
                        'id': 131,
                        'name': 'Выпечка и торты на заказ',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 14, name: 'Продукты питания' },
                        ],
                    },
                    {
                        'id': 132,
                        'name': 'Продукты питания',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 14, name: 'Продукты питания' },
                        ],
                    },
                    {
                        'id': 133,
                        'name': 'Услуги повара',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 14, name: 'Продукты питания' },
                        ],
                    },
                    {
                        'id': 134,
                        'name': 'Чай и кофе',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 14, name: 'Продукты питания' },
                        ],
                    },
                    {
                        'id': 135,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 14, name: 'Продукты питания' },
                        ],
                    },
                ],
            },
            {
                'id': 15,
                'name': 'Уход за животными',
                parents: [{ id: 6, name: 'service' }],
                'type': [
                    {
                        'id': 136,
                        'name': 'Вязка',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 15, name: 'Уход за животными' },
                        ],
                    },
                    {
                        'id': 137,
                        'name': 'Дрессировка и выгул',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 15, name: 'Уход за животными' },
                        ],
                    },
                    {
                        'id': 138,
                        'name': 'Передержка',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 15, name: 'Уход за животными' },
                        ],
                    },
                    {
                        'id': 139,
                        'name': 'Стрижка и уход за животными',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 15, name: 'Уход за животными' },
                        ],
                    },
                    {
                        'id': 140,
                        'name': 'Другие услуги',
                        parents: [
                            { id: 6, name: 'service' },
                            { id: 15, name: 'Уход за животными' },
                        ],
                    },
                ],
            },
            {
                'id': 16,
                'name': 'Няни и сиделки',
                parents: [{ id: 6, name: 'service' }],
                type: [],
            },
        ],
    },
    {
        id: 7,
        name: 'goods',
        has_auction: true,
        icon: { url: Goods },
        smallIcon: <HangerIcon />,
        model: [
            {
                id: 1,
                name: 'womenWardrobe',
                parents: [{ id: 7, name: 'goods' }],
                type: [
                    {
                        id: 1,
                        name: 'accessories',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 2,
                        'name': 'Блузы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 3,
                        'name': 'Рубашки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 4,
                        'name': 'Будущим мамам',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 5,
                        'name': 'Верхняя одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 6,
                        'name': 'Головные уборы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 7,
                        'name': 'Домашняя одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 8,
                        'name': 'Комбинезоны',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 9,
                        'name': 'Купальники',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 10,
                        'name': 'Нижнее белье',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 11,
                        'name': 'Обувь',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 12,
                        'name': 'Пиджаки и костюмы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 13,
                        'name': 'Платья и юбки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 14,
                        'name': 'Свитеры и толстовки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 15,
                        'name': 'Спортивная одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 16,
                        'name': 'Футболки и топы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 17,
                        'name': 'Штаны и шорты',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 18,
                        'name': 'Другое',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 19,
                        'name': 'Сумки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 20,
                        'name': 'Украшения',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                    {
                        'id': 86,
                        'name': 'Блузы и рубашки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womenWardrobe' },
                        ],
                    },
                ],
            },
            {
                'id': 2,
                'name': 'Мужской гардероб',
                parents: [{ id: 7, name: 'goods' }],
                'type': [
                    {
                        'id': 21,
                        'name': 'Аксессуары',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 22,
                        'name': 'Верхняя одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 23,
                        'name': 'Головные уборы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 24,
                        'name': 'Домашняя одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 25,
                        'name': 'Комбинезоны',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 26,
                        'name': 'Нижнее белье',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 27,
                        'name': 'Обувь',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 28,
                        'name': 'Пиджаки и костюмы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 29,
                        'name': 'Рубашки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 30,
                        'name': 'Свитеры и толстовки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 31,
                        'name': 'Спецодежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 32,
                        'name': 'Спортивная одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 33,
                        'name': 'Футболки и поло',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 34,
                        'name': 'Штаны и шорты',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                    {
                        'id': 35,
                        'name': 'Другое',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 2, name: 'Мужской гардероб' },
                        ],
                    },
                ],
            },
            {
                'id': 3,
                'name': 'Детская одежда',
                parents: [{ id: 7, name: 'goods' }],
                'type': [
                    {
                        'id': 36,
                        'name': 'Аксессуары',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 37,
                        'name': 'Блузы и рубашки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 38,
                        'name': 'Верхняя одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 39,
                        'name': 'Головные уборы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 40,
                        'name': 'Домашняя одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 41,
                        'name': 'Комбинезоны и боди',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 42,
                        'name': 'Конверты',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 43,
                        'name': 'Нижнее белье',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 44,
                        'name': 'Обувь',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 45,
                        'name': 'Пиджаки и костюмы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 46,
                        'name': 'Платья и юбки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 47,
                        'name': 'Ползунки и распашонки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 48,
                        'name': 'Свитеры и толстовки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 49,
                        'name': 'Спортивная одежда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 50,
                        'name': 'Футболки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 51,
                        'name': 'Штаны и шорты',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                    {
                        'id': 52,
                        'name': 'Другое',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 3, name: 'Детская одежда' },
                        ],
                    },
                ],
            },
            {
                'id': 4,
                'name': 'Товары для детей и игрушки',
                parents: [{ id: 7, name: 'goods' }],
                'type': [
                    {
                        'id': 53,
                        'name': 'Автокресла',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'Товары для детей и игрушки' },
                        ],
                    },
                    {
                        'id': 54,
                        'name': 'Здоровье и уход',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'Товары для детей и игрушки' },
                        ],
                    },
                    {
                        'id': 55,
                        'name': 'Игрушки и игры',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'Товары для детей и игрушки' },
                        ],
                    },
                    {
                        'id': 56,
                        'name': 'Коляски',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'Товары для детей и игрушки' },
                        ],
                    },
                    {
                        'id': 57,
                        'name': 'Кормление и питание',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'Товары для детей и игрушки' },
                        ],
                    },
                    {
                        'id': 58,
                        'name': 'Купание',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'Товары для детей и игрушки' },
                        ],
                    },
                    {
                        'id': 59,
                        'name': 'Обустройство детской',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'Товары для детей и игрушки' },
                        ],
                    },
                    {
                        'id': 60,
                        'name': 'Подгузники и горшки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'Товары для детей и игрушки' },
                        ],
                    },
                    {
                        'id': 61,
                        'name': 'Радио- и видеоняни',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'Товары для детей и игрушки' },
                        ],
                    },
                    {
                        'id': 62,
                        'name': 'Товары для мам',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'Товары для детей и игрушки' },
                        ],
                    },
                    {
                        'id': 63,
                        'name': 'Товары для учебы',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'Товары для детей и игрушки' },
                        ],
                    },
                    {
                        'id': 64,
                        'name': 'Другое',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 4, name: 'Товары для детей и игрушки' },
                        ],
                    },
                ],
            },
            {
                'id': 5,
                'name': 'Хэндмейд',
                parents: [{ id: 7, name: 'goods' }],
                'type': [
                    {
                        'id': 65,
                        'name': 'Косметика',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'Хэндмейд' },
                        ],
                    },
                    {
                        'id': 66,
                        'name': 'Украшения',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'Хэндмейд' },
                        ],
                    },
                    {
                        'id': 67,
                        'name': 'Куклы и игрушки',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'Хэндмейд' },
                        ],
                    },
                    {
                        'id': 68,
                        'name': 'Оформление интерьера',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'Хэндмейд' },
                        ],
                    },
                    {
                        'id': 69,
                        'name': 'Аксессуары',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'Хэндмейд' },
                        ],
                    },
                    {
                        'id': 70,
                        'name': 'Оформление праздников',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'Хэндмейд' },
                        ],
                    },
                    {
                        'id': 71,
                        'name': 'Канцелярия',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'Хэндмейд' },
                        ],
                    },
                    {
                        'id': 72,
                        'name': 'Посуда',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'Хэндмейд' },
                        ],
                    },
                    {
                        'id': 73,
                        'name': 'Другое',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 5, name: 'Хэндмейд' },
                        ],
                    },
                ],
            },
            {
                'id': 6,
                'name': 'Красота и здоровье',
                parents: [{ id: 7, name: 'goods' }],
                'type': [
                    {
                        'id': 74,
                        'name': 'Макияж',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 75,
                        'name': 'Маникюр и педикюр',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 76,
                        'name': 'Товары для здоровья',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 77,
                        'name': 'Парфюмерия',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 78,
                        'name': 'Стрижка и удаление волос',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 79,
                        'name': 'Уход за волосами',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 80,
                        'name': 'Уход за кожей',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 81,
                        'name': 'Фены и укладка',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 82,
                        'name': 'Тату и татуаж',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 83,
                        'name': 'Солярии и загар',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 84,
                        'name': 'Средства для гигиены',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'Красота и здоровье' },
                        ],
                    },
                    {
                        'id': 85,
                        'name': 'Другое',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 6, name: 'Красота и здоровье' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 8,
        name: 'home',
        has_auction: true,
        icon: { url: Home },
        smallIcon: <SofaIcon />,
        model: [
            {
                id: 1,
                name: 'furnitureAndInterior',
                parents: [{ id: 8, name: 'home' }],
                type: [
                    {
                        id: 1,
                        name: 'sofasAndArmchairs',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 2,
                        'name': 'Кровати и матрасы',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 3,
                        'name': 'Кухонные гарнитуры',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 4,
                        'name': 'Освещение',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 5,
                        'name': 'Оформление интерьера',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 6,
                        'name': 'Охрана и сигнализации',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 7,
                        'name': 'Подставки и тумбы',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 8,
                        'name': 'Садовая мебель',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 9,
                        'name': 'Столы и стулья',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 10,
                        'name': 'Текстиль и ковры',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 11,
                        'name': 'Шкафы и комоды',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 12,
                        'name': 'Бытовая хими',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 13,
                        'name': 'Сад и огород',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                    {
                        'id': 14,
                        'name': 'Другое',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 1, name: 'furnitureAndInterior' },
                        ],
                    },
                ],
            },
            {
                'id': 2,
                'name': 'Посуда и товары для кухни',
                parents: [{ id: 8, name: 'home' }],
                'type': [
                    {
                        'id': 15,
                        'name': 'Посуда',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 2, name: 'Посуда и товары для кухни' },
                        ],
                    },
                    {
                        'id': 16,
                        'name': 'Товары для кухни',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 2, name: 'Посуда и товары для кухни' },
                        ],
                    },
                ],
            },
            {
                'id': 3,
                'name': 'Продукты питания',
                parents: [{ id: 8, name: 'home' }],
                'type': [],
            },
            {
                'id': 4,
                'name': 'Ремонт и строительство',
                parents: [{ id: 8, name: 'home' }],
                'type': [
                    {
                        'id': 17,
                        'name': 'Двери',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'Ремонт и строительство' },
                        ],
                    },
                    {
                        'id': 18,
                        'name': 'Измерительные инструменты',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'Ремонт и строительство' },
                        ],
                    },
                    {
                        'id': 19,
                        'name': 'Окна',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'Ремонт и строительство' },
                        ],
                    },
                    {
                        'id': 20,
                        'name': 'Отопление и вентиляция',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'Ремонт и строительство' },
                        ],
                    },
                    {
                        'id': 21,
                        'name': 'Потолки',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'Ремонт и строительство' },
                        ],
                    },
                    {
                        'id': 22,
                        'name': 'Ручные инструменты',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'Ремонт и строительство' },
                        ],
                    },
                    {
                        'id': 23,
                        'name': 'Сантехника и водоснабжение',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'Ремонт и строительство' },
                        ],
                    },
                    {
                        'id': 24,
                        'name': 'Стройматериалы',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'Ремонт и строительство' },
                        ],
                    },
                    {
                        'id': 25,
                        'name': 'Электрика',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'Ремонт и строительство' },
                        ],
                    },
                    {
                        'id': 26,
                        'name': 'Электроинструменты',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'Ремонт и строительство' },
                        ],
                    },
                    {
                        'id': 27,
                        'name': 'Другое',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 4, name: 'Ремонт и строительство' },
                        ],
                    },
                ],
            },
            {
                'id': 5,
                'name': 'Растения',
                parents: [{ id: 8, name: 'home' }],
                'type': [
                    {
                        'id': 28,
                        'name': 'Аксессуары для рассады',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'Растения' },
                        ],
                    },
                    {
                        'id': 29,
                        'name': 'Горшки для растений',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'Растения' },
                        ],
                    },
                    {
                        'id': 30,
                        'name': 'Комнатные растения',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'Растения' },
                        ],
                    },
                    {
                        'id': 31,
                        'name': 'Садовые растения',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'Растения' },
                        ],
                    },
                    {
                        'id': 32,
                        'name': 'Семена и саженцы',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'Растения' },
                        ],
                    },
                    {
                        'id': 33,
                        'name': 'Полки для растений',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'Растения' },
                        ],
                    },
                    {
                        'id': 34,
                        'name': 'Подставки для растений',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'Растения' },
                        ],
                    },
                    {
                        'id': 35,
                        'name': 'Химия для растений',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'Растения' },
                        ],
                    },
                    {
                        'id': 36,
                        'name': 'Почва',
                        parents: [
                            { id: 8, name: 'home' },
                            { id: 5, name: 'Растения' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 9,
        name: 'electronics',
        has_auction: true,
        icon: { url: Electronics },
        smallIcon: <ElectronicIcon />,
        model: [
            {
                id: 1,
                name: 'phonesAndTablets',
                parents: [{ id: 9, name: 'electronics' }],
                type: [
                    {
                        id: 1,
                        name: 'mobilePhones',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        'id': 2,
                        'name': 'Планшеты',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        'id': 3,
                        'name': 'Умные часы и браслеты',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        'id': 4,
                        'name': 'Стационарные телефоны-Рации и спутниковые телефоны',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        'id': 5,
                        'name': 'Запчасти',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        'id': 6,
                        'name': 'Внешние аккумуляторы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        'id': 7,
                        'name': 'Зарядные устройства',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        'id': 8,
                        'name': 'Чехлы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                    {
                        'id': 9,
                        'name': 'Аксессуары',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 1, name: 'phonesAndTablets' },
                        ],
                    },
                ],
            },
            {
                'id': 2,
                'name': 'Фото и видеокамеры',
                parents: [{ id: 9, name: 'electronics' }],
                'type': [
                    {
                        'id': 10,
                        'name': 'Фотоаппараты',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'Фото и видеокамеры' },
                        ],
                    },
                    {
                        'id': 11,
                        'name': 'Видеокамеры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'Фото и видеокамеры' },
                        ],
                    },
                    {
                        'id': 12,
                        'name': 'Видеонаблюдение',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'Фото и видеокамеры' },
                        ],
                    },
                    {
                        'id': 13,
                        'name': 'Объективы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'Фото и видеокамеры' },
                        ],
                    },
                    {
                        'id': 14,
                        'name': 'Фотовспышки',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'Фото и видеокамеры' },
                        ],
                    },
                    {
                        'id': 15,
                        'name': 'Аксессуары',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'Фото и видеокамеры' },
                        ],
                    },
                    {
                        'id': 16,
                        'name': 'Штативы и стабилизаторы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'Фото и видеокамеры' },
                        ],
                    },
                    {
                        'id': 17,
                        'name': 'Студийное оборудование',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'Фото и видеокамеры' },
                        ],
                    },
                    {
                        'id': 18,
                        'name': 'Цифровые фоторамки',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'Фото и видеокамеры' },
                        ],
                    },
                    {
                        'id': 19,
                        'name': 'Компактные фотопринтеры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'Фото и видеокамеры' },
                        ],
                    },
                    {
                        'id': 20,
                        'name': 'Бинокли и оптические приборы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 2, name: 'Фото и видеокамеры' },
                        ],
                    },
                ],
            },
            {
                'id': 3,
                'name': 'Тв, аудио, видео',
                parents: [{ id: 9, name: 'electronics' }],
                'type': [
                    {
                        'id': 21,
                        'name': 'Телевизоры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                    {
                        'id': 22,
                        'name': 'Проекторы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                    {
                        'id': 23,
                        'name': 'Акустика, колонки, сабвуферы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                    {
                        'id': 24,
                        'name': 'Домашние кинотеатры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                    {
                        'id': 25,
                        'name': 'DVD, Blu-ray и медиаплееры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                    {
                        'id': 26,
                        'name': 'Музыкальные центры и магнитолы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                    {
                        'id': 27,
                        'name': 'MP3-плееры и портативное аудио',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                    {
                        'id': 28,
                        'name': 'Электронные книги',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                    {
                        'id': 29,
                        'name': 'Спутниковое и цифровое ТВ',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                    {
                        'id': 30,
                        'name': 'Аудиоусилители и ресиверы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                    {
                        'id': 31,
                        'name': 'Наушники',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                    {
                        'id': 32,
                        'name': 'Микрофоны',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                    {
                        'id': 33,
                        'name': 'Аксессуары',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 3, name: 'Тв, аудио, видео' },
                        ],
                    },
                ],
            },
            {
                'id': 4,
                'name': 'Бытовая техника',
                parents: [{ id: 9, name: 'electronics' }],
                'type': [
                    {
                        'id': 34,
                        'name': 'Весы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 35,
                        'name': 'Вытяжки',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 36,
                        'name': 'Измельчение и смешивание',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 37,
                        'name': 'Климатическая техника',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 38,
                        'name': 'Кулеры и фильтры для воды',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 39,
                        'name': 'Плиты и духовые шкафы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 40,
                        'name': 'Посудомоечные машины',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 41,
                        'name': 'Приготовление еды',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 42,
                        'name': 'Приготовление напитков',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 43,
                        'name': 'Пылесосы и пароочистители',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 44,
                        'name': 'Стиральные машины',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 45,
                        'name': 'Утюги и уход за одеждой',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 46,
                        'name': 'Холодильники',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                    {
                        'id': 47,
                        'name': 'Швейное оборудование',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 4, name: 'Бытовая техника' },
                        ],
                    },
                ],
            },
            {
                'id': 5,
                'name': 'Компьютерная техника',
                parents: [{ id: 9, name: 'electronics' }],
                'type': [
                    {
                        'id': 48,
                        'name': 'Ноутбуки',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'Компьютерная техника' },
                        ],
                    },
                    {
                        'id': 49,
                        'name': 'Компьютеры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'Компьютерная техника' },
                        ],
                    },
                    {
                        'id': 50,
                        'name': 'Мониторы',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'Компьютерная техника' },
                        ],
                    },
                    {
                        'id': 51,
                        'name': 'Клавиатуры и мыши',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'Компьютерная техника' },
                        ],
                    },
                    {
                        'id': 52,
                        'name': 'Оргтехника и расходники',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'Компьютерная техника' },
                        ],
                    },
                    {
                        'id': 53,
                        'name': 'Сетевое оборудование',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'Компьютерная техника' },
                        ],
                    },
                    {
                        'id': 54,
                        'name': 'Мультимедиа',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'Компьютерная техника' },
                        ],
                    },
                    {
                        'id': 55,
                        'name': 'Накопители данных и картридеры',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'Компьютерная техника' },
                        ],
                    },
                    {
                        'id': 56,
                        'name': 'Программное обеспечение',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'Компьютерная техника' },
                        ],
                    },
                    {
                        'id': 57,
                        'name': 'Рули, джойстики, геймпады',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'Компьютерная техника' },
                        ],
                    },
                    {
                        'id': 58,
                        'name': 'Комплектующие и запчасти',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'Компьютерная техника' },
                        ],
                    },
                    {
                        'id': 59,
                        'name': 'Аксессуары',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 5, name: 'Компьютерная техника' },
                        ],
                    },
                ],
            },
            {
                'id': 6,
                'name': 'Игры, приставки и программы',
                parents: [{ id: 9, name: 'electronics' }],
                'type': [
                    {
                        'id': 60,
                        'name': 'Диски',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 6, name: 'Игры, приставки и программы' },
                        ],
                    },
                    {
                        'id': 61,
                        'name': 'Игровые приставки',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 6, name: 'Игры, приставки и программы' },
                        ],
                    },
                    {
                        'id': 62,
                        'name': 'Игры для приставок и ПК',
                        parents: [
                            { id: 9, name: 'electronics' },
                            { id: 6, name: 'Игры, приставки и программы' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 10,
        name: 'hobbies',
        has_auction: true,
        icon: { url: Hobbies },
        smallIcon: <HobbyIcon />,
        model: [
            {
                id: 1,
                name: 'tickets',
                parents: [{ id: 10, name: 'hobbies' }],
                type: [],
            },
            {
                'id': 2,
                'name': 'Спорт и отдых',
                parents: [{ id: 10, name: 'hobbies' }],
                'type': [
                    {
                        'id': 8,
                        'name': 'Спортивная защита',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 9,
                        'name': 'Велосипеды',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 10,
                        'name': 'Ролики и скейтбординг',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 11,
                        'name': 'Самокаты и гироскутеры',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 12,
                        'name': 'Бильярд и боулинг',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 13,
                        'name': 'Водные виды спорта',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 14,
                        'name': 'Единоборства',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 15,
                        'name': 'Зимние виды спорта',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 16,
                        'name': 'Игры с мячом',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 17,
                        'name': 'Охота и рыбалка',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 18,
                        'name': 'Туризм и отдых на природе',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 19,
                        'name': 'Теннис, бадминтон, дартс',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 20,
                        'name': 'Тренажеры и фитнес',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 21,
                        'name': 'Спортивное питание',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                    {
                        'id': 22,
                        'name': 'Другое',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 2, name: 'Спорт и отдых' },
                        ],
                    },
                ],
            },
            {
                'id': 3,
                'name': 'Видеофильмы',
                parents: [{ id: 10, name: 'hobbies' }],
                'type': [],
            },
            {
                'id': 4,
                'name': 'Книги и журналы',
                parents: [{ id: 10, name: 'hobbies' }],
                'type': [],
            },
            {
                'id': 5,
                'name': 'Коллекционирование',
                parents: [{ id: 10, name: 'hobbies' }],
                'type': [
                    {
                        'id': 32,
                        'name': 'Антикварная мебель, посуда',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 33,
                        'name': 'Банкноты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 34,
                        'name': 'Билеты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 35,
                        'name': 'Вещи знаменитостей, автографы',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 36,
                        'name': 'Виниловые пластинки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 37,
                        'name': 'Вкладыши, наклейки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 38,
                        'name': 'Военные вещи',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 39,
                        'name': 'Документы',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 40,
                        'name': 'Жетоны, медали, значки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 41,
                        'name': 'Календари',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 42,
                        'name': 'Киндер-сюрпризы',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 43,
                        'name': 'Книги, журналы, рукописи',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 44,
                        'name': 'Конверты, открытки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 45,
                        'name': 'Копилки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 46,
                        'name': 'Куклы, игрушки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 47,
                        'name': 'Магниты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 48,
                        'name': 'Марки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 49,
                        'name': 'Модели',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 50,
                        'name': 'Монеты, нумизматика',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 51,
                        'name': 'Музыкальные инструменты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 52,
                        'name': 'Пепельницы, зажигалки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 53,
                        'name': 'Пластиковые карточки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 54,
                        'name': 'Предметы искусства, картины',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 55,
                        'name': 'Статуэтки, фигурки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 56,
                        'name': 'Украшения, аксессуары',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 57,
                        'name': 'Фотографии, письма',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 58,
                        'name': 'Шахматы, игры',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 59,
                        'name': 'Шкатулки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 60,
                        'name': 'Этикетки, бутылки, пробки',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                    {
                        'id': 61,
                        'name': 'Другое',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 5, name: 'Коллекционирование' },
                        ],
                    },
                ],
            },
            {
                'id': 6,
                'name': 'Материалы для творчества',
                parents: [{ id: 10, name: 'hobbies' }],
                'type': [],
            },
            {
                'id': 7,
                'name': 'Музыка',
                parents: [{ id: 10, name: 'hobbies' }],
                'type': [],
            },
            {
                'id': 8,
                'name': 'Музыкальные инструменты',
                parents: [{ id: 10, name: 'hobbies' }],
                'type': [
                    {
                        'id': 77,
                        'name': 'Аккордеон, гармони, баяны',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 78,
                        'name': 'Классические гитары',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 79,
                        'name': 'Акустические гитары',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 80,
                        'name': 'Бас-гитары',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 81,
                        'name': 'Электрогитары',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 82,
                        'name': 'Гитарное усиление',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 83,
                        'name': 'Духовые инструменты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 84,
                        'name': 'Клавишные',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 85,
                        'name': 'Микшерные пульты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 86,
                        'name': 'Народные инструменты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 87,
                        'name': 'Педали эффектов',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 88,
                        'name': 'Скрипки, смычковые',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 89,
                        'name': 'Ударные инструменты',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                    {
                        'id': 90,
                        'name': 'Аксессуары',
                        parents: [
                            { id: 10, name: 'hobbies' },
                            { id: 8, name: 'Музыкальные инструменты' },
                        ],
                    },
                ],
            },
            {
                'id': 9,
                'name': 'Настольные игры',
                parents: [{ id: 10, name: 'hobbies' }],
                'type': [],
            },
        ],
    },
    {
        id: 11,
        name: 'animal',
        has_auction: true,
        icon: { url: Animal },
        smallIcon: <AnimalsIcon />,
        model: [
            {
                id: 1,
                name: 'dogs',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                'id': 2,
                'name': 'Кошки',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                'id': 3,
                'name': 'Птицы',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                'id': 4,
                'name': 'Грызуны',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                'id': 5,
                'name': 'Рыбки',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                'id': 6,
                'name': 'Сельскохозяйственные животные',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                'id': 7,
                'name': 'Другие животные',
                parents: [{ id: 11, name: 'animal' }],
            },
            {
                'id': 8,
                'name': 'Товары для животных',
                parents: [{ id: 11, name: 'animal' }],
            },
        ],
    },
    {
        id: 12,
        name: 'free',
        has_auction: false,
        icon: { url: Free },
        smallIcon: <ForFreeIcon />,
    },
]

export const postTypes: PostType[] = [
    {
        id: 1,
        name: 'post',
        subtitle: 'postFree',
        currency: [
            {
                id: 1,
                name: 'уе',
            },
            {
                id: 2,
                name: 'sum',
            },
        ],
        expired: [
            {
                id: 3,
                expiration_at: '720',
            },
        ],
        image: {
            url: '/img/adv-background.png',
        },
        guide: 'howToCreatePost',
    },
    {
        id: 2,
        name: 'auc',
        subtitle: 'tradeToGetBetter',
        currency: [
            {
                id: 3,
                name: 'sum',
            },
        ],
        expired: [
            {
                id: 1,
                expiration_at: '2',
            },
            {
                id: 2,
                expiration_at: '720',
            },
        ],
        image: {
            url: '/img/lot-background.png',
        },
        guide: 'howToCreateAuc',
    },
    {
        id: 3,
        name: 'exauc',
        subtitle: 'maxFunctionality',
        currency: [
            {
                id: 4,
                name: 'sum',
            },
        ],
        expired: [
            {
                id: 4,
                expiration_at: '2',
            },
            {
                id: 5,
                expiration_at: '720',
            },
        ],
        image: {
            url: '/img/advanced-lot-background.png',
        },
        guide: 'howToCreateExAuc',
    },
]
