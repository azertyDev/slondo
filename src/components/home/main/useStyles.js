import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '48px',
        '& div.main-slider-wrapper': {
            marginBottom: '40px'
        },
        '& div.content-wrapper': {
            '& div.categories-slider-wrapper': {
                marginBottom: '40px'
            },
            '& div.main-content': {
                '& section.ancmnts-slider-wrapper': {
                    marginBottom: '55px'
                },
                [theme.breakpoints.up('lg')]: {
                    paddingRight: '20px'
                }
            },
            '& div.right-content': {
                '& section.faq-wrapper': {
                    margin: '58px 0 216px'
                }
            }
        }
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
