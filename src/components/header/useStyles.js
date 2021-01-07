import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div.header-wrapper': {
            paddingTop: '24px'
        },
        '& div.top-wrapper': {
            [theme.breakpoints.down('sm')]: {
                marginBottom: '60px',
            },
            [theme.breakpoints.up('sm')]: {
                marginBottom: '10px',
            }
        }
    },
    modalDialog: {
        '& > div:first-child': {
            [theme.breakpoints.down('sm')]: {
                backgroundColor: `${theme.palette.primary.white}!important`,
            }
        }
    }
}));
