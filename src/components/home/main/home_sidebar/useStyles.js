import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& section.faq-wrapper': {
            marginBottom: '129px',
            '& > h6': {
                marginBottom: '12px',
                fontWeight: 600,
                textAlign: 'center'
            }
        }
    }
}));
