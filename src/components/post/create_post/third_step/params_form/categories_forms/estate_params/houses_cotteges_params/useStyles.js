import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        '& > div': {
            marginBottom: '20px'
        },
        '& div.title-wrapper': {
            marginBottom: '20px'
        },
        '& div.grid-container': {
            marginBottom: '10px'
        },
        '& div.options-select-wrapper': {
            width: '100%',
            '& > div:first-child': {
                marginBottom: '10px'
            }
        }
    }
}))