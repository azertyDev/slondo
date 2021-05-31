import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        '& .MuiDialog-paper': {
            padding: 30,
            '& .MuiTypography-h6': {
                fontWeight: 600
            }
        }
    }
});