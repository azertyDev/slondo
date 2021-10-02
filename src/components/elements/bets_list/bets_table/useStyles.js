import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        background: '#F9F9F9',
        boxShadow: '0px 1px 2px rgb(0 0 0 / 15%)',
        borderRadius: '5px',
        position: 'relative',
        '& .MuiTableRow-root': {
            '&:first-child': {
                '& td.bet': {
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
            '& h6.bet-time': {
                color: '#2F80ED',
                fontSize: '0.875rem'
            },
            '& > h6.bet-date': {
                color: 'rgba(49, 49, 49, 0.6)',
                fontSize: '0.875rem'
            }
        }
    }
}));
