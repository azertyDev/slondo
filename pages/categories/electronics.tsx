import React from 'react';
import {withTranslation} from '@root/i18n';
import ElectronicsComponent from "@root/src/components/categories/electronics";

const Electronics = (props) => {
    return <ElectronicsComponent {...props}/>;
};

Electronics.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Electronics);
