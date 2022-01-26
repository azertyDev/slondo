import {setTokenToHeader} from '@src/helpers';
import {axiosInstance} from '@src/api/axios_instance';

export const servicesAPI = {
    getServicesByPostId: (postId: string) => {
        return axiosInstance
            .get(`services/paid/${postId}`, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    }
};

export const bonusAPI = {
    activate: (post_id: string, services) => {
        const params = {
            post_id,
            services,
            payment_type: 'bonus'
        };

        return axiosInstance
            .post(`paid/service/activate`, params, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    }
};

export const paymeAPI = {
    activate: (number: string, expire: string, amount: string) => {
        const form = new FormData();

        form.append('number', number);
        form.append('expire', expire);
        form.append('amount', amount);

        return axiosInstance
            .post(`services/activate`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    codeVerify: (post_id: string, code: string, amount: string, token) => {
        const form = new FormData();

        form.append('post_id', post_id);
        form.append('code', code);
        form.append('amount', amount);
        form.append('token', token);

        return axiosInstance
            .post(`services/cards/verifyCards`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    receiptsPay: (post_id: string, id: string, token: string, services) => {
        // const form = new FormData();
        //
        // form.append('id', id);
        // form.append('post_id', post_id);
        // form.append('services[]', services);
        // form.append('token', token);

        const params = {
            id,
            post_id,
            token,
            services
        };

        return axiosInstance
            .post(`services/receipts/pay`, params, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    }
};

export const myUzCardAPI = {
    p2pHold: (paymentData: string): Promise<any> => {
        return axiosInstance
            .post(`uzcard/p2p/createHold`, paymentData, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    performDismiss: (postId, isPerform = false): Promise<any> => {
        return axiosInstance
            .post(
                `uzcard/p2p/${isPerform ? 'performHold' : 'dismissHold'}`,
                postId,
                setTokenToHeader()
            )
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    createCard: (cardData: string): Promise<any> => {
        return axiosInstance
            .post(`uzcard/card/create`, cardData, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    confirmSmsCode: (data: string): Promise<any> => {
        return axiosInstance
            .post(`uzcard/card/confirm`, data, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    getUserCards: (): Promise<any> => {
        return axiosInstance
            .get(`uzcard/cards/all`, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    removeUserCard: (cardId: number): Promise<any> => {
        return axiosInstance
            .delete(`uzcard/card/delete/${cardId}`, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    }
};
