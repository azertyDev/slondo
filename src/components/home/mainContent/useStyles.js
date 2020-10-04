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
    showMoreContainer: {
        [theme.breakpoints.up('md')]: {
            marginTop: '10px'
        },
        [theme.breakpoints.down('md')]: {
            marginTop: '30px'
        },
        '& div.show-more-block': {
            position: 'relative',
            display: 'flex',
            justifyContent: 'center',
            '& > button': {
                position: 'relative',
                width: '170px',
                color: '#000',
                backgroundColor: theme.palette.primary.white,
                border: `1px solid ${theme.palette.primary.gray}`,
                zIndex: 1,
                '& > img': {
                    position: 'absolute',
                    right: '10px',
                    width: '16px',
                    height: '16px',
                    padding: '1px',
                    border: `1px solid ${theme.palette.primary.gray}`,
                    borderRadius: '8px',
                    transform: 'rotate(-90deg)'
                }
            },
            '& > div.show-more-line': {
                position: 'absolute',
                top: '50%',
                width: '100%',
                borderBottom: `1px solid ${theme.palette.primary.gray}`
            }
        }
    },
    adBanner: {
        paddingLeft: '10px',
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
