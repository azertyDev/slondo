import React from 'react';
import {withTranslation} from '@root/i18n';
import HomeComponent from "@root/src/components/categories/home";

const Home = (props) => {
    return <HomeComponent {...props}/>;
};

Home.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Home);
