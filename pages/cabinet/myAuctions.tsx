import React from 'react';
import {withTranslation} from '@root/i18n';
import {MyAuctionsContainer} from "@root/src/components/cabinet/cabinet_pages/my_auctions/MyAuctionsContainer";

const MyAuctions = (props) => {
    return <MyAuctionsContainer {...props}/>;
};

MyAuctions.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(MyAuctions);
