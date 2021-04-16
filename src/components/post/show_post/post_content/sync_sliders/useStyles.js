import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        filter: 'drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.35))',
        '& button': {
            '&.slick-prev': {
                left: '25px'
            },
            '&.slick-next': {
                right: '25px'
            }
        }
    },
    firstSlider: {
        position: 'relative',
        '& div.icon-buttons': {
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            padding: '20px 25px 0',
            [theme.breakpoints.up('lg')]: {
                justifyContent: 'flex-end'
            },
            [theme.breakpoints.down('xs')]: {
                padding: '10px 10px 0px'
            },
            '& button': {
                width: 50,
                height: 50,
                background: '#fff',
                borderRadius: '100%',
                [theme.breakpoints.down('md')]: {
                    background: 'rgba(0, 0, 0, .6)'
                },
                [theme.breakpoints.down('xs')]: {
                    width: '32px',
                    height: '32px'
                },
                '&:hover': {
                    background:
                        'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                    '& svg': {
                        transform: 'scale(1.1)',
                        transition: 'transform .3s cubic-bezier(.5,0,.5,3)',
                        '& path': {
                            fill: '#fff'
                        }
                    }
                }
            },
            '& svg': {
                width: 30,
                height: 'auto',
                [theme.breakpoints.down('xs')]: {
                    width: '19px'
                },
                '& path': {
                    fill: '#8E62C2',
                    [theme.breakpoints.down('md')]: {
                        fill: '#fff'
                    }
                }
            },

            '& div.share-favo-btns': {
                [theme.breakpoints.up('lg')]: {
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'space-between'
                },
                '& .favorite-btn': {
                    marginRight: '13px',
                    [theme.breakpoints.down('xs')]: {
                        marginRight: '8px'
                    }
                }
            }
        },
        '& div.slick-track': {
            display: 'flex',
            justifyContent: 'center',
            '& div.slick-slide': {
                margin: '0 1px',
                '& img': {
                    width: 'auto !important',
                    height: '518px',
                    objectFit: 'contain',
                    cursor: 'pointer',
                    [theme.breakpoints.down('md')]: {
                        height: '260px'
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
            maxWidth: '230px !important',
            padding: '0 2.5px',
            '& > div, & img': {
                height: `120px !important`,
                objectFit: 'cover',
                '&:hover': {
                    cursor: 'pointer'
                }
            }
        }
    }
}));
