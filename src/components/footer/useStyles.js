import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        paddingTop: '60px',
        '& > div.footer-wrapper': {
            backgroundColor: '#F2F2F2',
            borderRadius: '100px 100px 0px 0px',
            '& div.footer-content': {
                padding: '60px 0',
                '& > div': {
                    '&.footer-top': {
                        paddingBottom: 90,
                        mixBlendMode: 'normal',
                    },
                    '& > div > ul': {
                        padding: 0,
                        margin: 0,
                        listStyle: 'none',
                        '& > li': {
                            marginBottom: 8,
                            '&:last-child': {
                                marginBottom: 0,
                            },
                            '& > a': {
                                textDecoration: 'none',
                                '& > h6.MuiTypography-subtitle1': {
                                    lineHeight: '24px',
                                },
                            },
                        },
                    },
                    '& div.social-icons': {
                        '& > div': {
                            margin: 0,
                            width: 'auto',
                        },
                    },
                },
            },
            '& div.footer-bottom': {
                position: 'relative',
                display: 'flex',
                paddingTop: '25px',
                '& div': {
                    '& h6.MuiTypography-subtitle1': {
                        fontSize: '12px',
                        textAlign: 'center',
                    },
                },
                '&:before': {
                    content: '""',
                    position: 'absolute',
                    width: '90%',
                    height: 2,
                    background: '#E0E0E0',
                    borderRadius: '1px',
                    top: 0,
                    left: '50px',
                },
            },
        },
    },
}));
