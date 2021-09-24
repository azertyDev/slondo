import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        '& .Mui-selected': {
            color: '#fff'
        }
    }
}));
