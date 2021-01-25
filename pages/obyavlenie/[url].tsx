import React from 'react';
import {withTranslation} from '@root/i18n';
import {ShowPostContainer} from '@src/components/post/show_post/ShowPostContainer';

const Show_advertisement = (props) => {
    return <ShowPostContainer {...props} />;
};

Show_advertisement.getInitialProps = async () => ({
    namespacesRequired: ['ancmnt', 'common'],
});

export default withTranslation(['ancmnt', 'common'])(Show_advertisement);