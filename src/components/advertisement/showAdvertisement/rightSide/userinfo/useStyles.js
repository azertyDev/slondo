import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.contact-buttons': {
            '& > div': {
                marginBottom: '10px',
            },
        },
        '& div.subscribe': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            '& > div > img': {
                height: '25px',
                marginRight: '10px',
            },
            '& > a > h6.MuiTypography-subtitle1': {
                color: '#111111',
            },
            '& > a > h6.MuiTypography-subtitle1:hover': {
                textDecoration: 'underline',
            },
        },

        '& div.ad-exp': {
            '& > div': {
                display: 'flex',
                alignItems: 'center',
                '& > div:first-child': {
                    marginRight: '10px',
                },

                '& > div': {
                    // '& > h6.MuiTypography-subtitle1': {
                    //     fontSize: '1.1rem'
                    // },

                    // icons-style
                    '& > div.delivery-icon': {
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
                                fill: '#E88F00',
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
            },
        },
    },
}));
