export const siteCategories = [
    {
        id: 1,
        mark: 'car',
        ru_name: 'Автомобили',
        subcategory: [
            {
                id: 1,
                name: 'made_uzbekistan',
                ru_name: 'Сделано в Узбекистане'
            },
            {
                id: 2,
                name: 'foreign_cars',
                ru_name: 'Иномарки'
            }
        ]
    },
    {
        id: 2,
        mark: 'transport',
        ru_name: 'Спецтехника и транспорт',
        subcategory: [
            {
                id: 1,
                name: 'motorcycles_motor_vehicles',
                ru_name: 'Мотоциклы и мототехника',
                type: [
                    {
                        id: 1,
                        name: 'motorcycles',
                        ru_name: 'Мотоциклы'
                    },
                    {
                        id: 2,
                        name: 'mopeds_scooters',
                        ru_name: 'Мопеды и скутеры'
                    },
                    {
                        id: 3,
                        name: 'atvs',
                        ru_name: 'Квадроциклы'
                    },
                    {
                        id: 4,
                        name: 'go_karting',
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
                id: 2,
                name: 'buses_trucks',
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
                        name: 'refrigerator_truck',
                        ru_name: 'Авторефрижератор'
                    },
                    {
                        id: 11,
                        name: 'motorhome',
                        ru_name: 'Автодома'
                    },
                    {
                        id: 12,
                        name: 'trucks',
                        ru_name: 'Грузовики'
                    },
                    {
                        id: 13,
                        name: 'light_commercial_transport',
                        ru_name: 'Легкий коммерческий транспорт'
                    },
                    {
                        id: 14,
                        name: 'trailers',
                        ru_name: 'Прицепы'
                    },
                    {
                        id: 15,
                        name: 'tractor_units',
                        ru_name: 'Тягачи'
                    },
                    {
                        id: 16,
                        name: 'food_truck',
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
                id: 3,
                name: 'special_equipment',
                ru_name: 'Спецтехника',
                type: [
                    {
                        id: 18,
                        name: 'car_towers',
                        ru_name: 'Автовышки'
                    },
                    {
                        id: 19,
                        name: 'truck_cranes',
                        ru_name: 'Автокраны'
                    },
                    {
                        id: 20,
                        name: 'bulldozers',
                        ru_name: 'Бульдозеры'
                    },
                    {
                        id: 21,
                        name: 'utility_equipment',
                        ru_name: 'Коммунальная техника'
                    },
                    {
                        id: 22,
                        name: 'loaders',
                        ru_name: 'Погрузчики'
                    },
                    {
                        id: 23,
                        name: 'agricultural_machinery',
                        ru_name: 'Сельхозтехника'
                    },
                    {
                        id: 24,
                        name: 'construction_equipment',
                        ru_name: 'Строительная техника'
                    },
                    {
                        id: 25,
                        name: 'logging_equipment',
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
                        ru_name: 'Другие'
                    }
                ]
            },
            {
                id: 4,
                name: 'water_transport',
                ru_name: 'Водный транспорт',
                type: [
                    {
                        id: 28,
                        name: 'rowing_boats',
                        ru_name: 'Вёсельные лодки'
                    },
                    {
                        id: 29,
                        name: 'jet_skis',
                        ru_name: 'Гидроциклы'
                    },
                    {
                        id: 30,
                        name: 'boats_yachts',
                        ru_name: 'Катера и яхты'
                    },
                    {
                        id: 31,
                        name: 'kayaks_canoes',
                        ru_name: 'Каяки и каноэ'
                    },
                    {
                        id: 32,
                        name: 'motor_boats',
                        ru_name: 'Моторные лодки'
                    },
                    {
                        id: 33,
                        name: 'inflatable_boats',
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
        has_auction: 1,
        mark: 'parts',
        ru_name: 'Запчасти и аксессуары',
        subcategory: [
            {
                id: 1,
                name: 'for_passenger_cars',
                ru_name: 'Для легковых автомобилей',
                type: []
            },
            {
                id: 2,
                name: 'for_motorcycles_motor_vehicles',
                ru_name: 'Для мотоциклов и мототехники',
                type: [
                    {
                        id: 1,
                        parts_id: 2,
                        name: 'motorcycles',
                        ru_name: 'Мотоциклы'
                    },
                    {
                        id: 2,
                        parts_id: 2,
                        name: 'mopeds_scooters',
                        ru_name: 'Мопеды и скутеры'
                    },
                    {
                        id: 3,
                        parts_id: 2,
                        name: 'atvs',
                        ru_name: 'Квадроциклы'
                    },
                    {
                        id: 4,
                        parts_id: 2,
                        name: 'go_karting',
                        ru_name: 'Картинг'
                    },
                    {
                        id: 5,
                        parts_id: 2,
                        name: 'snowmobiles',
                        ru_name: 'Снегоходы'
                    },
                    {
                        id: 6,
                        parts_id: 2,
                        name: 'buggy',
                        ru_name: 'Багги'
                    },
                    {
                        id: 7,
                        parts_id: 2,
                        name: 'other',
                        ru_name: 'Другие'
                    }
                ]
            },
            {
                id: 3,
                name: 'for_buses_trucks',
                ru_name: 'Для автобусов и грузовиков',
                type: [
                    {
                        id: 8,
                        parts_id: 3,
                        name: 'buses',
                        ru_name: 'Автобусы'
                    },
                    {
                        id: 9,
                        parts_id: 3,
                        name: 'minibuses',
                        ru_name: 'Микроавтобусы'
                    },
                    {
                        id: 10,
                        parts_id: 3,
                        name: 'refrigerator_truck',
                        ru_name: 'Авторефрижератор'
                    },
                    {
                        id: 11,
                        parts_id: 3,
                        name: 'motorhome',
                        ru_name: 'Автодома'
                    },
                    {
                        id: 12,
                        parts_id: 3,
                        name: 'trucks',
                        ru_name: 'Грузовики'
                    },
                    {
                        id: 13,
                        parts_id: 3,
                        name: 'light_commercial_transport',
                        ru_name: 'Легкий коммерческий транспорт'
                    },
                    {
                        id: 14,
                        parts_id: 3,
                        name: 'trailers',
                        ru_name: 'Прицепы'
                    },
                    {
                        id: 15,
                        parts_id: 3,
                        name: 'tractor_units',
                        ru_name: 'Тягачи'
                    },
                    {
                        id: 16,
                        parts_id: 3,
                        name: 'food_truck',
                        ru_name: 'Фудтрак'
                    },
                    {
                        id: 17,
                        parts_id: 3,
                        name: 'other',
                        ru_name: 'Другие'
                    }
                ]
            },
            {
                id: 4,
                name: 'for_special_equipment',
                ru_name: 'Для спецтехники',
                type: [
                    {
                        id: 18,
                        parts_id: 4,
                        name: 'car_towers',
                        ru_name: 'Автовышки'
                    },
                    {
                        id: 19,
                        parts_id: 4,
                        name: 'truck_cranes',
                        ru_name: 'Автокраны'
                    },
                    {
                        id: 20,
                        parts_id: 4,
                        name: 'bulldozers',
                        ru_name: 'Бульдозеры'
                    },
                    {
                        id: 21,
                        parts_id: 4,
                        name: 'utility_equipment',
                        ru_name: 'Коммунальная техника'
                    },
                    {
                        id: 22,
                        parts_id: 4,
                        name: 'loaders',
                        ru_name: 'Погрузчики'
                    },
                    {
                        id: 23,
                        parts_id: 4,
                        name: 'agricultural_machinery',
                        ru_name: 'Сельхозтехника'
                    },
                    {
                        id: 24,
                        parts_id: 4,
                        name: 'construction_equipment',
                        ru_name: 'Строительная техника'
                    },
                    {
                        id: 25,
                        parts_id: 4,
                        name: 'logging_equipment',
                        ru_name: 'Лесозаготовочная техника'
                    },
                    {
                        id: 26,
                        parts_id: 4,
                        name: 'excavators',
                        ru_name: 'Экскаваторы'
                    },
                    {
                        id: 27,
                        parts_id: 4,
                        name: 'other',
                        ru_name: 'Другие'
                    }
                ]
            },
            {
                id: 5,
                name: 'for_water_transport',
                ru_name: 'Для водного транспорта',
                type: []
            }
        ]
    },
    {
        id: 4,
        mark: 'estate',
        ru_name: 'Недвижимость',
        subcategory: [
            {
                id: 1,
                name: 'flat',
                ru_name: 'Квартиры',
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        ru_name: 'Продажа'
                    },
                    {
                        id: 2,
                        name: 'long_term_rental',
                        ru_name: 'Аренда на длительное время'
                    },
                    {
                        id: 3,
                        name: 'rent_daily_basis',
                        ru_name: 'Аренда по суточно'
                    }
                ]
            },
            {
                id: 2,
                name: 'houses_cottages',
                ru_name: 'Дома, дачи, коттеджи',
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        ru_name: 'Продажа'
                    },
                    {
                        id: 2,
                        name: 'long_term_rental',
                        ru_name: 'Аренда на длительное время'
                    },
                    {
                        id: 3,
                        name: 'rent_daily_basis',
                        ru_name: 'Аренда по суточно'
                    }
                ]
            },
            {
                id: 3,
                name: 'land_plots',
                ru_name: 'Земельные участки',
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        ru_name: 'Продажа'
                    },
                    {
                        id: 2,
                        name: 'long_term_rental',
                        ru_name: 'Аренда на длительное время'
                    }
                ]
            },
            {
                id: 4,
                name: 'underground_parking_lots_boxes',
                ru_name: 'Подземные стоянки и боксы',
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        ru_name: 'Продажа'
                    },
                    {
                        id: 2,
                        name: 'long_term_rental',
                        ru_name: 'Аренда на длительное время'
                    }
                ]
            },
            {
                id: 5,
                name: 'commercial_real_estate',
                ru_name: 'Коммерческая недвижимость',
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        ru_name: 'Продажа'
                    },
                    {
                        id: 2,
                        name: 'long_term_rental',
                        ru_name: 'Аренда на длительное время'
                    }
                ]
            }
        ]
    },
    {
        id: 5,
        mark: 'job',
        ru_name: 'Работа',
        subcategory: [
            {
                id: 1,
                name: 'vacancy',
                ru_name: 'Вакансии',
                type: [
                    {
                        id: 1,
                        name: 'auto_business',
                        ru_name: 'Автобизнес'
                    },
                    {
                        id: 2,
                        name: 'safety_security',
                        ru_name: 'Безопасность и охрана'
                    },
                    {
                        id: 3,
                        name: 'office_staff',
                        ru_name: 'Офисный персонал'
                    },
                    {
                        id: 4,
                        name: 'senior_management',
                        ru_name: 'Высший менеджмент'
                    },
                    {
                        id: 5,
                        name: 'production_of_raw_materials_energy',
                        ru_name: 'Добыча сырья, энергетика'
                    },
                    {
                        id: 6,
                        name: 'home_staff',
                        ru_name: 'Домашний персонал'
                    },
                    {
                        id: 7,
                        name: 'publishing_houses_mass_media',
                        ru_name: 'Издательства и СМИ'
                    },
                    {
                        id: 8,
                        name: 'information_technology',
                        ru_name: 'Информационные технологии'
                    },
                    {
                        id: 9,
                        name: 'arts_entertainment',
                        ru_name: 'Искусство и развлечения'
                    },
                    {
                        id: 10,
                        name: 'purchases',
                        ru_name: 'Закупки'
                    },
                    {
                        id: 11,
                        name: 'marketing_advertising',
                        ru_name: 'Маркетинг и реклама'
                    },
                    {
                        id: 12,
                        name: 'medicine_pharmaceuticals',
                        ru_name: 'Медицина'
                    },
                    {
                        id: 13,
                        name: 'early_career',
                        ru_name: 'Начало карьеры, без опыта работы'
                    },
                    {
                        id: 14,
                        name: 'education_science',
                        ru_name: 'Образование и наука'
                    },
                    {
                        id: 15,
                        name: 'handymen',
                        ru_name: 'Разнорабочие'
                    },
                    {
                        id: 16,
                        name: 'logistics_transport',
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
                        name: 'restaurants_catering',
                        ru_name: 'Рестораны и общепит'
                    },
                    {
                        id: 20,
                        name: 'agricultural_industry',
                        ru_name: 'Сельское хозяйство'
                    },
                    {
                        id: 21,
                        name: 'sports_beauty',
                        ru_name: 'Спорт и красота'
                    },
                    {
                        id: 22,
                        name: 'insurance',
                        ru_name: 'Страхование'
                    },
                    {
                        id: 23,
                        name: 'construction_repair',
                        ru_name: 'Строительство и ремонт'
                    },
                    {
                        id: 24,
                        name: 'tourism_hotels',
                        ru_name: 'Туризм и гостиницы'
                    },
                    {
                        id: 25,
                        name: 'estate',
                        ru_name: 'Недвижимость'
                    },
                    {
                        id: 26,
                        name: 'accounting_finance',
                        ru_name: 'Бухгалтерия и финансы'
                    },
                    {
                        id: 27,
                        name: 'banking_sector',
                        ru_name: 'Банковская сфера'
                    },
                    {
                        id: 28,
                        name: 'human_resources_management',
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
                        ru_name: 'Другие'
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
                        name: 'auto_business',
                        ru_name: 'Автобизнес'
                    },
                    {
                        id: 32,
                        name: 'safety_security',
                        ru_name: 'Безопасность и охрана'
                    },
                    {
                        id: 33,
                        name: 'office_staff',
                        ru_name: 'Офисный персонал'
                    },
                    {
                        id: 34,
                        name: 'senior_management',
                        ru_name: 'Высший менеджмент'
                    },
                    {
                        id: 35,
                        name: 'production_of_raw_materials_energy',
                        ru_name: 'Добыча сырья, энергетика'
                    },
                    {
                        id: 36,
                        name: 'home_staff',
                        ru_name: 'Домашний персонал'
                    },
                    {
                        id: 37,
                        name: 'publishing_houses_mass_media',
                        ru_name: 'Издательства и СМИ'
                    },
                    {
                        id: 38,
                        name: 'information_technology',
                        ru_name: 'Информационные технологии'
                    },
                    {
                        id: 39,
                        name: 'arts_entertainment',
                        ru_name: 'Искусство и развлечения'
                    },
                    {
                        id: 40,
                        name: 'purchases',
                        ru_name: 'Закупки'
                    },
                    {
                        id: 41,
                        name: 'marketing_advertising',
                        ru_name: 'Маркетинг и реклама'
                    },
                    {
                        id: 42,
                        name: 'medicine_pharmaceuticals',
                        ru_name: 'Медицина и фармацевтика'
                    },
                    {
                        id: 43,
                        name: 'early_career',
                        ru_name: 'Начало карьеры / без опыта работы'
                    },
                    {
                        id: 44,
                        name: 'education_science',
                        ru_name: 'Образование и наука'
                    },
                    {
                        id: 45,
                        name: 'handymen',
                        ru_name: 'Разнорабочие'
                    },
                    {
                        id: 46,
                        name: 'logistics_transport',
                        ru_name: 'Логистика и транспорт'
                    },
                    {
                        id: 47,
                        name: 'sales',
                        ru_name: 'Продажи'
                    },
                    {
                        id: 48,
                        name: 'production',
                        ru_name: 'Производство'
                    },
                    {
                        id: 49,
                        name: 'restaurants_catering',
                        ru_name: 'Рестораны и общепит'
                    },
                    {
                        id: 50,
                        name: 'agricultural_industry',
                        ru_name: 'Сельское хозяйство'
                    },
                    {
                        id: 51,
                        name: 'sports_beauty',
                        ru_name: 'Спорт и красота'
                    },
                    {
                        id: 52,
                        name: 'insurance',
                        ru_name: 'Страхование'
                    },
                    {
                        id: 53,
                        name: 'construction_repair',
                        ru_name: 'Строительство и ремонт'
                    },
                    {
                        id: 54,
                        name: 'tourism_hotels',
                        ru_name: 'Туризм и гостиницы'
                    },
                    {
                        id: 55,
                        name: 'estate',
                        ru_name: 'Недвижимость'
                    },
                    {
                        id: 56,
                        name: 'accounting_finance',
                        ru_name: 'Бухгалтерия и финансы'
                    },
                    {
                        id: 57,
                        name: 'banking_sector',
                        ru_name: 'Банковская сфера'
                    },
                    {
                        id: 58,
                        name: 'human_resources_management',
                        ru_name: 'Управление персоналом'
                    },
                    {
                        id: 59,
                        name: 'jurisprudence',
                        ru_name: 'Юриспруденция'
                    },
                    {
                        id: 60,
                        name: 'other',
                        ru_name: 'Другие'
                    }
                ]
            }
        ]
    },
    {
        id: 6,
        mark: 'service',
        ru_name: 'Услуги',
        subcategory: [
            {
                id: 1,
                name: 'repair_construction',
                ru_name: 'Ремонт и строительство',
                type: [
                    {
                        id: 1,
                        name: 'landscaping_garbage_collection',
                        ru_name: 'Благоустройство, вывоз мусора'
                    },
                    {
                        id: 2,
                        name: 'high_rise_works',
                        ru_name: 'Высотные работы'
                    },
                    {
                        id: 3,
                        name: 'design_architecture',
                        ru_name: 'Дизайн и архитектура'
                    },
                    {
                        id: 4,
                        name: 'dismantling_structures',
                        ru_name: 'Демонтаж сооружений и конструкций'
                    },
                    {
                        id: 5,
                        name: 'comprehensive_repairs',
                        ru_name: 'Комплексный ремонт'
                    },
                    {
                        id: 6,
                        name: 'roofing_works',
                        ru_name: 'Кровельные работы'
                    },
                    {
                        id: 7,
                        name: 'painting_works',
                        ru_name: 'Малярные работы'
                    },
                    {
                        id: 8,
                        name: 'windows_doors',
                        ru_name: 'Окна и двери'
                    },
                    {
                        id: 9,
                        name: 'finishing_repair',
                        ru_name: 'Отделка и ремонт'
                    },
                    {
                        id: 10,
                        name: 'stoves_fireplaces',
                        ru_name: 'Печи и камины'
                    },
                    {
                        id: 11,
                        name: 'plumbing',
                        ru_name: 'Сантехника'
                    },
                    {
                        id: 12,
                        name: 'welding_work',
                        ru_name: 'Сварочные работы'
                    },
                    {
                        id: 13,
                        name: 'construction_works',
                        ru_name: 'Строительные работы'
                    },
                    {
                        id: 14,
                        name: 'laying_repair_tiles',
                        ru_name: 'Укладка и ремонт плитки'
                    },
                    {
                        id: 15,
                        name: 'handyman_services',
                        ru_name: 'Услуги разнорабочих'
                    },
                    {
                        id: 16,
                        name: 'facade_works',
                        ru_name: 'Фасадные работы'
                    },
                    {
                        id: 17,
                        name: 'plaster_works',
                        ru_name: 'Штукатурные работы'
                    },
                    {
                        id: 18,
                        name: 'electrician',
                        ru_name: 'Электрика'
                    },
                    {
                        id: 19,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 2,
                name: 'master_for_an_hour',
                ru_name: 'Мастер на час',
                type: [
                    {
                        id: 20,
                        name: 'opening_locks',
                        ru_name: 'Вскрытие замков'
                    },
                    {
                        id: 21,
                        name: 'master_hour',
                        ru_name: 'Мастер на час'
                    },
                    {
                        id: 22,
                        name: 'key_making',
                        ru_name: 'Изготовление ключей'
                    },
                    {
                        id: 23,
                        name: 'furniture_assembly_repair',
                        ru_name: 'Сборка и ремонт мебели'
                    },
                    {
                        id: 24,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 3,
                name: 'nannies_nurses',
                ru_name: 'Няни и сиделки',
                type: [
                    {
                        id: 25,
                        name: 'nannies_governesses',
                        ru_name: 'Няни, гувернантки'
                    },
                    {
                        id: 26,
                        name: 'nurses',
                        ru_name: 'Сиделки'
                    }
                ]
            },
            {
                id: 4,
                name: 'transportation_services',
                ru_name: 'Перевозки',
                type: [
                    {
                        id: 27,
                        name: 'rent_car',
                        ru_name: 'Аренда авто'
                    },
                    {
                        id: 28,
                        name: 'rent_transport',
                        ru_name: 'Аренда спецтехники'
                    },
                    {
                        id: 29,
                        name: 'garbage_collection',
                        ru_name: 'Вывоз мусора'
                    },
                    {
                        id: 30,
                        name: 'cargo_transportation',
                        ru_name: 'Грузоперевозки'
                    },
                    {
                        id: 31,
                        name: 'courier',
                        ru_name: 'Курьер'
                    },
                    {
                        id: 32,
                        name: 'loader',
                        ru_name: 'Грузчики'
                    },
                    {
                        id: 33,
                        name: 'distillation',
                        ru_name: 'Перегон'
                    },
                    {
                        id: 34,
                        name: 'passenger_transport',
                        ru_name: 'Пассажирские перевозки'
                    },
                    {
                        id: 35,
                        name: 'driver_services',
                        ru_name: 'Услуги водителя'
                    },
                    {
                        id: 36,
                        name: 'tow_truck_services',
                        ru_name: 'Услуги эвакуатора'
                    },
                    {
                        id: 37,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 5,
                name: 'beauty_health',
                ru_name: 'Красота и здоровье',
                type: [
                    {
                        id: 38,
                        name: 'depilation_sugaring',
                        ru_name: 'Депиляция и шугаринг'
                    },
                    {
                        id: 39,
                        name: 'makeup',
                        ru_name: 'Макияж'
                    },
                    {
                        id: 40,
                        name: 'manicure_pedicure',
                        ru_name: 'Маникюр и педикюр'
                    },
                    {
                        id: 41,
                        name: 'tan',
                        ru_name: 'Загар'
                    },
                    {
                        id: 42,
                        name: 'hair_treatment',
                        ru_name: 'Лечение волос'
                    },
                    {
                        id: 43,
                        name: 'massage',
                        ru_name: 'Массаж'
                    },
                    {
                        id: 44,
                        name: 'hair_extensions',
                        ru_name: 'Наращивание волос'
                    },
                    {
                        id: 45,
                        name: 'eyelash_extensions',
                        ru_name: 'Наращивание ресниц, услуги бровиста'
                    },
                    {
                        id: 47,
                        name: 'stylist',
                        ru_name: 'Стилист'
                    },
                    {
                        id: 48,
                        name: 'spa_services',
                        ru_name: 'СПА-услуги'
                    },
                    {
                        id: 49,
                        name: 'tattooing_piercing',
                        ru_name: 'Тату и пирсинг'
                    },
                    {
                        id: 50,
                        name: 'tattooing',
                        ru_name: 'Татуаж'
                    },
                    {
                        id: 51,
                        name: 'nursing_services',
                        ru_name: 'Услуги медсестер'
                    },
                    {
                        id: 52,
                        name: 'hair_services',
                        ru_name: 'Услуги парикмахера'
                    },
                    {
                        id: 53,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 6,
                name: 'computer_services',
                ru_name: 'Компьютерные услуги',
                type: [
                    {
                        id: 54,
                        name: 'it_outsourcing',
                        ru_name: 'IT аутсорсинг'
                    },
                    {
                        id: 55,
                        name: 'web_designer',
                        ru_name: 'Веб-Дизайн, бренд, арт'
                    },
                    {
                        id: 56,
                        name: 'layout_designer',
                        ru_name: 'Верстальщик'
                    },
                    {
                        id: 57,
                        name: 'designer',
                        ru_name: 'Дизайнеры'
                    },
                    {
                        id: 58,
                        name: 'setting_pc',
                        ru_name: 'Компьютерная помощь и настройка ПК'
                    },
                    {
                        id: 59,
                        name: 'typing_data_entry',
                        ru_name: 'Набор текста, ввод данных'
                    },
                    {
                        id: 60,
                        name: 'building_pc',
                        ru_name: 'Сборка ПК'
                    },
                    {
                        id: 61,
                        name: 'connecting_internet',
                        ru_name: 'Подключение Интернета'
                    },
                    {
                        id: 62,
                        name: 'coder',
                        ru_name: 'Программист'
                    },
                    {
                        id: 63,
                        name: 'work_text',
                        ru_name: 'Работа с текстами'
                    },
                    {
                        id: 64,
                        name: 'web_coder',
                        ru_name: 'Веб-программист'
                    },
                    {
                        id: 65,
                        name: 'creating_promoting_websites',
                        ru_name: 'Создание и продвижение сайтов'
                    },
                    {
                        id: 66,
                        name: 'system_admin',
                        ru_name: 'Системный администратор'
                    },
                    {
                        id: 67,
                        name: 'software_installation',
                        ru_name: 'Установка ПО'
                    },
                    {
                        id: 68,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 7,
                name: 'auto_services',
                ru_name: 'Автоуслуги',
                type: [
                    {
                        id: 69,
                        name: 'installing_audio_system',
                        ru_name: 'Установка аудио системы'
                    },
                    {
                        id: 70,
                        name: 'glass_mirrors',
                        ru_name: 'Автостекла и зеркала'
                    },
                    {
                        id: 71,
                        name: 'autoelectrics',
                        ru_name: 'Автоэлектрика'
                    },
                    {
                        id: 72,
                        name: 'exhaust_system',
                        ru_name: 'Выхлопная система'
                    },
                    {
                        id: 73,
                        name: 'auto_diagnostics',
                        ru_name: 'Диагностика авто'
                    },
                    {
                        id: 74,
                        name: 'detaling',
                        ru_name: 'Детейлинг'
                    },
                    {
                        id: 75,
                        name: 'bodywork_works',
                        ru_name: 'Кузовные работы и покраска автомобиля'
                    },
                    {
                        id: 76,
                        name: 'conditioning_heating',
                        ru_name: 'Кондиционеры и обогрев'
                    },
                    {
                        id: 77,
                        name: 'replacement_liquids',
                        ru_name: 'Замена жидкостей'
                    },
                    {
                        id: 78,
                        name: 'car_painting',
                        ru_name: 'Покраска авто'
                    },
                    {
                        id: 79,
                        name: 'repair_engine',
                        ru_name: 'Ремонт двигателя и ходовой'
                    },
                    {
                        id: 80,
                        name: 'repair_moto',
                        ru_name: 'Ремонт мототехники'
                    },
                    {
                        id: 81,
                        name: 'steering_system_repair',
                        ru_name: 'Ремонт рулевого управления'
                    },
                    {
                        id: 82,
                        name: 'fuel_system_repair',
                        ru_name: 'Ремонт топливной системы'
                    },
                    {
                        id: 83,
                        name: 'tuning_installation',
                        ru_name: 'Тюнинг и установка доп. оборудования'
                    },
                    {
                        id: 84,
                        name: 'technical_maintenance',
                        ru_name: 'Техническое обслуживание'
                    },
                    {
                        id: 85,
                        name: 'cleaning_polishing',
                        ru_name: 'Химчистка, полировка и мойка авто'
                    },
                    {
                        id: 86,
                        name: 'disk_repair',
                        ru_name: 'Шиномонтаж и ремонт дисков'
                    },
                    {
                        id: 87,
                        name: 'electrical_equipment',
                        ru_name: 'Электрооборудование'
                    },
                    {
                        id: 88,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 8,
                name: 'repair_of_equipment',
                ru_name: 'Ремонт техники',
                type: [
                    {
                        id: 89,
                        name: 'repair_gas_equipment',
                        ru_name: 'Ремонт газового оборудования'
                    },
                    {
                        id: 90,
                        name: 'repair_computers_laptops',
                        ru_name: 'Ремонт компьютеров и ноутбуков'
                    },
                    {
                        id: 91,
                        name: 'repair_smartphones_phones',
                        ru_name: 'Ремонт смартфонов, телефонов'
                    },
                    {
                        id: 92,
                        name: 'repair_tv_sets_audio',
                        ru_name: 'Ремонт телевизоров, аудио и -видеотехники'
                    },
                    {
                        id: 93,
                        name: 'repair_medical_equipment',
                        ru_name: 'Ремонт медицинского оборудования'
                    },
                    {
                        id: 94,
                        name: 'photo_equipment_repair',
                        ru_name: 'Ремонт фототехники'
                    },
                    {
                        id: 95,
                        name: 'repair_musical_instruments',
                        ru_name: 'Ремонт музыкальных инструментов'
                    },
                    {
                        id: 96,
                        name: 'repair_optical_devices',
                        ru_name: 'Ремонт оптических приборов'
                    },
                    {
                        id: 97,
                        name: 'sports_equipment_repair',
                        ru_name: 'Ремонт спортинвентаря'
                    },
                    {
                        id: 98,
                        name: 'watch_repair',
                        ru_name: 'Ремонт часов'
                    },
                    {
                        id: 99,
                        name: 'installation_repair_conditioners',
                        ru_name: 'Установка и ремонт кондиционеров'
                    },
                    {
                        id: 100,
                        name: 'installing_security_systems',
                        ru_name: 'Установка систем безопасности'
                    },
                    {
                        id: 101,
                        name: 'installation_repair_household_appliances',
                        ru_name: 'Установка и ремонт бытовой техники'
                    },
                    {
                        id: 102,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 9,
                name: 'training',
                ru_name: 'Обучение',
                type: [
                    {
                        id: 103,
                        name: 'preschool_development',
                        ru_name: 'Дошкольное развитие'
                    },
                    {
                        id: 104,
                        name: 'master_classes_trainings',
                        ru_name: 'Мастер-классы и тренинги'
                    },
                    {
                        id: 105,
                        name: 'driving_training',
                        ru_name: 'Обучение вождению'
                    },
                    {
                        id: 106,
                        name: 'language_training',
                        ru_name: 'Обучение языкам'
                    },
                    {
                        id: 107,
                        name: 'exam_preparation',
                        ru_name: 'Подготовка к экзаменам'
                    },
                    {
                        id: 108,
                        name: 'professional_training',
                        ru_name: 'Профессиональное обучение'
                    },
                    {
                        id: 109,
                        name: 'music_theater_lessons',
                        ru_name: 'Уроки музыки и театрального мастерства'
                    },
                    {
                        id: 110,
                        name: 'drawing_design_needlework_lessons',
                        ru_name: 'Уроки рисования, дизайна и рукоделия'
                    },
                    {
                        id: 111,
                        name: 'speech_therapist',
                        ru_name: 'Логопед и дефектолог'
                    },
                    {
                        id: 112,
                        name: 'dances',
                        ru_name: 'Танцы'
                    },
                    {
                        id: 113,
                        name: 'psychologists',
                        ru_name: 'Психологи'
                    },
                    {
                        id: 114,
                        name: 'tutors',
                        ru_name: 'Репетиторы'
                    },
                    {
                        id: 115,
                        name: 'coach_services',
                        ru_name: 'Услуги тренера'
                    },
                    {
                        id: 116,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 10,
                name: 'business_services',
                ru_name: 'Деловые услуги',
                type: [
                    {
                        id: 117,
                        name: 'lawyers',
                        ru_name: 'Адвокаты'
                    },
                    {
                        id: 118,
                        name: 'marriage_agencies',
                        ru_name: 'Брачные агентства'
                    },
                    {
                        id: 119,
                        name: 'business_consulting',
                        ru_name: 'Бизнес-консультирование'
                    },
                    {
                        id: 120,
                        name: 'brokers',
                        ru_name: 'Брокеры'
                    },
                    {
                        id: 121,
                        name: 'accounting_finance',
                        ru_name: 'Бухгалтерия и финансы'
                    },
                    {
                        id: 122,
                        name: 'speaker',
                        ru_name: 'Дикторы'
                    },
                    {
                        id: 123,
                        name: 'consulting_economic',
                        ru_name: 'Консультирование ВЭД'
                    },
                    {
                        id: 124,
                        name: 'production_signage_advertising',
                        ru_name: 'Изготовление вывесок и рекламы'
                    },
                    {
                        id: 125,
                        name: 'marketing_advertising_pr',
                        ru_name: 'Маркетинг, реклама, PR'
                    },
                    {
                        id: 126,
                        name: 'logist',
                        ru_name: 'Логисты'
                    },
                    {
                        id: 127,
                        name: 'labor_protection',
                        ru_name: 'Охрана труда'
                    },
                    {
                        id: 128,
                        name: 'appraiser',
                        ru_name: 'Оценщик'
                    },
                    {
                        id: 129,
                        name: 'simultaneous_translation',
                        ru_name: 'Синхронный перевод'
                    },
                    {
                        id: 130,
                        name: 'text_translation',
                        ru_name: 'Перевод текстов'
                    },
                    {
                        id: 131,
                        name: 'printing_printing_design',
                        ru_name: 'Полиграфия, печать, дизайн'
                    },
                    {
                        id: 132,
                        name: 'realtor_service',
                        ru_name: 'Риэлторские услуги'
                    },
                    {
                        id: 133,
                        name: 'hr',
                        ru_name: 'HR'
                    },
                    {
                        id: 134,
                        name: 'certification',
                        ru_name: 'Сертификация'
                    },
                    {
                        id: 135,
                        name: 'legal_services',
                        ru_name: 'Юридические услуги'
                    },
                    {
                        id: 136,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 11,
                name: 'organization_holidays',
                ru_name: 'Организация праздников',
                type: [
                    {
                        id: 137,
                        name: 'rental_equipment_attractions',
                        ru_name: 'Аренда оборудования и аттракционов'
                    },
                    {
                        id: 138,
                        name: 'site_rental',
                        ru_name: 'Аренда площадки'
                    },
                    {
                        id: 139,
                        name: 'presenters_musicians_artists',
                        ru_name: 'Ведущие, музыканты и артисты'
                    },
                    {
                        id: 140,
                        name: 'djs',
                        ru_name: 'Диджеи'
                    },
                    {
                        id: 141,
                        name: 'organization_events',
                        ru_name: 'Организация мероприятий'
                    },
                    {
                        id: 142,
                        name: 'food_preparation_catering',
                        ru_name: 'Приготовление еды и кейтеринг'
                    },
                    {
                        id: 143,
                        name: 'costume_rental',
                        ru_name: 'Прокат костюмов'
                    },
                    {
                        id: 144,
                        name: 'promoters_models',
                        ru_name: 'Промоутеры и модели'
                    },
                    {
                        id: 145,
                        name: 'flowers_decor',
                        ru_name: 'Цветы и декор'
                    },
                    {
                        id: 146,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 12,
                name: 'photo_video_shooting',
                ru_name: 'Фото и видеосъемка',
                type: [
                    {
                        id: 147,
                        name: 'video_editor',
                        ru_name: 'Видеомонтажер'
                    },
                    {
                        id: 148,
                        name: 'video_operators',
                        ru_name: 'Видео операторы'
                    },
                    {
                        id: 149,
                        name: 'photographer',
                        ru_name: 'Фотографы'
                    },
                    {
                        id: 150,
                        name: 'print_albums_photo',
                        ru_name: 'Печать альбомов и фотокниг'
                    },
                    {
                        id: 151,
                        name: 'advertising_photography',
                        ru_name: 'Рекламная фотосъемка'
                    },
                    {
                        id: 152,
                        name: 'advertising_video',
                        ru_name: 'Рекламное видео'
                    },
                    {
                        id: 153,
                        name: 'retouching_restoring_photos',
                        ru_name: 'Ретушь и восстановление фото'
                    },
                    {
                        id: 154,
                        name: 'wedding_photographers',
                        ru_name: 'Свадебные фотографы'
                    },
                    {
                        id: 155,
                        name: 'studio_photography',
                        ru_name: 'Студийная фотосъемка'
                    },
                    {
                        id: 156,
                        name: 'other_services',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 13,
                name: 'cleaning_service',
                ru_name: 'Уборка',
                type: [
                    {
                        id: 157,
                        name: 'washing_windows_balconies',
                        ru_name: 'Мойка окон и балконов'
                    },
                    {
                        id: 158,
                        name: 'work_garden_plot',
                        ru_name: 'Работы в саду, на участке'
                    },
                    {
                        id: 159,
                        name: 'cleaning_apartments_houses',
                        ru_name: 'Уборка квартир и домов'
                    },
                    {
                        id: 160,
                        name: 'housekeeper_services',
                        ru_name: 'Услуги домработницы'
                    },
                    {
                        id: 161,
                        name: 'cleaning_laundry_ironing',
                        ru_name: 'Химчистка, стирка и глажка'
                    },
                    {
                        id: 162,
                        name: 'disinfection',
                        ru_name: 'Дезинфекция'
                    },
                    {
                        id: 163,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 14,
                name: 'custom_manufacturing',
                ru_name: 'Изготовление на заказ',
                type: [
                    {
                        id: 164,
                        name: 'manufacture_repair_clothing_shoes_accessories',
                        ru_name:
                            'Изготовление и ремонт одежды, обуви, аксессуаров'
                    },
                    {
                        id: 165,
                        name: 'custom_forged_products',
                        ru_name: 'Кованые изделия на заказ'
                    },
                    {
                        id: 166,
                        name: 'custom_furniture',
                        ru_name: 'Мебель на заказ'
                    },
                    {
                        id: 167,
                        name: 'music_poetry_voice_acting',
                        ru_name: 'Музыка, стихи и озвучка на заказ'
                    },
                    {
                        id: 168,
                        name: 'custom_seals_stamps',
                        ru_name: 'Печати и штампы на заказ'
                    },
                    {
                        id: 169,
                        name: 'drawing_painting_drawing',
                        ru_name: 'Рисунок, живопись и графика на заказ'
                    },
                    {
                        id: 170,
                        name: 'souvenir_products_printing',
                        ru_name: 'Сувенирная продукция и полиграфия'
                    },
                    {
                        id: 171,
                        name: 'jewelry_services',
                        ru_name: 'Ювелирные услуги'
                    },
                    {
                        id: 172,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 15,
                name: 'food_products',
                ru_name: 'Продукты питания',
                type: [
                    {
                        id: 173,
                        name: 'baked_goods_cakes',
                        ru_name: 'Выпечка и торты на заказ'
                    },
                    {
                        id: 174,
                        name: 'food_order',
                        ru_name: 'Еда на заказ'
                    },
                    {
                        id: 175,
                        name: 'cook_services',
                        ru_name: 'Услуги повара'
                    },
                    {
                        id: 176,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 16,
                name: 'animal_care',
                ru_name: 'Уход за животными',
                type: [
                    {
                        id: 177,
                        name: 'knit',
                        ru_name: 'Вязка'
                    },
                    {
                        id: 178,
                        name: 'training_walking',
                        ru_name: 'Дрессировка и выгул'
                    },
                    {
                        id: 179,
                        name: 'overexposure',
                        ru_name: 'Передержка'
                    },
                    {
                        id: 180,
                        name: 'grooming_animal_care',
                        ru_name: 'Стрижка и уход за животными'
                    },
                    {
                        id: 181,
                        name: 'other_services',
                        ru_name: 'Другие услуги'
                    }
                ]
            },
            {
                id: 17,
                name: 'other',
                ru_name: 'Другое',
                type: []
            }
        ]
    },
    {
        id: 7,
        has_auction: 1,
        mark: 'goods',
        ru_name: 'Вещи, Детские товары и украшения',
        subcategory: [
            {
                id: 1,
                name: 'womens_wardrobe',
                ru_name: 'Женский гардероб',
                type: [
                    {
                        id: 1,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 2,
                        name: 'blouses_shirts',
                        ru_name: 'Блузы и Рубашки'
                    },
                    {
                        id: 3,
                        name: 'for_expectant_m',
                        ru_name: 'Будущим мамам'
                    },
                    {
                        id: 4,
                        name: 'outerwear',
                        ru_name: 'Верхняя одежда'
                    },
                    {
                        id: 5,
                        name: 'hats',
                        ru_name: 'Головные уборы'
                    },
                    {
                        id: 6,
                        name: 'home_clothes',
                        ru_name: 'Домашняя одежда'
                    },
                    {
                        id: 7,
                        name: 'overalls',
                        ru_name: 'Комбинезоны'
                    },
                    {
                        id: 8,
                        name: 'swimwear',
                        ru_name: 'Купальники'
                    },
                    {
                        id: 9,
                        name: 'underwear',
                        ru_name: 'Нижнее белье'
                    },
                    {
                        id: 10,
                        name: 'footwear',
                        ru_name: 'Обувь'
                    },
                    {
                        id: 11,
                        name: 'blazers_and_sui',
                        ru_name: 'Пиджаки и костюмы'
                    },
                    {
                        id: 12,
                        name: 'dresses_and_ski',
                        ru_name: 'Платья и юбки'
                    },
                    {
                        id: 13,
                        name: 'sweaters_hoodie',
                        ru_name: 'Свитеры и толстовки'
                    },
                    {
                        id: 14,
                        name: 'sportswear',
                        ru_name: 'Спортивная одежда'
                    },
                    {
                        id: 15,
                        name: 'overalls_and_un',
                        ru_name: 'Спецодежда и униформа'
                    },
                    {
                        id: 16,
                        name: 'tshirts_and_top',
                        ru_name: 'Футболки и топы'
                    },
                    {
                        id: 17,
                        name: 'pants_and_short',
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
                name: 'mens_wardrobe',
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
                        name: 'home_clothes',
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
                        name: 'blazers_and_sui',
                        ru_name: 'Пиджаки и костюмы'
                    },
                    {
                        id: 27,
                        name: 'shirts',
                        ru_name: 'Рубашки'
                    },
                    {
                        id: 28,
                        name: 'sweaters_hoodie',
                        ru_name: 'Свитеры и толстовки'
                    },
                    {
                        id: 29,
                        name: 'overalls_and_un',
                        ru_name: 'Спецодежда'
                    },
                    {
                        id: 30,
                        name: 'sportswear',
                        ru_name: 'Спортивная одежда'
                    },
                    {
                        id: 31,
                        name: 'tshirts_and_pol',
                        ru_name: 'Футболки и поло'
                    },
                    {
                        id: 32,
                        name: 'pants_and_short',
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
                name: 'childrens_clothing',
                ru_name: 'Детская одежда',
                type: [
                    {
                        id: 34,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 35,
                        name: 'blouses_shirts',
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
                        name: 'home_clothes',
                        ru_name: 'Домашняя одежда'
                    },
                    {
                        id: 39,
                        name: 'jumpsuits_bodys',
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
                        name: 'blazers_suits',
                        ru_name: 'Пиджаки и костюмы'
                    },
                    {
                        id: 44,
                        name: 'dresses_skirts',
                        ru_name: 'Платья и юбки'
                    },
                    {
                        id: 45,
                        name: 'romper_undershi',
                        ru_name: 'Ползунки и распашонки'
                    },
                    {
                        id: 46,
                        name: 'sweaters_hoodie',
                        ru_name: 'Свитеры и толстовки'
                    },
                    {
                        id: 47,
                        name: 'sportswear',
                        ru_name: 'Спортивная одежда'
                    },
                    {
                        id: 48,
                        name: 't_shirts',
                        ru_name: 'Футболки'
                    },
                    {
                        id: 49,
                        name: 'pants_shorts',
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
                name: 'products_children_toys',
                ru_name: 'Товары для детей и игрушки',
                type: [
                    {
                        id: 51,
                        name: 'car_seats',
                        ru_name: 'Автокресла'
                    },
                    {
                        id: 52,
                        name: 'health_and_care',
                        ru_name: 'Здоровье и уход'
                    },
                    {
                        id: 53,
                        name: 'toys_and_games',
                        ru_name: 'Игрушки и игры'
                    },
                    {
                        id: 54,
                        name: 'strollers_selec',
                        ru_name: 'Коляски'
                    },
                    {
                        id: 55,
                        name: 'feeding_and_nut',
                        ru_name: 'Кормление и питание'
                    },
                    {
                        id: 56,
                        name: 'bathing',
                        ru_name: 'Купание'
                    },
                    {
                        id: 57,
                        name: 'all_for_the_nur',
                        ru_name: 'Все для детской'
                    },
                    {
                        id: 58,
                        name: 'nappies_pots',
                        ru_name: 'Подгузники и горшки'
                    },
                    {
                        id: 59,
                        name: 'radio_video_bab',
                        ru_name: 'Радио- и видеоняни'
                    },
                    {
                        id: 60,
                        name: 'goods_for_moms',
                        ru_name: 'Товары для мам'
                    },
                    {
                        id: 61,
                        name: 'goods_for_study',
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
                        name: 'dolls_and_toys',
                        ru_name: 'Куклы и игрушки'
                    },
                    {
                        id: 66,
                        name: 'decoration_of_a',
                        ru_name: 'Оформление интерьера'
                    },
                    {
                        id: 67,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 68,
                        name: 'decoration_of_h',
                        ru_name: 'Оформление праздников'
                    },
                    {
                        id: 69,
                        name: 'office',
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
                name: 'beauty_health',
                ru_name: 'Красота и здоровье',
                type: [
                    {
                        id: 72,
                        name: 'makeup',
                        ru_name: 'Макияж'
                    },
                    {
                        id: 73,
                        name: 'manicure_pedicu',
                        ru_name: 'Маникюр и педикюр'
                    },
                    {
                        id: 74,
                        name: 'health_products',
                        ru_name: 'Товары для здоровья'
                    },
                    {
                        id: 75,
                        name: 'perfumery',
                        ru_name: 'Парфюмерия'
                    },
                    {
                        id: 76,
                        name: 'haircut_hair_re',
                        ru_name: 'Стрижка и удаление волос'
                    },
                    {
                        id: 77,
                        name: 'hair_care',
                        ru_name: 'Уход за волосами'
                    },
                    {
                        id: 78,
                        name: 'skin_care',
                        ru_name: 'Уход за кожей'
                    },
                    {
                        id: 79,
                        name: 'hair_dryers_sty',
                        ru_name: 'Фены и укладка'
                    },
                    {
                        id: 80,
                        name: 'tattoo_permanen',
                        ru_name: 'Тату и татуаж'
                    },
                    {
                        id: 81,
                        name: 'solariums_and_t',
                        ru_name: 'Солярии и загар'
                    },
                    {
                        id: 82,
                        name: 'hygiene_product',
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
        has_auction: 1,
        mark: 'home',
        ru_name: 'Для дома и дачи',
        subcategory: [
            {
                id: 1,
                name: 'furniture_interior',
                ru_name: 'Мебель и интерьер',
                type: [
                    {
                        id: 1,
                        name: 'sofas_armchairs',
                        ru_name: 'Диваны и кресла'
                    },
                    {
                        id: 2,
                        name: 'beds_mattresses',
                        ru_name: 'Кровати и матрасы'
                    },
                    {
                        id: 3,
                        name: 'kitchen_sets',
                        ru_name: 'Кухонные гарнитуры'
                    },
                    {
                        id: 4,
                        name: 'lighting',
                        ru_name: 'Освещение'
                    },
                    {
                        id: 5,
                        name: 'interior_design',
                        ru_name: 'Оформление интерьера'
                    },
                    {
                        id: 6,
                        name: 'security_alarm_systems',
                        ru_name: 'Охрана и сигнализации'
                    },
                    {
                        id: 7,
                        name: 'coasters_pedestals',
                        ru_name: 'Подставки и тумбы'
                    },
                    {
                        id: 8,
                        name: 'garden_furniture',
                        ru_name: 'Садовая мебель'
                    },
                    {
                        id: 9,
                        name: 'garden_vegetable_garden',
                        ru_name: 'Сад и огород'
                    },
                    {
                        id: 10,
                        name: 'tables_chairs',
                        ru_name: 'Столы и стулья'
                    },
                    {
                        id: 11,
                        name: 'textiles_carpets',
                        ru_name: 'Текстиль и ковры'
                    },
                    {
                        id: 12,
                        name: 'cabinets_dressers',
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
                name: 'tableware_goods_kitchen',
                ru_name: 'Посуда и товары для кухни',
                type: [
                    {
                        id: 14,
                        name: 'tableware',
                        ru_name: 'Посуда'
                    },
                    {
                        id: 15,
                        name: 'products_kitchen',
                        ru_name: 'Товары для кухни'
                    },
                    {
                        id: 16,
                        name: 'household_chemicals',
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
                name: 'food_products',
                ru_name: 'Продукты питания',
                type: []
            },
            {
                id: 4,
                name: 'repair_construction',
                ru_name: 'Ремонт и строительство',
                type: [
                    {
                        id: 18,
                        name: 'doors',
                        ru_name: 'Двери'
                    },
                    {
                        id: 19,
                        name: 'measuring_instruments',
                        ru_name: 'Измерительные инструменты'
                    },
                    {
                        id: 20,
                        name: 'windows',
                        ru_name: 'Окна'
                    },
                    {
                        id: 21,
                        name: 'heating_and_ventilation',
                        ru_name: 'Отопление и вентиляция'
                    },
                    {
                        id: 22,
                        name: 'ceilings',
                        ru_name: 'Потолки'
                    },
                    {
                        id: 23,
                        name: 'hand_tools',
                        ru_name: 'Ручные инструменты'
                    },
                    {
                        id: 24,
                        name: 'plumbing_and_water_supply',
                        ru_name: 'Сантехника и водоснабжение'
                    },
                    {
                        id: 25,
                        name: 'building_materials',
                        ru_name: 'Стройматериалы'
                    },
                    {
                        id: 26,
                        name: 'electrician',
                        ru_name: 'Электрика'
                    },
                    {
                        id: 27,
                        name: 'power_tools',
                        ru_name: 'Электроинструменты'
                    },
                    {
                        id: 28,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            }
        ]
    },
    {
        id: 9,
        has_auction: 1,
        mark: 'electronics',
        ru_name: 'Электроника',
        subcategory: [
            {
                id: 1,
                name: 'phones_tablets',
                ru_name: 'Телефоны и планшеты',
                type: [
                    {
                        id: 1,
                        name: 'mobile_phones',
                        ru_name: 'Мобильные телефоны'
                    },
                    {
                        id: 2,
                        name: 'tablets',
                        ru_name: 'Планшеты'
                    },
                    {
                        id: 3,
                        name: 'smart_watches_and_wristbands',
                        ru_name: 'Умные часы и браслеты'
                    },
                    {
                        id: 4,
                        name: 'e_books',
                        ru_name: 'Электронные книги'
                    },
                    {
                        id: 5,
                        name: 'landlines',
                        ru_name: 'Стационарные телефоны'
                    },
                    {
                        id: 6,
                        name: 'walkie_talkies_and_satellite_phones',
                        ru_name: 'Рации и спутниковые телефоны'
                    },
                    {
                        id: 7,
                        name: 'spare_parts',
                        ru_name: 'Запчасти'
                    },
                    {
                        id: 8,
                        name: 'external_batteries',
                        ru_name: 'Внешние аккумуляторы'
                    },
                    {
                        id: 9,
                        name: 'chargers',
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
                name: 'photo_video_cameras',
                ru_name: 'Фото и видеокамеры',
                type: [
                    {
                        id: 13,
                        name: 'cameras',
                        ru_name: 'Фотоаппараты'
                    },
                    {
                        id: 14,
                        name: 'video_cameras',
                        ru_name: 'Видеокамеры'
                    },
                    {
                        id: 15,
                        name: 'video_surveillance',
                        ru_name: 'Видеонаблюдение'
                    },
                    {
                        id: 16,
                        name: 'lenses',
                        ru_name: 'Объективы'
                    },
                    {
                        id: 17,
                        name: 'flash',
                        ru_name: 'Фотовспышки'
                    },
                    {
                        id: 18,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 19,
                        name: 'tripods_and_stabilizers',
                        ru_name: 'Штативы и стабилизаторы'
                    },
                    {
                        id: 20,
                        name: 'studio_equipment',
                        ru_name: 'Студийное оборудование'
                    },
                    {
                        id: 21,
                        name: 'digital_cameras',
                        ru_name: 'Цифровые фоторамки'
                    },
                    {
                        id: 22,
                        name: 'compact_photo_printers',
                        ru_name: 'Компактные фотопринтеры'
                    },
                    {
                        id: 23,
                        name: 'binoculars_and_optical_instruments',
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
                name: 'tv_audio_video',
                ru_name: 'Тв, аудио, видео',
                type: [
                    {
                        id: 25,
                        name: 'tv_sets',
                        ru_name: 'Телевизоры'
                    },
                    {
                        id: 26,
                        name: 'projectors',
                        ru_name: 'Проекторы'
                    },
                    {
                        id: 27,
                        name: 'acoustics_speakers_subwoofers',
                        ru_name: 'Акустика, колонки, сабвуферы'
                    },
                    {
                        id: 28,
                        name: 'home_theaters',
                        ru_name: 'Домашние кинотеатры'
                    },
                    {
                        id: 29,
                        name: 'dvd_blu_ray_and_media_players',
                        ru_name: 'DVD, Blu-ray и медиаплееры'
                    },
                    {
                        id: 30,
                        name: 'music_centers_and_tape_recorders',
                        ru_name: 'Музыкальные центры и магнитолы'
                    },
                    {
                        id: 31,
                        name: 'mp3_players_and_portable_audio',
                        ru_name: 'MP3-плееры и портативное аудио'
                    },
                    {
                        id: 32,
                        name: 'satellite_and_digital_tv',
                        ru_name: 'Спутниковое и цифровое ТВ'
                    },
                    {
                        id: 33,
                        name: 'audio_amplifiers_and_receivers',
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
                        name: 'scales',
                        ru_name: 'Весы'
                    },
                    {
                        id: 39,
                        name: 'hoods',
                        ru_name: 'Вытяжки'
                    },
                    {
                        id: 40,
                        name: 'grinding_and_mixing',
                        ru_name: 'Измельчение и смешивание'
                    },
                    {
                        id: 41,
                        name: 'glimate_control_equipment',
                        ru_name: 'Климатическая техника'
                    },
                    {
                        id: 42,
                        name: 'coolers_and_water_filters',
                        ru_name: 'Кулеры и фильтры для воды'
                    },
                    {
                        id: 43,
                        name: 'stoves_and_ovens',
                        ru_name: 'Плиты и духовые шкафы'
                    },
                    {
                        id: 44,
                        name: 'dishwashers',
                        ru_name: 'Посудомоечные машины'
                    },
                    {
                        id: 45,
                        name: 'cooking_food',
                        ru_name: 'Приготовление еды'
                    },
                    {
                        id: 46,
                        name: 'preparation_of_drinks',
                        ru_name: 'Приготовление напитков'
                    },
                    {
                        id: 47,
                        name: 'vacuum_cleaners_and_steam_cleaners',
                        ru_name: 'Пылесосы и пароочистители'
                    },
                    {
                        id: 48,
                        name: 'washing_machines',
                        ru_name: 'Стиральные машины'
                    },
                    {
                        id: 49,
                        name: 'irons_and_clothing_care',
                        ru_name: 'Утюги и уход за одеждой'
                    },
                    {
                        id: 50,
                        name: 'refrigerators',
                        ru_name: 'Холодильники'
                    },
                    {
                        id: 51,
                        name: 'sewing_equipment',
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
                name: 'computer_equipment',
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
                        name: 'keyboards_and_mice',
                        ru_name: 'Клавиатуры и мыши'
                    },
                    {
                        id: 57,
                        name: 'office_equipment_and_consumables',
                        ru_name: 'Оргтехника и расходники'
                    },
                    {
                        id: 58,
                        name: 'network_equipment',
                        ru_name: 'Сетевое оборудование'
                    },
                    {
                        id: 59,
                        name: 'multimedia',
                        ru_name: 'Мультимедиа'
                    },
                    {
                        id: 60,
                        name: 'data_storage_and_card_readers',
                        ru_name: 'Накопители данных и картридеры'
                    },
                    {
                        id: 61,
                        name: 'steering_wheels_joysticks_gamepads',
                        ru_name: 'Рули, джойстики, геймпады'
                    },
                    {
                        id: 62,
                        name: 'components_and_spare_parts',
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
                name: 'games_consoles_software',
                ru_name: 'Игры, приставки и программы',
                type: [
                    {
                        id: 65,
                        name: 'game_consoles_selector',
                        ru_name: 'Игровые приставки'
                    },
                    {
                        id: 66,
                        name: 'games_for_consoles',
                        ru_name: 'Игры для приставок '
                    },
                    {
                        id: 67,
                        name: 'computer_games',
                        ru_name: 'Компьютерные игры'
                    },
                    {
                        id: 68,
                        name: 'programs',
                        ru_name: 'Программы'
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
        has_auction: 1,
        mark: 'hobbies',
        ru_name: 'Хобби и отдых',
        subcategory: [
            {
                id: 1,
                name: 'ticket',
                ru_name: 'Билеты',
                type: []
            },
            {
                id: 2,
                name: 'videos',
                ru_name: 'Видеофильмы',
                type: []
            },
            {
                id: 3,
                name: 'books_magazines',
                ru_name: 'Книги и журналы',
                type: []
            },
            {
                id: 4,
                name: 'collectibles',
                ru_name: 'Коллекционирование',
                type: [
                    {
                        id: 21,
                        name: 'antique_furniture_tableware',
                        ru_name: 'Антикварная мебель, посуда'
                    },
                    {
                        id: 22,
                        name: 'banknotes',
                        ru_name: 'Банкноты'
                    },
                    {
                        id: 23,
                        name: 'tickets',
                        ru_name: 'Билеты'
                    },
                    {
                        id: 24,
                        name: 'things_celebrities_autographs',
                        ru_name: 'Вещи знаменитостей, автографы'
                    },
                    {
                        id: 25,
                        name: 'vinyl_records',
                        ru_name: 'Виниловые пластинки'
                    },
                    {
                        id: 26,
                        name: 'inserts_stickers',
                        ru_name: 'Вкладыши, наклейки'
                    },
                    {
                        id: 27,
                        name: 'military_stuff',
                        ru_name: 'Военные вещи'
                    },
                    {
                        id: 28,
                        name: 'documents',
                        ru_name: 'Документы'
                    },
                    {
                        id: 29,
                        name: 'tokens_medals_badges',
                        ru_name: 'Жетоны, медали, значки'
                    },
                    {
                        id: 30,
                        name: 'calendars',
                        ru_name: 'Календари'
                    },
                    {
                        id: 31,
                        name: 'kinder_surprises',
                        ru_name: 'Киндер-сюрпризы'
                    },
                    {
                        id: 32,
                        name: 'books_magazines_manuscripts',
                        ru_name: 'Книги, журналы, рукописи'
                    },
                    {
                        id: 33,
                        name: 'envelopes_postcards',
                        ru_name: 'Конверты, открытки'
                    },
                    {
                        id: 34,
                        name: 'piggy_banks',
                        ru_name: 'Копилки'
                    },
                    {
                        id: 35,
                        name: 'dolls_toys',
                        ru_name: 'Куклы, игрушки'
                    },
                    {
                        id: 36,
                        name: 'magnets',
                        ru_name: 'Магниты'
                    },
                    {
                        id: 37,
                        name: 'stamps',
                        ru_name: 'Марки'
                    },
                    {
                        id: 38,
                        name: 'models',
                        ru_name: 'Модели'
                    },
                    {
                        id: 39,
                        name: 'coins_numismatics',
                        ru_name: 'Монеты, нумизматика'
                    },
                    {
                        id: 40,
                        name: 'musical_instruments',
                        ru_name: 'Музыкальные инструменты'
                    },
                    {
                        id: 41,
                        name: 'ashtrays_lighters',
                        ru_name: 'Пепельницы, зажигалки'
                    },
                    {
                        id: 42,
                        name: 'plastic_cards',
                        ru_name: 'Пластиковые карточки'
                    },
                    {
                        id: 43,
                        name: 'art_objects_paintings',
                        ru_name: 'Предметы искусства, картины'
                    },
                    {
                        id: 44,
                        name: 'figurines_figurines',
                        ru_name: 'Статуэтки, фигурки'
                    },
                    {
                        id: 45,
                        name: 'jewelry_accessories',
                        ru_name: 'Украшения, аксессуары'
                    },
                    {
                        id: 46,
                        name: 'photos_letters',
                        ru_name: 'Фотографии, письма'
                    },
                    {
                        id: 47,
                        name: 'chess_games',
                        ru_name: 'Шахматы, игры'
                    },
                    {
                        id: 48,
                        name: 'jewelry_boxes',
                        ru_name: 'Шкатулки'
                    },
                    {
                        id: 49,
                        name: 'labels_bottles_corks',
                        ru_name: 'Этикетки, бутылки, пробки'
                    },
                    {
                        id: 50,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 5,
                name: 'materials_creativity',
                ru_name: 'Материалы для творчества',
                type: []
            },
            {
                id: 6,
                name: 'music',
                ru_name: 'Музыка',
                type: []
            },
            {
                id: 7,
                name: 'musical_instruments',
                ru_name: 'Музыкальные инструменты',
                type: [
                    {
                        id: 67,
                        name: 'accordion_accordion_accordion',
                        ru_name: 'Аккордеон, гармони, баяны'
                    },
                    {
                        id: 68,
                        name: 'acoustic_guitars',
                        ru_name: 'Акустические гитары'
                    },
                    {
                        id: 69,
                        name: 'classical_guitars',
                        ru_name: 'Классические гитары'
                    },
                    {
                        id: 70,
                        name: 'bass_guitars',
                        ru_name: 'Бас-гитары'
                    },
                    {
                        id: 71,
                        name: 'electric_guitars',
                        ru_name: 'Электрогитары'
                    },
                    {
                        id: 72,
                        name: 'guitar_gain',
                        ru_name: 'Гитарное усиление'
                    },
                    {
                        id: 73,
                        name: 'wind_instruments',
                        ru_name: 'Духовые инструменты'
                    },
                    {
                        id: 74,
                        name: 'keyboards',
                        ru_name: 'Клавишные'
                    },
                    {
                        id: 75,
                        name: 'mixing_consoles',
                        ru_name: 'Микшерные пульты'
                    },
                    {
                        id: 76,
                        name: 'folk_instruments',
                        ru_name: 'Народные инструменты'
                    },
                    {
                        id: 77,
                        name: 'effect_pedals',
                        ru_name: 'Педали эффектов'
                    },
                    {
                        id: 78,
                        name: 'violins_bowed',
                        ru_name: 'Скрипки, смычковые'
                    },
                    {
                        id: 79,
                        name: 'percussion_instruments',
                        ru_name: 'Ударные инструменты'
                    },
                    {
                        id: 80,
                        name: 'accessories',
                        ru_name: 'Аксессуары'
                    },
                    {
                        id: 81,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            },
            {
                id: 8,
                name: 'table_games',
                ru_name: 'Настольные игры',
                type: []
            },
            {
                id: 9,
                name: 'sports_recreation',
                ru_name: 'Спорт и отдых ',
                type: [
                    {
                        id: 98,
                        name: 'sports_protection',
                        ru_name: 'Спортивная защита велосипеды'
                    },
                    {
                        id: 99,
                        name: 'bicycles',
                        ru_name: 'Ввелосипеды'
                    },
                    {
                        id: 100,
                        name: 'roller_skates_and_skateboarding',
                        ru_name: 'Ролики и скейтбординг'
                    },
                    {
                        id: 101,
                        name: 'scooters_and_gyrometer',
                        ru_name: 'Самокаты и гироскутеры'
                    },
                    {
                        id: 102,
                        name: 'billiards_and_bowling',
                        ru_name: 'Бильярд и боулинг'
                    },
                    {
                        id: 103,
                        name: 'water_sports',
                        ru_name: 'Водные виды спорта'
                    },
                    {
                        id: 104,
                        name: 'martial_arts',
                        ru_name: 'Единоборства'
                    },
                    {
                        id: 105,
                        name: 'winter_sports',
                        ru_name: 'Зимние виды спорта'
                    },
                    {
                        id: 106,
                        name: 'ball_games',
                        ru_name: 'Игры с мячом'
                    },
                    {
                        id: 107,
                        name: 'hunting_and_fishing',
                        ru_name: 'Охота и рыбалка'
                    },
                    {
                        id: 108,
                        name: 'tourism_and_outdoor_recreation',
                        ru_name: 'Туризм и отдых на природе'
                    },
                    {
                        id: 109,
                        name: 'tennis_badminton_darts',
                        ru_name: 'Теннис, бадминтон, дартс'
                    },
                    {
                        id: 110,
                        name: 'exercise_machines_and_fitness_equipment',
                        ru_name: 'Тренажеры и фитнес'
                    },
                    {
                        id: 111,
                        name: 'sports_nutrition',
                        ru_name: 'Спортивное питание'
                    },
                    {
                        id: 112,
                        name: 'other',
                        ru_name: 'Другое'
                    }
                ]
            }
        ]
    },
    {
        id: 11,
        has_auction: 1,
        mark: 'animal',
        ru_name: 'Животные',
        subcategory: [
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
                name: 'fish',
                ru_name: 'Рыбки'
            },
            {
                id: 6,
                name: 'farm_animals',
                ru_name: 'Сельскохозяйственные животные'
            },
            {
                id: 7,
                name: 'other_animals',
                ru_name: 'Другие животные'
            },
            {
                id: 8,
                name: 'pet_products',
                ru_name: 'Товары для животных'
            }
        ]
    }
];
