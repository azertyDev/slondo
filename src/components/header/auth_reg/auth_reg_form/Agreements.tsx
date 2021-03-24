import React, {FC} from 'react';
import Link from "next/link";
import {Typography} from "@material-ui/core";
import {WithT} from "i18next";

type AgreementsPropsType = {
    locale: string,
    isRegAgreements?: boolean
} & WithT;

export const Agreements: FC<AgreementsPropsType> = ({t, locale, isRegAgreements}) => {
    return (
        isRegAgreements
            ? (
                <Typography className="reg-agreement" variant="body2">
                    {`${t('auth_reg:agreement.firstPart')} `}
                    <Link href="#">
                        <a>{`${t('auth_reg:agreement.secondPart')} `}</a>
                    </Link>
                    {`${t('auth_reg:agreement.thirdPart')} `}
                    <Link href="#">
                        <a>{`${t('auth_reg:agreement.fourthPart')}`}</a>
                    </Link>
                    {locale === 'uz' && ` ${t('auth_reg:agreement.fifthPart')}`}
                </Typography>
            ) : (
                <Typography className="reg-agreement" variant="body2">
                    Нажимая кнопку Войти вы принимаете условия {' '}
                    <Link href="#">
                        <a>лицензионного соглашения</a>
                    </Link>
                    {` ${t('auth_reg:agreement.thirdPart')} `}
                    <Link href="#">
                        <a>политики конфиденциальности</a>
                    </Link>
                    {locale === 'uz' && ` ${t('auth_reg:agreement.fifthPart')}`}
                </Typography>
            )
    )
};