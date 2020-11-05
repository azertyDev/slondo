import React from 'react'
import {CreateAdvrt} from '@src/components/advertisement/create_advertisement/CreateAdvrt'

const Create = (props) => {
    return <CreateAdvrt {...props} />
}

Create.getInitialProps = async () => ({
    namespacesRequired: ['main', 'common'],
});

export default Create