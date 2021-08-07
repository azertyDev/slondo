import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.title-wrapper': {
            marginBottom: '15px'
        },
        '& > div': {
            '&:not(:last-child)': {
                marginBottom: '15px'
            }
        },
    }
}));
