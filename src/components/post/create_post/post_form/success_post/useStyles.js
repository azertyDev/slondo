import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& h5.MuiTypography-h5': {
            fontWeight: 600,
        },
        '& a': {
            textDecoration: 'none',
            color: theme.palette.primary.secondary,
        },
    },
    paper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '200px',
        marginBottom: '30px',
        '& h6.MuiTypography-subtitle2': {
            fontSize: '1rem',
        },
    },
    successInfo: {
        display: 'flex',
        flexDirection: 'row',
    },
    successIcon: {
        fontSize: 30,
        marginRight: 25,
        '& > path': {
            fill: '#27AE60',
        },
    },
    buttonBlock: {
        '& button.MuiButtonBase-root': {
            width: '100%',
            borderRadius: 5,
            background: theme.palette.primary.createAdBtnColor,
        },
    },
}));
