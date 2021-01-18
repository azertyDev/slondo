import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
    root: {
        background: 'lightbule',
        '& div.MuiGrid-item': {
            '&:first-child': {
                paddingRight: 15,
            },
            '&:last-child': {
                paddingLeft: 5,
            },
        },
        '& > h6': {
            marginLeft: 30,
            fontWeight: 600,
            lineHeight: '24px',
            marginBottom: 30,
        },
        '& div.filter-wrapper': {
            background: '#F2F2F2',
            borderRadius: '10px',
            padding: 15,
        },
    },
}));
