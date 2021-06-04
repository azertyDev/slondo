import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .owner-rating': {
            flexDirection: 'column-reverse'
        },
        '& .replyBtn': {
            background: 'inherit',
            border: '1px solid #7DBCF6',
            borderRadius: '5px',
            padding: '8px 25px'
        },
        '& .review-item': {
            '&:nth-child(even)': {
                backgroundColor: '#F2F2F2',
                borderRadius: '5px'
            }
        }
    },
    replyBtn: {
        background: '#FFFFFF',
        border: '1px solid #7DBCF6',
        borderRadius: '5px'
    }
}))
