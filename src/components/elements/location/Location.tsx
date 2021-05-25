import {FC, useEffect, useState} from 'react';
import {Typography} from '@material-ui/core';
import {LocationIcon} from '@src/components/elements/icons';
import {LocationModal} from './LocationModal';
import {useTranslation} from 'next-i18next';
import {cookieOpts, cookies} from '@src/helpers';
import {useSelector} from 'react-redux';
import {RootState} from '@src/redux/rootReducer';
import {useStyles} from './useStyles';


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

    const [open, setOpen] = useState(false);
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
        setOpen(true);
        region && (
            setLocations(separateByThree(currentDistricts ?? currentCities ?? locationsFromStore))
        );
    };

    const handleClose = () => {
        setOpen(false);
        if (userLocation) {
            setSelectedLocation(userLocation);
        } else {
            setLocations(separatedLocations);
            setSelectedLocation(initLocation);
        }
    };

    const handleChoiceLocation = () => {
        if (region) {
            cookies.set('user_location', selectedLocation, cookieOpts);
        } else {
            cookies.remove('user_location', {path: '/'});
        }
        setOpen(false);
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
        <div className={classes.root}>
            <div className='location-wrapper'>
                <LocationIcon/>
                <Typography variant="subtitle1" onClick={handleModalOpen}>
                    {t(locationsTxt || 'location')}
                </Typography>
            </div>
            <LocationModal
                t={t}
                open={open}
                locations={locations}
                prevLocation={prevLocation}
                locationInputTxt={locationsTxt}
                handleClose={handleClose}
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
