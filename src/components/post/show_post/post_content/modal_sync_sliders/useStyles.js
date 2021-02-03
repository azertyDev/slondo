import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    modal: {
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
    },
    root: {
        position: 'relative',
        marginTop: '20px',
        '& > button.MuiIconButton-root': {
            position: 'absolute',
            top: 0,
            right: '60px',
            '&:hover path': {
                fill: '#EB5757'
            }
        },
        '& > h6.title': {
            color: '#fff',
            fontWeight: '600',
            textAlign: 'center',
        }
    },
    firstSlider: {
        margin: '10px 0',
        '& div.slick-slider': {
            '& button.slick-prev': {
                left: '50px'
            },
            '& button.slick-next': {
                right: '50px'
            },
            '& div.slick-slide': {
                display: 'flex',
                justifyContent: 'center',
                '& figure.image-zoom': {
                    '& img.iiz__img': {
                        height: '580px',
                        objectFit: 'contain'
                    },
                    '& span.iiz__hint': {
                        display: 'none'
                    }
                }
            }
        }
    },
    secondSlider: {
        '& div.slick-slide': {
            maxWidth: '255px !important',
            padding: '0 2.5px',
            '& img': {
                objectFit: 'cover',
                height: `150px !important`,
                '&:hover': {
                    cursor: 'pointer',
                }
            }
        },
        '& > div.slider-counter': {
            display: 'flex',
            width: '90px',
            justifyContent: 'space-between',
            alignItems: 'center',
            background: '#000',
            borderRadius: '100px',
            margin: '15px auto 0',
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
                    borderBottomLeftRadius: '0'
                },
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        }
    }
}));
