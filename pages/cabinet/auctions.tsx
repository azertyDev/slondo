import React, {FC} from 'react';
import MyAuctionsContainer from "@src/components/cabinet/cabinet_pages/my_auctions/MyAuctions";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Auctions: FC = () => <MyAuctionsContainer/>;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['auction', 'cabinet', 'header', 'footer', 'common', 'auth_reg', 'notifications', 'categories', 'common', 'locations']
        )
    }
});

export default Auctions;