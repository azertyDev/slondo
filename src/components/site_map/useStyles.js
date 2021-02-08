import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {},
    title: {
        marginBottom: 40,
        fontWeight: 600,
    },
    row: {
        display: 'flex',
        alignItems: 'center',
        background: '#F2F2F2',
        borderRadius: '10px',
        padding: 30,
        marginBottom: 10,
        '& h6.MuiTypography-h6': {
            fontWeight: 600,
        },
        '& > div.category-icon': {
            width: '7%',
        },
        '& ul.menu': {
            display: 'flex',
            padding: 0,
            margin: '10px 0px',
            listStyle: 'none',
            flexWrap: 'wrap',
            '& > li': {
                marginRight: 20,
                marginBottom: 5,
                '&:last-child': {
                    margin: 0,
                },
                '& > a': {
                    textDecoration: 'none',
                    '&:active': {
                        '& > h6.MuiTypography-subtitle1': {
                            color: '#2F80ED',
                        },
                    },
                    '& > h6.MuiTypography-subtitle1': {
                        color: 'rgba(49, 49, 49, 0.6)',
                    },
                },
            },
        },
    },
}));
