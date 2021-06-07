import {UserRatings} from '@src/components/user_profile/pages/ratings/Ratings';
import {WithT} from 'i18next';
import {FC} from 'react';

export const UserRatingsContainer: FC<WithT> = ({t}) => {

    return (
        <UserRatings t={t} />
    );
};