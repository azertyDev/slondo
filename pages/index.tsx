import React from "react";
import {Home} from '@src/components/home/Home';
import {withTranslation} from "../i18n";


const HomePage = (props) => {
    return (
        <Home {...props} />
    )
};

HomePage.getInitialProps = async () => ({
    namespacesRequired: ['main', 'common'],
});

export default withTranslation(['main', 'common'])(HomePage);