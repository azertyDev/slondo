import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#F2F2F2',
        borderRadius: '10px',
        padding: '15px',
        '& form': {
            width: '100%'
        },
        '& div.main-params': {
            marginBottom: '20px'
        },
        '& div.add-params': {
            width: 'calc(100% + 8px)'
        }
    },
    actionButtons: {
        '& button': {
            width: '140px',
            '&:first-child': {
                marginRight: 20,
                background: '#7DBCF6',
                '& .MuiTypography-subtitle1': {
                    color: '#fff'
                }
            },
            '&:last-child': {
                background: '#c9c9c9'
            }
        }
    }
}));