import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.block': {
            marginBottom: 25,
            '&:last-child': {
                margin: 0,
            },
            '& h6.MuiTypography-h6': {
                marginBottom: 12,
            },
        },
        '& ul': {
            margin: 0,
            padding: 0,
            listStyle: 'none',
            '& li': {
                '& a': {
                    textDecoration: 'none',
                    display: 'inline-block',
                    '& h6.MuiTypography-subtitle1': {
                        color: '#7DBCF6',
                    },
                },
            },
        },
        '& div.MuiGrid-item': {
            paddingLeft: '40px',
        },
    },

    moreLink: {
        color: 'rgba(49, 49, 49, 0.6)',
        lineHeight: '20px',
        textDecorationLine: 'underline',
        cursor: 'pointer',
        userSelect: 'none',
        '&:hover': {},
    },
}));
