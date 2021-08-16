import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        '& hr': {
            width: '100%'
        },
        '& .owner-rating': {
            flexDirection: 'column-reverse'
        },
        '& .replyBtn': {
            background: 'inherit',
            border: '1px solid #7DBCF6',
            borderRadius: '5px',
            padding: '8px 25px'
        },
        '& .review': {
            position: 'relative',
            '&:after': {
                position: 'absolute',
                left: 0,
                bottom: 0,
                content: '""',
                width: '100%',
                height: '0.8px',
                background: 'linear-gradient(90deg, rgba(243, 243, 243, 0.15) -4.72%, rgba(204, 204, 204, 0.8) 47.81%, rgba(248, 248, 248, 0.15) 104.92%)'
            },
            '& .review-item': {
                '&:nth-child(even)': {
                    padding: 10,
                    // marginTop: 20,
                    borderRadius: 5,
                    backgroundColor: '#F2F2F2'
                }
            }
        }
    },
    replyBtn: {
        background: '#FFFFFF',
        border: '1px solid #7DBCF6',
        borderRadius: '5px'
    }
});
