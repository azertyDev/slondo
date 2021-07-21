import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& > div.switcher': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
        },
        '& div.scheduler': {
            width: '100%',
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
                }
            }
        },
        '& > a.settings': {
            textTransform: 'initial',
            textDecoration: 'none',
            color: '#9b66d2'
        }
    }
}));