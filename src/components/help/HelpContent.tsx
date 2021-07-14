import React, {FC, useEffect, useState} from 'react';
import {Grid, Hidden, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {HelpSidebar} from '@src/components/help/help_sidebar/HelpSidebar';
import menuData from '@src/components/help/help_page_data';
import RegistrationRules from './pages/registration_rules';
import ParticipatingRules from './pages/participating_rules';
import CreatePostRules from './pages/create_post_rules';
import CreateAuctionRules from './pages/create_auction_rules';
import {Feedback} from '@src/components/help/pages/feedback/Feedback';
import {useRouter} from 'next/router';
import {useStyles} from './useStyles';
import {LegalComponent} from '@src/components/help/pages/user_agreements/LegalComponent';
import {legal_docs} from '@src/components/help/pages/user_agreements/LegalDocs';
import {useTranslation} from 'react-i18next';

export const HelpContent: FC = () => {
    const {t} = useTranslation();
    const {push, query: {term}} = useRouter();
    const legalDoc = legal_docs.find(doc => doc.term === term);
    const [selectedDoc, setSelectedDoc] = useState(legalDoc);

    const handleClick = (value) => async () => {
        await push(`/help/${value}`);
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
                return <h1>{t('errors:pageNotFound')}</h1>;
        }
    };

    useEffect(() => {
        setSelectedDoc(legalDoc);
    }, [term]);

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const classes = useStyles();
    return (
        <MainLayout title="Помощь">
            <Typography variant="h6" color="initial" className={classes.title}>
                Помощь
            </Typography>
            <Grid container spacing={2}>
                <Hidden mdDown>
                    <HelpSidebar handleClick={handleClick} menuData={menuData} />
                </Hidden>
                <Grid container item xs={isMdDown ? 12 : 9}>
                    {getHelpPageContent()}
                </Grid>
            </Grid>
        </MainLayout>
    );
};
