import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.bets-header': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5
        }
    },
    showMore: {
        marginTop: 10,
        width: '100%',
        background: '#F9F9F9',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: 5,
        '& svg': {
            fill: '#4E4E4E'
        }
    }
}));
