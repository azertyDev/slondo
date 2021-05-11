import React, {FC} from 'react';
import SafetyDealContainer from "@src/components/cabinet/cabinet_pages/safety_deal/SafetyDealContainer";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const SafetyDeal: FC = () => <SafetyDealContainer/>;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['cabinet', 'header', 'footer', 'common', 'auth_reg', 'notifications', 'categories', 'common', 'locations']
        )
    }
});

export default SafetyDeal;