import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.bets-header': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 5
        },
        '& div.bets-table': {
            background: '#F9F9F9',
            boxShadow: '0px 1px 2px rgb(0 0 0 / 15%)',
            borderRadius: '5px',
            position: 'relative',
            '& .MuiTableRow-root': {
                '&:first-child': {
                    '& .bet': {
                        '& h6.outbid': {
                            color: '#90BE27',
                            fontWeight: 700
                        }
                    }
                }
            },
            '& .MuiTableCell-root': {
                padding: '10px'
            },
            '& h6.participant-name': {
                color: '#666666',
                '& > span': {
                    color: '#AD66D5'
                }
            },
            '& .bet': {
                '& h6': {
                    '&.per-bet': {
                        fontWeight: '600',
                        color: '#666666',
                        '& span.started-price': {
                            fontWeight: 600,
                            color: '#BB6BD9'
                        }
                    },
                    '&.outbid': {
                        color: '#BDBDBD'
                    }
                }
            },
            '& div.dateAndTime': {
                display: 'flex',
                justifyContent: 'space-between',
                [theme.breakpoints.down('md')]: {
                    justifyContent: 'flex-start'
                },
                '& h6.bet-time': {
                    color: '#2F80ED',
                    fontSize: '0.875rem',
                    [theme.breakpoints.down('md')]: {
                        marginRight: '25px'
                    }
                },
                '& > h6.bet-date': {
                    color: 'rgba(49, 49, 49, 0.6)',
                    fontSize: '0.875rem'
                }
            }
        }
    },
    showMore: {
        marginTop: 10,
        width: '100%',
        background: '#F9F9F9',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
        borderRadius: 5,
        '& svg': {
            fill: '#4E4E4E'
        }
    },
}));
