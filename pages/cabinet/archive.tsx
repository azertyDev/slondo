import React, {FC} from 'react';
import ArchiveContainer from "@src/components/cabinet/cabinet_pages/archive/ArchiveContainer";
import {GetStaticProps} from "next";
import {serverSideTranslations} from "next-i18next/serverSideTranslations";

const Archive: FC = () => <ArchiveContainer/>;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['cabinet', 'header', 'footer', 'common', 'auth_reg', 'notifications', 'categories', 'common', 'locations']
        )
    }
});

export default Archive;