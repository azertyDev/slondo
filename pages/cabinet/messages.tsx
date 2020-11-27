import React from 'react';
import {withTranslation} from '@root/i18n';
import {MessagesContainer} from "@src/components/cabinet/cabinet_pages/messages/MessagesContainer";

const Messages = (props) => {
    return <MessagesContainer {...props}/>;
};

Messages.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(Messages);
