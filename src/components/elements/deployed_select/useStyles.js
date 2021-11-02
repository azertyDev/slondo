import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& div.options': {
            display: 'flex',
            background: '#FFFFFF',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            borderRadius: '5px',
            '& div.MuiGrid-item': {
                '&:nth-child(odd)': {
                    '& button': {
                        borderRadius: '5px 0px 0px 5px'
                    }
                },
                '&:nth-child(even)': {
                    '& button': {
                        borderRadius: '0px 5px 5px 0px'
                    }
                }
            },
            '& button': {
                color: theme.palette.common.tab,
                background: '#FDFCFF',
                borderRadius: '0px',
                width: '100%',
                height: '100%',
                '&.selected': {
                    '& h6.MuiTypography-subtitle1': {
                        color: theme.palette.primary.white
                    },
                    background: theme.palette.primary.createAdBtnColor
                }
            }
        }
    }
}));