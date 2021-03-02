import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.location': {
            display: 'flex',
            alignItems: 'center',
            '& > h6.MuiTypography-subtitle1': {
                textDecoration: 'underline',
            },
            '& > svg': {
                marginRight: '12px',
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
        '& div.multiple-actions': {
            display: 'flex',
            flexFlow: 'row wrap',
            '& div.MuiGrid-item': {
                '& > a': {
                    display: 'flex',
                    textDecoration: 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '&.selected': {
                        '& > h6.MuiTypography-subtitle1': {
                            backgroundImage:
                                'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        },
                        '& svg': {
                            marginLeft: 5,
                            '& > defs > linearGradient > stop': {
                                '&:first-child': {
                                    stopColor: '#675EAA',
                                },
                                '&:last-child': {
                                    stopColor: '#AD66D5',
                                },
                            },
                        },
                    },
                    '& > h6.MuiTypography-subtitle1': {
                        color: 'rgba(49, 49, 49, 0.7)',
                        letterSpacing: '0.4px',
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
                        '& > h6.MuiTypography-subtitle1': {
                            color: '#AD66D5',
                        },
                        '& > svg > path': {
                            fill: '#AD66D5',
                        },
                    },
                },
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
            padding: 0,
            '& svg': {
                width: '40px',
                height: '40px',
            },
        },
    },
}));
