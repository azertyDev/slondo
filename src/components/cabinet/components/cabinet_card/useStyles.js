import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
    root: {
        border: 0,
        zIndex: 20,
        position: 'relative',
        height: 176,
        borderRadius: '10px',
        background: '#FFF',
        boxShadow: '0px 1px 6px rgb(0 0 0 / 10%)',
        [theme.breakpoints.down('sm')]: {
            height: 165
        },
        '&:hover': {
            cursor: 'pointer',
            background: '#fcfcfc',
            transition: 'all 0.05s ease-out',
            WebkitTransition: 'all 0.05s ease-out',
            MozTransition: 'all 0.05s ease-out',
            OTransition: 'all 0.05s ease-out',
            boxShadow: 'rgb(0 0 0 / 11%) 0px 4px 14px 0px'
        },
        '& a.card': {
            textDecoration: 'none',
            '& > div': {
                height: '100%',
                '& .img': {
                    position: 'relative',
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    borderRadius: '10px 0px 0px 10px',
                    backgroundImage: ({cardData}) =>
                        `url(${cardData.image ?? '/img/default.png'})`,
                    '& > span.MuiTypography-caption': {
                        position: 'absolute',
                        top: '3px',
                        left: '3px',
                        borderRadius: '5px',
                        padding: '2px 10px',
                        letterSpacing: '0.4px',
                        color: '#fff',
                        '&.post': {
                            backgroundColor: theme.palette.primary.postBgColor
                        },
                        '&.auc': {
                            backgroundColor: theme.palette.primary.aucBgColor
                        },
                        '&.exauc': {
                            backgroundColor: theme.palette.primary.exAucBgColor
                        }
                    },
                    '& div.observer-block': {
                        '& > span': {
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '3px',
                            backgroundColor: 'rgba(255, 255, 255, 0.7)',
                            borderRadius: '5px',
                            '& > svg': {
                                marginRight: '5px',
                                height: '12px'
                            }
                        }
                    }
                },
                '& .content': {
                    padding: '10px 15px',
                    position: 'relative',
                    [theme.breakpoints.down('md')]: {
                        padding: '10px'
                    },
                    '& h3': {
                        maxWidth: '350px',
                        fontSize: theme.typography.h6.fontSize,
                        [theme.breakpoints.down('lg')]: {
                            fontSize: '1rem',
                            maxWidth: '274px'
                        },
                        [theme.breakpoints.down('md')]: {
                            fontSize: '.875rem',
                            maxWidth: '180px'
                        }
                    }
                },
                '& .description': {
                    '& .MuiTypography-subtitle2': {
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical'
                    },
                    '& div.services': {
                        '& div': {
                            height: '25px',
                            display: 'flex',
                            alignItems: 'center',
                            flexDirection: 'row',
                            justifyContent: 'center',
                            float: 'left',
                            padding: '0 15px',
                            borderRadius: '100px',
                            backgroundColor: '#F2F2F2',
                            cursor: 'default',
                            userSelect: 'none',
                            margin: '2px 10px 2px 0',
                            [theme.breakpoints.down('xs')]: {
                                padding: 0,
                                width: 25
                            },
                            '& p.MuiTypography-body1': {
                                marginLeft: '12px',
                                fontSize: theme.typography.pxToRem(12)
                            },
                            '& svg': {
                                [theme.breakpoints.down('xs')]: {
                                    height: '12px'
                                }
                            }
                        }
                    }
                },
                '& .color-silver': {
                    color: '#BDBDBD'
                }
            }
        }
    }
}));
