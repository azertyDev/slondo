import React from 'react';
import { withTranslation } from '@root/i18n';
import { HelpContainer } from '@src/components/help/HelpContainer';

const TestPage = (props) => {
    return <HelpContainer {...props} />;
};

TestPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation(['common'])(TestPage);
