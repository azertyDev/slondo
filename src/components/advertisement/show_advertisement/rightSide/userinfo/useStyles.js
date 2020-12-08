import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        margin: '20px 0 20px 0 !important',
        '& div.contact-buttons': {
            '& button:not(:last-child)': {
                marginBottom: '10px',
            }
        },
    },
}));
