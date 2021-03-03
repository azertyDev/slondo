import Axios from 'axios';
import {LocationsDataTypes} from "@root/interfaces/Locations";
import {CategoryType} from "@root/interfaces/Categories";
import {FavoriteType} from "@root/interfaces/Favorites";
import {InnerCardData} from "@root/interfaces/CardData";
import {AuctionsDataTypes} from "@root/interfaces/Auctions";
import {cookies} from "@src/helpers";


const uztelecom = 'https://backend.testb.uz/api/';
const localServer = 'http://192.168.1.60/slondo/public/api/';


const instance = Axios.create({
    withCredentials: true,
    baseURL: localServer
});

export const setTokenToHeader = () => {
    const token = cookies.get('token');
    return {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`,
        }
    }
};

export const userAPI = {
    login: (phone: string, password: string): Promise<{ token: string }> => {
        const form = new FormData();
        form.set('phone', phone);
        form.set('password', password);
        return instance
            .post(`login`, form)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    register: (phone: string): Promise<unknown> => {
        const form = new FormData();
        form.set('phone', phone);
        return instance
            .post(`register`, form)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    recovery: (phone: string, code: string, password: string, password_confirmation: string): Promise<{ token: string }> => {
        const form = new FormData();
        form.set('phone', phone);
        form.set('code', code);
        form.set('password', password);
        form.set('password_confirmation', password_confirmation);
        return instance
            .post(`recovery`, form)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    recoveryRequest: (phone: string): Promise<unknown> => {
        const form = new FormData();
        form.set('phone', phone);
        return instance
            .post(`recoveryRequest`, form)
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
        form.set('ads_id', `${id}`);
        return instance
            .post(`regular/ads/favorite`, form)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getFavorites: (lang: string, lot: string): Promise<FavoriteType[]> => {
        return instance.get(`regular/ads/get/favorites?type=${lot}&lang=${lang}`)
            .then(res => res.data)
            .catch(err => {
                throw err
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
    createPost: (values: any): Promise<string> => {
        return instance.post(`regular/ads/new`, values, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    },
    uploadPhotos: (form: FormData): Promise<any> => {
        return instance.post(`regular/ads/imageUpload`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    },
    getPostsTypes: (lang: string): Promise<any> => {
        return instance.get(`ads/type?lang=${lang}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    },
    betAuction: ({bet, id}: any): Promise<AuctionsDataTypes> => {
        const form = new FormData();
        form.set('auction_id', id);
        form.set('bet', bet);
        return instance.post(`regular/auction/nextBet`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    },
    getAuctionBets: (id: string, page: number): Promise<any> => {
        return instance.get(`auction/allBets?auction_id=${id}&page=${page}&per_page=25`)
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    },
};
