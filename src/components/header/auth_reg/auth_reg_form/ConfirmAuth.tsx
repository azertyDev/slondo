import React, {FC} from 'react';
import {Typography, Button} from "@material-ui/core";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {CustomFormikPasswordField} from "@src/components/elements/custom_formik_password_field/CustomFormikPasswordField";
import {ButtonComponent} from "@src/components/elements/button/Button";
import {RecoveryInputs} from "@root/interfaces/Auth";
import {WithT} from "i18next";


const initialInputsVals: RecoveryInputs = {
    phone: '+998',
    code: '',
    password: '',
    password_confirmation: ''
};

type ConfirmAuthPropsType = {
    codeChecker,
    errors,
    touched,
    smsConfirm,
    timer,
    errorMsg,
    handleErrorMsg,
    handleSmsConfirm
} & WithT;

const ConfirmAuth: FC<ConfirmAuthPropsType> = (props) => {
    const {
        t,
        codeChecker,
        errors,
        touched,
        smsConfirm,
        timer,
        errorMsg,
        handleErrorMsg,
        handleSmsConfirm
    } = props;
    // const onSubmit = (values) => {
    //     const phone = values.phone.replace("+", "");
    //     const data = {...values, phone};
    //     confirmMsg(data);
    // };

    // const formik = useFormik({
    //     onSubmit,
    //     initialValues: initialInputsVals,
    //     validationSchema: authRecoverySchema
    // });


    return (
        <div>
            {codeChecker
                ? <div>
                    <CustomFormikPasswordField
                        name="password"
                        labelText={t('enterNewPassword')}
                        className={errors.phone && touched.phone ? 'error-border' : ''}
                    />
                    <div className="validation-block">
                        <Typography variant="subtitle2" className="error-text">
                            {errors.password && touched.password ? errors.password : ''}
                        </Typography>
                    </div>
                    <CustomFormikPasswordField
                        name="password_confirmation"
                        labelText={t('repeatNewPassword')}
                        className={errors.password_confirmation && touched.password_confirmation ? 'error-border' : ''}
                    />
                    <div className="validation-block">
                        <Typography variant="subtitle2" className="error-text">
                            {errors.password_confirmation && touched.password_confirmation ? errors.password_confirmation : ''}
                        </Typography>
                    </div>
                </div>
                : <div>
                    <CustomFormikField
                        name="phone"
                        type="tel"
                        placeholder="+ (998) __ ___ __ __"
                        labelText={t('enterPhone')}
                        className={errors.phone && touched.phone ? 'error-border' : ''}
                    />
                    <div className="validation-block">
                        <Typography variant="subtitle2" className="error-text">
                            {errors.phone && touched.phone ? errors.phone : ''}
                        </Typography>
                    </div>
                    {smsConfirm && (
                        <>
                            <CustomFormikField
                                name="code"
                                type="tel"
                                placeholder="__ __ __ __ __ __ __ __ __"
                                labelText={t('enterSMS')}
                                className={errors.code && touched.code ? 'error-border' : ''}
                            />
                            <div className="validation-block">
                                <Typography variant="subtitle2" className="error-text">
                                    {errors.code && touched.code ? errors.code : ''}
                                </Typography>
                            </div>
                            <div>
                                {typeof timer === 'string'
                                    ? <Button type='submit'>
                                        <div>
                                            {timer}
                                        </div>
                                    </Button>
                                    : <div onClick={handleErrorMsg}>
                                        <div>
                                            {timer}
                                        </div>
                                        <div>
                                            {errorMsg}
                                        </div>
                                    </div>}
                            </div>
                        </>
                    )}
                </div>}
            <div onClick={handleSmsConfirm}>
                <ButtonComponent
                    className="reg-btn"
                    type='submit'
                >
                    {t(`${smsConfirm ? 'next' : 'continue'}`)}
                </ButtonComponent>
                <ButtonComponent className="cancel">
                    {t(`common:cancel`)}
                </ButtonComponent>
            </div>
        </div>
    )
}

export default ConfirmAuth
