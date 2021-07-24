import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: 220,
        padding: 10,
        borderRadius: 10,
        background: '#F2F2F2',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.04), 1px 0px 2px rgba(0, 0, 0, 0.04)',
        '& h6.MuiTypography-h6': {
            textAlign: 'center'
        },
        '& a': {
            textDecoration: 'none',
            '& h6': {
                color: '#2F95F3'
            }
        }
    },
    createPost: {
        background: '#2F80ED',
        borderRadius: 10,
        boxShadow: '0px 2px 2px 0px #00000026',
        '& .MuiTypography-subtitle1': {
            color: '#FFF !important'
        }
    }
}));