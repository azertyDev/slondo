import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        '& hr': {
            width: '100%'
        },
        '& .rating': {
            flexDirection: 'column-reverse!important',
            '& p': {
                fontSize: '3rem'
            }
        },
        '& .owner-rating': {
            flexDirection: 'column-reverse'
        },
        '& .review': {
            position: 'relative',
            '&:after': {
                position: 'absolute',
                right: 0,
                bottom: 0,
                content: '""',
                width: '90%',
                height: '0.8px',
                background: '#f0f0f0'
            },
            '& .review-answer': {
                padding: 10,
                borderRadius: 5,
                backgroundColor: '#f0f0f0',
                position: 'relative',
                '&:after': {
                    left: '2%',
                    content: '""',
                    bottom: '100%',
                    borderWidth: '15px',
                    position: 'absolute',
                    pointerEvents: 'none',
                    border: 'solid transparent',
                    borderBottomColor: '#f0f0f0',
                    borderColor: 'rgba(136, 183, 213, 0)'
                }
            }
        }
    }
});
