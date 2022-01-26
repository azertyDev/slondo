import {UserInfo} from '@root/interfaces/Auth';
import {setTokenToHeader, transformCyrillic} from '@src/helpers';
import {CategoryType} from '@root/interfaces/Categories';
import {CardDataType} from '@root/interfaces/CardData';
import {AuctionsDataTypes} from '@root/interfaces/Auctions';
import {CityType, RegionType} from '@root/interfaces/Locations';
import {POSTS_PER_PAGE, ITEMS_PER_PAGE, SUBS_PER_PAGE} from '@src/constants';
import {axiosInstance} from '@src/api/axios_instance';

export const userAPI = {
    feedback: (form): Promise<any> => {
        return axiosInstance.post(`feedback`, form).catch(err => {
            throw err;
        });
    },
    getPostsByFilters: (params): Promise<any> => {
        return axiosInstance
            .get('posts/filter', {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    login: (
        phone: string,
        password: string
    ): Promise<{token: string; user: UserInfo}> => {
        const form = new FormData();
        form.set('phone', phone);
        form.set('password', password);
        return axiosInstance
            .post(`login`, form)
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    getMainSliderData: (params): Promise<any> => {
        return axiosInstance
            .get('slider/main', {params})
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    register: (phone: string): Promise<any> => {
        const form = new FormData();
        form.set('phone', phone);
        return axiosInstance
            .post(`register`, form)
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    getSmsCode: (phone: string): Promise<unknown> => {
        const form = new FormData();
        form.set('phone', phone);
        return axiosInstance
            .post(`recoveryRequest`, form)
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    confirmSmsCode: (phone: string, code: string): Promise<unknown> => {
        return axiosInstance
            .get(`checkShortCode?phone=${phone}&code=${code}`)
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    newPassword: (
        phone: string,
        code: string,
        newPassword: string
    ): Promise<{user: any; token: string}> => {
        const form = new FormData();
        form.set('phone', phone);
        form.set('code', code);
        form.set('password', newPassword);
        return axiosInstance
            .post(`recovery`, form)
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    favoriteAds: (id: string): Promise<{message: string}> => {
        const form = new FormData();
        form.set('ads_id', `${id}`);
        return axiosInstance
            .post(`regular/post/favorite`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getFavorites: (type, page, itemsPerPage = ITEMS_PER_PAGE): Promise<any> => {
        const params = {
            type,
            page,
            itemsPerPage
        };
        return axiosInstance
            .get(`regular/post/get/favorites`, {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getMyPosts: (params): Promise<any> => {
        return axiosInstance
            .get(`regular/user/posts`, {
                params,
                ...setTokenToHeader()
            })
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getParticipatingAucs: params => {
        return axiosInstance
            .get(`regular/user/auctions/participating`, {
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
        return axiosInstance
            .get(`regular/user/${subsPath}/all`, {
                params,
                ...setTokenToHeader()
            })
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    follow: (id): Promise<{message: string}> => {
        return axiosInstance
            .post(
                `regular/user/subscribe?user_id=${id}`,
                {},
                setTokenToHeader()
            )
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getCategories: (): Promise<CategoryType[]> => {
        return axiosInstance
            .get(`categories/all`)
            .then(res => {
                return res.data;
            })
            .catch(err => {
                throw err;
            });
    },
    getFiltersByCtgr: (params): Promise<any> => {
        return axiosInstance
            .get(`subcategory`, {params})
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
        return axiosInstance
            .get(`regular/cars/params/getByManufacturerYear`, {params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getCards: (
        type = 'post',
        page = 1,
        itemsPerPage = POSTS_PER_PAGE
    ): Promise<{data: CardDataType[]; total: number}> => {
        const params = {
            type,
            page,
            itemsPerPage
        };
        return axiosInstance
            .get(`post/all`, {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getPostById: (postId): Promise<any> => {
        const params = {
            id: postId
        };
        return axiosInstance
            .get(`getPostById`, {...setTokenToHeader(), params})
            .then(res => res.data)
            .catch(err => {
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

        return axiosInstance
            .get(`location`)
            .then(res => transFromCyrillic(res.data))
            .catch(err => {
                throw err;
            });
    },
    createPost: (form: FormData): Promise<string> => {
        return axiosInstance
            .post(`regular/post/new`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    editPost: (form: FormData, postId): Promise<string> => {
        return axiosInstance
            .post(`regular/post/edit/${postId}`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    betAuction: (bet: string, id: string): Promise<AuctionsDataTypes> => {
        const form = new FormData();
        form.set('auction_id', id);
        form.set('bet', bet);
        return axiosInstance
            .post(`regular/auction/nextBet`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getAuctionBets: (params): Promise<any> => {
        return axiosInstance
            .get(`auction/allBets`, {params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getPostAuthorPhones: (postId: number): Promise<any> => {
        return axiosInstance
            .get(`getPhone/${postId}`)
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    buyNow: (auctionId: string, postId: string): Promise<AuctionsDataTypes> => {
        const form = new FormData();
        form.set('auction_id', auctionId);
        form.set('ads_id', postId);
        return axiosInstance
            .post(`regular/auction/buyNow`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deactivateAuction: (ads_id: string): Promise<any> => {
        return axiosInstance
            .post(`regular/auction/deactivate`, {ads_id}, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deactivatePost: (data): Promise<any> => {
        return axiosInstance
            .post(`regular/post/deactivate`, data, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserByPhoneNumber: (params: {phone: string}): Promise<any> => {
        return axiosInstance
            .get(`regular/user/byPhone`, {
                params,
                ...setTokenToHeader()
            })
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    restoreFromArchive: (ads_id: number): Promise<any> => {
        return axiosInstance
            .post(`regular/user/post/restore/${ads_id}`, {}, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deleteArchivePost: (ads_id: number): Promise<{message: string}> => {
        return axiosInstance
            .delete(`regular/post/delete/${ads_id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    rejectVictory: (ads_id: string): Promise<any> => {
        return axiosInstance
            .post(`regular/auction/reject`, {ads_id}, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    offerThePrice: (auction_id: number, price: string): Promise<any> => {
        return axiosInstance
            .post(
                `regular/auction/offerThePrice`,
                {
                    auction_id,
                    price
                },
                setTokenToHeader()
            )
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getAllOffersById: (auction_id: number): Promise<any> => {
        return axiosInstance
            .get(
                `regular/auction/allOffers?auction_id=${auction_id}`,
                setTokenToHeader()
            )
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    acceptOffer: (offer_id: number, is_accepted: boolean): Promise<any> => {
        return axiosInstance
            .post(
                `regular/auction/acceptOfferThePrice`,
                {
                    offer_id,
                    is_accepted
                },
                setTokenToHeader()
            )
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    changeUserInfo: (userInfo): Promise<any> => {
        return axiosInstance
            .post(`regular/user/info`, userInfo, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserInfo: (): Promise<any> => {
        return axiosInstance
            .get(`regular/user/info`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    changeUserAvatar: (avatar): Promise<any> => {
        const formData = new FormData();
        formData.append('avatar', avatar);
        return axiosInstance
            .post(`regular/user/avatar`, formData, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deleteUserAvatar: (id: number): Promise<any> => {
        return axiosInstance
            .delete(`regular/user/avatar/${id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getAllNotifications: (params): Promise<any> => {
        return axiosInstance
            .get(`regular/user/notification`, {...setTokenToHeader(), params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deleteUserNotification: (id: number): Promise<{message?: string}> => {
        return axiosInstance
            .delete(`regular/user/notification/${id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deleteAllNotification: (user_id: number): Promise<any> => {
        return axiosInstance
            .delete(`regular/user/notifications/${user_id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    ricePostInTape: (post_id: number): Promise<any> => {
        return axiosInstance
            .post(`paid/service/raiseInTape/${post_id}`, {}, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getPhoneByUserId: (user_id: number): Promise<any> => {
        return axiosInstance
            .get(`regular/user/phone/${user_id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getNotificationById: (params): Promise<any> => {
        return axiosInstance
            .get(`regular/post/notifications`, {...setTokenToHeader(), params})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserObserver: (): Promise<any> => {
        return axiosInstance
            .get(`regular/user/observer`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserRating: (user_id: number): Promise<any> => {
        const params = {
            user_id
        };
        return axiosInstance
            .get(`user/rating`, {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    setUserRating: (data): Promise<any> => {
        return axiosInstance
            .post('regular/user/rating', {...data}, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getBannedPosts: (
        type,
        page,
        itemsPerPage = ITEMS_PER_PAGE
    ): Promise<any> => {
        const params = {
            type,
            page,
            itemsPerPage
        };
        return axiosInstance
            .get(`regular/post/returned`, {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    deleteBlockedPost: (postId: string): Promise<any> => {
        return axiosInstance
            .delete(`regular/post/returned/${postId}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getAllUserRating: (): Promise<any> => {
        return axiosInstance
            .get(`user/rating`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    setReplyComment: (
        comment_id: number,
        comment: string
    ): Promise<{message: string}> => {
        return axiosInstance
            .post(
                'regular/user/comment',
                {
                    comment_id,
                    comment
                },
                setTokenToHeader()
            )
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserInfoById: (user_id: string): Promise<any> => {
        return axiosInstance
            .get(`user/${user_id}`, setTokenToHeader())
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getUserPosts: params => {
        return axiosInstance
            .get(`post`, {params})
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
        return axiosInstance
            .get(`user/subscribers/byUserId`, {params, ...setTokenToHeader()})
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
        return axiosInstance
            .get(`user/subscriptions/byUserId`, {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    },
    getPopular: (page = 1, itemsPerPage = POSTS_PER_PAGE) => {
        const params = {
            page,
            itemsPerPage
        };
        return axiosInstance
            .get(`post/popular`, {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(err => {
                throw err;
            });
    }
};
