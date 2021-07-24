import {FC, useEffect, useState} from 'react';
import {FormikField} from "@src/components/elements/formik_field/FormikField";
import {getErrorMsg} from "@src/helpers";
import {CodeConfirm} from "@src/components/cabinet/cabinet_pages/settings/settings_form/password_recovery/code_confirm/CodeConfirm";
import {useTranslation} from "react-i18next";

type PasswordRecoveryPropsType = {}

export const PasswordRecovery: FC<PasswordRecoveryPropsType> = () => {
    const {t} = useTranslation('cabinet');

    const initSeconds = 120;

    const [isPassConfirm, setIsPassConfirm] = useState(false);
    const [activeTimer, setActiveTimer] = useState(false);
    const [timer, setTimer] = useState(initSeconds);
    const [code, setCode] = useState('');
    const [codeError, setCodeError] = useState('');

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

    const handleDisableTimer = () => {
        setActiveTimer(false);
    };

    const handlePassConfirm = () => {
        setIsPassConfirm(true);
    };

    useEffect(() => {
        runTimer();
    }, [activeTimer, timer]);

    return isPassConfirm
        ? <div className="formik-num-pass">
            <FormikField
                t={t}
                type="password"
                name="password"
                labelText={t('auth_reg:enter_new_password')}
                placeholder={t('auth_reg:enter_new_password')}
                onChange={handleInput}
                errorMsg={getErrorMsg(errors.password, touched.password, t)}
            />
            <FormikField
                t={t}
                type="password"
                name="password_confirm"
                labelText={t('auth_reg:repeat_new_password')}
                placeholder={t('auth_reg:repeat_new_password')}
                onChange={handleInput}
                errorMsg={getErrorMsg(errors.password_confirm, touched.password_confirm, t)}
            />
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
        />;
};