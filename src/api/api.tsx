import Axios from 'axios';
// import Cookies from 'universal-cookie';
import {LocationsDataTypes} from "@root/interfaces/Locations";
import {CategoryType} from "@root/interfaces/Categories";
import {InnerCardData} from "@root/interfaces/CardData";


// const cookies = new Cookies();
// const {token} = cookies.get('token') || {token: ''};

const amazonServer = 'http://54.205.72.116/api/';
const localServer = 'http://192.168.1.60/slondo/public/api/';

const instance = Axios.create({
    withCredentials: true,
    baseURL: localServer
});

// const config = {
//     headers: {
//         'Content-Type': 'multipart/form-data',
//         // 'Authorization': `Bearer ${token}`,
//         "Access-Control-Allow-Origin": "*"
//     }
// };

export const userAPI = {
    login: (phone: string, password: string): Promise<unknown> => {
        const form = new FormData();
        form.set('phone', phone);
        form.set('password', password);
        return instance
            .post(`login`, form, {
                headers: {'Content-Type': 'multipart/form-data'}
            })
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getCategories: (lang: string): Promise<CategoryType[]> => {
        return instance.get(`categories/all?lang=${lang}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    },
    getDataForCreatePost: (data): Promise<any> => {
        const {
            fstLvlCtgr,
            secLvlCtgr,
            trdLvlCtgr,
            lang
        } = data;
        return instance.get(
            `subcategory?category_id=${fstLvlCtgr}&sub_category_id=${secLvlCtgr}&type_id=${trdLvlCtgr}&lang=${lang}`
        )
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    },
    getCards: (itemsPerPage: number, page: number, type: string, lang: string): Promise<{
        data: InnerCardData[];
        total: number;
    }> => {
        return instance.get(`ads/all?itemsPerPage=${itemsPerPage}&page=${page}&type=${type}&lang=${lang}`)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getAddById: (ads_id: string | string[], lang: string, type: string, sub_category_id: string): Promise<any> => {
        return instance.get(`getAddById?ads_id=${ads_id}&lang=${lang}&type=${type}&sub_category_id=${sub_category_id}`)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getLocations: (lang: string): Promise<LocationsDataTypes> => {
        return instance.get(`location?lang=${lang}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    },
    createPost: (values: any): Promise<LocationsDataTypes> => {
        return instance.post(`regular/ads/new`, values)
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    },
    getAncmntsTypes: (lang: string): Promise<any> => {
        return instance.get(`ads/type?lang=${lang}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    },
    uploadPhotos: (form: FormData): Promise<any> => {
        return instance.post(`regular/ads/imageUpload`, form)
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    }
};
