import {Dispatch, FC, SetStateAction} from 'react';
import Dialog from '@material-ui/core/Dialog';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import {useTheme} from '@material-ui/core/styles';
import {useStyles} from './useStyles';

type ResponsiveDialogPropsType = {
    openDialog: boolean,
    setOpenDialog: Dispatch<SetStateAction<boolean>>
};

export const ResponsiveDialog: FC<ResponsiveDialogPropsType> = (props) => {
    const {
        openDialog,
        setOpenDialog
    } = props;

    const fullScreen = useMediaQuery(useTheme().breakpoints.down('md'));

    const classes = useStyles();

    const handleClose = () => {
        setOpenDialog(false);
    };

    return (
        <Dialog
            fullScreen={fullScreen}
            maxWidth='md'
            fullWidth
            open={openDialog}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
            className={classes.root}
        >
            {props.children}
        </Dialog>
    );
};
