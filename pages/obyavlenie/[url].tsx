import React from 'react';
import {withTranslation} from '@root/i18n';
import {ShowPostContainer} from '@src/components/post/show_post/ShowPostContainer';

const Show_advertisement = (props) => {
    return <ShowPostContainer {...props} />;
};

Show_advertisement.getInitialProps = async () => ({
    namespacesRequired: ['post', 'common'],
});

export default withTranslation(['post', 'common'])(Show_advertisement);