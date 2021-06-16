import {FC, useEffect, useState} from 'react';
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
import {setErrorMsgAction} from '@src/redux/slices/errorSlice';
import {useDispatch} from 'react-redux';
import {useStyles} from './useStyles';

type AuctionFromPropsType = {
    auctionId: string
} & WithT;

export const AuctionForm: FC<AuctionFromPropsType> = (props) => {
    const {
        t,
        auctionId
    } = props;

    const initLastBet = {
        min_bet: 0,
        max_bet: 0
    };

    const dispatch = useDispatch();
    const [isFetch, setIsFetch] = useState(false);
    const [lastBet, setLastBet] = useState(initLastBet);

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const handleBet = async (bet) => {
        try {
            setIsFetch(true);
            await userAPI.betAuction(bet, auctionId);
            setIsFetch(false);
        } catch ({response}) {
            setIsFetch(false);
            dispatch(
                setErrorMsgAction(t(`errors:${response.data.message}`))
            );
        }
    };

    const handleInput = ({target: {value}}) => {
        const regex = new RegExp(numberRegEx);
        regex.test(value) && setValues({bet: numberPrettier(value)});
    };

    const onSubmit = ({bet}, {resetForm}) => {
        resetForm();
        handleBet(bet.replace(whiteSpacesRegEx, ''));
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

    const setFetchedBets = async () => {
        try {
            const params = {
                auction_id: auctionId,
                page: 1,
                per_page: 1,
                archive: 0
            };

            setIsFetch(true);

            const [lastBet] = (await userAPI.getAuctionBets(params)).data;

            setLastBet(lastBet);
            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
            dispatch(setErrorMsgAction(e.message));
        }
    };

    useEffect(() => {
       setFetchedBets();
    }, []);

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
                                <CustomButton
                                    type="submit"
                                    color="secondary"
                                    className="btn-bet"
                                    disabled={!values.bet && isFetch}
                                >
                                    <Typography variant="subtitle1" color="initial">
                                        Сделать ставку
                                    </Typography>
                                </CustomButton>
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