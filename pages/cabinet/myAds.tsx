import React from 'react';
import { CabinetContainer } from '@src/components/cabinet/CabinetContainer';
import { withTranslation } from '@root/i18n';

const myAds = (props) => {
    return <CabinetContainer {...props} title='Мои объявления' />;
};

myAds.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(myAds);
