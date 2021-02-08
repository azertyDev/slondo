import React from 'react';
import {withTranslation} from '@root/i18n';
import CarsComponent from "@root/src/components/categories/car";

const Car = (props) => {
    return <CarsComponent {...props}/>;
};

Car.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Car);
