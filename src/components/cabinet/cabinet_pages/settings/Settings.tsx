import React, {FC, useState} from 'react';
import {Box, Button, Grid, Typography} from '@material-ui/core';
import {CabinetWrapper} from '@src/components/cabinet/CabinetWrapper';
import {useStyles} from './useStyles';
import {SettingsForm} from '@src/components/cabinet/cabinet_pages/settings/settings_form/SettingsForm';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';

export const Settings: FC = () => {
    const title = 'Настройки';

    const [isEditable, setIsEditable] = useState(true);

    const handleClick = () => {
        setIsEditable(!isEditable);
    };

    const classes = useStyles();
    return (
        <>
            <CabinetWrapper headerTitle={title} title={title}>
                <Grid container className={classes.root}>
                    <Grid item xs={6}>
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
                                variant='contained'
                                className={classes.editButton}
                                onClick={handleClick}
                                startIcon={<EditOutlinedIcon fontSize='small' />}
                            >
                                <Typography variant='subtitle1'>
                                    Редактировать
                                </Typography>
                            </Button>
                        </Box>
                        <Box>
                            <SettingsForm isEditable={isEditable} />
                        </Box>
                    </Grid>
                </Grid>
            </CabinetWrapper>
        </>
    )
}
