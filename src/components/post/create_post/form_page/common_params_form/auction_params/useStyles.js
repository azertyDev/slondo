import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        marginBottom: '20px',
        '& div.price-wrapper': {
            marginBottom: '20px'
        }
    }
}));