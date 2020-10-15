import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.ad-slider': {
            '& > div:last-child': {
                display: 'flex',
                justifyContent: 'flex-end',
                marginTop: '20px',
                '& > a': {
                    display: 'flex',
                    textDecoration: 'none',
                    color: '#000',
                    '& > img': {
                        marginLeft: '10px',
                    },
                },
                '& > a:hover': {
                    textDecoration: 'underline',
                },
            },
        },
        '& hr': {
            margin: '20px 0',
        },
        '& a': {
            textDecoration: 'none',
        },
        '& div.description': {
            display: 'flex',
            justifyContent: 'space-between',
            marginBottom: '10px',
            '& > div:first-child h6.MuiTypography-subtitle1': {
                fontWeight: 600,
            },
            '& a': {
                display: 'flex',
                alignItems: 'center',
            },
        },
        '& div.ad-parameters': {
            '& > div:first-child': {
                margin: 0,
            },
            '& > div > div:first-child h6.MuiTypography-subtitle1': {
                fontWeight: 600,
            },
            '& > div': {
                display: 'flex',
                margin: '0 0 10px 0',
                '& > div:first-child': {
                    width: '33%',
                },
                '& > div': {
                    width: '100%',
                },
            },
            '& > div:last-child': {
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
        '& div.ad-statistic': {
            '& > div': {
                display: 'flex',
                marginBottom: '10px',
                '& > div': {
                    display: 'flex',
                    width: '50%',
                    '& > div:first-child': {
                        display: 'flex',
                        width: '20%',
                    },
                },
            },
        },
        '& div.ad-social': {
            display: 'flex',
            '& > div': {
                width: '50%',
                display: 'flex',
                alignItems: 'center',
            },
            '& > div:first-child': {
                '& > a': {
                    display: 'flex',
                    '& img': {
                        marginLeft: '10px',
                    },
                },
            },
            '& > div:last-child': {
                display: 'flex',
                '& h6.MuiTypography-subtitle1': {
                    marginRight: '30px',
                },
                '& > a': {
                    marginRight: '15px',
                    '& img': {
                        width: '40px',
                    },
                },
            },
        },
    },
    breadcrumbs: {
        margin: '20px 0',
    },
    title: {
        marginBottom: '20px',
    },
    shareIcon: {
        height: '25px',
    },

    // block: {
    //     padding: '20px 0',
    //     borderBottom: '1px solid #ccc',
    //     '&:last-child': {
    //         border: 'none',
    //     },
    // },
    // adLocation: {
    //     flexWrap: 'wrap',
    //     width: '40%',
    //     '& a': {
    //         display: 'flex',
    //         flexDirection: 'row',
    //         alignItems: 'center',
    //         textDecoration: 'none',
    //     },
    //     '& h6.MuiTypography-subtitle1': {
    //         color: '#9c65d5',
    //         textOverflow: 'ellipsis',
    //         overflow: 'hidden',
    //         whiteSpace: 'nowrap',
    //     },
    // },
    downArrow: {
        height: '15px',
        marginLeft: '5px',
    },
    // row: {
    //     display: 'flex',
    //     flexDirection: 'row',
    //     marginBottom: '10px',
    //     alignItems: 'center',
    //     '&:last-child': {
    //         marginBottom: '0',
    //     },
    // },
    // innerRow: {
    //     display: 'flex',
    //     justifyContent: 'space-between',
    //     alignItems: 'center',
    //     width: '60%'
    // },
    // categoryTitle: {
    //     '& h6.MuiTypography-subtitle1': {
    //         fontWeight: '600'
    //     }
    // },
    // description: {
    //     marginTop: '20px',
    // },
    // complainLink: {
    //     display: 'flex',
    //     '& img': {
    //         marginLeft: '5px',
    //     },
    // },
    // moreButton: {
    //     display: 'flex',
    //     alignItems: 'center',
    //     textDecoration: 'none',
    //     color: '#9c65d5',
    // },
    // view: {
    //     marginBottom: '20px',
    // },
    icons: {
        width: '20px',
    },
    // favourites: {
    //     display: 'flex',
    //     justifyContent: 'flex-end',
    //     '& a': {
    //         display: 'flex',
    //         textDecoration: 'none',
    //         color: '#000',
    //     },
    // },

    // complainText: {
    //     color: 'rgba(0, 0, 0, 0.87)',
    //     textDecoration: 'underline',
    // },
    // adShare: {
    //     '& h6.MuiTypography-subtitle1': {
    //         marginRight: '20px',
    //     },
    //     '& a': {
    //         marginRight: '10px',
    //     },
    //     '& img': {
    //         height: '40px',
    //     },
    // },
    // contactButton: {
    //     '& button.MuiButtonBase-root': {
    //         marginBottom: '10px',
    //     },
    // },
    // userAvatarIcon: {
    //     height: '60px',
    // },
    // starIcon: {
    //     height: '20px',
    //     marginRight: '5px',
    // },
    // rating: {
    //     marginLeft: '5px',
    // },
    // userInfo: {
    //     alignContent: 'space-between',
    //     margin: '20px 0',
    //     '& h6.MuiTypography-subtitle1': {
    //         fontSize: '1rem',
    //     },
    // },
    // userName: {
    //     color: '#9c65d5',
    // },
    // lastEntrance: {
    //     fontSize: '12px',
    //     marginBottom: '10px',
    // },
    // subscribe: {
    //     margin: '10px 0',
    //     '& h6.MuiTypography-subtitle1': {
    //         color: '#111',
    //         textDecoration: 'none',
    //         letterSpacing: '0.6px',
    //     },
    //     '& a': {
    //         textDecoration: 'none',
    //     },
    //     '&:hover': {
    //         textDecoration: 'underline',
    //     },
    // },
    // infoBlock: {
    //     margin: '20px 0',
    //     '& h6.MuiTypography-subtitle1': {
    //         marginLeft: '10px',
    //     },
    //     '& img': {
    //         height: '25px',
    //     },
    // },
    // adBanner: {
    //     marginTop: '50px',
    //     '&  div.right-banner': {
    //         width: '100%',
    //         height: '470px',
    //         borderRadius: '7px',
    //         backgroundColor: '#C0C0C0',
    //     },
    // },
}));
