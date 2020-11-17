import React from 'react'
import {withTranslation} from "@root/i18n"
import {ShowAdLotContainer} from "@src/components/advertisement/show_advertisement/showAdLotContainer";


const Show_advertisement = (props) => {
    return <ShowAdLotContainer {...props} />;
};

Show_advertisement.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation(['common'])(Show_advertisement)
