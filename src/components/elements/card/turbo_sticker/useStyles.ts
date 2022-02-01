import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
        '& p': {
            fontSize: '.7rem',
            fontWeight: 700,
            color: '#fff'
        }
    }
}));
