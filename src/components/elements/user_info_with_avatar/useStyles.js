import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& button': {
            padding: '5px 0',
            border: '1px solid #2F80ED',
            background: 'none',
            borderRadius: '5px',
            [theme.breakpoints.down('md')]: {
                border: '1px solid #D5D5D5;'
            },
            '& > h6.MuiTypography-subtitle2': {
                color: '#2F80ED',
                [theme.breakpoints.down('md')]: {
                    color: '#4E4E4E'
                }
            }
        }
    }
}));
