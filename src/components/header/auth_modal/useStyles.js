import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(({breakpoints, palette}) => ({
    root: {
        '& > div.MuiGrid-container': {
            height: '100%'
        },
        '& .MuiDialog-paperFullScreen': {
            display: 'flex',
            justifyContent: 'center'
        },
        '& div.info-block': {
            display: 'flex',
            height: '100%',
            padding: '45px 20px',
            backgroundImage: 'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("/img/modal-image.jpg")',
            backgroundSize: 'cover',
            '& h6.MuiTypography-subtitle2': {
                color: '#fff',
                fontWeight: 400,
                lineHeight: '17px'
            }
        },
        '& div.auth-reg-block': {
            position: 'relative',
            height: '100%',
            padding: '19px 16px',
            backgroundColor: palette.primary.white,
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            [breakpoints.down('xs')]: {
                height: '548px'
            },
            [breakpoints.down('sm')]: {
                padding: '50px 16px 0',
                height: '500px'
            },
            '& > div.welcome-block > h6': {
                marginTop: '8px',
                [breakpoints.down('sm')]: {
                    textAlign: 'center',
                    fontSize: '22px',
                    lineHeight: '24px'
                }
            }
        },
        '& div.rec-pass': {
            justifyContent: 'space-between',
            '& button': {
                width: '49%',
                '&:first-child': {
                    color: '#4E4E4E',
                    background: '#FFFFFF',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)'
                },
                '&:last-child': {
                    fontSize: '13px'
                }
            }
        }
    },
    authReg: {
        [breakpoints.down('sm')]: {
            marginBottom: 0
        },
        '& p.error-text': {
            height: '14px'
        },
        '& div.formik-num-pass': {
            '& > div:first-child': {
                marginBottom: '10px'
            },
            '& > div:nth-child(2)': {
                marginBottom: '5px'
            },
            [breakpoints.down('sm')]: {
                '& div.forget-password': {
                    marginTop: '6px'
                }
            }
        },
        '& div.form-block': {
            '& div.server-error': {
                margin: '10px 0',
                '& p': {
                    textAlign: 'center',
                    fontSize: '0.875rem'
                }
            },
            '& div.tabs-container': {
                '& div.tabs': {
                    width: '100%',
                    marginBottom: '15px',
                    '& div.MuiTabs-flexContainer': {
                        justifyContent: 'center'
                    },
                    '& button.MuiButtonBase-root': {
                        width: '50%',
                        borderBottom: '1px solid rgba(0,0,0,.23)',
                        '& h6.MuiTypography-subtitle1': {
                            fontSize: '1rem'
                        }
                    }
                },
                '& div.tab-panels': {
                    '& > div.sign-panel, & > div.reg-panel': {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        '& auth-form, & reg-form, & phone-form, & code-confirm-form, & pass-confirm-form,': {
                            '& > div': {
                                marginTop: '15px',
                                '& input.MuiOutlinedInput-input': {
                                    height: '38px',
                                    padding: '3px 16px'
                                },
                                '& div.MuiOutlinedInput-root': {
                                    borderRadius: '3px'
                                }
                            }
                        }
                    },
                    '& > div.sign-panel > form': {
                        '& a': {
                            textDecoration: 'none'
                        }
                    },
                    '& > div.reg-panel': {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        '& > form': {
                            height: '280px'
                        }
                    }
                }
            }
        },
        '& div.forget-password': {
            display: 'flex',
            justifyContent: 'flex-end',
            '& > h6': {
                fontSize: '15px',
                color: palette.primary.main
            }
        },
        '& div.formik-code-confirm': {
            '& > div': {
                [breakpoints.down('sm')]: {
                    marginBottom: '6px'
                }
            }
        },
        '& div.auth-btns': {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px !important',
            [breakpoints.down('sm')]: {
                marginBottom: '17px'
            },
            '& button': {
                background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                borderRadius: '3px',
                padding: '15px 0',
                width: '50%',
                margin: '0 5px',
                borderStyle: 'none',
                letterSpacing: '0.25px',
                [breakpoints.down('xs')]: {
                    width: '100%',
                    fontSize: '12px'
                },
                '& h6': {
                    color: '#fff'
                }
            },
            '& .cancel-btn': {
                boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
                background: '#fff',
                color: '#000'
            }
        },
        '& .resendTxt': {
            paddingTop: '2px',
            color: 'black',
            fontWeight: '400',
            opacity: '0.4'
        },
        '& div.agreements-txt': {
            textAlign: 'center',
            marginTop: '14px',
            [breakpoints.down('sm')]: {
                marginTop: 0,
                marginBottom: '24px'
            },
            '& > p ': {
                fontSize: '0.875rem',
                lineHeight: '16px',
                padding: '0 20px',
                [breakpoints.down('sm')]: {
                    padding: 0
                },
                '& > a': {
                    color: palette.primary.main,
                    textDecoration: 'none'
                }
            }
        }
    },
    regHint: {
        display: 'flex',
        alignItems: 'center',
        padding: '9px',
        background: '#7DBCF6',
        borderRadius: '4px',
        [breakpoints.down('xs')]: {
            padding: 10
        },
        '& svg': {
            width: 40
        },
        '& p': {
            marginLeft: 14,
            color: '#FFFFFF'
        }
    },
    closeBtn: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
        '& path': {
            fill: '#28293D'
        }
    }
}));