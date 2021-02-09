import React from 'react';
import {withTranslation} from '@root/i18n';
import {FilterPageContainer} from '@root/src/components/filter_page/FilterPageContainer';

const FilterPage = (props) => {
    return <FilterPageContainer {...props} />;
};

FilterPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default withTranslation(['common'])(FilterPage);
