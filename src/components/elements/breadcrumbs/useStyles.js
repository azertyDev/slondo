import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& a': {
            fontSize: '14px',
            textDecoration: 'none',
            color: '#675EAA'
        },
        '& p': {
            fontSize: '14px',
            color: '#4E4E4E'
        },
        '& li.MuiBreadcrumbs-separator': {
            margin: "0 5px"
        }
    },
}))
