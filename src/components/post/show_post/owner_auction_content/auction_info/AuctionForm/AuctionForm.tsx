import React, {FC} from 'react';
import {FormikProvider, useFormik} from 'formik';
import {Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {getAuctionSchema} from '@root/validation_schemas/auctionSchema';
import {WithT} from 'i18next';
import {getErrorMsg, numberPrettier} from '@src/helpers';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import {useStyles} from './useStyles';
import Grid from '@material-ui/core/Grid';

type AuctionFromPropsType = {
    auctionId: number,
    isAuction: boolean,
    safe_deal: boolean,
    handleFormSubmit,
    auctionsBetsList
} & WithT;

export const AuctionForm: FC<AuctionFromPropsType> = (props) => {
    const {
        t,
        auctionId,
        handleFormSubmit,
        auctionsBetsList
    } = props;

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const min_bet = auctionsBetsList?.[0]?.['min_bet'];
    const max_bet = auctionsBetsList?.[0]?.['max_bet'];

    const onSubmit = (values) => {
        handleFormSubmit({...values, auctionId});
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
            <FormikProvider value={formik}>
                <form onSubmit={handleSubmit}>
                    <div className="bet-info fixed-bet-safe-deal">
                        <Grid container spacing={1} className="input-btn">
                            <Grid xs={isMdDown ? 7 : 12}>
                                <CustomFormikField
                                    name="bet"
                                    placeholder={`Мин. ставка: ${min_bet} сум`}
                                    errorMsg={getErrorMsg(errors.bet, touched.bet, t)}
                                />
                            </Grid>
                            <Grid xs={isMdDown ? 5 : 12}>
                                <ButtonComponent
                                    className="btn-bet"
                                    color="secondary"
                                    type="submit"
                                >
                                    <Typography variant="subtitle1" color="initial">
                                        Сделать ставку
                                    </Typography>
                                </ButtonComponent>
                            </Grid>
                        </Grid>
                        <div className="max-bet">
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
        </div>
    );
};