import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    settingsList: {
        marginTop: 50,
        width: '100%',
        '& .MuiListItem-button': {
            height: 48,
            background: '#F2F2F2',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
            marginBottom: 5,
            borderRadius: '3px',
            textAlign: 'center'
        }
    },
    userData: {
        padding: '5px 8px',
        height: 'max-content',
        '& .MuiAvatar-root': {
            marginRight: 10
        },
        background: '#F2F2F2',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: '3px',
        width: '40%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    submitBtn: {
        width: '100%',
        '& > h6.MuiTypography-subtitle1': {
            color: '#fff !important'
        }
    },
    userPhoneAndData: {
        '& .MuiOutlinedInput-input': {
            padding: '15px 10px'
        },
        '& .MuiFormHelperText-contained': {
            marginLeft: 0,
            marginRight: 0
        }
    },
}));
