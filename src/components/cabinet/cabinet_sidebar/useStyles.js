import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& button': {
            width: '100%',
            height: '38px'
        },
        '& .user-menu-wrapper': {
            '& div.user-info': {
                marginBottom: '15px',
                '& div.MuiAvatar-root': {
                    width: 80,
                    height: 80
                },
                [theme.breakpoints.down('md')]: {
                    flexDirection: 'column',
                    alignItems: 'center',
                    '& div:first-child': {
                        margin: 0
                    },
                    '& div.MuiAvatar-root': {
                        width: 65,
                        height: 65
                    }
                }
            }
        }
    },
}));
