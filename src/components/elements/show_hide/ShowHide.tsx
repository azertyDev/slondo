import {FC, useState} from 'react';
import {Box, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';

type ShowHide = {
    showTxt: string,
    className?: string
};

export const ShowHide: FC<ShowHide> = (props) => {
    const {
        showTxt,
        children,
        className = ''
    } = props;

    const [show, setShow] = useState(false);

    const handleShow = () => {
        setShow(!show);
    };

    const classes = useStyles();
    return (
        <Box my={2} className={`${classes.root} ${className}`}>
            <div className='show-hide-txt'>
                <Typography variant='subtitle1' onClick={handleShow}>
                    {showTxt}
                </Typography>
            </div>
            {show && children}
        </Box>
    );
};
