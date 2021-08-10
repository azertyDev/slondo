import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: 25,
        boxShadow: 'inset 0px -2px 0px 0px rgb(0 0 0 / 5%)',
        minHeight: 'auto',
        [theme.breakpoints.down('xs')]: {
            boxShadow: 'none'
        },
        '& .MuiTab-root': {
            width: '48%',
            minHeight: '36px !important',
            borderBottom: 'none !important',
            backgroundColor: '#F2F2F2',
            borderRadius: '5px 5px 0px 0px',
            '&:not(:last-child)': {
                marginRight: 10
            },
            [theme.breakpoints.down('xs')]: {
                width: 'auto',
                padding: '7px 20px',
                borderRadius: 20,
                boxShadow: '0px 1px 2px 0px #00000026'
            },
            '&.Mui-selected': {
                backgroundColor: '#FAFAFA',
                boxShadow: '0px -1px 8px rgba(0, 0, 0, 0.05)',
                [theme.breakpoints.down('xs')]: {
                    backgroundColor: '#E0E0E0',
                    boxShadow: '0px 1px 2px 0px #00000026 inset'
                }
            }
        },
        '& .MuiTabs-flexContainer': {
            padding: '5px 0 0 5px',
            [theme.breakpoints.down('xs')]: {
                padding: '0 0 5px'
            }
        }
    }
}));
