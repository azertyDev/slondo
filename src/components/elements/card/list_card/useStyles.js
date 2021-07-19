import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        border: 0,
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '10px',
        zIndex: 20,
        position: 'relative',
        height: 176,
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
                        marginRight: '5px'
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
                        textDecorationColor: '#000'
                    },
                    '& .MuiTypography-subtitle1': {
                        fontSize: '18px'
                    }
                }
            }
        },
        '& .description': {
            '& div.services': {
                '& div': {
                    height: '26px',
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'row',
                    float: 'left',
                    padding: '0 15px',
                    borderRadius: '100px',
                    backgroundColor: '#EEE',
                    cursor: 'default',
                    userSelect: 'none',
                    margin: '2px 10px 2px 0',
                    '& p.MuiTypography-body1': {
                        marginLeft: '12px',
                        fontSize: '12px'

                    }
                }
            }
        },
        '& .location': {
            '& .MuiTypography-subtitle1': {
                fontSize: '0.875rem',
                color: '#838383'
            }
        },
        '& .timer-title': {
            color: '#BDBDBD'
        }
    }
}));
