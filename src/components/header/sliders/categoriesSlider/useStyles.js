import {makeStyles} from '@material-ui/core/styles';


export const useStyles = makeStyles((theme) => ({
    root: {
        '& a': {
            textDecoration: 'none'
        },
        '& > h2.title': {
            marginBottom: 21,
            fontWeight: 400,
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.83rem',
            }
        },
        '& div.category-slider': {
            position: 'relative',
            '& > div.slick-slider': {
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
            }
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
                    '& > img': {
                        width: '140px',
                        height: '140px',
                        textAlign: 'center',
                    },
                    '& > p': {
                        textAlign: 'center',
                    }
                }
            }
        }
    }
}));
