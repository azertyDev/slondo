import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& div.chat-wrapper > div': {
            boxShadow: 'none'
        },
        '& h6.menu-title': {
            fontWeight: '600',
            margin: '0 0 30px 30px'
        }
    }
}));
