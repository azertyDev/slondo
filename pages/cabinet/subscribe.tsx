import React, {FC} from 'react';
import {UserSocialInfoContainer} from "@src/components/cabinet/cabinet_pages/user_social_info/UserSocialInfoContainer";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Subscribe: FC = () => <UserSocialInfoContainer/>;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['cabinet', 'header', 'footer', 'common', 'auth_reg']
        )
    }
});

export default Subscribe;
