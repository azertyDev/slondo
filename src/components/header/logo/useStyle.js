import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& img.top-logo': {
            [theme.breakpoints.down('md')]: {
                display: 'block',
                height: '55px',
            },
            [theme.breakpoints.up('md')]: {
                display: 'none',
            },
        },
        '& img.bottom-logo': {
            [theme.breakpoints.down('md')]: {
                display: 'none',
            },
            [theme.breakpoints.up('md')]: {
                display: 'block',
                height: '42px',
            },
            [theme.breakpoints.up('lg')]: {
                display: 'block',
                height: '50px',
            }
        },
    },
}))
