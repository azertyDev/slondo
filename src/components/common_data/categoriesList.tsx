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

export const categories_list = [
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
                name: 'motorcyclesAndMototechnics',
                parents: [{ id: 2, name: 'transport' }],
                type: [
                    {
                        id: 1,
                        name: 'motorcycles',
                        parents: [{ id: 2, name: 'transport' }],
                    },
                ],
            },
        ],
    },
    {
        id: 3,
        name: 'parts',
        has_auction: false,
        icon: { url: Parts },
        smallIcon: <PartsIcon />,
        model: [
            {
                id: 1,
                name: 'forCars',
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
                ],
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
                ],
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
                ],
            },
        ],
    },
    {
        id: 7,
        name: 'goods',
        has_auction: false,
        icon: { url: Goods },
        smallIcon: <HangerIcon />,
        model: [
            {
                id: 1,
                name: 'womensWardrobe',
                parents: [{ id: 7, name: 'goods' }],
                type: [
                    {
                        id: 1,
                        name: 'accessories',
                        parents: [
                            { id: 7, name: 'goods' },
                            { id: 1, name: 'womensWardrobe' },
                        ],
                    },
                ],
            },
        ],
    },
    {
        id: 8,
        name: 'home',
        has_auction: false,
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
                ],
            },
        ],
    },
    {
        id: 9,
        name: 'electronics',
        has_auction: false,
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
                ],
            },
        ],
    },
    {
        id: 10,
        name: 'hobbies',
        has_auction: false,
        icon: { url: Hobbies },
        smallIcon: <HobbyIcon />,
        model: [
            {
                id: 1,
                name: 'tickets',
                parents: [{ id: 10, name: 'hobbies' }],
                type: [],
            },
        ],
    },
    {
        id: 11,
        name: 'animal',
        has_auction: false,
        icon: { url: Animal },
        smallIcon: <AnimalsIcon />,
        model: [
            {
                id: 1,
                name: 'dogs',
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
];
