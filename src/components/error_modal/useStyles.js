import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& a': {
            textDecoration: 'none',
            color: theme.palette.primary.main,
            '&:hover': {
                textDecoration: 'underline'
            }
        },
        '& .error-text': {
            fontWeight: 600,
            wordBreak: 'break-word',
            [theme.breakpoints.down('xs')]: {
                fontSize: '1.1rem'
            }
        },
        '& button': {
            width: '100%'
        }
    },
}));
