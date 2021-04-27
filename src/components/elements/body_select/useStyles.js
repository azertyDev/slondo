import {makeStyles} from '@material-ui/core/styles'


export const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        '& div.body-types': {
            display: 'flex',
            justifyContent: 'space-between',
            '& h6': {
                cursor: 'pointer',
                '&.selected': {
                    border: `2px solid ${theme.palette.primary.main}`
                }
            }
        }
    }
}));