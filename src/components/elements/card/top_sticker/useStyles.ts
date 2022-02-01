import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        padding: '4px 20px',
        background: 'linear-gradient(90.62deg, #F38522 0.56%, #FFB800 99.49%)',
        '& p': {
            fontSize: '.7rem',
            fontWeight: 700,
            color: '#fff'
        },
        [theme.breakpoints.down('md')]: {
            padding: '4px 15px'
        },
        [theme.breakpoints.down('lg')]: {
            padding: '4px 12px'
        }
    }
}));
