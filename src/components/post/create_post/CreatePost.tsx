import {FC} from 'react';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {withAuthRedirect} from "@src/hocs/withAuthRedirect";
import {FirstStep} from "@src/components/post/create_post/first_step/FirstStep";
import {SecondStep} from "@src/components/post/create_post/second_step/SecondStep";
import {ThirdStep} from "@src/components/post/create_post/third_step/ThirdStep";
import {MainLayout} from "@src/components/main_layout/MainLayout";
import {SuccessPage} from "@src/components/post/create_post/third_step/success_page/SuccessPage";
import {CategoryType} from "@root/interfaces/Categories";
import {categoriesNormalize} from "@src/helpers";

const CreatePost: FC<{ siteCategories: CategoryType[] }> = (props) => {
    const {t} = useTranslation('post');
    const {query, push, asPath} = useRouter();
    const siteCategories = categoriesNormalize(props.siteCategories);

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
            const hasType = !!siteCategories
                .find(ctgr => ctgr.name === main_ctgr)?.subcategory
                .find(sub => sub.name === sub_ctgr)?.type;

            return !hasType || type_ctgr
                ? <ThirdStep
                    backURL={getBackURL()}
                    siteCategories={siteCategories}
                />
                : <SecondStep siteCategories={siteCategories}/>;
        }

        if (post_type) {
            return <SecondStep siteCategories={siteCategories}/>;
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

    return (
        <MainLayout
            title={t(getTitle())}
            handleBack={handleBack}
        >
            {getPage()}
        </MainLayout>
    );
};

export default withAuthRedirect(CreatePost);