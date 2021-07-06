import {FC, useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import {LocationIcon} from '@src/components/elements/icons';
import {LocationModal} from './LocationModal';
import {useTranslation} from 'next-i18next';
import {cookies} from '@src/helpers';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {useModal} from '@src/hooks/useModal';
import {useStyles} from './useStyles';

type LocationProps = {
    handleSelectLocation: (loc) => void
};

export const Location: FC<LocationProps> = ({handleSelectLocation}) => {
    const {t} = useTranslation('locations');
    const userLocation = cookies.get('user_location');
    const allLocations = useSelector((store: RootState) => store.locations.data);

    const initLocation = {
        region: null,
        city: null
    };

    const {
        modalOpen: locationModalOpen,
        handleModalOpen: handleLocationModalOpen,
        handleModalClose: handleLocationModalClose
    } = useModal();

    const [locations, setLocations] = useState([]);
    const [currentLocation, setCurrentLocation] = useState(initLocation);
    const {region, city} = currentLocation;

    const hasRegion = !!region;
    const locationsTxt = `${city ? t(`${region.name}.${city.name}`) : ''}${region ? city ? `, ${t(`${region.name}.name`)}` : t(`${region.name}.name`) : ''}`;
    const prevLocation = hasRegion ? `${t(`${city?.name ?? `${region.name}.name`}`)}` : t(`allUzb`);

    const currentCities = allLocations.find(loc => loc.id === region?.id)?.cities;

    const handleLocation = loc => () => {
        const value = loc.cities
            ? {region: {id: loc.id, name: loc.name}}
            : {city: {id: loc.id, name: loc.name}};

        loc.cities && setLocations(loc.cities);
        setCurrentLocation({...currentLocation, ...value});
    };

    const handleModalOpen = () => {
        handleLocationModalOpen();
        region && setLocations(currentCities ?? allLocations);
    };

    const handleClose = () => {
        if (userLocation) {
            setCurrentLocation(userLocation);
        } else {
            setLocations(allLocations);
            setCurrentLocation(initLocation);
        }
        handleLocationModalClose();
    };

    const handleChoiceLocation = () => {
        handleLocationModalClose();
        handleSelectLocation(currentLocation);
    };

    const toPrevLocation = () => {
        setLocations(allLocations);
        setCurrentLocation(initLocation);
    };

    useEffect(() => {
        if (userLocation && !region) {
            setCurrentLocation(userLocation);
            handleSelectLocation(userLocation);
        }
    }, []);

    useEffect(() => {
        setLocations(allLocations);
    }, [allLocations]);

    const classes = useStyles();
    return (
        <>
            <div className={classes.location}>
                <LocationIcon/>
                <Typography variant="subtitle1" onClick={handleModalOpen}>
                    {t(locationsTxt || 'location')}
                </Typography>
            </div>
            <LocationModal
                t={t}
                hasRegion={hasRegion}
                modalOpen={locationModalOpen}
                locations={locations}
                prevLocation={prevLocation}
                locationInputTxt={locationsTxt}
                region={region}
                handleModalClose={handleClose}
                handleLocation={handleLocation}
                toPrevLocation={toPrevLocation}
                handleChoiceLocation={handleChoiceLocation}
            />
        </>
    );
};
