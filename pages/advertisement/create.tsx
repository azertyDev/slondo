import React from 'react'
import {CreateAdvrtContainer} from '@src/components/advertisement/create_advrt/CreateAdvrtContainer'

const Create = (props) => {
    return <CreateAdvrtContainer {...props} />
}

Create.getInitialProps = async () => ({
    namespacesRequired: ['main', 'common'],
});

export default Create