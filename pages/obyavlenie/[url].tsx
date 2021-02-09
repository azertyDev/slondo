import React from 'react';
import {withTranslation} from '@root/i18n';
import {ShowPostContainer} from '@src/components/post/show_post/ShowPostContainer';

const Show_advertisement = (props) => {
    return <ShowPostContainer {...props} />;
};

Show_advertisement.getInitialProps = async () => ({
    namespacesRequired: ['post'],
});

export default withTranslation(['post'])(Show_advertisement);