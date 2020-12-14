import React from 'react';
import {withTranslation} from '@root/i18n';
import {MyAncmntsContainer} from "@src/components/cabinet/cabinet_pages/my_ancmnts/MyAncmntsContainer";

const MyAncmnts = (props) => {
    return <MyAncmntsContainer {...props}/>;
};

MyAncmnts.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(MyAncmnts);
