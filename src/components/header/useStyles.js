import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div.header-wrapper': {
            paddingTop: '10px',
            [theme.breakpoints.down('md')]: {
                paddingTop: '0'
            }
        }
    },
    modalDialog: {
        '& > div:first-child': {
            [theme.breakpoints.down('md')]: {
                backgroundColor: `${theme.palette.primary.white}!important`
            }
        }
    }
}));
