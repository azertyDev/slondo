import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'http://54.205.72.116/api/'
});


export const userApi = {
    login(phone, password) {
        const form = new FormData();
        form.set('phone', phone);
        form.set('password', password);
        return instance.post(`login`, form, {
            headers: {'Content-Type': 'multipart/form-data'}
        })
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    },
    getSelfData() {
        return instance.get(`self_data`)
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    }
}