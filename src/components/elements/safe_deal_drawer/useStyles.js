import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& .MuiPaper-root': {
            width: '100%',
            background: '#F2F2F2'
        },
        '& div.safe-deal-block': {
            background: '#F1F1F1',
            borderRadius: '10px'
        }
    }
}));