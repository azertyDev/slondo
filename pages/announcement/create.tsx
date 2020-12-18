import React from 'react'
import {CreateAncmntContainer} from '@src/components/announcement/create_ancmnt/CreateAncmntContainer'
import {withTranslation} from "next-i18next";

const Create = (props) => {
    return <CreateAncmntContainer {...props} />
}

Create.getInitialProps = async () => ({
    namespacesRequired: ['ancmnt', 'common'],
});

export default withTranslation(['ancmnt', 'common'])(Create);