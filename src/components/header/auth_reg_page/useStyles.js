import {makeStyles} from '@material-ui/core/styles';

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
            backgroundImage:
                'linear-gradient(rgba(0,0,0,.6), rgba(0,0,0,.6)), url("/img/modal-image.jpg")',
            backgroundSize: 'cover',
            borderTopLeftRadius: '10px',
            borderBottomLeftRadius: '10px',
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
                    padding: '5px'
                    
                },
                '&:hover': {
                    cursor: 'pointer'
                    // background: '#fff'
                }
            },
            '& > div.welcome-block > h6.MuiTypography-subtitle1': {
                color: 'rgba(49, 49, 49, 0.6)',
                paddingRight: '100px',
                marginTop: '8px'
            }
        }
    },
    //-----------------------> mobile < --------------------------------//
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
}));
