import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.price-from-to': {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }
}));
