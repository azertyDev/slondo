import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        maxWidth: '1920px',
        padding: '0 20px',
        margin: '0 auto',
        '& div.slick-slider': {
            zIndex: 10,
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
                zIndex: 10
            },
            '& button.slick-prev': {
                left: '20px'
            },
            '& button.slick-next': {
                right: '20px'
            }
        },
        '& button span svg:hover': {
            fill: '#a153ff',
        },
        '& div.slider-arrows-container': {
            position: 'absolute',
            top: 0,
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            height: '100%'
        }
    }
}));
