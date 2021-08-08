import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    drawerPaper: {
        display: 'flex',
        flexDirection: 'row',
        [theme.breakpoints.down('xs')]: {
            width: '100%'
        }
    },
    topBtns: {
        display: 'flex',
        justifyContent: 'flex-end',
        [theme.breakpoints.down('xs')]: {
            justifyContent: 'space-between'
        }
    },
    drawerList: {
        padding: '20px 10px',
        '& > div.MuiListItem-button': {
            height: 38,
            cursor: 'pointer',
            marginBottom: 5,
            padding: '0 25px',
            '& > h6.MuiTypography-subtitle1': {
                fontSize: '1.125rem'
            },
            '& > div.icon': {
                width: '15%',
                '& > svg': {
                    marginRight: '15px',
                    width: '24px',
                    height: '24px'
                }
            },
            '&.hovered': {
                background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                borderRadius: 100,
                '& > h6.MuiTypography-subtitle1': {
                    color: '#fff'
                },
                '& svg': {
                    '& > path': {
                        fill: '#fff'
                    }
                }
            },
            '&.all-ctgrs': {
                '& > h6.MuiTypography-subtitle1': {
                    fontWeight: 600
                }
            }
        }
    },
    drawerContent: {
        padding: '10px',
        overflow: 'scroll',
        scrollbarWidth: 'thin',
        borderLeft: '.5px solid',
        [theme.breakpoints.down('xs')]: {
            width: '100%',
            borderLeft: 0
        },
        '& div.main-box-wrapper': {
            display: 'flex',
            '& div.box-wrapper': {
                display: 'flex',
                flexDirection: 'column',
                width: '50%',
                paddingLeft: '10px'
            }
        },
        '& a': {
            textDecoration: 'none',
            '&:hover': {
                textDecoration: 'underline',
                color: '#AD66D5'
            }
        },
        '& .MuiTypography-h6': {
            color: 'rgb(51, 51, 51)',
            '&:hover': {
                color: '#AD66D5'
            }
        },
        '& .MuiTypography-subtitle1': {
            color: 'rgba(49, 49, 49, 0,6)',
            '&:hover': {
                color: '#AD66D5',
                opacity: '72.72%'
            }
        },
        '& .list-wrapper': {
            '& h6.list-title': {
                fontWeight: '600'
            },
            '& .list-item': {
                padding: '10px 0'
            }
        }
    }
}));
