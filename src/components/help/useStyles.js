import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        // marginTop: 40,
        // '& div.block': {
        //     marginBottom: 25,
        //     '&:last-child': {
        //         margin: 0,
        //     },
        //     '& h6.MuiTypography-h6': {
        //         marginBottom: 12,
        //     },
        // },
        // '& ul': {
        //     margin: 0,
        //     padding: 0,
        //     listStyle: 'none',
        //     '& li': {
        //         '& a': {
        //             textDecoration: 'none',
        //             display: 'inline-block',
        //             '& h6.MuiTypography-subtitle1': {
        //                 color: '#7DBCF6',
        //             },
        //         },
        //     },
        // },
        // '& div.MuiGrid-item': {
        //     '&:last-child': {
        //         paddingLeft: '70px',
        //     }
        // },
    },

    title: {
        '&.MuiTypography-h6': {
            fontWeight: 600,
            marginBottom: 15
        }
    },

    link: {
        color: '#2F80ED',
        textDecorationLine: 'none',
        cursor: 'pointer',
        userSelect: 'none',
        '&:hover': { textDecorationLine: 'none' },
    },
}));
