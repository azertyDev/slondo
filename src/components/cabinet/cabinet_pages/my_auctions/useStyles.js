import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {},
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
    userPhoneAndData: {
        '& .MuiOutlinedInput-input': {
            padding: '15px 10px'
        },
        '& .MuiFormHelperText-contained': {
            marginLeft: 0,
            marginRight: 0
        }
    },
    toArchive: {
        '& > button': {
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            background:
                'linear-gradient(49.94deg, rgb(103, 94, 170) 19.03%, rgb(173, 102, 213) 72.72%)',
            fontSize: '0.75rem',

            padding: '0',
            '& > h6.MuiTypography-subtitle1': {
                fontSize: '0.875rem',
                color: '#fff'
            }
        }
    },
    submitBtn: {
        '& button': {
            width: '100%',
            '& h6': {
                color: '#fff !important'
            }
        }
    },
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
    promoteInfo: {
        '& .promote-item': {
            display: 'flex',
            padding: '50px 40px 15px',
            '& .MuiTypography-h6, .MuiTypography-h5': {
                fontWeight: '600'
            },
            '& .MuiTypography-subtitle1, .MuiTypography-h5, .MuiTypography-subtitle2': {marginBottom: '20px'},
            '& img': {
                position: 'absolute',
                bottom: '-15px',
                right: 25,
                zIndex: 0
            },
            '& > div + div': {
                position: 'relative',
                '& button': {
                    width: '100%',
                    zIndex: 1,
                    background: '#2F80ED',
                    borderRadius: '5px',
                    '& .MuiTypography-subtitle1': {
                        margin: 0,
                        color: '#fff'
                    }
                }
            }
        }
    }
}))
