import {useTranslation} from "next-i18next";
import {months} from "@src/common_data/common";

export const useDate = () => {
    const {t} = useTranslation('common');

    return (date) => {
        date = new Date(date ? date.replace(/-/g, '/') : Date.now());

        const zeroFormat = num => {
            return num < 10 ? `0${num}` : num;
        };

        const day = date.getDate();
        const month = date.getMonth();
        const hours = zeroFormat(date.getHours());
        const minutes = zeroFormat(date.getMinutes());
        const year = date.getFullYear().toString().slice(-2);
        const today = new Date().getDate() === day;

        return {
            milliSeconds: date ? date.getTime() : '',
            time: `${today ? `${t('today')}` : `${day} ${t(months[month])}`} ${hours}:${minutes}`,
            date: `${today ? `${t('today')}` : `${zeroFormat(day)}.${zeroFormat(month + 1)}.${year}`}`,
            fullDate: `${today ? `${t('today')}` : `${zeroFormat(day)}.${zeroFormat(month + 1)}.${year}`} ${hours}:${minutes}`
        };
    };
};