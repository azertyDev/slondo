import React from 'react';
import {withTranslation} from '@root/i18n';
import {ShowAncmntLotContainer} from '@src/components/announcement/show_ancmnt_lot/ShowAncmntLotContainer';

const Show_advertisement = (props) => {
    return <ShowAncmntLotContainer {...props} />;
};

Show_advertisement.getInitialProps = async () => ({
    namespacesRequired: ['ancmnt', 'common'],
});

export default withTranslation(['ancmnt', 'common'])(Show_advertisement);