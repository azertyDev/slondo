import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.ad-slider': {
            '& > div:last-child': {
                display: 'flex',
                justifyContent: 'flex-end',
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
        '& div.adv-header': {
            display: 'flex',
            justifyContent: 'space-between',
            margin: '10px 0',
            '& > div': {
                '&:first-child': {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '75%',
                    '& span': {
                        display: 'flex',
                        alignItems: 'center',
                        height: '30px',
                        '& > h6.MuiTypography-h6': {
                            fontWeight: '600',
                        },
                        '&.advertisement': {
                            background: 'rgba(136, 202, 236, 0.65)',
                            borderRadius: '5px',
                            padding: '0px 20px',
                            '& > h6.MuiTypography-h6': {
                                color: '#fff',
                                fontWeight: '600',
                            },
                        },
                        '&.lot': {
                            background: 'rgba(173, 102, 213, 0.65)',
                            borderRadius: '5px',
                            padding: '0px 20px',
                            '& > h6.MuiTypography-h6': {
                                color: '#fff',
                                fontWeight: '600',
                            },
                        },
                        '&.advanced-lot': {
                            background: 'rgba(242, 153, 74, 0.65)',
                            borderRadius: '5px',
                            padding: '0px 20px',
                            '& > h6.MuiTypography-h6': {
                                color: '#fff',
                                fontWeight: '600',
                            },
                        },
                        '&:nth-child(2)': {
                            flexGrow: 6,
                            margin: '0 15px',
                            '& > h6.MuiTypography-h6': {
                                fontWeight: '600',
                            },
                        },
                        '&.condition': {
                            background: '#90BE27',
                            borderRadius: '50px',
                            '& > h6.MuiTypography-h6': {
                                color: '#fff',
                                fontWeight: '600',
                            },
                        },
                    },
                },
                '&:last-child': {
                    width: '25%',
                    display: 'flex',
                    justifyContent: 'flex-end',
                },
            },
        },
        '& hr': {
            margin: '20px 0',
        },
        '& a': {
            textDecoration: 'none',
        },
        '& > div:last-child': {
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
            width: '25%',
        },
        [theme.breakpoints.down('xs')]: {
            flexDirection: 'column',
            textAlign: 'center',
        },
    },
    shareIcon: {
        height: '25px',
    },
    adBanner: {
        marginTop: '55px',
    },
    breadcrumbs: {
        margin: '20px 0',
    },
}));
