import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        [theme.breakpoints.down('md')]: {
            background: '#FFF',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
            borderRadius: '10px',
            paddingBottom: '10px'
        },
        '& > h6.MuiTypography-subtitle1': {
            fontSize: '1.125rem',
            padding: '10px 15px',
            fontWeight: '600',
            '&:last-child': {
                padding: '10px 15px 0',
                '& h6.show-hide-all-bet': {
                    fontSize: '1.125rem',
                    fontWeight: '400',
                    color: '#675EAA',
                    textDecorationLine: 'underline',
                    [theme.breakpoints.down('md')]: {
                        textDecorationLine: 'none',
                        fontSize: 'calc(14px + 4 * (100vw / 1280))'
                    }
                }
            },
            '& div:last-child': {
                [theme.breakpoints.down('md')]: {
                    height: '21px'
                }
            },
            '& svg': {
                marginLeft: '9px'
            }
        },
        '& > div.participants': {
            padding: '15px',
            borderTop: '1px solid rgba(103, 94, 170, 0.5)',
            borderBottom: '1px solid rgba(103, 94, 170, 0.5)',
            '& > ul': {
                listStyle: 'none',
                padding: '0',
                margin: '0',
                '& > li': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    position: 'relative',
                    padding: '10px 0',
                    [theme.breakpoints.down('md')]: {
                        padding: '0'
                    },
                    '& > div': {
                        '&:first-child': {
                            display: 'flex',
                            flexFlow: 'column wrap',
                            width: '60%',
                            '& div.participant-name': {
                                marginBottom: '10px',
                                '& > h6.MuiTypography-subtitle1': {
                                    color: '#666666',
                                    '& > span': {
                                        color: '#AD66D5'
                                    }
                                }
                            },
                            '& div.dateAndTime': {
                                display: 'flex',
                                justifyContent: 'space-between',
                                width: '80%',
                                [theme.breakpoints.down('md')]: {
                                    justifyContent: 'flex-start'
                                },
                                '& > h6.bet-time': {
                                    color: '#2F80ED',
                                    fontSize: '0.875rem',
                                    [theme.breakpoints.down('md')]: {
                                        marginRight: '25px'
                                    }
                                },
                                '& > h6.bet-date': {
                                    color: 'rgba(49, 49, 49, 0.6)',
                                    fontSize: '0.875rem'
                                }
                            }
                        },
                        '&:last-child': {
                            textAlign: 'end',
                            width: '40%',
                            '& > h6': {
                                fontWeight: '600',
                                '&.final-bet': {
                                    color: 'rgba(49, 49, 49, 0.6)',
                                    marginBottom: '10px'
                                },
                                '&.per-bet': {
                                    color: '#BDBDBD',
                                    fontSize: '0.875rem',
                                    fontWeight: '400',
                                    '& span.started-price': {
                                        fontWeight: 600,
                                        color: '#BB6BD9'
                                    }
                                }
                            }
                        }
                    },
                    '&:after': {
                        content: '""',
                        position: 'absolute',
                        bottom: 0,
                        border: 0,
                        margin: 0,
                        height: 1,
                        width: '100%',
                        background: 'linear-gradient(90deg, rgba(243, 243, 243, 0) -4.72%, rgba(204, 204, 204, 0.69) 47.81%, rgba(248, 248, 248, 0) 104.92%)'
                    },
                    '&:last-child': {
                        '&:after': {
                            display: 'none'
                        },
                        paddingBottom: '0'
                    },
                    '&:first-child': {
                        '& > div': {
                            '&:last-child': {
                                '& > h6': {
                                    fontWeight: '600',
                                    '&.final-bet': {
                                        color: '#666666'
                                    },
                                    '&.per-bet': {
                                        color: '#90BE27',
                                        fontWeight: '600'
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}));
