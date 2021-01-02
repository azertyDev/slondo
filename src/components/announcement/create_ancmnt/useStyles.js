import {makeStyles} from '@material-ui/core/styles';


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
        '& div.categories-block': {
            marginTop: '40px',
            '& div.categories-menu, & div.sub-categories-menu': {
                '& ul > li': {
                    cursor: 'pointer',
                },
                '& li.selected-category': {
                    backgroundColor: theme.palette.primary.gray
                }
            },
            '& div.sub-categories-menu': {
                '& ul > li:hover': {
                    backgroundColor: theme.palette.primary.gray
                }
            },
        }
    },
}))
