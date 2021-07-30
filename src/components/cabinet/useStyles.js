import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .pl-16': {
            paddingLeft: '16px'
        },
        '& h6.menu-title': {
            fontWeight: '600',
            marginBottom: '30px'
        },
        '& div.MuiTabs-root': {
            minHeight: 28,
            '& .MuiTab-root': {
                borderBottom: '1px solid #838383',
                padding: '0',
                minHeight: 28,
                '& h6.MuiTypography-subtitle1': {
                    textTransform: 'uppercase',
                    [theme.breakpoints.down('xs')]: {
                        fontSize: '0.875rem'
                    }
                }
            }
        }
    },
}));