import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    wrapper: {
        minHeight: '100vh',
        display: 'flex',
        flexFlow: 'column nowrap',
        '& main': {
            flex: '1 1 0'
        }
    }
}));
