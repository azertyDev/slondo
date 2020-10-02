import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        '& > h6.localization-item': {
            lineHeight: 1,
            '&:first-child': {
                color: theme.palette.primary.main,
                paddingRight: '4px',
                borderRight: '1px #000 solid'
            },
            '&:last-child': {
                paddingLeft: '4px',
            }
        }
    }
}))