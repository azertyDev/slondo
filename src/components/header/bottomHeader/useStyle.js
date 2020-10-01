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
        '& span.MuiButton-label': {
            textTransform: 'none',
        },
        '& div.search-block > div form': {
            position: 'relative',
            display: 'flex',
            width: '100%',
        },
        '& img.search-icon': {
            position: 'absolute',
            height: '20px',
            top: 'calc(50% - 10px)',
            left: '10px'
        },
        '& input.search-input': {
            padding: '8px 55px 8px 40px',
            width: '100%',
            borderRadius: '7px',
            border: '1px solid #ccc',
            fontSize: '0.87rem',
        },
        '& button.search-button': {
            width: '70px',
            marginLeft: '-70px',
            color: '#000',
            borderBottomRightRadius: '7px',
            borderTopRightRadius: '7px',
            borderBottomLeftRadius: '0',
            borderTopLeftRadius: '0',
            borderStyle: 'none',
            backgroundColor: '#97aaa5',
            lineHeight: '1.65',
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
        '& button.bottom-sign-button': {
            color: '#000',
            backgroundColor: '#fafafa',
            border: '1px solid #C0C0C0',
            '& > img': {
                width: '20px',
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
                    width: '135px',
                    height: '45px',
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
            position: 'relative',
            display: 'flex',
            '& > img': {
                position: 'absolute',
                top: 'calc(50% - 16px)',
                left: '5px',
                width: '33px',
                height: '33px',
            },
            '& > div': {
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
