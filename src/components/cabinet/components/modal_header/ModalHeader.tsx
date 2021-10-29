import {FC} from 'react';
import {Box, IconButton, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import CloseIcon from '@material-ui/icons/Close';
import {useStyles} from './useStyles';
import {ArrowBackIcon} from '@src/components/elements/icons/ArrowBackIcon';


type ModalHeaderPropsType = {
    title?,
    hasPrevBtn?,
    handleBack?,
    handleCloseDialog?
}

export const ModalHeader: FC<ModalHeaderPropsType> = (props) => {
    const {
        title,
        hasPrevBtn,
        handleBack,
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
                    onClick={handleBack}
                    classes={{root: classes.button}}
                >
                    <ArrowBackIcon />
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

