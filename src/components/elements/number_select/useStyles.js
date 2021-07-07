import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '72px',
        '& h6': {
            marginBottom: '7px'
        },
        '& div.numbers-wrapper': {
            '&, & > h6, div.other-wrapper': {
                display: 'flex',
                alignItems: 'center'
            },
            '& > h6': {
                justifyContent: 'center',
                '&.numbers-item': {
                    width: '28px',
                    height: '28px',
                    margin: '0 5px',
                    borderRadius: '50%',
                    backgroundColor: '#fff',
                    cursor: 'pointer',
                    '&:first-child': {
                        marginLeft: 0
                    }
                },
                '&.selected': {
                    color: theme.palette.primary.main,
                    border: `1px solid ${theme.palette.primary.main}`
                }
            },
            '& div.other-wrapper': {
                justifyContent: 'center',
                marginLeft: '10px',
                '&, div.MuiInputBase-root': {
                    height: '28px',
                    '& input': {
                        padding: '5px 15px'
                    }
                },
                '& h6': {
                    color: theme.palette.primary.createAdBtnColor,
                    textDecoration: 'underline',
                    cursor: 'pointer'
                },
                '& div.MuiInputBase-root': {
                    width: '60px'
                }
            }
        }
    }
}));