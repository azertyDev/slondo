import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    drawerPaper: {
        display: 'flex',
        flexDirection: 'row'
    },
    drawerList: {
        width: '400px',
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
        width: '330px',
        padding: '10px',
        overflow: 'scroll',
        scrollbarWidth: 'thin',
        '& div.close-btn-wrapper': {
            display: 'flex',
            justifyContent: 'flex-end'
        }
    }
}))
