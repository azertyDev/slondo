import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    authForm: {
        width: '100%',
        height: '100%',
        '& div.btns-wrapper': {
            display: 'flex',
            justifyContent: 'space-between',
            '& > button.MuiIconButton-root': {
                margin: '4px'
            }
        }
    },
    authRegMenu: {
        width: '100%',
        height: '100%',
        background: 'url(img/modal_auth_sm_bg.svg) no-repeat',
        backgroundSize: 'cover',
        '& div.close-modal-block': {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            '& > button.MuiIconButton-root': {
                margin: '5px'
            }
        },
        '& div.welcome-block': {
            color: theme.palette.primary.black,
            width: '60%',
            marginTop: '10px',
            marginLeft: '10%',
            '& > h6.MuiTypography-h6': {
                fontSize: '6.5vw',
                fontWeight: 600
            }
        },
        '& div.auth-site-txt': {
            marginTop: '110px',
            color: theme.palette.primary.white,
            '& > h6.MuiTypography-subtitle1': {
                textAlign: 'center'
            }
        },
        '& > div.auth-reg-btn': {
            width: '226px',
            margin: '20px auto 0',
            '& > button': {
                padding: '10px',
                color: theme.palette.primary.black,
                backgroundColor: '#FFF'
            }
        },
        '& > div.slider-block': {
            marginTop: '30px'
        },
        '& > div.list-block': {
            margin: '20px 0',
            '& > div.MuiListItem-button': {
                backgroundColor: theme.palette.primary.white,
                borderBottom: `1px solid ${theme.palette.primary.gray}`,
                '& > h6.MuiTypography-subtitle1': {
                    color: theme.palette.primary.black,
                    fontWeight: 600
                }
            }
        }
    }
}))
