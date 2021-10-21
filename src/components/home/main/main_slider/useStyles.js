import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        maxWidth: '1420px',
        margin: '0 auto',
        '& div.slick-slider': {
            '& img': {
                aspectRatio: '2.5/1',
                width: '100%',
                borderRadius: '5px',
                objectFit: 'cover'
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
        position: 'absolute',
        top: 0,
        right: 0,
        maxWidth: '65%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '0 5% 8% 0',
        '& h5, & h6': {
            textAlign: 'end'
        },
        '& h5': {
            fontWeight: 600,
            [theme.breakpoints.down('xs')]: {
                fontSize: '4.5vw'
            }
        },
        '& h6': {
            [theme.breakpoints.down('xs')]: {
                fontSize: '3.6vw'
            }
        },
        '& .MuiTypography-root': {
            color: '#5A5581',
            textShadow: '0px 0px 10px rgba(0, 0, 0, 0.15)'
        }
    }
}));
