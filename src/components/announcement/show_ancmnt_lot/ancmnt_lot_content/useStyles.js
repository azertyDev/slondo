import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& a': {
            textDecoration: 'none',
        },
        '& div.breadcrumbs': {
            marginBottom: '10px',
            '& li.MuiBreadcrumbs-li a h6': {
                color: 'rgba(49, 49, 49, 0.6)',
            },
        },
        '& div.adv-header': {
            display: 'flex',
            marginBottom: '10px',
            alignItems: 'center',
            '& > h6': {
                marginRight: '15px',
                padding: '0px 10px',
                lineHeight: '30px',
                borderRadius: '5px',
                fontWeight: '600',
                '&:first-child, &.condition': {
                    color: '#fff',
                },
                '&.advertisement': {
                    background: 'rgba(136, 202, 236, 0.65)',
                },
                '&.lot': {
                    background: 'rgba(173, 102, 213, 0.65)',
                },
                '&.advanced-lot': {
                    background: 'rgba(242, 153, 74, 0.65)',
                },
                '&.condition': {
                    margin: '0 10px 0 auto',
                    background: '#90BE27',
                    borderRadius: '50px',
                },
            },
            '& > h2': {
                '&.title': {
                    fontSize: '20px',
                    fontWeight: '600',
                },
            },
        },
        '& div.ad-info': {
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
        '& div.ad-bonus': {
            display: 'flex',
            marginBottom: '20px',
            '& span': {
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'row',
                padding: '8px 15px',
                marginRight: '30px',
                borderRadius: '100px',
                boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
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
                    color: '#838383',
                },
            },
        },
        '& div.ad-location': {
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
        '& div.ad-description': {
            marginBottom: '40px',
            '& p.MuiTypography-button': {
                marginBottom: 22,
            },
            '& > div:first-child': {
                '& > h6.MuiTypography-subtitle1': {
                    display: 'flex',
                    alignItems: 'center',
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
            },
            '& > div:last-child': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                marginTop: '30px',
                '& > div': {
                    '& > h6.MuiTypography-subtitle1': {},
                    '& a': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                },
            },
        },
        '& div.ad-category': {
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
        '& div.ad-parameters': {
            '& p.MuiTypography-button': {
                marginBottom: '22px',
            },
            '& > ul > div.params-list': {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '20px',
                borderBottom: '1px solid #ccc',
                paddingBottom: '5px',
                '& > h6.MuiTypography-subtitle1': {
                    width: '20%',
                    display: 'inline-block',
                },
                '& > ul': {
                    padding: 0,
                    listStyle: 'none',
                    '& > li': {
                        '& > h6.MuiTypography-subtitle1': {
                            fontSize: '18px',
                            fontWeight: '600',
                        },
                    },
                },
            },
            '& > ul': {
                margin: 0,
                '& > li': {
                    listStyle: 'none',
                    display: 'flex',
                    marginBottom: 20,
                    borderBottom: '1px solid #ccc',
                    paddingBottom: '5px',
                    '&:last-child': {
                        margin: 0,
                    },
                    '& h6.key': {
                        width: '20%',
                        fontSize: '18px',
                    },
                    '& h6.value': {
                        width: '20%',
                        fontSize: '18px',
                        fontWeight: '600',
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
    modal: {
        backgroundColor: 'rgba(0, 0, 0, .95)',
        '& h6.MuiTypography-h6': {
            color: '#fff',
            fontWeight: '600',
            textAlign: 'center',
        },
    },
    slider: {
        '& div.slick-slide img': {
            cursor: 'default',
            // '&.makeStyles-firstSlider-20 div.slick-slider': {
            //     '& > div.slick-list': {
            //         width: '1065px !important',
            //         height: '627px !important',
            //         margin: '0 auto',
            //         '& div.slick-track': {
            //             '& div.slick-slide': {
            //                 '& img': {
            //                     width: '100% !important',
            //                     '&:hover': {
            //                         cursor: 'default'
            //                     }
            //                 }
            //             }
            //         }
            //     }
            // },
            // '&.makeStyles-secondSlider-21': {
            //     marginTop: 30,
            //     '& > div.slick-slider': {
            //         '& div.slick-list': {
            //             width: '1065px',
            //             margin: '0 auto',
            //             '& div.slick-track': {
            //                 display: 'flex',
            //                 '& div.slick-slide': {
            //                     marginRight: 15,
            //                     width: 'auto !important',
            //                     '& div': {
            //                         width: '255px !important',
            //                         height: '150px !important',
            //                         '& img': {
            //                             height: 150
            //                         }
            //                     },
            //                 }
            //             },
            //         }
            //     }
            // }
        },
    },
}));
