import {FC, useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import {LocationIcon} from '@src/components/elements/icons';
import {LocationModal} from './LocationModal';
import {useTranslation} from 'next-i18next';
import {cookieOpts, cookies} from '@src/helpers';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {useStyles} from './useStyles';
import useModal from '@src/hooks/useModal';


export const Location: FC = () => {
    const {t} = useTranslation('locations');
    const userLocation = cookies.get('user_location');

    const initLocation = {
        region: null,
        city: null,
        district: null
    };

    const locationsFromStore = useSelector((store: RootState) => store.locations.data);
    const separatedLocations = separateByThree(locationsFromStore);
    const {modalOpen: locationModalOpen, handleModalOpen: handleLocationModalOpen, handleModalClose: handleLocationModalClose} = useModal();

    const [locations, setLocations] = useState([]);
    const [selectedLocation, setSelectedLocation] = useState(initLocation);
    const {region, city, district} = selectedLocation;

    const locationsTxt = `${t(region?.name) ?? ''}${city ? `, ${t(city?.name)}` : ''}${district ? `, ${t(district?.name)}` : ''}`;
    const prevLocation = !!region ? `<-- ${t(`${city?.name ?? region.name}`)}` : t(`allUzb`);

    const currentCities = locationsFromStore.find(loc => loc.id === region?.id)?.cities;
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
        (loc.cities || loc.district?.length) && setLocations(separateByThree(loc.cities ?? loc.district));
    };

    const handleModalOpen = () => {
        region && (
            setLocations(separateByThree(currentDistricts ?? currentCities ?? locationsFromStore))
        );
        handleLocationModalOpen();
    };

    const handleClose = () => {
        if (userLocation) {
            setSelectedLocation(userLocation);
        } else {
            setLocations(separatedLocations);
            setSelectedLocation(initLocation);
        }
        handleLocationModalClose();
    };

    const handleChoiceLocation = () => {
        if (region) {
            const userLocation: any = {region};
            if (city) userLocation.city = city;
            if (district) userLocation.district = district;

            cookies.set('user_location', userLocation, cookieOpts);
        } else {
            cookies.remove('user_location', {path: '/'});
        }
        handleLocationModalClose();
    };

    const toPrevLocation = () => {
        if (currentDistricts) {
            const cities = separateByThree(locationsFromStore.find(loc => loc.id === region.id).cities);
            setLocations(cities);
            setSelectedLocation({
                ...selectedLocation,
                city: null,
                district: null
            });
        } else {
            setLocations(separatedLocations);
            setSelectedLocation(initLocation);
        }
    };

    useEffect(() => {
        userLocation && setSelectedLocation(userLocation);
    }, []);

    useEffect(() => {
        setLocations(separatedLocations);
    }, [locationsFromStore]);

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
