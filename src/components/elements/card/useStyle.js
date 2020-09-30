import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 220,
        height: 'auto',
        position: 'relative',
        borderRadius: '7px',

        '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 8px 16px 0px',
            cursor: 'pointer',
        },

        '& h6.MuiTypography-subtitle2': {
            position: 'absolute',
            top: '10px',
            left: '10px',
            height: '17px',
            padding: '0 5px',
            lineHeight: '1.3',
            borderRadius: '3px',
            backgroundColor: (props) => props.bgcolor,
            opacity: '0.65',
            color: '#fff',
        },

        '& h6.MuiTypography-subtitle1': {
            fontSize: '1.375rem',
        },
        '& p.MuiTypography-body2': {
            fontSize: '1rem',
            color: '#000',
        },
        '& div.MuiCardContent-root': {
            paddingBottom: '10px',
        },
        '& img.MuiCardMedia-media': {
            width: '100%',
            height: '250px',
            objectFit: 'cover',
        },
    },
}))
