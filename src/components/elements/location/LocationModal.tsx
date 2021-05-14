import {FC, useEffect, useState} from 'react';
import {WithT} from 'i18next';
import {useSelector} from 'react-redux';
import {Grid, Typography} from '@material-ui/core';
import {LocationIcon} from '@src/components/elements/icons';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {CustomModal} from '@src/components/elements/custom_modal/CustomModal';
import {RootState} from '@src/redux/rootReducer';
import {useStyles} from './useStyles';

type LocationModalPropsType = {
    open: boolean,
    handleModalClose: () => void
} & WithT;

export const LocationModal: FC<LocationModalPropsType> = (props) => {
    const {
        t,
        open,
        handleModalClose
    } = props;

    const separatedLocations = separateByThreeCol(useSelector((store: RootState) => store.locations.data));

    const [locations, setLocations] = useState([]);
    const [selectedLocations, setSelectedLocations] = useState([]);
    const selectedLocationsCount = selectedLocations.length;

    const handleLocation = (loc) => () => {
        if (selectedLocationsCount > 2) {
            setSelectedLocations([...selectedLocations.slice(0, 2), loc]);
        } else {
            console.log('loc', loc);
            setSelectedLocations([...selectedLocations, loc]);
        }
        loc = loc.cities ?? loc.district;
        !!loc?.length && setLocations(separateByThreeCol(loc));
    };

    const handleBackLocation = () => {
        if (selectedLocationsCount > 2) {
            setSelectedLocations([...selectedLocations.slice(0, 1)]);
            setLocations(separateByThreeCol(selectedLocations[0].cities));
        } else {
            setSelectedLocations([]);
            setLocations(separatedLocations);
        }
    };

    const handleClose = () => {
        handleModalClose();
        setSelectedLocations([]);
        setLocations(separatedLocations);
    };

    console.log('selectedLocations', selectedLocations);
    console.log('locations', locations);

    const locationPrevTxt = t(`locations:${selectedLocationsCount > 1
                                           ? selectedLocationsCount === 2
                                             ? selectedLocations[0].name : selectedLocations[1].name
                                           : 'allUzb'}`);

    // useEffect(() => {
    //     setLocations(separatedLocations);
    // }, [locations]);

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
                        className="search-input"
                        placeholder={t('locations:allUzb')}
                        value={selectedLocations.map(loc => t(`locations:${loc.name}`)).join(', ')}
                    />
                    <CustomButton className="search-button">
                        <Typography variant="subtitle2">
                            {t('common:select')}
                        </Typography>
                    </CustomButton>
                </div>
                <Grid container className='locations-table'>
                    <Grid item xs={12}>
                        {!!selectedLocationsCount && (
                            <Typography onClick={handleBackLocation}>
                                {locationPrevTxt}
                            </Typography>
                        )}
                    </Grid>
                    {locations.map((col, i) => (
                        <Grid item container direction='column' sm={4} key={i}>
                            {col.map(loc => (
                                <Grid item key={loc.id}>
                                    <Typography onClick={handleLocation(loc)}>
                                        {t(`locations:${loc.name}`)}
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    ))}
                </Grid>
            </div>
        </CustomModal>
    );

    function separateByThreeCol(locations): any {
        return Array.from({length: 3}).reduce((acc: any, _, i) => {
            const columnLen = Math.ceil(locations.length / 3);
            const endThreshold = columnLen * (i + 1);
            const startThreshold = endThreshold - columnLen;

            acc.push([...locations.slice(startThreshold, endThreshold)]);
            return acc;
        }, []);
    }
};
