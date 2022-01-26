import {axiosInstance} from '@src/api/axios_instance';
import {setTokenToHeader} from '@src/helpers';

export const postAPI = {
    complaint: (ads_id: number, complaint: string): Promise<any> => {
        return axiosInstance
            .post(
                `regular/post/complaint`,
                {ads_id, complaint},
                setTokenToHeader()
            )
            .catch(({response}) => {
                throw response.data;
            });
    }
};