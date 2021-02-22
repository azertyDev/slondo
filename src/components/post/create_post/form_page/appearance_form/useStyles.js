import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        '& div.color-wrapper': {
            display: 'flex',
            marginBottom: '20px',
            '& div.selected-color': {
                border: `3px solid #AD66D5`
            }
        },
        '& div.photos-wrapper': {
            marginBottom: '20px'
        }
    }
}))
