import {FC} from 'react';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import {useStyles} from './useStyles';

type ResponsiveDialogPropsType = {
    openDialog: boolean,
    keepMounted?: boolean,
    handleCloseDialog: () => void,
    maxWidth?,
    fullWidth?: boolean
    fullScreen?: boolean
};

export const ResponsiveModal: FC<ResponsiveDialogPropsType> = (props) => {
    const {
        keepMounted,
        openDialog,
        handleCloseDialog,
        fullScreen,
        maxWidth = 'md',
        fullWidth = true
    } = props;

    const defaultFullScreen = useMediaQuery(useTheme().breakpoints.down('xs'));

    const classes = useStyles();
    return (
        <Dialog
            keepMounted={keepMounted}
            open={openDialog}
            maxWidth={maxWidth}
            fullWidth={fullWidth}
            fullScreen={fullScreen || defaultFullScreen}
            className={classes.root}
            onClose={handleCloseDialog}
            aria-labelledby="responsive-dialog-title"
        >
            {props.children}
        </Dialog>
    );
};
