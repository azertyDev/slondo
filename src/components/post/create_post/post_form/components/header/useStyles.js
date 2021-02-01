import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& h6.title': {
            marginRight: '10px'
        },
        [theme.breakpoints.down('md')]: {
            fontSize: '2rem',
            margin: '30px 0',
        },
        [theme.breakpoints.down('xs')]: {
            fontSize: '2rem',
            margin: '30px 0',
            textAlign: 'center'
        },
    }
}))