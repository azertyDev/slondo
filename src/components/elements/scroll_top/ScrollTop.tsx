import React, {FC} from 'react';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Zoom from '@material-ui/core/Zoom';
import {useStyles} from './useStyles'


export const ScrollTop: FC = (props) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 1000,
    });

    const handleClick = (event) => {
        const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
        if (anchor) {
            anchor.scrollIntoView({behavior: 'smooth', block: 'center'});
        }
    };

    const classes = useStyles();
    return (
        <Zoom in={trigger}>
            <div onClick={handleClick} role="presentation" className={classes.root}>
                {props.children}
            </div>
        </Zoom>
    );
}