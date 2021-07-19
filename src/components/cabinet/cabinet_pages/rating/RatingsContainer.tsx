import {FC, useContext, useEffect, useState} from 'react';
import {Ratings} from '@src/components/cabinet/cabinet_pages/rating/Ratings';
import {useTranslation} from 'react-i18next';
import {userAPI} from '@src/api/api';
import {ErrorCtx} from "@src/context";

export const RatingsContainer: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setErrorMsg} = useContext(ErrorCtx);

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
            setErrorMsg(e.message);
        }
    };

    const handleReply = (comment_id: number, comment: string) => async () => {
        try {
            const {} = userAPI.setReplyComment(comment_id, comment);
            fetchUserRatings();
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    useEffect(() => {
        fetchUserRatings();
    }, []);

    return (
        <Ratings
            t={t}
            data={userRatings.data}
            handleReply={handleReply}
        />
    );
};