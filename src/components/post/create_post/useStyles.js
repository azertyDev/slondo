import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.categories-block': {
            marginTop: '40px',
            '& div.categories-menu, & div.sub-categories-menu': {
                '& ul > li': {
                    cursor: 'pointer',
                    '& img': {
                        width: '24px',
                        height: '24px'
                    }
                },
                '& li.selected-category': {
                    backgroundColor: theme.palette.primary.gray
                }
            },
            '& div.sub-categories-menu': {
                '& ul > li:hover': {
                    backgroundColor: theme.palette.primary.gray
                }
            }
        }
    },
}))
