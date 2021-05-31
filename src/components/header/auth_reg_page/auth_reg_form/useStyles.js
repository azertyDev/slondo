import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(({palette, breakpoints}) => ({
    root: {
        [breakpoints.down('sm')]: {},
        marginBottom: '20px',
        '& div.form-block': {
            '& div.server-error': {
                margin: '20px 0',
                '& p': {
                    textAlign: 'center',
                    fontSize: '0.875rem'
                }
            },
            '& div.tabs-container': {
                '& div.tabs': {
                    width: '100%',
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
                                    padding: '0 16px'
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
        '& div.auth-btns': {
            display: 'flex',
            justifyContent: 'center',
            marginTop: '30px !important',
            '& button': {
                color: '#fff',
                background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                borderRadius: '3px',
                padding: '15px 0',
                width: '58.2%',
                borderStyle: 'none',
                letterSpacing: '0.25px'
            }
        },
        '& div.agreements-txt': {
            textAlign: 'center',
            '& > p ': {
                fontSize: '0.875rem',
                lineHeight: '16px',
                padding: '0 20px',
                '& > a': {
                    color: palette.primary.main,
                    textDecoration: 'none'
                }
            }
        }
    }

}));
