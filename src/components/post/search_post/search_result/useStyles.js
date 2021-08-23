import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: 30,
        [theme.breakpoints.down('sm')]: {
            marginTop: 0
        },
        '& div.view-btns': {
            '& button.selected svg rect': {
                fill: '#845CAB'
            }
        }
    }
}));
