import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#97aaa5',
        marginTop: '50px',
        width: '100%',
        height: '400px',
        backgroundColor: '#F2F2F2',
        borderRadius: '100px 100px 0px 0px',
        '& > div > div': {
            padding: '60px 155px',
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
            '& div': {
                '& > ul': {
                    padding: 0,
                    margin: 0,
                    listStyle: 'none',
                    '& > li': {
                        marginBottom: 8,
                        '&:last-child': {
                            marginBottom: 0,
                        },
                        '& > a': {
                            textDecoration: 'none',
                            '& > h6.MuiTypography-subtitle1': {},
                        },
                    },
                },
            },
            '& > div > div.social-icons': {
                '& > div': {
                    margin: 0,
                    width: 'auto',
                },
            },
        },
    },
}));
