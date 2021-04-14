import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .profile-form, .offers-card': {
            marginLeft: 20,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            '& .congrat': {
                '& .cracker-icon': {
                    background: '#FFFFFF',
                    borderRadius: '50%',
                    padding: 8
                }
            },
            '& .extreme-rate': {
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '5px',
                padding: '0 10px',
                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '0.75rem'
                },
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
            '& .profile-data': {
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
                background: '#F2F2F2',
                padding: 10,
                borderRadius: '10px 10px 0 0',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                '&  h6.MuiTypography-subtitle1': {
                    fontSize: '1.125rem',
                    textAlign: 'center'
                },
                '& span > div.MuiAvatar-root': {
                    width: 40,
                    height: 40
                },
                '& button': {
                    background: '#FFFFFF',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
                    borderRadius: '5px',
                    border: 0,
                    width: '100%',
                    padding: 8,
                    '&.write': {},
                    '&.accept': {
                        marginBottom: 2,
                        '& > svg': {
                            marginRight: 10,
                            '& > path': {
                                fill: '#90BE27'
                            }
                        }
                    },
                    '&.decline': {
                        '& > svg': {
                            marginRight: 10,
                            '& > path': {
                                fill: '#F08F8F'
                            }
                        }
                    },
                    '& > h6.MuiTypography-subtitle1': {
                        color: '#4e4e4e'
                    },
                    '& > svg': {
                        marginRight: 10,
                        '& > path': {
                            fill: '#4e4e4e'
                        }
                    }
                }
            },
            '& .show-phone-btn': {
                backgroundColor: '#675EAA',
                borderRadius: '0 0 5px 5px',
                border: 'none',
                height: '38px',
                width: '100%',
                '& h6.MuiTypography-subtitle2': {
                    color: '#fff'
                }
            }
            // '& div:last-child': {
            //     '& > h6.MuiTypography-subtitle2': {
            //         fontSize: '0.75rem',
            //         padding: '5px 10px',
            //         '& span': {
            //             color: theme.palette.primary.error
            //         }
            //     }
            // }
        }
    }
}));
