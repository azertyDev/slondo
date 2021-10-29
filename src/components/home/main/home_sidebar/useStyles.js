import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& section.faq-wrapper': {
            '& > h6': {
                fontWeight: 600,
                textAlign: 'center'
            }
        }
    }
}));
