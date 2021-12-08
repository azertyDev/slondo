import {FC, useState, useEffect} from 'react';
import {promoteAPI} from '@root/src/api/api';
import {ResponsiveModal} from '@root/src/components/elements/responsive_modal/ResponsiveModal';
import {useStyles} from './useStyles';
import {AddServicesStage} from '@src/components/cabinet/components/promote_modal/add_services_stage/AddServicesStage';
import {PaymentStage} from '@src/components/cabinet/components/promote_modal/payment_stage/PaymentStage';

type PromoteModalProps = {
    postId: number;
    maxWidth?: number;
    fullWidth?: boolean;
    openDialog: boolean;
    handleCloseDialog: () => void;
    handleRefresh: () => Promise<void>;
};

export const PromoteModal: FC<PromoteModalProps> = props => {
    const {
        postId,
        maxWidth,
        fullWidth,
        openDialog,
        handleRefresh,
        handleCloseDialog
    } = props;

    const [isFetch, setIsFetch] = useState(false);

    const [paymentStage, setPaymentStage] = useState(false);
    const [paymentType, setPaymentType] = useState<'bonus' | 'sum'>('bonus');

    const initService = {name: null, options: []};

    const [selectedService, setSelectedService] = useState(initService);
    const [selectedOption, setSelectedOption] = useState(null);

    const [selectedServices, setSelectedServices] = useState([]);
    const [services, setServices] = useState([]);

    const filteredServices = services.filter(srv =>
        selectedServices.every(s => s.name !== srv.name)
    );

    const fetchServices = async () => {
        try {
            setIsFetch(true);

            const services = normalizeServicesData(
                await promoteAPI.getServicesById(postId)
            );

            setIsFetch(false);
            setServices(services);
        } catch (e) {
            setIsFetch(false);
            console.error(e.message);
        }
    };

    const resetService = () => {
        setSelectedOption(null);
        setSelectedService(initService);
    };

    const switchPaymentStage = () => {
        setPaymentStage(!paymentStage);
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
            const servicesIds = selectedServices.map(({id}) => ({id}));

            setIsFetch(true);

            await promoteAPI.activateServices(postId, servicesIds, paymentType);
            await handleRefresh();

            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
        }

        handleCloseDialog();
    };

    useEffect(() => {
        postId && fetchServices();
    }, [postId]);

    useEffect(() => {
        if (openDialog) {
            resetService();
            setPaymentStage(false);
            setSelectedServices([]);
        }
    }, [openDialog]);

    const classes = useStyles();
    return (
        <ResponsiveModal
            maxWidth={maxWidth}
            fullWidth={fullWidth}
            openDialog={openDialog}
            handleCloseDialog={handleCloseDialog}
        >
            <div className={classes.root}>
                {paymentStage ? (
                    <PaymentStage
                        isFetch={isFetch}
                        declOfNum={declOfNum}
                        paymentType={paymentType}
                        selectedServices={selectedServices}
                        activateServices={activateServices}
                        switchPaymentStage={switchPaymentStage}
                    />
                ) : (
                    <AddServicesStage
                        isFetch={isFetch}
                        declOfNum={declOfNum}
                        services={filteredServices}
                        selectedOption={selectedOption}
                        selectedService={selectedService}
                        selectedServices={selectedServices}
                        handleAddService={handleAddService}
                        switchPaymentStage={switchPaymentStage}
                        handleSelectOption={handleSelectOption}
                        handleSelectService={handleSelectService}
                        handleRemoveService={handleRemoveService}
                    />
                )}
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
