import React from 'react'
import {CreatePostContainer} from '@src/components/post/create_post/CreatePostContainer'
import {withTranslation} from "next-i18next";

const Create = (props) => {
    return <CreatePostContainer {...props} />
}

Create.getInitialProps = async () => ({
    namespacesRequired: ['ancmnt', 'common'],
});

export default withTranslation(['ancmnt', 'common'])(Create);