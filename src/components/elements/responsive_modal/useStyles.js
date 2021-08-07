import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.MuiDialog-paperFullScreen': {
            [theme.breakpoints.down('sm')]: {
                maxWidth: '576px',
                alignItems: 'center',
                overflow: 'hidden'
            }
        },
        '& div.MuiDialog-paperWidthMd': {
            [theme.breakpoints.down('sm')]: {
                maxWidth: '460px'
            }
        },
        '& .MuiDialog-paper': {
            '& .MuiTypography-h6': {
                fontWeight: 600
            }
        }
    }
}));