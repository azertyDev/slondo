import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& a': {
            textDecoration: 'none'
        }
    },
    shareIcon: {
        height: '25px'
    },
    adBanner: {
        marginTop: '55px'
    }
}));
