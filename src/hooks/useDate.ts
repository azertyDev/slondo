import {useTranslation} from "next-i18next";
import {months} from "@src/common_data/common";

export const useDate = () => {
    const {t} = useTranslation('common');

    return (date) => {

        if (!date) {
            return {
                milliSeconds: '',
                time: '',
                hoursMin: '',
                date: '',
                fullDate: ''
            };
        }

        date = new Date(date.replace(/-/g, '/'));

        const zeroFormat = num => {
            return num < 10 ? `0${num}` : num;
        };

        const day = date.getDate();
        const month = date.getMonth();
        const hours = zeroFormat(date.getHours());
        const minutes = zeroFormat(date.getMinutes());
        const year = date.getFullYear().toString().slice(-2);

        const now = new Date();

        const today = now.getDate() === day
            && now.getMonth() === month
            && now.getFullYear().toString().slice(-2) === year;

        return {
            milliSeconds: date ? date.getTime() : '',
            time: `${today ? `${t('today')}` : `${day} ${t(months[month])}`} ${hours}:${minutes}`,
            hoursMin: `${hours}:${minutes}`,
            date: `${today ? `${t('today')}` : `${zeroFormat(day)}.${zeroFormat(month + 1)}.${year}`}`,
            fullDate: `${today ? `${t('today')}` : `${zeroFormat(day)}.${zeroFormat(month + 1)}.${year}`} ${hours}:${minutes}`
        };
    };
};