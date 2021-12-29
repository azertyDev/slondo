import {FC} from 'react';
import {useTranslation} from 'react-i18next';
import {
    Box,
    FormControl,
    Grid,
    MenuItem,
    Select,
    Typography
} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';
import {serviceIcons} from '@src/components/cabinet/components/promote_modal/PromoteModal';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';

type AddServicesStageProps = {
    isFetch: boolean;
    services;
    selectedService;
    selectedOption;
    declOfNum: (n: number, locale: string, serviceName: string) => string;
    handleSelectOption: (e) => void;
    handleSelectService: (e) => void;
    handleAddService: () => void;
};

export const AddServicesStage: FC<AddServicesStageProps> = props => {
    const {
        isFetch,
        services,
        selectedService,
        selectedOption,
        declOfNum,
        handleSelectOption,
        handleSelectService,
        handleAddService
    } = props;

    const {locale} = useRouter();
    const {t} = useTranslation('cabinet');

    const selectedServiceName = selectedService.name ?? 'default';
    const servicesExist = services.length !== 0;

    const classes = useStyles();

    if (isFetch) return <CustomCircularProgress />;

    return (
        <div className={classes.root}>
            <>
                {servicesExist && (
                    <Grid
                        container
                        spacing={2}
                        className="select-service-wrapper"
                    >
                        <Grid item xs={12} sm={4}>
                            <FormControl>
                                <Select
                                    name="name"
                                    variant="outlined"
                                    onChange={handleSelectService}
                                    value={selectedService.name ?? 0}
                                >
                                    <MenuItem value={0}>
                                        <Box
                                            display="flex"
                                            alignItems="center"
                                            minHeight="32px"
                                        >
                                            <Typography>
                                                {t('select_service')}
                                            </Typography>
                                        </Box>
                                    </MenuItem>
                                    {services.map(({name}, i) => (
                                        <MenuItem key={i} value={name}>
                                            <Box
                                                display="flex"
                                                alignItems="center"
                                            >
                                                {serviceIcons[name]}&nbsp;&nbsp;
                                                <Typography>
                                                    {t(name)}
                                                </Typography>
                                            </Box>
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                        </Grid>
                        {selectedOption && (
                            <>
                                <Grid item xs={12} sm={3}>
                                    <Box display="flex" alignItems="center">
                                        <FormControl>
                                            <Select
                                                name="options"
                                                variant="outlined"
                                                value={selectedOption.id}
                                                onChange={handleSelectOption}
                                            >
                                                {selectedService.options.map(
                                                    ({id, value}) => {
                                                        return (
                                                            <MenuItem
                                                                key={id}
                                                                value={id}
                                                            >
                                                                <Box
                                                                    display="flex"
                                                                    alignItems="center"
                                                                    minHeight="32px"
                                                                >
                                                                    <Typography>
                                                                        {t(
                                                                            value
                                                                        )}
                                                                        &nbsp;
                                                                    </Typography>
                                                                    {declOfNum(
                                                                        value,
                                                                        locale,
                                                                        selectedService.name
                                                                    )}
                                                                </Box>
                                                            </MenuItem>
                                                        );
                                                    }
                                                )}
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid
                                    item
                                    container
                                    xs={12}
                                    sm={3}
                                    justifyContent='center'
                                    alignItems="center"
                                    className="price-wrapper"
                                >
                                    <span className="price">
                                        {selectedOption.price}&nbsp;
                                    </span>
                                    <span>{t('filters:sum')}</span>
                                </Grid>
                            </>
                        )}
                        {selectedService.name && (
                            <Grid
                                item
                                xs={12}
                                sm={2}
                            >
                                <CustomButton
                                    onClick={handleAddService}
                                    className="select-service"
                                >
                                    <Typography>{t('select')}</Typography>
                                </CustomButton>
                            </Grid>
                        )}
                    </Grid>
                )}
                {servicesExist && (
                    <Grid container className="description-wrapper">
                        <Grid item xs={12} sm={5} className="description">
                            <Box
                                display="flex"
                                alignItems="center"
                                justifyContent="center"
                                className="service-header"
                            >
                                {selectedService.name !== 'default' &&
                                    serviceIcons[selectedServiceName]}
                                <Typography variant="subtitle1">
                                    {t(`service.${selectedServiceName}.header`)}
                                </Typography>
                            </Box>
                            <Typography>
                                {t(
                                    `service.${selectedServiceName}.description`
                                )}
                            </Typography>
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            sm={7}
                            className={`${selectedServiceName}-bg`}
                        />
                    </Grid>
                )}
            </>
        </div>
    );
};
