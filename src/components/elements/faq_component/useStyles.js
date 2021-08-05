import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        background: 'linear-gradient(49.94deg, #675EAA 19.03%, #AD66D5 72.72%)',
        borderRadius: 30,
        marginBottom: 24,
        '& > p.MuiTypography-subtitle1': {
            fontWeight: '600',
            marginTop: '19px',
            marginBottom: '18px',
            color: '#fff',
            fontSize: '1.125rem',
            letterSpacing: '0.15px',
            lineHeight: '22px',
            [theme.breakpoints.down('lg')]: {
                fontSize: '1rem'
            }
        },
        '& > div.MuiPaper-rounded': {
            width: '100%',
            background: '#FFF',
            boxShadow: '0px 0px 10px rgb(0 0 0 / 5%)',
            borderRadius: '28px',
            display: 'flex',
            flexWrap: 'wrap',
            alignContent: 'space-between',
            padding: '24px 13px',
            '& > ul': {
                listStyle: 'none',
                margin: 0,
                padding: 0,
                width: '100%',
                '& > li': {
                    boxShadow: '0px 8px 10px rgba(0, 0, 0, 0.05)',
                    borderRadius: '15px',
                    marginBottom: '15px',
                    display: 'flex',
                    padding: '5px',
                    '&:last-child': {
                        margin: '0',
                    },
                    '& > a': {
                        display: 'flex',
                        alignItems: 'center',
                        textDecoration: 'none',
                        '& > span': {
                            display: 'flex',
                            background: '#F6F3F8',
                            borderRadius: '13px',
                            padding: 11,
                            marginRight: 10
                        },
                        '& .MuiTypography-subtitle1': {
                            [theme.breakpoints.down('lg')]: {
                                fontSize: '0.875rem'
                            }
                        }
                    },
                },
            },
        },
    },
    }))
;
