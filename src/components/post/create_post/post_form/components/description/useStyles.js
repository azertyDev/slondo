import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& textarea.description-area': {
            width: '100%',
            maxHeight: '230px',
            minHeight: '230px',
            padding: '10px',
        }
    }
}))