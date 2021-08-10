import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& .MuiAvatar-root': {
            width: 50,
            height: 50
        }
    }
}));
