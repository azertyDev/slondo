import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(({palette}) => ({
    root: {
        width: '725px',
        borderRadius: '6px',
        backgroundColor: 'white',
    },
    modalBodyInfo: {
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
        backgroundImage: 'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("./img/modal-image.jpg")',
        backgroundSize: 'cover',
        borderTopLeftRadius: '6px',
        borderBottomLeftRadius: '6px',
        '& h6.MuiTypography-root': {
            lineHeight: '14px',
            color: '#fff'
        },
        '& > div, & > div > div': {
            display: 'flex',
        },
        '& > div': {
            flexDirection: 'column',
            justifyContent: 'space-around',
            height: '100%',
            '& > div': {
                alignItems: 'center',
                '& > img': {
                    marginRight: '15px'
                }
            }
        }
    },
    authRegForm: {
        height: '540px',
        padding: '30px 15px 0'
    },
    welcome: {
        '& > h6': {
            textAlign: 'center'
        }
    },
    tabsContainer: {
        marginTop: '25px'
    },
    tabs: {
        width: '100%',
        '& button.MuiButtonBase-root': {
            width: '50%',
            borderBottom: '1px solid rgba(0,0,0,.23)'
        }
    },
    tabPanels: {
        marginTop: '20px'
    },
    signPanel: {
        '& a': {
            textDecoration: 'none',
            '& > p': {
                margin: '10px 0',
                textAlign: 'end',
                color: palette.primary.main,
            }
        }
    },
    forgetPswd: {
        display: 'flex',
        justifyContent: 'flex-end',
        marginTop: '10px'
    },
    modalSignButton: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '20px',
        '& button.MuiButtonBase-root': {
            color: '#fff',
            background: "linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)",
            borderRadius: '3px',
            padding: '15px 0',
            width: '50%',
        }
    },
    agreement: {
        marginTop: '20px',
        textAlign: 'center',
        '& > a': {
            color: palette.primary.main,
            textDecoration: 'none'
        }
    },
    errorInput: {
        '& fieldset': {
            borderColor: `${palette.primary.error}!important`
        }
    },
    errorTxt: {
        height: '20px',
        margin: '5px',
        color: palette.primary.error
    }
}))
