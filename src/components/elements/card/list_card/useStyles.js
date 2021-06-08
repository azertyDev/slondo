import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        border: 0,
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        zIndex: 20,
        '& .card-data': {
            display: 'flex',
            height: 192,
            position: 'relative',
            '& .img': {
                borderRadius: '10px 0px 0px 0px',
                width: '27%',
                height: 'auto',
                backgroundPosition: 'center top',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                position: 'relative',
                '& > img': {
                    borderRadius: '5px 0px 0px 5px',
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover'
                },
                '& > span.MuiTypography-caption': {
                    position: 'absolute',
                    top: '3px',
                    left: '3px',
                    borderRadius: '5px',
                    padding: '2px 10px',
                    letterSpacing: '0.4px',
                    color: '#fff',
                    '&.post': {
                        backgroundColor: theme.palette.primary.postBgColor
                    },
                    '&.auc': {
                        backgroundColor: theme.palette.primary.aucBgColor
                    },
                    '&.exauc': {
                        backgroundColor: theme.palette.primary.exAucBgColor
                    }
                },
                '& > span:last-child': {
                    position: 'absolute',
                    bottom: '4px',
                    left: '4px',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: '3px',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    borderRadius: '5px',
                    '& > svg': {
                        marginRight: '8px'
                    }
                }
            },
            '& .content': {
                width: '100%',
                minWidth: 0,
                padding: '10px 10px 10px 20px',
                borderLeft: 0,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                '& .post-title': {
                    width: '350px',
                    '& a': {
                        textDecoration: 'none',
                        '&:hover': {
                            textDecoration: 'underline',
                            textDecorationColor: '#000'
                        },
                        '& .MuiTypography-subtitle1': {
                            fontSize: '18px',
                            lineHeight: '20px'
                        }
                    }
                },
                '& .MuiTypography-subtitle2': {
                    borderBottom: '1px solid #838383',
                    lineHeight: '20px',
                    color: '#838383'
                },
                '&.card-btn': {
                    position: 'absolute',
                    top: 0,
                    right: 20,
                    '& .settings, .favorite, .notifications': {
                        background: '#F5F5F5',
                        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
                        borderRadius: '0px 0px 10px 10px',
                        display: 'flex',
                        alignItems: 'center',
                        padding: '11px 12px',
                        '& svg': {
                            height: '18px',
                            '& path': {
                                fill: '#4E4E4E'
                            }
                        },
                        '&:hover': {
                            cursor: 'pointer',
                            background: '#EB5757',
                            '& svg': {
                                height: '18px',
                                '& path': {
                                    fill: '#fff'
                                }
                            }
                        }
                    },
                    '& .notifications': {
                        marginRight: 10
                    }
                },
                '& .advertise': {
                    position: 'absolute',
                    top: '70px',
                    right: 0,
                    padding: '9px 20px',
                    borderRadius: '100px 0px 0px 100px',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
                    background: 'linear-gradient(90.62deg, #F38522 0.56%, #FFB800 99.49%)'
                }
            },
            '& .description': {
                display: 'flex',
                flexFlow: 'row wrap',
                maxWidth: '85%',
                position: 'relative',
                '& > div': {
                    height: '26px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    padding: '0 15px',
                    margin: '2px 10px 2px 0',
                    borderRadius: '100px',
                    cursor: 'default',
                    userSelect: 'none',
                    background: '#F5F5F5',
                    '& p.MuiTypography-body1': {
                        fontSize: '12px'
                    },
                    '& svg': {
                        width: '20px',
                        height: '20px',
                        marginRight: '15px'
                    }
                }
            },
            '& .priceAndBet': {
                display: 'flex',
                alignSelf: 'flex-end',
                justifyContent: 'center',
                '& .MuiTypography-subtitle1': {
                    fontSize: '0.875rem',
                    color: '#BDBDBD'
                }
            },
            '& .timer-title': {
                color: '#838383'
            },
            '& .timer': {
                fontSize: '0.875rem'
            }
        }
    }
}));
