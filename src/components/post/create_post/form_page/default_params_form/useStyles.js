import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        '& div.auction-params': {
            display: 'flex',
            alignItems: 'center'
        },
        '& div.post-options': {
            '& svg.MuiSvgIcon-root': {
                fill: '#9a64d0'
            },
            '& > div': {
                display: 'flex',
                alignItems: 'center'
            }
        },
        '& div.location-wrapper': {
            width: '50%'
        }
    }
}))