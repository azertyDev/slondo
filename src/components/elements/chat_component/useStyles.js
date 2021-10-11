import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles({
    root: {
        background: '#fff',
        boxShadow: ({hideContacts}) => hideContacts ? '0px -3px 8px 0px rgb(0 0 0 / 51%)' : '0px 0px 8px rgba(132, 92, 171, 0.15)',
        borderRadius: ({hideContacts}) => hideContacts ? '0' : '10px'
    }
});
