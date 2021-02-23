import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        '& div.grid-item': {
            '& > h6': {
                marginRight: '10px'
            },
            '& div.row-list': {
                display: 'flex'
            }
        },
        '& div.selected': {
            border: `3px solid #AD66D5`
        }
    }
}))