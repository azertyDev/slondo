import React from 'react';
import { withTranslation } from '@root/i18n';
import { AncmntTypesPage } from '@src/components/announcement/ancmnt_types_page/AncmntTypesPage';

const TestPage = (props) => {
    return <AncmntTypesPage {...props} />;
};

TestPage.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(TestPage);
