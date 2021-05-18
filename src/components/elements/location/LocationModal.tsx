import {FC} from 'react';
import {WithT} from 'i18next';
import {Grid, Typography} from '@material-ui/core';
import {LocationIcon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {useStyles} from './useStyles';

type LocationModalPropsType = {
    open: boolean,
    prevLocation: string,
    locationInputTxt: string,
    locations,
    handleLocation,
    handleChoiceLocation,
    toPrevLocation,
    handleClose,
} & WithT;

export const LocationModal: FC<LocationModalPropsType> = (props) => {
    const {
        t,
        open,
        locations,
        prevLocation,
        toPrevLocation,
        handleLocation,
        handleChoiceLocation,
        locationInputTxt,
        handleClose
    } = props;

    const classes = useStyles();
    return (
        <CustomModal
            openModal={open}
            handleModalClose={handleClose}
        >
            <div className={classes.locationModal}>
                <div className='locations-input'>
                    <LocationIcon/>
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
                        <Grid item container direction='column' sm={4} key={i}>
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
        </CustomModal>
    );
};
