import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        }
    },
    closeBtn: {
        display: 'block',
        margin: '0 0 5px auto',
        padding: 5,
        zIndex: 1000,
        '& svg': {
            [theme.breakpoints.down('xs')]: {
                width: '18px',
                height: '18px'
            },
            '& path': {
                fill: '#28293D'
            }
        }
    }
}));
