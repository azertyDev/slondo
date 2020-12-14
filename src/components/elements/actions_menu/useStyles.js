import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
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
                    border: '1px solid transparent',
                    backgroundClip: 'padding-box',
                    '& > svg': {
                        marginRight: '10px',
                    },
                    '&.selected': {
                        border: '1px solid #AD66D5',
                        borderRadius: '5px',
                        // borderStyle: 'inset',
                        // borderImageSlice: '1',
                        // borderImageSource:
                        //     'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                        '& > h6.MuiTypography-subtitle1': {
                            backgroundImage:
                                'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                        },
                        '& svg': {
                            '& > defs > linearGradient > stop': {
                                '&:first-child': {
                                    stopColor: '#675EAA',
                                },
                                '&:last-child': {
                                    stopColor: '#AD66D5',
                                },
                            },
                        },
                    },
                },
            },
            '& > div:last-child': {
                display: 'flex',
                marginBottom: '0',
                justifyContent: 'space-between',
                '& > span.MuiBadge-root': {
                    width: '49%',
                    marginRight: '5px',
                    '& span.MuiBadge-badge': {
                        top: '5px',
                        right: '5px',
                        minWidth: '16px',
                        height: '16px',
                        padding: 0,
                        fontWeight: 600,
                    },
                },
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
