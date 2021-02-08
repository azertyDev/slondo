import React from 'react';
import { withTranslation } from '@root/i18n';
import { SiteMapContainer } from '@root/src/components/site_map/SiteMapContainer';

export const Sitemap = (props) => {
    return <SiteMapContainer {...props} />;
};

Sitemap.getInitialProps = async () => ({
    namespacesRequired: ['categories'],
});

export default withTranslation(['categories'])(Sitemap);
