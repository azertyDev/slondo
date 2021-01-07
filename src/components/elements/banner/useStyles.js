import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        height: '100%',
        '& > div.MuiPaper-rounded': {
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: '#F2F2F2',
            borderRadius: '10px',
            '& > h5.MuiTypography-h5': {
                color: '#7DBCF6',
                fontWeight: '700',
            }
        }
    },
}));
