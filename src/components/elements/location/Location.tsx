import {FC, useState} from 'react';
import {WithT} from 'i18next';
import {Typography} from '@material-ui/core';
import {LocationIcon} from '@src/components/elements/icons';
import {LocationModal} from './LocationModal';
import {useStyles} from './useStyles';

type LocationPropsType = any & WithT;

export const Location: FC<LocationPropsType> = (props) => {
    const {
        t
    } = props;

    const [open, setOpen] = useState(false);

    const handleModal = (value) => () => {
        setOpen(value);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <div className='location-wrapper'>
                <LocationIcon/>
                <Typography variant="subtitle1" onClick={handleModal(true)}>
                    {t(`common:location`)}
                </Typography>
            </div>
            <LocationModal
                t={t}
                open={open}
                handleModalClose={handleModal(false)}
            />
        </div>
    );
};
