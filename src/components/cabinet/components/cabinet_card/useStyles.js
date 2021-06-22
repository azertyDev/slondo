import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .unfold-btn': {
            background: '#EEE',
            borderRadius: '0px 0px 5px 5px',
            height: '32px',
            width: '100%'
        },
        '& .breadcrumbs': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
            '& a': {
                fontSize: '0.75rem',
                '&:hover': {
                    textDecorationLine: 'underline'
                }
            },
            '& .MuiTypography-subtitle1': {
                fontSize: '0.75rem',
                marginRight: 10,
                '& span': {
                    color: '#838383'
                }
            },
            '& .status': {
                padding: '0 20px',
                border: '1px solid #7DBCF6',
                borderRadius: '3px',
                '& .MuiTypography-subtitle2': {
                    color: '#7DBCF6'
                }
            }
        },
        '& .card-btn': {
            display: 'flex',
            position: 'absolute',
            top: 0,
            right: 20,
            '& button': {
                background: '#F5F5F5',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
                borderRadius: '0px 0px 10px 10px',
                display: 'flex',
                alignItems: 'center',
                padding: '11px 12px',
                '& svg': {
                    height: '18px'
                },
                '&:hover': {
                    cursor: 'pointer',
                    background: '#E0E0E0',
                    '& svg': {
                        height: '18px'
                    }
                },
                '& .MuiTypography-subtitle1': {
                    fontSize: theme.typography.caption.fontSize,
                    color: theme.palette.common.tab
                },
                '&.settings': {},
                '&.delete_favorite': {},
                '&.notifications, &.advertise': {
                    marginRight: 10
                }
            }
        }
    }
}));