import React, {FC} from 'react';
import {Messages} from "@src/components/cabinet/cabinet_pages/messages/Messages";
import {withAuthRedirect} from "@src/hoc/withAuthRedirect";
import {useTranslation} from "react-i18next";

export const MessagesContainer: FC = () => {
    const {t} = useTranslation(['cabinet', 'notifications','categories', 'common', 'locations']);

    return (
        <Messages t={t}/>
    )
};

export default withAuthRedirect(MessagesContainer);
