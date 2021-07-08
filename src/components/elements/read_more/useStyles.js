import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& h6.MuiTypography-subtitle1': {
            lineHeight: '22px',
        },
        '& button.show-more-button': {
            background: 'none',
            padding: '10px 0',
            display: 'inline-block',
            width: 'fit-content',
            [theme.breakpoints.down('md')]: {
                width: 'auto'
            },
            '& > h6.MuiTypography-subtitle1': {
                color: '#675EAA',
                '& > svg': {
                    marginLeft: '9px'
                }
            }
        }
    },
    hidden: {
        display: '-webkit-box',
        WebkitLineClamp: 5,
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
    },
}));
