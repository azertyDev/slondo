const {makeStyles} = require('@material-ui/core')

export const useStyles = makeStyles(() => ({
    root: {
        overflowY: 'scroll',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }
}))
