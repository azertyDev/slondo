import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
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
            justifyContent: 'space-around',
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
                    marginRight: '15px'
                }
            }
        },
        '& div.auth-reg-block': {
            height: '100%',
            '& > div': {
                borderTopRightRadius: '6px',
                borderBottomRightRadius: '6px',
            }
        }
    }
}))
