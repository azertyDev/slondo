import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: 55,
        [theme.breakpoints.down('md')]: {
            marginBottom: '20px'
        },
        borderBottom: '1px solid rgba(103, 94, 170, 0.5)',
        '& a': {
            textDecoration: 'none'
        },
        '& div.breadcrumbs': {
            marginBottom: '10px',
            '& li.MuiBreadcrumbs-li': {
                '& > a': {
                    '& h6': {
                        color: theme.palette.primary.main
                    },
                    '&:hover': {
                        textDecoration: `underline solid ${theme.palette.primary.main}`
                    }
                }
            }
        },
        '& div.post-type-adaptive': {
            '& .MuiTypography-h6': {
                padding: '0px 20px',
                lineHeight: '30px',
                borderRadius: '5px',
                fontWeight: '600',
                color: '#fff',
                [theme.breakpoints.down('md')]: {
                    width: '100%',
                    textAlign: 'center',
                    margin: '-3px 0px 14px 0px',
                    fontWeight: '400',
                    borderRadius: '0px 0px 5px 5px',
                    fontSize: 'calc(12px + 8 * (100vw / 1280))'
                },
                '&.post': {
                    background: 'rgba(136, 202, 236, .85)'
                },
                '&.auc': {
                    background: 'rgba(187, 107, 217, .85)'

                },
                '&.exauc': {
                    background: 'rgba(242, 153, 74, .85)'
                }
            }
        },
        '& .post-header': {
            '& div': {
                '& .MuiTypography-h2': {
                    lineHeight: '1.125'
                }
            },
            display: 'flex',
            marginBottom: '10px',
            [theme.breakpoints.up('lg')]: {
                alignItems: 'center'
            },
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column'
            },
            '& div.post-type': {
                '& .MuiTypography-h6': {
                    padding: '0px 20px',
                    lineHeight: '30px',
                    borderRadius: '5px',
                    fontWeight: '600',
                    color: '#fff',
                    '&.post': {
                        background: 'rgba(136, 202, 236, 0.65)'
                    },
                    '&.auc': {
                        background: 'rgba(173, 102, 213, 0.65)'
                    },
                    '&.exauc': {
                        background: 'rgba(242, 153, 74, 0.65)'
                    }
                }
            },
            '& .price': {
                [theme.breakpoints.down('md')]: {
                    fontWeight: '700',
                    display: 'flex',
                    justifyContent: 'space-between',
                    fontSize: 'calc(20px + 16 * (100vw / 1280))'
                }
            },
            '& .title': {
                [theme.breakpoints.down('md')]: {
                    width: 'auto',
                    margin: '8px 0 0 0',
                    fontSize: 'calc(14px + 6 * (100vw / 1280))',
                    fontWeight: '500'
                },
                flex: 1,
                width: '500px',
                marginLeft: '15px',
                '& > h2.MuiTypography-h2': {
                    fontSize: '20px',
                    fontWeight: '600'
                }
            },
            '& button': {
                background: 'none',
                borderRadius: '100px',
                color: '#838383',
                padding: 5,
                '& > svg': {
                    marginRight: 5,
                    '& > defs > linearGradient': {
                        '& stop': {
                            stopColor: '#F2C94C'
                        }
                    }
                },
                '&:disabled': {
                    color: '#BDBDBD',
                    '& > svg': {
                        marginRight: 5,
                        '& > defs > linearGradient': {
                            '& stop': {
                                stopColor: '#BDBDBD'
                            }
                        }
                    }
                }
            },
            '& .condition': {
                borderRadius: '50px',
                background: '#90BE27',
                textAlign: 'end',
                padding: '6px 20px',
                display: 'flex',
                [theme.breakpoints.down('md')]: {
                    background: '#2F80ED',
                    fontSize: '0.75rem',
                    padding: '3px 12.5px',
                    textAlign: 'center',
                    alignItems: 'center'
                },
                '& > h6.MuiTypography-h6': {
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#fff',
                    lineHeight: 1,
                    [theme.breakpoints.down('md')]: {
                        fontWeight: '500',
                        fontSize: 'calc(12px + 8 * (100vw / 1280))'
                    }
                }
            }
        },
        '& div.post-info': {
            padding: '13px 7px 12px',
            background: '#F2F2F2',
            borderRadius: '5px',
            margin: '20px 0',
            [theme.breakpoints.down('md')]: {
                background: 'inherit',
                margin: '0 0 20px'
            },
            [theme.breakpoints.up('lg')]: {
                display: 'flex',
                justifyContent: 'space-around'
            },
            '& div.info-wrapper': {
                display: 'flex',
                justifyContent: 'space-between',
                '& > h6': {
                    [theme.breakpoints.down('md')]: {
                        color: '#838383',
                        fontSize: 'calc(10px + 6 * (100vw / 1280))'
                    }
                },
                '& > a': {
                    textDecorationLine: 'underline'
                },
                '& > h6.MuiTypography-subtitle1:first-child': {
                    '& > span': {
                        color: '#2F80ED',
                        [theme.breakpoints.down('md')]: {
                            color: '#838383'
                        }
                    }
                },
                '& h6.MuiTypography-subtitle1:last-child': {
                    display: 'flex',
                    alignItems: 'center',
                    '&:hover': {
                        cursor: 'pointer',
                        textDecoration: 'underline'
                    },
                    '& > svg': {
                        marginLeft: '12px'
                    }
                },
                [theme.breakpoints.down('md')]: {
                    marginBottom: '12px'
                }
            },
            '& button.btn-report ': {
                position: 'relative',
                left: '50%',
                transform: 'translate(-50%,0)',
                borderRadius: '5px',
                color: '#F08F8F',
                border: '1px solid #F08F8F',
                width: '100%',
                background: '#FFFFFF'
            }
        },
        '& div.post-bonus': {
            display: 'flex',
            marginBottom: '16px',
            flexWrap: 'wrap',
            '& span': {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                padding: '5px 15px',
                marginRight: '30px',
                borderRadius: '100px',
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                marginBottom: '12px',
                [theme.breakpoints.down('md')]: {
                    marginRight: '8px',
                    padding: '5px 10px',
                    background: '#F2F2F2',
                    filter: 'drop-shadow(0px -1px 2px rgba(0, 0, 0, 0.05)) drop-shadow(0px 1px 2px rgba(0, 0, 0, 0.1))',
                    boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)'
                },
                '&:last-child': {
                    marginRight: 0
                },
                '&.delivery': {
                    '& h6': {
                        [theme.breakpoints.down('md')]: {
                            color: '#4E4E4E'
                        }
                    },
                    '& svg': {
                        marginRight: '5px',
                        '& path': {
                            fill: '#695EAE',
                            [theme.breakpoints.down('md')]: {
                                fill: '#4E4E4E'
                            }
                        }
                    }
                },
                '&.safe_deal': {
                    '& h6': {
                        [theme.breakpoints.down('md')]: {
                            color: '#4E4E4E'
                        }
                    },
                    '& svg': {
                        marginRight: '5px',
                        '& path': {
                            [theme.breakpoints.down('md')]: {
                                fill: '#4E4E4E'
                            }
                        }
                    }
                },
                '&.exchange': {
                    '& h6': {
                        [theme.breakpoints.down('md')]: {
                            color: '#4E4E4E'
                        }
                    },
                    '& svg': {
                        marginRight: '5px',
                        width: 20,
                        height: 22,
                        '& path': {
                            fill: '#4E4E4E'
                        }
                    }
                },
                '&.available': {
                    '& h6': {
                        [theme.breakpoints.down('md')]: {
                            color: '#4E4E4E'
                        }
                    },
                    [theme.breakpoints.down('md')]: {
                        marginRight: '8px',
                        padding: '10px 10px'
                    },
                    '& svg': {
                        marginRight: 15,
                        [theme.breakpoints.down('md')]: {
                            marginRight: '6px'
                        },
                        '& > defs > linearGradient': {
                            '& stop': {
                                [theme.breakpoints.down('md')]: {
                                    stopColor: '#4E4E4E',
                                    boxShadow: 'inset 0px 2px 2px rgba(0, 0, 0, 0.35)'
                                }
                            }
                        }
                    }
                },
                '&.auto-renewal': {
                    '& h6': {
                        [theme.breakpoints.down('md')]: {
                            color: '#4E4E4E'
                        }
                    },
                    '& svg': {
                        marginRight: '5px',
                        '& path': {
                            [theme.breakpoints.down('md')]: {
                                fill: '#4E4E4E'
                            }
                        }
                    }
                },
                '& h6.MuiTypography-subtitle1': {
                    color: theme.palette.common.tab,
                    [theme.breakpoints.down('md')]: {
                        fontSize: 'calc(10px + 6 * (100vw / 1280))',
                        fontWeight: '700'
                    }
                }
            },
            [theme.breakpoints.down('md')]: {
                '&:after': {
                    content: '""',
                    width: '100%',
                    height: '0.8px',
                    background: 'linear-gradient(90deg, rgba(243, 243, 243, 0.15) -4.72%, rgba(204, 204, 204, 0.8) 47.81%, rgba(248, 248, 248, 0.15) 104.92%)'
                }
            }
        },
        '& div.contact': {
            display: 'flex',
            marginBottom: '30px',
            position: 'relative',
            '& button': {
                marginRight: '6px',
                borderRadius: '5px',
                width: '50%',
                '& > h6': {
                    color: '#fff',
                    fontSize: 'calc(14px + 2 * (100vw / 1280))',
                    whiteSpace: 'nowrap'

                },
                '&:first-child': {
                    [theme.breakpoints.down('xs')]: {
                        width: '49%'
                    },
                    padding: '11px 39px',
                    background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)'
                },
                '&:last-child': {
                    [theme.breakpoints.down('xs')]: {
                        width: '49%'
                    },
                    padding: '11px 44px',
                    background: '#fff',
                    border: '1px solid #845CAB',
                    marginRight: 0,
                    '& h6': {
                        color: '#845CAB'
                    }
                }

            },
            [theme.breakpoints.down('md')]: {
                '&:after': {
                    position: 'absolute',
                    bottom: '-16px',
                    left: 0,
                    content: '""',
                    width: '100%',
                    height: '0.8px',
                    background: 'linear-gradient(90deg, rgba(243, 243, 243, 0.15) -4.72%, rgba(204, 204, 204, 0.8) 47.81%, rgba(248, 248, 248, 0.15) 104.92%)'
                }
            }
        },
        '& div.post-location': {
            position: 'relative',
            marginBottom: '36px',
            '& p.MuiTypography-button': {
                marginBottom: 16
            },
            '& > h6.MuiTypography-subtitle1': {
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.125rem',
                textDecorationLine: 'underline',
                '& > svg': {
                    height: 49,
                    width: 49,
                    marginRight: 10
                }
            },
            '& div.location-text': {
                textDecoration: 'underline',
                display: 'flex',
                alignItems: 'center',
                '& > svg': {
                    [theme.breakpoints.down('md')]: {
                        marginLeft: '-7px'
                    }
                },
                '& > h6': {
                    [theme.breakpoints.down('md')]: {
                        fontSize: 'calc(12px + 4 * (100vw / 1280))',
                        textDecoration: 'none'
                    },
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                    textOverflow: 'ellipsis'
                }
            },
            [theme.breakpoints.down('md')]: {
                '&:after': {
                    position: 'absolute',
                    bottom: '-16px',
                    left: 0,
                    content: '""',
                    width: '100%',
                    height: '0.8px',
                    background: 'linear-gradient(90deg, rgba(243, 243, 243, 0.15) -4.72%, rgba(204, 204, 204, 0.8) 47.81%, rgba(248, 248, 248, 0.15) 104.92%)'
                }
            }
        },
        '& div.post-description': {
            position: 'relative',
            marginBottom: '36px',
            '& p.MuiTypography-button': {
                marginBottom: 15
            },
            '& h6.description': {
                fontSize: '1.125rem',
                paddingRight: '8vw',
                [theme.breakpoints.down('md')]: {
                    fontSize: 'calc(14px + 4 * (100vw / 1280))',
                    color: '#4E4E4E',
                    lineHeight: '1rem',
                    padding: 0
                }
            },
            '& > h6.MuiTypography-subtitle1': {
                display: 'flex',
                alignItems: 'center',
                lineHeight: '22px',
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
            '& > div:last-child': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '& > div': {
                    '& a': {
                        display: 'flex',
                        alignItems: 'center'
                    }
                }
            },
            [theme.breakpoints.down('md')]: {
                '&:after': {
                    position: 'absolute',
                    bottom: '-16px',
                    left: 0,
                    content: '""',
                    width: '100%',
                    height: '0.8px',
                    background: 'linear-gradient(90deg, rgba(243, 243, 243, 0.15) -4.72%, rgba(204, 204, 204, 0.8) 47.81%, rgba(248, 248, 248, 0.15) 104.92%)'
                }
            }
        },
        '& div.post-category': {
            marginBottom: '40px',
            '& > p.MuiTypography-button': {
                marginBottom: 22
            },
            '& > div': {
                background: '#F2F2F2',
                borderRadius: '10px',
                display: 'inline-block',
                padding: '10px 21px',
                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '1.125rem',
                    '& > span': {
                        color: '#675EAA',
                        fontWeight: '600'
                    }
                }
            }
        },
        '& div.started-price': {
            marginBottom: '40px',
            '& p.MuiTypography-button': {
                marginBottom: '22px'
            },
            '& span': {
                display: 'inline-block',
                padding: '10px 30px',
                background: '#F2F2F2',
                borderRadius: '10px'
            }
        },
        '& div.post-parameters': {
            position: 'relative',
            marginBottom: '35px',
            '& p.MuiTypography-button': {
                marginBottom: '30px'
            },
            '& > ul > div.params-list': {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                paddingBottom: '5px',
                '& > h6.MuiTypography-subtitle1': {
                    display: 'inline-block'
                },
                '& > ul': {
                    padding: 0,
                    listStyle: 'none'
                }
            },
            '& > ul': {
                margin: 0,
                [theme.breakpoints.down('md')]: {
                    padding: 0
                },
                '& > li': {
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 20,
                    paddingBottom: '5px',
                    [theme.breakpoints.down('sm')]: {
                        display: 'block',
                        marginBottom: '16px',
                        paddingBottom: 0
                    },
                    '&:last-child': {
                        margin: 0
                    },
                    '& h6': {
                        '&.key': {
                            [theme.breakpoints.up('md')]: {
                                width: '30%'
                            },
                            [theme.breakpoints.down('md')]: {
                                fontSize: 'calc(14px + 4 * (100vw / 1280))'
                            },
                            [theme.breakpoints.down('sm')]: {
                                paddingBottom: '8px',
                                color: '#BDBDBD'
                            },
                            fontSize: '1.125rem',
                            color: '#838383'
                        },
                        '&.value': {
                            [theme.breakpoints.down('md')]: {
                                fontSize: 'calc(14px + 4 * (100vw / 1280))'
                            }
                        }
                    }
                }
            },
            '& > div': {
                display: 'flex',
                margin: '0 0 20px 0',
                padding: '0 30px',
                '& > div:first-child': {
                    width: '33%'
                },
                '& > div': {
                    width: '100%'
                }
            },
            '& > div:last-child': {
                margin: 0,
                '& div:last-child': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    '& a': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }
                }
            },
            [theme.breakpoints.down('md')]: {
                '&:after': {
                    position: 'absolute',
                    bottom: '-16px',
                    left: 0,
                    content: '""',
                    width: '100%',
                    height: '0.8px',
                    background: 'linear-gradient(90deg, rgba(243, 243, 243, 0.15) -4.72%, rgba(204, 204, 204, 0.8) 47.81%, rgba(248, 248, 248, 0.15) 104.92%)'
                }
            }
        },
        '& div.MuiSnackbar-root': {
            position: 'absolute',
            marginTop: '-10px'
        },
        '& div.btn-follow': {
            boxShadow: '0px -1px 4px rgba(0, 0, 0, 0.04), 0px 1px 4px rgba(0, 0, 0, 0.04)',
            marginBottom: '36px',
            '& button': {
                width: '100%',
                borderRadius: '3px',
                background: '#F7F7F7',
                fontSize: 'calc(14px + 2 * (100vw / 1280))',
                marginTop: '-10px',
                '& svg': {
                    marginRight: '10px',
                    '& path': {
                        fill: '#F2C94C'
                    }
                }
            }
        }
    },
    icons: {
        width: '20px'
    },
    downArrow: {
        height: '15px',
        marginLeft: '5px'
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    modalBody: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 10,
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        padding: '25px 15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > h6.MuiTypography-h6': {
            fontWeight: 600,
            marginBottom: 15,
            textAlign: 'center'
        },
        '& > nav.MuiList-root': {
            width: 490,
            '& > div.MuiListItem-button': {
                '& > div.MuiListItemText-root': {
                    margin: 0
                },
                '&:last-child': {
                    marginBottom: 15
                },
                marginBottom: 5,
                border: '1px solid #E0E0E0',
                borderRadius: 5,
                padding: '15px 0 15px 15px'
            }
        },
        '& > div.textarea': {
            width: '100%',
            '& > h6.MuiTypography-subtitle1': {
                marginBottom: 5
            },
            '& p.MuiFormHelperText-contained': {
                margin: 0,
                marginTop: 5,
                textAlign: 'end',
                color: '#838383',
                fontSize: '0.875rem'
            }
        },
        '& > button.MuiButtonBase-root': {
            width: '200px',
            background: '#675EAA',
            borderRadius: '5px',
            '& > h6.MuiTypography-subtitle1': {
                color: '#fff'
            }
        }
    },
    snackbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.primary.adBgColor,
        borderRadius: '100px',
        padding: 5,
        '& > span': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 36,
            height: 36,
            background: theme.palette.background.paper,
            borderRadius: '100%',
            '& > svg': {
                '& > defs > linearGradient': {
                    '& stop': {
                        stopColor: '#F2C94C'
                    }
                }
            }
        },
        '& > h6.MuiTypography-h6': {
            color: '#fff'
        },
        '& > h6.MuiTypography-h6, span': {
            marginRight: 50
        }
    },
    adBanner: {
        marginTop: '50px',
        '& > div.right-banner': {
            width: '100%',
            height: '470px',
            borderRadius: '7px',
            backgroundColor: '#C0C0C0'
        }
    }
}));
