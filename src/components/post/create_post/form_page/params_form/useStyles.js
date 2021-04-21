import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.title-wrapper': {
            marginBottom: '20px'
        },
        '& div.acc-wrapper': {
            marginBottom: '15px'
        }
    }
}));