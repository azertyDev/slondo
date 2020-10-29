import {i18n} from "../../../i18n";

export const phoneValidate = (value) => {
    const {language} = i18n;
    let error;
    if (!value) {
        error = language === 'ru' ? 'Поле обязательно для заполнения' : 'Maydon to‘ldirilishi shart';
    }
    // else if (!/^\+\d{3}\(\d{2}\)\s\d{7}$/i.test(value)) {
    //     error = language === 'ru' ? 'Неверный формат номера телефона' : "Telefon raqam formati noto'g'ri";
    // }
    return error
};