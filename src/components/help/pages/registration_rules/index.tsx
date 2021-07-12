import {Box, Grid, Typography} from '@material-ui/core';
import {useStyles} from './useStyles';
import {useRouter} from 'next/router';
import {BackspaceIcon} from '@src/components/elements/icons';

const RegistrationRules = () => {
    const router = useRouter();

    const classes = useStyles();
    return (
        <>
            <Grid item xs={12}>
                <Box display='flex' alignItems='center' onClick={() => router.back()}>
                    <BackspaceIcon />
                    <Typography variant='h6'>
                        Как зарегестрироваться
                    </Typography>
                </Box>
            </Grid>
        </>
    );
};

export default RegistrationRules;
