import {FC} from 'react';
import {WithT} from 'i18next';
import Grid from '@material-ui/core/Grid';
import {FormikProvider, useFormik} from 'formik';
import {getErrorMsg, numberPrettier} from '@src/helpers';
import {Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {ButtonComponent} from '@src/components/elements/button/Button';
import {getAuctionSchema} from '@root/validation_schemas/auctionSchema';
import {numberRegEx, whiteSpacesRegEx} from '@src/common_data/reg_exs';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {useStyles} from './useStyles';

type AuctionFromPropsType = {
    handleBet: (bet: string) => void,
    lastBet
} & WithT;

export const AuctionForm: FC<AuctionFromPropsType> = (props) => {
    const {
        t,
        handleBet,
        lastBet
    } = props;

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const onSubmit = ({bet}, actions) => {
        bet = bet.replace(whiteSpacesRegEx, '');
        handleBet(bet);
        actions.resetForm();
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {bet: ''},
        validationSchema: lastBet ? getAuctionSchema(lastBet.min_bet, lastBet.max_bet) : null
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

    const classes = useStyles({isMdDown});
    return (
        <div className={classes.root}>
            <FormikProvider value={formik}>
                <form onSubmit={handleSubmit}>
                    <div className="bet-info fixed-bet-safe-deal">
                        <Grid container spacing={1} className="input-btn">
                            <Grid item xs={isMdDown ? 7 : 12}>
                                <FormikField
                                    t={t}
                                    name="bet"
                                    onChange={handleInput}
                                    errorMsg={getErrorMsg(errors.bet, touched.bet, t)}
                                    placeholder={`Мин. ставка: ${numberPrettier(lastBet?.min_bet)} сум`}
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
                                {numberPrettier(lastBet?.max_bet)} сум
                            </Typography>
                        </div>
                    </div>
                </form>
            </FormikProvider>
        </div>
    );
};