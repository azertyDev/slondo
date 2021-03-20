import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '345px',
        '& a': {
            textDecoration: 'none'
        },
        '& > button.favorite-btn': {
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '0',
            zIndex: 10,
            '& svg': {
                '& defs': {
                    '&.def1 stop': {
                        stopColor: '#fff'
                    },
                    '&:last-child stop': {
                        '&:first-child': {
                            stopColor: '#675EAA'
                        },
                        '&:last-child': {
                            stopColor: '#AD66D5'
                        }
                    }
                }
            },
            '&:hover': {
                '& svg': {
                    transform: 'scale(1.1)',
                    transition: 'transform .3s cubic-bezier(.5,0,.5,3)',
                    '& defs': {
                        '&.def1 stop': {
                            '&:first-child': {
                                stopColor: '#675EAA'
                            },
                            '&:last-child': {
                                stopColor: '#AD66D5'
                            }
                        },
                        '&:last-child stop': {
                            '&:first-child': {
                                stopColor: '#fff'
                            },
                            '&:last-child': {
                                stopColor: '#fff'
                            }
                        }
                    }
                }
            }
        },
        '& div.MuiCard-root': {
            position: 'relative',
            borderRadius: '7px',
            filter: 'drop-shadow(0px 2px 4px rgba(132, 92, 171, 0.2))',
            height: '100%',
            '&:hover': {
                boxShadow: 'rgba(0, 0, 0, 0.08) 0px 8px 16px 0px',
                cursor: 'pointer'
            },
            '& button.MuiCardActionArea-root': {
                height: '105px',
                '& > div.MuiCardContent-root': {
                    height: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-around'
                }
            },
            '& > div.card-media': {
                height: '240px',
                '& > div.card-header': {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '10px',
                    '& > div.title': {
                        display: 'inline-flex',
                        '& > h6': {
                            height: '16px',
                            lineHeight: '1.2',
                            letterSpacing: '0.4px',
                            borderRadius: '3px',
                            padding: '0 5px',
                            color: theme.palette.primary.white,
                            backgroundColor: ({ads_type}) => (
                                ads_type === 'post'
                                    ? 'rgba(136, 202, 236, .65)'
                                    : ads_type === 'auc'
                                    ? 'rgba(173, 102, 213, .65)'
                                    : 'rgba(242, 153, 74, .65)'
                            )
                        }
                    },
                    '& > div.icons': {
                        '&:last-child': {
                            display: 'flex',
                            '& > span': {
                                width: '25px',
                                height: '25px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: '5px',
                                background: 'rgba(255, 255, 255, 0.8)',
                                borderRadius: '100%',
                                marginRight: '5px',
                                '& > svg': {
                                    '& > path': {
                                        fill: '#838383'
                                    }
                                }
                            }
                        }
                    }
                }
            },
            '& h6.MuiTypography-subtitle1': {
                [theme.breakpoints.down('sm')]: {
                    fontSize: '1.2rem'
                }
            },
            '& > button': {
                '& > div.MuiCardContent-root': {
                    padding: '10px 15px',
                    '& > h5.MuiTypography-h5': {
                        lineHeight: '29px'
                    },
                    '& > span.MuiTypography-caption': {
                        color: '#838383'
                    }
                }
            }
        }
    },
    skeleton: {
        height: '240px'
    }
}))
