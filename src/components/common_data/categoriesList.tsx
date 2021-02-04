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

const Car = "/img/categories_img/car.png";
const Transport = "/img/categories_img/transport.png";
const Parts = "/img/categories_img/parts.png";
const Estate = "/img/categories_img/estate.png";
const Job = "/img/categories_img/job.png";
const Service = "/img/categories_img/service.png";
const Goods = "/img/categories_img/goods.png";
const Home = "/img/categories_img/home.png";
const Electronics = "/img/categories_img/electronics.png";
const Hobbies = "/img/categories_img/hobbies.png";
const Animal = "/img/categories_img/animal.png";
const Free = "/img/categories_img/free.png";

export const categoriesList = [
    {id: 1, name: 'car', has_auction: false, icon: Car, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
    {id: 2, name: 'transport', has_auction: false, icon: Transport, smallIcon: <SpecTechIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
    {id: 3, name: 'parts', has_auction: false, icon: Parts, smallIcon: <PartsIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
    {id: 4, name: 'estate', has_auction: false, icon: Estate, smallIcon: <ApartmentsIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
    {id: 5, name: 'job', has_auction: false, icon: Job, smallIcon: <JobIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
    {id: 6, name: 'service', has_auction: false, icon: Service, smallIcon: <ServicesIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
    {id: 7, name: 'goods', has_auction: false, icon: Goods, smallIcon: <HangerIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
    {id: 8, name: 'home', has_auction: false, icon: Home, smallIcon: <SofaIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
    {id: 9, name: 'electronics', has_auction: false, icon: Electronics, smallIcon: <ElectronicIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
    {id: 10, name: 'hobbies', has_auction: false, icon: Hobbies, smallIcon: <HobbyIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
    {id: 11, name: 'animal', has_auction: false, icon: Animal, smallIcon: <AnimalsIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
    {id: 12, name: 'free', has_auction: false, icon: Free, smallIcon: <ForFreeIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
];


// export const categoriesList = [
//     {id: 1, name: '', has_auction: false, icon: <CarIcon />, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
//     {id: 2, name: '', has_auction: false, icon: <CarIcon />, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
//     {id: 3, name: '', has_auction: false, icon: <CarIcon />, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
//     {id: 4, name: '', has_auction: false, icon: <CarIcon />, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
//     {id: 5, name: '', has_auction: false, icon: <CarIcon />, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
//     {id: 6, name: '', has_auction: false, icon: <CarIcon />, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
//     {id: 7, name: '', has_auction: false, icon: <CarIcon />, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
//     {id: 8, name: '', has_auction: false, icon: <CarIcon />, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
//     {id: 9, name: '', has_auction: false, icon: <CarIcon />, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
//     {id: 10, name: '', has_auction: false, icon: <CarIcon />, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
//     {id: 11, name: '', has_auction: false, icon: <CarIcon />, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
//     {id: 12, name: '', has_auction: false, icon: <CarIcon />, smallIcon: <CarIcon />, model: [{ parents: [{id: 1, name: ''}], type: [{id: 1, name: '', parents: [{id: 1, name: ''}]}]}],},
// ];
