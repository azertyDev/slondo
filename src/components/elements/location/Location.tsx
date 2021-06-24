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
        city: null,
        district: null
    };

    const {
        modalOpen: locationModalOpen,
        handleModalOpen: handleLocationModalOpen,
        handleModalClose: handleLocationModalClose
    } = useModal();

    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(initLocation);
    const {region, city, district} = selectedLocation;

    const hasRegion = !!region;
    const locationsTxt = `${district ? `${t(district.name)}` : ''}${city ? district ? `, ${t(city.name)}` : t(city.name) : ''}${region ? city ? `, ${t(region.name)}` : t(region.name) : ''}`;
    const prevLocation = hasRegion ? `${t(`${city?.name ?? region.name}`)}` : t(`allUzb`);

    const currentCities = allLocations.find(loc => loc.id === region?.id)?.cities;
    const currentDistricts = currentCities?.find(({id, district}) => {
        if (district.length) return id === city?.id;
    })?.district;

    const handleLocation = loc => () => {
        const value = loc.cities
                      ? {region: {id: loc.id, name: loc.name}}
                      : loc.district
                        ? {city: {id: loc.id, name: loc.name}}
                        : {district: {id: loc.id, name: loc.name}};

        setSelectedLocation({...selectedLocation, ...value});
        (loc.cities || loc.district?.length) && setLocations(loc.cities ?? loc.district);
    };

    const handleModalOpen = () => {
        handleLocationModalOpen();
        region && setLocations(currentDistricts ?? currentCities ?? allLocations);
    };

    const handleClose = () => {
        if (userLocation) {
            setSelectedLocation(userLocation);
        } else {
            setLocations(allLocations);
            setSelectedLocation(initLocation);
        }
        handleLocationModalClose();
    };

    const handleChoiceLocation = () => {
        handleSelectLocation(selectedLocation);
        handleLocationModalClose();
    };

    const toPrevLocation = () => {
        if (currentDistricts) {
            const cities = allLocations.find(loc => loc.id === region.id).cities;
            setLocations(cities);
            setSelectedLocation({
                ...selectedLocation,
                city: null,
                district: null
            });
        } else {
            setLocations(allLocations);
            setSelectedLocation(initLocation);
        }
    };

    useEffect(() => {
        if (userLocation && !(region || city || district)) {
            setSelectedLocation(userLocation);
            handleSelectLocation(userLocation);
        }
    }, []);

    useEffect(() => {
        setLocations(allLocations);
    }, [allLocations]);

    const classes = useStyles();
    return (
        <div>
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
                handleModalClose={handleClose}
                handleLocation={handleLocation}
                toPrevLocation={toPrevLocation}
                handleChoiceLocation={handleChoiceLocation}
            />
        </div>
    );
};
