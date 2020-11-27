import React from 'react';
import {withTranslation} from '@root/i18n';
import {MyAdsContainer} from "@src/components/cabinet/cabinet_pages/my_ads/MyAdsContainer";

const MyAds = (props) => {
    return <MyAdsContainer {...props}/>;
};

MyAds.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(MyAds);
