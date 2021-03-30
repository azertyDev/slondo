import React, {Dispatch, FC, SetStateAction, useState} from 'react';
import {WithT} from "i18next";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {PasswordConfirmForm} from "@src/components/header/auth_reg_page/auth_reg_form/recovery_form/PasswordConfirmForm";
import {CodeConfirmForm} from "@src/components/header/auth_reg_page/auth_reg_form/recovery_form/CodeConfirmForm";
import {PhoneForm} from "@src/components/header/auth_reg_page/auth_reg_form/recovery_form/PhoneForm";
import {useDispatch} from "react-redux";
import {signInAction} from "@src/redux/slices/userSlice";
import {TimerType} from "@src/components/header/auth_reg_page/AuthRegPage";


type ConfirmAuthPropsType = {
    handleCloseModal: () => void,
    timer: TimerType
    handleActiveTimer: (v) => () => void,
    setErrorMsg: Dispatch<SetStateAction<string>>,
    handleCancel: () => void
} & WithT;

export const RecoveryContainer: FC<ConfirmAuthPropsType> = (props) => {
    const {
        t,
        timer,
        setErrorMsg,
        handleCloseModal,
        handleActiveTimer,
        handleCancel
    } = props;

    const dispatch = useDispatch();

    const [phone, setPhone] = useState('');
    const [code, setCode] = useState('');
    const [isNewPassword, setIsNewPassword] = useState(false);

    const handleSignIn = (user) => () => {
        dispatch(signInAction(user));
    };

    return (
        <div>
            {isNewPassword
                ? <div className='pass-confirm-form'>
                    <PasswordConfirmForm
                        t={t}
                        code={code}
                        phone={phone}
                        setErrorMsg={setErrorMsg}
                        handleSignIn={handleSignIn}
                        handleCloseModal={handleCloseModal}
                    />
                </div>
                : timer.isActive
                    ? <div className='code-confirm-form'>
                        <CodeConfirmForm
                            t={t}
                            phone={phone}
                            setCode={setCode}
                            setErrorMsg={setErrorMsg}
                            timerSeconds={timer.seconds}
                            setIsNewPassword={setIsNewPassword}
                            deactivateTimer={handleActiveTimer(false)}
                        />
                    </div>
                    : <div className='phone-form'>
                        <PhoneForm
                            t={t}
                            setPhone={setPhone}
                            setErrorMsg={setErrorMsg}
                            activateTimer={handleActiveTimer(true)}
                        />
                    </div>}
            <div className='auth-btns'>
                <ButtonComponent onClick={handleCancel}>
                    {t('common:cancel')}
                </ButtonComponent>
            </div>
        </div>
    )
};
