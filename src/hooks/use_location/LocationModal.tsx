import {FC} from 'react';
import {useTranslation} from "next-i18next";
import {Grid, Hidden, Typography} from '@material-ui/core';
import {ArrowBack} from '@material-ui/icons';
import {LocationIcon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {useStyles} from './useStyles';

type LocationModalPropsType = {
    region,
    locations,
    prevLocation: string,
    locationInputTxt: string,
    handleLocation,
    handleChoiceLocation,
    toPrevLocation,
    modalOpen: boolean,
    handleModalClose: () => void
};

export const LocationModal: FC<LocationModalPropsType> = (props) => {
    const {
        region,
        locations,
        prevLocation,
        toPrevLocation,
        handleLocation,
        handleChoiceLocation,
        locationInputTxt,
        modalOpen,
        handleModalClose
    } = props;

    const {t} = useTranslation('locations');
    const separatedLocations = separateByThree(locations);
    const hasRegion = !!region;

    const classes = useStyles({hasRegion});
    return (
        <ResponsiveModal
            openDialog={modalOpen}
            handleCloseDialog={handleModalClose}
        >
            <div className={classes.root}>
                <ModalHeader title={t('location')} handleCloseDialog={handleModalClose}/>
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
                                            {!!loc?.cities && (
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
