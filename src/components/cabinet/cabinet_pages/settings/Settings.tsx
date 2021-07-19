import {FC, ReactElement, ReactNode} from 'react';
import {Box, Button, Grid, Typography} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {useStyles} from './useStyles';

type SettingsPropsType = {
    settingsForm: ReactNode,
    handleAllowEdit: () => void,
    openModal: boolean,
    handleClose: () => void,
    modalContent: ReactElement,
    formDisable: boolean,
}

export const Settings: FC<SettingsPropsType> = (props) => {
    const {
        settingsForm,
        handleAllowEdit,
        openModal,
        handleClose,
        modalContent,
        formDisable
    } = props;

    const classes = useStyles();
    return (
        <>
            <Grid container className={classes.root} direction='column'>
                <Box
                    display='flex'
                    justifyContent='space-between'
                    alignItems='center'
                >
                    <Typography variant='subtitle1'>
                        Личные данные
                    </Typography>
                    <Button
                        color='secondary'
                        variant='text'
                        className={classes.editButton}
                        onClick={handleAllowEdit}
                        startIcon={formDisable && <EditIcon fontSize='small'/>}
                    >
                        <Typography variant='subtitle1'>
                            {formDisable ? 'Редактировать' : 'Отменить'}
                        </Typography>
                    </Button>
                </Box>
                <Grid item xs>
                    {settingsForm}
                </Grid>
            </Grid>
            <CustomModal
                handleModalClose={handleClose}
                openModal={openModal}
            >
                {modalContent}
            </CustomModal>
        </>
    );
};
