import React from 'react';
import {withTranslation} from '@root/i18n';
import HobbiesComponent from "@root/src/components/categories/hobbies";

const Hobbies = (props) => {
    return <HobbiesComponent {...props}/>;
};

Hobbies.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Hobbies);
