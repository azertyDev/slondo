import React from 'react'
import {CreateAncmntContainer} from '@src/components/announcement/create_ancmnt/CreateAncmntContainer'

const Create = (props) => {
    return <CreateAncmntContainer {...props} />
}

Create.getInitialProps = async () => ({
    namespacesRequired: ['main', 'common'],
});

export default Create