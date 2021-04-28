import {FC} from 'react';
import {FormikProvider, useFormik} from 'formik';
import {Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {getAuctionSchema} from '@root/validation_schemas/auctionSchema';
import {WithT} from 'i18next';
import {getErrorMsg, numberPrettier} from '@src/helpers';
import {CustomFormikField} from '@src/components/elements/custom_formik_field/CustomFormikField';
import Grid from '@material-ui/core/Grid';
import {useStyles} from './useStyles';
import {numberRegEx, whiteSpacesRegEx} from '@src/common_data/reg_exs';

type AuctionFromPropsType = {
    handleBet: (bet: string) => void,
    auctionsBetsList
} & WithT;

export const AuctionForm: FC<AuctionFromPropsType> = (props) => {
    const {
        t,
        handleBet,
        auctionsBetsList
    } = props;

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const min_bet = auctionsBetsList[0]?.['min_bet'];
    const max_bet = auctionsBetsList[0]?.['max_bet'];

    const onSubmit = ({bet}) => {
        bet = bet.replace(whiteSpacesRegEx, '');
        handleBet(bet);
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {bet: ''},
        validationSchema: getAuctionSchema(min_bet, max_bet)
    });

    const {
        setValues,
        errors,
        touched,
        handleSubmit
    } = formik;

    const handleInput = ({target: {value}}) => {
        const regex = new RegExp(numberRegEx);
        regex.test(value) && setValues({bet: numberPrettier(value)});
    };

    console.log(formik.values);
    console.log(auctionsBetsList, 'auctionsBetsList');
    const classes = useStyles({isMdDown});
    return (
        <div className={classes.root}>
            <FormikProvider value={formik}>
                <form onSubmit={handleSubmit}>
                    <div className="bet-info fixed-bet-safe-deal">
                        <Grid container spacing={1} className="input-btn">
                            <Grid item xs={isMdDown ? 7 : 12}>
                                <CustomFormikField
                                    t={t}
                                    name="bet"
                                    onChange={handleInput}
                                    errorMsg={getErrorMsg(errors.bet, touched.bet, t)}
                                    placeholder={`Мин. ставка: ${numberPrettier(min_bet)} сум`}
                                />
                            </Grid>
                            <Grid item xs={isMdDown ? 5 : 12}>
                                <ButtonComponent
                                    type="submit"
                                    color="secondary"
                                    className="btn-bet"
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
                                {numberPrettier(auctionsBetsList[0]?.max_bet)} сум
                            </Typography>
                        </div>
                    </div>
                </form>
            </FormikProvider>
        </div>
    );
};