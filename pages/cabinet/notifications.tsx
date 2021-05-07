import NotificationsContainer from "@src/components/cabinet/cabinet_pages/notifications/NotificationsContainer";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['notifications', 'cabinet', 'header', 'footer', 'common', 'auth_reg']
        )
    }
});

export default NotificationsContainer
