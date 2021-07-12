import {FC, useState} from 'react';
import { Grid, Box, Typography } from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {ThemesMenu} from '@src/components/elements/themes_menu/ThemesMenu';
import {data} from '@src/components/help/help_page_data';
import RegistrationRules from './pages/registration_rules';
import ParticipatingRules from './pages/participating_rules';
import CreatePostRules from './pages/create_post_rules';
import CreateAuctionRules from './pages/create_auction_rules';
import { Feedback } from '@src/components/feedback/Feedback';
import { useRouter } from 'next/router';
import Link from 'next/link';
import {useStyles} from './useStyles';

export const HelpContainer: FC = () => {
    const {push} = useRouter();

    const handleClick = (value) => async () => {
        setPageName(value);
        await push(`/help/${value}`);
    };
    
    const [pageName, setPageName] = useState<string>('help_page');
    
    const getHelpPageContent = () => {
        switch (pageName) {
            case 'how_to_register':
                return <RegistrationRules />;
            case 'how_to_participate':
                return <ParticipatingRules />;
            case 'how_to_сreate_post':
                return <CreatePostRules />;
            case 'how_to_create_auction':
                return <CreateAuctionRules />;
            case 'feedback':
                return <Feedback />;
        }
    };

    const classes = useStyles();
    return (
        <MainLayout title="Помощь">
            <Typography variant="h6" color="initial" className={classes.title}>
                Помощь
            </Typography>
            <Grid container spacing={2}>
                <ThemesMenu handleClick={handleClick} data={data}/>
                <Grid container item xs={9}>
                    {
                        pageName === 'help_page'
                            ? <Box>
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
                            : getHelpPageContent()
                    }
                </Grid>
            </Grid>
        </MainLayout>
    );
};
