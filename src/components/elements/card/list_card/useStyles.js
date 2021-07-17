import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        border: 0,
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        borderRadius: '5px',
        zIndex: 20,
        '& .card-data': {
            display: 'flex',
            // height: 192,
            position: 'relative',
            '& .img': {
                borderRadius: '10px 0px 0px 0px',
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
                padding: '10px 10px 10px 20px',
                borderLeft: 0,
                position: 'relative',

                // minWidth: 0,
                // width: '100%',
                // display: 'flex',
                // flexDirection: 'column',
                // justifyContent: 'space-between',
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
                },
            },
            '& .description': {
                // width: '450px',
                // maxWidth: '65%',
                display: '-webkit-box',
                WebkitLineClamp: 5,
                overflow: 'hidden',
                WebkitBoxOrient: 'vertical'
            },
            '& .priceAndBet': {
                display: 'flex',
                alignSelf: 'flex-end',
                alignItems: 'center',
                justifyContent: 'center',
                '& .MuiTypography-subtitle1': {
                    fontSize: '0.875rem',
                    color: '#BDBDBD'
                }
            },
            '& .timer-title': {
                color: '#838383'
            },
            '& .timer': {
                fontSize: '0.875rem'
            }
        }
    }
}));
