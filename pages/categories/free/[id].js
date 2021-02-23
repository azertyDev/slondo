import React from 'react';
import {withTranslation} from '@root/i18n';
import FreeComponent from "@root/src/components/categories/free";

const Free = (props) => {
    return <FreeComponent {...props}/>;
};

Free.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Free);
