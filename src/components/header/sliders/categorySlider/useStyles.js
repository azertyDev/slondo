import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: '30px',
        '& h4.MuiTypography-h4': {
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.83rem'
            }
        },
        '& div.category-slider': {
            position: 'relative',
            '& > div.slick-slider': {
                '& > div.slick-prev, & > div.slick-next': {
                    width: '40px',
                    height: '40px',
                    zIndex: 10,
                    '&::before': {
                        content: '""'
                    }
                },
                '& div.slick-prev': {
                    left: 0
                },
                '& div.slick-next': {
                    right: 0
                }
            },
            '& div.slick-disabled': {
                display: 'none'
            }
        },
        '& div.slick-slide div a': {
            textDecoration: 'none',
            color: '#000',
            '& > img': {
                margin: 'auto'
            },
            '& > p': {
                textAlign: 'center'
            }
        },
        '& div.slider-arrows-container': {
            position: 'absolute',
            top: 0,
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            height: '100%',
            '& > div.arrows-wrapper': {
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%'
            }
        }
    }
}))
