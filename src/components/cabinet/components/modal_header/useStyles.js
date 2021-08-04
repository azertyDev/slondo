import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        zIndex: 1,
        '& .title': {
            [theme.breakpoints.down('xs')]: {
                width: '80%',
                fontSize: '1rem'
            }
        },
        '& button': {
            position: 'absolute',
            top: 10,
            '&.left': {
                left: '15px'
            },
            '&.right': {
                right: '15px'
            }
        }
    },
    button: {
        padding: 5,
        '& svg': {
            [theme.breakpoints.down('xs')]: {
                width: '18px',
                height: '18px'
            },
            '& path': {
                fill: '#28293D'
            }
        }
    }
}));