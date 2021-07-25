import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from '../useStyles';
import {useTranslation} from 'react-i18next';

const SiteRules = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <>
            SiteRules
        </>
    );
};

export default SiteRules;
