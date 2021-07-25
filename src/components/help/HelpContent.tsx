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
import AccessToSlondo from './pages/access_to_slondo';
import PersonalDataSecurity from './pages/personal_data_security';
import AccountHasBeenBlocked from './pages/personal_data_security/account_has_been_blocked';
import Registration from './pages/access_to_slondo/registration';
import SignIn from './pages/access_to_slondo/sign_in';
import ForgotPassword from './pages/access_to_slondo/forgot_password';
import ChangePassword from './pages/access_to_slondo/change_password';
import Posts from './pages/posts';
import Create from './pages/posts/create';
import Reject from './pages/posts/reject';
import Deactivate from './pages/posts/deactivate';
import Update from './pages/posts/update';
import SiteRules from './pages/site_rules';
import MaterialRequirements from './pages/site_rules/material_requirements';
import ServiceRequirements from './pages/site_rules/service_requirements';
import ProhibitedServices from './pages/site_rules/prohibited_services';
import ForbiddenOnSlondo from './pages/site_rules/forbidden_on_slondo';
import AccountsRequirements from './pages/site_rules/accounts_requirements';
import Auction from './pages/auction';
import Simple from './pages/auction/simple';
import Advanced from './pages/auction/advanced';
import End from './pages/auction/end';
import Holding from './pages/auction/holding';
import CreateAuction from './pages/auction/create';
import BetSubmitting from './pages/auction/bet_submitting';
import SafeShopping from './pages/safe_shopping';
import Concept from './pages/safe_shopping/concept';
import Buy from './pages/safe_shopping/buy';
import Sold from './pages/safe_shopping/sold';
import UserInteraction from './pages/user_interaction';
import Chat from './pages/user_interaction/chat';
import RatingsReviews from './pages/user_interaction/ratings_reviews';
import SearchInService from './pages/search_in_service';
import {Feedback} from '@src/components/help/pages/feedback/Feedback';
import {LegalComponent} from '@src/components/help/pages/user_agreements/LegalComponent';
import {legal_docs} from '@src/components/help/pages/user_agreements/LegalDocs';
import {useStyles} from './useStyles';
import { useTranslation } from 'next-i18next';

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
            case 'rejected':
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
                return <End/>;
            case 'holding':
                return <Holding/>;
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
