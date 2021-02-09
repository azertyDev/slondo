import {makeStyles} from '@material-ui/core/styles';

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
            '& > div': {
                '&:not(:last-child)': {
                    marginRight: '15px',
                },
                '& > h6.MuiTypography-h6': {
                    padding: '0px 20px',
                    lineHeight: '30px',
                    borderRadius: '5px',
                    fontWeight: '600',
                    '&.post': {
                        background: 'rgba(136, 202, 236, 0.65)',
                    },
                    '&.auc': {
                        background: 'rgba(173, 102, 213, 0.65)',
                    },
                    '&.exauc': {
                        background: 'rgba(242, 153, 74, 0.65)',
                    },
                    '&:first-child, &.condition': {
                        color: '#fff',
                    },
                },
            },
            '& > div.condition > h6.MuiTypography-h6': {
                textAlign: 'end',
                background: '#90BE27',
                borderRadius: '50px',
                margin: 0,
                fontSize: '1.125rem',
            },
            '& > div.title': {
                flex: 'auto!important',
                marginRight: 15,
                '& > h2.MuiTypography-h2': {
                    fontSize: '20px',
                    fontWeight: '600',
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
            '& > h6.MuiTypography-subtitle1:first-child': {
                '& > span': {
                    color: '#2F80ED',
                },
            },
            '& > h6.MuiTypography-subtitle1:last-child': {
                display: 'flex',
                alignItems: 'center',
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
                paddingRight: '8vw'
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
                    }
                }
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
                    }
                }
            }
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
                    }
                }
            }
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
                    }
                }
            }
        }
    },
    icons: {
        width: '20px',
    },
    downArrow: {
        height: '15px',
        marginLeft: '5px',
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
}));
