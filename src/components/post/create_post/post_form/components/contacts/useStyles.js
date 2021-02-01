import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.display-phone': {
            display: 'flex',
            alignItems: 'center'
        }
    }
}))