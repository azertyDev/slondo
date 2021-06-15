import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {},
    btn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: 5,
        '&.notification': {
            backgroundColor: '#F9F9F9'
        },
        '&.advertise': {
            backgroundColor: '#FFF7E0'
        },
        '& .MuiTypography-subtitle1': {
            color: '#FFB800'
        },
        '&:disabled': {
            backgroundColor: '#f7f7f7'
        }
    },
    paper: {
        display: 'flex',
        justifyContent: 'space-evenly',
        background: '#F9F9F9',
        padding: '15px',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: 5,
        '& .bonus_item': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            width: 80,
            '& .icon-bg': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: 32,
                height: 32,
                background: '#F2F2F2',
                borderRadius: 100
            },
            '& .MuiTypography-body1': {
                textAlign: 'center'
            }
        },
        '& .location': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& svg': {
                marginRight: 10
            },
            '& .MuiTypography-subtitle2': {
                color: theme.palette.common.tab
            }
        },
        '& button': {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '100%',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
            borderRadius: 5,
            backgroundColor: theme.palette.background.paper,
            '&:last-child': {
                marginTop: '5px'
            },
            '& svg': {
                marginRight: 10
            }
        }
    },
    userInfo: {
        '& .MuiAvatar-root': {
            width: 50,
            height: 50
        }
    }
}));

