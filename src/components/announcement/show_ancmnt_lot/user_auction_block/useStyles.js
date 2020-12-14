import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& > div.price': {
            marginTop: '54px',
            '& > h4': {
                textAlign: 'end'
            }
        }
    },
}));
