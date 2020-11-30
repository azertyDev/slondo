import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.ad-slider': {
            '& > div:last-child': {
                display: 'flex',
                justifyContent: 'flex-end',
                flexDirection: 'column',
                '& > a': {
                    display: 'flex',
                    textDecoration: 'none',
                    color: '#000',
                    '& > img': {
                        marginLeft: '10px',
                    },
                },
                '& > a:hover': {
                    textDecoration: 'underline',
                },
            },
        },
        '& div.ad-info': {
            display: 'flex',
            justifyContent: 'space-around',
            padding: '13px 0px',
            background: '#F2F2F2',
            borderRadius: '5px',
            margin: '20px 0',
            '& > h6.MuiTypography-subtitle1:first-child': {
                '& > span': {
                    color: '#2F80ED'
                }
            },
            '& > h6.MuiTypography-subtitle1:last-child': {
                display: 'flex',
                alignItems: "center",
                '& > svg': {
                    marginLeft: '12px'
                }
            }
        },
        '& div.ad-bonus': {
            display: 'flex',
            marginBottom: '20px',
            '& span': {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                padding: '8px 15px',
                marginRight: '30px',
                borderRadius: '100px',
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                '&.delivery': {
                    '& svg': {
                        '& path': {
                            fill: '#695EAE',
                        }
                    }
                },
                '&.safe_deal': {},
                '&.exchange': {
                    '& svg': {
                        width: 20,
                        height: 22,
                        '& path': {
                            fill: '#4E4E4E',
                        }
                    }
                },
                '&.available': {},
                '& svg': {
                    marginRight: 15,
                },
                '& h6.MuiTypography-subtitle1': {
                    color: '#838383',
                },
            }
        },
        '& div.ad-location': {
            marginBottom: '40px',
        },
        '& div.ad-description': {
            marginBottom: '40px',
            '& > div:first-child': {
                '& > h6.MuiTypography-subtitle1': {
                    display: 'flex',
                    alignItems: 'center',
                    '&:first-child': {
                        fontWeight: '600'
                    },
                    '&:last-child': {
                        marginTop: '10px',
                        '& > svg': {
                            width: '48px',
                            height: '48px',
                            marginRight: '10px'
                        }
                    }
                },
            },
            '& > div:last-child': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginTop: '30px',
                '& > div': {
                    '& > h6.MuiTypography-subtitle1': {
                        color: '#838383',
                    },
                    '& a': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                },
            },
        },
        '& div.started-price': {
            marginBottom: '40px',
            '& span': {
                display: 'inline-block',
                padding: '12px 30px',
                background: '#F2F2F2',
                borderRadius: '10px',
                '& > h6.MuiTypography-body2': {}
            }
        },
        '& div.ad-parameters': {
            borderBottom: '1px solid #ccc',
            paddingBottom: '65px',
            '& p.MuiTypography-body1': {
                marginBottom: '20px',
            },
            '& > div': {
                display: 'flex',
                margin: '0 0 20px 0',
                padding: '0 30px',
                '& > div:first-child': {
                    width: '33%',
                },
                '& > div': {
                    width: '100%',
                },
            },
            '& > div:last-child': {
                margin: 0,
                '& div:last-child': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    '& a': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },
                },
            },
        },
    },
    '& a': {
        textDecoration: 'none',
    },
    icons: {
        width: '20px',
    },
    downArrow: {
        height: '15px',
        marginLeft: '5px',
    },
    adBanner: {
        marginTop: '50px',
        '& > div.right-banner': {
            width: '100%',
            height: '470px',
            borderRadius: '7px',
            backgroundColor: '#C0C0C0',
        },
    },
}));