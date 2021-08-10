import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 1,
        '& .title': {
            fontWeight: 600,
            [theme.breakpoints.down('xs')]: {
                width: '80%',
                fontSize: '1rem'
            }
        },
        '& button': {
            position: 'absolute',
            top: 5,
            '&.left': {
                left: '10px'
            },
            '&.right': {
                right: '10px'
            }
        }
    },
    button: {
        padding: 5,
        '& svg': {
            [theme.breakpoints.down('xs')]: {
                width: '25px',
                height: '25px'
            },
            '& path': {
                fill: '#28293D'
            }
        }
    }
}));