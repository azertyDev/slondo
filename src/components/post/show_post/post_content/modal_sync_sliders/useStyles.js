import { makeStyles } from '@material-ui/core/styles';

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
            right: 0,
            '&:hover': {
                '& path': {
                    fill: '#EB5757',
                },
            },
        },
        '& > h6.title': {
            color: '#fff',
            fontWeight: '600',
            textAlign: 'center',
        },
    },
    firstSlider: {
        margin: '10px 0',
        '& > div.slick-slider': {
            '& div.slick-list': {
                width: '80%',
                margin: '0 auto 0 auto',
                '& div.slick-slide': {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '627px',
                    '& figure.image-zoom': {
                        '& img.iiz__img': {
                            maxHeight: '627px',
                            objectFit: 'contain',
                        },
                        '& span.iiz__hint': {
                            display: 'none',
                        },
                    },
                },
            },
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
                },
            },
        },
    },
    secondSlider: {
        '& div.slick-list': {
            width: '85%',
            margin: '0 auto 0 auto',
        },
        '& div.slick-track': {
            margin: 'inherit',
        },
        '& div.slick-slide': {
            width: 'auto !important',
            '& > div': {
                padding: '0 2.5px',
            },
            '& img': {
                objectFit: 'cover',
                height: `150px !important`,
                width: '255px !important',
                '&:hover': {
                    cursor: 'pointer',
                },
            },
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
                },
            },
        },
    },
}));
