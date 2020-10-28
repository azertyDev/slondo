import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.ad-slider': {
            '& > div:last-child': {
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '20px',
                '& > a': {
                    display: 'flex',
                    textDecoration: 'none',
                    color: '#000',
                    '& > img': {
                        marginLeft: '10px',
                    },
                },
                '& > a:hover': {
                    textDecoration: 'underline',
                },
            },
        },
        '& hr': {
            margin: '20px 0',
        },
        '& a': {
            textDecoration: 'none',
        },
        '& div.description': {
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
            alignItems: 'center',
            width: '75%',
        },
        '& > div:last-child': {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '25%',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            textAlign: 'center',
        },
    },
    shareIcon: {
        height: '25px',
    },
    adBanner: {
        marginTop: '50px',
        '& > div.right-banner': {
            width: '100%',
            height: '470px',
            borderRadius: '7px',
            backgroundColor: '#C0C0C0',
        },
    },
    breadcrumbs: {
        margin: '20px 0',
    },
}));
