import React from 'react';
import { withTranslation } from '@root/i18n';
import { AdvTypesPage } from '@root/src/components/advertisement/adv_types_page/AdvTypesPage';

const TestPage = (props) => {
    return <AdvTypesPage {...props} />;
};

TestPage.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(TestPage);
