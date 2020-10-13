import {i18n} from "../../../i18n";

export const phoneValidate = (value) => {
    const {language} = i18n;
    let error;
    if (!value) {
        error = language === 'ru' ? 'Поле обязательно для заполнения' : 'Hoshiya to‘ldirilishi shart';
    } else if (!/^(\+?\d{3})?\d{9}$/i.test(value)) {
        error = language === 'ru' ? 'Неверный формат номера телефона' : "Telefon raqam farmati noto'g'ri";
    }
    return error
};