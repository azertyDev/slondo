import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 15,
        '& button.back-btn': {
            color: theme.palette.primary.white,
            background: 'none',
            '& svg': {
                margin: '0 30px',
            },
            '& h6.MuiTypography-h6': {
                fontWeight: 600,
            },
        },
        '& div.MuiStepper-root': {
            padding: 0,
            width: '50%',
            '& > div.MuiStep-root': {
                '& svg.MuiStepIcon-completed': {
                    color: '#7DBCF6 !important',
                },
                '& svg.MuiStepIcon-active': {
                    color: '#7DBCF6 !important',
                },
                '& svg.MuiStepIcon-root': {
                    color: '#E0E0E0',
                },
                '& span.MuiTypography-body2': {
                    fontSize: '0.75rem',
                    color: theme.palette.common.tab,
                    '&.MuiStepLabel-label': {
                        marginTop: 10,
                    },
                },
            },
        },
    },
}));
