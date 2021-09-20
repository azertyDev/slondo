import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.success-title': {
            textAlign: 'center'
        },
        '& h5.MuiTypography-h5': {
            fontWeight: 600
        },
        '& a': {
            color: theme.palette.primary.secondary
        }
    },
    paper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        [theme.breakpoints.down('xs')]: {
            textAlign: 'center',
            minHeight: 0,
            padding: '25px 0'
        },
        '& h6.MuiTypography-subtitle2': {
            fontSize: '1rem'
        }
    },
    successInfo: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            alignItems: 'center'
        }
    },
    successIcon: {
        fontSize: 30,
        marginRight: 25,
        '& > path': {
            fill: '#27AE60'
        }
    },
    buttonsBlock: {
        display: 'flex',
        justifyContent: 'center',
        '& a': {
            textDecoration: 'none'
        },
        '& div': {
            margin: '5px',
            width: '20%',
            [theme.breakpoints.down('md')]: {
                width: '28%'
            },
            [theme.breakpoints.down('sm')]: {
                width: '40%'
            },
            [theme.breakpoints.down('xs')]: {
                width: '50%'
            }
        },
        '& button.MuiButtonBase-root': {
            width: '100%',
            borderRadius: 5,
            background: theme.palette.primary.createAdBtnColor
        }
    }
}));
