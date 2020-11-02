import React from 'react'
import {CreateAdvertisement} from '@src/components/advertisement/CreateAdvertisement'

const Create_advertisement = (props) => {
    return <CreateAdvertisement {...props} />
}

Create_advertisement.getInitialProps = async () => ({
    namespacesRequired: ['main', 'common'],
});

export default Create_advertisement