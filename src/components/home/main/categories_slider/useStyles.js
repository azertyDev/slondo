import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        [theme.breakpoints.up('lg')]: {
            margin: '0 auto',
            maxWidth: '1280px',
            marginBottom: '40px',
            padding: '0 24px'
        },
        '& a': {
            textDecoration: 'none'
        },
        '& > h2.title': {
            [theme.breakpoints.down('md')]: {
                fontWeight: '600',
                fontSize: 'calc(14px + 10 * (100vw / 1280))',
                padding: '0 24px'
            },
            [theme.breakpoints.down('xs')]: {
                padding: '0 16px'
            }
        },
        '& div.category-slider': {
            '& div.error-wrapper': {
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '188px'
            },
            '& > div.slick-slider': {
                '& div.slick-slide img': {
                    width: '100%'
                }
            },
            '& button.slick-disabled': {
                display: 'none'
            }
        },
        '& div.slick-slide': {
            marginTop: 10,
            '& > div': {
                display: 'flex',
                justifyContent: 'center',
                '& div.category-skeleton': {
                    display: 'flex !important',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column'
                },
                '& div.category': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.palette.primary.black,
                    '&:hover': {
                        '& div.bg-layer': {
                            '&:before': {
                                background: 'radial-gradient(50% 50% at 50% 50%, #F3F3F3 0%, rgba(116, 97, 186, 0.1) 100%)',
                                boxShadow: '0px 1px 4px rgba(116, 97, 186, 0.4)',
                                transition: 'box-shadow 0.5s'
                            }
                        }
                    },
                    '& > span.category-name': {
                        padding: '5px',
                        borderRadius: '100px',
                        '& .MuiTypography-h4': {
                            textAlign: 'center',
                            fontSize: '1rem',
                            [theme.breakpoints.down('xs')]: {
                                fontSize: 'calc(12px + 6 * (100vw / 1280))',
                                lineHeight: '16px'
                            }
                        }
                    },
                    '& div.bg-layer': {
                        width: '150px',
                        height: '132px',
                        display: 'flex',
                        padding: '0 10px 5px 10px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        position: 'relative',
                        '&:before': {
                            content: '""',
                            zIndex: 0,
                            bottom: '8px',
                            height: '26px',
                            width: '100%',
                            position: 'absolute',
                            borderRadius: '100%',
                            boxShadow: '0px 1px 1px rgba(0, 0, 0, 0.05)',
                            background: 'radial-gradient(50% 50% at 50% 50%, #F0F0F0 0%, #F0F0F0 100%)'
                        },
                        '& > img': {
                            objectFit: 'contain',
                            zIndex: 1
                        },
                        [theme.breakpoints.down('xs')]: {
                            '&:before': {
                                bottom: '-2px'
                            },
                            padding: 0,
                            marginBottom: '5px',
                            width: '80px',
                            height: '80px'
                        }
                    }
                }
            }
        }
    }
}));
