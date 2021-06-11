import {FC} from 'react';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import {useStyles} from './useStyles';

type ResponsiveDialogPropsType = {
    openDialog: boolean,
    handleCloseDialog: () => void,
    maxWidth?,
    fullWidth?: boolean
};

export const ResponsiveModal: FC<ResponsiveDialogPropsType> = (props) => {
    const {
        openDialog,
        handleCloseDialog,
        maxWidth = 'md',
        fullWidth = true
    } = props;

    const fullScreen = useMediaQuery(useTheme().breakpoints.down('xs'));

    const classes = useStyles();
    return (
        <Dialog
            fullWidth={fullWidth}
            open={openDialog}
            maxWidth={maxWidth}
            fullScreen={fullScreen}
            className={classes.root}
            onClose={handleCloseDialog}
            aria-labelledby="responsive-dialog-title"
        >
            {props.children}
        </Dialog>
    );
};
