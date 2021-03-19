import React from 'react';
import Button from '@material-ui/core/Button';
import Snackbar from '@material-ui/core/Snackbar';
import Grow from '@material-ui/core/Grow';
import {TransitionProps} from '@material-ui/core/transitions';

function GrowTransition(props: TransitionProps) {
    return <Grow {...props} />;
}

export const CustomSnackbar = ({ message, handleSnackbarClick, handleSnackbarClose, openSnackbar }) => {
    return (
        <div>
            <Button onClick={handleSnackbarClick(GrowTransition)}>Grow Transition</Button>
            <Snackbar
                open={openSnackbar}
                onClose={handleSnackbarClose}
                message={message}
            />
        </div>
    );
};
