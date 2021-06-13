import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: '30px',
        '& div.MuiGrid-item': {
            '& div.post': {
                background: 'linear-gradient(270deg, rgba(47, 196, 243, 0.2) 0%, rgba(58, 76, 233, 0.2) 100%)'
            },
            '& div.auc': {
                background: 'linear-gradient(49.94deg, rgba(125, 228, 242, 0.2) 19.03%, rgba(186, 96, 208, 0.2) 72.72%)'
            },
            '& div.exauc': {
                background: 'linear-gradient(49.94deg, rgba(185, 130, 225, 0.2) 19.03%, rgba(208, 130, 96, 0.2) 72.72%)'
            },
            '& div.post-wrapper': {
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                height: '613px',
                marginBottom: 30,
                borderRadius: '25px',
                boxShadow: '0px 2px 8px rgba(0, 0, 0, 0.2)',
                textDecoration: 'none',
                '& div': {
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    textAlign: 'center',
                    height: '89%',
                    width: '80%',
                    backgroundSize: 'contain',
                    '& h6.MuiTypography-subtitle1': {
                        marginTop: '35px',
                        fontSize: '1.75rem',
                        color: '#4E4E4E',
                        fontWeight: '500',
                        marginBottom: '10px'
                    },
                    '& p.MuiTypography-body2': {
                        fontSize: '1.125rem',
                        color: 'rgba(49, 49, 49, 0.5)',
                        fontWeight: '400',
                        padding: '0 30px'
                    }
                },
                '& button': {
                    background: '#fff',
                    borderRadius: '100px',
                    width: '81%',
                    marginBottom: '24px',
                    boxShadow: '0px 2px 2px rgba(0, 0, 0, 0.15)',
                    border: 'none',
                    color: '#4E4E4E'
                }
                // MuiButtonBase-root
            },
            '& > div.guide': {
                textAlign: 'center',
                '& a': {
                    textDecoration: 'none'
                },
                '& h6.MuiTypography-subtitle2': {
                    fontSize: '1.125rem',
                    marginBottom: 5,
                    textDecoration: 'underline'
                },
                '& h6': {
                    '&.post': {
                        color: '#2F80ED'
                    },
                    '&.auc': {
                        color: theme.palette.primary.secondary
                    },
                    '&.exauc': {
                        color: '#F2994A'
                    }
                },
                '& h6.MuiTypography-subtitle1': {
                    color: 'rgba(49, 49, 49, 0.6)'
                }
            }
        }
    }
}));
