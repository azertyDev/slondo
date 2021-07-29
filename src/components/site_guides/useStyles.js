import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
    root: {
        '& img.safety-img': {
            width: '280px',
            height: '280px'
        },
        '& header.MuiAppBar-root': {
            background: '#fafafa'
        },
        '& div.main-title': {
            '& .MuiTypography-h5': {
                fontWeight: 'normal',
                color: 'rgb(49, 49, 49)',
                opacity: .7
            }
        },
        '& .paper': {
            background: '#fff',
            padding: '20px 20px 0 20px',
            marginBottom: 30
        },
        '& .tabs': {
            '& .MuiTypography-subtitle1': {
                borderBottom: '1px solid currentColor'
            },
            '& .Mui-selected': {
                background: '#FFFFFF',
                borderRadius: '100px',
                '& .MuiTypography-subtitle1': {
                    borderBottom: 'none',
                    color: '#845CAB'
                },
            }
        },
        '& .fw600': {
            fontWeight: '600'
        }
    }
}))
