import React from 'react';
import {withTranslation} from '@root/i18n';
import MyPostsContainer from "@src/components/cabinet/cabinet_pages/my_posts/MyPostsContainer";

const Posts = (props) => {
    return <MyPostsContainer {...props}/>;
};

Posts.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(Posts);
