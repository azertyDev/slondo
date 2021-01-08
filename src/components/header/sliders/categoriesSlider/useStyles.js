import { makeStyles } from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        '& a': {
            textDecoration: 'none',
        },
        '& > h2.title': {
            marginBottom: 21,
            fontWeight: 400,
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.83rem',
            },
        },
        '& div.category-slider': {
            position: 'relative',
            '& > div.slick-slider': {
                '& div.slick-list': {
                    minHeight: '211px !important',
                },
                '& > div.slick-prev, & > div.slick-next': {
                    position: 'absolute',
                    top: 'calc(50% - 20px)',
                    width: '40px',
                    height: '40px',
                    zIndex: 10,
                },
                '& div.slick-prev': {
                    left: 0,
                },
                '& div.slick-next': {
                    right: 0,
                },
            },
            '& button.slick-disabled': {
                display: 'none',
            },
        },
        '& div.slick-slide': {
            width: '150px !important',
            margin: '0 13px',
            '& > div': {
                width: 'auto !important',
                display: 'flex',
                justifyContent: 'center',
                '& div.category': {
                    width: '150px !important',
                    color: '#000',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& > p': {
                        textAlign: 'center',
                        fontSize: '1.125rem',
                    },
                    '& div.bg-layer': {
                        position: 'relative',
                        background:
                            'linear-gradient(90deg, #f0f0f0 0%, #eaeaeb 67.06%, #e4e4e6 100%)',
                        width: '132px',
                        height: '132px',
                        marginBottom: '25px',
                        borderRadius: '100px',
                    },
                    '& div.medium': {
                        position: 'absolute',
                        top: '2px',
                        left: '2px',
                        background:
                            'linear-gradient(90deg, #d7d6e3 -18.43%, #fafafa 147.2%)',
                        width: '127px',
                        height: '127px',
                        borderRadius: '100px',
                    },
                },
            },
        },
    },
}));
