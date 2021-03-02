import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '48px',
        '& div.main-slider-wrapper': {
            marginBottom: '40px',
        },
        '& div.content-wrapper': {
            '& div.categories-slider-wrapper': {
                marginBottom: '40px',
            },
            '& div.main-content': {
                '& section.ancmnts-slider-wrapper': {
                    marginBottom: '55px',
                },
                [theme.breakpoints.up('lg')]: {
                    paddingRight: '16px',
                },
            },
            '& div.right-content': {
                '& section.faq-wrapper': {
                    margin: '58px 0 131px',
                },
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
                color: theme.palette.primary.white,
                backgroundColor: theme.palette.primary.createAdBtnColor,
                borderRadius: '12px',
                '& > h6': {
                    fontSize: '1.15rem',
                    textAlign: 'center',
                    color: '#fff',
                },
            },
        },
    },
    scrollTop: {
        width: 50,
        height: 50,
        backgroundSize: '200% auto',
        color: '#fff',
        borderRadius: '50%',
        boxShadow:
            '0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24)',
        transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
        cursor: 'pointer',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundImage:
            'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
        '& span.MuiFab': {
            backgroundColor: theme.palette.primary.white,
            width: 48,
            height: 48,
            position: 'relative',
            borderRadius: '50%',
            '& span.icon': {
                position: 'absolute',
                top: '44%',
                left: '38%',
                width: '13px',
                height: '13px',
                transform: 'rotate(-135deg)',
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    bottom: '0px',
                    right: '0px',
                    background:
                        'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                    width: 'inherit',
                    height: '3.2px',
                },
                '&:after': {
                    content: '""',
                    position: 'absolute',
                    top: '0px',
                    right: '0px',
                    background:
                        'linear-gradient(49.94deg, #AD66D5 19.03%, #675EAA 72.72%)',
                    height: 'inherit',
                    width: '3.2px',
                },
            },
        },
        '&:hover': {
            backgroundImage: theme.palette.primary.secondary,
            '& span.MuiFab': {
                backgroundColor: theme.palette.primary.secondary,
                '& > span:before, & > span:after': {
                    background: `${theme.palette.primary.white} !important`,
                },
                '& span.icon': {},
            },
        },
    },
}));
