import {makeStyles, withStyles} from '@material-ui/core/styles';
import {blue} from "@material-ui/core/colors";
import {Button} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        background: '#F2F2F2',
        borderRadius: '10px',
        padding: 30,
        [theme.breakpoints.down('xs')]: {
            padding: 15
        },
        '& span.hint': {
            display: 'block',
            fontSize: '0.75rem'
        }
    },
    form: {
        '& button': {
            position: 'relative'
        },
        '& .user-avatar': {
            width: 60,
            height: 60
        }
    },
    editButton: {
        width: 'fit-content',
        backgroundColor: '#fff',
        boxShadow: '0px 1px 2px 0px #00000014',
        borderRadius: '3px',
        padding: '9px 25px',
        '& .MuiTypography-subtitle1': {
            color: '#838383'
        },
        '& svg': {
            color: theme.palette.secondary
        }
    },
    checkbox: {
        padding: 5
    },
    button: {
        width: '100%',
        '& .MuiTypography-subtitle1': {
            color: '#fff'
        }
    },
    icon: {
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100px',
        backgroundColor: '#F2F2F2'
    },
    progress: {
        color: blue[500],
        position: 'absolute',
        top: '50%',
        left: '50%',
        marginTop: -12,
        marginLeft: -12
    },
    recoveryBtn: {
        backgroundColor: '#fff',
        boxShadow: '0px 1px 2px 0px #00000014',
        borderRadius: '100px',
        '& .MuiTypography-subtitle1': {
            color: '#838383'
        }
    }
}));

export const SettingsButton = withStyles((theme) => ({
    root: {
        height: 38,
        backgroundColor: (props) =>
            props.color === 'primary'
                ? theme.palette.secondary.main
                : theme.palette.error.light
        ,
        '& .MuiTypography-subtitle1': {
            color: '#fff'
        },
        '&:disabled': {
            backgroundColor: '#ccc'
        },
        '&:hover': {
            backgroundColor: (props) =>
                props.color === 'primary'
                    ? theme.palette.secondary.dark
                    : theme.palette.error.dark

        }
    }
}))(Button);
