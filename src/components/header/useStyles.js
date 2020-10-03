import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '10px',
    },
    bottomHeaderWrapper: {
        [theme.breakpoints.down('sm')]: {
            marginTop: '60px'
        }
    }
}))