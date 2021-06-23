import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        '& button': {
            color: theme.palette.common.tab,
            background: 'none',
            '&.selected': {
                '& h6.MuiTypography-subtitle1': {
                    color: theme.palette.primary.white
                },
                background: theme.palette.primary.createAdBtnColor
            }
        },
        '& div.options': {
            background: '#FFFFFF',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px'
        }
    }
}));