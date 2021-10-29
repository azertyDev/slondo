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
            top: 8,
            '&.left': {
                left: '5px'
            },
            '&.right': {
                right: '10px'
            }
        }
    },
    button: {
        padding: 5,
        width: '30px',
        height: '30px',
        '& svg': {
            '& path': {
                fill: '#28293D'
            }
        }
    }
}));