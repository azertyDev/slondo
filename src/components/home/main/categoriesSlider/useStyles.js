import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& a': {
            textDecoration: 'none',
        },
        '& > h2.title': {
            marginBottom: '21px',
        },
        '& div.category-slider': {
            position: 'relative',
            '& > div.slick-slider': {
                '& > button.slick-prev, & > button.slick-next': {
                    position: 'absolute',
                    top: '23%',
                    zIndex: 10,
                },
                '& button.slick-prev': {
                    left: '-12px',
                },
                '& button.slick-next': {
                    right: '-12px',
                },
            },
            '& button.slick-disabled': {
                display: 'none',
            },
        },
        '& div.slick-slide': {
            '& > div': {
                width: 'auto !important',
                display: 'flex',
                justifyContent: 'center',
                '& div.category-skeleton': {
                    display: 'flex !important',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                },
                '& div.category': {
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: theme.palette.primary.black,
                    '& > span.category-name': {
                        textAlign: 'center',
                        fontSize: '1.125rem',
                    },
                    '& div.bg-layer': {
                        position: 'relative',
                        width: '132px',
                        height: '132px',
                        marginBottom: '20px',
                        background:
                            'linear-gradient(90deg, #f0f0f0 0%, #eaeaeb 67.06%, #e4e4e6 100%)',
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
