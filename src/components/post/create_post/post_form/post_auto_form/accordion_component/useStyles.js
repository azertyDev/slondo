import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles(() => ({
    root: {
        '& div.MuiAccordionSummary-root:hover:not(.Mui-disabled)': {
            cursor: 'default'
        }
    }
}));