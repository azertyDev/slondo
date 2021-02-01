import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& > div.switcher': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%'
        },
        '& div.scheduler': {
            width: '100%',
            height: '140px',
            '& > div.week-days p.selected-day': {
                color: '#fff',
                backgroundColor: '#7DBCF6'
            },
            '& div.available-time': {
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
            color: '#9b66d2',
        }
    }
}))