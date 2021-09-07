import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '345px',
        [theme.breakpoints.down('xs')]: {
            height: '233px'
        },
        '& a': {
            textDecoration: 'none'
        },
        '& > button.favorite-btn': {
            position: 'absolute',
            top: '10px',
            right: '10px',
            padding: '0',
            zIndex: 10,
            [theme.breakpoints.down('xs')]: {
                top: '5px',
                right: '5px'
            },
            '&:hover': {
                '& svg': {
                    transform: 'scale(1.1)',
                    transition: 'transform .3s cubic-bezier(.5,0,.5,3)'
                }
            }
        },
        '& div.MuiCard-root': {
            position: 'relative',
            borderRadius: '7px',
            filter: 'drop-shadow(0px 2px 4px rgba(0, 0, 0, 0.2))',
            [theme.breakpoints.down('xs')]: {
                filter: 'drop-shadow(0px 1px 4px rgba(0, 0, 0, 0.08))'
            },
            height: '100%',
            '&:hover': {
                boxShadow: 'rgba(0, 0, 0, 0.08) 0px 8px 16px 0px',
                cursor: 'pointer'
            },
            '& button.MuiCardActionArea-root': {
                height: '105px',
                [theme.breakpoints.down('xs')]: {
                    height: '80px'
                },
                '& > div.MuiCardContent-root': {
                    height: 'inherit',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between'
                }
            },
            '& > div.card-media': {
                backgroundColor: '#f2f2f2',
                height: '240px',
                [theme.breakpoints.down('xs')]: {
                    height: '153px'
                },
                '& > div.card-header': {
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '10px',
                    [theme.breakpoints.down('xs')]: {
                        padding: '5px 0 3px 5px'
                    },
                    '& > div.post_type': {
                        display: 'inline-flex',
                        '& > p': {
                            // lineHeight: '1.2',
                            letterSpacing: '0.4px',
                            borderRadius: '3px',
                            padding: '2px 5px',
                            color: theme.palette.primary.white,
                            backgroundColor: ({ads_type}) => (
                                ads_type === 'post'
                                    ? 'rgba(136, 202, 236, .65)'
                                    : ads_type === 'exauc'
                                    ? 'rgba(242, 153, 74, .65)'
                                    : 'rgba(173, 102, 213, 0.65)'
                            ),
                            [theme.breakpoints.down('xs')]: {
                                fontSize: '0.75rem'
                            }
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
                                background: 'rgba(255, 255, 255, 0.6)',
                                borderRadius: '100%',
                                marginRight: '5px'
                                // '& > svg': {
                                //     '& > path': {
                                //         fill: '#838383'
                                //     }
                                // }
                            }
                        }
                    }
                }
            },
            '& h6.MuiTypography-subtitle1': {
                [theme.breakpoints.down('sm')]: {
                    fontSize: '1.2rem'
                },
                [theme.breakpoints.down('xs')]: {
                    fontSize: '14px',
                    lineHeight: '14px'
                }
            },
            '& > button': {
                '& > div.MuiCardContent-root': {
                    padding: '10px 15px',
                    [theme.breakpoints.down('xs')]: {
                        padding: '8px 2px 8px 8px'
                    },
                    '& > h6.MuiTypography-h6': {
                        [theme.breakpoints.down('xs')]: {
                            fontSize: '1rem',
                            lineHeight: '20px',
                            fontWeight: '550'
                        }
                    },
                    '& > span.MuiTypography-caption': {
                        color: '#838383',
                        [theme.breakpoints.down('xs')]: {
                            fontSize: '12px',
                            '&:last-child': {
                                fontSize: '10px'
                            }
                        }
                    }
                }
            }
        },
        '& .price': {
            fontSize: '1.2rem',
            fontWeight: 500,
            [theme.breakpoints.down('sm')]: {
                fontSize: '1rem'
            },
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.875rem'
            }
        }
    },
    title: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.875rem'
        }
    },
    mobileFont: {
        [theme.breakpoints.down('xs')]: {
            fontSize: '0.625rem'
        }
    },
    skeleton: {
        height: '240px'
    }
}));
