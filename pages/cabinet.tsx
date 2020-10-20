import React from 'react';
import { CabinetContainer } from './../src/components/cabinet/CabinetContainer';

const Cabinet = (props) => {
    return <CabinetContainer {...props} />;
};

Cabinet.getInitialProps = async () => ({
    namespacesRequired: ['', 'common'],
});

export default Cabinet;
