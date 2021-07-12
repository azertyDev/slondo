import {FC, useContext, useEffect, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {withAuthRedirect} from '@src/hocs/withAuthRedirect';
import {Settings} from '@src/components/cabinet/cabinet_pages/settings/Settings';
import {userAPI} from '@src/api/api';
import {cookieOpts, cookies} from '@src/helpers';
import {useFormik} from 'formik';
import {SettingsForm} from '@src/components/cabinet/cabinet_pages/settings/settings_form/SettingsForm';
import {UploadAvatarForm} from '@src/components/cabinet/cabinet_pages/settings/settings_form/upload_avatar_form/UploadAvatarForm';
import {timeRegEx} from '@src/common_data/reg_exs';
import {CodeConfirm} from '@src/components/cabinet/cabinet_pages/settings/settings_form/password_recovery/CodeConfirm';
import {regularFormSchema} from '@root/validation_schemas/createPostSchemas';
import {UserCtx} from "@src/context/UserCtx";
import {AuthCtx} from "@src/context/AuthCtx";
import {ErrorCtx} from "@src/context";

const SettingsContainer: FC = () => {
    const {t} = useTranslation('cabinet');
    const {setIsAuth} = useContext(AuthCtx);
    const {user, setUser} = useContext(UserCtx);
    const {setErrorMsg} = useContext(ErrorCtx);

    const initSeconds = 60;
    const initUserInfo = {
        user_name: user.name,
        user_surname: user.surname ?? '',
        phone: user.phone,
        avatar: user.avatar,
        avalTime: {
            isActive: false,
            time: {
                start_time: user.available_start_time ?? '09:00',
                end_time: user.available_end_time ?? '18:00',
                week_days: user.available_days
            }
        }
    };

    const [fetchingSmsCode, setFetchingSmsCode] = useState(false);
    const [formDisable, setFormDisable] = useState(true);
    const [openModal, setOpenModal] = useState(false);
    const [isPassConfirm, setIsPassConfirm] = useState(false);
    const [codeError, setCodeError] = useState('');
    const [activeTimer, setActiveTimer] = useState(false);
    const [timer, setTimer] = useState(initSeconds);
    const [code, setCode] = useState('');

    const handleSubmit = async (values) => {
        try {
            const userData = {...values};

            const {
                user_name,
                user_surname,
                avalTime: {isActive, time},
                avatar,
                ...otherData
            } = userData;

            if (isActive) {
                const {week_days, start_time, end_time} = time;
                otherData.week_days = week_days.map(({id}) => ({id}));
                otherData.start_time = start_time;
                otherData.end_time = end_time;
            }

            otherData.name = user_name;
            otherData.surname = user_surname;

            if (!!values.avatar && typeof values.avatar === 'object') {
                const formData = new FormData();
                formData.append('avatar', values.avatar);
                await userAPI.changeUserAvatar(formData);
            }
            if (avatar === '') {
                await userAPI.deleteUserAvatar(user.id);
            }
            await userAPI.changeUserInfo({...user, ...otherData});
            const newUserInfo = await userAPI.getUserInfo();

            setIsAuth(true);
            setUser(newUserInfo);
            setFormDisable(true);
            cookies.set('slondo_user', newUserInfo, cookieOpts);
        } catch (e) {
            setErrorMsg(e.message);
        }
    };

    const handleCancel = () => {
        setValues(initUserInfo);
        setFormDisable(true);
    };

    const formik = useFormik({
        initialValues: initUserInfo,
        validationSchema: regularFormSchema,
        onSubmit: handleSubmit
    });

    const {
        values,
        setValues
        // errors,
        // touched
    } = formik;

    const {avalTime} = values;

    const handleDisableTimer = () => {
        setActiveTimer(false);
    };

    const handleOpenModal = async () => {
        try {
            setFetchingSmsCode(true);
            await userAPI.getSmsCode(user.phone);
            setFetchingSmsCode(false);
            setOpenModal(true);
            setActiveTimer(true);
        } catch (e) {
            setOpenModal(false);
            setCodeError(e.message);
            setFetchingSmsCode(false);
        }
    };

    const handleModalClose = () => {
        setOpenModal(false);
        setIsPassConfirm(false);
    };

    const handlePassConfirm = () => {
        setIsPassConfirm(true);
    };

    const handleAllowEdit = () => {
        setFormDisable(!formDisable);
    };

    const handleUpload = (event) => {
        setValues({...values, avatar: event.target.files[0]});
    };

    const handleDeleteAvatar = () => {
        setValues({...values, avatar: ''});
    };

    const handleSwitch = (_, value) => {
        setValues({...values, avalTime: {...avalTime, isActive: value}});
    };

    const handleAvalDays = day => () => {
        const isExstDay = avalTime.time.week_days.some(({id}) => id === day.id);
        const week_days = [...avalTime.time.week_days];
        if (isExstDay) {
            week_days.map(({id}, index) => {
                if (id === day.id) {
                    week_days.splice(index, 1);
                }
            });
        } else {
            week_days.push(day);
        }
        setValues({
            ...values,
            avalTime: {
                ...avalTime,
                time: {
                    ...avalTime.time,
                    week_days
                }
            }
        });
    };

    const handleTime = ({target: {value, name}}) => {
        if (timeRegEx.test(value)) {
            value = value.replace(/^:(.+)/, m => `00${m}`).replace(/(.+):$/, m => `${m}00`);
            let time = {...avalTime.time};
            time = {...time, [name]: value};
            setValues({...values, avalTime: {...avalTime, time}});
        }
    };

    const handleSignIn = (user) => () => {
        setUser(user);
    };

    const runTimer = () => {
        if (activeTimer) {
            if (timer > 0) {
                setTimeout(() => {
                    setTimer(timer - 1);
                }, 1000);
            }
        } else {
            setTimer(initSeconds);
        }
    };

    const ModalContent = (
        isPassConfirm
            ? <div className="formik-num-pass">
                {/*<FormikField*/}
                {/*    t={t}*/}
                {/*    type="password"*/}
                {/*    name="password"*/}
                {/*    labelText='enter_new_password'*/}
                {/*    placeholder={t('filters:enter_new_password')}*/}
                {/*    onChange={handleInput}*/}
                {/*    errorMsg={getErrorMsg(errors.password, touched.password, t)}*/}
                {/*/>*/}
                {/*<FormikField*/}
                {/*    t={t}*/}
                {/*    type="password"*/}
                {/*    name="password_confirm"*/}
                {/*    labelText='repeat_new_password'*/}
                {/*    placeholder={t('filters:repeat_new_password')}*/}
                {/*    onChange={handleInput}*/}
                {/*    errorMsg={getErrorMsg(errors.password_confirm, touched.password_confirm, t)}*/}
                {/*/>*/}
            </div>
            : <CodeConfirm
                t={t}
                timer={timer}
                phone={user.phone}
                errorMsg={codeError}
                setErrorMsg={setErrorMsg}
                setCode={setCode}
                handleDisableTimer={handleDisableTimer}
                handlePassConfirm={handlePassConfirm}
                setOpenModal={setOpenModal}
            />
    );

    const uploadAvatarForm = (
        <UploadAvatarForm
            t={t}
            handleUpload={handleUpload}
            formDisable={formDisable}
            handleDeleteAvatar={handleDeleteAvatar}
            avatar={values.avatar}
        />
    );

    const settingsForm = (
        <SettingsForm
            t={t}
            formik={formik}
            formDisable={formDisable}
            uploadAvatarForm={uploadAvatarForm}
            handleTime={handleTime}
            handleAvalDays={handleAvalDays}
            handleSwitch={handleSwitch}
            handleOpenModal={handleOpenModal}
            fetchingSmsCode={fetchingSmsCode}
            handleCancel={handleCancel}
        />
    );

    useEffect(() => {
        runTimer();
    }, [activeTimer, timer]);

    useEffect(() => {
        setValues(initUserInfo);
    }, [user]);

    return (
        <Settings
            handleAllowEdit={handleAllowEdit}
            settingsForm={settingsForm}
            formDisable={formDisable}
            openModal={openModal}
            modalContent={ModalContent}
            handleClose={handleModalClose}
        />
    );
};

export default withAuthRedirect(SettingsContainer);