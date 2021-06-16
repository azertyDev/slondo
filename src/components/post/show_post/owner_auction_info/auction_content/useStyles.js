import {makeStyles, fade} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 60,
        [theme.breakpoints.down('md')]: {
            marginBottom: '16px'
        },
        '& div.lot-info': {
            '& > div': {
                marginBottom: '20px',
                [theme.breakpoints.down('md')]: {
                    marginBottom: '16px'
                },
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
            '& .suggest_price': {
                [theme.breakpoints.up('lg')]: {
                    maxWidth: '100%'
                },
                '& > button': {
                    [theme.breakpoints.down('md')]: {
                        padding: '12px 39px'
                    },
                    width: '100%',
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
        padding: '8px 30px',
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
                marginBottom: '8px',
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
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    '& .MuiTypography-caption': {
                        marginTop: '5px'
                    },
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
