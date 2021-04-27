import React, {FC} from 'react';
import SettingsContainer from '@src/components/cabinet/cabinet_pages/settings/SettingsContainer';
import {GetStaticProps} from 'next';
import {serverSideTranslations} from 'next-i18next/serverSideTranslations';

const Settings: FC = () => <SettingsContainer />;

export const getStaticProps: GetStaticProps = async ({ locale }) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['cabinet', 'header', 'footer', 'common', 'auth_reg', 'errors', 'post']
        )
    }
});

export default Settings;