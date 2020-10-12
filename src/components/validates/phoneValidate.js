import {i18n} from "../../../i18n";

export const phoneValidate = (value) => {
    const {language} = i18n;
    let error;
    if (!value) {
        error = language === 'ru' ? 'Обязательное поле' : 'Majburiy maydon';
    } else if (!/^(\+?\d{3})?\d{9}$/i.test(value)) {
        error = language === 'ru' ? 'Обязательное поле' : 'Majburiy maydon';
    }
    return error
};