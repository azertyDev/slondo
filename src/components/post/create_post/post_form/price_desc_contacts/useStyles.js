import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        '& svg.MuiSvgIcon-root': {
            fill: '#9a64d0'
        },
        '& div.location-wrapper': {
            maxWidth: '500px'
        }
    }
}))