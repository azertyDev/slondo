import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.top': {
            marginTop: '10px',
        },
        '& div.bottom': {
            [theme.breakpoints.down('sm')]: {
                marginTop: '60px',
            },
            // [theme.breakpoints.up('md')]: {
            //     marginTop: '10px',
            // }
        },
    },
}))
