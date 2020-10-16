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
        '& div.delivery-icon': {
            '& > svg': {
                width: '30px',
                height: '30px',
                '& > path': {
                    fill: '#695EAE',
                },
            },
        },
        '& div.safe-icon': {
            '& > svg': {
                width: '30px',
                height: '30px',
                '& > path': {
                    fill: '#E88F0C',
                },
            },
        },
        '& div.exchange-icon': {
            '& > svg': {
                width: '30px',
                height: '30px',
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
}));
