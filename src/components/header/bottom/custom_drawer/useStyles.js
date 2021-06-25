import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    drawerPaper: {
        display: 'flex',
        flexDirection: 'row'
    },
    drawerList: {
        padding: '20px 10px',
        borderRight: '.5px solid',
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
            '&:hover': {
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
        width: '330px',
        padding: '10px',
        overflow: 'scroll',
        scrollbarWidth: 'thin',
        '& div.close-btn-wrapper': {
            display: 'flex',
            justifyContent: 'flex-end'
        },
        '& a': {
            textDecoration: 'none'
        },
        '& .MuiTypography-h6': {
            color: 'rgb(51, 51, 51)',
            '&:hover': {
                color: '#675EAA',
            }
        },
        '& .MuiTypography-subtitle1': {
            color: 'rgba(49, 49, 49, 0,6)',
            '&:hover': {
                color: '#AD66D5',
                opacity: '72.72%'
            }
        }
    }
}))
