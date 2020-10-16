import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    authRegMenu: {
        width: '100%',
        height: '100%',
        background: 'url(img/modal_auth_sm_bg.svg)',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        '& div.close-modal-block': {
            position: 'absolute',
            display: 'flex',
            justifyContent: 'flex-end',
            width: '100%',
            '& > button img': {
                width: '20px'
            }
        },
        '& div.welcome-block': {
            color: theme.palette.primary.black,
            width: '60%',
            marginLeft: '10%',
            paddingTop: '10px',
            '& > h6': {
                fontSize: '6.5vw',
                fontWeight: 600
            }
        },
        '& > div.auth-reg-btn': {
            width: '226px',
            margin: '15% auto 0',
            '& > button': {
                padding: '10px',
                color: theme.palette.primary.black,
                backgroundColor: '#FFF'
            }
        },
        '& > div.slider-block': {
            marginTop: '30px'
        }
    }
}))
