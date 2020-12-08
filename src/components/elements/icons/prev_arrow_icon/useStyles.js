import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(({palette}) => ({
    root: {
        padding: '10px',
        backgroundColor: palette.primary.secondary,
        '& svg': {
            width: '14px',
            height: '14px'
        },
        '&:active svg > path, &:hover svg > path': {
            fill: palette.primary.black
        }
    }
}));