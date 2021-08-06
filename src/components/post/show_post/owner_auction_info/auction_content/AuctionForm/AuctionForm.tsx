import {FC, useContext, useState} from 'react';
import {WithT} from 'i18next';
import Grid from '@material-ui/core/Grid';
import {FormikProvider, useFormik} from 'formik';
import {getErrorMsg, numberPrettier} from '@src/helpers';
import {Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {getAuctionSchema} from '@root/validation_schemas/auctionSchema';
import {numberRegEx, whiteSpacesRegEx} from '@src/common_data/reg_exs';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {userAPI} from '@src/api/api';
import {useStyles} from './useStyles';
import {ErrorCtx} from "@src/context";

type AuctionFromPropsType = {
    lastBet,
    auctionId: string,
    handleRefresh: () => void
} & WithT;

export const AuctionForm: FC<AuctionFromPropsType> = (props) => {
    const {
        t,
        lastBet,
        auctionId,
        handleRefresh
    } = props;

    const {setErrorMsg} = useContext(ErrorCtx);
    const [isFetch, setIsFetch] = useState(false);

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const handleBet = async (bet) => {
        try {
            setIsFetch(true);
            await userAPI.betAuction(bet, auctionId);
            setIsFetch(false);
        } catch ({response}) {
            setIsFetch(false);
            setErrorMsg(response.data.message);
        }
    };

    const handleInput = ({target: {value}}) => {
        const regex = new RegExp(numberRegEx);
        regex.test(value) && setValues({bet: numberPrettier(value)});
    };

    const onSubmit = async ({bet}, {resetForm}) => {
        await handleBet(bet.replace(whiteSpacesRegEx, ''));
        resetForm();
        handleRefresh();
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {bet: ''},
        validationSchema: lastBet ? getAuctionSchema(lastBet.min_bet, lastBet.max_bet) : null
    });

    const {
        values,
        setValues,
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
                            <Grid item xs={isMdDown ? 7 : 12}>
                                <FormikField
                                    t={t}
                                    name="bet"
                                    onChange={handleInput}
                                    errorMsg={getErrorMsg(errors.bet, touched.bet, t)}
                                    placeholder={`${t('post:minBet')}: ${numberPrettier(lastBet?.min_bet)} ${t('common:sum')}`}
                                />
                            </Grid>
                            <Grid item xs={isMdDown ? 5 : 12}>
                                <CustomButton
                                    type="submit"
                                    color="secondary"
                                    className="btn-bet"
                                    disabled={!values.bet && isFetch}
                                >
                                    <Typography variant="subtitle1" color="initial" component='p'>
                                        {t('post:createBet')}
                                    </Typography>
                                </CustomButton>
                            </Grid>
                        </Grid>
                        <div className="max-bet">
                            <Typography variant="subtitle2" color="initial">
                                {t('post:maxBet')}
                            </Typography>
                            <Typography variant="subtitle2" color="initial">
                                {numberPrettier(lastBet?.max_bet)} {t('common:sum')}
                            </Typography>
                        </div>
                    </div>
                </form>
            </FormikProvider>
        </div>
    );
};