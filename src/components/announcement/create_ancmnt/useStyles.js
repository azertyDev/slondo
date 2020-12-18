import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.advrt-banner': {
            marginTop: '140px',
            '& > div': {
                width: '100%',
                height: '470px',
                borderRadius: '7px',
                backgroundColor: '#C0C0C0',
            },
        },
        '& button.back-btn': {
            width: '250px',
            color: theme.palette.primary.white
        },
        '& div.categories-block': {
            marginTop: '40px',
            '& div.categories-list, & div.sub-categories-list': {
                '& ul > li > div': {
                    cursor: 'pointer'
                }
            }
        }
    },
}))
