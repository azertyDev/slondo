import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& h6.menu-title': {
            fontWeight: '600'
        },
        '& div.MuiTabs-root': {
            '& > div > div': {
                '& > button': {
                    borderBottom: '1px solid #838383',
                    width: '33.3%',
                    padding: '0',
                    alignItems: 'flex-end',
                    '& > span > h6.MuiTypography-subtitle1': {
                        textTransform: 'uppercase',
                    },
                },
            },
            '& > div > div > button.Mui-selected > span > h6.MuiTypography-subtitle1': {
                color: '#7DBCF6',
            },
        },
    },
}))
