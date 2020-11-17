import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        marginTop: '15px',
    },
    gridItem: {
        display: ({isPreview}) => isPreview && 'flex',
        alignItems: (isPreview) => isPreview && 'center',
        '& > h6': {
            width: ({isPreview}) => !isPreview && '100%',
            marginRight: '10px'
        },
        '& div.colors-list': {
            display: 'flex'
        }
    },
    selected: {
        border: `3px solid #AD66D5`
    }
}))