import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.paper-block': {
            height: '100%',
            padding: '15px',
            display: 'flex',
            borderRadius: 5,
            alignItems: 'center',
            background: '#F9F9F9',
            justifyContent: 'space-evenly',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
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
                    borderRadius: 100,
                    '& svg': {
                        '& path': {
                            fill: '#4e4e4e'
                        }
                    }
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