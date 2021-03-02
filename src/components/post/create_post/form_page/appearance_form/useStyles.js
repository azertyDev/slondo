import {makeStyles} from '@material-ui/core/styles'

export const useStyles = makeStyles(() => ({
    root: {
        '& div.preview': {
            '& div.color-preview': {
                display: 'flex',
                alignItems: 'center',
                '& div.color': {
                    width: '50px',
                    height: '50px'
                }
            },
            '& div.photos-preview': {
                '& img': {
                    width: '140px',
                    height: '100px',
                    objectFit: 'cover',
                    marginRight: '5px'
                }
            }
        },
        '& div.color-wrapper': {
            display: 'flex',
            marginBottom: '20px',
            '& div.selected-color': {
                border: `3px solid #AD66D5`
            }
        },
        '& div.photos-wrapper': {
            marginBottom: '20px'
        },
    }
}))
