import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: '#FFF',
        border: 0,
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        zIndex: 20,
        position: 'relative',
        height: 176,
        [theme.breakpoints.down('sm')]: {
            height: 165
        },
        '& .img': {
            borderRadius: '10px 0px 0px 10px',
            backgroundImage: ({cardData}) => `url(${cardData.image ?? '/img/Vector.png'})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            position: 'relative',
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
            '& .post-title': {
                height: 'min-content',
                '& a': {
                    textDecoration: 'none',
                    '&:hover': {
                        textDecoration: 'underline',
                        textDecorationColor: '#4e4e4e'
                    },
                    '& h6': {
                        [theme.breakpoints.down('md')]: {
                            fontSize: theme.typography.pxToRem(16)
                        },
                        [theme.breakpoints.down('sm')]: {
                            fontSize: theme.typography.pxToRem(14)
                        }
                    }
                }
            }
        },
        '& .description': {
            '& .MuiTypography-subtitle2': {
                display: '-webkit-box',
                WebkitLineClamp: 2,
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical',
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
        '& .location': {
            '& .MuiTypography-subtitle2': {
                color: '#838383'
            }
        },
        '& .color-silver': {
            color: '#BDBDBD'
        }
    }
}));
