import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(({palette}) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        backgroundColor: palette.primary.white,
        '& > div.form-block': {
            padding: '0 15px',
            '& div.tabs-container': {
                height: '405px',
                marginTop: '30px',
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
                        justifyContent: 'space-between'
                    },
                    '& > div.sign-panel > form': {
                        height: '280px',
                        '& a': {
                            textDecoration: 'none',
                            '& > p': {
                                margin: '10px 0',
                                textAlign: 'end',
                                color: palette.primary.main,
                            }
                        }
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
        }
    },
    modalBtns: {
        display: 'flex',
        justifyContent: 'center',
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
        margin: '18px 5px',
        textAlign: 'center',
        '& > p > a': {
            color: palette.primary.main,
            textDecoration: 'none'
        }
    },

    // Errors
    errorInput: {
        '& fieldset': {
            borderColor: `${palette.primary.error}!important`
        }
    },
    errorTxt: {
        height: '15px',
        margin: '5px',
        color: palette.primary.error
    }
}))
