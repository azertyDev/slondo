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
            marginBottom: '21px',
            [theme.breakpoints.down('md')]: {
                fontWeight: '600',
                fontSize: 'calc(14px + 10 * (100vw / 1280))',
                marginBottom: '10px',
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
                '& > button.slick-prev, & > button.slick-next': {
                    top: '23%'
                },
                '& button.slick-prev': {
                    left: '10px'
                },
                '& button.slick-next': {
                    right: '10px'
                },
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
            // width: '120px !important',
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
                        '& > span.category-name': {
                            background: '#F2F2F2',
                            transition: 'background 0.5s'
                        },
                        '& div.bg-layer': {
                            boxShadow: '0px 0px 8px rgb(0 0 0 / 8%)',
                            transition: 'box-shadow 0.5s'
                        }
                    },
                    '& > span.category-name': {
                        padding: '5px',
                        borderRadius: '100px',
                        '& .MuiTypography-subtitle1': {
                            textAlign: 'center',
                            [theme.breakpoints.down('xs')]: {
                                fontSize: 'calc(12px + 6 * (100vw / 1280))',
                                lineHeight: '16px'
                            }
                        }

                    },
                    '& div.bg-layer': {
                        width: '105px',
                        height: '105px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '20px',
                        background: 'linear-gradient(90deg, #f0f0f0 0%, #eaeaeb 67.06%, #e4e4e6 100%)',
                        borderRadius: '100px',
                        [theme.breakpoints.down('xs')]: {
                            width: '80px',
                            height: '80px'
                        }
                    },
                    '& div.medium': {
                        background:
                            'linear-gradient(90deg, #d7d6e3 -18.43%, #fafafa 147.2%)',
                        width: '101px',
                        height: '101px',
                        borderRadius: '100px',
                        '& > img': {
                            height: '100%',
                            objectFit: 'contain'
                        },
                        [theme.breakpoints.down('xs')]: {
                            width: '77px',
                            height: '77px'
                        }
                    }
                }
            }
        }
    }
}));
