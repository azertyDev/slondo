import Axios from 'axios'


const instance = Axios.create({
    withCredentials: true,
    baseURL: 'http://54.205.72.116/api/'
});

export const userAPI = {
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
    getCategories(lang) {
        return instance.get(`categories/main?lang=${lang}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    }
}