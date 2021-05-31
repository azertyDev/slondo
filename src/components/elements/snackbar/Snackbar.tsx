import React from 'react';
import Snackbar from '@material-ui/core/Snackbar';
import Alert from '@material-ui/lab/Alert';

export const CustomSnackbar = (props) => {
    const {
        message,
        openSnackbar,
        severity,
        handleCloseSnackbar
    } = props;

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            handleCloseSnackbar();
        }
    };

    return (
        <>
            <Snackbar
                key={message ? message : undefined}
                open={openSnackbar}
                onClose={handleClose}
                autoHideDuration={1000}
                anchorOrigin={{
                    vertical: 'top', horizontal: 'right'
                }}
            >
                <Alert severity={severity} variant='filled'>
                    {message ? message : undefined}
                </Alert>
            </Snackbar>
        </>
    );
};
