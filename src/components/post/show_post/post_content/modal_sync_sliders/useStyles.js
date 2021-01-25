import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
    },
    root: {
        position: 'relative',
        marginTop: '20px',
        '& button': {
            '&.slick-prev': {
                left: '25px',
            },
            '&.slick-next': {
                right: '25px',
            }
        },
        '& > h6.title': {
            color: '#fff',
            fontWeight: '600',
            textAlign: 'center',
        }
    },
    firstSlider: {
        width: '100%',
        marginTop: '10px',
        '& div.slick-list': {
            width: '80%',
            margin: '0 auto 0 auto',
        },
        '& div.slick-slide img': {
            width: `100% !important`,
            height: '518px',
            objectFit: 'contain',
        },
        '& > div.slick-slider div.slick-slide': {
            marginRight: 5,
        },
        '& a.overlay': {
            position: 'fixed',
            zIndex: '99',
            top: '0',
            left: '0',
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            textAlign: 'center',
            visibility: 'hidden',
            '& img': {
                maxWidth: '90%',
                maxHeight: '90%',
                width: 'auto',
                height: 'auto',
                transform: 'scale(0.95)',
                transition: 'transform .3s',
            },
            '&:target': {
                visibility: 'visible',
                outline: 'none',
                cursor: 'default',
                '& image': {
                    transform: 'scale(1)',
                }
            }
        }
    },
    secondSlider: {
        '& div.slick-list': {
            width: '80%',
            margin: '0 auto 0 auto',
        },
        '& div.slick-track': {
            margin: 'inherit',
        },
        '& div.slick-slide': {
            padding: '0 7.5px',
            '& > div, & img': {
                height: `150px !important`,
            },
            '& > div': {
                padding: '0 2.5px',
            },
            '& img': {
                objectFit: 'cover',
                '&:hover': {
                    cursor: 'pointer',
                },
            }
        },
        '& > div.slider-counter': {
            display: 'flex',
            width: '90px',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#000',
            borderRadius: '100px',
            margin: '30px auto 0 auto',
            '& > h6.MuiTypography-subtitle1': {
                textAlign: 'center',
                color: '#fff',
            },
            '& > button': {
                height: 30,
                background: 'none',
                color: '#fff',
                border: 'none',
                width: '20px',
                padding: 0,
                borderTopLeftRadius: '100px',
                borderBottomLeftRadius: '100px',
                '&:last-child': {
                    borderTopRightRadius: '100px',
                    borderBottomRightRadius: '100px',
                    borderTopLeftRadius: '0',
                    borderBottomLeftRadius: '0',
                },
                '&:hover': {
                    cursor: 'pointer',
                }
            }
        }
    }
}));
