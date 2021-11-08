import {UserRatings} from '@src/components/user_profile/pages/ratings/Ratings';
import {FC, useContext, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {unstable_batchedUpdates} from 'react-dom';
import {ErrorCtx} from '@src/context';
import {useTranslation} from 'next-i18next';
import {UserInfo} from '@root/interfaces/Auth';

export const UserRatingsContainer: FC<{ userInfo: UserInfo }> = ({userInfo}) => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);
    const [isFetch, setIsFetch] = useState(false);
    const [ratings, setRatings] = useState([]);

    const fetchUserRatings = async () => {
        try {
            setIsFetch(true);

            const {data} = await userAPI.getUserRating(userInfo.id);

            unstable_batchedUpdates(async () => {
                setRatings(data);
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(async () => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    useEffect(() => {
        userInfo.id && fetchUserRatings();
    }, [userInfo]);

    return (
        <UserRatings
            t={t}
            ratings={ratings}
            userInfo={userInfo}
        />
    );
};