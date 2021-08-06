import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        borderRadius: 10,
        boxShadow: '0px 0px 15px rgba(0, 0, 0, 0.1)',
        padding: '25px 15px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '& > h6.MuiTypography-h6': {
            fontWeight: 600,
            marginBottom: 15,
            textAlign: 'center'
        },
        '& > nav.MuiList-root': {
            width: 490,
            '& > div.MuiListItem-button': {
                '& > div.MuiListItemText-root': {
                    margin: 0
                },
                '&:last-child': {
                    marginBottom: 15
                },
                marginBottom: 5,
                border: '1px solid #E0E0E0',
                borderRadius: 5,
                padding: '15px 0 15px 15px'
            }
        },
        '& > div.textarea': {
            width: '100%',
            '& > h6.MuiTypography-subtitle1': {
                marginBottom: 5
            },
            '& p.MuiFormHelperText-contained': {
                margin: 0,
                marginTop: 5,
                textAlign: 'end',
                color: '#838383',
                fontSize: '0.875rem'
            }
        },
        '& > button.MuiButtonBase-root': {
            width: '200px',
            background: '#675EAA',
            borderRadius: '5px',
            '& > h6.MuiTypography-subtitle1': {
                color: '#fff'
            }
        }
    }
}));
