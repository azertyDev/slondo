import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& > p': {
            textAlign: 'center',
            fontWeight: 600,
            '&.write-off-title': {
                marginBottom: '10px'
            }
        }
    }
}));
