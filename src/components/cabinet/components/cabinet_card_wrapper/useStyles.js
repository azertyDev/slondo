import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.bottom-btns': {
            marginTop: '10px',
            '& button': {
                height: '32px',
                padding: '2px 18px',
                borderRadius: 5,
                background: '#F5F5F5',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
                '& svg': {
                    height: '18px',
                    '& path': {
                        fill: '#4e4e4e'
                    }
                }
            }
        },
        '& .unfold-btn': {
            borderRadius: '5px',
            width: '100%',
            boxShadow: '0px 1px 2px 0px #00000026',
            '& svg': {
                fill: '#4e4e4e'
            }
        },
        '& .breadcrumbs': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
            '& a': {
                fontSize: '0.75rem',
                '&:hover': {
                    textDecorationLine: 'underline'
                }
            },
            '& p.MuiTypography-subtitle1, h6, h1': {
                fontSize: '0.75rem'
            },
            '& p.MuiTypography-subtitle1': {
                marginRight: 10,
                '& span': {
                    color: '#838383'
                }
            },
            '& .status': {
                padding: '0 20px',
                border: ({status}) =>
                    status === 'public'
                        ? '1px solid #838383'
                        : status === 'sold'
                        ? '1px solid #90BE27'
                        : status === 'blocked'
                            ? '1px solid #F08F8F'
                            : status === 'suspended' || status === 'moderation'
                                ? '1px solid #7DBCF6'
                                : status === 'archive' || status === 'history'
                                    ? '1px solid #BDBDBD'
                                    : '1px solid #7DBCF6',

                borderRadius: '3px',
                '& .MuiTypography-subtitle2': {
                    color: ({status}) =>
                        status === 'public'
                            ? '#838383'
                            : status === 'sold'
                            ? '#90BE27'
                            : status === 'blocked'
                                ? '#F08F8F'
                                : status === 'suspended' || status === 'moderation'
                                    ? '#7DBCF6'
                                    : status === 'archive' || status === 'history'
                                        ? '#BDBDBD'
                                        : '#7DBCF6',

                    [theme.breakpoints.down('xs')]: {
                        fontSize: '.75rem'
                    }
                }
            }
        },
        '& .card-btns': {
            display: 'flex',
            position: 'absolute',
            top: 0,
            right: 15,
            zIndex: 30,
            '& button': {
                background: '#F5F5F5',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
                borderRadius: '0px 0px 10px 10px',
                display: 'flex',
                alignItems: 'center',
                padding: '11px 12px',
                '&:not(:last-child)': {
                    marginRight: 5
                },
                '& svg': {
                    height: '18px'
                },
                '&.icons': {
                    '& .MuiTypography-subtitle1': {
                        fontSize: '12px'
                    },
                    '& svg path': {
                        fill: '#4e4e4e'
                    },
                    '&:disabled': {
                        '& .MuiTypography-subtitle1': {
                            opacity: .5
                        }
                    }
                },
                '&:hover': {
                    cursor: 'pointer',
                    background: '#E0E0E0',
                    '& svg': {
                        height: '18px'
                    }
                }
            }
        }
    }
}));
