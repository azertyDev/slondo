import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        background: 'linear-gradient(180deg, #E9D7F3 -133.07%, rgba(255, 255, 255, 0) 159.92%)',
        '& div.MuiGrid-grid-xs-9': {
            paddingTop: 60,
            paddingBottom: 60,
        },
        '& h5': {
            fontSize: '1.75rem',
        },
        '& h6': {
            color: 'rgba(49, 49, 49, 0.6)',
            fontSize: '1.125rem',
            lineHeight: '22px',
        },
    },
    description: {
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: 50,
    },
    hero: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
        maxWidth: 645,
    },
    warning: {
        background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
        borderRadius: '10px',
        padding: '18px 10px',
        marginBottom: 60,
        '& > h6': {
            color: theme.palette.primary.contrastText,
            textAlign: 'center',
        },
    },
    paper: {
        display: 'flex',
        padding: '25px 20px',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
        borderRadius: '20px',
        '&:not(:last-child)': {
            marginBottom: 20,
        },
    },
    icon: {
        padding: '53px',
        transform: 'translate(-40px)',
        background: 'linear-gradient(138.63deg, rgba(235, 235, 235, 0.9) 14.21%, rgba(231, 231, 231, 0.15) 84.84%)',
        backdropFilter: 'blur(2px)',
        borderRadius: '100px',
    },
    card: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around',
    },
}))
