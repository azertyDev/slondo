import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px',
        '& .uzcard': {
            height: 45,
            marginRight: 10,
            [theme.breakpoints.down('xs')]: {
                height: 40
            }
        },
        '& form': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
            '& label.add-card': {
                marginLeft: '15px'
            },
            '& > div.MuiFormControl-root': {
                marginBottom: 20,
                '& span.MuiSwitch-root + span.MuiTypography-body1': {
                    marginRight: 23
                },
                '& span.MuiSwitch-colorPrimary.Mui-checked': {
                    '& span.MuiSwitch-thumb': {
                        background:
                            'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                        boxShadow:
                            '0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)'
                    }
                },
                '& span.MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track': {
                    background: theme.palette.primary.main
                }
            },
            '& div.MuiTextField-root': {
                '& input.MuiOutlinedInput-input': {
                    borderRadius: 'inherit',
                    border: '1px solid rgba(213, 213, 213, 1)'
                }
            },
            '& span.MuiCheckbox-root': {
                padding: 0,
                marginLeft: 20
            },
            '& div.submit-part': {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                '& > button': {
                    backgroundColor: '#7DBCF6',
                    color: '#fff',
                    width: '197px',
                    textAlign: 'center',
                    marginTop: '30px'
                }
            },
            '& .submit-btn': {
                width: '40%',
                [theme.breakpoints.down('xs')]: {
                    width: '100%'
                },
                marginBottom: 10
            },
            '& a': {
                color: '#675EAA',
                '& p': {
                    marginTop: 30,
                    color: '#675EAA'
                }
            }
        }
    },
    paymentCard: {
        width: '100%',
        minHeight: '280px',
        padding: '20px 30px',
        borderRadius: '20px',
        backgroundImage: ({hasCard}) => hasCard && 'url(/img/card-bg.png)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0px 0px 25px rgba(103, 94, 170, 0.15)',
        '&.MuiPaper-root': {
            backgroundColor: ({hasCard}) => !hasCard && 'inherit'
        },
        '& h6, p': {
            color: ({hasCard}) => hasCard ? '#fff' : 'inherit'
        },
        [theme.breakpoints.down('sm')]: {
            padding: '11px 16px'
        },
        '& > div': {
            height: '100%'
        },
        '& button': {
            width: '100%',
            '&:disabled': {
                backgroundColor: '#E0E0E0',
                borderRadius: '5px'
            }
        },
        '& label': {
            '& h6': {
                [theme.breakpoints.down('md')]: {
                    fontSize: '0.875rem'
                },
                [theme.breakpoints.down('xs')]: {
                    fontSize: '0.75rem'
                }
            }
        },
        '& div.MuiTextField-root': {
            '& input': {
                padding: '12px 14px !important'
            }
        },
        '& h6.error-text': {
            [theme.breakpoints.down('sm')]: {
                fontSize: '0.75rem'
            }
        },
        '& p.MuiFormHelperText-root': {
            color: 'rgba(49, 49, 49, 0.6)'
        }
    },
    sellerInfo: {
        [theme.breakpoints.up('sm')]: {
            position: 'relative',
            '&:before': {
                content: '""',
                position: 'absolute',
                left: 0,
                top: '10%',
                width: '1px',
                height: '80%',
                background: '#E0E0E0'
            }
        },
        '& span.seller-name': {
            fontSize: '1.2rem',
            fontWeight: 600
        },
        '& .MuiPaper-root': {
            padding: 20,
            borderRadius: 10,
            boxShadow: '0px 10px 25px rgb(15 51 107 / 15%)'
        },
        '& button': {
            width: '100%',
            '&:disabled': {
                background: '#BDBDBD'
            }
        },
        '& a.link': {
            textDecoration: 'none',
            color: theme.palette.common.activeTab
        }
    }
}));
