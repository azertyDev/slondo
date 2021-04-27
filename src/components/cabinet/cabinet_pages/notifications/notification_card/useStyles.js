import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
    root: {
        padding: '15px',
        background: '#F8F8F8',
        borderRadius: '8px',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        marginBottom: 20,
        width: '80%',
        minWidth: 0,
        '& > div': {
            '& > h5.MuiTypography-h5': {
                fontWeight: '600'
            },
            '& > h6.MuiTypography-subtitle1': {
                margin: '20px 0',
                lineHeight: '15px',
                color: '#838383'
            },
            '& > a': {
                textDecoration: 'none',
                display: 'inline-block',
                '& > h6.more-details': {
                    lineHeight: '20px',
                    color: theme.palette.primary.createAdBtnColor,
                    fontWeight: '600'
                }
            }
        },
        '& > div.image': {
            position: 'absolute',
            bottom: '-10px',
            right: '-10px',
            '& > svg': {}
        },
        '& > button': {
            width: '30px',
            height: '30px',
            position: 'absolute',
            top: '10px',
            right: '10px'
        },
        '& > button.MuiIconButton-root': {
            position: 'absolute',
            right: '9px',
            top: '12px',
            width: '24px',
            height: '24px',
            padding: '5px',
            background: '#EBEBF0',
            borderRadius: '100%',
            '& svg': {
                height: 10,
                '& > path': {
                    fill: '#28293D',
                },
            },
            '&:hover': {
                background: '#F08F8F',
                '& svg': {
                    '& > path': {
                        fill: '#fff',
                    },
                },
            },
        },
    },
}));
