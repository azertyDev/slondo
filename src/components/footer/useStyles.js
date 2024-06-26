import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        paddingTop: '60px',
        backgroundColor: '#EEEDF2',
        borderRadius: '100px 100px 0px 0px',
        [theme.breakpoints.down('sm')]: {
            borderRadius: '30px 30px 0px 0px'
        },
        '& div.footer-content': {
            [theme.breakpoints.down('sm')]: {
                padding: '24px 0 12px',
                textAlign: 'center'
            },
            '& div.footer-top': {
                paddingBottom: '30px',
                mixBlendMode: 'normal',
                borderBottom: '1px solid #E0E0E0',
                [theme.breakpoints.down('sm')]: {
                    paddingBottom: '14px'
                },
                '& > div > ul': {
                    padding: 0,
                    margin: 0,
                    listStyle: 'none',
                    '& > li': {
                        '&:nth-child(even)': {
                            marginTop: 5
                        },
                        '& > a': {
                            textDecoration: 'none',
                            '& > h6.MuiTypography-subtitle1': {
                                lineHeight: '24px'
                            }
                        }
                    },
                    '& div.social-icons': {
                        '& > div': {
                            margin: 0,
                            width: 'auto'
                        }
                    },
                    '& div.adaptive': {
                        paddingBottom: '12px'
                    }
                }
            },
            '& div.footer-bottom': {
                display: 'flex',
                padding: '25px 0',
                [theme.breakpoints.down('sm')]: {
                    display: 'block'
                },
                '& div': {
                    '&:nth-child(2)': {
                        '& h6.MuiTypography-subtitle1': {
                            opacity: 0.6,
                            lineHeight: '15px'
                        },
                        [theme.breakpoints.down('sm')]: {
                            padding: '10px 0 12px'
                        }
                    },
                    '& h6.MuiTypography-subtitle1': {
                        fontSize: '12px',
                        textAlign: 'center'
                    }
                }
            }
        }
    }
}));
