import {FC} from 'react';
import {Messages} from "@src/components/cabinet/cabinet_pages/messages/Messages";
import {useTranslation} from "react-i18next";

export const MessagesContainer: FC = () => {
    const {t} = useTranslation('cabinet');

    return (
        <Messages t={t}/>
    );
};
