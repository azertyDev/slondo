import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        '& div.advrt-banner': {
            marginTop: '140px',
            '& > div': {
                width: '100%',
                height: '470px',
                borderRadius: '7px',
                backgroundColor: '#C0C0C0',
            },
        }
    },
    tabsContent: {
        '& ul.categories-list': {
            '& > li > div': {
                cursor: 'pointer'
            }
        }
    },
}))
