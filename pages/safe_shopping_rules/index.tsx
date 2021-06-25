import React, {FC} from 'react';
import {GetStaticProps} from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { SafeShoppingRules} from '@src/components/safe_shopping_rules/SafeShoppingRules';

const SafeShopping: FC = () => <SafeShoppingRules/>;

export const getStaticProps: GetStaticProps = async ({locale}) => ({
    props: {
        ...await serverSideTranslations(
            locale,
            ['safe_shopping']
        )
    }
});

export default SafeShopping;