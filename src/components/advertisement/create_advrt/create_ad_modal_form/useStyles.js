import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '800px',
        height: '570px',
        backgroundColor: theme.palette.primary.white,
    },
    tabsContent: {
        '& ul.categories-list': {
            height: '498px',
            overflowY: 'scroll',
        }
    }
}))
