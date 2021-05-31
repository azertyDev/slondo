import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiDialog-paper': {
            '& .MuiTypography-h6': {
                fontWeight: 600
            }
        },
        '& .MuiDialog-paperFullScreen': {
            display: 'flex',
            justifyContent: 'center',
            [theme.breakpoints.down('sm')]: {
                padding: '0 24px'
            },
            [theme.breakpoints.down('xs')]: {
                padding: '0 7px'
            }
        }
    }
}));