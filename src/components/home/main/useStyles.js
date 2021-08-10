import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '48px',
        [theme.breakpoints.down('md')]: {
            paddingTop: 0
        },
        '& div.main-slider-wrapper': {
            marginBottom: '40px',
            [theme.breakpoints.down('md')]: {
                marginBottom: '16px'
            }
        },
        '& div.content-wrapper': {
            '& div.categories-slider-wrapper': {
                marginBottom: '40px',
                [theme.breakpoints.down('md')]: {
                    marginBottom: '16px'
                }
            },
            '& div.main-content': {
                [theme.breakpoints.up('lg')]: {
                    paddingRight: '16px'
                }
            },
            '& div.right-content': {
                margin: '58px 0 131px'
            }
        }
    },
    createAdBlock: {
        bottom: 0,
        zIndex: 30,
        width: '100%',
        display: 'flex',
        position: 'fixed',
        marginBottom: '22px',
        justifyContent: 'center',
        '& > a': {
            textDecoration: 'none',
            '& > div': {
                display: 'flex',
                alignItems: 'center',
                padding: '11px 24px',
                color: theme.palette.primary.white,
                backgroundColor: '#00AAFF',
                borderRadius: '100px',
                '& > h6': {
                    fontSize: '18px',
                    textAlign: 'center',
                    color: '#fff',
                    marginRight: '10px'
                },
                '& svg': {
                    width: '20px',
                    height: '20px'
                }
            }
        }
    }
}));
