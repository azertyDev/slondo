import React from 'react';
import { withTranslation } from '@root/i18n';
import { SiteMapContainer } from '@src/components/site_map/SiteMapContainer';

export const Index = (props) => {
    return <SiteMapContainer {...props} />;
};

Index.getInitialProps = async () => ({
    namespacesRequired: ['categories'],
});

export default withTranslation(['categories'])(Index);
