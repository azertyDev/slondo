import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.options-wrapper': {
            width: '100%',
            marginTop: '40px',
            '& > h6': {
                marginLeft: '11px'
            }
        }
    }
}));