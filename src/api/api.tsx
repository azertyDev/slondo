import Axios from 'axios';
import {LocationsDataTypes} from '@root/interfaces/Locations';
import {CategoryType} from '@root/interfaces/Categories';
import {InnerCardData} from '@root/interfaces/CardData';
import {AuctionsDataTypes} from '@root/interfaces/Auctions';
import {UserInfo} from '@root/interfaces/Auth';
import {cookies} from '@src/helpers';


const uztelecom = 'https://backend.testb.uz/api/';
const localServer = 'http://192.168.100.60/slondo/public/api/';


const instance = Axios.create({
    withCredentials: true,
    baseURL: localServer
});

export const setTokenToHeader = (): { headers: any } => {
    const token = cookies.get('slondo_auth');
    if (token) {
        return {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        }
    }
};

export const userAPI = {
    login: (phone: string, password: string): Promise<{ token: string, user: UserInfo }> => {
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
    register: (phone: string): Promise<any> => {
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
            .get(`checkShortCode?phone=${phone}&code=${code}`)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    favoriteAds: (id: number): Promise<{ message: string }> => {
        const form = new FormData();
        form.set('ads_id', `${id}`);
        return instance
            .post(`regular/post/favorite`, form, setTokenToHeader())
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getFavorites: (lang: string, lot: string): Promise<any> => {
        return instance.get(`regular/post/get/favorites?type=${lot}&lang=${lang}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getMyPosts: (lang: string, type: string): Promise<any> => {
        return instance.get(`regular/user/posts?type=${type}&lang=${lang}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getAuctionSubs: (lang: string) => {
        return instance.get(`regular/user/auctions/participating?lang=${lang}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getSecurePosts: (lang: string, lot: string): Promise<any> => {
        return instance.get(`regular/user/posts/secure?type=${lot}&lang=${lang}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getSubs: (param) => {
        return instance.get(`regular/user/${param}/all`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    follow: (id: number): Promise<{ message: string }> => {
        return instance.post(`regular/user/subscribe?user_id=${id}`, {}, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getCategories: (lang: string): Promise<CategoryType[]> => {
        return instance.get(`categories/all?lang=${lang}`)
            .then(res => res.data)
            .catch(err => {
                throw err;
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
        return instance.get(`post/all?itemsPerPage=${itemsPerPage}&page=${page}&type=${type}&lang=${lang}`)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getPostById: (post_id: string | string[], lang: string, type: string, sub_category_id: string): Promise<any> => {
        return instance.get(
            `getPostById?id=${post_id}&lang=${lang}&type=${type}&sub_category_id=${sub_category_id}`,
            setTokenToHeader()
        )
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
        return instance.post(`regular/post/new`, values, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    },
    uploadPhotos: (form: FormData): Promise<any> => {
        return instance.post(`regular/post/imageUpload`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    },
    getPostsTypes: (lang: string): Promise<any> => {
        return instance.get(`post/type?lang=${lang}`)
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
    buyAuction: (auction_id: string, ads_id: string): Promise<AuctionsDataTypes> => {
        const form = new FormData();
        form.set('auction_id', auction_id);
        form.set('ads_id', ads_id)
        return instance.post(`regular/auction/buyNow`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err
            });
    }
};
