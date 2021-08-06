import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    icon: {
        width: 24,
        height: 24,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '100px',
        backgroundColor: '#F2F2F2'
    },
    button: {
        display: 'flex',
        padding: '5px 10px',
        borderRadius: '100px',
        background: '#FFFFFF',
        justifyContent: 'space-between',
        '&:not(:last-child)': {
            marginBottom: 10
        }
    },
    small: {
        width: theme.spacing(10),
        height: theme.spacing(10)
    }
}));