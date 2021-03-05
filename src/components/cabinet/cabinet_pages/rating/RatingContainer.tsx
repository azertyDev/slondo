import React, {FC} from 'react';
import {Rating} from "@src/components/cabinet/cabinet_pages/rating/Rating";
import {useTranslation} from "react-i18next";
import {withAuthRedirect} from "@src/hoc/withAuthRedirect";

const RatingContainer: FC = () => {
    const {t} = useTranslation(['cabinet']);

    return (
        <Rating t={t}/>
    )
};

export default withAuthRedirect(RatingContainer);