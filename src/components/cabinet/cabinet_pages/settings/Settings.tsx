import React, {FC, ReactElement, ReactNode} from 'react';
import {Box, Button, Grid, Typography} from '@material-ui/core';
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {useStyles} from './useStyles';
import EditIcon from '@material-ui/icons/Edit';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';

type SettingsPropsType = {
    settingsForm: ReactNode,
    handleIsEditable: () => void,
    openModal: boolean,
    handleClose: () => void,
    modalContent: ReactElement,
}

export const Settings: FC<SettingsPropsType> = (props) => {
    const {
        settingsForm,
        handleIsEditable,
        openModal,
        handleClose,
        modalContent
    } = props;
    const title = 'Настройки';

    const classes = useStyles();
    return (
        <>
            <CabinetWrapper headerTitle={title} title={title}>
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
                            onClick={handleIsEditable}
                            startIcon={<EditIcon fontSize='small' />}
                        >
                            <Typography variant='subtitle1'>
                                Редактировать
                            </Typography>
                        </Button>
                    </Box>
                    <Grid item xs>
                        {settingsForm}
                    </Grid>
                </Grid>
            </CabinetWrapper>
            <CustomModal
                handleModalClose={handleClose}
                openModal={openModal}
            >
                {modalContent}
            </CustomModal>
        </>
    )
}
