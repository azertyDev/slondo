import React from 'react';
import { withTranslation } from '@root/i18n';
import { HelpContainer } from '@root/src/components/help/HelpContainer';

const TestPage = (props) => {
    return <HelpContainer {...props} />;
};

TestPage.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(TestPage);
