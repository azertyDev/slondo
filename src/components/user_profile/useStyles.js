import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& h6.menu-title': {
            fontWeight: '600',
            margin: '0 0 30px 30px'
        },
        '& div.MuiTabs-root': {
            minHeight: 28,
            '& .MuiTab-root': {
                borderBottom: '1px solid #838383',
                width: '100%',
                padding: '0',
                minHeight: 28,
                '& h6.MuiTypography-subtitle1': {
                    textTransform: 'uppercase'
                }
            }
        }
    },
}));
