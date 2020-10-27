import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.menu-item': {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F2F2F2',
            padding: '15px',
            borderRadius: '10px',
            marginBottom: '10px',
            '& > div': {
                marginBottom: '5px',
                '& button': {
                    padding: '10px 0',
                    borderRadius: '5px',
                    background: '#fff',
                    boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                    '& > svg': {
                        marginRight: '10px',
                        '& > def > linearGradient > stop': {
                            stopColor: 'red',
                        },
                    },
                    '&:focus, &:active': {
                        border: '1px solid',
                        borderStyle:'inset',
                        borderRadius: '5px',
                        borderImageSlice: '1',
                        borderImageSource:
                            'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                       
                        '& > h6.MuiTypography-subtitle1': {
                            backgroundImage:
                                'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        },
                        '& > svg': {},
                    },
                },
            },
            '& > div:last-child': {
                display: 'flex',
                marginBottom: '0',
                '& > button:first-child': {
                    marginRight: '5px',
                },
            },
        },
        '& div.menu-item:nth-child(3)': {
            '& > div': {
                '& button': {
                    marginRight: '0px !important',
                },
            },
        },
        '& > div.menu-item:last-child': {
            margin: '0',
        },
    },
}));
