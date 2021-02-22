import React from 'react';
import {withTranslation} from '@root/i18n';
import TransportComponent from "@root/src/components/categories/transport";

const Transport = (props) => {
    return <TransportComponent {...props}/>;
};

Transport.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Transport);
