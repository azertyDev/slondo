import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        '& div.select-service-wrapper': {
            marginBottom: '20px',
            '& div.MuiFormControl-root': {
                width: '100%',
                height: '48px',
                '& div.MuiOutlinedInput-input': {
                    padding: '8px',
                    paddingLeft: '16px',
                    paddingRight: '32px'
                },
                '& div.MuiSelect-root:focus': {
                    borderRadius: '8px'
                },
                '& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline':
                    {
                        borderColor: 'rgba(0, 0, 0, 0.23)',
                        borderWidth: '1px'
                    }
            },
            '& div.price-wrapper': {
                '& span': {
                    color: '#4e4e4e',
                    '&.price': {
                        fontSize: '36px',
                        fontWeight: '700'
                    }
                }
            }
        },
        '& div.description-wrapper': {
            minHeight: '260px',
            marginBottom: '15px',
            background: '#f9f9f9',
            borderRadius: '8px',
            '&.top': {
                background:
                    'linear-gradient(90.62deg, rgba(243, 133, 34, 0.05) 0.56%, rgba(255, 184, 0, 0.05) 99.49%)'
            },
            '&.turbo_sale': {
                background: '#FFF2F2'
            },
            '&.raise_tape': {
                background: 'rgba(40, 104, 244, 0.05)'
            },
            '& div.description': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '10px',
                paddingLeft: '80px',
                [theme.breakpoints.down('sm')]: {
                    paddingLeft: '10px'
                },
                '& div.service-header': {
                    marginBottom: '15px',
                    '& > svg': {
                        marginRight: '10px'
                    },
                    '& > h6': {
                        fontWeight: 600
                    }
                },
                '& > p': {
                    fontSize: '.85rem',
                    lineHeight: '18px',
                    textAlign: 'start'
                },
                '&.top, &.turbo_sale, &.raise_tape': {
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: '115px',
                    backgroundPosition: '-45px center',
                    [theme.breakpoints.down('sm')]: {
                        backgroundPosition: 'bottom',
                        backgroundSize: 'auto'
                    }
                },
                '&.top': {
                    backgroundImage: 'url(/img/services/top_frame.svg)'
                },
                '&.turbo_sale': {
                    backgroundImage: 'url(/img/services/turbo_frame.svg)'
                },
                '&.raise_tape': {
                    backgroundImage: 'url(/img/services/raise_tape_frame.svg)'
                }
            },
            '& div.default-bg, & div.top-bg, & div.turbo_sale-bg, & div.raise_tape-bg':
                {
                    backgroundPosition: 'bottom',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
                },
            '& div.service-bg': {
                marginTop: '75px',
                [theme.breakpoints.down('sm')]: {
                    marginTop: 0
                },
                '&.top-bg, &.turbo_sale-bg, &.raise_tape-bg': {
                    [theme.breakpoints.down('sm')]: {
                        display: 'none'
                    }
                }
            },
            '& div.default-bg': {
                backgroundImage: 'url(/img/services/default.png)'
            },
            '& div.top-bg': {
                backgroundImage: 'url(/img/services/top.png)'
            },
            '& div.turbo_sale-bg': {
                backgroundImage: 'url(/img/services/turbo_sale.png)'
            },
            '& div.raise_tape-bg': {
                backgroundImage: 'url(/img/services/raise_tape.png)'
            }
        },
        '& button.select-service': {
            width: '100%',
            height: '100%',
            background: '#fff',
            border: '1px solid #2F80ED',
            borderRadius: '8px',
            '& > p': {
                color: '#2F80ED'
            }
        }
    }
}));
