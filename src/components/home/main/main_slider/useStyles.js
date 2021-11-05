import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        maxWidth: '1420px',
        margin: '0 auto',
        '& li.slide-item': {
            padding: '0 5px',
            userSelect: 'none',
            '& img': {
                aspectRatio: '2.5/1',
                width: '100%',
                borderRadius: '5px',
                objectFit: 'cover'
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
            color: '#5A5581'
        }
    }
}));
