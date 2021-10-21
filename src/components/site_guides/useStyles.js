import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(({breakpoints, palette}) => ({
    root: {
        marginBottom: 100,
        '& header.MuiAppBar-root': {
            background: '#fafafa',
            padding: '10px 0'
        },
        '& .info': {
            margin: '65px 0 0 60px',
            [breakpoints.down('xs')]: {
                margin: '30px 0 0 0px'
            },
            '& .title': {
                marginBottom: '24px',
                [breakpoints.down('xs')]: {
                    fontSize: '1.2rem',
                    textAlign: 'center'
                }
            }
        },
        '& div.tariff-info': {
            '& > div': {
                '&:first-child': {
                    backgroundColor: '#FFDC40',
                    [breakpoints.down('xs')]: {
                        padding: '15px 20px',
                        width: '100%',
                        '& h4': {
                            fontSize: '1.4rem'
                        },
                        '& h3': {
                            fontSize: '2.5rem',
                            '& span': {
                                fontSize: '1rem'
                            }
                        }
                    }
                },
                '&:last-child': {
                    backgroundColor: '#F2F2F2',
                    [breakpoints.down('xs')]: {
                        width: '100%',
                        padding: '25px 20px',
                        '& h5': {
                            fontSize: '1.125rem'
                        },
                        '& h4': {
                            fontSize: '1.5rem'
                        },
                    }
                }
            },
            '& .tariff': {
                fontWeight: '600',
                '& span': {
                    fontSize: '1.625rem'
                }
            }
        },
        '& div.contact-phone': {
            margin: '65px 0 0 60px',
            [breakpoints.down('xs')]: {
                margin: '65px 0 0 0px',
                '& p': {
                    fontSize: '1rem'
                },
                '& h5': {
                    padding: '0 20px',
                    fontSize: '1.2rem'
                },
                '& button.MuiButtonBase-root': {
                    padding: '15px 35px'
                }
            }
        },
        '& div.phone-info': {
            borderRadius: '10px',
            boxShadow: '0px 1.3779762983322144px 2.7559525966644287px 0px #00000026',
            '& > div': {
                '&:first-child': {
                    backgroundColor: '#F2F2F2'
                },
                '&:last-child': {
                    backgroundColor: '#FFDC40'
                }
            }
        },
        '& div.partner': {
            '& img': {
                width: '100%',
                visibility: 'hidden'
            },
            background: 'url("/img/yandex_1.png")',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center'
        },
        '& div.preview': {
            padding: '18px',
            [breakpoints.down('sm')]: {
                background: 'none',
                '& img': {
                    width: 'inherit'
                }
            }
        },
        '& div.paper': {
            background: '#fff',
            marginBottom: 30,
            borderRadius: 10,
            padding: '18px 18px 0 18px',
            [breakpoints.down('sm')]: {
                '& h3': {
                    fontSize: '1.125rem'
                },
                '& h5': {
                    fontSize: '0.875rem'
                },
                '& img': {
                    // width: 'inherit'
                }
            }
        },
        '& .tabs': {
            '& .MuiTypography-subtitle1': {
                borderBottom: '1px solid currentColor'
            },
            '& .Mui-selected': {
                background: '#FFFFFF',
                borderRadius: '100px',
                '& .MuiTypography-subtitle1': {
                    borderBottom: 'none',
                    color: '#845CAB'
                }
            }
        },
        '& .fw600': {
            fontWeight: '700'
        },
        '& .mb-16': {
            marginBottom: 16
        }
    },
    link: {
        textDecoration: 'none',
        color: palette.common.activeTab,
        display: 'inline-block',
        '&:hover': {
            textDecoration: 'underline'
        },
        '& p': {
            color: palette.common.activeTab
        }
    },
    phoneWrapper: {
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
        textDecoration: 'none',
        background: '#f0f0f0',
        borderRadius: 10,
        cursor: 'pointer',
        '& h5': {
            flex: 1,
            padding: '0 25px',
            textAlign: 'center'
        },
        '& button.MuiButtonBase-root': {
            padding: '10px 35px',
            borderRadius: '0px 10px 10px 0px',
            background: '#FFDC40',
            '& svg': {
                width: '20',
                height: '20',
                '& path': {
                    fill: '#000000'
                }
            }
        }
    }
}))
