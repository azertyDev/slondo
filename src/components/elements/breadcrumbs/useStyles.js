import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& a': {
            fontSize: '12px'
        },
        '& p': {
            fontSize: '12px'
        },
        '& li.MuiBreadcrumbs-separator': {
            margin: "0"
        }
    },
}))
