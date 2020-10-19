import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '55.33px',
        '& header.MuiAppBar-root': {
            '& > div.MuiContainer-root': {
                padding: ({isScrollBreak}) => !isScrollBreak && 0,
                transition: 'padding .3s',
                '& > div': {
                    width: '100%',
                    margin: 0,
                    '& > div:first-child': {
                        paddingLeft: 0
                    },
                    '& > div:last-child': {
                        paddingRight: 0
                    }
                }
            }
        },
        '& div.MuiFormControl-root': {
            width: '100%',
            borderRadius: '7px',
        },
        '& div.category-menu': {
            [theme.breakpoints.up('lg')]: {
                padding: '0 15px',
            },
            [theme.breakpoints.down('md')]: {
                padding: 0,
            },
            '& > button > img': {
                height: '20px',
                width: '20px',
                marginLeft: '8px'
            }
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
        '& div.create-ad': {
            backgroundColor: theme.palette.primary.main,
            borderRadius: '6px',
            '& > a': {
                display: 'flex',
                justifyContent: 'center',
                padding: '3px 10px',
                color: theme.palette.primary.white,
                textDecoration: 'none'
            }
        },
        '& button.bottom-sign-button': {
            color: '#000',
            backgroundColor: '#E9E9E9',
            border: '1px solid #C0C0C0',
            '& > img': {
                width: '16px',
                marginLeft: '8px'
            }
        },
        // Adaptive
        '& div.bottom-logo > a': {
            '& img': {
                [theme.breakpoints.down('lg')]: {
                    width: '125px',
                    height: '42px',
                },
                [theme.breakpoints.up('lg')]: {
                    width: '140px',
                    height: '47px',
                }
            }
        },
        '& div.category-menu > button, & div.select-menu, & div.create-ad, button.bottom-sign-button': {
            '& h6': {
                [theme.breakpoints.down('lg')]: {
                    fontSize: '.69rem',
                },
                [theme.breakpoints.up('lg')]: {
                    fontSize: '.875rem',
                }
            }
        },
        '& div.select-local': {
            '& > form': {
                width: '100%',
                '& > div': {
                    padding: '8px 36px',
                    '& > h6': {
                        textAlign: 'center'
                    }
                }
            }
        }
    }
}))
