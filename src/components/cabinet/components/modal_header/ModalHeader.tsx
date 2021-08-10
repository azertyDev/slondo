import {FC} from 'react';
import {Box, IconButton, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import CloseIcon from '@material-ui/icons/Close';
import {useStyles} from './useStyles';

type ModalHeaderPropsType = {
    title,
    hasPrevBtn?,
    handlePrevMenu?,
    handleCloseDialog?
}

export const ModalHeader: FC<ModalHeaderPropsType> = (props) => {
    const {
        title,
        hasPrevBtn,
        handlePrevMenu,
        handleCloseDialog
    } = props;

    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const classes = useStyles();
    return (
        <Box
            p='15px'
            width={1}
            display='flex'
            alignItems='center'
            position='relative'
            justifyContent='center'
            className={classes.root}
            boxShadow={isXsDown ? '0px 1px 2px 0px #00000026' : 'none'}
        >
            {hasPrevBtn && (
                <IconButton
                    className='left'
                    onClick={handlePrevMenu}
                    classes={{root: classes.button}}
                >
                    <KeyboardArrowLeftIcon />
                </IconButton>
            )}
            {title && (
                <Typography
                    variant="h6"
                    component='p'
                    align='center'
                    className="title"
                >
                    {title}
                </Typography>
            )}
            {handleCloseDialog && (
                <IconButton
                    className='right'
                    onClick={handleCloseDialog}
                    classes={{
                        root: classes.button
                    }}
                >
                    <CloseIcon />
                </IconButton>
            )}
        </Box>

    );
};

