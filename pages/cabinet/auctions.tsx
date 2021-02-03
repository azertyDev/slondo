import React from 'react';
import {withTranslation} from '@root/i18n';
import {MyAuctionsContainer} from "@root/src/components/cabinet/cabinet_pages/my_auctions/MyAuctionsContainer";

const Auctions = (props) => {
    return <MyAuctionsContainer {...props}/>;
};

Auctions.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Auctions);
