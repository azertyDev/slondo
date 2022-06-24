import Axios from 'axios';
import {TEST_URL_API, LOCAL_URL_API, PROD_URL_API} from '@src/constants';
import * as https from 'https';

const agent = new https.Agent({
    rejectUnauthorized: false
});

export const axiosInstance = Axios.create({
    httpsAgent: agent,
    withCredentials: true,
    baseURL: PROD_URL_API
});
