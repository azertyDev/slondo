import {FC, useEffect, useState} from 'react';
import {useRouter} from 'next/router';
import {Grid, Hidden, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {HelpSidebar} from '@src/components/help/help_sidebar/HelpSidebar';
import menuStruct from './menu_struct';
import {Feedback} from '@src/components/help/pages/feedback/Feedback';
import {LegalComponent} from '@src/components/help/pages/user_agreements/LegalComponent';
import {legal_docs} from '@src/components/help/pages/user_agreements/LegalDocs';
import {useStyles} from './useStyles';
import { useTranslation } from 'next-i18next';
import {
    RegistrationRules,
    ParticipatingRules,
    CreatePostRules,
    CreateAuctionRules,
    AccessToSlondo,
    PersonalDataSecurity,
    AccountHasBeenBlocked,
    Registration,
    SignIn,
    ForgotPassword,
    ChangePassword,
    Posts,
    Create,
    Reject,
    Deactivate,
    Update,
    SiteRules,
    MaterialRequirements,
    ServiceRequirements,
    ProhibitedServices,
    ForbiddenOnSlondo,
    AccountsRequirements,
    Auction,
    Simple,
    Advanced,
    EndAuction,
    HoldingAuction,
    CreateAuction,
    BetSubmitting,
    SafeShopping,
    Concept,
    Buy,
    Sold,
    UserInteraction,
    Chat,
    RatingsReviews,
    SearchInService
} from './pages'

export const HelpContent: FC = () => {
    const {t} = useTranslation();
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
            case 'access_to_slondo':
                return <AccessToSlondo />;
            case 'personal_data_security':
                return <PersonalDataSecurity />;
            case 'posts':
                return <Posts />;
            case 'site_rules':
                return <SiteRules />;
            case 'auction':
                return <Auction />;
            case 'safe_shopping':
                return <SafeShopping />;
            case 'user_interaction':
                return <UserInteraction />;
            case 'search_in_service':
                return <SearchInService />;
        }
    };

    const getSubTermPage = () => {
        switch (subTerm) {
            case 'registration':
                return <Registration/>;
            case 'sign_in':
                return <SignIn/>;
            case 'forgot_password':
                return <ForgotPassword/>;
            case 'change_password':
                return <ChangePassword/>;
            case 'account_has_been_blocked':
                return <AccountHasBeenBlocked/>;
            case 'create':
                return <Create/>;
            case 'update':
                return <Update/>;
            case 'deactivate':
                    return <Deactivate/>;
            case 'reject':
                return <Reject/>;
            case 'material_requirements':
                return <MaterialRequirements/>;
            case 'forbidden_on_slondo':
                return <ForbiddenOnSlondo/>;
            case 'service_requirements':
                return <ServiceRequirements/>;
            case 'accounts_requirements':
                return <AccountsRequirements/>;
            case 'prohibited_services':
                return <ProhibitedServices/>;
            case 'simple':
                return <Simple/>;
            case 'advanced':
                return <Advanced/>;
            case 'end':
                return <EndAuction/>;
            case 'holding':
                return <HoldingAuction/>;
            case 'create_auction':
                return <CreateAuction/>;
            case 'bet_submitting':
                return <BetSubmitting/>;
            case 'concept':
                return <Concept/>;
            case 'sold':
                return <Sold/>;
            case 'buy':
                return <Buy/>;
            case 'chat':
                return <Chat/>;
            case 'ratings_reviews':
                return <RatingsReviews/>;
        }
    };

    useEffect(() => {
        setSelectedDoc(legalDoc);
    }, [term]);

    const classes = useStyles();
    return (
        <MainLayout title={t('header:help')}>
            <Typography variant="h6" color="initial" className={classes.title}>
                {t('header:help')}
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
