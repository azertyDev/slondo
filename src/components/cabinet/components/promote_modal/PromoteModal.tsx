import {FC, useState, useEffect, Fragment} from 'react';
import {Box, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {ResponsiveModal} from '@root/src/components/elements/responsive_modal/ResponsiveModal';
import {promoteAPI} from '@root/src/api/api';
import {CustomButton} from '@root/src/components/elements/custom_button/CustomButton';

type PromoteModalProps = {
    postId: number;
    maxWidth?: number;
    fullWidth?: boolean;
    openDialog: boolean;
    handleCloseDialog: () => void;
};

export const PromoteModal: FC<PromoteModalProps> = props => {
    const {postId, maxWidth, fullWidth, openDialog, handleCloseDialog} = props;

    const [isFetch, setIsFetch] = useState(false);
    const [paymentType, setPaymentType] = useState('bonus');
    const [services, setServices] = useState({});
    const [activeServices, setActiveServices] = useState([]);

    const selectService = (serviceId, paymentType?) => () => {
        const services = [...activeServices];
        const hasSelected = activeServices.some(s => s.id === serviceId);

        if (hasSelected) {
            services.forEach((s, i) => {
                if (s.id === serviceId) {
                    services.splice(i, 1);
                }
            });
        } else services.push({id: serviceId});

        setActiveServices(services);
        paymentType && setPaymentType(paymentType);
    };

    const serviceKeys = Object.keys(services);

    const activateServices = async () => {
        try {
            setIsFetch(true);

            await promoteAPI.activateServices(
                postId,
                activeServices,
                paymentType
            );

            setIsFetch(false);
        } catch (e) {
            setIsFetch(false);
        }

        handleCloseDialog();
    };

    useEffect(() => {
        postId &&
            promoteAPI
                .getServicesById(postId)
                .then(services => setServices(services));
    }, [postId]);

    const classes = useStyles();
    return (
        <ResponsiveModal
            maxWidth={maxWidth}
            fullWidth={fullWidth}
            openDialog={openDialog}
            handleCloseDialog={handleCloseDialog}
        >
            <Box
                width={1}
                display="flex"
                overflow="scroll"
                p={{xs: 2, md: 4}}
                className={classes.root}
            >
                {serviceKeys.map((key, i) => {
                    return (
                        <div key={i}>
                            {key}&nbsp;
                            {services[key].map(
                                ({id, expired, quantity, bonus}) => {
                                    return (
                                        <Fragment key={id}>
                                            <Typography>
                                                {expired ?? quantity}
                                            </Typography>
                                            {/* <CustomButton
                                                onClick={selectService(
                                                    id,
                                                    'payme'
                                                )}
                                            >
                                                price: {price}
                                            </CustomButton> */}
                                            <CustomButton
                                                onClick={selectService(id)}
                                                className={
                                                    activeServices.some(
                                                        s => s.id === id
                                                    )
                                                        ? 'selected'
                                                        : ''
                                                }
                                            >
                                                bonus: {bonus}
                                            </CustomButton>
                                        </Fragment>
                                    );
                                }
                            )}
                        </div>
                    );
                })}
            </Box>
            <CustomButton disabled={isFetch} onClick={activateServices}>
                Activate
            </CustomButton>
        </ResponsiveModal>
    );
};
