import {FC} from 'react';
import {useRouter} from "next/router";
import {useTranslation} from "next-i18next";
import {withAuthRedirect} from "@src/hocs/withAuthRedirect";
import {PostTypesPage} from "@src/components/post/create_post/first_step/PostTypesPage";
import {CategoriesPage} from "@src/components/post/create_post/second_step/CategoriesPage";
import {FormPages} from "@src/components/post/create_post/third_step/FormPages";
import {MainLayout} from "@src/components/main_layout/MainLayout";
import {site_categories} from "@src/common_data/site_categories";
import {SuccessPage} from "@src/components/post/create_post/third_step/success_page/SuccessPage";

const CreatePost: FC = () => {
    const {t} = useTranslation('post');

    const {query, push, asPath} = useRouter();
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
            const hasType = !!site_categories
                .find(ctgr => ctgr.name === main_ctgr).subcategory
                .find(sub => sub.name === sub_ctgr).type;
            return !hasType || type_ctgr
                ? <FormPages backURL={getBackURL()}/>
                : <CategoriesPage/>;
        }

        if (post_type) {
            return <CategoriesPage/>;
        }

        return <PostTypesPage/>;
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