import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    content: {
        marginTop: '40px',
        '& div.main-content': {
            paddingRight: '22px',
            '& section.tabs-wrapper': {
                marginTop: '55px',
            },
        },
        '& div.right-content': {
            '& section.faq-wrapper': {
                marginTop: '51px',
            },
            '& section.banner-wrapper': {
                marginTop: '137px',
            },
        },
    },
    createAdBlock: {
        position: 'fixed',
        bottom: 0,
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        zIndex: 30,
        '& > a': {
            textDecoration: 'none',
            '& > div': {
                width: '235px',
                padding: '10px 25px',
                marginBottom: '8px',
                color: '#fff',
                backgroundColor: theme.palette.primary.createAdBtnColor,
                borderRadius: '12px',
                '& > h6': {
                    fontSize: '1.15rem',
                    textAlign: 'center',
                },
            },
        },
    },
}));
