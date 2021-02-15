import React from 'react';
import {withTranslation} from '@root/i18n';
import JobComponent from "@root/src/components/categories/job";

const Job = (props) => {
    return <JobComponent {...props}/>;
};

Job.getInitialProps = async () => ({
    namespacesRequired: ['cabinet', 'common'],
});

export default withTranslation(['cabinet', 'common'])(Job);
