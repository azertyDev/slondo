import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(() => ({
    root: {
        '& div.drawer-menu': {
            width: '200px',
            padding: '10px',
            '& > a': {
                display: 'flex',
                alignItems: 'center',
                marginBottom: '15px',
                color: '#000',
                textDecoration: 'none',
                '& > img': {
                    width: '25px'
                },
                '& > h6': {
                    marginLeft: '10px'
                }
            }
        }
    }
}))