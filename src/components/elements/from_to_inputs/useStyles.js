import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        width: '100%',
        '& div.from-to-wrapper': {
            display: 'flex',
            justifyContent: 'space-between',
            '& div.MuiTextField-root': {
                width: '49%',
                '& input': {
                    borderRadius: '5px',
                    boxShadow: 'none',
                    background: '#FDFCFF',
                }
            }
        }
    }
}));