import React, {FC} from "react";
import {Home} from '@src/components/home/Home';
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const HomePage: FC = () => <Home/>;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['main', 'header', 'footer', 'errors', 'auth_reg', 'categories', 'common']
        )
    }
});

export default HomePage;