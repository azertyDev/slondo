import {FC} from 'react';
import {Box, Grid, Typography} from '@material-ui/core';
import Link from 'next/link';
import {useStyles} from './useStyles';
import {HelpSidebar} from '@src/components/help/help_sidebar/HelpSidebar';
import menuData from '@src/components/help/help_page_data';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {useRouter} from 'next/router';

export const HelpPage: FC = () => {
    const {push} = useRouter();

    const handleClick = (value) => async () => {
        await push(`/help/${value}`);
    };

    const classes = useStyles();
    return (
        <MainLayout title="Помощь">
            <Typography variant="h6" color="initial" className={classes.title}>
                Помощь
            </Typography>
            <Grid container spacing={2}>
                <HelpSidebar handleClick={handleClick} menuData={menuData} />
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
                                    “Обратная связь”
                                </a>
                            </Link>
                        </Typography>
                    </Box>
                </Grid>
            </Grid>
        </MainLayout>
    );
};
