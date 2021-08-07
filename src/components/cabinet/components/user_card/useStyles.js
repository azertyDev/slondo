import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& button': {
            width: '100%',
            background: '#FFFFFF',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
            '&:disabled': {
                opacity: '0.5',
                background: '#f2f2f2',
                border: `1px solid #f2f2f2`,
                '& p': {
                    color: theme.palette.primary.black
                }
            }
        },
        '& .MuiAvatar-root': {
            width: 50,
            height: 50
        }
    }
}));
