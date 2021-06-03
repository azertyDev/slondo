import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(({palette, breakpoints}) => ({
        root: {
            [breakpoints.down('sm')]: {
                marginBottom: 0
            },
            marginBottom: '20px',
            '& div.form-block': {
                '& div.server-error': {
                    margin: '20px 0',
                    [breakpoints.down('sm')]: {
                        margin: '30px 0'
                    },
                    '& p': {
                        textAlign: 'center',
                        fontSize: '0.875rem'
                    }
                },
                '& div.tabs-container': {
                    '& div.tabs': {
                        width: '100%',
                        [breakpoints.down('sm')]: {
                            marginBottom: '15px'
                        },
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
            [breakpoints.down('sm')]: {
                '& div.formik-num-pass': {
                    '& > div:first-child': {
                        marginBottom: '30px'
                    }
                },
                '& div.forget-password': {
                    marginTop: '6px'
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
                    width: '58.2%',
                    borderStyle: 'none',
                    letterSpacing: '0.25px',
                    '& h6': {
                        color: '#fff'
                    }
                }
            },
            '& .resendTxt': {
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
        }

    }))
;
