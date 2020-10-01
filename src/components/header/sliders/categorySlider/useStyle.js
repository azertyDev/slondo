export const useStyles = (theme) => ({
    root: {
        marginTop: '30px',

        '& div.slick-track': {
            width: '2000px !important',
        },

        '& img.slick-arrow, img.slick-prev, & img.slick-next': {
            zIndex: '1',
            width: '40px',
            height: '40px',
        },
        '& div.slick-slide': {
            width: '120px !important',
            marginRight: '20px',
            '& img': { height: '120px', cursor: 'pointer' },
        },

        '& div.slick-list': {
            height: '170px !important',
        },

        '& div.slick-list div.slick-active ': {
            width: '0px',

            display: 'flex !important',
            justifyContent: 'center !important',
        },
        '& div.category-slider': {
            position: 'relative',
        },

        '& div.category-slider h4.MuiTypography-h4': {
            margin: '30px 0',
            [theme.breakpoints.between('sm', 'md')]: {
                fontSize: '2rem',
            },
        },

        '& img.slick-prev': {
            left: '0',
        },
        '& img.slick-next ': {
            right: '0',
        },

        '& div.slick-slide div.category-item a': {
            width: 'auto',
            display: 'flex !important',
            flexFlow: 'column wrap',
            alignItems: 'center',
            textAlign: 'center',
            justifyContent: 'center',
            fontSize: '1rem',
            textDecoration: 'none',
            color: '#000',
            whiteSpace: 'normal',
            '& p': {
                margin: '0',
                wordBreak: 'break-word',
            },
        },

        '& div.category-slider button span svg': {
            borderRadius: '15px',
            fontSize: '3rem',
        },
        '& div.category-slider button span svg:hover': {
            fill: '#a153ff',
        },
        '& div.category-slider button ': {
            width: '40px',
            height: '40px',
            backgroundColor: '#fff',
            borderRadius: '10px',
            [theme.breakpoints.down('1000')]: {
                width: '35px',
                height: '35px',
            },
            [theme.breakpoints.down('600')]: {
                width: '30px',
                height: '30px',
            },
        },

        '& div.category-slider button.left-button ': {
            position: 'absolute',
            top: '50%',
            left: '20px',
        },
        '& div.category-slider button.right-button ': {
            position: 'absolute',
            top: '50%',
            right: '20px',
        },

        '& div.category-slider button:disabled': {
            visibility: 'hidden',
        },
    },
})
