import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '50px',
        [theme.breakpoints.down('md')]: {
            height: '30px',
            marginBottom: '15px'
        },
        '& header.MuiAppBar-root': {
            background: '#fafafa',
            '& > div.MuiContainer-root': {
                padding: ({isScrollBreak}) => !isScrollBreak && 0,
                transition: 'padding .3s',
                '& > div': {
                    width: '100%',
                    margin: 0,
                    '& > div:first-child': {
                        paddingLeft: 0
                    }
                }
            },
            '& div.bottom-logo': {
                '& a': {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center'
                }
            }
        },
        '& div.MuiFormControl-root': {
            width: '100%',
            borderRadius: '7px'
        },
        '& div.select-menu > div': {
            width: '100%',
            '& div.MuiSelect-selectMenu': {
                padding: '7px 0',
                '& > h6': {
                    textAlign: 'center',
                    paddingRight: '8px'
                }
            },
            '& svg': {
                right: 0
            }
        },
        '& button.header-button': {
            borderRadius: '10px',
            borderStyle: 'initial',
            height: '38px',
            '& > svg': {
                marginLeft: '8px',
                [theme.breakpoints.down(1200)]: {
                    display: 'none'
                }
            }
        },
        '& button.bottom-sign-button': {
            color: '#000',
            backgroundColor: '#F2F2F2',
            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
            width: '100%'
        },
        '& a.create-post-link': {
            textDecoration: 'none',
            '& button': {
                width: '100%',
                '& h6.MuiTypography-subtitle2': {
                    lineHeight: '15px',
                    letterSpacing: '0.5px',
                    color: '#fff'
                }
            }
        },
        '& button.bottom-category-button': {
            width: '100%',
            '& > h6.MuiTypography-subtitle2': {
                lineHeight: '15px',
                letterSpacing: '0.5px',
                fontSize: '1.125rem',
                color: '#fff'
            }
        },
        // Adaptive
        '& div.bottom-logo > a': {
            '& img': {
                [theme.breakpoints.down('lg')]: {
                    width: '125px',
                    height: '42px'
                },
                [theme.breakpoints.up('lg')]: {
                    width: '140px',
                    height: '47px'
                }
            }
        },
        '& div.category-menu > button, & div.select-menu, & div.create-ad, button.bottom-sign-button': {
            '& h6': {
                [theme.breakpoints.down('lg')]: {
                    fontSize: '.69rem'
                },
                [theme.breakpoints.up('lg')]: {
                    fontSize: '.875rem'
                }
            }
        },

        '& div.translate-local': {
            [theme.breakpoints.down('md')]: {
                marginTop: '103px'
            },
            [theme.breakpoints.down('xs')]: {
                marginTop: '96px'
            },
            marginTop: '103px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between'
        }
    }
}));
