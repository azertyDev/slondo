import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        marginBottom: 25,
        boxShadow: 'inset 0px -2px 0px 0px rgb(0 0 0 / 5%)',
        '& .MuiTab-root': {
            width: '48%',
            minHeight: '36px !important',
            borderBottom: 'none !important',
            background: '#F2F2F2',
            borderRadius: '5px 5px 0px 0px',
            '&:first-child': {
                marginRight: 10
            },
            '&.Mui-selected': {
                background: '#FAFAFA',
                boxShadow: '0px -1px 8px rgba(0, 0, 0, 0.05)'
            }
        },
        '& .MuiTabs-flexContainer': {
            padding: '5px 0 0 5px'
        }
    }
}));
