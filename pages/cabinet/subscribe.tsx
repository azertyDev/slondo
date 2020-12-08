import React from 'react';
import {withTranslation} from '@root/i18n';
import {UserSocialInfoContainer} from "@src/components/cabinet/cabinet_pages/user_social_info/UserSocialInfoContainer";

const Subscribe = (props) => {
    return <UserSocialInfoContainer {...props}/>;
};

Subscribe.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(Subscribe);
