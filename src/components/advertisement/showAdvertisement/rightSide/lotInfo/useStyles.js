import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.lot-info': {
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            marginBottom: '30px',
            '& div.buy-now': {
                display: 'flex',
                flexDirection: 'column',
                marginTop: 23,
                '& div:first-child': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& div': {
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        marginLeft: 20,
                        '& > h6.MuiTypography-h6': {
                            fontWeight: '600',
                        },
                        '& > h6.MuiTypography-subtitle2': {
                            marginBottom: 5
                        },
                    },
                },
                '& > div:last-child': {
                    marginTop: "15px",
                    '& > button': {
                        background: '#7DBCF6',
                        borderRadius: '3px',
                        '& > h6.MuiTypography-subtitle1': {
                            color: '#fff',
                            lineHeight: '16px'
                        },
                    },
                }
            },
            '& div.lot-participants-block': {
                display: 'flex',
                flexDirection: 'column',
                marginTop: '20px',
                '& > h6.MuiTypography-subtitle1': {
                    padding: '15px',
                    paddingBottom: '7px',
                    fontWeight: '600',
                },
                '& > div.participants': {
                    flexDirection: 'column',
                    marginBottom: '8px',
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
                            color: '#666'
                        },
                        '& > button': {
                            marginTop: '20px',
                        },
                        '& span': {
                            color: '#AD66D5'
                        },

                    },
                },
            },
            '& div.bet-info': {
                flexDirection: 'column',
                paddingBottom: '20px',
                borderBottom: '1px solid #ccc',
                '& > div': {
                    display: 'flex',
                    justifyContent: 'center',
                    marginBottom: '10px',
                },
                '& > div:nth-child(2)': {
                    display: 'flex',
                    '& > div': {
                        marginRight: '10px',
                        '& > div > input.MuiOutlinedInput-input': {
                            padding: '10px',
                        },
                    },
                    '& > button': {
                        width: '40%',
                    },
                },

                '& > div:nth-child(3)': {
                    justifyContent: 'flex-start',
                },
                '& > div:nth-child(4)': {
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-start',
                    marginBottom: '30px',
                    '& div': {
                        width: '50%',
                    },
                    '& img': {
                        marginRight: '5px',
                    },
                },
                '& > div:nth-child(5)': {
                    display: 'flex',
                    marginBottom: '30px',
                    alignItems: 'center',
                    '& div': {
                        width: '50%',
                        '&  button': {
                            width: '100%',
                        },
                    },
                },
                '& > div:last-child': {},
            },
        },
    },

    lotTimer: {
        display: 'flex',
        justifyContent: "center",
        flexDirection: "column",
        padding: '15px 30px 8px 30px',
        boxShadow: '0px 0px 8px rgba(103, 94, 170, 0.25)',
        borderRadius: '3px',
        '& > h6.MuiTypography-subtitle1': {
            textAlign: 'center',
            fontSize: '1.125rem',
            fontWeight: '600',
            lineHeight: 1
        },
        '& > div': {
            display: 'flex',
            justifyContent: "space-between",
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
                }
            }
        }
    }
}));
