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
        width: '24px',
        height: '24px',
        padding: 0,
        position: 'absolute',
        top: '25px',
        right: '25px',
        zIndex: '1000',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            top: '15px',
            right: '15px',
            width: '17px',
            height: '17px'
        },
        '& path': {
            fill: '#494A61'
        },
        '&:hover': {
            backgroundColor: '#EB5757',
            '& path': {
                fill: '#fff'
            }
        }
    }
}));