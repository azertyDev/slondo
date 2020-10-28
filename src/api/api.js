import Axios from 'axios'
import {i18n} from '@root/i18n'


const instance = Axios.create({
    withCredentials: true,
    baseURL: 'http://54.205.72.116/api/'
})

const lang = i18n.language;

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
    getCategories() {
        return instance.get(`categories/main?lang=${lang}`)
            .then(res => res.data)
            .catch(err => {
                throw err
            })
    }
}