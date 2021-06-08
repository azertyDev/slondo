import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        '& .breadcrumbs': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
            '& a': {
                fontSize: '0.75rem',
                '&:hover': {
                    textDecorationLine: 'underline'
                }
            },
            '& .MuiTypography-subtitle1': {
                fontSize: '0.75rem',
                marginRight: 10,
                '& span': {
                    color: '#838383'
                }
            },
            '& .status': {
                padding: '0 20px',
                border: '1px solid #7DBCF6',
                borderRadius: '3px',
                '& .MuiTypography-subtitle2': {
                    color: '#7DBCF6'
                }
            }
        },
    },
}));
