import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div.MuiGrid-container': {
            height: '100%'
        },
        '& .MuiDialog-paperFullScreen': {
            display: 'flex',
            justifyContent: 'center'
        },
        '& div.info-block': {
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            padding: '45px 0',
            backgroundImage: 'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("/img/modal-image.jpg")',
            backgroundSize: 'cover',
            '& svg': {
                marginRight: 20,
                width: '70px',
                height: '40px'
            },
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
                    fontWeight: 400
                }
            }
        },
        '& div.auth-reg-block': {
            backgroundColor: theme.palette.primary.white,
            borderTopRightRadius: '10px',
            borderBottomRightRadius: '10px',
            position: 'relative',
            padding: '19px 16px',
            [theme.breakpoints.down('sm')]: {
                padding: '50px 16px 0',
                height: '500px'
            },
            [theme.breakpoints.down('xs')]: {
                height: '548px'
            },
            height: '100%',
            '& > div.welcome-block > h6.MuiTypography-subtitle1': {
                color: 'rgba(49, 49, 49, 0.6)',
                paddingRight: '100px',
                marginTop: '8px'
            }
        },
        '& div.close-btn-wrapper': {
            position: 'absolute',
            right: '15px',
            top: '15px',
            borderRadius: '100%',
            padding: '6px',
            width: '24px',
            height: '24px',
            zIndex: '1000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            '& > button.MuiIconButton-root': {
                padding: '5px',
                '& span > svg > path': {
                    fill: '#494A61'
                }
            },
            '&:hover': {
                cursor: 'pointer'
            }
        },
        '& div.rec-pass': {
            justifyContent: 'space-between',
            '& button': {
                width: '49%',
                '&:first-child': {
                    color: '#4E4E4E',
                    background: '#FFFFFF',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)'
                },
                '&:last-child': {
                    fontSize: '13px'
                }
            }
        },
        // Adaptive =============================================================================
        '& div.welcome-block > h6': {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'center',
                fontSize: '22px',
                lineHeight: '24px'
            }
        }
    }
}));
