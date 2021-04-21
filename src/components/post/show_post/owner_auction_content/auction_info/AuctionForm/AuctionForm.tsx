import React, {FC} from 'react';
import {FormikProvider, useFormik} from 'formik';
import {Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {getAuctionSchema} from '@root/validation_schemas/auctionSchema';
import {WithT} from 'i18next';
import {getErrorMsg, numberPrettier} from '@src/helpers';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {useStyles} from './useStyles';
import {SafeIcon} from '@src/components/elements/icons';

type AuctionFromPropsType = {
    data,
    isAuction: boolean,
    safe_deal: boolean,
    handleFormSubmit,
    auctionsBetsList
} & WithT;

const AuctionForm: FC<AuctionFromPropsType> = (props) => {
    const {
        t,
        data,
        isAuction,
        safe_deal,
        handleFormSubmit,
        auctionsBetsList
    } = props;

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const min_bet = auctionsBetsList?.[0]?.['min_bet'];
    const max_bet = auctionsBetsList?.[0]?.['max_bet'];
    const id = data?.['auction']?.['id'];

    const onSubmit = (values) => {
        handleFormSubmit({...values, id});
    };

    const formik = useFormik({
        initialValues: {bet: ''},
        onSubmit,
        validationSchema: getAuctionSchema(min_bet, max_bet)
    });

    const {
        errors,
        touched,
        handleSubmit
    } = formik;

    const classes = useStyles({isMdDown});
    return (
        <div className={classes.root}>
            {isAuction
                ? <FormikProvider value={formik}>
                    <form onSubmit={handleSubmit}>
                        <div>
                            <div className="bet-info">
                                <CustomFormikField
                                    name="bet"
                                    type="number"
                                    placeholder={`Мин. ставка: ${min_bet} сум`}
                                    errorMsg={getErrorMsg(errors.bet, touched.bet, t)}
                                />
                            </div>
                            <ButtonComponent
                                color="secondary"
                                type="submit"
                                style={{
                                    borderRadius: '3px',
                                    border: '1px solid #675EAA',
                                    width: '100%',
                                    marginTop: 5
                                }}
                            >
                                <Typography variant="subtitle1" color="initial">
                                    Сделать ставку
                                </Typography>
                            </ButtonComponent>
                            <div>
                                <Typography variant="subtitle2" color="initial">
                                    Максимально возможная ставка:
                                </Typography>
                                <Typography variant="subtitle2" color="initial">
                                    {numberPrettier(auctionsBetsList?.[0]?.max_bet)} сум
                                </Typography>
                            </div>
                        </div>
                    </form>
                </FormikProvider>
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

export default AuctionForm;