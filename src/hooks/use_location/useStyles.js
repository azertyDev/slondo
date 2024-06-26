import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& div.modal-top': {
            padding: '20px 35px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            [theme.breakpoints.down('sm')]: {
                padding: '25px 20px 20px'
            },
            [theme.breakpoints.down('xs')]: {
                padding: '16px 15px',
                boxShadow: '0px 1px 2px rgb(0 0 0 / 15%)'
            }
        },
        '& div.location-header-wrapper': {
            '& h6': {
                textAlign: 'center',
                width: '100%',
                fontWeight: '600',
                [theme.breakpoints.down('xs')]: {}
            }
        },
        '& div.local-modal-container': {
            padding: '0 35px 35px',
            background: '#F8F7FA',
            [theme.breakpoints.down('sm')]: {
                padding: '0 20px 10px'
            },
            [theme.breakpoints.down('xs')]: {
                padding: '0px 15px'
            },
            '& > div.locals-input': {
                position: 'relative',
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
                height: '38px',
                marginBottom: '20px',
                [theme.breakpoints.down('xs')]: {
                    marginTop: '16px'
                },
                '& > svg, & > img.filter-icon': {
                    position: 'absolute',
                    height: '20px',
                    top: 'calc(50% - 10px)'
                },
                '& > svg': {
                    left: '10px',
                    [theme.breakpoints.down('sm')]: {
                        left: '5px'
                    }
                },
                '& > img.filter-icon': {
                    right: '10px'
                },
                '& > input.search-input': {
                    padding: '8px 0 8px 35px',
                    width: '70%',
                    borderRadius: '7px',
                    border: '1px solid #ccc',
                    fontSize: '0.87rem',
                    background: '#FDFCFF',
                    boxShadow: 'none',
                    [theme.breakpoints.down('sm')]: {
                        padding: '8px 0 8px 30px',
                        textOverflow: 'ellipsis'
                    },
                    [theme.breakpoints.down('xs')]: {
                        width: '75%',
                        padding: '8px 0 8px 11px'
                    }
                },
                '& > button.search-button': {
                    width: '27%',
                    borderRadius: '5px',
                    backgroundColor: 'rgba(125, 188, 246, 1)',
                    lineHeight: '1.65',
                    [theme.breakpoints.down('xs')]: {
                        marginLeft: '-5px',
                        borderBottomRightRadius: '7px',
                        borderTopRightRadius: '7px',
                        borderBottomLeftRadius: '0',
                        borderTopLeftRadius: '0'
                    },
                    '& h6': {
                        color: '#fff'
                    }
                }
            },
            '& div.locals-wrapper': {
                '& p > span': {
                    cursor: 'pointer'
                },
                '& > div.locals-title': {
                    marginBottom: '16px',
                    [theme.breakpoints.down('xs')]: {
                        fontSize: '14px',
                        borderBottom: '1px solid #F2F2F2',
                        padding: '12px 10px 16px',
                        marginBottom: 0
                    },
                    '& p': {
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: '600',
                        color: '#666',
                        '& svg': {
                            cursor: 'pointer',
                            width: '20px',
                            height: '20px',
                            '& path': {
                                fill: '#666'
                            }
                        },
                        '& span': {
                            paddingLeft: ({hasRegion}) => hasRegion && '20px'
                        }
                    }
                },
                '& div.locals-table': {
                    display: 'flex',
                    width: '100%',
                    '& div.locals-col > div.MuiGrid-item': {
                        paddingBottom: '16px',
                        '& svg > path': {
                            fill: '#828282'
                        },
                        [theme.breakpoints.down('xs')]: {
                            padding: '16px 10px',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            borderBottom: '1px solid #F2F2F2'
                        }
                    }
                }
            }
        }
    },
    locationButton: {
        padding: '9px 10px',
        background: '#f8f8f8',
        border: '1px solid rgba(0, 0, 0, 0.23)',
        '& p': {
            fontSize: '.87rem'
        }
    },
    location: {
        display: 'flex',
        alignItems: 'center',
        '& > h6.MuiTypography-subtitle1': {
            cursor: 'pointer',
            fontWeight: 500,
            color: '#838383',
            textDecoration: 'underline',
            [theme.breakpoints.down('xs')]: {
                fontSize: '12px',
                letterSpacing: '.4px'
            }
        },
        '& > svg': {
            marginRight: '12px',
            [theme.breakpoints.down('md')]: {
                marginRight: '5px'
            }
        }
    }
}));
