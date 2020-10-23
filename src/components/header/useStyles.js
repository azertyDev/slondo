import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10px',
    },
    bottomHeader: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '60px'
        }
    },
    modalDialog: {
        '& > div:first-child': {
            [theme.breakpoints.down('sm')]: {
                backgroundColor: `${theme.palette.primary.white}!important`
            }
        }
    }
}))