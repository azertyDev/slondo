import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        border: 0,
        height: 176,
        background: '#FFF',
        position: 'relative',
        borderRadius: '10px',
        boxShadow: '0px 1px 6px rgb(0 0 0 / 10%)',
        [theme.breakpoints.down('sm')]: {
            height: 165
        },
        '&:hover': {
            cursor: 'pointer',
            background: '#fcfcfc',
            transition: 'all 0.05s ease-out',
            WebkitTransition: 'box-shadow 2s ease-out',
            MozTransition: 'all 0.05s ease-out',
            OTransition: 'all 0.05s ease-out',
            boxShadow: 'rgb(0 0 0 / 11%) 0px 4px 14px 0px'
        },
        '& button.favorite-btn': {
            zIndex: 1,
            top: '10px',
            right: '10px',
            padding: '0',
            position: 'absolute',
            boxShadow: '0px 0px 15px 0px #0000001A',
            [theme.breakpoints.down('xs')]: {
                width: '25px',
                height: '25px'
            },
            [theme.breakpoints.between('480', '567')]: {
                top: '5px',
                left: '44%'
            },
            [theme.breakpoints.down('480')]: {
                top: '5px',
                left: '42%'
            },
            [theme.breakpoints.down('430')]: {
                left: '41%'
            },
            [theme.breakpoints.down('360')]: {
                left: '39.5%'
            },

            '&:hover': {
                '& svg': {
                    transform: 'scale(1.1)',
                    transition: 'transform .3s cubic-bezier(.5,0,.5,3)'
                }
            }
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
                    backgroundImage: ({cardData}) => `url(${cardData.image ?? '/img/Vector.png'})`,
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
                    '& div.icons': {
                        left: '5px',
                        bottom: '5px',
                        position: 'absolute',
                        display: 'flex',
                        '& > span': {
                            width: '25px',
                            height: '25px',
                            display: 'flex',
                            marginRight: '5px',
                            borderRadius: '100%',
                            alignItems: 'center',
                            justifyContent: 'center',
                            background: 'rgba(255, 255, 255, 0.6)',
                            '& svg': {
                                width: '15px'
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
                    '& .location': {
                        display: 'block',
                        '& p.MuiTypography-subtitle2': {
                            color: '#838383',
                            [theme.breakpoints.down('xs')]: {
                                fontSize: '.75rem'
                            }
                        }
                    },
                    '& p.price': {
                        [theme.breakpoints.down('sm')]: {
                            fontSize: '1.2rem'
                        }
                    },
                    '& h3': {
                        display: '-webkit-box',
                        WebkitLineClamp: 2,
                        overflow: 'hidden',
                        WebkitBoxOrient: 'vertical',
                        fontSize: '1.2rem'
                    }
                },
                '& .color-silver': {
                    color: '#BDBDBD'
                }
            }
        }
    }
}));
