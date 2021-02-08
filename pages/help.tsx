import React from 'react';
import { withTranslation } from '@root/i18n';
import { HelpContainer } from '@root/src/components/help/HelpContainer';

const HelpPage = (props) => {
    return <HelpContainer {...props} />;
};

HelpPage.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(HelpPage);
