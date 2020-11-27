import React from 'react';
import {withTranslation} from '@root/i18n';
import {NotificationsContainer} from "@src/components/cabinet/cabinet_pages/notifications/NotificationsContainer";

const Notifications = (props) => {
    return <NotificationsContainer {...props}/>;
};

Notifications.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(Notifications);
