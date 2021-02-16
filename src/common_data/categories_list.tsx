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
        has_auction: false,
        icon: {url: Car},
        smallIcon: <CarIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'madeInUzb',
                parents: [{id: 1, name: 'car'}],
            },
            {
                id: 2,
                name: 'foreignCars',
                parents: [{id: 1, name: 'car'}],
            }
        ]
    },
    {
        id: 2,
        name: 'transport',
        has_auction: false,
        icon: {url: Transport},
        smallIcon: <SpecTechIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'motorcyclesAndMotorTech',
                parents: [{id: 2, name: 'transport'}],
                type: [
                    {
                        id: 1,
                        name: 'motorcycles',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 1, name: 'motorcyclesAndMotorTech'},
                        ]
                    },
                    {
                        id: 2,
                        name: 'mopedsAndScooters',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 1, name: 'motorcyclesAndMotorTech'},
                        ]
                    },
                    {
                        id: 3,
                        name: 'quadBikes',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 1, name: 'motorcyclesAndMotorTech'},
                        ]
                    },
                    {
                        id: 4,
                        name: 'carting',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 1, name: 'motorcyclesAndMotorTech'}
                        ]
                    },
                    {
                        id: 5,
                        name: 'snowmobiles',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 1, name: 'motorcyclesAndMotorTech'}
                        ]
                    },
                    {
                        id: 6,
                        name: 'buggy',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 1, name: 'motorcyclesAndMotorTech'}
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: 'busesAndTrucks',
                parents: [{id: 2, name: 'transport'}],
                type: [
                    {
                        id: 7,
                        name: 'buses',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 2, name: 'busesAndTrucks'},
                        ],
                    },
                    {
                        id: 8,
                        name: 'minibuses',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 2, name: 'busesAndTrucks'},
                        ],
                    },
                    {
                        id: 9,
                        name: 'refrigeratedTruck',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 2, name: 'busesAndTrucks'},
                        ],
                    },
                    {
                        id: 10,
                        name: 'motorHomes',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 2, name: 'busesAndTrucks'},
                        ],
                    },
                    {
                        id: 11,
                        name: 'trucks',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 2, name: 'busesAndTrucks'},
                        ],
                    },
                    {
                        id: 12,
                        name: 'commercialTransport',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 2, name: 'busesAndTrucks'},
                        ],
                    },
                    {
                        id: 13,
                        name: 'trailers',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 2, name: 'busesAndTrucks'},
                        ],
                    },
                    {
                        id: 14,
                        name: 'tractorUnits',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 2, name: 'busesAndTrucks'},
                        ],
                    },
                    {
                        id: 15,
                        name: 'foodTruck',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 2, name: 'busesAndTrucks'},
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: 'specTech',
                parents: [{id: 2, name: 'transport'}],
                type: [
                    {
                        id: 16,
                        name: 'aerialPlatform',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 3, name: 'specTech'},
                        ]
                    },
                    {
                        id: 17,
                        name: 'truckCranes',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 3, name: 'specTech'},
                        ]
                    },
                    {
                        id: 18,
                        name: 'bulldozers',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 3, name: 'specTech'},
                        ]
                    },
                    {
                        id: 19,
                        name: 'utilityTechnology',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 3, name: 'specTech'},
                        ]
                    },
                    {
                        id: 20,
                        name: 'loaders',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 3, name: 'specTech'},
                        ]
                    },
                    {
                        id: 21,
                        name: 'agriculturalMachinery',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 3, name: 'specTech'},
                        ]
                    },
                    {
                        id: 22,
                        name: 'constructionMachinery',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 3, name: 'specTech'},
                        ]
                    },
                    {
                        id: 23,
                        name: 'forestryEquipment',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 3, name: 'specTech'},
                        ]
                    },
                    {
                        id: 24,
                        name: 'excavators',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 3, name: 'specTech'},
                        ]
                    },
                    {
                        id: 25,
                        name: 'Другие',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 3, name: 'specTech'},
                        ]
                    }
                ]
            },
            {
                id: 4,
                name: 'waterTransport',
                parents: [{id: 2, name: 'transport'}],
                type: [
                    {
                        id: 26,
                        name: 'rowingBoats',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 4, name: 'waterTransport'},
                        ],
                    },
                    {
                        id: 27,
                        name: 'jetSkis',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 4, name: 'waterTransport'},
                        ],
                    },
                    {
                        id: 28,
                        name: 'boatsAndYachts',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 4, name: 'waterTransport'},
                        ],
                    },
                    {
                        id: 29,
                        name: 'kayaksAndCanoes',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 4, name: 'waterTransport'},
                        ],
                    },
                    {
                        id: 30,
                        name: 'motorBoats',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 4, name: 'waterTransport'},
                        ],
                    },
                    {
                        id: 31,
                        name: 'inflatableBoat',
                        parents: [
                            {id: 2, name: 'transport'},
                            {id: 4, name: 'waterTransport'},
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
        icon: {url: Parts},
        smallIcon: <PartsIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'forCars',
                parents: [{id: 3, name: 'parts'}],
                type: []
            },
            {
                id: 2,
                name: 'forMotorcyclesAndMotortech',
                parents: [{id: 3, name: 'parts'}],
                type: [
                    {
                        id: 1,
                        name: 'motorcycles',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 2, name: 'forMotorcyclesAndMotortech'},
                        ],
                    },
                    {
                        id: 2,
                        name: 'mopedsAndScooters',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 2, name: 'forMotorcyclesAndMotortech'},
                        ],
                    },
                    {
                        id: 3,
                        name: 'quadBikes',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 2, name: 'forMotorcyclesAndMotortech'},
                        ],
                    },
                    {
                        id: 4,
                        name: 'carting',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 2, name: 'forMotorcyclesAndMotortech'},
                        ],
                    },
                    {
                        id: 5,
                        name: 'snowmobiles',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 2, name: 'forMotorcyclesAndMotortech'},
                        ],
                    },
                    {
                        id: 6,
                        name: 'buggy',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 2, name: 'forMotorcyclesAndMotortech'},
                        ]
                    }
                ]
            },
            {
                id: 3,
                name: 'Для автобусов и грузовиков',
                parents: [{id: 3, name: 'parts'}],
                type: [
                    {
                        id: 7,
                        name: 'Автобусы',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 3, name: 'Для автобусов и грузовиков'},
                        ],
                    },
                    {
                        id: 8,
                        name: 'Микроавтобусы',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 3, name: 'Для автобусов и грузовиков'},
                        ],
                    },
                    {
                        id: 9,
                        name: 'Авторефрижератор',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 3, name: 'Для автобусов и грузовиков'},
                        ],
                    },
                    {
                        id: 10,
                        name: 'Автодома',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 3, name: 'Для автобусов и грузовиков'},
                        ],
                    },
                    {
                        id: 11,
                        name: 'Грузовики',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 3, name: 'Для автобусов и грузовиков'},
                        ],
                    },
                    {
                        id: 12,
                        name: 'Легкий коммерческий транспорт',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 3, name: 'Для автобусов и грузовиков'},
                        ],
                    },
                    {
                        id: 13,
                        name: 'Прицепы',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 3, name: 'Для автобусов и грузовиков'},
                        ],
                    },
                    {
                        id: 14,
                        name: 'Тягачи',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 3, name: 'Для автобусов и грузовиков'},
                        ],
                    },
                    {
                        id: 15,
                        name: 'Фудтрак',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 3, name: 'Для автобусов и грузовиков'},
                        ],
                    },
                    {
                        id: 16,
                        name: 'Другие',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 3, name: 'Для автобусов и грузовиков'},
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'Для спецтехники',
                parents: [{id: 3, name: 'parts'}],
                type: [
                    {
                        id: 17,
                        name: 'aerialPlatform',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 4, name: 'Для спецтехники'},
                        ]
                    },
                    {
                        id: 18,
                        name: 'truckCranes',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 4, name: 'Для спецтехники'},
                        ],
                    },
                    {
                        id: 19,
                        name: 'bulldozers',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 4, name: 'Для спецтехники'},
                        ],
                    },
                    {
                        id: 20,
                        name: 'utilityTechnology',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 4, name: 'Для спецтехники'}
                        ]
                    },
                    {
                        id: 21,
                        name: 'loaders',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 4, name: 'Для спецтехники'},
                        ],
                    },
                    {
                        id: 22,
                        name: 'agriculturalMachinery',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 4, name: 'Для спецтехники'},
                        ],
                    },
                    {
                        id: 23,
                        name: 'constructionMachinery',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 4, name: 'Для спецтехники'},
                        ],
                    },
                    {
                        id: 24,
                        name: 'forestryEquipment',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 4, name: 'Для спецтехники'},
                        ],
                    },
                    {
                        id: 25,
                        name: 'excavators',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 4, name: 'Для спецтехники'},
                        ],
                    },
                    {
                        id: 26,
                        name: 'others',
                        parents: [
                            {id: 3, name: 'parts'},
                            {id: 4, name: 'Для спецтехники'},
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'forWaterTransport',
                parents: [{id: 3, name: 'parts'}],
            }
        ]
    },
    {
        id: 4,
        name: 'estate',
        has_auction: false,
        icon: {url: Estate},
        smallIcon: <ApartmentsIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'apartments',
                parents: [{id: 4, name: 'estate'}],
                type: [
                    {
                        id: 1,
                        name: 'sale',
                        parents: [
                            {id: 4, name: 'estate'},
                            {id: 1, name: 'apartments'},
                        ],
                    },
                    {
                        id: 2,
                        name: 'longTermRent',
                        parents: [
                            {id: 4, name: 'estate'},
                            {id: 1, name: 'apartments'},
                        ],
                    },
                    {
                        id: 3,
                        name: 'dailyRent',
                        parents: [
                            {id: 4, name: 'estate'},
                            {id: 1, name: 'apartments'},
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: 'housesCottages',
                parents: [{id: 4, name: 'estate'}],
                'type': [],
            },
            {
                id: 3,
                name: 'land',
                parents: [{id: 4, name: 'estate'}],
                'type': [],
            },
            {
                id: 4,
                name: 'parkingLotsAndBoxes',
                parents: [{id: 4, name: 'estate'}],
                'type': [],
            },
            {
                id: 5,
                name: 'commercialProperty',
                parents: [{id: 4, name: 'estate'}],
                'type': [],
            },
        ],
    },
    {
        id: 5,
        name: 'job',
        has_auction: false,
        icon: {url: Job},
        smallIcon: <JobIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'vacancies',
                parents: [{id: 5, name: 'job'}],
                type: [
                    {
                        id: 1,
                        name: 'autoBusiness',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 2,
                        name: 'safetyAndSecurity',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 3,
                        name: 'officeStaff',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 4,
                        name: 'topManagement',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 5,
                        name: 'extractionMaterials',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 6,
                        name: 'homeStaff',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 7,
                        name: 'publishersAndMedia',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 8,
                        name: 'informationTechnology',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 9,
                        name: 'artsAndEntertainment',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 10,
                        name: 'procurement',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 11,
                        name: 'marketingAndAdvertising',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 12,
                        name: 'medicineAndPharmaceuticals',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 13,
                        name: 'careerStart',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 14,
                        name: 'educationAndScience',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 15,
                        name: 'handymen',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 16,
                        name: 'logisticsAndTransport',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 17,
                        name: 'sales',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 18,
                        name: 'production',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 19,
                        name: 'restaurantsAndCatering',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 20,
                        name: 'agriculture',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 21,
                        name: 'sportsAndBeauty',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 22,
                        name: 'insurance',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 23,
                        name: 'constructionAndRepair',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 24,
                        name: 'tourismAndHotels',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 25,
                        name: 'Property',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 26,
                        name: 'accountingAndFinance',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 27,
                        name: 'bankingSector',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 28,
                        name: 'personnelManagement',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 29,
                        name: 'jurisprudence',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ],
                    },
                    {
                        id: 30,
                        name: 'others',
                        parents: [
                            {id: 5, name: 'job'},
                            {id: 1, name: 'vacancies'},
                        ]
                    }
                ]
            },
            {
                id: 2,
                name: 'Резюме',
                parents: [{id: 5, name: 'job'}],
            }
        ]
    },
    {
        id: 6,
        name: 'service',
        has_auction: false,
        icon: {url: Service},
        smallIcon: <ServicesIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'repairAndConstruction',
                parents: [{id: 6, name: 'Услуги'}],
                type: [
                    {
                        id: 1,
                        name: 'interiorDesign',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 2,
                        name: 'housesAndCottages',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 3,
                        name: 'roofing',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 4,
                        name: 'paintingWorks',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 5,
                        name: 'minorRepairs',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 6,
                        name: 'stretchCeiling',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 7,
                        name: 'apartmentRenovation',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 8,
                        name: 'glazingAndWindowRepair',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 9,
                        name: 'designWork',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 10,
                        name: 'renovationOfApartments',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 11,
                        name: 'furnitureAssembly',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 12,
                        name: 'weldingWorks',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 13,
                        name: 'layingAndRepairingTiles',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 14,
                        name: 'carpenters',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 15,
                        name: 'plumbers',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 16,
                        name: 'electricians',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 17,
                        name: 'installationAndRepairDoors',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 18,
                        name: 'plasteringWorks',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 19,
                        name: 'pickingLocks',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 20,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 1, name: 'repairAndConstruction'},
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'masterForAnHour',
                parents: [{id: 6, name: 'Услуги'}],
                type: [
                    {
                        id: 21,
                        name: 'disinfectionAndDisinsection',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 2, name: 'masterForAnHour'},
                        ],
                    },
                    {
                        id: 22,
                        name: 'masterForAnHour',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 2, name: 'masterForAnHour'},
                        ],
                    },
                    {
                        id: 23,
                        name: 'babysittingAndGovernessServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 2, name: 'masterForAnHour'},
                        ],
                    },
                    {
                        id: 24,
                        name: 'nursingServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 2, name: 'masterForAnHour'},
                        ],
                    },
                    {
                        id: 25,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 2, name: 'masterForAnHour'},
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'transportation',
                parents: [{id: 6, name: 'service'}],
                type: [
                    {
                        id: 26,
                        name: 'rentCar',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 3, name: 'transportation'},
                        ],
                    },
                    {
                        id: 27,
                        name: 'rentSpecialTech',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 3, name: 'transportation'},
                        ],
                    },
                    {
                        id: 28,
                        name: 'garbageRemoval',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 3, name: 'transportation'},
                        ],
                    },
                    {
                        id: 29,
                        name: 'cargoTransportation',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 3, name: 'transportation'},
                        ],
                    },
                    {
                        id: 30,
                        name: 'movers',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 3, name: 'transportation'},
                        ],
                    },
                    {
                        id: 31,
                        name: 'distillation',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 3, name: 'transportation'},
                        ],
                    },
                    {
                        id: 32,
                        name: 'passengerTransportation',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 3, name: 'transportation'},
                        ],
                    },
                    {
                        id: 33,
                        name: 'driverServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 3, name: 'transportation'},
                        ],
                    },
                    {
                        id: 34,
                        name: 'towTruckServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 3, name: 'transportation'},
                        ],
                    },
                    {
                        id: 35,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 3, name: 'transportation'},
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'beautyAndHealth',
                parents: [{id: 6, name: 'service'}],
                type: [
                    {
                        id: 36,
                        name: 'depilationAndShugaring',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 4, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 37,
                        name: 'makeup',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 4, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 38,
                        name: 'manicureAndPedicure',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 4, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 39,
                        name: 'massage',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 4, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 40,
                        name: 'hairExtension',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 4, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 41,
                        name: 'eyelashExtensionEyebrowServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 4, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 42,
                        name: 'spaServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 4, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 43,
                        name: 'tattooAndPiercing',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 4, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 44,
                        name: 'hairdresserServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 4, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 45,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 4, name: 'beautyAndHealth'},
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'computerServices',
                parents: [{id: 6, name: 'service'}],
                type: [
                    {
                        id: 46,
                        name: 'webDesign',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 5, name: 'computerServices'},
                        ],
                    },
                    {
                        id: 47,
                        name: 'computerHelpAndPCSetup',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 5, name: 'computerServices'},
                        ],
                    },
                    {
                        id: 48,
                        name: 'typing',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 5, name: 'computerServices'},
                        ],
                    },
                    {
                        id: 49,
                        name: 'pcAssembly',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 5, name: 'computerServices'},
                        ],
                    },
                    {
                        id: 50,
                        name: 'internetConnection',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 5, name: 'computerServices'},
                        ],
                    },
                    {
                        id: 51,
                        name: 'websiteDevelopmentAndPromotion',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 5, name: 'computerServices'},
                        ],
                    },
                    {
                        id: 52,
                        name: 'installingSoftware',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 5, name: 'computerServices'},
                        ],
                    },
                    {
                        id: 53,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 5, name: 'computerServices'},
                        ],
                    },
                ],
            },
            {
                id: 6,
                name: 'carServices',
                parents: [{id: 6, name: 'service'}],
                type: [
                    {
                        id: 54,
                        name: 'installingAudioSystem',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 55,
                        name: 'autoGlassAndMirrors',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 56,
                        name: 'autoElectrician',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 57,
                        name: 'carDiagnostics',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 58,
                        name: 'bodyworkAndCarPainting',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 59,
                        name: 'airConditionersAndHeating',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 60,
                        name: 'carPainting',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 61,
                        name: 'engineAndChassisRepair',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 62,
                        name: 'repairMotorVehicles',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 63,
                        name: 'steeringRepair',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 64,
                        name: 'fuelSystemRepair',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 65,
                        name: 'tuning',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 66,
                        name: 'maintenance',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 67,
                        name: 'dryCleaningAndCarWash',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 68,
                        name: 'tireServiceAndWheelRepair',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 69,
                        name: 'electricalEquipment',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                    {
                        id: 70,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 6, name: 'carServices'},
                        ],
                    },
                ],
            },
            {
                id: 7,
                name: 'repairEquipment',
                parents: [{id: 6, name: 'service'}],
                type: [
                    {
                        id: 71,
                        name: 'gasEquipmentRepair',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 7, name: 'repairEquipment'},
                        ],
                    },
                    {
                        id: 72,
                        name: 'repairComputersAndLaptops',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 7, name: 'repairEquipment'},
                        ],
                    },
                    {
                        id: 73,
                        name: 'repairSmartphonesAndPhones',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 7, name: 'repairEquipment'},
                        ],
                    },
                    {
                        id: 74,
                        name: 'repairAudioAndVideoEquipment',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 7, name: 'repairEquipment'},
                        ],
                    },
                    {
                        id: 75,
                        name: 'photoEquipmentRepair',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 7, name: 'repairEquipment'},
                        ],
                    },
                    {
                        id: 76,
                        name: 'watchRepair',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 7, name: 'repairEquipment'},
                        ],
                    },
                    {
                        id: 77,
                        name: 'installationAndRepairAirConditioners',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 7, name: 'repairEquipment'},
                        ],
                    },
                    {
                        id: 78,
                        name: 'installationSecuritySystems',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 7, name: 'repairEquipment'},
                        ],
                    },
                    {
                        id: 79,
                        name: 'installationAndRepairHouseholdAppliances',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 7, name: 'repairEquipment'},
                        ],
                    },
                    {
                        id: 80,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 7, name: 'repairEquipment'},
                        ],
                    },
                ],
            },
            {
                id: 8,
                name: 'training',
                parents: [{id: 6, name: 'service'}],
                'type': [
                    {
                        id: 81,
                        name: 'preSchoolDevelopment',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 82,
                        name: 'masterClassesAndTrainings',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 83,
                        name: 'drivingTraining',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 84,
                        name: 'languageTeaching',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 85,
                        name: 'preparationForExams',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 86,
                        name: 'professionalEducation',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 87,
                        name: 'musicAndTheaterLessons',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 88,
                        name: 'drawingDesignAndHandicraftLessons',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 89,
                        name: 'speechTherapistAndDefectologist',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 90,
                        name: 'dancing',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 91,
                        name: 'psychologists',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 92,
                        name: 'tutors',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 93,
                        name: 'trainerServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                    {
                        id: 94,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 8, name: 'training'},
                        ],
                    },
                ],
            },
            {
                id: 9,
                name: 'businessServices',
                parents: [{id: 6, name: 'service'}],
                'type': [
                    {
                        id: 95,
                        name: 'businessConsulting',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 9, name: 'businessServices'},
                        ],
                    },
                    {
                        id: 96,
                        name: 'accountingAndFinance',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 9, name: 'businessServices'},
                        ],
                    },
                    {
                        id: 97,
                        name: 'foreignEconomicActivityConsulting',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 9, name: 'businessServices'},
                        ],
                    },
                    {
                        id: 98,
                        name: 'productionSignsAndAdvertisements',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 9, name: 'businessServices'},
                        ],
                    },
                    {
                        id: 99,
                        name: 'marketingAndAdvertising',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 9, name: 'businessServices'},
                        ],
                    },
                    {
                        id: 100,
                        name: 'translationTexts',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 9, name: 'businessServices'},
                        ],
                    },
                    {
                        id: 101,
                        name: 'polygraphy',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 9, name: 'businessServices'},
                        ],
                    },
                    {
                        id: 102,
                        name: 'realtor',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 9, name: 'businessServices'},
                        ],
                    },
                    {
                        id: 103,
                        name: 'composing',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 9, name: 'businessServices'},
                        ],
                    },
                    {
                        id: 104,
                        name: 'legalServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 9, name: 'businessServices'},
                        ],
                    },
                    {
                        id: 105,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 9, name: 'businessServices'},
                        ],
                    },
                ],
            },
            {
                id: 10,
                name: 'equipmentAndAttractionsRental',
                parents: [{id: 6, name: 'service'}],
                'type': [
                    {
                        id: 106,
                        name: 'equipmentAndAttractionsRental',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 10, name: 'equipmentAndAttractionsRental'},
                        ],
                    },
                    {
                        id: 107,
                        name: 'leaseSite',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 10, name: 'equipmentAndAttractionsRental'},
                        ],
                    },
                    {
                        id: 108,
                        name: 'presentersMusiciansAndArtists',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 10, name: 'equipmentAndAttractionsRental'},
                        ],
                    },
                    {
                        id: 109,
                        name: 'organizationEvents',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 10, name: 'equipmentAndAttractionsRental'},
                        ],
                    },
                    {
                        id: 110,
                        name: 'foodPreparationAndCatering',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 10, name: 'equipmentAndAttractionsRental'},
                        ],
                    },
                    {
                        id: 111,
                        name: 'suitRental',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 10, name: 'equipmentAndAttractionsRental'},
                        ],
                    },
                    {
                        id: 112,
                        name: 'promotersAndModels',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 10, name: 'equipmentAndAttractionsRental'},
                        ],
                    },
                    {
                        id: 113,
                        name: 'tourismRest',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 10, name: 'equipmentAndAttractionsRental'},
                        ],
                    },
                    {
                        id: 114,
                        name: 'flowersDecor',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 10, name: 'equipmentAndAttractionsRental'},
                        ],
                    },
                    {
                        id: 115,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 10, name: 'equipmentAndAttractionsRental'},
                        ],
                    },
                ],
            },
            {
                id: 11,
                name: 'photoAndVideoFilming',
                parents: [{id: 6, name: 'service'}],
                'type': [
                    {
                        id: 141,
                        name: 'videoEditor',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 11, name: 'photoAndVideoFilming'},
                        ],
                    },
                ],
            },
            {
                id: 12,
                name: 'cleaning',
                parents: [{id: 6, name: 'service'}],
                'type': [
                    {
                        id: 116,
                        name: 'washingWindowsAndBalconies',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 12, name: 'cleaning'},
                        ],
                    },
                    {
                        id: 117,
                        name: 'cleaningApartments',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 12, name: 'cleaning'},
                        ],
                    },
                    {
                        id: 118,
                        name: 'houseCleaning',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 12, name: 'cleaning'},
                        ],
                    },
                    {
                        id: 119,
                        name: 'housekeepingServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 12, name: 'cleaning'},
                        ],
                    },
                    {
                        id: 120,
                        name: 'dryCleaningWashingAndIroning',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 12, name: 'cleaning'},
                        ],
                    },
                    {
                        id: 121,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 12, name: 'cleaning'},
                        ],
                    },
                ],
            },
            {
                id: 13,
                name: 'manufacturingToOrder',
                parents: [{id: 6, name: 'service'}],
                'type': [
                    {
                        id: 122,
                        name: 'manufactureAndRepairClothesAccessories',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 13, name: 'manufacturingToOrder'},
                        ],
                    },
                    {
                        id: 123,
                        name: 'forgedProductsToOrder',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 13, name: 'manufacturingToOrder'},
                        ],
                    },
                    {
                        id: 124,
                        name: 'customMadeFurniture',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 13, name: 'manufacturingToOrder'},
                        ],
                    },
                    {
                        id: 125,
                        name: 'musicPoetryAndVoiceActingToOrder',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 13, name: 'manufacturingToOrder'},
                        ],
                    },
                    {
                        id: 126,
                        name: 'customSealsAndStamps',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 13, name: 'manufacturingToOrder'},
                        ],
                    },
                    {
                        id: 127,
                        name: 'drawingPaintingAndGraphicsToOrder',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 13, name: 'manufacturingToOrder'},
                        ],
                    },
                    {
                        id: 128,
                        name: 'souvenirProductsAndPrinting',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 13, name: 'manufacturingToOrder'},
                        ],
                    },
                    {
                        id: 129,
                        name: 'jewelryServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 13, name: 'manufacturingToOrder'},
                        ],
                    },
                    {
                        id: 130,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 13, name: 'manufacturingToOrder'},
                        ],
                    },
                ],
            },
            {
                id: 14,
                name: 'food',
                parents: [{id: 6, name: 'service'}],
                'type': [
                    {
                        id: 131,
                        name: 'bakingAndCakesToOrder',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 14, name: 'food'},
                        ],
                    },
                    {
                        id: 132,
                        name: 'food',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 14, name: 'food'},
                        ],
                    },
                    {
                        id: 133,
                        name: 'cookServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 14, name: 'food'},
                        ],
                    },
                    {
                        id: 134,
                        name: 'teaAndCoffee',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 14, name: 'food'},
                        ],
                    },
                    {
                        id: 135,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 14, name: 'food'},
                        ],
                    },
                ],
            },
            {
                id: 15,
                name: 'animalCare',
                parents: [{id: 6, name: 'service'}],
                'type': [
                    {
                        id: 136,
                        name: 'knitting',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 15, name: 'animalCare'},
                        ],
                    },
                    {
                        id: 137,
                        name: 'trainingAndWalking',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 15, name: 'animalCare'},
                        ],
                    },
                    {
                        id: 138,
                        name: 'overexposure',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 15, name: 'animalCare'},
                        ],
                    },
                    {
                        id: 139,
                        name: 'animalGroomingAndGrooming',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 15, name: 'animalCare'},
                        ],
                    },
                    {
                        id: 140,
                        name: 'otherServices',
                        parents: [
                            {id: 6, name: 'service'},
                            {id: 15, name: 'animalCare'},
                        ],
                    },
                ],
            },
            {
                id: 16,
                name: 'babysittersAndNurses',
                parents: [{id: 6, name: 'service'}],
            }
        ]
    },
    {
        id: 7,
        name: 'goods',
        has_auction: true,
        icon: {url: Goods},
        smallIcon: <HangerIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'womenWardrobe',
                parents: [{id: 7, name: 'goods'}],
                type: [
                    {
                        id: 1,
                        name: 'accessories',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 2,
                        name: 'blouses',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 3,
                        name: 'shirts',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 4,
                        name: 'expectantMothers',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 5,
                        name: 'outerwear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 6,
                        name: 'hats',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 7,
                        name: 'homeClothes',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 8,
                        name: 'overalls',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 9,
                        name: 'swimwear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 10,
                        name: 'underwear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 11,
                        name: 'footwear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 12,
                        name: 'blazersAndSuits',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 13,
                        name: 'dressesAndSkirts',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 14,
                        name: 'sweatersHoodies',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 15,
                        name: 'sportswear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 16,
                        name: 'tShirtsAndTops',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 17,
                        name: 'pantsShorts',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 18,
                        name: 'other',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 19,
                        name: 'handbags',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 20,
                        name: 'decorations',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                    {
                        id: 86,
                        name: 'blouses',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 1, name: 'womenWardrobe'},
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'mansWardrobe',
                parents: [{id: 7, name: 'goods'}],
                'type': [
                    {
                        id: 21,
                        name: 'accessories',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 22,
                        name: 'outerwear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 23,
                        name: 'hats',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 24,
                        name: 'homeClothes',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 25,
                        name: 'overalls',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 26,
                        name: 'underwear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 27,
                        name: 'footwear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 28,
                        name: 'blazersAndSuits',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 29,
                        name: 'shirts',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 30,
                        name: 'sweatersHoodies',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 31,
                        name: 'overalls',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 32,
                        name: 'sportswear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 33,
                        name: 'tShirtsAndPolos',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 34,
                        name: 'pantsAndShorts',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                    {
                        id: 35,
                        name: 'other',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 2, name: 'Мужской гардероб'},
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'babyClothes',
                parents: [{id: 7, name: 'goods'}],
                'type': [
                    {
                        id: 36,
                        name: 'accessories',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 37,
                        name: 'blousesAndShirts',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 38,
                        name: 'outerwear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 39,
                        name: 'hats',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 40,
                        name: 'homeClothes',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 41,
                        name: 'jumpsuitsBodysuits',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 42,
                        name: 'envelopes',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 43,
                        name: 'underwear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 44,
                        name: 'footwear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 45,
                        name: 'blazersAndSuits',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 46,
                        name: 'dressesAndSkirts',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 47,
                        name: 'romperAndUndershirts',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 48,
                        name: 'sweatersHoodies',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 49,
                        name: 'sportswear',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 50,
                        name: 'tShirts',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 51,
                        name: 'pantsAndShorts',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                    {
                        id: 52,
                        name: 'other',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 3, name: 'Детская одежда'},
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'productsForChildren',
                parents: [{id: 7, name: 'goods'}],
                'type': [
                    {
                        id: 53,
                        name: 'carSeats',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 4, name: 'Товары для детей и игрушки'},
                        ],
                    },
                    {
                        id: 54,
                        name: 'healthAndCare',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 4, name: 'Товары для детей и игрушки'},
                        ],
                    },
                    {
                        id: 55,
                        name: 'toysAndGames',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 4, name: 'Товары для детей и игрушки'},
                        ],
                    },
                    {
                        id: 56,
                        name: 'strollers',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 4, name: 'Товары для детей и игрушки'},
                        ],
                    },
                    {
                        id: 57,
                        name: 'feedingAndNutrition',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 4, name: 'Товары для детей и игрушки'},
                        ],
                    },
                    {
                        id: 58,
                        name: 'bathing',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 4, name: 'Товары для детей и игрушки'},
                        ],
                    },
                    {
                        id: 59,
                        name: 'arrangementNursery',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 4, name: 'Товары для детей и игрушки'},
                        ],
                    },
                    {
                        id: 60,
                        name: 'diapersAndPots',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 4, name: 'Товары для детей и игрушки'},
                        ],
                    },
                    {
                        id: 61,
                        name: 'radioAndVideoBabyMonitors',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 4, name: 'Товары для детей и игрушки'},
                        ],
                    },
                    {
                        id: 62,
                        name: 'productsForMothers',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 4, name: 'Товары для детей и игрушки'},
                        ],
                    },
                    {
                        id: 63,
                        name: 'goodsForStudy',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 4, name: 'Товары для детей и игрушки'},
                        ],
                    },
                    {
                        id: 64,
                        name: 'other',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 4, name: 'Товары для детей и игрушки'},
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'handmade',
                parents: [{id: 7, name: 'goods'}],
                'type': [
                    {
                        id: 65,
                        name: 'cosmetics',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 5, name: 'Хэндмейд'},
                        ],
                    },
                    {
                        id: 66,
                        name: 'decorations',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 5, name: 'Хэндмейд'},
                        ],
                    },
                    {
                        id: 67,
                        name: 'dollsAndToys',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 5, name: 'Хэндмейд'},
                        ],
                    },
                    {
                        id: 68,
                        name: 'interiorDecoration',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 5, name: 'Хэндмейд'},
                        ],
                    },
                    {
                        id: 69,
                        name: 'accessories',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 5, name: 'Хэндмейд'},
                        ],
                    },
                    {
                        id: 70,
                        name: 'holidaysDecoration',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 5, name: 'Хэндмейд'},
                        ],
                    },
                    {
                        id: 71,
                        name: 'chancery',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 5, name: 'Хэндмейд'},
                        ],
                    },
                    {
                        id: 72,
                        name: 'dishes',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 5, name: 'Хэндмейд'},
                        ],
                    },
                    {
                        id: 73,
                        name: 'other',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 5, name: 'Хэндмейд'},
                        ],
                    },
                ],
            },
            {
                id: 6,
                name: 'beautyAndHealth',
                parents: [{id: 7, name: 'goods'}],
                'type': [
                    {
                        id: 74,
                        name: 'makeup',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 6, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 75,
                        name: 'manicureAndPedicure',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 6, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 76,
                        name: 'healthProducts',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 6, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 77,
                        name: 'perfumery',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 6, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 78,
                        name: 'haircutAndHairRemoval',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 6, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 79,
                        name: 'hairCare',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 6, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 80,
                        name: 'skinCare',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 6, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 81,
                        name: 'hairDryersAndStyling',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 6, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 82,
                        name: 'tattooPermanentMakeup',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 6, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 83,
                        name: 'solariumsAndTanning',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 6, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 84,
                        name: 'hygieneProducts',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 6, name: 'beautyAndHealth'},
                        ],
                    },
                    {
                        id: 85,
                        name: 'other',
                        parents: [
                            {id: 7, name: 'goods'},
                            {id: 6, name: 'beautyAndHealth'},
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
        icon: {url: Home},
        smallIcon: <SofaIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'furnitureAndInterior',
                parents: [{id: 8, name: 'home'}],
                type: [
                    {
                        id: 1,
                        name: 'sofasAndArmchairs',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 2,
                        name: 'bedsAndMattresses',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 3,
                        name: 'kitchenSets',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 4,
                        name: 'lighting',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 5,
                        name: 'interiorDecoration',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 6,
                        name: 'securityAndAlarms',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 7,
                        name: 'standsAndPedestals',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 8,
                        name: 'gardenFurniture',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 9,
                        name: 'tablesAndChairs',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 10,
                        name: 'textilesAndCarpets',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 11,
                        name: 'wardrobesAndDressers',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 12,
                        name: 'householdChemicals',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 13,
                        name: 'garden',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                    {
                        id: 14,
                        name: 'other',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 1, name: 'furnitureAndInterior'},
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'dishesAndGoodsForKitchen',
                parents: [{id: 8, name: 'home'}],
                'type': [
                    {
                        id: 15,
                        name: 'dishes',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 2, name: 'dishesAndGoodsForKitchen'},
                        ],
                    },
                    {
                        id: 16,
                        name: 'kitchenGoods',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 2, name: 'dishesAndGoodsForKitchen'},
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'food',
                parents: [{id: 8, name: 'home'}],
                'type': [],
            },
            {
                id: 4,
                name: 'repairAndConstruction',
                parents: [{id: 8, name: 'home'}],
                'type': [
                    {
                        id: 17,
                        name: 'doors',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 4, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 18,
                        name: 'measuringTools',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 4, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 19,
                        name: 'window',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 4, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 20,
                        name: 'heatingAndVentilation',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 4, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 21,
                        name: 'ceilings',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 4, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 22,
                        name: 'handTools',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 4, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 23,
                        name: 'plumbingAndWaterSupply',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 4, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 24,
                        name: 'buildingMaterials',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 4, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 25,
                        name: 'electrician',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 4, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 26,
                        name: 'powerTools',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 4, name: 'repairAndConstruction'},
                        ],
                    },
                    {
                        id: 27,
                        name: 'other',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 4, name: 'repairAndConstruction'},
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'plants',
                parents: [{id: 8, name: 'home'}],
                'type': [
                    {
                        id: 28,
                        name: 'seedlingAccessories',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 5, name: 'plants'},
                        ],
                    },
                    {
                        id: 29,
                        name: 'plantPots',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 5, name: 'plants'},
                        ],
                    },
                    {
                        id: 30,
                        name: 'houseplants',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 5, name: 'plants'},
                        ],
                    },
                    {
                        id: 31,
                        name: 'gardenPlants',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 5, name: 'plants'},
                        ],
                    },
                    {
                        id: 32,
                        name: 'seedsAndSeedlings',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 5, name: 'plants'},
                        ],
                    },
                    {
                        id: 33,
                        name: 'plantShelves',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 5, name: 'plants'},
                        ],
                    },
                    {
                        id: 34,
                        name: 'plantStands',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 5, name: 'plants'},
                        ],
                    },
                    {
                        id: 35,
                        name: 'chemistryForPlants',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 5, name: 'plants'},
                        ],
                    },
                    {
                        id: 36,
                        name: 'soil',
                        parents: [
                            {id: 8, name: 'home'},
                            {id: 5, name: 'plants'},
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
        icon: {url: Electronics},
        smallIcon: <ElectronicIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'phonesAndTablets',
                parents: [{id: 9, name: 'electronics'}],
                type: [
                    {
                        id: 1,
                        name: 'mobilePhones',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 1, name: 'phonesAndTablets'},
                        ],
                    },
                    {
                        id: 2,
                        name: 'tablets',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 1, name: 'phonesAndTablets'},
                        ],
                    },
                    {
                        id: 3,
                        name: 'smartWatchesAndBracelets',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 1, name: 'phonesAndTablets'},
                        ],
                    },
                    {
                        id: 4,
                        name: 'landlineTelephonesAndSatellitePhones',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 1, name: 'phonesAndTablets'},
                        ],
                    },
                    {
                        id: 5,
                        name: 'spareParts',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 1, name: 'phonesAndTablets'},
                        ],
                    },
                    {
                        id: 6,
                        name: 'externalBatteries',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 1, name: 'phonesAndTablets'},
                        ],
                    },
                    {
                        id: 7,
                        name: 'chargingDevice',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 1, name: 'phonesAndTablets'},
                        ],
                    },
                    {
                        id: 8,
                        name: 'covers',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 1, name: 'phonesAndTablets'},
                        ],
                    },
                    {
                        id: 9,
                        name: 'accessories',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 1, name: 'phonesAndTablets'},
                        ],
                    },
                ],
            },
            {
                id: 2,
                name: 'photoAndVideoCameras',
                parents: [{id: 9, name: 'electronics'}],
                'type': [
                    {
                        id: 10,
                        name: 'cameras',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 2, name: 'photoAndVideoCameras'},
                        ],
                    },
                    {
                        id: 11,
                        name: 'camcorders',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 2, name: 'photoAndVideoCameras'},
                        ],
                    },
                    {
                        id: 12,
                        name: 'cctv',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 2, name: 'photoAndVideoCameras'},
                        ],
                    },
                    {
                        id: 13,
                        name: 'lenses',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 2, name: 'photoAndVideoCameras'},
                        ],
                    },
                    {
                        id: 14,
                        name: 'photoFlashes',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 2, name: 'photoAndVideoCameras'},
                        ],
                    },
                    {
                        id: 15,
                        name: 'accessories',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 2, name: 'photoAndVideoCameras'},
                        ],
                    },
                    {
                        id: 16,
                        name: 'tripodsAndStabilizers',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 2, name: 'photoAndVideoCameras'},
                        ],
                    },
                    {
                        id: 17,
                        name: 'studioEquipment',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 2, name: 'photoAndVideoCameras'},
                        ],
                    },
                    {
                        id: 18,
                        name: 'digitalPhotoFrames',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 2, name: 'photoAndVideoCameras'},
                        ],
                    },
                    {
                        id: 19,
                        name: 'compactPhotoPrinters',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 2, name: 'photoAndVideoCameras'},
                        ],
                    },
                    {
                        id: 20,
                        name: 'binocularsAndOpticalInstruments',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 2, name: 'photoAndVideoCameras'},
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'tvAudioVideo',
                parents: [{id: 9, name: 'electronics'}],
                'type': [
                    {
                        id: 21,
                        name: 'tvSets',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                    {
                        id: 22,
                        name: 'projectors',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                    {
                        id: 23,
                        name: 'acousticsSpeakersSubwoofers',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                    {
                        id: 24,
                        name: 'homeCinemas',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                    {
                        id: 25,
                        name: 'dvdBlurayAndMediaPlayers',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                    {
                        id: 26,
                        name: 'musicCentersAndRadioTapeRecorders',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                    {
                        id: 27,
                        name: 'mp3PlayersAndPortableAudio',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                    {
                        id: 28,
                        name: 'eBooks',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                    {
                        id: 29,
                        name: 'satelliteAndDigitalTv',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                    {
                        id: 30,
                        name: 'audioAmplifiersAndReceivers',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                    {
                        id: 31,
                        name: 'headphones',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                    {
                        id: 32,
                        name: 'microphones',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                    {
                        id: 33,
                        name: 'accessories',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 3, name: 'tvAudioVideo'},
                        ],
                    },
                ],
            },
            {
                id: 4,
                name: 'appliances',
                parents: [{id: 9, name: 'electronics'}],
                'type': [
                    {
                        id: 34,
                        name: 'libra',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 35,
                        name: 'hoods',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 36,
                        name: 'grindingAndMixing',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 37,
                        name: 'airConditioningEquipment',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 38,
                        name: 'coolersAndWaterFilters',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 39,
                        name: 'stovesAndOvens',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 40,
                        name: 'dishwashers',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 41,
                        name: 'cooking',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 42,
                        name: 'preparationDrinks',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 43,
                        name: 'vacuumCleanersAndSteamCleaners',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 44,
                        name: 'washingMachines',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 45,
                        name: 'ironsAndGarmentCare',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 46,
                        name: 'refrigerators',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                    {
                        id: 47,
                        name: 'sewingMachines',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 4, name: 'appliances'},
                        ],
                    },
                ],
            },
            {
                id: 5,
                name: 'computerTechnology',
                parents: [{id: 9, name: 'electronics'}],
                'type': [
                    {
                        id: 48,
                        name: 'laptops',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 5, name: 'computerTechnology'},
                        ],
                    },
                    {
                        id: 49,
                        name: 'computers',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 5, name: 'computerTechnology'},
                        ],
                    },
                    {
                        id: 50,
                        name: 'monitors',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 5, name: 'computerTechnology'},
                        ],
                    },
                    {
                        id: 51,
                        name: 'keyboardsAndMice',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 5, name: 'computerTechnology'},
                        ],
                    },
                    {
                        id: 52,
                        name: 'officeEquipmentAndConsumables',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 5, name: 'computerTechnology'},
                        ],
                    },
                    {
                        id: 53,
                        name: 'networkHardware',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 5, name: 'computerTechnology'},
                        ],
                    },
                    {
                        id: 54,
                        name: 'multimedia',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 5, name: 'computerTechnology'},
                        ],
                    },
                    {
                        id: 55,
                        name: 'dataStorageDevicesAndCardReaders',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 5, name: 'computerTechnology'},
                        ],
                    },
                    {
                        id: 56,
                        name: 'software',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 5, name: 'computerTechnology'},
                        ],
                    },
                    {
                        id: 57,
                        name: 'steeringWheelsJoysticksGamepads',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 5, name: 'computerTechnology'},
                        ],
                    },
                    {
                        id: 58,
                        name: 'componentsAndSpareParts',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 5, name: 'computerTechnology'},
                        ],
                    },
                    {
                        id: 59,
                        name: 'accessories',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 5, name: 'computerTechnology'},
                        ],
                    },
                ],
            },
            {
                id: 6,
                name: 'gamesConsolesAndPrograms',
                parents: [{id: 9, name: 'electronics'}],
                'type': [
                    {
                        id: 60,
                        name: 'discs',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 6, name: 'gamesConsolesAndPrograms'},
                        ],
                    },
                    {
                        id: 61,
                        name: 'gamingConsoles',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 6, name: 'gamesConsolesAndPrograms'},
                        ],
                    },
                    {
                        id: 62,
                        name: 'gamesForConsolesAndPc',
                        parents: [
                            {id: 9, name: 'electronics'},
                            {id: 6, name: 'gamesConsolesAndPrograms'},
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
        icon: {url: Hobbies},
        smallIcon: <HobbyIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'tickets',
                parents: [{id: 10, name: 'hobbies'}]
            },
            {
                id: 2,
                name: 'sportsAndRecreation',
                parents: [{id: 10, name: 'hobbies'}],
                'type': [
                    {
                        id: 8,
                        name: 'sportsProtection',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 9,
                        name: 'bicycles',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 10,
                        name: 'rollersAndSkateboarding',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 11,
                        name: 'scootersAndGyroScooters',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 12,
                        name: 'billiardsAndBowling',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 13,
                        name: 'waterSports',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 14,
                        name: 'martialArts',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 15,
                        name: 'winterSports',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 16,
                        name: 'ballGames',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 17,
                        name: 'huntingAndFishing',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 18,
                        name: 'tourismAndOutdoorRecreation',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 19,
                        name: 'tennisBadmintonDarts',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 20,
                        name: 'exerciseEquipmentAndFitness',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 21,
                        name: 'sportsNutrition',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                    {
                        id: 22,
                        name: 'other',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 2, name: 'sportsAndRecreation'},
                        ],
                    },
                ],
            },
            {
                id: 3,
                name: 'videoFilms',
                parents: [{id: 10, name: 'hobbies'}],
                'type': [],
            },
            {
                id: 4,
                name: 'booksAndMagazines',
                parents: [{id: 10, name: 'hobbies'}],
                'type': [],
            },
            {
                id: 5,
                name: 'collecting',
                parents: [{id: 10, name: 'hobbies'}],
                'type': [
                    {
                        id: 32,
                        name: 'antiqueFurnitureDishes',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 33,
                        name: 'banknotes',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 34,
                        name: 'tickets',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 35,
                        name: 'celebrityThingsAutographs',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 36,
                        name: 'vinylRecords',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 37,
                        name: 'insertsStickers',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 38,
                        name: 'militaryStuff',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 39,
                        name: 'documents',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 40,
                        name: 'tokensMedalsBadges',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 41,
                        name: 'calendars',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 42,
                        name: 'kinderSurprises',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 43,
                        name: 'booksMagazinesManuscripts',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 44,
                        name: 'envelopesPostcards',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 45,
                        name: 'piggyBanks',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 46,
                        name: 'dollsToys',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 47,
                        name: 'magnets',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 48,
                        name: 'stamps',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 49,
                        name: 'models',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 50,
                        name: 'coinsNumismatics',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 51,
                        name: 'musicalInstruments',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 52,
                        name: 'ashtraysLighters',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 53,
                        name: 'plasticCards',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 54,
                        name: 'artObjectsPaintings',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 55,
                        name: 'figurinesFigurines',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 56,
                        name: 'jewelryAccessories',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 57,
                        name: 'photosLetters',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 58,
                        name: 'chessGames',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 59,
                        name: 'caskets',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 60,
                        name: 'labelsBottlesCorks',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                    {
                        id: 61,
                        name: 'other',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 5, name: 'collecting'},
                        ],
                    },
                ],
            },
            {
                id: 6,
                name: 'materialsForCreativity',
                parents: [{id: 10, name: 'hobbies'}],
                'type': [],
            },
            {
                id: 7,
                name: 'music',
                parents: [{id: 10, name: 'hobbies'}],
                'type': [],
            },
            {
                id: 8,
                name: 'musicalInstruments',
                parents: [{id: 10, name: 'hobbies'}],
                'type': [
                    {
                        id: 77,
                        name: 'accordionButtonAccordions',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 78,
                        name: 'classicalGuitars',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 79,
                        name: 'acousticGuitars',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 80,
                        name: 'bassGuitars',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 81,
                        name: 'electricGuitars',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 82,
                        name: 'guitarAmplification',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 83,
                        name: 'windInstruments',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 84,
                        name: 'keyboards',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 85,
                        name: 'mixingConsoles',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 86,
                        name: 'folkInstruments',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 87,
                        name: 'effectsPedals',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 88,
                        name: 'violinsBowed',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 89,
                        name: 'percussionInstruments',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                    {
                        id: 90,
                        name: 'accessories',
                        parents: [
                            {id: 10, name: 'hobbies'},
                            {id: 8, name: 'musicalInstruments'},
                        ],
                    },
                ],
            },
            {
                id: 9,
                name: 'boardGames',
                parents: [{id: 10, name: 'hobbies'}],
                'type': [],
            },
        ],
    },
    {
        id: 11,
        name: 'animal',
        has_auction: true,
        icon: {url: Animal},
        smallIcon: <AnimalsIcon/>,
        subCategory: [
            {
                id: 1,
                name: 'dogs',
                parents: [{id: 11, name: 'animal'}],
            },
            {
                id: 2,
                name: 'cats',
                parents: [{id: 11, name: 'animal'}],
            },
            {
                id: 3,
                name: 'birds',
                parents: [{id: 11, name: 'animal'}],
            },
            {
                id: 4,
                name: 'rodents',
                parents: [{id: 11, name: 'animal'}],
            },
            {
                id: 5,
                name: 'fishes',
                parents: [{id: 11, name: 'animal'}],
            },
            {
                id: 6,
                name: 'farmAnimals',
                parents: [{id: 11, name: 'animal'}],
            },
            {
                id: 7,
                name: 'otherAnimals',
                parents: [{id: 11, name: 'animal'}],
            },
            {
                id: 8,
                name: 'goodsForPets',
                parents: [{id: 11, name: 'animal'}],
            },
        ],
    },
    {
        id: 12,
        name: 'free',
        has_auction: false,
        icon: {url: Free},
        smallIcon: <ForFreeIcon/>,
    },
];
