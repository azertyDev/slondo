import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.tabs div.MuiTabs-flexContainer': {
            justifyContent: 'space-around',
            '& h6': {
                textTransform: 'uppercase',
            },
        },
        '& div.cards-container': {
            marginTop: '40px',
        },
        '& div.ads-wrapper': {
            '& div.card-header > div > h6.MuiTypography-subtitle2': {
                backgroundColor: 'rgba(136, 202, 236, .65)',
            },
            '& > div > div> a': {
                textDecoration: 'none'
            }
        },
        '& div.lots-wrapper': {
            '& div.card-header > div > h6.MuiTypography-subtitle2': {
                backgroundColor: 'rgba(173, 102, 213, .65)',
            },
            '& > div > div> a': {
                textDecoration: 'none'
            }
        },
    },
    showMoreContainer: {
        marginTop: '40px',
        [theme.breakpoints.down('md')]: {
            marginTop: '30px',
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
                boxShadow: '0px 0px 8px rgba(132, 92, 171, 0.2)',
                borderRadius: '100px',
                zIndex: 1,
                '& > h6.MuiTypography-subtitle2': {
                    lineHeight: '17px',
                    letterSpacing: '0.25px',
                },
            },
        },
    },
    adBanner: {
        paddingLeft: '10px',
        '& > div > div': {
            borderRadius: '7px',
            backgroundColor: '#C0C0C0',
        },
        '& div.top-banner': {
            height: '250px',
        },
        '& div.central-banner': {
            height: '130px',
            margin: '10px 0',
        },
        '& div.bottom-banner': {
            height: '250px',
        },
    },
}));
