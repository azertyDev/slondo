import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.bet-info': {
            padding: '15px 10px',
            background: '#F2F2F2',
            borderRadius: '5px',
            [theme.breakpoints.down('md')]: {
                padding: '16px 12px 8px'
            },
            '& .input-btn': {
                marginBottom: '4px'
            },
            '& .btn-bet': {
                width: '100%',
                [theme.breakpoints.down('md')]: {
                    '& p': {
                        fontSize: '0.875rem'
                    },
                }
            },
            '& > div.max-bet': {
                textAlign: 'center',
                [theme.breakpoints.down('md')]: {
                    display: 'flex',
                    justifyContent: 'center',
                    '& h6': {
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: 'calc(10px + 6 * (100vw / 1280))'
                    }
                },
                '& > h6.MuiTypography-subtitle2:last-child': {
                    color: '#845CAB',
                    [theme.breakpoints.down('md')]: {
                        marginLeft: '5px',
                        color: 'rgba(255, 255, 255, 0.7)',
                        fontSize: 'calc(10px + 6 * (100vw / 1280))'
                    }
                }
            }
        }
    }
}));
