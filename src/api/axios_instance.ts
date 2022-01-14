import Axios from 'axios';
import {TEST_URL_API, LOCAL_URL_API, PRODUCTION_URL_API} from '@src/constants';

export const axiosInstance = Axios.create({
    withCredentials: true,
    baseURL: LOCAL_URL_API
});
