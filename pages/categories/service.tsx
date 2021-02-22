import React from 'react';
import {withTranslation} from '@root/i18n';
import ServiceComponent from "@root/src/components/categories/service";

const Service = (props) => {
    return <ServiceComponent {...props}/>;
};

Service.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Service);
