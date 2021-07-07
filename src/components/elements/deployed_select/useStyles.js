import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        marginBottom: '10px',
        [theme.breakpoints.down('md')]: {
            width: '100%'
        },
        '& button': {
            color: theme.palette.common.tab,
            background: 'none',
            borderRadius: '0px',
            width: '100%',
            height: '100%',
            '&:first-child': {
                borderRadius: '5px 0px 0px 5px'
            },
            '&:last-child': {
                borderRadius: '0px 5px 5px 0px'
            },
            '&.selected': {
                '& h6.MuiTypography-subtitle1': {
                    color: theme.palette.primary.white
                },
                background: theme.palette.primary.createAdBtnColor
            }
        },
        '& div.options': {
            display: 'flex',
            background: '#FFFFFF',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px'
        }
    }
}));