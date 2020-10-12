import React from 'react'
import { AdvertisementContainer } from '../src/components/advertisement/AdvertisementContainer'

const Create_advertisement = (props) => {
    return <AdvertisementContainer {...props} />
}


Create_advertisement.getInitialProps = async () => ({
    namespacesRequired: ['main', 'common'],
});

export default Create_advertisement
