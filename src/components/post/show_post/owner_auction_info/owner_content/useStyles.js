import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div': {
            marginBottom: '30px',
            '&:last-child': {
                margin: 0
            }
        },
        '& .owner': {
            '&:before': {
                position: 'absolute',
                left: 0,
                top: '0px',
                content: '""',
                width: '100%',
                height: '0.8px',
                background: 'linear-gradient(90deg, rgba(243, 243, 243, 0.15) -4.72%, rgba(204, 204, 204, 0.8) 47.81%, rgba(248, 248, 248, 0.15) 104.92%)'
            },
            '&:after': {
                position: 'absolute',
                left: 0,
                bottom: '0px',
                content: '""',
                width: '100%',
                height: '0.8px',
                background: 'linear-gradient(90deg, rgba(243, 243, 243, 0.15) -4.72%, rgba(204, 204, 204, 0.8) 47.81%, rgba(248, 248, 248, 0.15) 104.92%)'
            }
        },
        '& div.contact-buttons': {
            '& button': {
                width: '100%',
                border: 'none',
                height: 44,
                boxShadow: ' 0px 1px 2px rgb(0 0 0 / 25%)',
                '&:not(:last-child)': {
                    marginBottom: '10px'
                },
                '&.contact-btn': {
                    border: `1px solid ${theme.palette.primary.secondary}`,
                    '& p': {
                        color: '#7461BA'
                    },
                    '& svg': {
                        marginRight: 10
                    },
                    '&:disabled': {
                        opacity: '0.5',
                        background: '#f2f2f2',
                        border: `1px solid #f2f2f2`,
                        '& p': {
                            color: theme.palette.primary.black
                        }
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
    }
}));
