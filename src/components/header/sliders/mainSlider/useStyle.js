import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '20px',
        width: '100%',
        position: 'relative',
        
        '& div.slick-slide ': {
            margin: '0 10px',
            width: 'auto !important',
        },
        '& img.slick-arrow, img.slick-prev, & img.slick-next': {
            zIndex: '1',
            width: '40px',
            height: '40px',
        },
        
        '& div.slick-slide img': {
            cursor: 'pointer',
            [theme.breakpoints.down('400')]: {
                width: '300px',
            },
        },
        
        '& img.slick-prev': {
            left: '5% !important',
        },
        '& img.slick-next': {
            right: '5% !important',
        },
        
        '& div.slick-list': {
            padding: '0px 10px',
        },
        
        '&  button span svg': {
            fontSize: '3rem',
            width: '40px',
            height: '40px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            [theme.breakpoints.down('1000')]: {
                width: '35px',
                height: '35px',
            },
            [theme.breakpoints.down('600')]: {
                width: '30px',
                height: '30px',
            },
        },
        '&  button span svg:hover': {
            fill: '#a153ff',
        },
        
        '&  button.left-button ': {
            position: 'absolute',
            top: '40%',
            left: '330px',
            [theme.breakpoints.down('md')]: {
                left: '20px',
            },
            [theme.breakpoints.down('lg')]: {
                left: '20px',
            },
        },
        '&  button.right-button ': {
            position: 'absolute',
            top: '40%',
            right: '330px',
            
            [theme.breakpoints.down('md')]: {
                right: '20px',
            },
            [theme.breakpoints.between('md', 'lg')]: {
                right: '20px',
            },
        },
    }
}));
