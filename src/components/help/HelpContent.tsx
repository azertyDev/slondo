import {FC, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Grid, Hidden, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {HelpSidebar} from '@src/components/help/help_sidebar/HelpSidebar';
import menuStruct from './menu_struct';
import RegistrationRules from './pages/registration_rules';
import ParticipatingRules from './pages/participating_rules';
import CreatePostRules from './pages/create_post_rules';
import CreateAuctionRules from './pages/create_auction_rules';
import {Feedback} from '@src/components/help/pages/feedback/Feedback';
import {LegalComponent} from '@src/components/help/pages/user_agreements/LegalComponent';
import {legal_docs} from '@src/components/help/pages/user_agreements/LegalDocs';
import {useStyles} from './useStyles';

export const HelpContent: FC = () => {
    const [term, subTerm] = useRouter().query.term as string[];
    const legalDoc = legal_docs.find(doc => doc.term === term);
    const [selectedDoc, setSelectedDoc] = useState(legalDoc);

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const getTermPage = () => {
        switch (term) {
            case 'how_to_register':
                return <RegistrationRules/>;
            case 'how_to_participate':
                return <ParticipatingRules/>;
            case 'how_to_create_post':
                return <CreatePostRules/>;
            case 'how_to_create_auction':
                return <CreateAuctionRules/>;
            case 'feedback':
                return <Feedback/>;
            case 'user_agreements':
                return <LegalComponent docs={selectedDoc}/>;
        }
    };

    const getSubTermPage = () => {
        switch (subTerm) {
            case 'registration':
                return <RegistrationRules/>;
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
                <Hidden mdDown>
                    <HelpSidebar menuStruct={menuStruct}/>
                </Hidden>
                <Grid container item xs={isMdDown ? 12 : 9}>
                    {subTerm ? getSubTermPage() : getTermPage()}
                </Grid>
            </Grid>
        </MainLayout>
    );
};
