import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        '& > div': {
            marginBottom: '20px'
        },
        '& div.title-wrapper': {
            marginBottom: '20px'
        }
    }
}))