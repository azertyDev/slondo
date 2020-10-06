import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {},
    adBanner: {
        marginTop: '140px',
        '& > div > div.right-banner': {
            width: '100%',
            height: '470px',
            borderRadius: '7px',
            backgroundColor: '#C0C0C0',
        },
    },
}))
