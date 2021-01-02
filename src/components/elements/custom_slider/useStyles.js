import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        '& div.slick-slide': {
            zIndex: 10,
            '& img': {
                width: '97%',
                margin: 'auto',
            },
        },
        '& button.MuiIconButton-root': {
            position: 'absolute',
            top: 'calc(50% - 20px)',
        },
        '& button.slick-next': {
            right: 0,
        },
    },
}))