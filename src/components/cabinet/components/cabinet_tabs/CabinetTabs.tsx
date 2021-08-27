import {FC} from 'react';
import {Box, CircularProgress, Grid, Tab, Tabs, Typography} from '@material-ui/core';
import {CustomTabPanel} from '@src/components/elements/custom_tab_panel/CustomTabPanel';
import {CabinetCardWrapper} from '@src/components/cabinet/components/cabinet_card_wrapper/CabinetCardWrapper';
import {useTranslation} from 'next-i18next';
import {useStyles} from './useStyles';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';

type CabinetModalPropsType = {
    isFetch: boolean,
    handleSafeDeal?: (post, perform?: boolean) => () => void,
    onChange,
    fstTabData,
    secTabData,
    childTabValue,
    handleDetailedOpen,
    handleSettingsOpen?,
    handleNotificationsOpen
};

export const CabinetTabs: FC<CabinetModalPropsType> = (props) => {
    const {
        isFetch,
        onChange,
        fstTabData,
        secTabData,
        childTabValue,
        handleSafeDeal,
        handleDetailedOpen,
        handleSettingsOpen,
        handleNotificationsOpen
    } = props;

    const {t} = useTranslation('cabinet');

    const classes = useStyles();
    return (
        <>
            <Tabs
                aria-label="tabs"
                value={childTabValue}
                onChange={onChange}
                className={classes.root}
                TabIndicatorProps={{style: {display: 'none'}}}
            >
                <Tab
                    label={
                        <Typography variant="subtitle1">
                            {t('active')}
                        </Typography>
                    }
                />
                <Tab
                    label={
                        <Typography variant="subtitle1">
                            {t('archive')}
                        </Typography>
                    }
                />
            </Tabs>
            <CustomTabPanel value={childTabValue} index={0}>
                {isFetch
                    ? <CircularProgress/>
                    : fstTabData.posts.length === 0
                        ? fstTabData.emptyPage
                        : fstTabData.posts.map((data) => (
                            <Box mb={3} key={data.id}>
                                <CabinetCardWrapper
                                    cardData={data}
                                    handleDetailedOpen={handleDetailedOpen(data)}
                                    handleNotificationsOpen={handleNotificationsOpen(data)}
                                    handleSettingsOpen={!!handleSettingsOpen ? handleSettingsOpen(data) : null}
                                />
                                {!!handleSafeDeal && (
                                    <Box mt={1}>
                                        <Grid container spacing={1}>
                                            <Grid item xs={12} sm={9}>
                                                <CustomButton
                                                    color='secondary'
                                                    classes={{
                                                        root: classes.button
                                                    }}
                                                    onClick={handleSafeDeal(data, true)}
                                                >
                                                    <Typography variant='subtitle1' component='p'>
                                                        {t('completePurchase')}
                                                    </Typography>
                                                </CustomButton>
                                            </Grid>
                                            <Grid item xs={12} sm={3}>
                                                <CustomButton
                                                    color='silver'
                                                    classes={{
                                                        root: classes.button
                                                    }}
                                                    onClick={handleSafeDeal(data)}
                                                >
                                                    <Typography variant='subtitle1' component='p'>
                                                        {t('common:reject')}
                                                    </Typography>
                                                </CustomButton>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                )}
                            </Box>
                        ))}
            </CustomTabPanel>
            <CustomTabPanel value={childTabValue} index={1}>
                {isFetch
                    ? <CircularProgress/>
                    : secTabData.posts.length === 0
                        ? secTabData.emptyPage
                        : secTabData.posts.map((data) => (
                            <Box mb={3} key={data.id}>
                                <CabinetCardWrapper
                                    cardData={data}
                                    handleDetailedOpen={handleDetailedOpen(data)}
                                    handleNotificationsOpen={handleNotificationsOpen(data)}
                                />
                            </Box>
                        ))}
            </CustomTabPanel>
        </>
    );
};
