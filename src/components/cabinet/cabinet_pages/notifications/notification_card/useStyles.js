import makeStyles from '@material-ui/core/styles/makeStyles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        padding: '10px 15px',
        background: '#F2F2F2',
        borderRadius: '10px',
        boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
        position: 'relative',
        minWidth: 0,
        '& a': {
            textDecoration: 'none'
        },
        '& > div': {
            '& .MuiTypography-h6': {
                fontWeight: '600',
                marginBottom: 5
            },
            '& > h6.MuiTypography-subtitle1': {
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
        '& .forward-to-btn': {
            '& svg': {
                background: '#fff',
                marginRight: '10px',
                padding: 3,
                borderRadius: '100%'
            }
        },
        '& .MuiIconButton-root': {
            position: 'absolute',
            right: '-5px',
            top: '-5px',
            width: '20px',
            height: '20px',
            padding: '5px',
            background: '#E0E0E0',
            borderRadius: '100%',
            '& svg': {
                height: 10,
                '& > path': {
                    fill: '#28293D'
                }
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
