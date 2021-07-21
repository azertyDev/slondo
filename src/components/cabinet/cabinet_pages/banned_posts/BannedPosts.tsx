import {FC, ReactElement, ReactNode} from 'react';
import {useStyles} from './useStyles';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {CustomSnackbar} from '@src/components/elements/snackbar/Snackbar';
import {WithT} from 'i18next';

type FavoritePropsType = {
    handleClose: () => void,
    openModal: boolean,
    ModalContent: () => ReactElement;
    bannedPostCards: ReactNode;
    handleCloseSnackbar: () => void,
    openSnackbar?: boolean,
    message?: string,
} & WithT;

export const BannedPosts: FC<FavoritePropsType> = (props) => {
    const {
        t,
        handleClose,
        openModal,
        ModalContent,
        bannedPostCards,
        openSnackbar,
        handleCloseSnackbar,
        message
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {bannedPostCards}
            <CustomModal
                handleModalClose={handleClose}
                openModal={openModal}
            >
                <ModalContent />
            </CustomModal>
            <CustomSnackbar
                message={t(message)}
                openSnackbar={openSnackbar}
                severity="success"
                handleCloseSnackbar={handleCloseSnackbar}
            />
        </div>
    );
};
