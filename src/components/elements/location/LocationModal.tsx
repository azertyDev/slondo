import {FC} from 'react';
import {WithT} from 'i18next';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {LocationIcon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {CloseBtn} from '@src/components/elements/close_button/CloseBtn';
import {useStyles} from './useStyles';

type LocationModalPropsType = {
    hasRegion: boolean,
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
        hasRegion,
        locations,
        prevLocation,
        toPrevLocation,
        handleLocation,
        handleChoiceLocation,
        locationInputTxt,
        modalOpen,
        handleModalClose
    } = props;

    const classes = useStyles({hasRegion});
    return (
        <ResponsiveModal
            openDialog={modalOpen}
            handleCloseDialog={handleModalClose}
        >
            <div className={classes.locationModal}>
                <div className='modal-top'>
                    <CloseBtn handleClose={handleModalClose}/>
                </div>
                <Hidden smUp>
                    <div className="location-header-wrapper">
                        <Typography variant="subtitle1">
                            {t('location')}
                        </Typography>
                    </div>
                </Hidden>
                <div className='local-modal-container'>
                    <div className='locals-input'>
                        <Hidden xsDown>
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
                    <Grid container className='locals-wrapper'>
                        <Grid item xs={12} className='locals-title'>
                            <Typography>
                                {hasRegion && <ArrowBackIcon onClick={toPrevLocation}/>}
                                <span onClick={toPrevLocation}>
                                    {prevLocation}
                                </span>
                            </Typography>
                        </Grid>
                        <Grid container className='locals-table'>
                            {locations.map((col, i) => (
                                <Grid
                                    item
                                    key={i}
                                    container
                                    direction='column'
                                    className='locals-col'
                                    sm={6}
                                    md={4}
                                    xs={12}
                                >
                                    {col.map(loc => (
                                        <Grid item key={loc.id} onClick={handleLocation(loc)}>
                                            <Typography>
                                                <span>{t(`${loc.name}`)}</span>
                                            </Typography>
                                            <Hidden smUp>
                                                <KeyboardArrowRightIcon/>
                                            </Hidden>
                                        </Grid>
                                    ))}
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </div>
            </div>
        </ResponsiveModal>
    );
};
