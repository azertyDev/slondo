import { LOCAL_URL_API } from '@src/constants';
import Axios from 'axios';
import * as https from 'https';

const agent = new https.Agent({
    rejectUnauthorized: false
});

export const axiosInstance = Axios.create({
    // httpsAgent: agent,
    // withCredentials: true,
    baseURL: LOCAL_URL_API
});
