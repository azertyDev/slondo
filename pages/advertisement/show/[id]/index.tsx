import React from 'react';
import { withTranslation } from '@root/i18n';
import { ShowAdvrtLotContainer } from '@src/components/advertisement/show_advrt_lot/ShowAdvrtLotContainer';

const Show_advertisement = (props) => {
    return <ShowAdvrtLotContainer {...props} />;
};

Show_advertisement.getInitialProps = async () => ({
    namespacesRequired: ['advrt', 'common'],
});

export default withTranslation(['advrt', 'common'])(Show_advertisement);
