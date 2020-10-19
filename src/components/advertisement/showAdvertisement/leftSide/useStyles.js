import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.ad-slider': {
            borderBottom: '1px solid #ccc',
            paddingBottom: '20px',
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
        '& a': {
            textDecoration: 'none',
        },
        '& div.description': {
            borderBottom: '1px solid #ccc',
            padding: '20px 0',
            '& div': {
                display: 'flex',
                flexDirection: 'column',
            },
            '& > div:first-child': {
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginBottom: '10px',
                '& > div': {
                    '& > h6.MuiTypography-subtitle1': {
                        color: '#838383',
                    },
                    '& a': {
                        display: 'flex',
                        alignItems: 'center',
                    },
                },
            },
        },
        '& div.ad-parameters': {
            borderBottom: '1px solid #ccc',
            padding: '20px 0',
            '& > div:first-child': {
                marginBottom: '20px',
                borderBottom: '1px solid #ccc',
                paddingBottom: '20px',
            },
            '& > div > div:first-child h6.MuiTypography-subtitle1': {
                color: '#838383',
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
        '& div.ad-statistic': {
            borderBottom: '1px solid #ccc',
            padding: '20px 0',
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
                '& > div:nth-child(odd)': {
                    '& h6.MuiTypography-subtitle1': {
                        color: '#838383',
                    },
                },
            },
        },
        '& div.ad-social': {
            padding: '20px 0',
            display: 'flex',
            [theme.breakpoints.down('xs')]: {
                flexFlow: 'column wrap',
            },
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
                [theme.breakpoints.down('xs')]: {
                    marginTop: '10px',
                },
                '& h6.MuiTypography-subtitle1': {
                    marginRight: '30px',
                },
                '& > a': {
                    marginRight: '15px',
                    '& img': {
                        width: '40px',
                        [theme.breakpoints.down('sm')]: {
                            width: '30px',
                        },
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
}));
