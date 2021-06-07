import {FC} from 'react';
import {WithT} from 'i18next';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {LocationIcon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {useStyles} from './useStyles';
import {ResponsiveDialog} from '@src/components/elements/responsive_dialog/ResponsiveDialog';

type LocationModalPropsType = {
    prevLocation: string,
    locationInputTxt: string,
    locations,
    handleLocation,
    handleChoiceLocation,
    toPrevLocation,
    modalOpen: boolean,
    handleModalClose: () => void
} & WithT;

export const LocationModal: FC<LocationModalPropsType> = (props) => {
    const {
        t,
        locations,
        prevLocation,
        toPrevLocation,
        handleLocation,
        handleChoiceLocation,
        locationInputTxt,
        modalOpen,
        handleModalClose
    } = props;

    const classes = useStyles();
    return (
        <ResponsiveDialog
            openDialog={modalOpen}
            handleCloseDialog={handleModalClose}
        >
            {/*<div className="location-header-wrapper">*/}
            {/*    <Typography variant="subtitle1">*/}
            {/*        {t('location')}*/}
            {/*    </Typography>*/}
            {/*</div>*/}
            <div className={classes.locationModal}>
                <div className='locations-input'>
                    <Hidden smDown>
                        <LocationIcon/>
                    </Hidden>
                    <input
                        disabled
                        value={locationInputTxt}
                        className="search-input"
                        placeholder={t('allUzb')}
                    />
                    <CustomButton className="search-button" onClick={handleChoiceLocation}>
                        <Typography variant="subtitle2">
                            {t('common:select')}
                        </Typography>
                    </CustomButton>
                </div>
                <Grid container className='locations-table'>
                    <Grid item xs={12}>
                        <Typography>
                            <span onClick={toPrevLocation}>
                                {prevLocation}
                            </span>
                        </Typography>
                    </Grid>
                    {locations.map((col, i) => (
                        <Grid item container direction='column' sm={6} md={4} xs={12} key={i}>
                            {col.map(loc => (
                                <Grid item key={loc.id}>
                                    <Typography onClick={handleLocation(loc)}>
                                        {t(`${loc.name}`)}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </div>
        </ResponsiveDialog>
    );
};
