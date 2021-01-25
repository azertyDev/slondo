import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.wrapper': {
            background: '#F2F2F2',
            borderRadius: 10,
            padding: '10px 30px 30px 30px',
            '& form': {
                fontSize: '1rem',
                display: 'flex',
                flexFlow: 'column wrap',
                '& > div.MuiFormControl-root': {
                    marginBottom: 20,
                    '& label.MuiFormControlLabel-root': {
                        margin: 0,
                        display: 'flex',
                        justifyContent: 'flex-end',
                    },
                    '& span.MuiSwitch-root + span.MuiTypography-body1': {
                        marginRight: 23,
                    },
                    '& span.MuiSwitch-colorPrimary.Mui-checked': {
                        '& span.MuiSwitch-thumb': {
                            background:
                                'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
                            boxShadow:
                                '0px 0px 2px rgba(0, 0, 0, 0.14), 0px 2px 2px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
                        },
                    },
                    '& span.MuiSwitch-colorPrimary.Mui-checked + .MuiSwitch-track': {
                        background: theme.palette.primary.main,
                    },
                },
                '& label': {
                    marginLeft: 8,
                    marginRight: '-2px',
                },
                '& div.MuiTextField-root': {
                    margin: '5px 0 10px 0',
                    '& input.MuiOutlinedInput-input': {
                        padding: '9.5px 14px',
                        background: '#fff',
                        borderRadius: 'inherit',
                        border: '1px solid rgba(213, 213, 213, 1)',
                    },
                },
                '& span.MuiCheckbox-root': {
                    padding: 0,
                    marginLeft: 20,
                },
                '& div.submit-part': {
                    display: 'flex',
                    alignItems: 'center',
                    flexDirection: 'column',
                    '& > button': {
                        backgroundColor: '#7DBCF6',
                        color: '#fff',
                        width: '197px',
                        textAlign: 'center',
                        marginTop: '30px',
                    },
                },
            },
        },
    },
    creditCard: {
        marginTop: 10,
        background: '#F2F2F2',
        boxShadow: '0px 0px 25px rgba(103, 94, 170, 0.15)',
        borderRadius: '25px',
        height: '273px',
        padding: '20px 30px',
        '& div': {
            display: 'flex',
            justifyContent: 'space-between',
        },
        '& button': {
            width: '206px',
            height: '45px',
            '&.MuiButtonBase-root.Mui-disabled': {
                backgroundColor: '#E0E0E0',
                borderRadius: '5px',
            },
        },
        '& h6.MuiTypography-subtitle1': {
            fontSize: '1.125rem',
            marginBottom: 10,
        },
        '& h6.MuiTypography-subtitle2': {
            color: 'rgba(49, 49, 49, 0.6)',
            margin: '10px 0',
        },
        '& div.MuiTextField-root': {
            margin: '0px !important',
            width: '93px',
            '& input': {
                padding: '12px 14px !important',
            },
        },
        '& p.MuiFormHelperText-root': {
            color: 'rgba(49, 49, 49, 0.6)',
        },
    },
}));
