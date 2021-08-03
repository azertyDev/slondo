import {FC} from 'react';
import {Box, IconButton} from '@material-ui/core';
import {ResponsiveModal} from '@src/components/elements/responsive_modal/ResponsiveModal';
import {CloseIcon} from '@src/components/elements/icons';
import {useStyles} from './useStyles';

type CabinetModalPropsType = {
    openDialog: boolean,
    handleCloseDialog: () => void,
    maxWidth?: string,
    fullWidth?: boolean
};

export const CabinetModal: FC<CabinetModalPropsType> = (props) => {
    const {
        openDialog,
        handleCloseDialog,
        maxWidth,
        fullWidth
    } = props;

    const classes = useStyles();
    return (
        <ResponsiveModal
            openDialog={openDialog}
            handleCloseDialog={handleCloseDialog}
            maxWidth={maxWidth}
            fullWidth={fullWidth}
        >
            <Box p={{xs: 2, md: 4}} className={classes.root} overflow='scroll'>
                <IconButton
                    size='medium'
                    onClick={handleCloseDialog}
                    className={classes.closeBtn}
                >
                    <CloseIcon />
                </IconButton>
                {props.children}
            </Box>
        </ResponsiveModal>
    );
};
