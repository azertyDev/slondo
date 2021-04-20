import React, {FC} from 'react';
import {SafeIcon} from '@src/components/elements/icons';
import {TextField, Typography} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {useStyles} from './useStyles';


type FixedActionComponentPropsType = {
    safe_deal?: boolean,
    isAuction?: boolean
};

export const FixedActionComponent: FC<FixedActionComponentPropsType> = (props) => {
    const {
        safe_deal = false,
        isAuction = false
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {isAuction
                ? <div className='floating-auc'>
                    <div className="floating-content">
                        {/*<CustomFormikField*/}
                        {/*    name='sum'*/}
                        {/*    value=''*/}
                        {/*    placeholder="Введите сумму"*/}
                        {/*/>*/}
                        {/*<TextField id="outlined-basic" placeholder="Введите сумму" variant="filled"/>*/}
                        <ButtonComponent>
                            Сделать ставку
                        </ButtonComponent>
                    </div>
                    <Typography variant='subtitle2'>
                        Максимальня возможная ставка
                        20 000 009
                    </Typography>
                </div>
                : safe_deal && (
                <div className='floating'>
                    <div className="floating-text">
                        <SafeIcon/>
                        <Typography variant='subtitle2'>
                            Безопасная покупка <br/>
                            за 420 000 сум
                        </Typography>
                    </div>
                    <ButtonComponent>
                        Купить
                    </ButtonComponent>
                </div>
            )}
        </div>
    );
};