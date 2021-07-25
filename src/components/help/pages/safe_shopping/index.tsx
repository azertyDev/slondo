import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../useStyles';
import {useTranslation} from 'react-i18next';

const SafeShopping = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            SafeShopping
        </>
    );
};

export default SafeShopping;
