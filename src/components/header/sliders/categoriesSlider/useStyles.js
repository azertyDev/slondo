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
        '& div.slick-slide': {
            width: "150px !important",
            marginRight: '27px',
            '& > div': {
                width: 'auto !important',
                margin: 'auto',
                display: 'flex',
                justifyContent: 'center',
                '& > a': {
                    width: '150px !important',
                    height: '191px',
                    color: '#000',
                    textDecoration: 'none',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    '& > img': {
                        width: '140px',
                        textAlign: 'center'
                    },
                    '& > p': {
                        textAlign: 'center'
                    }
                }
            }
        }
    }
}))
