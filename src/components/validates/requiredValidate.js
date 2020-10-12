import {i18n} from '../../../i18n'

export const requiredValidate = (value) => {
    const {language} = i18n;
    let error;
    if (!value) {
        error = language === 'ru' ? 'Обязательное поле' : 'Majburiy maydon';
    }
    return error
};