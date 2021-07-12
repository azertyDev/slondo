import {FC, useEffect, useState} from 'react';
import {Grid, Typography} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {HelpSidebar} from '@src/components/help/help_sidebar/HelpSidebar';
import menuData from '@src/components/help/help_page_data';
import RegistrationRules from './pages/registration_rules';
import ParticipatingRules from './pages/participating_rules';
import CreatePostRules from './pages/create_post_rules';
import CreateAuctionRules from './pages/create_auction_rules';
import {Feedback} from '@src/components/help/pages/feedback/Feedback';
import {useRouter} from 'next/router';
import {PageNotFound} from '@src/components/page_not_found/PageNotFound';
import {HelpPage} from '@src/components/help/index';
import {useStyles} from './useStyles';
import {LegalComponent} from '@src/components/help/pages/user_agreements/LegalComponent';
import {legal_docs} from '@src/components/help/pages/user_agreements/LegalDocs';

export const HelpContent: FC = () => {
    const {push, query} = useRouter();
    const {indexPage, term} = query;
    const isIndexPage = indexPage === 'help';
    const legalDoc = legal_docs.find(doc => doc.term === term);
    const [selectedDoc, setSelectedDoc] = useState(legalDoc);

    const handleClick = (value) => async () => {
        await push(`/help/${value}`);
    };

    const getIndexPage = () => {
        return isIndexPage
            ? <HelpPage />
            : <PageNotFound />;
    };

    const getHelpPageContent = () => {
        switch (term) {
            case 'how_to_register':
                return <RegistrationRules />;
            case 'how_to_participate':
                return <ParticipatingRules />;
            case 'how_to_create_post':
                return <CreatePostRules />;
            case 'how_to_create_auction':
                return <CreateAuctionRules />;
            case 'feedback':
                return <Feedback />;
            case 'user_agreements':
                return <LegalComponent docs={selectedDoc} />;
            default:
                return getIndexPage();
        }
    };

    useEffect(() => {
        setSelectedDoc(legalDoc);
    }, [term]);

    const classes = useStyles();
    return (
        <MainLayout title="Помощь">
            <Typography variant="h6" color="initial" className={classes.title}>
                Помощь
            </Typography>
            <Grid container spacing={2}>
                <HelpSidebar handleClick={handleClick} menuData={menuData} />
                <Grid container item xs={9}>
                    {getHelpPageContent()}
                </Grid>
            </Grid>
        </MainLayout>
    );
};
