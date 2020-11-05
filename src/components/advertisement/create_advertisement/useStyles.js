import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    adBanner: {
        marginTop: '140px',
        '& > div > div.right-banner': {
            width: '100%',
            height: '470px',
            borderRadius: '7px',
            backgroundColor: '#C0C0C0',
        },
    },
    nextButtonBlock: {
        display: 'flex',
        justifyContent: 'center',
        margin: '50px 0',
        [theme.breakpoints.down('md')]: {
            marginTop: '30px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '25px',
        },
    },
    nextButton: {
        width: '250px',
        margin: '0 5px',
        [theme.breakpoints.down('sm')]: {padding: '10px 50px'},
        '& > p': {
            color: theme.palette.primary.white
        }
    },
}))
