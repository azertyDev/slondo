import React from 'react';
import {withTranslation} from '@root/i18n';
import PartsComponent from "@root/src/components/categories/parts";

const Parts = (props) => {
    return <PartsComponent {...props}/>;
};

Parts.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Parts);
