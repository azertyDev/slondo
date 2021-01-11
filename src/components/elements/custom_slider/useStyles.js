import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        position: 'relative',
        '& div.slick-slide': {
            zIndex: 10,
            '& img': {
                width: '100%',
            }
        },
        '& button.slick-arrow': {
            position: 'absolute',
            top: 'calc(50% - 20px)',
        },
        '& button.slick-next': {
            right: 0,
        },
    },
}))