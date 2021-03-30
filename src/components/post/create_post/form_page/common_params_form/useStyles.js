import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        '& span.MuiCheckbox-root': {
            marginLeft: '-9px'
        },
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
        '& div.price-wrapper': {
            '& div.currency': {
                width: '220px'
            }
        },
        '& div.location-wrapper': {
            width: '50%',
            marginBottom: '20px'
        },
        '& div.description-wrapper': {
            '& p': {
                wordBreak: 'break-all'
            }
        }
    }
}))