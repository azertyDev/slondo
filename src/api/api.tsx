import Axios from 'axios';

const instance = Axios.create({
    withCredentials: true,
    baseURL: 'http://54.205.72.116/api/',
});

export const userAPI = {
    login(phone, password) {
        const form = new FormData();
        form.set('phone', phone);
        form.set('password', password);
        return instance
            .post(`login`, form, {
                headers: { 'Content-Type': 'multipart/form-data' },
            })
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getCategories(lang) {
        return instance
            .get(`categories/main?lang=${lang}`)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getAdOrLot(ctgryID, subCtgryID, isLot) {
        return instance
            .get(`categories/main?lang=${isLot}`)
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
    getCardData(itemsPerPage, page, type) {
        return instance
            .get(
                `ads/all?itemsPerPage=${itemsPerPage}&page=${page}&type=${type}`,
            )
            .then((res) => res.data)
            .catch((err) => {
                throw err;
            });
    },
};
