import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        position: 'relative',
        height: '55.33px',
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
                    },
                    '& > div:last-child': {
                        paddingRight: 0
                    }
                }
            },
            '& div.bottom-logo': {
                '& a': {
                    display: 'flex',
                    alignItems: 'center'
                }
            }
        },
        '& div.MuiFormControl-root': {
            width: '100%',
            borderRadius: '7px',
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
                marginLeft: '8px'
            }
        },
        '& button.bottom-sign-button': {
            color: '#000',
            backgroundColor: '#F2F2F2',
            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.15)',
            width: '88px',
        },
        '& button.create-ad-button': {
            '& > h6.MuiTypography-subtitle2': {
                lineHeight: '15px',
                letterSpacing: '0.5px',
                color: '#fff'
            },
        },
        '& button.bottom-category-button': {
            width: '136px',
            '& > h6.MuiTypography-subtitle2': {
                lineHeight: '15px',
                letterSpacing: '0.5px',
                fontSize: '1.125rem',
                color: '#fff'
            },
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
