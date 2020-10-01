import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        background: '#999',
        borderRadius: '7px',
        '&:firstChild': {
            marginTop: 0,
        },
    },
}))
