import React from 'react';
import {withTranslation} from '@root/i18n';
import {FavoriteContainer} from "@src/components/cabinet/cabinet_pages/favorite/FavoriteContainer";

const Favorite = (props) => {
    return <FavoriteContainer {...props} title="Избранное"/>;
};

Favorite.getInitialProps = async () => ({
    namespacesRequired: ['cabinet'],
});

export default withTranslation(['cabinet'])(Favorite);
