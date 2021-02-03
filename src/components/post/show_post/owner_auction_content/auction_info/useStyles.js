import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 60,
        '& div.lot-info': {
            '& > div': {
                marginBottom: 20,
                '&:last-child': {
                    margin: 0,
                },
            },
            '& div.lot-timer': {},
            '& div.reserve-price': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                background: '#F2F2F2',
                padding: '8px 0',
                '& div': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginLeft: 10,
                    '& > h6.MuiTypography-subtitle2': {
                        color: '#666666',
                    },
                },
            },
            '& div.buy-now': {
                background: '#F2F2F2',
                borderRadius: '5px',

                padding: '15px 10px',
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '1.125rem',
                    textAlign: 'center',
                },
                '& > button': {
                    background: theme.palette.primary.createAdBtnColor,
                    padding: '14px 10px',
                    '& > h6.MuiTypography-subtitle1': {
                        color: '#fff',
                    },
                },
            },
            '& div.lot-participants-block': {
                display: 'flex',
                flexDirection: 'column',

                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '1.125rem',
                    padding: '10px 15px',
                    fontWeight: '600',
                    '&:last-child': {
                        padding: '10px 15px 0',
                        color: '#675EAA',
                        textDecorationLine: 'underline',
                    },
                },
                '& h6.all-bets': {
                    fontWeight: '400',
                },
                '& > div.participants': {
                    padding: '15px',
                    borderTop: '1px solid rgba(103, 94, 170, 0.5)',
                    borderBottom: '1px solid rgba(103, 94, 170, 0.5)',
                    '& > ul': {
                        listStyle: 'none',
                        padding: '0',
                        margin: '0',
                        '& > li': {
                            display: 'flex',
                            justifyContent: 'space-between',
                            position: 'relative',
                            padding: '10px 0',
                            '& > div': {
                                '&:first-child': {
                                    display: 'flex',
                                    flexFlow: 'column wrap',
                                    width: '60%',
                                    '& div.participant-name': {
                                        marginBottom: '10px',
                                        '& > h6.MuiTypography-subtitle1': {
                                            color: '#666666',
                                            '& > span': {
                                                color: '#AD66D5',
                                            },
                                        },
                                    },
                                    '& div.dateAndTime': {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        width: '80%',
                                        '& > h6.bet-time': {
                                            color: '#2F80ED',
                                            fontSize: '0.875rem',
                                        },
                                        '& > h6.bet-date': {
                                            color: 'rgba(49, 49, 49, 0.6)',
                                            fontSize: '0.875rem',
                                        },
                                    },
                                },
                                '&:last-child': {
                                    textAlign: 'end',
                                    width: '40%',
                                    '& > h6': {
                                        fontWeight: '600',
                                        '&.final-bet': {
                                            color: 'rgba(49, 49, 49, 0.6)',
                                            marginBottom: '10px',
                                        },
                                        '&.per-bet': {
                                            color: '#BDBDBD',
                                            fontSize: '0.875rem',
                                            fontWeight: '400',
                                        },
                                    },
                                },
                            },
                            '&:after': {
                                content: '""',
                                position: 'absolute',
                                bottom: 0,
                                border: 0,
                                margin: 0,
                                height: 1,
                                width: '100%',
                                background: '#333',
                                background:
                                    'linear-gradient(left, hsla(0,0%,0%,0) 0%, hsla(0,0%,85%,1) 50%, hsla(0,0%,0%,0) 100%)',
                            },
                            '&:last-child': {
                                '&:after': {
                                    display: 'none',
                                },
                                paddingBottom: '0',
                            },
                            '&:first-child': {
                                '& > div': {
                                    '&:last-child': {
                                        '& > h6': {
                                            fontWeight: '600',
                                            '&.final-bet': {
                                                color: '#666666',
                                            },
                                            '&.per-bet': {
                                                color: '#90BE27',
                                                fontWeight: '600',
                                            },
                                        },
                                    },
                                },
                            },
                        },
                    },
                },
            },
            '& div.bet-info': {
                flexDirection: 'column',
                padding: '15px 10px',
                background: '#F2F2F2',
                borderRadius: '5px',
                '& > div': {
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    '& > div.MuiFormControl-root': {
                        '& > div.MuiInputBase-root': {
                            background: '#fff',
                            borderRadius: '3px',
                            '& input': {
                                padding: '15px 20px',
                            },
                        },
                    },
                    '& > button': {
                        margin: '5px 0',
                        border: '1px solid #AD66D5',
                    },
                    '&:nth-child(2)': {
                        textAlign: 'center',
                        '& > h6.MuiTypography-subtitle2:last-child': {
                            color: '#845CAB',
                        },
                    },
                    '&:nth-child(3)': {
                        justifyContent: 'flex-start',
                        '& > button': {
                            borderRadius: '3px',
                            margin: 0,
                            '& > h6.MuiTypography-subtitle1': {
                                color: theme.palette.primary.white,
                            },
                        },
                    },
                },

                '& > div:last-child': {},
            },
            '& div.suggest_price': {
                '& > button': {
                    width: '100%',
                    background: '#675EAA',
                    '& > h6.MuiTypography-subtitle1': {
                        color: '#fff',
                    },
                },
            },
        },
    },

    lotTimer: {
        padding: '15px 30px 8px 30px',
        boxShadow: '0px 0px 8px rgba(103, 94, 170, 0.25)',
        borderRadius: '3px',
        '& > h6.MuiTypography-subtitle1': {
            textAlign: 'center',
            fontSize: '1.125rem',
            fontWeight: '600',
            lineHeight: 1,
        },
        '& > div': {
            display: 'flex',
            flexDirection: 'column',
            '& div.timer-title': {
                textAlign: 'center',
                marginBottom: 10,
                '& span.MuiTypography-button': {},
            },
            '& > span': {
                display: 'inline-block',
                fontSize: '24px',
                fontWeight: '600',
                lineHeight: 'normal',
            },
            '& > div:last-child': {
                display: 'flex',
                justifyContent: 'space-between',
                '& > div': {
                    textAlign: 'center',
                    '& span': {
                        '&:first-child': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            background: '#675EAA',
                            borderRadius: '3px',
                            width: '36px',
                            height: '38px',
                            '& h6.MuiTypography-h6': {
                                fontWeight: '600',
                                color: '#FFFFFF',
                            },
                            '&.disabled': {
                                background: '#BDBDBD',
                            },
                        },
                    },
                },
                '& > span': {
                    marginTop: '5px',
                    fontSize: '24px',
                    fontWeight: '600',
                },
            },
        },
    },
}));
