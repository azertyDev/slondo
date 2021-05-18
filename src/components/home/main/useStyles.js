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
                '& section.posts-slider-wrapper': {
                    marginBottom: '55px'
                },
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
                    color: '#fff'
                }
            }
        }
    }
}));
