import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        [theme.breakpoints.down('md')]: {
            filter: 'drop-shadow(0px 1px 8px rgba(0, 0, 0, 0.35))'
        },
        '& button': {
            background: 'rgba(0, 0, 0, .6)',
            '&.slick-prev': {
                left: '25px',
                '& span': {
                    '&:before': {
                        background: '#fff'
                    },
                    '&:after': {
                        background: '#fff'
                    }
                }
            },
            '&.slick-next': {
                right: '25px',
                '& span': {
                    '&:before': {
                        background: '#fff'
                    },
                    '&:after': {
                        background: '#fff'
                    }
                }
            }
        },
        '& div.first-slider': {
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
                    background: 'rgba(0, 0, 0, 0.5)',
                    borderRadius: '100%',
                    padding: 0,
                    [theme.breakpoints.down('xs')]: {
                        width: '40px',
                        height: '40px'
                    },
                    '&.favorite-btn': {
                        background: ({isFavorite}) => isFavorite
                            ? 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)'
                            : 'rgba(0, 0, 0, 0.5)',
                        '& svg': {
                            width: 30,
                            height: 'auto',
                            [theme.breakpoints.down('xs')]: {
                                width: '25px'
                            },
                            '& path': {
                                fill: '#fff'
                            }
                        }
                    },
                    '&.share-btn': {
                        '& svg': {
                            width: 30,
                            height: 'auto',
                            [theme.breakpoints.down('xs')]: {
                                width: '25px'
                            },
                            '& path': {
                                fill: '#fff'
                            }
                        }
                    },
                    '&.backspace-btn': {
                        padding: 0,
                        '& svg': {
                            width: 40,
                            height: 'auto',
                            filter: 'drop-shadow( 0px 1px 1px rgba(0, 0, 0, .25))',
                            '& path': {
                                fill: '#fff'
                            }
                        }
                    },
                    '&:hover': {
                        background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                        '& svg': {
                            transform: 'scale(1.1)',
                            transition: 'transform .3s cubic-bezier(.5,0,.5,3)',
                            '& path': {
                                fill: '#fff'
                            }
                        }
                    }
                },
                '& .share-favo-btns': {
                    display: 'flex',
                    [theme.breakpoints.up('lg')]: {
                        width: '100%',
                        justifyContent: 'space-between'
                    },
                    '& .favorite-count': {
                        display: 'flex',
                        alignItems: 'center',
                        flexDirection: 'column',
                        [theme.breakpoints.down('md')]: {
                            marginRight: '8px'
                        },
                        '& > div:last-child': {
                            width: '100%',
                            marginTop: 20,
                            padding: '0 5px',
                            background: '#fff',
                            borderRadius: '100px',
                            display: 'flex',
                            justifyContent: 'center',
                            [theme.breakpoints.down('md')]: {
                                padding: 0,
                                marginTop: '5px'
                            }
                        }
                    }
                }
            },
            '& div.slick-track': {
                display: 'flex',
                justifyContent: 'center',
                '& div.slick-slide': {
                    [theme.breakpoints.down('md')]: {
                        width: '100%'
                    },
                    '& img': {
                        width: 'auto !important',
                        height: '518px',
                        objectFit: 'contain',
                        cursor: 'pointer',
                        [theme.breakpoints.down('md')]: {
                            width: '100% !important',
                            objectFit: 'cover'
                        },
                        [theme.breakpoints.down('sm')]: {
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
        '& div.second-slider': {
            // '& .slick-current': {
            //     opacity: '0.5'
            // },
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
    },
    modal: {
        '& > div:first-child': {
            backgroundColor: 'rgba(0, 0, 0, 0.97) !important'
        },
        '& div.modal-root': {
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
        '& div.first-slider': {
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
                            width: 'auto',
                            height: '580px',
                            objectFit: 'contain',
                            [theme.breakpoints.down('md')]: {
                                width: '100%'
                            }
                        },
                        '& span.iiz__hint': {
                            display: 'none'
                        }
                    }
                }
            },
            '& .slick-dotted.slick-slider': {
                marginBottom: '30px'
            },
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
        '& div.second-slider': {
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
    }
}));
