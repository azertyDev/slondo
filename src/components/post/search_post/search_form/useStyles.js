import {makeStyles} from '@material-ui/core/styles';

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
        width: '100%',
        display: 'flex',
        justifyContent: props => props.isXs ? 'center' : 'flex-end',
        marginTop: '20px',
        '& button': {
            width: props => props.isXs ? '100px' : '140px',
            '&:first-child': {
                marginRight: 20,
                background: '#E5E5E5'

            },
            '&:last-child': {
                background: '#7DBCF6',
                '& .MuiTypography-subtitle1': {
                    color: '#fff'
                }
            }
        }
    }
}));