import React, {FC} from 'react';
import MyAuctionsContainer from "@root/src/components/cabinet/cabinet_pages/my_auctions/MyAuctionsContainer";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Auctions: FC = () => <MyAuctionsContainer/>;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['cabinet', 'header', 'footer', 'common', 'auth_reg']
        )
    }
});

export default Auctions;