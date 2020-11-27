import React from 'react';
import {withTranslation} from '@root/i18n';
import {MyLotsContainer} from "@src/components/cabinet/cabinet_pages/my_lots/MyLotsContainer";

const MyLots = (props) => {
    return <MyLotsContainer {...props}/>;
};

MyLots.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(MyLots);
