import React, {FC, useEffect, useState} from 'react';
import {Ratings} from '@src/components/cabinet/cabinet_pages/rating/Ratings';
import {useTranslation} from 'react-i18next';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {useDispatch, useSelector} from 'react-redux';
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {userAPI} from '@src/api/api';

const RatingsContainer: FC = () => {
    const dispatch = useDispatch();
    const {t} = useTranslation(['cabinet']);

    const initialUserRatingState = {
        isFetch: false,
        data: []
    };

    const [userRatings, setUserRatings] = useState(initialUserRatingState);

    const fetchUserRatings = async () => {
        try {
            setUserRatings({...userRatings, isFetch: true});
            const {data} = await userAPI.getAllUserRating();
            setUserRatings({...userRatings, data, isFetch: false});
        } catch (e) {
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
        fetchUserRatings();
    }, []);

    return (
        <Ratings
            t={t}
            data={userRatings.data}
        />
    );
};

export default withAuthRedirect(RatingsContainer);