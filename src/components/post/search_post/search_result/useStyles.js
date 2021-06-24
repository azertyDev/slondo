import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        marginTop: 30,
        '& div.pagination-wrapper': {
            display: 'flex',
            justifyContent: 'center'
        }
    }
}))
