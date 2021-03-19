import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        backgroundColor: '#F2F2F2',
        padding: '15px',
        borderRadius: '10px',
        marginBottom: '10px',
        '& .MuiBadge-root': {
            marginRight: 5,
            '& .MuiBadge-badge': {
                top: '5px',
                color: '#fff',
                right: '5px',
                height: '16px',
                padding: ' 0',
                minWidth: '16px',
                fontWeight: '600',
                backgroundColor: '#EB5757'
            }
        },
        '& button': {
            padding: '10px 10px',
            borderRadius: '5px',
            background: '#fff',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
            '&.selected': {
                border: '1px solid #AD66D5',
                borderRadius: '5px',
                '& > h6.MuiTypography-subtitle1': {
                    backgroundImage:
                        'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent'
                },
                '& svg': {
                    '& > defs > linearGradient > stop': {
                        '&:first-child': {
                            stopColor: '#675EAA'
                        },
                        '&:last-child': {
                            stopColor: '#AD66D5'
                        }
                    }
                }
            }
        },
    },
}));
