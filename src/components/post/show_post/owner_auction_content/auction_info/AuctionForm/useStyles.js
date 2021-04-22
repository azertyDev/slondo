import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.bet-info': {
            [theme.breakpoints.down('md')]: {
                position: 'fixed',
                zIndex: '100',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '13px 7px 14px 17px',
                display: 'block',
                background: '#494A61',
                borderRadius: 0
            },
            flexDirection: 'column',
            padding: '15px 10px',
            background: '#F2F2F2',
            borderRadius: '5px',
            '& div.bet-form-btm': {
                display: 'flex',
                JustifyContent: 'space-between',
                flexDirection: 'row'
            },
            '& > div': {
                display: 'flex',
                justifyContent: 'center',
                flexDirection: 'column',
                '& > div.MuiFormControl-root': {
                    '& > div.MuiInputBase-root': {
                        background: '#fff',
                        borderRadius: '3px',
                        '& input': {
                            padding: '15px 20px'
                        }
                    }
                },
                '&:nth-child(2)': {
                    textAlign: 'center',
                    '& > h6.MuiTypography-subtitle2:last-child': {
                        color: '#845CAB'
                    }
                },
                '&:nth-child(3)': {
                    justifyContent: 'flex-start',
                    '& > button': {
                        borderRadius: '3px',
                        margin: 0,
                        '& > h6.MuiTypography-subtitle1': {
                            color: theme.palette.primary.white
                        }
                    }
                },
                '& > button': {
                    margin: '5px 0',
                    border: '1px solid #AD66D5'
                }
            },
            '& .place-bet': {
                borderRadius: '3px',
                border: '1px solid #675EAA',
                width: '100%',
                margin: '5px 0',
                [theme.breakpoints.down('md')]: {
                    width: '50%',
                    color: '#FFFFFF',
                    background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                    borderRadius: '3px',
                    margin: 0
                }
            },
            '& div.max-bet': {
                textAlign: 'center',
                '& h6:last-child': {
                    color: '#675EAA'
                }
            }
        },
        '& .floating-auc': {
            position: 'fixed',
            zIndex: '100',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: '13px 7px 14px 17px',
            background: '#494A61',
            '& button': {
                width: '50%',
                color: '#FFFFFF',
                background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                borderRadius: '3px'
            }
        },
        '& .floating': {
            position: 'fixed',
            zIndex: '100',
            bottom: 0,
            left: 0,
            width: '100%',
            padding: '13px 7px 14px 17px',
            display: 'flex',
            background: '#494A61',
            '& div.floating-text': {
                display: 'flex',
                alignItems: 'center',
                width: '50%',
                fontSize: 'calc(14px + 2 * (100vw / 1280))',
                '& svg': {
                    marginRight: '18px'
                }
            },
            '& h6': {
                color: '#FFFFFF',
                fontSize: 'calc(10px + 6 * (100vw / 1280))'
            },
            '& button': {
                width: '50%',
                color: '#FFFFFF',
                background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                borderRadius: '3px'
            }
        }
    }
}));
