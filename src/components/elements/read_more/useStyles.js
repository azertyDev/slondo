import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    root: {
        width: '80%',
        '& h6.MuiTypography-subtitle1': {
            lineHeight: '22px',
        },
        '& button.show-more-button': {
            background: 'none',
            width: '27%',
            padding: '5px 0',
            display: 'flex',
            justifyContent: 'flex-start',
            '& > h6.MuiTypography-subtitle1': {
                color: '#675EAA',
                '& > svg': {
                    marginLeft: '20px',
                },
            },
        },
    },
    hidden: {
        display: '-webkit-box',
        WebkitLineClamp: 5,
        overflow: 'hidden',
        WebkitBoxOrient: 'vertical',
    },
}));
