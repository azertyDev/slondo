import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        // ----------------------------------------- Last changes -----------------------------------------
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
    closeBtn: {
        display: 'block',
        margin: '5px 5px 0 auto',
        padding: 5,
        zIndex: 1000,
        '& svg': {
            [theme.breakpoints.down('xs')]: {
                width: '18px',
                height: '18px'
            },
            '& path': {
                fill: '#28293D'
            }
        }
    }
}));
