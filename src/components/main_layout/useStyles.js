import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        minHeight: '100vh',
        display: 'flex',
        flexFlow: 'column nowrap',
        '& main': {
            flex: '1 1 0'
        },
        '& div.layout-container': {
            position: 'relative',
            paddingTop: '48px',
            [theme.breakpoints.down('xs')]: {
                padding: '10px'
            }
        }
    }
}));