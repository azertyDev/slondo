import {FC, useState, useEffect, useContext} from 'react';
import {ResponsiveModal} from '@root/src/components/elements/responsive_modal/ResponsiveModal';
import {AddServicesStage} from '@src/components/cabinet/components/promote_modal/add_services_stage/AddServicesStage';
import {PaymentStage} from '@src/components/cabinet/components/promote_modal/payment_stage/PaymentStage';
import {Box, Grid, IconButton, Typography} from '@material-ui/core';
import {useTranslation} from 'react-i18next';
import {bonusAPI, paymeAPI, servicesAPI} from '@src/api/paid_api';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ConfirmStage} from '@src/components/cabinet/components/promote_modal/confirm_stage/ConfirmStage';
import {CardInfoStage} from '@src/components/cabinet/components/promote_modal/card_info_stage/CardInfoStage';
import {Form, FormikProvider, useFormik} from 'formik';
import {codeSchema} from '@root/validation_schemas/authRegSchema';
import {cardNumExpSchema} from '@root/validation_schemas/paymentCardSchema';
import {SuccessStage} from '@src/components/cabinet/components/promote_modal/success_stage/SuccesStage';
import {ErrorCtx} from '@src/context';
import {CloseBtn} from '@src/components/elements/close_button/CloseBtn';
import {BackspaceIcon, DeleteIcon} from '@src/components/elements/icons';
import {RaiseTapeIcon, TopIcon, TurboSaleIcon} from '@src/assets/icons';
import {Check} from '@material-ui/icons';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';

type PromoteModalProps = {
    postId: string;
    postType: string;
    fullWidth?: boolean;
    openDialog: boolean;
    handleCloseDialog: () => void;
    handleRefresh: () => Promise<void>;
};

export type PayType = 'bonus' | 'payme';
export type Statuses =
    | 'service'
    | 'payment'
    | 'smsConfirm'
    | 'success'
    | PayType;

export const PromoteModal: FC<PromoteModalProps> = props => {
    const {
        postId,
        postType,
        fullWidth,
        openDialog,
        handleRefresh,
        handleCloseDialog
    } = props;

    const {locale} = useRouter();
    const {setErrorMsg} = useContext(ErrorCtx);

    const {t} = useTranslation('cabinet');
    const [isFetch, setIsFetch] = useState(false);

    const [stageStatus, setStageStatus] = useState<Statuses>('service');

    const initService = {name: null, options: []};

    const [selectedService, setSelectedService] = useState(initService);
    const [selectedOption, setSelectedOption] = useState(null);

    const [selectedServices, setSelectedServices] = useState([]);
    const servicesIds = selectedServices.map(({id}) => ({id}));

    const [services, setServices] = useState([]);

    const amount = selectedServices.reduce((sum, serv) => {
        sum += serv.price;
        return sum;
    }, 0);

    const [token, setToken] = useState(null);

    const filteredServices = services.filter(srv =>
        selectedServices.every(s => s.name !== srv.name)
    );

    const isSmsConfirm = stageStatus === 'smsConfirm';
    const isServiceStage = stageStatus === 'service';

    const submitBtnTxt = (() => {
        switch (stageStatus) {
            case 'payment':
                return 'to_checkout';
            case 'bonus':
                return 'common:confirm';
            case 'smsConfirm':
                return 'common:send';
            default:
                return 'next';
        }
    })();

    const fetchServices = async () => {
        try {
            setIsFetch(true);

            const services = normalizeServicesData(
                await servicesAPI.getServicesByPostId(postId)
            );

            setIsFetch(false);
            setServices(services);
        } catch (e) {
            setIsFetch(false);
            setErrorMsg(e.message);
        }
    };

    const resetService = () => {
        setSelectedOption(null);
        setSelectedService(initService);
    };

    const handleStage = (payType: PayType) => () => {
        setStageStatus(payType);
    };

    const handleAddService = () => {
        setSelectedServices([
            ...selectedServices,
            {...selectedOption, name: selectedService.name}
        ]);
        resetService();
    };

    const handleRemoveService = index => () => {
        const values = [...selectedServices];
        values.splice(index, 1);

        resetService();

        setSelectedServices(values);
    };

    const handleSelectService = ({target}) => {
        const value = target.value;

        if (value !== 0) {
            const service = services.find(s => s.name === value);
            const option = service.options[0];
            setSelectedService(service);
            setSelectedOption(option);
        } else resetService();
    };

    const handleSelectOption = ({target}) => {
        const option = selectedService.options.find(
            op => op.id === +target.value
        );
        setSelectedOption(option);
    };

    const activateServices = async () => {
        try {
            setIsFetch(true);

            if (stageStatus === 'bonus') {
                await bonusAPI.activate(postId, servicesIds);
                setStageStatus('success');
            }

            if (stageStatus === 'payme') {
                const {cardNumber, expireDate} = formik.values;
                const number = cardNumber.replace(/\s/g, '');
                const expire = expireDate.replace(/\//, '');

                const {token} = await paymeAPI.activate(number, expire, amount);

                setToken(token);
                setStageStatus('smsConfirm');
            }

            setIsFetch(false);
        } catch (e) {
            setErrorMsg(e.message);
            setIsFetch(false);
        }
    };

    const codeVerify = async () => {
        try {
            setIsFetch(true);

            if (stageStatus === 'smsConfirm') {
                const {code} = formik.values;

                const res = await paymeAPI.codeVerify(
                    postId,
                    code,
                    amount,
                    token
                );

                await paymeAPI.receiptsPay(
                    postId,
                    res.id,
                    res.token,
                    servicesIds
                );
            }

            handleRefresh();

            setStageStatus('success');

            setIsFetch(false);
        } catch (e) {
            setErrorMsg(e.message);
            setIsFetch(false);
        }
    };

    const handlePrevStage = () => {
        switch (stageStatus) {
            case 'payment':
                setStageStatus('service');
                break;
            case 'bonus':
            case 'payme':
            case 'smsConfirm':
                formik.setValues(initCardData);
                setStageStatus('payment');
        }
        formik.setErrors({});
    };

    const showBackArrow =
        stageStatus !== 'service' && stageStatus !== 'success';

    const showNextBtn =
        (stageStatus === 'service' && selectedServices.length !== 0) ||
        stageStatus === 'bonus';

    const showSelectedServicesList =
        !!selectedServices.length &&
        (stageStatus === 'service' ||
            stageStatus === 'bonus' ||
            stageStatus === 'payment');

    const initCardData = {
        code: '',
        expireDate: '__/__',
        cardNumber: '____ ____ ____ ____'
    };

    const onSubmit = async () => {
        switch (stageStatus) {
            case 'service':
                setStageStatus('payment');
                break;
            case 'bonus':
            case 'payme':
                await activateServices();
                break;
            case 'smsConfirm':
                await codeVerify();
        }
    };

    const formik = useFormik({
        onSubmit,
        initialValues: initCardData,
        validationSchema:
            stageStatus === 'payme'
                ? cardNumExpSchema
                : isSmsConfirm
                ? codeSchema
                : null
    });

    const reset = () => {
        formik.setErrors({});
        formik.setTouched({});
        formik.setValues(initCardData);
        resetService();
        setSelectedServices([]);
        setStageStatus('service');
    };

    const top = (
        <>
            <Box
                display="flex"
                padding="15px 10px"
                justifyContent={showBackArrow ? 'space-between' : 'flex-end'}
            >
                {showBackArrow && (
                    <IconButton disableTouchRipple onClick={handlePrevStage}>
                        <BackspaceIcon />
                    </IconButton>
                )}
                <CloseBtn handleClose={handleCloseDialog} />
            </Box>
            <Box>
                <Typography className="post-num" variant="subtitle1">
                    {t(`common:${postType}`)} №: {postId}
                </Typography>
            </Box>
        </>
    );
    const stage = (() => {
        switch (stageStatus) {
            case 'service':
                return (
                    <AddServicesStage
                        isFetch={isFetch}
                        declOfNum={declOfNum}
                        services={filteredServices}
                        selectedOption={selectedOption}
                        selectedService={selectedService}
                        handleAddService={handleAddService}
                        handleSelectOption={handleSelectOption}
                        handleSelectService={handleSelectService}
                    />
                );
            case 'payment':
                return <PaymentStage handleStage={handleStage} />;
            case 'bonus':
                return <ConfirmStage amount={amount} />;
            case 'payme':
            case 'smsConfirm':
                return (
                    <CardInfoStage
                        formik={formik}
                        isSmsConfirm={isSmsConfirm}
                    />
                );
            case 'success':
                return <SuccessStage handleClose={handleCloseDialog} />;
        }
    })();

    const selectedServicesList = (
        <div className="selected-service-wrapper">
            {selectedServices.map(({id, name, value, price}, index) => {
                return (
                    <Grid item container spacing={1} key={id} xs={12}>
                        <Grid
                            item
                            container
                            xs={isServiceStage ? 10 : 12}
                            sm={isServiceStage ? 11 : 12}
                            alignItems="center"
                            justifyContent="space-between"
                            className={`selected-service ${name}`}
                        >
                            <Box
                                className="service-name"
                                display="flex"
                                alignItems="center"
                            >
                                {serviceIcons[name]}
                                <Typography>{t(name)}</Typography>
                            </Box>
                            <Typography className="service-value">
                                {value}&nbsp;
                                {declOfNum(value, locale, name)}
                            </Typography>
                            <Box
                                display="flex"
                                alignItems="flex-end"
                                className="price"
                            >
                                <Typography>{price}&nbsp;</Typography>
                                <Typography>{t('filters:sum')}</Typography>
                            </Box>
                            <Box
                                className="added"
                                display="flex"
                                alignItems="center"
                            >
                                <span>{t('added')}</span>
                                <Check />
                            </Box>
                        </Grid>
                        {isServiceStage && (
                            <Grid
                                item
                                container
                                xs={2}
                                sm={1}
                                alignItems="center"
                                justifyContent="center"
                            >
                                <IconButton
                                    className="remove-btn"
                                    onClick={handleRemoveService(index)}
                                >
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        )}
                    </Grid>
                );
            })}
        </div>
    );

    useEffect(() => {
        postId && fetchServices();
    }, [postId]);

    useEffect(() => {
        openDialog && reset();
    }, [openDialog]);

    const classes = useStyles();
    return (
        <ResponsiveModal
            fullWidth={fullWidth}
            openDialog={openDialog}
            handleCloseDialog={handleCloseDialog}
        >
            <div className={classes.root}>
                <FormikProvider value={formik}>
                    <Form onSubmit={formik.handleSubmit}>
                        <div className="top-wrapper">{top}</div>
                        <div className="content-wrapper">
                            {showSelectedServicesList && selectedServicesList}
                            {stage}
                        </div>
                        {showNextBtn && (
                            <div className="bottom-wrapper">
                                <CustomButton
                                    className="next-btn"
                                    type="submit"
                                >
                                    {t(submitBtnTxt)}
                                </CustomButton>
                            </div>
                        )}
                    </Form>
                </FormikProvider>
            </div>
        </ResponsiveModal>
    );
};

function normalizeServicesData(data) {
    const keys = Object.keys(data);

    return keys.map(k => {
        const options = data[k].map(({id, price, bonus, expired, quantity}) => {
            return {
                id,
                price,
                bonus,
                value: expired ? expired / 24 : quantity
            };
        });

        return {name: k, options};
    });
}

export const serviceIcons = {
    top: <TopIcon />,
    raise_tape: <RaiseTapeIcon />,
    turbo_sale: <TurboSaleIcon />
};

function declOfNum(n, locale, serviceName) {
    n = Math.abs(n) % 100;

    const isRiseTap = serviceName === 'raise_tape';
    const n1 = n % 10;
    const days = ['день', 'дня', 'дней'];

    if (isRiseTap) return locale === 'uz' ? 'marta' : n > 1 ? 'раза' : 'раз';

    if (locale === 'uz') return 'kunga';

    if (n > 10 && n < 20) {
        return days[2];
    }
    if (n1 > 1 && n1 < 5) {
        return days[1];
    }
    if (n1 == 1) {
        return days[0];
    }

    return days[2];
}
