import React, {FC} from 'react';
import FavoriteContainer from "@src/components/cabinet/cabinet_pages/favorite/FavoriteContainer";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Favorite: FC = () => <FavoriteContainer/>;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['cabinet', 'header', 'footer', 'common', 'auth_reg']
        )
    }
});

export default Favorite;