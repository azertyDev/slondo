import {FC} from 'react';
import {useRouter} from 'next/router';
import {Grid, Hidden, Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {HelpSidebar} from '@src/components/help/help_sidebar/HelpSidebar';
import menuStruct from './menu_struct';
import {Feedback} from '@src/components/help/pages/feedback/Feedback';
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
import {LegalComponent} from '@src/components/help/pages/user_agreements/LegalComponent';

enum Pages {
    'how_to_register',
    'how_to_participate',
    'how_to_create_post',
    'how_to_create_auction',
    'feedback',
    'user_agreements',
    'privacy_police',
    'safe_auction_offer',
    'top_offer',
    'advanced_auction_offer',
    'access_to_slondo',
    'personal_data_security',
    'posts',
    'site_rules',
    'auction',
    'safe_shopping',
    'user_interaction',
    'search_in_service',

}

export const HelpContent: FC = () => {
    const {t} = useTranslation();
    const [term, subTerm] = useRouter().query.term as string[];
    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));


    const isXsDown = useMediaQuery(useTheme().breakpoints.down('xs'));

    const isRootPage = term === undefined;
    const existPage = isRootPage || Pages[term as string] !== undefined;

    const getTermPage = () => {
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
                return <LegalComponent term={term} />;
            case 'privacy_police':
                return <LegalComponent term={term} />;
            case 'safe_auction_offer':
                return <LegalComponent term={term} />;
            case 'top_offer':
                return <LegalComponent term={term} />;
            case 'advanced_auction_offer':
                return <LegalComponent term={term} />;
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
                <Grid container item xs={isXsDown ? 12 : 9}>
                    {subTerm ? getSubTermPage() : getTermPage()}
                </Grid>
            </Grid>
        </MainLayout>
    );
};
