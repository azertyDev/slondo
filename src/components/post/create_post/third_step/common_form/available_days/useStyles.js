import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '304px',
        '& > div.switcher': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
        },
        '& div.scheduler': {
            height: '106px',
            [theme.breakpoints.down('sm')]: {
                height: '96px'
            },
            '& > div.week-days': {
                margin: '0 10px',
                [theme.breakpoints.down('sm')]: {
                    margin: '0 10px 10px'
                },
                '& p.selected-day': {
                    color: '#fff',
                    backgroundColor: '#7DBCF6',
                    padding: '3px',
                    borderRadius: '5px'
                },
                '& > span': {
                    [theme.breakpoints.down('sm')]: {
                        padding: '5px'
                    }
                }
            },
            '& div.available-time': {
                margin: '0 10px',
                display: 'flex',
                '& > div': {
                    display: 'flex',
                    alignItems: 'center'
                },
                '& input.MuiOutlinedInput-input': {
                    maxWidth: '40px',
                    padding: '10px 15px'
                }
            }
        }
    }
}));