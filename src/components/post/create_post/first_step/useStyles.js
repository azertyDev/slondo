import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '30px',
        [theme.breakpoints.down('md')]: {
            marginBottom: '8px'
        },
        '& div.MuiGrid-item': {
            '& div.post': {
                background: 'linear-gradient(270deg, rgba(47, 196, 243, 0.2) 0%, rgba(58, 76, 233, 0.2) 100%)'
            },
            '& div.auc': {
                background: 'linear-gradient(49.94deg, rgba(125, 228, 242, 0.2) 19.03%, rgba(186, 96, 208, 0.2) 72.72%)'
            },
            '& div.exauc': {
                background: 'linear-gradient(49.94deg, rgba(185, 130, 225, 0.2) 19.03%, rgba(208, 130, 96, 0.2) 72.72%)'
            },
            '& div.post-wrapper': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '613px',
                marginBottom: '30px',
                borderRadius: '25px',
                boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.2)',
                textDecoration: 'none',
                [theme.breakpoints.down('md')]: {
                    height: '450px'
                },
                [theme.breakpoints.down('sm')]: {
                    height: '360px',
                    borderRadius: '10px'
                },
                [theme.breakpoints.down('xs')]: {
                    border: '0.6px solid #E0E0E0',
                    background: '#F9F9F9',
                    height: '196px',
                    marginBottom: 0
                },
                '& div.post-title-text': {
                    textAlign: 'center',
                    borderRadius: '18px',
                    margin: '6px',
                    width: '98%',
                    height: '120px',
                    background: 'rgba(255, 255, 255, 0.25)',
                    boxShadow: 'inset 0px 1px 4px rgba(0, 0, 0, 0.15)',
                    [theme.breakpoints.down('md')]: {
                        background: 'none',
                        boxShadow: 'none',
                        height: '58px',
                        width: '100%',
                        margin: 0
                    },
                    '& h6.MuiTypography-subtitle1': {
                        margin: '24px 0 10px',
                        fontSize: '1.75rem',
                        color: '#4E4E4E',
                        fontWeight: '500',
                        [theme.breakpoints.down('md')]: {
                            fontSize: '24px'
                        }
                    },
                    '& p.MuiTypography-body2': {
                        fontSize: '1.125rem',
                        color: 'rgba(49, 49, 49, 0.5)',
                        fontWeight: '400',
                        padding: '0 50px 24px'
                    }
                },
                '& div.post-img': {
                    width: '82%',
                    height: '100%',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'contain',
                    [theme.breakpoints.down('sm')]: {
                        width: '50%',
                        height: '70%',
                        margin: 'auto',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: 'contain'
                    },
                    [theme.breakpoints.down('xs')]: {
                        height: '75%'
                    }
                },
                '& div.post-bottom': {
                    marginBottom: '28px',
                    [theme.breakpoints.down('sm')]: {
                        width: '100%',
                        height: '100%',
                        display: 'flex',
                        marginBottom: 0
                    },
                    '& div.options-wrapper': {
                        width: '50%',
                        margin: 'auto'
                    }
                },
                '& button': {
                    background: '#fff',
                    borderRadius: '100px',
                    width: '82%',
                    marginBottom: '24px',
                    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
                    border: 'none',
                    color: '#4E4E4E',
                    [theme.breakpoints.down('sm')]: {
                        width: '97%',
                        borderRadius: '8px',
                        marginBottom: '14px'
                    },
                    [theme.breakpoints.down('xs')]: {
                        marginBottom: '5px',
                        margin: '5px'
                    },
                    '& h6': {
                        fontSize: '14px',
                        [theme.breakpoints.down('xs')]: {
                            display: 'flex',
                            alignItems: 'center'
                        },
                        '& svg': {
                            marginLeft: '5px',
                            width: '18px',
                            height: '18px',
                            '& path': {
                                fill: '#828282'
                            }
                        }
                    }

                }
            },
            '& > div.guide': {
                textAlign: 'center',
                '& a': {
                    textDecoration: 'none'
                },
                '& h6.MuiTypography-subtitle2': {
                    fontSize: '1.125rem',
                    marginBottom: 5,
                    textDecoration: 'underline'
                },
                '& h6': {
                    '&.post': {
                        color: '#2F80ED'
                    },
                    '&.auc': {
                        color: theme.palette.primary.secondary
                    },
                    '&.exauc': {
                        color: '#F2994A'
                    }
                },
                '& h6.MuiTypography-subtitle1': {
                    color: 'rgba(49, 49, 49, 0.6)'
                }
            }
        }
    },
    postType: {
        display: 'flex',
        marginBottom: '5px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '25px'
        },
        [theme.breakpoints.down('xs')]: {
            marginBottom: '15px'
        },
        '&:last-child': {
            marginBottom: 0
        },
        alignItems: 'center',
        '& h6.MuiTypography-subtitle2': {
            [theme.breakpoints.down('xs')]: {
                fontSize: '10px'
            }
        },
        '& svg': {
            marginRight: '9px'
        }
    }
}));
