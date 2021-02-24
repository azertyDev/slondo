import Axios from 'axios';
// import Cookies from 'universal-cookie';
import {LocationsDataTypes} from "@root/interfaces/Locations";
import {CategoryType} from "@root/interfaces/Categories";
import {InnerCardData} from "@root/interfaces/CardData";
import Cookies from "universal-cookie";

const cookie = new Cookies()

// const cookies = new Cookies();
// const {token} = cookies.get('token') || {token: ''};

const uztelecom = 'https://backend.testb.uz/api/';
const localServer = 'http://192.168.1.60/slondo/public/api/';

const token = cookie.get('token')
console.warn("token", token)

const instance = Axios.create({
    withCredentials: true,
    baseURL: localServer,
    headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization' : `Token `
    }
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
    register: (phone: string): Promise<unknown> => {
        const form = new FormData();
        form.set('phone', phone);
        return instance
            .post(`register`, form, {
                headers: {'Content-Type': 'multipart/form-data'}
            })
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    recovery: (phone: string, code: string, password: string, password_confirmation: string): Promise<unknown> => {
        const form = new FormData();
        form.set('phone', phone);
        form.set('code', code);
        form.set('password', password);
        form.set('password_confirmation', password_confirmation);
        return instance
            .post(`recovery`, form, {
                headers: {'Content-Type': 'multipart/form-data'}
            })
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    recoveryRequest: (phone: string): Promise<unknown> => {
        const form = new FormData();
        form.set('phone', phone);
        return instance
            .post(`recoveryRequest`, form, {
                headers: {'Content-Type': 'multipart/form-data'}
            })
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    recoverySMS: (phone: string, code: string): Promise<unknown> => {
        return instance
            .get(`checkShortCode?phone=${phone}&code=${code}`,)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    favoriteAds: (id: number): Promise<unknown> => {
        const form = new FormData();
        form.set('id', id);
        return instance
            .post(`regular/ads/favorite?ads_id=${id}`, form, {
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
    getDataForCreatePost: (
        fstCtgrId: number,
        secCtgrId: number,
        trdCtgrId: number,
        lang: string
    ): Promise<any> => {
        return instance.get(
            `subcategory?category_id=${fstCtgrId}&sub_category_id=${secCtgrId}&type_id=${trdCtgrId}&lang=${lang}`
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
