import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.paper-block': {
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
            '& div.location': {
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
        }
    },
    btn: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: 5,
        '&.notification': {
            backgroundColor: '#F9F9F9',
            marginBottom: 8
        },
        '&.settings': {
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
    userInfoWrapper: {
        '& div.user-info-title': {
            display: 'flex',
            '& h6.all-offers': {
                color: theme.palette.primary.secondary,
                textDecoration: 'underline',
                cursor: 'pointer'
            }
        },
        '& div.user-info': {
            display: 'flex',
            flexDirection: 'column',
            '& div.contacts-btns': {
                display: 'flex',
                justifyContent: 'space-between'
            },
            '& .MuiAvatar-root': {
                width: 50,
                height: 50
            }
        }
    },
    actionButtons: {
        '& button': {
            width: '100%',
            marginTop: 8,
            '&.reject-btn': {
                background: '#F9F9F9',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)'
            }
        }
    }
}));