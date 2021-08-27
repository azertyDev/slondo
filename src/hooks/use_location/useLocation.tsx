import {browser} from 'process';
import {useRouter} from "next/router";
import {useEffect, useState} from 'react';
import {useTranslation} from 'next-i18next';
import {unstable_batchedUpdates} from 'react-dom';
import {IdNameType} from "@root/interfaces/Post";
import {LocationModal} from './LocationModal';
import {useModal} from '@src/hooks/useModal';
import {cookieOpts, cookies, getLocationByURL} from "@src/helpers";
import {LocationIcon} from "@src/components/elements/icons";
import {Typography} from "@material-ui/core";
import {useStyles} from './useStyles';

type LocationType = {
    region: IdNameType
    city?: IdNameType
}

type UseLocation = (
    initLocation?: LocationType,
    handleSelect?: (v) => void,
    saveToCookies?: boolean
) => {
    locationName: string,
    locElement: JSX.Element,
    locationModal: JSX.Element,
    location: LocationType,
    handleLocModalOpen: () => void
};

const initLocation = {
    region: null,
    city: null
};

export const useLocation: UseLocation = (location, handleSelect, saveToCookies = false) => {
    const {query: {path}, asPath} = useRouter();
    const {t} = useTranslation('locations');

    const {
        modalOpen,
        handleModalClose,
        handleModalOpen: handleLocModalOpen
    } = useModal();

    const [locations, setLocations] = useState([]);
    const [currLoc, setCurrLoc] = useState(location || initLocation);
    const {region, city} = currLoc;

    const locationName = city
        ? `${t(`${region.name}.${city.name}`)}, ${t(`${region.name}.name`)}`
        : region ? `${t(`${region.name}.name`)}` : t(saveToCookies ? 'location' : 'allUzb');

    const prevLocation = !!region
        ? `${t(`${city?.name ? `${region.name}.${city.name}` : `${region.name}.name`}`)}`
        : t(`allUzb`);

    const selectedLocations = locations.find(reg => reg.id === region?.id)?.cities ?? locations;

    const handleSaveToCookies = ({region, city}: LocationType) => {
        if (region) {
            const userLocation: any = {region};
            if (city) userLocation.city = city;
            cookies.set('user_location', userLocation, cookieOpts);
        } else {
            cookies.remove('user_location', {path: '/'});
        }
    };

    const handleLocation = loc => () => {
        const hasCity = !!loc.cities;
        const value = hasCity
            ? {region: {id: loc.id, name: loc.name, ru_name: loc.ru_name}}
            : {city: {id: loc.id, name: loc.name, ru_name: loc.ru_name}};
        const selectedLoc = {...currLoc, ...value};

        setCurrLoc(selectedLoc);

        !hasCity && unstable_batchedUpdates(() => {
            handleModalClose();
            !!handleSelect && handleSelect(selectedLoc);
            saveToCookies && handleSaveToCookies(selectedLoc);
        });
    };


    const handleClose = () => {
        unstable_batchedUpdates(() => {
            handleModalClose();
            saveToCookies && setCurrLoc(location || getLocationByURL(path[0], locations));
        });
    };

    const toPrevLocation = () => {
        setCurrLoc(initLocation);
    };

    const handleChoiceLocation = () => {
        unstable_batchedUpdates(() => {
            handleModalClose();
            !!handleSelect && handleSelect(currLoc);
            saveToCookies && handleSaveToCookies(currLoc);
        });
    };

    const classes = useStyles();
    const locElement = (
        <div className={classes.location}>
            <LocationIcon/>
            <Typography variant="subtitle1" onClick={handleLocModalOpen} noWrap>
                {locationName}
            </Typography>
        </div>
    );

    const locModal = (
        <LocationModal
            region={region}
            locations={selectedLocations}
            modalOpen={modalOpen}
            prevLocation={prevLocation}
            locationInputTxt={locationName}
            handleModalClose={handleClose}
            handleLocation={handleLocation}
            toPrevLocation={toPrevLocation}
            handleChoiceLocation={handleChoiceLocation}
        />
    );

    useEffect(() => {
        if (browser) {
            const regions = JSON.parse(localStorage.getItem('regions'));
            regions && !locations.length && setLocations(regions);
        }
    }, [modalOpen]);

    useEffect(() => {
        if (!location && !saveToCookies && path) {
            const locationByURL = getLocationByURL(path[0], locations);
            setCurrLoc(locationByURL);
        }
    }, [asPath, locations]);

    return {
        locationName,
        handleLocModalOpen,
        locElement,
        locationModal: locModal,
        location: region ? currLoc : null
    };
};