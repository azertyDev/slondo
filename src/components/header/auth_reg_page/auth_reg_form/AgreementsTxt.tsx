import React, {FC} from 'react';
import Link from "next/link";
import {Typography} from "@material-ui/core";
import {WithT} from "i18next";

type AgreementsPropsType = {
    locale: string,
    isRegAgreements?: boolean
} & WithT;

export const AgreementsTxt: FC<AgreementsPropsType> = ({t, locale, isRegAgreements}) => {
    return (
        isRegAgreements
            ? (
                <Typography className="reg-agreement" variant="body2">
                    {`${t('agreement.firstPart')} `}
                    <Link href="#">
                        <a>{`${t('agreement.secondPart')} `}</a>
                    </Link>
                    {`${t('agreement.thirdPart')} `}
                    <Link href="#">
                        <a>{`${t('agreement.fourthPart')}`}</a>
                    </Link>
                    {locale === 'uz' && ` ${t('agreement.fifthPart')}`}
                </Typography>
            ) : (
                <Typography className="reg-agreement" variant="body2">
                    Нажимая кнопку Войти вы принимаете условия {' '}
                    <Link href="#">
                        <a>лицензионного соглашения</a>
                    </Link>
                    {` ${t('agreement.thirdPart')} `}
                    <Link href="#">
                        <a>политики конфиденциальности</a>
                    </Link>
                    {locale === 'uz' && ` ${t('agreement.fifthPart')}`}
                </Typography>
            )
    )
};