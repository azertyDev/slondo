import Axios from 'axios';


const instance = Axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:4000/api/'
});

export const userApi = {
    getMainSliderImgs() {
        return {}
    }
}