import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        maxWidth: '1920px',
        margin: 'auto',
        '& div.slick-slider': {
            zIndex: 10,
            '& img': {
                width: '97%',
                margin: 'auto',
                borderRadius: '5px'
            }
        },
        '& button span svg:hover': {
            fill: '#a153ff',
        },
        '& div.slider-arrows-container': {
            position: 'absolute',
            top: 0,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            '& > div.MuiContainer-root': {
                display: 'flex',
                justifyContent: 'space-between'
            }
        }
    }
}));
