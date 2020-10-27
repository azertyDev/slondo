import React from 'react';
import { CabinetContainer } from '@src/components/cabinet/CabinetContainer';
import { withTranslation } from '../../i18n';

const Cabinet = (props) => {
    return <CabinetContainer {...props} />;
};

Cabinet.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(Cabinet);
