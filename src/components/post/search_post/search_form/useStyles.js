import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#F2F2F2',
        borderRadius: '10px',
        padding: '15px',
        '& span.checkbox': {
            background: '#FFFFFF',
            border: '1px solid #F2F2F2',
            borderRadius: '5px',
            padding: 8,
            '& .MuiFormControlLabel-root': {
                margin: 0,
                '& .MuiButtonBase-root': {
                    padding: 0,
                    marginRight: 5
                }
            }
        },
        '& form': {
            width: '100%'
        },
        '& div.main-params': {
            marginBottom: '20px'
        },
        '& div.add-params': {
            width: 'calc(100% + 8px)'
        }
    }
}));