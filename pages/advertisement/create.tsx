import React from 'react'
import {CreateAdvertisement} from '@src/components/advertisement/CreateAdvertisement'

const Create = (props) => {
    return <CreateAdvertisement {...props} />
}

Create.getInitialProps = async () => ({
    namespacesRequired: ['main', 'common'],
});

export default Create