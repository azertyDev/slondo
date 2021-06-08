import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.MuiDialog-paperFullScreen': {
            [theme.breakpoints.down('sm')]: {
                alignItems: 'center',
                maxWidth: '576px'
            }
        },
        '& div.MuiDialog-paperWidthMd': {
            [theme.breakpoints.down('sm')]: {
                // maxWidth: '420px'
                maxWidth: '460px'
            }
        },
        '& .MuiDialog-paper': {
            '& .MuiTypography-h6': {
                fontWeight: 600
            }
        }
    },
    closeBtn: {
        width: 24,
        height: 24,
        padding: 7,
        backgroundColor: '#EBEBF0',
        position: 'absolute',
        top: '25px',
        right: '25px',
        '& path': {
            fill: '#28293D'
        },
        '&:hover': {
            backgroundColor: '#EB5757',
            '& path': {
                fill: '#fff'
            }
        }
    }
}));