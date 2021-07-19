import {FC} from 'react';
import Link from 'next/link';
import {Box, Grid, Typography} from '@material-ui/core';
import {HelpSidebar} from '@src/components/help/help_sidebar/HelpSidebar';
import menuStruct from '@src/components/help/menu_struct';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {useTranslation} from "react-i18next";
import {useStyles} from './useStyles';

export const HelpPage: FC = () => {
    const {t} = useTranslation('help');

    const classes = useStyles();
    return (
        <MainLayout title="Помощь">
            <Typography variant="h6" color="initial" className={classes.title}>
                Помощь
            </Typography>
            <Grid container spacing={2}>
                <HelpSidebar menuStruct={menuStruct}/>
                <Grid container item xs={9}>
                    <Box>
                        <Typography variant='subtitle1' gutterBottom>
                            Выберите раздел который вас интересует или воспользуйтесь поиском
                        </Typography>
                        <Typography>
                            Если у вас остались вопросы, можете связаться с нами нажав
                            на кнопку &nbsp;
                            <Link href='/help/feedback'>
                                <a className={classes.link}>
                                    {t('feedback')}
                                </a>
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </MainLayout>
    );
};
