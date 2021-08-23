import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        color: theme.palette.primary.white,
        padding: '12px',
        background: ({color}) =>
            color === 'primary'
                ? theme.palette.primary.primaryGradient
                : color === 'secondary'
                ? theme.palette.primary.createAdBtnColor
                : color === 'gold'
                    ? theme.palette.primary.goldGradient
                    : color === 'silver'
                        ? '#E9E9E9'
                        : theme.palette.primary.secondaryGradient,
        boxShadow: (props) =>
            props.color === 'primary' ? 'none' : '0px 0px 8px 0px #845CAB 20%',
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
        '& p.MuiTypography-subtitle1': {
            color: ({color}) =>
                color === 'primary' || color === 'secondary'
                    ? theme.palette.primary.white
                    : color === 'silver'
                    ? theme.palette.primary.black
                    : 'initial'
        },
        '&:disabled': {
            backgroundColor: '#f2f2f2',
            opacity: 0.5,
            '& p, h6': {
                color: theme.palette.primary.black
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
