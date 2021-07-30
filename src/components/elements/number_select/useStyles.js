import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        height: '72px',
        '& div.numbers-wrapper': {
            '&, & > h6, div.other-wrapper': {
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
            },
            '& span.numbers-item': {
                width: '28px',
                height: '28px',
                cursor: 'pointer',
                borderRadius: '50%',
                backgroundColor: '#fff',
                boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.2)',
                '&.selected': {
                    border: `1px solid ${theme.palette.primary.main}`,
                    '& p': {
                        color: theme.palette.primary.main
                    }
                }
            },

            '& div.other-wrapper': {
                justifyContent: 'center',
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