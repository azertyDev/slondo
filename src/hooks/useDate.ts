import {useTranslation} from "next-i18next";
import {months} from "@src/common_data/common";

export const useDate = () => {
    const {t} = useTranslation('common');

    const getDate = (date) => {
        if (date) {
            date = new Date(date.replace(/-/g, '/'));
        } else {
            return {};
        }

        const day = zeroFormat(date.getDate());
        const month = months[date.getMonth()] ?? '';
        const hours = zeroFormat(date.getHours());
        const minutes = zeroFormat(date.getMinutes());

        return {
            milliSeconds: date ? date.getTime() : '',
            time: `${day} ${t(month)} ${hours}:${minutes}`
        };
    };

    const getFullDate = (date) => {
        if (date) {
            date = new Date(date);
        } else {
            return {};
        }

        const day = zeroFormat(date.getDate());
        const month = zeroFormat(date.getMonth() + 1);
        const year = date.getFullYear();

        return {
            date: `${day}.${t(month)}.${year}`
        };
    };

    return {getDate, getFullDate};

    function zeroFormat(num) {
        return num < 10 ? `0${num}` : num;
    }
};