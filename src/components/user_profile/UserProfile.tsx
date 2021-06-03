import {FC} from 'react';
import {useStyles} from './useStyles';
import {UserProfileWrapper} from '@src/components/user_profile/profile_wrapper/UserProfileWrapper';
import {UserInfo} from '@root/interfaces/Auth';
import {WithT} from 'i18next';

export type UserProfilePropsType = {
    title: string;
    user?: UserInfo
} & WithT;

export const UserProfile: FC<UserProfilePropsType> = (props) => {
    const {t, title, user} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <UserProfileWrapper
                t={t}
                title={title}
                headerTitle={title}
                user={user}
            >
                UserProfile
            </UserProfileWrapper>
        </div>
    );
};
