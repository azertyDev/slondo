import {FC, ReactNode} from 'react';
import {getErrorMsg} from '@src/helpers';
import {Form, FormikContextType, FormikProvider} from 'formik';
import {Button, CircularProgress, Grid, Typography} from '@material-ui/core';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {AvailableDays} from '@src/components/post/create_post/third_step/common_form/available_days/AvailableDays';
import {SettingsButton, useStyles} from './useStyles';
import {UserInfo} from '@root/interfaces/Auth';
import LockIcon from '@material-ui/icons/Lock';
import {useTranslation} from "react-i18next";

type SettingsFormPropsType = {
    editable: boolean,
    timeEditable: boolean,
    formik: FormikContextType<UserInfo>,
    uploadAvatarForm: ReactNode,
    handleTime: (value, name) => void,
    handleAvalDays: (day) => () => void,
    handleOpenModal?: () => void,
    handleCancel: () => void,
    switchAvalDaysActive: (_, v) => void,
};

export const SettingsForm: FC<SettingsFormPropsType> = (props) => {
    const {
        editable,
        timeEditable,
        switchAvalDaysActive,
        formik,
        uploadAvatarForm,
        handleTime,
        handleAvalDays,
        handleOpenModal,
        handleCancel
    } = props;

    const {t} = useTranslation('cabinet');

    const {
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        isSubmitting
    } = formik;

    const {
        name,
        surname,
        available_days,
        available_start_time,
        available_end_time
    } = values;

    const classes = useStyles();
    return (
        <>
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                    <Grid
                        item
                        container
                        spacing={3}
                        className={classes.root}
                    >
                        <Grid item xs={12}>
                            {uploadAvatarForm}
                        </Grid>
                        <Grid item container xs={12} sm={8} md={8} lg={6} spacing={2}>
                            <Grid item xs={12}>
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
                                        t('name_must')
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                                        t('surname_must')
                                    )}
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <FormikField
                                    t={t}
                                    disabled
                                    name='phone'
                                    value={values.phone}
                                    onChange={handleChange}
                                    labelText='phone_number'
                                />
                            </Grid>
                        </Grid>
                        <Grid item xs={12}>
                            <Button
                                variant='text'
                                color='secondary'
                                disabled={!editable}
                                component='span'
                                onClick={handleOpenModal}
                                className={classes.recoveryBtn}
                                startIcon={
                                    <span className={classes.icon}>
                                        <LockIcon color={editable ? 'secondary' : 'action'} fontSize='small'/>
                                    </span>
                                }
                            >
                                <Typography variant='subtitle1'>
                                    {t('auth_reg:change_password')}
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12} sm={8} md={8} lg={6}>
                            <AvailableDays
                                t={t}
                                isActive={editable && timeEditable}
                                handleTime={handleTime}
                                handleAvalDays={handleAvalDays}
                                switchActive={switchAvalDaysActive}
                                errors={errors}
                                touched={touched}
                                time={{
                                    available_days,
                                    available_start_time,
                                    available_end_time
                                }}
                            />
                        </Grid>
                        {editable && (
                            <Grid
                                item
                                xs={12}
                                sm={8}
                                md={8}
                                lg={12}
                                container
                                spacing={2}
                            >
                                <Grid item xs={6} sm={6} lg={3}>
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
                                <Grid item xs={6} sm={6} lg={3}>
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
                            </Grid>
                        )}
                    </Grid>
                </Form>
            </FormikProvider>
        </>
    );
};


