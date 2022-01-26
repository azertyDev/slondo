import {axiosInstance} from '@src/api/axios_instance';
import {setTokenToHeader} from '@src/helpers';

export const cabinetAPI = {
    getPurchases: (params): Promise<any> => {
        return axiosInstance
            .get('regular/post/purchased', {params, ...setTokenToHeader()})
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    },
    getArchivePurchases: (params): Promise<any> => {
        return axiosInstance
            .get('regular/archivePost/purchased', {
                params,
                ...setTokenToHeader()
            })
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    }
};