import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    settingsList: {
        width: '100%',
        '& .MuiListItem-button, button': {
            width: '100%',
            height: 48,
            background: '#F2F2F2',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
            borderRadius: '3px',
            textAlign: 'center',
            '&:not(:last-child)': {
                marginBottom: 5
            }
        }
    },
    title: {
        marginBottom: '20px',
        [theme.breakpoints.down('xs')]: {
            fontWeight: '400',
            fontSize: '1rem'
        }
    },
    mt30: {
        marginTop: 30
    },
    userData: {
        padding: '5px 8px',
        background: '#F2F2F2',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: '3px',
        '& .MuiAvatar-root': {
            marginRight: 10
        }
    },
    submitBtn: {
        width: '100%',
        background: theme.palette.secondary.main,
        '& > h6.MuiTypography-subtitle1': {
            color: '#fff !important'
        }
    },
    userPhoneAndData: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .MuiOutlinedInput-input': {
            padding: '15px 10px'
        },
        '& .MuiFormHelperText-contained': {
            marginLeft: 0,
            marginRight: 0
        }
    }
}));
