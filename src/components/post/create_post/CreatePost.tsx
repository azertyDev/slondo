import {FC} from 'react';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {withAuthRedirect} from "@src/hocs/withAuthRedirect";
import {FirstStep} from "@src/components/post/create_post/first_step/FirstStep";
import {SecondStep} from "@src/components/post/create_post/second_step/SecondStep";
import {ThirdStep} from "@src/components/post/create_post/third_step/ThirdStep";
import {SuccessPage} from "@src/components/post/create_post/third_step/success_page/SuccessPage";
import {ErrorModal} from "@src/components/error_modal/ErrorModal";
import {CustomHead} from "@src/components/head/CustomHead";
import {Container, Hidden} from "@material-ui/core";
import {Header} from "@src/components/header/Header";
import {ModalHeader} from "@src/components/cabinet/components/modal_header/ModalHeader";
import {categoriesNormalize} from "@src/helpers";
import {useStyles} from "@src/components/main_layout/useStyles";
import {CategoriesCtx} from "@src/context";
import {Footer} from "@src/components/footer/Footer";

const CreatePost: FC<{ siteCategories }> = ({siteCategories}) => {
    const {t} = useTranslation('post');
    const {query, push, asPath} = useRouter();
    const categories = categoriesNormalize(siteCategories);

    const {
        post_type,
        main_ctgr,
        sub_ctgr,
        type_ctgr,
        preview,
        success
    } = query;

    const isPreview = +preview === 1;

    const getBackURL = () => {
        const ctgrPrevURL = `
            /create?post_type=${post_type}&main_ctgr=${main_ctgr}${
            type_ctgr ? `&sub_ctgr=${sub_ctgr}` : ''
        }`;

        if (isPreview) {
            return asPath.replace(/&preview=1/, '');
        }

        if (sub_ctgr || type_ctgr) {
            return ctgrPrevURL;
        }

        if (post_type) {
            return '/create';
        }

        return '/';
    };

    const getTitle = () => {
        if (post_type) {
            return 'select_category';
        }
        if (type_ctgr || (!type_ctgr && sub_ctgr)) {
            return 'select_params';
        }
        return 'select_post_type';
    };

    const getPage = () => {
        if (+success === 1) {
            return <SuccessPage/>;
        }

        if (sub_ctgr || type_ctgr) {
            const hasType = !!categories
                .find(ctgr => ctgr.name === main_ctgr)?.subcategory
                .find(sub => sub.name === sub_ctgr)?.type;

            return !hasType || type_ctgr
                ? <ThirdStep
                    backURL={getBackURL()}
                />
                : <SecondStep/>;
        }

        if (post_type) {
            return <SecondStep/>;
        }

        return <FirstStep/>;
    };

    const handleBack = async () => {
        await push(
            getBackURL(),
            undefined,
            {shallow: true}
        );
    };

    const title = t(getTitle());

    const classes = useStyles();
    return (
        <>
            <CustomHead
                title={title}
            />
            <div className={classes.root}>
                <CategoriesCtx.Provider value={categories}>
                    <Hidden xsDown>
                        <Header/>
                    </Hidden>
                    <Hidden smUp>
                        <ModalHeader
                            title={title}
                            hasPrevBtn={true}
                            handleBack={handleBack}
                        />
                    </Hidden>
                    <main style={{marginBottom: '20px'}}>
                        <Container
                            maxWidth="xl"
                            className='layout-container'
                        >
                            {getPage()}
                        </Container>
                    </main>
                </CategoriesCtx.Provider>
                <Hidden smDown>
                    <Footer/>
                </Hidden>
            </div>
            <ErrorModal/>
        </>
    );
};

export default withAuthRedirect(CreatePost);