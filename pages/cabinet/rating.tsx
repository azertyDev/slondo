import React from 'react';
import {withTranslation} from '@root/i18n';
import {RatingContainer} from "@src/components/cabinet/cabinet_pages/rating/RatingContainer";

const Rating = (props) => {
    return <RatingContainer {...props} title="Рейтинг"/>;
};

Rating.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(Rating);
