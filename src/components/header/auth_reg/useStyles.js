import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '725px',
        height: '530px',
        borderRadius: '6px',
        '& > div.MuiGrid-container': {
            height: '100%'
        },
        '& div.info-block': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
            height: '100%',
            padding: '15px',
            backgroundImage: 'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("./img/modal-image.jpg")',
            backgroundSize: 'cover',
            borderTopLeftRadius: '6px',
            borderBottomLeftRadius: '6px',
            '& h6.MuiTypography-root': {
                lineHeight: '14px',
                color: '#fff'
            },
            '& > div': {
                display: 'flex',
                alignItems: 'center',
                '& > img': {
                    minWidth: '40px',
                    height: '40px',
                    marginRight: '15px'
                }
            }
        },
        '& div.auth-reg-block': {
            height: '100%',
            backgroundColor: theme.palette.primary.white,
            borderTopRightRadius: '6px',
            borderBottomRightRadius: '6px',
            '& > div.close-btn-wrapper': {
                display: 'flex',
                justifyContent: 'flex-end',
                '& > button.MuiIconButton-root': {
                    margin: '4px'
                }
            },
            '& > div.welcome-block > h6': {
                textAlign: 'center'
            },
            '& > div.auth-form': {
                marginBottom: '5px'
            }
        }
    }
}))
