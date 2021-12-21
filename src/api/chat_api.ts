import {axiosInstance} from '@src/api/axios_instance';
import {setTokenToHeader} from '@src/helpers';
import {MESSAGES_PER_PAGE} from '@src/constants';

export const chatAPI = {
    resetUnreadCount: contact_id => {
        const params = {contact_id};
        return axiosInstance
            .post(`contact/reset`, params, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    getContactById: (userId): Promise<any> => {
        return axiosInstance
            .get(`contact/${userId}`, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    removeUser: (userId: number): Promise<any> => {
        return axiosInstance
            .delete(`contact/${userId}`, setTokenToHeader())
            .catch(({response}) => {
                throw response.data;
            });
    },
    blockUser: (userId: number): Promise<any> => {
        return axiosInstance
            .post(`contact/block/${userId}`, {}, setTokenToHeader())
            .catch(({response}) => {
                throw response.data;
            });
    },
    sendMessage: (form): Promise<any> => {
        return axiosInstance
            .post(`message/send`, form, setTokenToHeader())
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    getMessages: (
        receiver_id: number,
        page: number,
        itemsPerPage = MESSAGES_PER_PAGE
    ): Promise<any> => {
        const params = {
            receiver_id,
            page,
            itemsPerPage
        };
        return axiosInstance
            .get(`message/byReceiverId`, {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    getUserContacts: (itemsPerPage = 50): Promise<any> => {
        const params = {
            itemsPerPage
        };
        return axiosInstance
            .get(`contact/all`, {params, ...setTokenToHeader()})
            .then(res => res.data.data)
            .catch(({response}) => {
                throw response.data;
            });
    }
};