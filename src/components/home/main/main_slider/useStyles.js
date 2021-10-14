import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        maxWidth: '1920px',
        padding: '0 19px',
        [theme.breakpoints.down('md')]: {
            padding: 0
        },
        margin: '0 auto',
        '& div.slick-slider': {
            '& img': {
                width: '100%',
                borderRadius: '5px',
                // [theme.breakpoints.down('450')]: {
                //     height: 95
                // },
            },
            '& div.slick-slide': {
                padding: '0 5px'
            },
            '& button.slick-arrow': {
                position: 'absolute',
                top: 'calc(50% - 25px)',
                backgroundColor: 'rgba(255, 255, 255, .5)',
                '&:hover': {
                    backgroundColor: theme.palette.primary.white,
                    '& > span:before': {
                        background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%) !important'
                    },
                    '& > span:after': {
                        background: 'linear-gradient(49.94deg, #AD66D5 19.03%, #675EAA 72.72%) !important'
                    }
                }
            },
            '& button.slick-prev': {
                left: '20px'
            },
            '& button.slick-next': {
                right: '20px'
            }
        },
        '& button span svg:hover': {
            fill: '#a153ff'
        },
        '& div.slider-arrows-container': {
            position: 'absolute',
            top: 0,
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%'
        }
    },
    content: {
        right: 40,
        bottom: 40,
        display: 'flex',
        maxWidth: '60%',
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            right: 16,
            bottom: 50,
            maxWidth: '55%'
        },
        '& h5': {
            fontWeight: 600,
            [theme.breakpoints.down('xs')]: {
                fontSize: '1rem',
                lineHeight: '20px',
                textShadow: 'none'
            }
        },
        '& h6': {
            [theme.breakpoints.down('xs')]: {
                fontSize: '0.75rem'
            }
        },
        '& .MuiTypography-root': {
            color: '#fff',
            textAlign: 'end',
            textShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)',
            [theme.breakpoints.down('xs')]: {
                // textShadow: 'none'
            }
        }
    }
}));
