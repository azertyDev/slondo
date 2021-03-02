import React from 'react';
import {withTranslation} from '@root/i18n';
import AnimalComponent from "@root/src/components/categories/animal";

const Animal = (props) => {
    return <AnimalComponent {...props}/>;
};

Animal.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Animal);
