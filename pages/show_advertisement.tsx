import React from 'react'
import { ShowAdvertisement } from '../src/components/advertisement/showAdvertisement/ShowAdvertisement'

const Show_advertisement = (props) => {
    return <ShowAdvertisement {...props} />
}


Show_advertisement.getInitialProps = async () => ({
    namespacesRequired: ['main', 'common'],
});

export default Show_advertisement
