import {FC} from 'react';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import {useStyles} from './useStyles';

type ResponsiveDialogPropsType = {
    openDialog: boolean,
    handleCloseDialog: () => void,
    maxWidth?,
    className?
};

export const ResponsiveDialog: FC<ResponsiveDialogPropsType> = (props) => {
    const {
        openDialog,
        handleCloseDialog,
    } = props;

    const fullScreen = useMediaQuery(useTheme().breakpoints.down('sm'));

    const classes = useStyles();

    return (
        <Dialog
            fullScreen={fullScreen}
            fullWidth
            maxWidth='md'
            open={openDialog}
            onClose={handleCloseDialog}
            aria-labelledby="responsive-dialog-title"
            className={classes.root}
            {...props}
        >
            {props.children}
        </Dialog>
    );
};
