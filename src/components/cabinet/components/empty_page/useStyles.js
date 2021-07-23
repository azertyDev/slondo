import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius: '10px',
        background: '#F2F2F2',
        height: '220px',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.04), 1px 0px 2px rgba(0, 0, 0, 0.04)',
        '& a': {
            textDecoration: 'none',
            '& h6': {
                color: '#2F95F3'
            }
        }
    },
    createPost: {
        background: '#2F80ED',
        borderRadius: '10px',
        boxShadow: '0px 2px 2px 0px #00000026',
        '& .MuiTypography-subtitle1': {
            color: '#FFF !important'
        }
    }
}));