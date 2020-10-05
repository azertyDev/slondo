import makeStyles from '@material-ui/core/styles/makeStyles'


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        color: '#fafafa',
        padding: '6px 10px',
        backgroundColor: theme.palette.primary.main,
        borderRadius: '6px'
    },
}))
