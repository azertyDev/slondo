import {FC} from 'react';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {Box, Grid, Typography} from '@material-ui/core';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {useStyles} from './useStyles';

type ConfirmModalPropsType = {
    title: string,
    open: boolean,
    cancelTxt: string,
    confirmTxt: string,
    handleConfirm: () => void,
    handleClose: () => void
};

export const ConfirmModal: FC<ConfirmModalPropsType> = (props) => {
    const {
        title,
        open,
        confirmTxt,
        cancelTxt,
        handleClose,
        handleConfirm
    } = props;
    const classes = useStyles();

    return (
        <ResponsiveModal
            maxWidth='xs'
            openDialog={open}
            handleCloseDialog={handleClose}
        >
            <ModalHeader
                title={title}
                handleCloseDialog={handleClose}
            />
            <Box
                p={3}
                mt={2}
                width={1}
                className={classes.root}
            >
                <Grid container spacing={2} justifyContent='center'>
                    <Grid item xs={6} sm={5}>
                        <CustomButton onClick={handleClose} color='silver'>
                            <Typography variant='subtitle1' component='p'>
                                {cancelTxt}
                            </Typography>
                        </CustomButton>
                    </Grid>
                    <Grid item xs={6} sm={5}>
                        <CustomButton onClick={handleConfirm} color='secondary'>
                            <Typography variant='subtitle1' component='p'>
                                {confirmTxt}
                            </Typography>
                        </CustomButton>
                    </Grid>
                </Grid>
            </Box>
        </ResponsiveModal>
    );
};
