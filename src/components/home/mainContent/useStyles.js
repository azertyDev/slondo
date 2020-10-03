import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.tabs div.MuiTabs-flexContainer': {
            justifyContent: 'space-around'
        },
        '& div.cards-container': {
            marginTop: '10px'
        },
        '& div.ads-wrapper': {
            '& div.card-title > h6': {
                backgroundColor: 'rgba(136, 202, 236, .65)'
            }
        },
        '& div.lots-wrapper': {
            '& div.card-title > h6': {
                backgroundColor: 'rgba(173, 102, 213, .65)'
            }
        }
    },
    adBanner: {
        padding: '0 10px',
        '& > div > div': {
            borderRadius: '7px',
            backgroundColor: '#C0C0C0',
        },
        '& div.top-banner': {
            height: '250px'
        },
        '& div.central-banner': {
            height: '130px',
            margin: '10px 0'
        },
        '& div.bottom-banner': {
            height: '250px'
        }
    }
}))
