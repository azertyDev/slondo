import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {},
    breadcrumbs: {
        margin: '20px 0',
    },
    title: {
        marginBottom: '20px',
    },
    shareIcon: {
        height: '25px',
    },

    block: {
        padding: '20px 0',
        borderBottom: '1px solid #ccc',
        '&:last-child': {
            border: 'none',
        },
    },
    adLocation: {
        width: '290px',
        '& h6.MuiTypography-subtitle1': {
            color: '#9c65d5',
            textOverflow: 'ellipsis',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
        },
    },
    downArrow: {
        height: '13px',
        marginLeft: '5px',
    },
    adInfoRow: {
        marginBottom: '20px',
        '&:last-child': {
            marginBottom: '0',
        },
    },
    description: {
        marginTop: '20px',
    },
    complainLink: {
        display: 'flex',
        '& img': {
            marginLeft: '5px',
        },
    },
    moreButton: {
        display: 'flex',
        alignItems: 'center',
        textDecoration: 'none',
        color: '#9c65d5',
    },
    view: {
        marginBottom: '20px',
    },
    icons: {
        marginLeft: '20px',
        width: '20px',
    },

    complainText: {
        color: 'rgba(0, 0, 0, 0.87)',
        textDecoration: 'underline',
    },
    adShare: {
        '& h6.MuiTypography-subtitle1': {
            marginRight: '20px',
        },
        '& a': {
            marginRight: '10px',
        },
        '& img': {
            height: '40px',
        },
    },
    contactButton: {
        '& button.MuiButtonBase-root': {
            marginBottom: '10px',
        },
    },
    userAvatarIcon: {
        height: '60px',
    },
    starIcon: {
        height: '20px',
        marginRight: '5px',
    },
    rating: {
        marginLeft: '5px',
    },
    userInfo: {
        alignContent: 'space-between',
        margin: '20px 0',
        '& h6.MuiTypography-subtitle1': {
            fontSize: '1rem',
        },
    },
    userName: {
        color: '#9c65d5',
    },
    lastEntrance: {
        fontSize: '12px',
        marginBottom: '10px',
    },
    subscribe: {
        margin: '10px 0',
        '& h6.MuiTypography-subtitle1': {
            color: '#111',
            textDecoration: 'none',
            letterSpacing: '0.6px',
        },
        '& a': {
            textDecoration: 'none',
        },
        '&:hover': {
            textDecoration: 'underline',
        },
    },
    infoBlock: {
        margin: '20px 0',
        '& h6.MuiTypography-subtitle1': {
            marginLeft: '10px',
        },
        '& img': {
            height: '25px',
        },
    },
    adBanner: {
        marginTop: '50px',
        '&  div.right-banner': {
            width: '100%',
            height: '470px',
            borderRadius: '7px',
            backgroundColor: '#C0C0C0',
        },
    },
}))
