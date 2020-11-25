import React from 'react';
import {withTranslation} from '@root/i18n';
import { UserSocialInfoContainer } from '@root/src/components/cabinet/cabinetSidebar/user_social_info/UserSocialInfoContainer';

const Subscribers = (props) => {
    return <UserSocialInfoContainer {...props} title="Подписчики"/>;
};

Subscribers.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(Subscribers);
