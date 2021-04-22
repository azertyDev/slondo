import {makeStyles, fade} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 60,
        [theme.breakpoints.down('md')]: {
            marginBottom: 30
        },
        '& div.lot-info': {
            '& > div': {
                marginBottom: 20,
                '&:last-child': {
                    margin: 0
                }
            },
            '& div.reserve-price': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                background: '#F2F2F2',
                padding: '8px 0',
                '& div': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginLeft: 10,
                    '& > h6.MuiTypography-subtitle2': {
                        color: '#666666'
                    }
                }
            },
            '& div.buy-now': {
                background: '#F2F2F2',
                borderRadius: '5px',

                padding: '15px 10px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '1.125rem',
                    textAlign: 'center'
                },
                '& > button': {
                    background: theme.palette.primary.createAdBtnColor,
                    padding: '14px 10px',
                    '& > h6.MuiTypography-subtitle1': {
                        color: '#fff'
                    }
                }
            },
            '& div.lot-participants-block': {
                display: 'flex',
                flexDirection: 'column',
                [theme.breakpoints.down('md')]: {
                    background: '#F5F5F5',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
                    borderRadius: '10px',
                    paddingBottom: '20px'
                },
                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '1.125rem',
                    padding: '10px 15px',
                    fontWeight: '600',
                    '&:last-child': {
                        padding: '10px 15px 0',
                        color: '#675EAA',
                        textDecorationLine: 'underline',
                        [theme.breakpoints.down('md')]: {
                            textDecorationLine: 'none'
                        }
                    }
                },
                '& h6.all-bets': {
                    fontWeight: '400'
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
                                                marginRight: '30px'
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
                                background: '#333',
                                backgroundColor: 'linear-gradient(90deg, rgba(243, 243, 243, 0) -4.72%, rgba(204, 204, 204, 0.69) 47.81%, rgba(248, 248, 248, 0) 104.92%)'
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
            },
            '& .suggest_price': {
                [theme.breakpoints.up('lg')]: {
                    maxWidth: '100%'
                },
                '& > button': {
                    [theme.breakpoints.down('md')]: {
                        padding: '12px 39px'
                    },
                    width: '97.5%',
                    background: 'linear-gradient(90deg, #7DBCF6 0%, #63A6F4 100%);',
                    '& > h6.MuiTypography-subtitle1': {
                        color: '#fff',
                        [theme.breakpoints.down('md')]: {
                            fontSize: 'calc(14px + 2 * (100vw / 1280))',
                            whiteSpace: 'nowrap'
                        }
                    }
                }
            },
            '& .btn-buy-now': {
                '& > button': {
                    width: '100%',
                    padding: '11px 44px',
                    background: '#fff',
                    border: '1px solid #7DBCF6',
                    marginRight: 0,
                    whiteSpace: 'nowrap',
                    '& h6': {
                        color: '#7DBCF6'
                    }
                }
            }
        }
    },
    lotTimer: {
        padding: '15px 30px 8px 30px',
        boxShadow: '0px 0px 8px rgba(103, 94, 170, 0.25)',
        borderRadius: '3px',
        '& > h6.MuiTypography-subtitle1': {
            textAlign: 'center',
            fontSize: '1.125rem',
            fontWeight: '600',
            lineHeight: 1
        },
        '& > div': {
            display: 'flex',
            flexDirection: 'column',
            '& div.timer-title': {
                textAlign: 'center',
                marginBottom: 10,
                '& span.MuiTypography-button': {}
            },
            '& > span': {
                display: 'inline-block',
                fontSize: '24px',
                fontWeight: '600',
                lineHeight: 'normal'
            },
            '& > div:last-child': {
                display: 'flex',
                justifyContent: 'space-between',
                [theme.breakpoints.between('sm', 'md')]: {
                    justifyContent: 'center',
                    '& span': {
                        margin: '-1px 20px'
                    }
                },
                '& > div': {
                    textAlign: 'center',
                    '& span': {
                        '&:first-child': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            background: '#675EAA',
                            borderRadius: '3px',
                            width: '36px',
                            height: '38px',
                            '& h6.MuiTypography-h6': {
                                fontWeight: '600',
                                color: '#FFFFFF'
                            },
                            '&.disabled': {
                                background: '#BDBDBD'
                            }
                        }
                    }
                },
                '& > span': {
                    marginTop: '5px',
                    fontSize: '24px',
                    fontWeight: '600'
                }
            }
        }
    },
    modalBody: {
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& .subtitle': {
            marginBottom: 20
        },
        '& div.form': {
            width: '60%',
            display: 'flex',
            flexDirection: 'column',
            '& div.MuiInputBase-root': {
                marginBottom: 10,
                '& input': {
                    borderRadius: 4,
                    position: 'relative',
                    backgroundColor: theme.palette.common.white,
                    border: '1px solid #E0E0E0',
                    fontSize: 16,
                    padding: '10px 12px',
                    transition: theme.transitions.create(['border-color', 'box-shadow']),
                    '&:focus': {
                        boxShadow: `${fade(theme.palette.secondary.main, 0.25)} 0 0 0 0.2rem`,
                        borderColor: theme.palette.secondary.main
                    }
                }
            },
            '& button': {
                background: '#7DBCF6',
                marginBottom: 45,
                '& .MuiTypography-subtitle1': {
                    color: '#fff'
                }
            }
        }
    }
}));
