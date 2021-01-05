import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        maxWidth: '1920px',
        padding: '0 19px',
        margin: '0 auto',
        '& div.slick-slider': {
            zIndex: 10,
            '& img': {
                borderRadius: '5px',
                [theme.breakpoints.up('md')]: {
                    width: '404px'
                },
                [theme.breakpoints.down('md')]: {
                    width: '450px'
                }
            },
            '& div.slick-slide': {
                padding: '0 5px'
            }
        },
        '& button span svg:hover': {
            fill: '#a153ff',
        },
        '& div.slider-arrows-container': {
            // position: 'absolute',
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
