import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.MuiDialog-paperFullScreen': {
            MsOverflowStyle: 'none',
            scrollbarWidth: 'none',
            overflow: 'scroll',
            '&::-webkit-scrollbar': {
                width: 0,
                display: 'none'
            },
            [theme.breakpoints.down('sm')]: {
                maxWidth: '576px',
                alignItems: 'center'
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