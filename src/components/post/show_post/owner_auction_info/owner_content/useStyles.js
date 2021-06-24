import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div': {
            marginBottom: '30px',
            '&:last-child': {
                margin: 0
            }
        },
        '& div.contact-buttons': {
            '& button': {
                width: '100%',
                border: 'none',
                height: 44,
                '&:not(:last-child)': {
                    marginBottom: '10px'
                },
                '&.contact-btn': {
                    background: 'none',
                    border: `1px solid ${theme.palette.primary.secondary}`,
                    '& .MuiTypography-subtitle1': {
                        color: '#7461BA'
                    }
                },
                '&.safe-shopping-btn': {
                    background: '#7DBCF6',
                    '& > svg': {
                        marginRight: 10,
                        width: '17px',
                        height: '20px',
                        '& > path': {
                            fill: '#fff'
                        }
                    }
                }
            }
        },
        '& .floating': {
            display: 'flex',
            left: '10px',
            padding: '13px 7px 14px 17px',
            '& div.floating-text': {
                display: 'flex',
                alignItems: 'center',
                width: '50%',
                '& svg': {
                    marginRight: '18px',
                    width: '18px',
                    height: '22px',
                    '& path': {
                        fill: '#E88F00'
                    }
                }
            },
            '& h6': {
                color: '#FFFFFF',
                fontWeight: '700',
                fontSize: '14px'
            },
            '& button': {
                fontSize: '14px',
                fontWeight: '500'
            }
        }
    },
    safeDealDrawer: {
        '& .MuiPaper-root': {
            width: '100%'
        },
        '& div.safe-deal-block': {
            background: '#F1F1F1',
            borderRadius: '10px'
        }
    }
}));
