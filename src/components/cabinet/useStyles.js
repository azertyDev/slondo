import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& div.MuiTabs-root': {
            '& > div > div > button': {
                borderBottom: '1px solid #838383',
                '& > span > h6.MuiTypography-subtitle1': {
                    textTransform: 'uppercase',
                },
            },
            '& > div > div > button.Mui-selected > span > h6.MuiTypography-subtitle1': {
                color: '#7DBCF6',
            },
        },
    },
}));
