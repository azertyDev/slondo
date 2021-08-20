import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div:not(:last-child)': {
            marginBottom: '15px',
            '& .MuiAvatar-root': {
                width: 80,
                height: 80
            },
            [theme.breakpoints.down('md')]: {
                flexDirection: 'column',
                alignItems: 'center',
                '& > div:first-child': {
                    margin: '0 0 10px 0',
                    '& div.MuiAvatar-root': {
                        width: 65,
                        height: 65
                    }
                }
            }
        }
    },
}));
