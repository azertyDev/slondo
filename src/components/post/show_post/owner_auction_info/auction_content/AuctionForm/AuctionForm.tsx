import {FC, useContext, useState} from 'react';
import Grid from '@material-ui/core/Grid';
import {number, object} from "yup";
import {unstable_batchedUpdates} from "react-dom";
import {FormikProvider, useFormik} from 'formik';
import {getErrorMsg, numberPrettier} from '@src/helpers';
import {Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {numberRegEx, whiteSpacesRegEx} from '@src/common_data/reg_exs';
import {FormikField} from '@src/components/elements/formik_field/FormikField';
import {fieldRequiredTxt} from "@src/common_data/fields_keys";
import {useTranslation} from "next-i18next";
import {AuthCtx, ErrorCtx} from "@src/context";
import {userAPI} from '@src/api/api';
import {useStyles} from './useStyles';

type AuctionFromPropsType = {
    lastBet,
    auctionId: string,
    handleRefresh: () => void
};

export const AuctionForm: FC<AuctionFromPropsType> = (props) => {
    const {
        lastBet,
        auctionId,
        handleRefresh
    } = props;

    const {t} = useTranslation('auction');
    const {user} = useContext(AuthCtx);
    const {setErrorMsg} = useContext(ErrorCtx);
    const [isFetch, setIsFetch] = useState(false);

    const isUserBet = lastBet?.user.id === user.id;

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const handleBet = async (bet) => {
        try {
            setIsFetch(true);
            await userAPI.betAuction(bet, auctionId);
            setIsFetch(false);
        } catch ({response}) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(response.data.message);
            });
        }
    };

    const handleInput = ({target: {value}}) => {
        const regex = new RegExp(numberRegEx);
        regex.test(value) && setValues({bet: numberPrettier(value)});
    };

    const getAuctionSchema = () => {
        return object({
            bet: number()
                .required(fieldRequiredTxt)
                .min(lastBet.min_bet, t(`min_bet_is`, {value: numberPrettier(lastBet.min_bet)}))
                .max(lastBet.max_bet, t(`max_bet_is`, {value: numberPrettier(lastBet.max_bet)}))
        });
    };

    const onSubmit = async ({bet}, {resetForm}) => {
        await handleBet(bet.replace(whiteSpacesRegEx, ''));
        resetForm();
        handleRefresh();
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {bet: ''},
        validationSchema: !!lastBet ? getAuctionSchema() : null
    });

    const {
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
                                    disabled={isUserBet}
                                    errorMsg={getErrorMsg(errors.bet, touched.bet, t)}
                                    placeholder={`${t('min_bet')}: ${numberPrettier(lastBet?.min_bet)} ${t('common:sum')}`}
                                />
                            </Grid>
                            <Grid item xs={isMdDown ? 5 : 12}>
                                <CustomButton
                                    type="submit"
                                    color="secondary"
                                    className="btn-bet"
                                    disabled={isFetch || isUserBet}
                                >
                                    <Typography variant="subtitle1" color="initial" component='p'>
                                        {t('place_bet')}
                                    </Typography>
                                </CustomButton>
                            </Grid>
                        </Grid>
                        <div className="max-bet">
                            <Typography variant="subtitle2" color="initial">
                                {t('max_bet')}
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