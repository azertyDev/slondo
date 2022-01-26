import {axiosInstance} from '@src/api/axios_instance';

export const adsAPI = {
    getAds: (main = 0, lang = 'ru'): Promise<any> => {
        const params = {main, lang};
        return axiosInstance
            .get(`post/reclame`, {params})
            .then(res => res.data)
            .catch(({response}) => {
                throw response.data;
            });
    }
};