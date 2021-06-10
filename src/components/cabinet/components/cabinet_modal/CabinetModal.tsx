import {FC} from 'react';
import {Box, IconButton} from '@material-ui/core';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {CloseIcon} from '@src/components/elements/icons';
import {useStyles} from './useStyles';

type CabinetModalPropsType = {
    openDialog: boolean,
    handleCloseDialog: () => void,
    maxWidth?
};

export const CabinetModal: FC<CabinetModalPropsType> = (props) => {
    const {
        openDialog,
        handleCloseDialog,
        maxWidth
    } = props;

    const classes = useStyles();
    return (
        <ResponsiveModal
            openDialog={openDialog}
            handleCloseDialog={handleCloseDialog}
            maxWidth={maxWidth}
        >
            <Box p={4} position='relative'>
                <IconButton
                    onClick={handleCloseDialog}
                    className={classes.closeBtn}
                    size='medium'
                >
                    <CloseIcon />
                </IconButton>
                {props.children}

            </Box>
        </ResponsiveModal>
    );
};
