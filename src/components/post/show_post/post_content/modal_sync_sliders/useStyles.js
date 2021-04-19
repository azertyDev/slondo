import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    modal: {
        '& > div:first-child': {
            backgroundColor: 'rgba(0, 0, 0, 0.97) !important'
        }
    },
    root: {
        '& div.close-title': {
            padding: '0 7px'
        },
        marginTop: '20px',
        '& div.close-wrapper': {
            display: 'flex',
            justifyContent: 'flex-end',
            '& button.MuiIconButton-root': {
                '&:hover path': {
                    fill: '#eb5757'
                }
            }
        },
        '& h6.title': {
            color: '#fff',
            fontWeight: '600',
            textAlign: 'center'
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
                    '& img.iiz__img, & img.iiz__zoom-img': {
                        visibility: 'inherit'
                    },
                    '& img.iiz__img': {
                        width: ({isMdDown}) => isMdDown ? '100%' : 'auto',
                        height: '580px',
                        objectFit: 'contain'
                    },
                    '& span.iiz__hint': {
                        display: 'none'
                    }
                }
            }
        },
        '& .slick-dotted.slick-slider': {marginBottom: '30px'},
        '& .slick-dots': {
            position: 'absolute',
            bottom: '10px',
            display: 'block',
            width: '100%',
            padding: '0',
            margin: '0',
            listStyle: 'none',
            textAlign: 'center'
        },
        '& .slick-dots li': {
            position: 'relative',
            display: 'inline-block',
            width: '10px',
            height: '10px',
            margin: '0 5px',
            padding: '0',
            cursor: 'pointer',
            transition: 'width 0.3s ease-in-out'
        },
        '& .slick-dots li button': {
            fontSize: '0',
            lineHeight: 0,
            display: 'block',
            width: '10px',
            height: '10px',
            padding: '5px',
            cursor: 'pointer',
            color: 'transparent',
            border: '0',
            outline: 'none',
            background: 'transparent'
        },
        '& .slick-dots li button:hover, .slick-dots li button:focus': {
            outline: 'none'
        },
        '& .slick-dots li button:hover:before, .slick-dots li button:focus:before': {
            opacity: 1
        },
        '& .slick-dots li button:before': {
            fontFamily: '"slick"',
            fontSize: '6px',
            lineHeight: '20px',
            position: 'absolute',
            top: '0',
            left: '0',
            width: '10px',
            height: '10px',
            content: '" "',
            textAlign: 'center',
            background: '#fff',
            borderRadius: '50%',
            opacity: 0.4,
            color: 'black',
            WebkitFontSmoothing: 'antialiased',
            MozOsxFontSmoothing: 'grayscale'
        },
        '& .slick-dots li.slick-active button:before': {opacity: '1', background: '#2196F3'}
    },
    secondSlider: {
        '& div.slick-slide': {
            maxWidth: '255px !important',
            padding: '0 2.5px',
            '& img': {
                objectFit: 'cover',
                height: `150px !important`,
                '&:hover': {
                    cursor: 'pointer'
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
                color: '#fff'
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
