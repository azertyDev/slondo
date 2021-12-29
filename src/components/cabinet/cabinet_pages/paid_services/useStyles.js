import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        padding: '10px',
        backgroundColor: 'rgba(237, 193, 180, 0.1)',
        borderRadius: '10px',
        '& h6': {
            fontSize: '1.125rem',
            fontWeight: 700,
            color: '#4f4f4f'
        },
        '& p': {
            paddingLeft: '6px',
            fontSize: '.875rem',
            lineHeight: '1.1rem',
            color: '#828282'
        },
        '& section.about-tariff': {
            padding: '8px 0',
            marginBottom: '20px',
            '& > h6': {
                marginBottom: '10px'
            }
        },
        '& div.MuiGrid-container': {
            '&.tariffs-wrapper': {
                '& > section': {
                    marginBottom: '20px',
                    '& > div': {
                        marginBottom: '10px',
                        '& > svg': {
                            marginRight: '10px'
                        }
                    }
                }
            }
        },
        '& div.rocket-bg': {
            display: 'flex',
            alignItems: 'center',
            '& > img': {
                width: '100%',
                padding: '0 12px'
            }
        }
    }
}));
