import {makeStyles} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    root: {
        '& h4.MuiTypography-h4': {
            [theme.breakpoints.down('sm')]: {
                fontSize: '1.83rem'
            }
        },
        '& div.category-slider': {
            position: 'relative',
            marginTop: '20px',
            '& > div.slick-slider': {
                '& > div.slick-prev, & > div.slick-next': {
                    position: 'absolute',
                    top: 'calc(50% - 20px)',
                    width: '40px',
                    height: '40px',
                    zIndex: 10,
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
        '& div.slick-slide div': {
            width: '140px',
            margin: 'auto',
            '& > a': {
                color: '#000',
                textDecoration: 'none',
                '& > img': {
                    width: '140px',
                },
                '& > p': {
                    textAlign: 'center'
                }
            }
        }
    }
}))
