import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingBottom: 55,
        borderBottom: '1px solid rgba(103, 94, 170, 0.5)',
        '& a': {
            textDecoration: 'none',
        },
        '& div.breadcrumbs': {
            marginBottom: '10px',
            '& li.MuiBreadcrumbs-li': {
                '& > a h6': {
                    color: 'rgba(49, 49, 49, 0.6)',
                },
            },
        },
        '& div.post-header': {
            display: 'flex',
            marginBottom: '10px',
            alignItems: 'center',
            '& div:not(:last-child)': {
                marginRight: 10,
            },
            '& > div.post-type': {
                '& > h6.MuiTypography-h6': {
                    padding: '0px 20px',
                    lineHeight: '30px',
                    borderRadius: '5px',
                    fontWeight: '600',
                    color: '#fff',
                    '&.post': {
                        background: 'rgba(136, 202, 236, 0.65)',
                    },
                    '&.auc': {
                        background: 'rgba(173, 102, 213, 0.65)',
                    },
                    '&.exauc': {
                        background: 'rgba(242, 153, 74, 0.65)',
                    },
                },
            },
            '& > div.title': {
                flex: 1,
                '& > h2.MuiTypography-h2': {
                    fontSize: '20px',
                    fontWeight: '600',
                },
            },
            '& button': {
                background: 'none',
                borderRadius: '100px',
                color: '#838383',
                padding: 5,
                '& > svg': {
                    marginRight: 5,
                    '& > defs > linearGradient': {
                        '& stop': {
                            stopColor: '#F2C94C',
                        },
                    },
                },
                '&:disabled': {
                    color: '#BDBDBD',
                    '& > svg': {
                        marginRight: 5,
                        '& > defs > linearGradient': {
                            '& stop': {
                                stopColor: '#BDBDBD',
                            },
                        },
                    },
                },
            },
            '& > div.condition': {
                borderRadius: '50px',
                background: '#90BE27',
                textAlign: 'end',
                padding: '6px 20px',
                '& > h6.MuiTypography-h6': {
                    fontSize: '1.125rem',
                    fontWeight: '600',
                    color: '#fff',
                    lineHeight: 1,
                },
            },
        },
        '& div.post-info': {
            display: 'flex',
            justifyContent: 'space-around',
            padding: '13px 0px',
            background: '#F2F2F2',
            borderRadius: '5px',
            margin: '20px 0',
            '& > a': {
                textDecorationLine: 'underline',
            },
            '& > h6.MuiTypography-subtitle1:first-child': {
                '& > span': {
                    color: '#2F80ED',
                },
            },
            '& h6.MuiTypography-subtitle1:last-child': {
                display: 'flex',
                alignItems: 'center',
                '&:hover': {
                    cursor: 'pointer',
                    textDecoration: 'underline',
                },
                '& > svg': {
                    marginLeft: '12px',
                },
            },
        },
        '& div.post-bonus': {
            display: 'flex',
            marginBottom: '20px',
            '& span': {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                padding: '5px 15px',
                marginRight: '30px',
                borderRadius: '100px',
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
                '&:last-child': {
                    marginRight: 0,
                },
                '&.delivery': {
                    '& svg': {
                        '& path': {
                            fill: '#695EAE',
                        },
                    },
                },
                '&.safe_deal': {},
                '&.exchange': {
                    '& svg': {
                        width: 20,
                        height: 22,
                        '& path': {
                            fill: '#4E4E4E',
                        },
                    },
                },
                '&.available': {},
                '& svg': {
                    marginRight: 15,
                },
                '& h6.MuiTypography-subtitle1': {
                    color: theme.palette.common.tab,
                },
            },
        },
        '& div.post-location': {
            marginBottom: '40px',
            '& p.MuiTypography-button': {
                marginBottom: 16,
            },
            '& > h6.MuiTypography-subtitle1': {
                display: 'flex',
                alignItems: 'center',
                fontSize: '1.125rem',
                textDecorationLine: 'underline',
                '& > svg': {
                    height: 49,
                    width: 49,
                    marginRight: 10,
                },
            },
        },
        '& div.post-description': {
            marginBottom: '40px',
            '& p.MuiTypography-button': {
                marginBottom: 19,
            },
            '& h6.description': {
                fontSize: '1.125rem',
                paddingRight: '8vw',
            },
            '& > h6.MuiTypography-subtitle1': {
                display: 'flex',
                alignItems: 'center',
                lineHeight: '22px',
                '&:first-child': {
                    fontWeight: '600',
                },
                '&:last-child': {
                    marginTop: '10px',
                    '& > svg': {
                        width: '48px',
                        height: '48px',
                        marginRight: '10px',
                    },
                },
            },
            '& > div:last-child': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                '& > div': {
                    '& > h6.MuiTypography-subtitle1': {},
                    '& a': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                },
            },
        },
        '& div.post-category': {
            marginBottom: '40px',
            '& > p.MuiTypography-button': {
                marginBottom: 22,
            },
            '& > div': {
                background: '#F2F2F2',
                borderRadius: '10px',
                display: 'inline-block',
                padding: '10px 21px',
                '& > h6.MuiTypography-subtitle1': {
                    fontSize: '1.125rem',
                    '& > span': {
                        color: '#675EAA',
                        fontWeight: '600',
                    },
                },
            },
        },
        '& div.started-price': {
            marginBottom: '40px',
            '& p.MuiTypography-button': {
                marginBottom: '22px',
            },
            '& span': {
                display: 'inline-block',
                padding: '10px 30px',
                background: '#F2F2F2',
                borderRadius: '10px',
            },
        },
        '& div.post-parameters': {
            '& h6.key': {
                width: '20%',
                fontSize: '1.125rem',
                color: '#AAA',
            },
            '& h6.value': {
                fontSize: '1.125rem',
            },
            '& p.MuiTypography-button': {
                marginBottom: '30px',
            },
            '& > ul > div.params-list': {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                paddingBottom: '5px',
                '& > h6.MuiTypography-subtitle1': {
                    display: 'inline-block',
                },
                '& > ul': {
                    padding: 0,
                    listStyle: 'none',
                },
            },
            '& > ul': {
                margin: 0,
                '& > li': {
                    listStyle: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    marginBottom: 20,
                    paddingBottom: '5px',
                    '&:last-child': {
                        margin: 0,
                    },
                },
            },
            '& > div': {
                display: 'flex',
                margin: '0 0 20px 0',
                padding: '0 30px',
                '& > div:first-child': {
                    width: '33%',
                },
                '& > div': {
                    width: '100%',
                },
            },
            '& > div:last-child': {
                margin: 0,
                '& div:last-child': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    '& a': {
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                    },
                },
            },
        },
        '& div.MuiSnackbar-root': {
            position: 'absolute',
            marginTop: '-10px',
        },
    },
    icons: {
        width: '20px',
    },
    downArrow: {
        height: '15px',
        marginLeft: '5px',
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalBody: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 10,
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        padding: '25px 15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > h6.MuiTypography-h6': {
            fontWeight: 600,
            marginBottom: 15,
            textAlign: 'center',
        },
        '& > nav.MuiList-root': {
            width: 490,
            '& > div.MuiListItem-button': {
                '& > div.MuiListItemText-root': {
                    margin: 0,
                },
                '&:last-child': {
                    marginBottom: 15,
                },
                marginBottom: 5,
                border: '1px solid #E0E0E0',
                borderRadius: 5,
                padding: '15px 0 15px 15px',
            },
        },
        '& > div.textarea': {
            width: '100%',
            '& > h6.MuiTypography-subtitle1': {
                marginBottom: 5,
            },
            '& p.MuiFormHelperText-contained': {
                margin: 0,
                marginTop: 5,
                textAlign: 'end',
                color: '#838383',
                fontSize: '0.875rem',
            },
        },
        '& > button.MuiButtonBase-root': {
            width: '200px',
            background: '#675EAA',
            borderRadius: '5px',
            '& > h6.MuiTypography-subtitle1': {
                color: '#fff',
            },
        },
    },
    snackbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: theme.palette.primary.adBgColor,
        borderRadius: '100px',
        padding: 5,
        '& > span': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: 36,
            height: 36,
            background: theme.palette.background.paper,
            borderRadius: '100%',
            '& > svg': {
                '& > defs > linearGradient': {
                    '& stop': {
                        stopColor: '#F2C94C',
                    },
                },
            },
        },
        '& > h6.MuiTypography-h6': {
            color: '#fff',
        },
        '& > h6.MuiTypography-h6, span': {
            marginRight: 50,
        },
    },
    adBanner: {
        marginTop: '50px',
        '& > div.right-banner': {
            width: '100%',
            height: '470px',
            borderRadius: '7px',
            backgroundColor: '#C0C0C0',
        },
    },
}))
