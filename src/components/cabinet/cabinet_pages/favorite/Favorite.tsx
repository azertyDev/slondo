import React, {FC} from 'react';
import {CardView} from '@src/components/elements/card/card_view/CardView';
import {useStyles} from './useStyles';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {FavoriteDataType} from '@src/components/cabinet/cabinet_pages/favorite/FavoriteContainer';

type FavoritePropsType = {
    isFetch: boolean,
    list: FavoriteDataType[],
    handleClose: () => void,
    openModal: boolean,
    content: string,
    favoritePostId: number,
    setOpenModal: (boolean) => void,
    handleModalOpen: (value, id) => void,
}

export const Favorite: FC<FavoritePropsType> = (props) => {
    const {
        list,
        handleClose,
        openModal,
        content,
        favoritePostId,
        setOpenModal,
        handleModalOpen
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <CardView listMode={true} list={list} handleModalOpen={handleModalOpen} />
            <CustomModal
                handleClose={handleClose}
                openModal={openModal}
                content={content}
                favoritePostId={favoritePostId}
                setOpenModal={setOpenModal}
            />
        </div>
    );
};
