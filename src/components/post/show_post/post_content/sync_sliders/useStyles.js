import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
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
        '& > button': {
            width: 50,
            height: 50,
            top: 25,
            position: 'absolute',
            zIndex: 1,
            background: '#fff',
            borderRadius: '100%',
            [theme.breakpoints.down('md')]: {
                background: 'rgba(0, 0, 0, 0.35)'
            },
            '&.favorite-btn': {
                left: 25,
                [theme.breakpoints.down('xs')]: {
                    right: 90,
                    left: 'inherit',
                    background: 'rgba(0, 0, 0, 0.35)'
                }
            },
            '&.share-btn': {
                right: 25
            },
            '& svg': {
                width: 30,
                height: 'auto',
                '& path': {
                    fill: '#8E62C2',
                    [theme.breakpoints.down('md')]: {
                        fill: '#fff'
                    }
                }
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
                        width: '100% !important',
                        objectFit: 'cover'
                    }
                }
            }
        },

        // '& .slick-dots': {
        //     position: 'absolute',
        //     width: '100%',
        //     padding: 0,
        //     margin: '0 0 7px 0',
        //     bottom: 0,
        //     zIndex: '15',
        //     display: 'flex !important',
        //     listStyle: 'none',
        //     justifyContent: 'center',
        //     '& > li.slick-active': {
        //         color: '#2196F3'
        //     },
        //     '& > li > button':{
        //         width: '1rem',
        //         height: '1rem',
        //         borderRadius: '50%',
        //         opacity: '0.4',
        //         fontSize: 0,
        //         content: '',
        //     }
        // }
        "& .slick-dotted.slick-slider": {marginBottom: "30px"},
        "& .slick-dots": {
            position: "absolute",
            bottom: "10px",
            display: "block",
            width: "100%",
            padding: "0",
            margin: "0",
            listStyle: "none",
            textAlign: "center"
        },
        "& .slick-dots li": {
            position: "relative",
            display: "inline-block",
            width: "10px",
            height: "10px",
            margin: "0 5px",
            padding: "0",
            cursor: "pointer",
            transition: "width 0.3s ease-in-out"
        },
        "& .slick-dots li button": {
            fontSize: "0",
            lineHeight: 0,
            display: "block",
            width: "10px",
            height: "10px",
            padding: "5px",
            cursor: "pointer",
            color: "transparent",
            border: "0",
            outline: "none",
            background: "transparent"
        },
        "& .slick-dots li button:hover, .slick-dots li button:focus": {
            outline: "none"
        },
        "& .slick-dots li button:hover:before, .slick-dots li button:focus:before": {
            opacity: 1
        },
        "& .slick-dots li button:before": {
            fontFamily: '"slick"',
            fontSize: "6px",
            lineHeight: "20px",
            position: "absolute",
            top: "0",
            left: "0",
            width: "10px",
            height: "10px",
            content: '" "',
            textAlign: "center",
            background: '#fff',
            borderRadius: '50%',
            opacity: 0.4,
            color: "black",
            WebkitFontSmoothing: "antialiased",
            MozOsxFontSmoothing: "grayscale"
        },
        "& .slick-dots li.slick-active button:before": {opacity: "1", background: "#2196F3"}
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
