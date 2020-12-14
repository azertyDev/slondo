import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        marginTop: '50px',
        width: '100%',
        height: '400px',
        backgroundColor: '#F2F2F2',
        borderRadius: '100px 100px 0px 0px',
        '& > div > div.wrapper': {
            '& > div': {
                '&.footer-top': {
                    paddingTop: 60,
                    paddingBottom: 90,
                    mixBlendMode: 'normal',
                },
                '& > div > ul': {
                    padding: 0,
                    margin: 0,
                    listStyle: 'none',
                    '& > li': {
                        marginBottom: 20,
                        '&:last-child': {
                            marginBottom: 0,
                        },
                        '& > a': {
                            textDecoration: 'none',
                            '& > h6.MuiTypography-subtitle1': {},
                        },
                    },
                },
                '& div.social-icons': {
                    '& > div': {
                        margin: 0,
                        width: 'auto',
                    },
                },
            },
        },
        '& div.footer-bottom': {
            position: 'relative',
            display: 'flex',
            paddingTop: '25px',
            '& div': {
                '& h6.MuiTypography-subtitle1': {
                    fontSize: '12px',
                    textAlign: 'center',
                },
            },
            '&:before': {
                content: '""',
                position: 'absolute',
                width: 1100,
                height: 2,
                background: '#E0E0E0',
                borderRadius: '1px',
                top: 0,
                left: '50px',
            },
        },
    },
}));
