import React, {FC} from 'react';
import RatingContainer from "@src/components/cabinet/cabinet_pages/rating/RatingContainer";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Rating: FC = () => <RatingContainer/>;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['cabinet', 'header', 'footer', 'common', 'auth_reg', 'notifications', 'categories', 'common', 'locations']
        )
    }
});

export default Rating;
