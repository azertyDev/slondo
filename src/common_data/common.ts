import {CardDataType} from '@root/interfaces/CardData';

export const months = [
    'january',
    'february',
    'march',
    'april',
    'may',
    'june',
    'july',
    'august',
    'september',
    'october',
    'november',
    'december',
];

export const WEEK_DAYS = [
    {id: 1, name: 'Mo'},
    {id: 2, name: 'Tu'},
    {id: 3, name: 'We'},
    {id: 4, name: 'Th'},
    {id: 5, name: 'Fr'},
    {id: 6, name: 'Sa'},
    {id: 7, name: 'Su'}
];

export const initCardData: CardDataType = {
    ads_type: '',
    adsable: {
        id: null,
        sub_category: {
            id: null,
            name: ''
        },
        type: {
            id: null,
            name: ''
        }
    },
    auction: {
        id: null,
        is_accepted: null,
        winner: null,
        winner_id: null,
        number_of_bets: null
    },
    author: null,
    available_days: [],
    available_start_time: '',
    available_end_time: '',
    category: {
        id: null,
        name: ''
    },
    city: {
        id: null,
        name: ''
    },
    created_at: '',
    creator: false,
    currency: {
        id: null,
        name: ''
    },
    delivery: null,
    description: '',
    district: {
        id: null,
        name: ''
    },
    exchange: null,
    expiration_at: '',
    favorite: false,
    id: null,
    image: '',
    price: '',
    region: {
        id: null,
        name: ''
    },
    safe_deal: null,
    status: '',
    subscribed: false,
    title: '',
    user_id: null
};