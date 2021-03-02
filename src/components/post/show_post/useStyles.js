import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        // '& div.ad-slider': {
        //     '& > div:last-child': {
        //         display: 'flex',
        //         justifyContent: 'flex-end',
        //         '& > a': {
        //             display: 'flex',
        //             textDecoration: 'none',
        //             color: '#000',
        //             '& > img': {
        //                 marginLeft: '10px',
        //             },
        //         },
        //         '& > a:hover': {
        //             textDecoration: 'underline',
        //         },
        //     },
        // },
        '& a': {
            textDecoration: 'none',
        },
        // '& > div:last-child': {
        //     display: 'flex',
        //     justifyContent: 'flex-end',
        //     alignItems: 'center',
        //     width: '25%',
        // },
        // [theme.breakpoints.down('xs')]: {
        //     flexDirection: 'column',
        //     textAlign: 'center',
        // },
    },
    shareIcon: {
        height: '25px',
    },
    adBanner: {
        marginTop: '55px',
    },
}));
