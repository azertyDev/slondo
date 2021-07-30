import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& span.MuiIconButton-root': {
            padding: 5
        },
        '& label.MuiFormControlLabel-root': {
            margin: 0
        }
    }
}));