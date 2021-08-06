import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        background: '#F2F2F2',
        borderRadius: '10px',
        padding: 30,
        [theme.breakpoints.down('xs')]: {
            padding: 15
        },
        '& span.hint': {
            display: 'block',
            fontSize: '0.75rem'
        }
    },
    editButton: {
        width: 'fit-content',
        backgroundColor: '#fff',
        boxShadow: '0px 1px 2px 0px #00000014',
        borderRadius: '3px',
        padding: '9px 25px',
        '& .MuiTypography-subtitle1': {
            color: '#838383'
        },
        '& svg': {
            color: theme.palette.secondary
        }
    }
}));
