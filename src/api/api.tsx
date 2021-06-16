import Axios from 'axios';
import {LocationsDataTypes} from '@root/interfaces/Locations';
import {CategoryType} from '@root/interfaces/Categories';
import {CardDataType} from '@root/interfaces/CardData';
import {AuctionsDataTypes} from '@root/interfaces/Auctions';
import {UserInfo} from '@root/interfaces/Auth';
import {cookies} from '@src/helpers';


const uztelecom = 'https://backend.testb.uz/api/';
const localServer = 'http://192.168.100.60/slondo/public/api/';

const instance = Axios.create({
    withCredentials: true,
    baseURL: localServer
});

// export const socketIO = socketIOClient('http://192.168.100.60:8005');

const setTokenToHeader = () => {
    const token = cookies.get('slondo_auth');
    if (token) {
        return {
            headers: {
                'Cross-Origin-Embedder-Polichrcy': 'require-corp',
                'Cross-Origin-Opener-Policy': 'same-origin',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };
    }
};

export const userAPI = {
    getPostsByFilters: (params): Promise<any> => {
        return instance
            .get('posts/filter', {params})
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    login: (phone: string, password: string): Promise<{ token: string, user: UserInfo }> => {
        const form = new FormData();
        form.set('phone', phone);
        form.set('password', password);
        return instance
            .post(`login`, form)
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    register: (phone: string): Promise<any> => {
        const form = new FormData();
        form.set('phone', phone);
        return instance
            .post(`register`, form)
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    getSmsCode: (phone: string): Promise<unknown> => {
        const form = new FormData();
        form.set('phone', phone);
        return instance
            .post(`recoveryRequest`, form)
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    confirmSmsCode: (phone: string, code: string): Promise<unknown> => {
        return instance
            .get(`checkShortCode?phone=${phone}&code=${code}`)
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    newPassword: (phone: string, code: string, newPassword: string): Promise<{ user: any, token: string }> => {
        const form = new FormData();
        form.set('phone', phone);
        form.set('code', code);
        form.set('password', newPassword);
        return instance
            .post(`recovery`, form)
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
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
    getFavorites: ({type}: { type?: string }): Promise<any> => {
        return instance.get(`regular/post/get/favorites?type=${type}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getMyPosts: ({type, onlySecure}: { type: string, onlySecure: number }): Promise<any> => {
        return instance.get(`regular/user/posts?type=${type}&secure=${onlySecure}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getAuctionSubs: () => {
        return instance.get(`regular/user/auctions/participating`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getAuctionSubArchive: () => {
        return instance.get(`regular/user/archiveAuctions/participating`, setTokenToHeader())
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
    follow: (id): Promise<{ message: string }> => {
        return instance.post(`regular/user/subscribe?user_id=${id}`, {}, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getCategories: (): Promise<CategoryType[]> => {
        return instance.get(`categories/all`)
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getFiltersByCtgr: (
        fstCtgrId: number,
        secCtgrId: number,
        trdCtgrId: number
    ): Promise<any> => {
        return instance.get(
            `subcategory?category_id=${fstCtgrId}&sub_category_id=${secCtgrId ?? ''}&type_id=${trdCtgrId ?? ''}`
        )
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getCarDataByYear: (modelId: number, yearId: number): Promise<any> => {
        return instance.get(`regular/cars/params/getByManufacturerYear?year_id=${yearId}&model_id=${modelId}`)
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getCards: (itemsPerPage: number, page: number, type: string): Promise<{ data: CardDataType[]; total: number; }> => {
        return instance.get(`post/all?itemsPerPage=${itemsPerPage}&page=${page}&type=${type}`, setTokenToHeader())
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getPostById: (params): Promise<any> => {
        return instance.get(
            `getPostById`,
            {...setTokenToHeader(), params}
        )
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getLocations: (): Promise<LocationsDataTypes> => {
        return instance.get(`location`)
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    createPost: (form: FormData): Promise<string> => {
        return instance.post(`regular/post/new`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    betAuction: (bet: string, id: string): Promise<AuctionsDataTypes> => {
        const form = new FormData();
        form.set('auction_id', id);
        form.set('bet', bet);
        return instance.post(`regular/auction/nextBet`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getAuctionBets: (id: number): Promise<any> => {
        return instance.get(`auction/allBets?auction_id=${id}`)
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getPostAuthorPhones: (postId: string): Promise<any> => {
        return instance.get(`getPhone/${postId}`)
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    buyNow: (auctionId: string, postId: string): Promise<AuctionsDataTypes> => {
        const form = new FormData();
        form.set('auction_id', auctionId);
        form.set('ads_id', postId);
        return instance.post(`regular/auction/buyNow`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deactivateById: (ads_id: number, reason_id?: number, to_archive?: boolean): Promise<any> => {
        return instance.post(`regular/post/deactivate`, {
            ads_id,
            reason_id,
            to_archive
        }, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserArchivePosts: ({type = 'post', onlySecure}: { type?: string, onlySecure: number }): Promise<any> => {
        return instance.get(
            `regular/user/archivePosts?itemsPerPage=25&page=1&type=${type}&secure=${onlySecure}`,
            setTokenToHeader()
        )
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserByPhoneNumber: (phone: string): Promise<any> => {
        return instance.get(`regular/user/byPhone?phone=${phone}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    restoreFromArchive: (ads_id: number): Promise<any> => {
        return instance.post(`regular/user/post/restore/${ads_id}`, {}, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deleteArchivePost: (ads_id: number): Promise<{ message: string }> => {
        return instance.delete(`regular/post/delete/${ads_id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    rejectVictory: (auction_id: number): Promise<any> => {
        return instance.post(`regular/auction/reject`, {
            auction_id
        }, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    offerThePrice: (auction_id: number, price: string): Promise<any> => {
        return instance.post(`regular/auction/offerThePrice`, {
            auction_id,
            price
        }, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getAllOffersById: (auction_id: number): Promise<any> => {
        return instance.get(`regular/auction/allOffers?auction_id=${auction_id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    acceptOfferThePrice: (offer_id: number, is_accepted: boolean): Promise<any> => {
        return instance.post(`regular/auction/acceptOfferThePrice`, {
            offer_id,
            is_accepted
        }, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    changeUserInfo: (createData): Promise<any> => {
        return instance.post(`regular/user/info`, {
            ...createData
        }, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserInfo: (): Promise<any> => {
        return instance.get(`regular/user/info`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    changeUserAvatar: (avatar): Promise<any> => {
        return instance.post(`regular/user/avatar`, avatar, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deleteUserAvatar: (id: number): Promise<any> => {
        return instance.delete(`regular/user/avatar/${id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getAllNotifications: (params?): Promise<any> => {
        return instance.get(`regular/user/notification`, {...setTokenToHeader(), params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deleteUserNotification: (id: number): Promise<{ message?: string }> => {
        return instance.delete(`regular/user/notification/${id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deleteAllNotification: (user_id: number): Promise<any> => {
        return instance.delete(`regular/user/notifications/${user_id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    ricePostInTape: (post_id: number): Promise<any> => {
        return instance.post(`regular/user/post/rise/${post_id}`, {}, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getPhoneByUserId: (user_id: number): Promise<any> => {
        return instance.get(`regular/user/phone/${user_id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getNotificationById: (params): Promise<any> => {
        return instance.get(
            `regular/post/notifications`,
            {...setTokenToHeader(), params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserObserver: (): Promise<any> => {
        return instance.get(`regular/user/observer`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserRating: (): Promise<any> => {
        return instance.get(`user/rating`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    setUserRating: (rating: number, comment: string, receiver_id: number): Promise<any> => {
        return instance.post('regular/user/rating', {
            rating,
            comment,
            receiver_id
        }, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getBannedPosts: (type: string): Promise<any> => {
        return instance.get(`regular/post/returned?itemsPerPage=25&page=1&type=${type}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deleteBlockedPost: (postId: number): Promise<any> => {
        return instance.delete(`regular/post/returned/${postId}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getAllUserRating: (): Promise<any> => {
        return instance.get(`user/rating`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    setReplyComment: (comment_id: number, comment: string): Promise<{ message: string }> => {
        return instance.post('regular/user/comment', {
            comment_id,
            comment
        }, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserInfoById: (user_id: string): Promise<any> => {
        return instance.get(`user/${user_id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserPosts: (user_id, post_type = 'post') => {
        return instance.get(`post?user_id=${user_id}&type=${post_type}`)
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserSubscribers: (params) => {
        return instance.get(`user/subscribers/byUserId`, {params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserSubscriptions: (params) => {
        return instance.get(`user/subscriptions/byUserId`, {params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    }
};
