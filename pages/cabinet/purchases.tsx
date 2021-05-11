import React, {FC} from 'react'
import MyPurchasesContainer from '@src/components/cabinet/cabinet_pages/my_purchases/MyPurchasesContainer'
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Purchases: FC = () => <MyPurchasesContainer />

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['cabinet', 'header', 'footer', 'common', 'auth_reg', 'notifications', 'categories', 'common', 'locations']
        )
    }
});

export default Purchases