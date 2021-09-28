import {UserRatings} from '@src/components/user_profile/pages/ratings/Ratings';
import {FC, useContext, useEffect, useState} from 'react';
import {userAPI} from '@src/api/api';
import {unstable_batchedUpdates} from 'react-dom';
import {useRouter} from 'next/router';
import {ErrorCtx} from '@src/context';

export const UserRatingsContainer: FC<any> = (props) => {
    const {
        t,
        userInfo
    } = props;

    const {setErrorMsg} = useContext(ErrorCtx);
    const [isFetch, setIsFetch] = useState(false);
    const [ratings, setRatings] = useState([]);
    const {user_id} = useRouter().query;

    const fetchUserRatings = async () => {
        try {
            const params = {
                user_id
            };
            setIsFetch(true);

            const {data} = await userAPI.getUserRating(params);

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
        fetchUserRatings();
    }, []);

    return (
        <UserRatings t={t} ratings={ratings} userInfo={userInfo} />
    );
};