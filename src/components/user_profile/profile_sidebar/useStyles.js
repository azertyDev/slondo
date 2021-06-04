import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& button': {
            width: '100%',
            height: '38px',
        },
        '& .user-menu-wrapper': {
            '& > div': {
                marginBottom: '15px',
            },
        },
    },
}));
