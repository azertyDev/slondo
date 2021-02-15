import React from 'react';
import {withTranslation} from '@root/i18n';
import GoodsComponent from "@root/src/components/categories/goods";

const Goods = (props) => {
    return <GoodsComponent {...props}/>;
};

Goods.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Goods);
