import React from 'react';
import {withTranslation} from '@root/i18n';
import {ShowAncmntContainer} from '@src/components/announcement/show_ancmnt/ShowAncmntContainer';

const Show_advertisement = (props) => {
    return <ShowAncmntContainer {...props} />;
};

Show_advertisement.getInitialProps = async () => ({
    namespacesRequired: ['ancmnt', 'common'],
});

export default withTranslation(['ancmnt', 'common'])(Show_advertisement);