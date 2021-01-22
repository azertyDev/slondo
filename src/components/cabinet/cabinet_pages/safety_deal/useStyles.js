import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.wrapper': {
            background: '#F2F2F2',
            borderRadius: 10,
            padding: '10px 30px 30px 30px',
            '& > div.MuiGrid-item': {
                '& > div.MuiFormControl-root': {
                    marginBottom: 20,
                    '& label.MuiFormControlLabel-root': {
                        margin: 0,
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
            },
            '& form': {
                fontSize: '1rem',
                '& label': {
                    marginBottom: 8,
                    marginLeft: 8,
                },
                '& div.MuiFormControl-root': {
                    margin: '10px 0',
                    '& input.MuiOutlinedInput-input': {
                        padding: '9.5px 14px',
                        background: '#fff',
                        borderRadius: 'inherit',
                        border: '1px solid rgba(213, 213, 213, 1)',
                    },
                },
            },
        },
    },
}));
