import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.white,
        padding: '12px',
        background: (props) =>
            props.color === 'primary'
                ? theme.palette.primary.primaryGradient
                : props.color === 'secondary'
                ? theme.palette.primary.createAdBtnColor
                : props.color === 'silver'
                    ? '#E9E9E9'
                    : theme.palette.primary.secondaryGradient,
        boxShadow: ' 0px 1px 2px 0px #00000040',
        borderRadius: '3px',
        '& > h6.MuiTypography-subtitle1': {
            color: (props) =>
                props.color === 'primary' ?
                    theme.palette.primary.white
                    : props.color === 'secondary'
                    ? theme.palette.primary.secondary
                    : props.color === 'silver'
                        ? theme.palette.primary.black
                        : '#4e4e4e'
        },
        '& > p.MuiTypography-subtitle1': {
            color: ({color}) =>
                color === 'primary' || color === 'secondary'
                    ? theme.palette.primary.white
                    : color === 'silver'
                    ? theme.palette.primary.black
                    : 'initial'
        },
        '&:disabled': {
            backgroundColor: theme.palette.primary.gray,
            '& > h6.MuiTypography-subtitle1': {
                color: '#ccc'
            },
            '& svg': {
                '& path': {
                    fill: '#ccc'
                },
                '& > defs > linearGradient > stop': {
                    '&:first-child': {
                        stopColor: '#ccc'
                    },
                    '&:last-child': {
                        stopColor: '#ccc'
                    }
                }
            }
        }
    },
}));
