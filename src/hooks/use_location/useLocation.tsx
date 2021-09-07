import {browser} from 'process';
import {useRouter} from "next/router";
import {useContext, useEffect, useState} from 'react';
import {useTranslation} from 'next-i18next';
import {unstable_batchedUpdates} from 'react-dom';
import {IdNameType} from "@root/interfaces/Post";
import {LocationModal} from './LocationModal';
import {useModal} from '@src/hooks/useModal';
import {getLocationByURL} from "@src/helpers";
import {LocationIcon} from "@src/components/elements/icons";
import {Typography} from "@material-ui/core";
import {UserLocationCtx} from "@src/context";
import {useStyles} from './useStyles';
import {RegionType} from "@root/interfaces/Locations";

type LocationType = {
    region: IdNameType
    city?: IdNameType
}

type UseLocationProps = {
    initLocation?: LocationType,
    handleSelectLocation?: (v) => void,
    saveToCookies?: boolean
}

type UseLocation = (props: UseLocationProps) => {
    locationName: string,
    locElement: JSX.Element,
    locationModal: JSX.Element,
    location: LocationType,
    handleLocModalOpen: () => void
};

export const useLocation: UseLocation = ({initLocation, handleSelectLocation, saveToCookies = false}) => {
    const {t} = useTranslation('locations');
    const {query: {path}, asPath} = useRouter();
    const {userLocation, addUserLocation, removeUserLocation} = useContext(UserLocationCtx);

    const {
        modalOpen,
        handleModalClose,
        handleModalOpen: handleLocModalOpen
    } = useModal();

    const initCurLocation = {region: null, city: null};

    const [locations, setLocations] = useState([]);
    const [currLoc, setCurrLoc] = useState<LocationType>(initLocation || initCurLocation);
    const {region, city} = currLoc;

    const locationName = city
        ? `${t(`${region.name}.${city.name}`)}, ${t(`${region.name}.name`)}`
        : region ? `${t(`${region.name}.name`)}` : t(saveToCookies ? 'location' : 'allUzb');

    const prevLocation = !!region
        ? `${t(`${city?.name ? `${region.name}.${city.name}` : `${region.name}.name`}`)}`
        : t(`allUzb`);

    const selectedLocations = locations.find(reg => reg.id === region?.id)?.cities ?? locations;

    const handleSaveToCookies = ({region, city = null}: LocationType) => {
        if (region) {
            addUserLocation({region, city});
        } else {
            removeUserLocation();
        }
    };

    const handleLocation = ({cities, ...location}: RegionType) => () => {
        const value = cities ? {region: location} : {city: location};

        const selectedLoc = {...currLoc, ...value};
        setCurrLoc(selectedLoc);

        !cities && unstable_batchedUpdates(() => {
            handleModalClose();
            !!handleSelectLocation && handleSelectLocation(selectedLoc);
            saveToCookies && handleSaveToCookies(selectedLoc);
        });
    };


    const handleClose = () => {
        unstable_batchedUpdates(() => {
            handleModalClose();
            saveToCookies && setCurrLoc(userLocation || getLocationByURL(path[0], locations));
        });
    };

    const toPrevLocation = () => {
        setCurrLoc(initCurLocation);
    };

    const handleChoiceLocation = () => {
        unstable_batchedUpdates(() => {
            handleModalClose();
            !!handleSelectLocation && handleSelectLocation(currLoc);
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
        !initLocation && setCurrLoc(userLocation);
    }, [userLocation]);

    useEffect(() => {
        if (browser) {
            const regions = JSON.parse(localStorage.getItem('regions'));
            regions && !locations.length && setLocations(regions);
        }
    }, [modalOpen]);

    useEffect(() => {
        if (!saveToCookies && path) {
            const locationByURL = getLocationByURL(path[0], locations);
            setCurrLoc(locationByURL);
        }
    }, [asPath, locations]);

    return {
        locElement,
        locationName,
        handleLocModalOpen,
        locationModal: locModal,
        location: region ? currLoc : null
    };
};