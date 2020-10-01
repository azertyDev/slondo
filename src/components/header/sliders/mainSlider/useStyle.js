import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        marginTop: '20px',
        position: 'relative',
        '& div.slick-slider': {
            zIndex: 1,
            '& img': {
                width: '97%',
                margin: 'auto'
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
                justifyContent: 'space-between',
                '& button.left-arrow, & button.right-arrow': {
                    display: 'flex',
                    justifyContent: 'center',
                    width: '40px',
                    height: '40px',
                    backgroundColor: '#fafafa',
                    borderRadius: '20px',
                    zIndex: 2,
                    '& > div': {
                        width: '10px',
                        height: '10px',
                        margin: 'auto',
                        boxShadow: '-1px 1px 0 #000'
                    }
                },
                '& button.left-arrow img': {
                    transform: 'rotate(180deg)',
                },
            }
        }
    }
}));
