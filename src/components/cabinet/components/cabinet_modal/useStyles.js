import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {},
    closeBtn: {
        position: 'absolute',
        top: 10,
        right: 10,
        padding: 5,
        '& path': {
            fill: '#28293D'
        }
    }
}));
