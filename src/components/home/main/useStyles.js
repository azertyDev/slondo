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
        marginBottom: '8px',
        justifyContent: 'center',
        '& > a': {
            textDecoration: 'none',
            '& > div': {
                padding: '10px 23px',
                color: theme.palette.primary.white,
                backgroundColor: theme.palette.primary.createAdBtnColor,
                borderRadius: '12px',
                '& > h6': {
                    textAlign: 'center',
                    color: '#fff'
                }
            }
        }
    }
}));
