import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.lot-info': {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            '& > div.price': {
                marginBottom: 10,
                '& > h4': {
                    '& span': {
                        fontWeight: '600',
                        fontSize: 36,
                    },
                    textAlign: 'end',
                    fontSize: 25,
                },
            },
            '& div.lot-timer': {
                marginBottom: 20,
            },
            '& div.reserve-price': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                background: '#F2F2F2',
                padding: '8px 0',
                marginBottom: 20,
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
                marginBottom: 20,
                '& > button': {
                    background: '#7DBCF6',
                    borderRadius: '3px',
                    padding: '15px 0',
                    '& > h6.MuiTypography-subtitle1': {
                        color: '#fff',
                        lineHeight: '16px',
                        fontSize: '1.125rem',
                    },
                },
            },
            '& div.lot-participants-block': {
                display: 'flex',
                flexDirection: 'column',
                marginBottom: 20,
                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '1.125rem',
                    padding: '10px 15px',
                    fontWeight: '600',
                    '&:last-child': {
                        padding: '10px 15px',
                        color: '#675EAA',
                        textDecorationLine: 'underline',
                    },
                },
                '& > div.participants': {
                    flexDirection: 'column',
                    borderTop: '1px solid rgba(103, 94, 170, 0.5)',
                    borderBottom: '1px solid rgba(103, 94, 170, 0.5)',
                    padding: '15px',
                    '& > h6.MuiTypography-subtitle1': {
                        marginBottom: '6px',
                    },
                    '& > div': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        '&:not(:last-child)': {
                            marginBottom: '16px',
                        },
                        '& > h6.MuiTypography-subtitle1': {
                            width: '50%',
                        },
                        '& > h6.MuiTypography-subtitle1:last-child': {
                            textAlign: 'end',
                            fontWeight: '600',
                            color: '#666',
                        },
                        '& > button': {
                            marginTop: '20px',
                        },
                        '& span': {
                            color: '#AD66D5',
                        },
                    },
                },
            },
            '& div.bet-info': {
                flexDirection: 'column',
                padding: '15px 10px',
                borderBottom: '1px solid #ccc',
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
                    },
                    '&:nth-child(2)': {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginBottom: '25px',
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
        },
    },

    lotTimer: {
        display: 'flex',
        justifyContent: 'center',
        flexDirection: 'column',
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
            justifyContent: 'space-between',
            marginTop: '7px',
            '& > span': {
                display: 'inline-block',
                fontSize: '24px',
                fontWeight: '600',
                lineHeight: 'normal',
            },
            '& > div': {
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                '& > span:first-child': {
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
                },
                '& > span.MuiTypography-caption': {
                    marginTop: 5,
                    textAlign: 'center',
                },
            },
        },
    },
}));
