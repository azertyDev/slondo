import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& label.MuiInputLabel-formControl': {
            top: '-40px'
        },
        '& div.from-to-wrapper': {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }
}));