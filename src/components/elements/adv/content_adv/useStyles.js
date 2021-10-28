import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '345px',
        borderRadius: '7px',
        backgroundColor: '#f0f0f0',
        [theme.breakpoints.down('xs')]: {
            height: '233px'
        }
    }
}));