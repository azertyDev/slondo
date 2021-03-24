import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& button': {
            color: theme.palette.primary.white,
            backgroundColor: theme.palette.common.activeTab,
            '&.selected': {
                border: `3px solid ${theme.palette.primary.exAucBgColor}`
            }
        },
        '& div.options': {
            display: 'flex'
        }
    }
}));