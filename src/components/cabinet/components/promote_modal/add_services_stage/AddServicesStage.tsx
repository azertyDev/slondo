import {FC} from 'react';
import {useRouter} from 'next/router';
import {useTranslation} from 'react-i18next';
import {Box, FormControl, MenuItem, Select} from '@material-ui/core';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CustomCircularProgress} from '@src/components/elements/custom_circular_progress/CustomCircularProgress';

type AddServicesStageProps = {
    isFetch: boolean;
    services;
    selectedServices;
    selectedService;
    selectedOption;
    declOfNum: (n: number, locale: string, serviceName: string) => string;
    handleSelectOption: (e) => void;
    handleSelectService: (e) => void;
    handleRemoveService: (index: number) => () => void;
    handleAddService: () => void;
    switchPaymentStage: () => void;
};

export const AddServicesStage: FC<AddServicesStageProps> = props => {
    const {
        isFetch,
        services,
        selectedServices,
        selectedService,
        selectedOption,
        declOfNum,
        handleSelectOption,
        handleSelectService,
        handleRemoveService,
        handleAddService,
        switchPaymentStage
    } = props;

    const {locale} = useRouter();
    const {t} = useTranslation('cabinet');

    return (
        <div>
            {isFetch ? (
                <CustomCircularProgress />
            ) : (
                <>
                    {!!selectedServices.length && (
                        <Box p={{xs: 2}}>
                            {selectedServices.map(
                                ({id, name, value, price}, index) => {
                                    return (
                                        <div key={id}>
                                            {t(name)}&nbsp;
                                            {value}&nbsp;
                                            {declOfNum(value, locale, name)}
                                            &nbsp;
                                            {price}&nbsp;
                                            {t('filters:sum')}
                                            <CustomButton
                                                onClick={handleRemoveService(
                                                    index
                                                )}
                                            >
                                                X
                                            </CustomButton>
                                        </div>
                                    );
                                }
                            )}
                        </Box>
                    )}
                    {services.length !== 0 && (
                        <Box
                            width={1}
                            display="flex"
                            overflow="scroll"
                            p={{xs: 2, md: 4}}
                        >
                            <FormControl>
                                <Select
                                    name="name"
                                    variant="outlined"
                                    value={selectedService.name ?? 0}
                                    onChange={handleSelectService}
                                >
                                    <MenuItem value={0}>
                                        {t('select_service')}
                                    </MenuItem>
                                    {services.map((service, i) => (
                                        <MenuItem key={i} value={service.name}>
                                            {t(service.name)}
                                        </MenuItem>
                                    ))}
                                </Select>
                            </FormControl>
                            {selectedOption && (
                                <>
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
                                                            <span>
                                                                {t(value)}
                                                                &nbsp;
                                                            </span>
                                                            {declOfNum(
                                                                value,
                                                                locale,
                                                                selectedService.name
                                                            )}
                                                        </MenuItem>
                                                    );
                                                }
                                            )}
                                        </Select>
                                    </FormControl>
                                    <span>
                                        {selectedOption.price}{' '}
                                        {t('filters:sum')}
                                    </span>
                                </>
                            )}
                        </Box>
                    )}
                    {selectedService.name && (
                        <CustomButton onClick={handleAddService}>
                            {t('add_service')}
                        </CustomButton>
                    )}
                    {selectedServices.length !== 0 && (
                        <CustomButton onClick={switchPaymentStage}>
                            {t('next')}
                        </CustomButton>
                    )}
                </>
            )}
        </div>
    );
};
