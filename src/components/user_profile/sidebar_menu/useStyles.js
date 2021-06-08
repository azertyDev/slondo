import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        '& .menu-item': {
            display: 'flex',
            flexDirection: 'column',
            backgroundColor: '#F2F2F2',
            padding: 15,
            borderRadius: 10,
            marginBottom: 10,
            '&:last-child': {
                marginBottom: 0
            },
            '& .Mui-selected': {
                backgroundColor: 'red',
                border: '1px solid #AD66D5',
                borderRadius: '5px',
                '& .MuiTypography-body1': {
                    color: 'red',
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
            },
            '& .MuiListItem-root': {
                background: '#fff',
                justifyContent: 'center',
                borderRadius: 5,
                marginBottom: 5,
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.25)',
                '& .MuiListItemText-root': {
                    flex: 'none'
                },
                '& svg': {
                    marginRight: 10
                }
            }
        }
    }
});
