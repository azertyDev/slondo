import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 15,
        '& div.menu-header': {
            display: 'flex',
            alignItems: 'center',
            '& h6.MuiTypography-h6': {
                fontWeight: 600,
            },
            '& button.back-btn': {
                color: theme.palette.primary.white,
                background: 'none',
                padding: '12px 15px 12px 0'
            }
        },
        '& div.MuiStepper-root': {
            padding: 0,
            width: '100%',
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
                    fontSize: '.85rem',
                    color: theme.palette.common.tab,
                    '&.MuiStepLabel-label': {
                        marginTop: '8px',
                    }
                }
            }
        }
    }
}));
