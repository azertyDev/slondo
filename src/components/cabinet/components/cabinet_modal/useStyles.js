import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    }
}));
