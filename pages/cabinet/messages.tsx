import React, {FC} from 'react';
import MessagesContainer from "@src/components/cabinet/cabinet_pages/messages/MessagesContainer";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Messages: FC = () => <MessagesContainer/>;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['cabinet', 'header', 'footer', 'common', 'auth_reg', 'notifications', 'categories', 'common', 'locations']
        )
    }
});

export default Messages;
