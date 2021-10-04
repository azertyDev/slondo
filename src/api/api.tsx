import Axios from 'axios';
import {UserInfo} from '@root/interfaces/Auth';
import {cookies, transformCyrillic} from '@src/helpers';
import {CategoryType} from '@root/interfaces/Categories';
import {CardDataType} from '@root/interfaces/CardData';
import {AuctionsDataTypes} from '@root/interfaces/Auctions';
import {CityType, RegionType} from "@root/interfaces/Locations";
import {DEV_URL, ITEMS_PER_PAGE, MESSAGES_PER_PAGE, PRODUCTION_URL, SUBS_PER_PAGE} from "@src/constants";

const production = `${PRODUCTION_URL}/api/`;
const local = `${DEV_URL}/slondo/public/api/`;
const testb = 'https://backend.testb.uz/api/';

const instance = Axios.create({
    withCredentials: true,
    baseURL: production
});

const setTokenToHeader = () => {
    const token = cookies.get('slondo_auth');
    if (token) {
        return {
            headers: {
                'Cross-Origin-Embedder-Policy': 'require-corp',
                'Cross-Origin-Opener-Policy': 'same-origin',
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${token}`
            }
        };
    }
};

export const chatAPI = {
    getContactById: (userId): Promise<any> => {
        return instance
            .get(`contact/${userId}`, setTokenToHeader())
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    removeUser: (userId: number): Promise<any> => {
        return instance
            .delete(`contact/${userId}`, setTokenToHeader())
            .catch(({response}) => {
                throw response.data;
            });
    },
    blockUser: (userId: number): Promise<any> => {
        return instance
            .post(`contact/block/${userId}`, {}, setTokenToHeader())
            .catch(({response}) => {
                throw response.data;
            });
    },
    sendMessage: (form): Promise<any> => {
        return instance
            .post(`message/send`, form, setTokenToHeader())
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    getMessages: (receiver_id: number, page: number, itemsPerPage = MESSAGES_PER_PAGE): Promise<any> => {
        const params = {
            receiver_id,
            page,
            itemsPerPage
        };
        return instance
            .get(`message/byReceiverId`, {params, ...setTokenToHeader()})
            .then((res) => {
                res.data.data = res.data.data.reverse();
                return res.data;
            })
            .catch(({response}) => {
                throw response.data;
            });
    },
    getUserContacts: (): Promise<any> => {
        return instance
            .get(`contact/all`, setTokenToHeader())
            .then((res) => res.data.data)
            .catch(({response}) => {
                throw response.data;
            });
    }
};

export const myUzCardAPI = {
    p2pHold: (paymentData: string): Promise<any> => {
        return instance
            .post(`uzcard/p2p/createHold`, paymentData, setTokenToHeader())
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    performDismiss: (postId, isPerform = false): Promise<any> => {
        return instance
            .post(`uzcard/p2p/${isPerform ? 'performHold' : 'dismissHold'}`, postId, setTokenToHeader())
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    createCard: (cardData: string): Promise<any> => {
        return instance
            .post(`uzcard/card/create`, cardData, setTokenToHeader())
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    confirmSmsCode: (data: string): Promise<any> => {
        return instance
            .post(`uzcard/card/confirm`, data, setTokenToHeader())
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    getUserCards: (): Promise<any> => {
        return instance
            .get(`uzcard/cards/all`, setTokenToHeader())
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    removeUserCard: (cardId: number): Promise<any> => {
        return instance
            .delete(`uzcard/card/delete/${cardId}`, setTokenToHeader())
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    }
};

export const userCabinetAPI = {
    getPurchases: (params): Promise<any> => {
        return instance
            .get('regular/post/purchased', {params, ...setTokenToHeader()})
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    getArchivePurchases: (params): Promise<any> => {
        return instance
            .get('regular/archivePost/purchased', {params, ...setTokenToHeader()})
            .then((res) => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    }
};

export const postAPI = {
    complaint: (ads_id: number, complaint: string): Promise<any> => {
        return instance
            .post(`regular/post/complaint`, {ads_id, complaint}, setTokenToHeader())
            .catch(({response}) => {
                throw response.data;
            });
    }
};

export const userAPI = {
    feedback: (form): Promise<any> => {
        return instance.post(`feedback`, form)
            .catch(err => {
                throw err;
            });
    },
    getPostsByFilters: (params): Promise<any> => {
        return instance
            .get('posts/filter', {params, ...setTokenToHeader()})
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
    getMainSliderData: (params): Promise<any> => {
        return instance
            .get('slider/main', {params})
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
    getFavorites: (type, page, itemsPerPage = ITEMS_PER_PAGE): Promise<any> => {
        const params = {
            type,
            page,
            itemsPerPage
        };
        return instance.get(`regular/post/get/favorites`, {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getMyPosts: (params): Promise<any> => {
        return instance.get(`regular/user/posts`, {
            params,
            ...setTokenToHeader()
        })
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getParticipatingAucs: (params) => {
        return instance.get(`regular/user/auctions/participating`, {
            params,
            ...setTokenToHeader()
        })
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getSubs: (subsPath, page, itemsPerPage = ITEMS_PER_PAGE) => {
        const params = {
            page,
            itemsPerPage
        };
        return instance.get(`regular/user/${subsPath}/all`, {params, ...setTokenToHeader()})
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
    getFiltersByCtgr: (params): Promise<any> => {
        return instance.get(`subcategory`, {params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getCarDataByYear: (modelId: number, yearId: number): Promise<any> => {
        const params = {
            model_id: modelId,
            year_id: yearId
        };
        return instance.get(`regular/cars/params/getByManufacturerYear`, {params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getCards: (params): Promise<{ data: CardDataType[]; total: number; }> => {
        return instance.get(`post/all`, {params, ...setTokenToHeader()})
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getPostById: (postId): Promise<any> => {
        const params = {
            id: postId
        };
        return instance.get(
            `getPostById`,
            {...setTokenToHeader(), params}
        )
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getLocations: (): Promise<RegionType[]> => {
        const transFromCyrillic = (locations: RegionType[] | CityType[]) => {
            return locations.map((l: RegionType) => {
                l.ru_name = transformCyrillic(l.ru_name);
                if (l.cities) {
                    l.cities = transFromCyrillic(l.cities);
                }
                return l;
            });
        };

        return instance.get(`location`)
            .then(res => transFromCyrillic(res.data))
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
    editPost: (form: FormData, postId): Promise<string> => {
        return instance.post(`regular/post/edit/${postId}`, form, setTokenToHeader())
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
    getAuctionBets: (params): Promise<any> => {
        return instance.get(`auction/allBets`, {params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getPostAuthorPhones: (postId: number): Promise<any> => {
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
    deactivateAuction: (ads_id: number): Promise<any> => {
        return instance.post(`regular/auction/deactivate`, {ads_id}, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deactivatePost: (data): Promise<any> => {
        return instance.post(`regular/post/deactivate`, data, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserByPhoneNumber: (params: { phone: string }): Promise<any> => {
        return instance.get(`regular/user/byPhone`, {
            params,
            ...setTokenToHeader()
        })
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
    rejectVictory: (ads_id: number): Promise<any> => {
        return instance.post(`regular/auction/reject`, {ads_id}, setTokenToHeader())
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
    acceptOffer: (offer_id: number, is_accepted: boolean): Promise<any> => {
        return instance.post(`regular/auction/acceptOfferThePrice`, {
            offer_id,
            is_accepted
        }, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    changeUserInfo: (userInfo): Promise<any> => {
        return instance.post(`regular/user/info`, userInfo, setTokenToHeader())
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
        const formData = new FormData();
        formData.append('avatar', avatar);
        return instance.post(`regular/user/avatar`, formData, setTokenToHeader())
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
    getAllNotifications: (params): Promise<any> => {
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
    getUserRating: (user_id: number): Promise<any> => {
        const params = {
            user_id
        };
        return instance.get(`user/rating`, {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    setUserRating: (data): Promise<any> => {
        return instance.post('regular/user/rating', {...data}, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getBannedPosts: (type, page, itemsPerPage = ITEMS_PER_PAGE): Promise<any> => {
        const params = {
            type,
            page,
            itemsPerPage
        };
        return instance.get(`regular/post/returned`, {params, ...setTokenToHeader()})
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
    getUserPosts: (user_id, type, archive = 0, page, itemsPerPage = ITEMS_PER_PAGE) => {
        const params = {
            user_id,
            type,
            archive,
            page,
            itemsPerPage
        };
        return instance.get(`post`, {params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserSubscribers: (user_id, page, itemsPerPage = SUBS_PER_PAGE) => {
        const params = {
            user_id,
            page,
            itemsPerPage
        };
        return instance.get(`user/subscribers/byUserId`, {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserSubscriptions: (user_id, page, itemsPerPage = SUBS_PER_PAGE) => {
        const params = {
            user_id,
            page,
            itemsPerPage
        };
        return instance.get(`user/subscriptions/byUserId`, {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getPopular: (params) => {
        return instance.get(`post/popular`, {...setTokenToHeader(), params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    }
};
