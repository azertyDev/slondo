import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '725px',
        height: '530px',
        borderRadius: '6px',
        margin: '40px auto',
        '& > div.MuiGrid-container': {
            height: '100%'
        },
        '& div.info-block': {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '45px 0',
            backgroundImage: 'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("/img/modal-image.jpg")',
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
                height: '90px',
                padding: '20px',
                '& > img': {
                    minWidth: '40px',
                    height: '40px',
                    marginRight: '15px'
                },
                '& > h6.MuiTypography-subtitle2': {
                    lineHeight: '17px',
                }
            }
        },
        '& div.auth-reg-block': {
            backgroundColor: theme.palette.primary.white,
            borderTopRightRadius: '6px',
            borderBottomRightRadius: '6px',
            position: 'relative',
            padding: '25px 16px',
            height: '100%',
            '& > div.close-btn-wrapper': {
                position: 'absolute',
                right: '-10px',
                top: '-10px',
                background: '#EB5757',
                borderRadius: '100%',
                padding: '6px',
                width: '24px',
                height: '24px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                '& > button.MuiIconButton-root': {
                    padding: '5px',
                    '& svg > path': {
                        // fill: '#EB5757',
                    }
                },
                '&:hover': {
                    cursor: 'pointer',
                    // background: '#fff'
                }
            },
            '& > div.welcome-block > h6.MuiTypography-subtitle1': {
                color: 'rgba(49, 49, 49, 0.6)',
                paddingRight: '100px',
                marginTop: '8px'
            },
            '& > div.auth-form': {
                marginBottom: '5px'
            }
        }
    }
}))
