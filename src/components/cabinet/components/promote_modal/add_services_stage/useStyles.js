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
            '& div.description': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'flex-start',
                padding: '10px 15px',
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
                    fontSize: '.8rem',
                    lineHeight: '17px',
                    textAlign: 'start'
                }
            },
            '& div.default-bg, & div.top-bg, & div.turbo_sale-bg, & div.raise_tape-bg':
                {
                    backgroundPosition: 'bottom',
                    backgroundSize: 'contain',
                    backgroundRepeat: 'no-repeat'
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
