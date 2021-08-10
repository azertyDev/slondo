import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .pl-16': {
            paddingLeft: 16,
            [theme.breakpoints.down('sm')]: {
                paddingLeft: 10,
            }
        },
        '& h6.menu-title': {
            fontWeight: '600',
            marginBottom: '30px'
        },
    },
}));