import React, {FC} from 'react';
import NotificationsContainer from "@src/components/cabinet/cabinet_pages/notifications/NotificationsContainer";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Notifications: FC = () => <NotificationsContainer/>;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['cabinet', 'header', 'footer', 'common', 'auth_reg']
        )
    }
});

export default Notifications
