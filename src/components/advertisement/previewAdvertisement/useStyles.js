import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        textOverflow: 'ellipsis',
        '& div.row': {
            marginBottom: '10px',
        },
    },
    title: {
        margin: '50px 0',
        [theme.breakpoints.down('sm')]: {
            textAlign: 'center',
            margin: '30px 0',
        },
    },
    subTitle: { margin: '20px 0' },
    buttons: {
        margin: '50px 0',
    },
}))
