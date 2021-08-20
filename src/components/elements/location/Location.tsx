import {FC, useContext, useState} from 'react';
import {unstable_batchedUpdates} from 'react-dom';
import {Typography} from '@material-ui/core';
import {LocationIcon} from '@src/components/elements/icons';
import {LocationModal} from './LocationModal';
import {useTranslation} from 'next-i18next';
import {useModal} from '@src/hooks/useModal';
import {IdNameType} from "@root/interfaces/Post";
import {userAPI} from "@src/api/api";
import {ErrorCtx} from "@src/context";
import {useStyles} from './useStyles';

type LocationProps = {
    handleSelectLocation: (loc) => void
    userLocation: {
        region: IdNameType,
        city?: IdNameType
    }
};

export const Location: FC<LocationProps> = ({handleSelectLocation, userLocation}) => {
    const {t} = useTranslation('locations');

    const initLocation = {
        region: null,
        city: null
    };

    const {setErrorMsg} = useContext(ErrorCtx);
    const {modalOpen, handleModalOpen, handleModalClose} = useModal();

    const [isFetch, setIsFetch] = useState(false);
    const [regions, setRegions] = useState([]);
    const [currLoc, setCurrLoc] = useState(userLocation || initLocation);
    const {region, city} = currLoc;

    const locationsTxt = city
        ? `${t(`${region.name}.${city.name}`)}, ${t(`${region.name}.name`)}`
        : region ? `${t(`${region.name}.name`)}` : '';

    const prevLocation = !!region ? `${t(`${city?.name ? `${region.name}.${city.name}` : `${region.name}.name`}`)}` : t(`allUzb`);

    const locations = regions.find(reg => reg.id === region?.id)?.cities ?? regions;

    const fetchRegions = async () => {
        try {
            setIsFetch(true);
            const regions = await userAPI.getLocations();
            unstable_batchedUpdates(() => {
                setRegions(regions);
                setIsFetch(false);
            });
        } catch (e) {
            unstable_batchedUpdates(() => {
                setIsFetch(false);
                setErrorMsg(e.message);
            });
        }
    };

    const handleLocation = loc => () => {
        const value = loc.cities
            ? {region: {id: loc.id, name: loc.name}}
            : {city: {id: loc.id, name: loc.name}};
        setCurrLoc({...currLoc, ...value});
    };

    const handleLocModalOpen = () => {
        handleModalOpen();
        !regions.length && fetchRegions();
    };

    const handleClose = () => {
        if (userLocation) {
            setCurrLoc(userLocation);
        } else {
            setCurrLoc(initLocation);
        }
        handleModalClose();
    };

    const toPrevLocation = () => {
        setCurrLoc(initLocation);
    };

    const handleChoiceLocation = () => {
        unstable_batchedUpdates(() => {
            handleModalClose();
            handleSelectLocation(currLoc);
        });
    };

    const classes = useStyles();
    return (
        <>
            <div className={classes.location}>
                <LocationIcon/>
                <Typography variant="subtitle1" onClick={handleLocModalOpen} noWrap>
                    {t(locationsTxt || 'location')}
                </Typography>
            </div>
            <LocationModal
                t={t}
                region={region}
                isFetch={isFetch}
                locations={locations}
                hasRegion={!!region}
                modalOpen={modalOpen}
                prevLocation={prevLocation}
                locationInputTxt={locationsTxt}
                handleModalClose={handleClose}
                handleLocation={handleLocation}
                toPrevLocation={toPrevLocation}
                handleChoiceLocation={handleChoiceLocation}
            />
        </>
    );
};
