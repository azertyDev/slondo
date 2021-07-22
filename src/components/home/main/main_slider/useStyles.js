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
                borderRadius: '5px'
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
        '& .MuiTypography-root': {
            textAlign: 'center'
        },
    }
}));
