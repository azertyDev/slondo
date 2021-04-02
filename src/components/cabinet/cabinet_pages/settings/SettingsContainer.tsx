import React, {FC} from 'react';
import {useTranslation} from "react-i18next";
import {withAuthRedirect} from "@src/hoc/withAuthRedirect";
import {Settings} from '@src/components/cabinet/cabinet_pages/settings/Settings';

const SettingsContainer: FC = () => {
    const {t} = useTranslation(['cabinet']);

    return (
        <Settings/>
    )
};

export default withAuthRedirect(SettingsContainer);