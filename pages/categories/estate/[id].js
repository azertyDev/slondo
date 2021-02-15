import React from 'react';
import {withTranslation} from '@root/i18n';
import EstateComponent from "@root/src/components/categories/estate";

const Estate = (props) => {
    return <EstateComponent {...props}/>;
};

Estate.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Estate);
