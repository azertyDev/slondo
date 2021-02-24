import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 120,
        '& .MuiTypography-subtitle2': {
            color: 'rgba(49, 49, 49, 0.6)',
            lineHeight: '17px',
        },
    },
    title: {
        fontWeight: 600,
        marginBottom: 15,
    },
    subTitle: {
        marginBottom: 15,
    },
    additionalList: {
        padding: 0,
        margin: 0,
        '& li': {
            listStyle: 'none',
            marginBottom: 15,
        },
    },
    button: {
        background: 'none',
        padding: 0,
        '& h6.MuiTypography-subtitle1': {
            color: theme.palette.primary.createAdBtnColor,
        },
    },
}))
