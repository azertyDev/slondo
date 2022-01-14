import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        width: '100%',
        backgroundColor: '#fff',
        scrollbarWidth: 'none',
        '&::-webkit-scrollbar': {
            display: 'none'
        },
        '& div.top-wrapper': {
            '& button': {
                width: '28px',
                padding: 0,
                '&:hover': {
                    background: 'inherit'
                }
            },
            '& h6': {
                textAlign: 'center',
                '&.sell-faster': {
                    fontSize: '1.2rem',
                    marginBottom: '15px'
                },
                '&.post-num': {
                    fontSize: '.85rem'
                }
            }
        },
        '& div.content-wrapper': {
            padding: '20px',
            '& div.selected-service-wrapper': {
                width: '100%',
                paddingLeft: '5px',
                marginBottom: '10px',
                '& > div': {
                    minHeight: '50px',
                    marginBottom: '30px',
                    '& > div.selected-service': {
                        position: 'relative',
                        padding: '8px 12px',
                        border: '1px solid #2F80ED',
                        borderRadius: '10px',
                        '& div.service-name > p, & div.price > p': {
                            fontSize: '1.1rem',
                            fontWeight: 700
                        },
                        '& div.service-name, & p.service-value': {
                            [theme.breakpoints.down('xs')]: {
                                marginBottom: '5px'
                            }
                        },
                        '& div.service-name': {
                            width: '206px',
                            '& > svg': {
                                marginRight: '8px'
                            }
                        },
                        '& p.service-value': {
                            padding: '8px 20px',
                            backgroundColor: '#fff',
                            borderRadius: '10px',
                            fontSize: '.875rem'
                        },
                        '& div.price': {
                            '& > p:last-child': {
                                fontSize: '.875rem',
                                fontWeight: 400
                            }
                        },
                        '& div.added': {
                            position: 'absolute',
                            top: '-8px',
                            right: '-5px',
                            padding: '0 10px',
                            borderRadius: '10px',
                            color: '#fff',
                            background:
                                'linear-gradient(270deg, #2F95F3 0%, #2552F4 100%)',
                            '& > span': {
                                marginRight: '5px',
                                fontSize: '.65rem',
                                lineHeight: '15px',
                                fontWeight: 700
                            },
                            '& > svg': {
                                fontSize: '.9rem'
                            }
                        }
                    },
                    '& button.remove-btn': {
                        padding: 0,
                        '& svg': {
                            fontSize: '4rem',
                            color: '#FC573B'
                        }
                    }
                }
            }
        },
        '& div.bottom-wrapper': {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '75px',
            '& button.next-btn': {
                minWidth: '300px',
                height: '50px',
                fontSize: '1rem',
                background:
                    'linear-gradient(90.62deg, #F38522 0.56%, #FFB800 99.49%)'
            }
        }
    }
}));
