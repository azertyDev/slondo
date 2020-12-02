import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(({palette}) => ({
    root: {
        '& > div.form-block': {
            '& div.tabs-container': {
                height: '405px',
                '& div.tabs': {
                    width: '100%',
                    '& div.MuiTabs-flexContainer': {
                        justifyContent: 'center'
                    },
                    '& button.MuiButtonBase-root': {
                        width: '50%',
                        borderBottom: '1px solid rgba(0,0,0,.23)'
                    }
                },
                '& div.tab-panels': {
                    '& > div.sign-panel > form, & > div.reg-panel > form': {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        '& > div': {
                            marginTop: '15px',
                            '&:nth-child(3), &:nth-child(4)': {
                                marginTop: 0,
                            },
                            '& > div': {
                                marginTop: 10,
                            },
                            '& label': {
                                marginLeft: 5,
                            },
                            '& input.MuiOutlinedInput-input': {
                                height: '38px',
                                padding: '0 16px'
                            }
                        },
                    },
                    '& > div.sign-panel > form': {

                        '& a': {
                            textDecoration: 'none',
                        },
                    },
                    '& > div.reg-panel': {
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        '& > form': {
                            height: '280px',
                        }
                    }
                }
            }
        },
        '& div.forget-password': {
            display: 'flex',
            justifyContent: 'flex-end',
            '& > a > p.MuiTypography-body2': {
                fontSize: '14px',
                color: palette.primary.main,
            }
        }
    },
    modalBtns: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '30px !important',
        '& button.signin-btn, & button.reg-btn': {
            color: '#fff',
            background: "linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)",
            borderRadius: '3px',
            padding: '15px 0',
            width: '58.2%',
            borderStyle: 'none'
        }
    },
    agreement: {
        textAlign: 'center',
        '& > p ': {
            fontSize: '0.875rem',
            lineHeight: '17px',
            padding: '20px',
            '& > a': {
                color: palette.primary.main,
                textDecoration: 'none'
            }
        }
    },
}))
