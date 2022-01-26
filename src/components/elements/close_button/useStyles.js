import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5,
        zIndex: '1000',
        '& svg': {
            width: '20px',
            height: '20px'
        },
        [theme.breakpoints.down('xs')]: {
            padding: 5,
            '& svg': {
                width: '16px',
                height: '16px'
            }
        }
    }
}));
