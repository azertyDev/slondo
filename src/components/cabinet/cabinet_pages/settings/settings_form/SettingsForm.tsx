import React, {FC, ReactNode} from 'react';
import {Form, FormikContextType, FormikProvider} from 'formik';
import {getErrorMsg} from '@src/helpers';
import {Box, Button, CircularProgress, FormControlLabel, Grid, Typography} from '@material-ui/core';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {WithT} from 'i18next';
import {LocationAutocomplete} from '@src/components/post/create_post/form_page/common_form/location/LocationAutocomplete';
import {LocationsDataTypes} from '@root/interfaces/Locations';
import {
    NotificationSwitcher,
    SettingsButton,
    useStyles
} from '@src/components/cabinet/cabinet_pages/settings/settings_form/useStyles';
import {AvailableDays} from '@src/components/post/create_post/form_page/common_form/available_days/AvailableDays';

type SettingsFormPropsType = {
    formDisable: boolean,
    formik: FormikContextType<any>,
    uploadAvatarForm: ReactNode,
    locations: LocationsDataTypes,
    onLocationChange: (_, location) => void,
    handleTime: (value, name) => void,
    handleAvalDays: (day) => () => void,
    handleSwitch: (_, value) => void,
    handleOpenModal?: () => void,
    fetchingSmsCode: boolean
} & WithT;

export const SettingsForm: FC<SettingsFormPropsType> = (props) => {
    const {
        t,
        formDisable,
        formik,
        uploadAvatarForm,
        locations,
        onLocationChange,
        handleTime,
        handleAvalDays,
        handleSwitch,
        handleOpenModal,
        fetchingSmsCode
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

    const classes = useStyles({ props });
    return (
        <>
            <FormikProvider value={formik}>
                <Form onSubmit={handleSubmit}>
                    <Grid
                        container
                        className={classes.root}
                        spacing={3}
                    >
                        <Grid item xs={12}>
                            {uploadAvatarForm}
                        </Grid>
                        <Grid item xs={6}>
                            <CustomFormikField
                                name='user_name'
                                labelText={t('user_name')}
                                value={values.user_name}
                                onChange={handleChange}
                                disabled={formDisable}
                                errorMsg={getErrorMsg(errors.user_name, touched.user_name, t)}
                                size='small'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomFormikField
                                name='user_surname'
                                labelText={t('user_surname')}
                                value={values.user_surname}
                                onChange={handleChange}
                                disabled={formDisable}
                                errorMsg={getErrorMsg(errors.user_surname, touched.user_surname, t)}
                                size='small'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <CustomFormikField
                                name='phone'
                                labelText={t('phoneNumber')}
                                value={values.phone}
                                onChange={handleChange}
                                disabled
                                errorMsg={getErrorMsg(errors.phone, touched.phone, t)}
                                size='small'
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <LocationAutocomplete
                                name='location'
                                disabled={formDisable}
                                value={values.address}
                                locations={locations}
                                onBlur={handleBlur}
                                onChange={onLocationChange}
                                errorMsg={getErrorMsg(errors.location, touched.location, t)}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <Button
                                color='secondary'
                                variant='text'
                                className={classes.recoveryBtn}
                                onClick={handleOpenModal}
                                disabled={formDisable}
                            >
                                <Typography variant='subtitle1'>
                                    {fetchingSmsCode
                                        ? 'Loading'
                                        : 'Сменить пароль'
                                    }
                                </Typography>
                            </Button>
                        </Grid>
                        <Grid item xs={12}>
                            <Box fontSize='1.2rem' fontWeight='600' my={2}>
                                Общие настройки
                            </Box>
                        </Grid>
                        <Grid item xs={12}>
                            <Box fontSize='1rem' fontWeight='600'>
                                Уведомления
                            </Box>
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <NotificationSwitcher onChange={handleChange} />
                                }
                                label="Сообщения"
                                disabled={formDisable}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <NotificationSwitcher onChange={handleChange} name="checkedA" />
                                }
                                label="Избранное"
                                disabled={formDisable}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <NotificationSwitcher onChange={handleChange} name="checkedA" />
                                }
                                label="Мои объявления"
                                disabled={formDisable}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <NotificationSwitcher onChange={handleChange} name="checkedA" />
                                }
                                label="Объявления в подписках"
                                disabled={formDisable}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <FormControlLabel
                                control={
                                    <NotificationSwitcher onChange={handleChange} name="checkedA" />
                                }
                                label="Интерес покупателей"
                                disabled={formDisable}
                            />
                        </Grid>
                        <Grid item xs={6}>
                            <AvailableDays
                                t={t}
                                avalTime={values.avalTime}
                                handleTime={handleTime}
                                handleAvalDays={handleAvalDays}
                                handleBlur={handleBlur}
                                handleSwitch={handleSwitch}
                            />
                        </Grid>
                    </Grid>
                    <Grid
                        item
                        xs={6}
                        container
                        className={classes.wrapper}
                        justify='space-evenly'
                    >
                        <SettingsButton
                            type='submit'
                            disabled={isSubmitting || formDisable}
                            color='primary'
                            size="large"
                            disableElevation
                            startIcon={isSubmitting && <CircularProgress size={24} className={classes.progress} />}
                        >
                            <Typography variant='subtitle1'>
                                Применить
                            </Typography>
                        </SettingsButton>

                        <SettingsButton
                            type='button'
                            disableElevation
                            color='secondary'
                            disabled={formDisable}
                        >
                            <Typography variant='subtitle1'>
                                Отменить
                            </Typography>
                        </SettingsButton>
                    </Grid>
                </Form>
            </FormikProvider>
        </>
    );
};


