import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.location': {
            display: 'flex',
            alignItems: 'center',
            '& > svg': {
                marginRight: '12px'
            },
        },
        '& div.social-icons > a': {
            display: 'flex',
            alignItems: 'center',
            marginRight: '12px',
            '& > img': {
                width: '35px',
            },
        },
        '& div.multiple-content': {
            display: 'flex',
            flexFlow: 'row wrap',
            '& > a': {
                display: 'flex',
                textDecoration: 'none',
                alignItems: 'center',
                '& > h6.MuiTypography-subtitle1': {
                    color: 'rgba(49, 49, 49, 0.7)',
                    letterSpacing: '0.4px'
                },
                '& > svg': {
                    marginLeft: '5px',
                    height: '20px',
                    [theme.breakpoints.down('lg')]: {
                        width: '16px',
                    },
                    [theme.breakpoints.up('lg')]: {
                        width: '16px',
                    },
                },
                '&:hover': {
                    color: '#AD66D5',
                    textDecoration: 'underline',
                    '& > svg > path': {
                        fill: '#AD66D5',
                    }
                }
            },
            '& h6': {
                [theme.breakpoints.down('lg')]: {
                    fontSize: '.85rem',
                },
                [theme.breakpoints.up('lg')]: {
                    fontSize: '1rem',
                },
            },
        },

        // ------------> adaptive <--------------- //
        '& div.top-header-logo > a > img': {
            height: '50px',
            width: '145px',
        },
        '& div.burger-menu': {
            width: '35px',
            '& > div': {
                height: '4px',
                backgroundColor: '#675EAA',
                margin: '4px 0',
            },
        },
    },
    avatarBlock: {
        '& > button': {
            padding: '8px',
            '& img': {
                width: '40px'
            }
        }
    }
}))
