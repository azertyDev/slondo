import React from 'react'
import {ShowAdLot} from '@src/components/advertisement/showAdvertisement/ShowAdLot'
import {withTranslation} from "@root/i18n"


const Show_advertisement = (props) => {
    return <ShowAdLot {...props} />;
};

Show_advertisement.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation(['common'])(Show_advertisement)
