import makeStyles from '@material-ui/core/styles/makeStyles'
import Surprise from '../../../../public/img/surprise.png'

export const useStyles = makeStyles((theme) => ({
    root: {
        backgroundImage: `url(../../../../public/img/surprise.png)`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        padding: '15px',
        height: '200px',
        width: '200px',
    },
}))
