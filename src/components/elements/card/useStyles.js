import { makeStyles } from '@material-ui/core/styles';
import theme from '../../../theme';

export const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        borderRadius: '7px',
        filter: 'drop-shadow(0px 2px 8px rgba(132, 92, 171, 0.2))',
        '&:hover': {
            boxShadow: 'rgba(0, 0, 0, 0.08) 0px 8px 16px 0px',
            cursor: 'pointer',
        },

        '& > div.card-media': {
            height: '240px',
            position: 'relative',
            '& > div.card-header': {
                width: '100%',
                height: '93%',
                display: 'flex',
                alignContent: 'space-between',
                position: 'absolute',
                top: '10px',
                flexWrap: 'wrap',
                '& > div': {
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    padding: '0 10px',
                    '&:first-child': {
                        justifyContent: 'space-between',
                        '& > h6.MuiTypography-subtitle2': {
                            borderRadius: '3px',
                            padding: '0 5px',
                            lineHeight: '1.3',
                            letterSpacing: '0.4px',
                            color: '#fff',
                        },
                        '& > button': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '7px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            '& > span > svg': {
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
                    '&:last-child': {
                        '& > span': {
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: '5px',
                            background: 'rgba(255, 255, 255, 0.8)',
                            borderRadius: '100%',
                            marginRight: '5px',
                            '& > svg': {
                                width: '20px',
                                height: '20px',
                                '& > path': {
                                    fill: '#838383',
                                },
                            },
                        },
                    },
                },
            },
        },

        '& h6.MuiTypography-subtitle1': {
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.2rem',
            },
        },
        '& > button': {
            '& > div.MuiCardContent-root': {
                padding: '10px 15px',
                '& > h6.MuiTypography-subtitle1': {
                    lineHeight: '15px',
                },'& > h5.MuiTypography-h5': {
                    lineHeight: '29px',
                },
                '& > span.MuiTypography-caption': {
                    color: '#838383',
                },
            },
        },
    },
}));
