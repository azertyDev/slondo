import React from 'react';
import {withTranslation} from '@root/i18n';
import {ArchiveContainer} from "@src/components/cabinet/cabinet_pages/archive/ArchiveContainer";

const Archive = (props) => {
    return <ArchiveContainer {...props}/>;
};

Archive.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(Archive);
