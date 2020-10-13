import {makeStyles} from '@material-ui/core/styles'
import theme from '../../../theme'

export const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        borderRadius: '7px',
        
        '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 8px 16px 0px',
            cursor: 'pointer',
        },
        
        '& div.card-title > h6': {
            backgroundColor: '#88caec',
            position: 'absolute',
            top: '10px',
            left: '10px',
            height: '17px',
            padding: '0 5px',
            lineHeight: '1.3',
            borderRadius: '3px',
            color: '#fff',
        },
        '& div.card-categoryName': {
            opacity: '0.4',
            position: 'absolute',
            bottom: '95px',
            left: '10px',
            height: '17px',
            padding: '0 5px',
            lineHeight: '1.3',
            borderRadius: '3px',
            color: '#fff',
        },
        
        '& div.card-media': {
            height: '220px'
        },
        
        '& h6.MuiTypography-subtitle1': {
            fontSize: '1.375rem',
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.2rem',
            }
        },
        '& div.MuiCardContent-root': {
            paddingBottom: '10px',
        },
        '& img.MuiCardMedia-media': {
            width: '100%',
            height: '100%',
        },
    },
}))
