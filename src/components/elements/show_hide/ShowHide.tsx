import {FC, useState} from 'react';
import {Typography} from '@material-ui/core';
import {useStyles} from './useStyles';

type ShowHide = {
    showTxt: string,
    hideTxt: string
};

export const ShowHide: FC<ShowHide> = (props) => {
    const {
        showTxt,
        hideTxt,
        children
    } = props;

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    const classes = useStyles();
    return (
        <div className={classes.root}>
            {show && children}
            <div>
                <Typography className='show-hide-txt' onClick={handleShow}>
                    {show ? hideTxt : showTxt}
                </Typography>
            </div>
        </div>
    );
};
