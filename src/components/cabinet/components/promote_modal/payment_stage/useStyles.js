import {makeStyles} from '@material-ui/core/styles';

export const useStyles = makeStyles(() => ({
    root: {
        '& h6.select-service-title': {
            marginBottom: '10px'
        },
        '& div.pay-types-wrapper': {
            '& > div > div': {
                width: '100%',
                height: '100px',
                borderRadius: 0,
                cursor: 'pointer',
                backgroundColor: '#f3f3f3',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'center',
                '&.bonuses-bg': {
                    backgroundImage: 'url(/img/services/bonuses.png)'
                },
                '&.payme-bg': {
                    backgroundImage: 'url(/img/services/payme.png)'
                }
            }
        }
    }
}));
