import {FC} from 'react';
import {WithT} from 'i18next';
import {Grid, Hidden, Typography} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';
import {LocationIcon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {CloseBtn} from '@src/components/elements/close_button/CloseBtn';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {CustomCircularProgress} from "@src/components/elements/custom_circular_progress/CustomCircularProgress";
import {useStyles} from './useStyles';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';

type LocationModalPropsType = {
    region,
    isFetch: boolean,
    locations,
    hasRegion: boolean,
    prevLocation: string,
    locationInputTxt: string,
    handleLocation,
    handleChoiceLocation,
    toPrevLocation,
    modalOpen: boolean,
    handleModalClose: () => void
} & WithT;

export const LocationModal: FC<LocationModalPropsType> = (props) => {
    const {
        t,
        region,
        isFetch,
        locations,
        hasRegion,
        prevLocation,
        toPrevLocation,
        handleLocation,
        handleChoiceLocation,
        locationInputTxt,
        modalOpen,
        handleModalClose
    } = props;


    const separatedLocations = separateByThree(locations);

    const classes = useStyles({hasRegion});
    return (
        <ResponsiveModal
            openDialog={modalOpen}
            handleCloseDialog={handleModalClose}
        >
            <div className={classes.locationModal}>
                {isFetch
                    ? <CustomCircularProgress/>
                    : <>
                        <ModalHeader title={t('location')} handleCloseDialog={handleModalClose} />
                        <div className='local-modal-container'>
                            <div className='locals-input'>
                                <Hidden xsDown>
                                    <LocationIcon />
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
                                        {hasRegion && <ArrowBack onClick={toPrevLocation}/>}
                                        <span onClick={toPrevLocation}>
                                            {prevLocation}
                                        </span>
                                    </Typography>
                                </Grid>
                                <Grid container className='locals-table'>
                                    {separatedLocations.map((col, i) => (
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
                                                        <span>{t(loc.cities ? `${loc.name}.name` : `${region.name}.${loc.name}`)}</span>
                                                    </Typography>
                                                    {(!!loc?.cities || !!loc?.district?.length) && (
                                                        <Hidden smUp>
                                                            <KeyboardArrowRightIcon/>
                                                        </Hidden>
                                                    )}
                                                </Grid>
                                            ))}
                                        </Grid>
                                    ))}
                                </Grid>
                            </Grid>
                        </div>
                    </>}
            </div>
        </ResponsiveModal>
    );

    function separateByThree(locations): any {
        return Array.from({length: 3}).reduce((acc: any, _, i) => {
            const columnLen = Math.ceil(locations.length / 3);
            const endThreshold = columnLen * (i + 1);
            const startThreshold = endThreshold - columnLen;
            acc.push([...locations.slice(startThreshold, endThreshold)]);
            return acc;
        }, []);
    }
};
