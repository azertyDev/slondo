import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
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
            '& .settings, .isFavorite, .notifications': {
                background: '#F5F5F5',
                boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.15)',
                borderRadius: '0px 0px 10px 10px',
                display: 'flex',
                alignItems: 'center',
                padding: '11px 12px',
                '& svg': {
                    height: '18px',
                    '& path': {
                        fill: '#4E4E4E'
                    }
                },
                '&:hover': {
                    cursor: 'pointer',
                    background: '#EB5757',
                    '& svg': {
                        height: '18px',
                        '& path': {
                            fill: '#fff'
                        }
                    }
                }
            },
            '& .notifications': {
                marginRight: 10
            }
        },
        '& .advertise': {
            position: 'absolute',
            top: '70px',
            right: 0,
            padding: '9px 20px',
            borderRadius: '100px 0px 0px 100px',
            boxShadow: '0px 1px 2px rgba(0, 0, 0, 0.1)',
            background: 'linear-gradient(90.62deg, #F38522 0.56%, #FFB800 99.49%)'
        },
    },
}));
