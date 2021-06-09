import {FC} from 'react';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import {useStyles} from './useStyles';
import {CloseIcon} from '@src/components/elements/icons';
import {IconButton} from '@material-ui/core';

type ResponsiveDialogPropsType = {
    openDialog: boolean,
    handleCloseDialog: () => void,
    maxWidth?
};

export const ResponsiveDialog: FC<ResponsiveDialogPropsType> = (props) => {
    const {
        openDialog,
        handleCloseDialog,
        maxWidth = 'md'
    } = props;

    const fullScreen = useMediaQuery(useTheme().breakpoints.down('xs'));

    const classes = useStyles();
    return (
        <Dialog
            fullScreen={fullScreen}
            fullWidth
            maxWidth={maxWidth}
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="responsive-dialog-title"
            className={classes.root}
        >
            <IconButton
                onClick={handleCloseDialog}
                className={classes.closeBtn}
            >
                <CloseIcon/>
            </IconButton>
            {props.children}
        </Dialog>
    );
};
