import React from 'react';
import {withTranslation} from 'next-i18next';
import {PostFormContainer} from '@src/components/post/create_post/post_form/PostFormContainer';

const Create = (props) => <PostFormContainer {...props} />;

Create.getInitialProps = async () => ({
    namespacesRequired: ['post'],
});

export default withTranslation(['post'])(Create);