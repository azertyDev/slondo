import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div.switcher': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        '& div.scheduler': {
            boxShadow: '0px 0px 10px 0px #0000000D',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: 10,
            padding: '15px',
            background: '#FDFCFF',
            '& > div.week-days': {
                '& p': {
                    padding: 3,
                    '&.selected-day': {
                        color: '#fff',
                        backgroundColor: '#7DBCF6',
                        borderRadius: '5px'
                    }
                },
                '& > span': {
                    padding: 5,
                    [theme.breakpoints.down('sm')]: {
                        padding: '5px'
                    }
                }
            },
            '& div.available-time': {
                display: 'flex',
                width: '258px',
                '& > div': {
                    display: 'flex',
                    alignItems: 'center'
                },
                '& input.MuiOutlinedInput-input': {
                    maxWidth: '100%',
                    padding: '10px 15px'
                }
            }
        }
    }
}));