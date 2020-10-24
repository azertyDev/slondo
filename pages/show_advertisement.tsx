import React from 'react'
import { ShowAdLot } from '../src/components/advertisement/showAdvertisement/ShowAdLot'

const Show_advertisement = (props) => {
    return <ShowAdLot {...props} />
}


Show_advertisement.getInitialProps = async () => ({
    namespacesRequired: ['', 'common'],
});

export default Show_advertisement
