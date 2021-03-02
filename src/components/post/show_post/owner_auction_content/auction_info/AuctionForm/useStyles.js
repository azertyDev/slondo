import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
            '& div.bet-info': {
                flexDirection: 'column',
                padding: '15px 10px',
                background: '#F2F2F2',
                borderRadius: '5px',
                '& > div': {
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    '& > div.MuiFormControl-root': {
                        '& > div.MuiInputBase-root': {
                            background: '#fff',
                            borderRadius: '3px',
                            '& input': {
                                padding: '15px 20px',
                            },
                        },
                    },
                    '& > button': {
                        margin: '5px 0',
                        border: '1px solid #AD66D5',
                    },
                    '&:nth-child(2)': {
                        textAlign: 'center',
                        '& > h6.MuiTypography-subtitle2:last-child': {
                            color: '#845CAB',
                        },
                    },
                    '&:nth-child(3)': {
                        justifyContent: 'flex-start',
                        '& > button': {
                            borderRadius: '3px',
                            margin: 0,
                            '& > h6.MuiTypography-subtitle1': {
                                color: theme.palette.primary.white,
                            },
                        },
                    },
                },
            },
        },
}));
