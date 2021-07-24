import {FC, ReactNode} from 'react';
import {WithT} from 'i18next';
import {getErrorMsg} from '@src/helpers';
import {Form, FormikContextType, FormikProvider} from 'formik';
import {Box, Button, CircularProgress, Grid, Typography} from '@material-ui/core';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {AvailableDays} from '@src/components/post/create_post/third_step/common_form/available_days/AvailableDays';
import {SettingsButton, useStyles} from './useStyles';
import {UserInfo} from "@root/interfaces/Auth";

type SettingsFormPropsType = {
    editable: boolean,
    avalTimeActive: boolean,
    formik: FormikContextType<UserInfo>,
    uploadAvatarForm: ReactNode,
    handleTime: (value, name) => void,
    handleAvalDays: (day) => () => void,
    handleOpenModal?: () => void,
    handleCancel: () => void,
    switchAvalDaysActive: (_, v) => void,
} & WithT;

export const SettingsForm: FC<SettingsFormPropsType> = (props) => {
    const {
        t,
        editable,
        avalTimeActive,
        switchAvalDaysActive,
        formik,
        uploadAvatarForm,
        handleTime,
        handleAvalDays,
        handleOpenModal,
        handleCancel
    } = props;

    const {
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        isSubmitting,
        handleBlur
    } = formik;

    const {
        name,
        surname,
        available_days,
        available_start_time,
        available_end_time
    } = values;

    const classes = useStyles({props});
    return (
        <>
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                    <Grid
                        container
                        spacing={3}
                        className={classes.root}
                    >
                        <Grid item xs={12}>
                            {uploadAvatarForm}
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormikField
                                t={t}
                                name='name'
                                labelText='user_name'
                                value={name}
                                onChange={handleChange}
                                disabled={!editable}
                                errorMsg={getErrorMsg(
                                    errors.name,
                                    touched.name,
                                    t,
                                    {value: t('name_must')}
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormikField
                                t={t}
                                name='surname'
                                labelText='user_surname'
                                value={surname}
                                onChange={handleChange}
                                disabled={!editable}
                                errorMsg={getErrorMsg(
                                    errors.surname,
                                    touched.surname,
                                    t,
                                    {value: t('surname_must')}
                                )}
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <FormikField
                                t={t}
                                disabled
                                name='phone'
                                value={values.phone}
                                onChange={handleChange}
                                labelText='phone_number'
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant='text'
                                color='secondary'
                                disabled={!editable}
                                onClick={handleOpenModal}
                                className={classes.recoveryBtn}
                            >
                                <Typography variant='subtitle1'>
                                    {t('auth_reg:change_password')}
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Box width='50%'>
                                <AvailableDays
                                    t={t}
                                    isActive={editable && avalTimeActive}
                                    handleTime={handleTime}
                                    handleBlur={handleBlur}
                                    handleAvalDays={handleAvalDays}
                                    switchActive={switchAvalDaysActive}
                                    time={{
                                        available_days,
                                        available_start_time,
                                        available_end_time
                                    }}
                                />
                            </Box>
                        </Grid>
                    </Grid>
                    {editable && (
                        <Grid
                            item
                            xs={6}
                            container
                            spacing={2}
                            justify='space-evenly'
                            className={classes.wrapper}
                        >
                            <Grid item xs={6} container justify='center'>
                                <SettingsButton
                                    disableElevation
                                    color='secondary'
                                    disabled={!editable}
                                    className={classes.button}
                                    onClick={handleCancel}
                                >
                                    <Typography variant='subtitle1'>
                                        {t('common:cancel')}
                                    </Typography>
                                </SettingsButton>
                            </Grid>
                            <Grid item xs={6} container justify='center'>
                                <SettingsButton
                                    type='submit'
                                    color='primary'
                                    size="large"
                                    disableElevation
                                    className={classes.button}
                                    disabled={isSubmitting || !editable}
                                    startIcon={
                                        isSubmitting &&
                                        <CircularProgress size={24} className={classes.progress}/>
                                    }
                                >
                                    <Typography variant='subtitle1'>
                                        {t('common:accept')}
                                    </Typography>
                                </SettingsButton>
                            </Grid>
                        </Grid>)}
                </Form>
            </FormikProvider>
        </>
    );
};


