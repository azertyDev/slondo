import Axios from 'axios';
import Cookies from 'universal-cookie';
import {LocationsDataTypes} from "@root/interfaces/Locations";
import {CategoriesDataTypes} from "@root/interfaces/Categories";


const cookies = new Cookies();
const {token} = cookies.get('token') || {token: ''};

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'http://54.205.72.116/api/',
});

const config = {
    headers: {Authorization: `Bearer ${token}`}
};

export const userAPI = {
    login: (phone: string, password: string): Promise<unknown> => {
        const form = new FormData();
        form.set('phone', phone);
        form.set('password', password);
        return instance
            .post(`login`, form, {
                headers: {'Content-Type': 'multipart/form-data'},
            })
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getCategories: (lang: string): Promise<CategoriesDataTypes> => {
        return instance.get(`categories/main?lang=${lang}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    },
    getAdDataForCreate: (ctgryID: number, subCtgryID: number, lang: string): Promise<unknown> => {
        return instance.get(`subcategory?parent_id=${ctgryID}&lang=${lang}&child_id=${subCtgryID}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    },
    getCardData: (itemsPerPage: number, page: number, type: string): Promise<unknown> => {
        return instance.get(`ads/all?itemsPerPage=${itemsPerPage}&page=${page}&type=${type}`)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getAddById: (ads_id: number, lang: string): Promise<unknown> => {
        return instance.get(`getAddById?ads_id=${ads_id}&lang=${lang}`)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            })
    },
    getLocations: (lang: string): Promise<LocationsDataTypes> => {
        return instance.get(`location?lang=${lang}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    },
    createAdvrt: (data: any): Promise<LocationsDataTypes> => {
        return instance.post(`regular/ads/new`, data, config)
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    },
};
