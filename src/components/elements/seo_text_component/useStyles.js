import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        marginTop: 120,
        '& .MuiTypography-subtitle2': {
            color: 'rgba(49, 49, 49, 0.6)',
            lineHeight: '17px',
            textIndent: '30px'
        }
    }
}))
