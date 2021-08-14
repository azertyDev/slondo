import {FC} from 'react';
import {useRouter} from "next/router";
import {withAuthRedirect} from "@src/hocs/withAuthRedirect";
import {PageNotFound} from "@src/components/page_not_found/PageNotFound";
import {PostTypesPage} from "@src/components/post/create_post/first_step/PostTypesPage";
import {CategoriesPage} from "@src/components/post/create_post/second_step/CategoriesPage";
import {FormPages} from "@src/components/post/create_post/third_step/FormPages";
import {MainLayout} from "@src/components/main_layout/MainLayout";
import {useTranslation} from "next-i18next";

const CreatePost: FC = () => {
    const {query, push} = useRouter();
    const {t} = useTranslation('post');
    const [url, postTypeName, categoryName, subcategoryName, typeName] = query.slug as string[];

    const title = (() => {
        switch (url) {
            case 'type':
                return 'select_post';
            case 'post':
            case 'auc':
            case 'exauc':
                return 'select_category';
            case 'form':
                return 'select_params';
        }
    })();

    const getPage = () => {
        switch (url) {
            case 'type':
                return <PostTypesPage/>;
            case 'post':
            case 'auc':
            case 'exauc':
                return <CategoriesPage/>;
            case 'form':
                return <FormPages/>;
            default:
                return <PageNotFound/>;
        }
    };

    const handleBack = async () => {
        switch (url) {
            case 'type':
                await push('/');
                break;
            case 'post':
            case 'auc':
            case 'exauc':
                await push('/create/type');
                break;
            case 'form':
                await push(
                    `/create/${postTypeName}/${categoryName}${typeName ? `/${subcategoryName}` : ''}`,
                    undefined,
                    {shallow: true}
                );
        }
    };

    return (
        <MainLayout
            handleBack={handleBack}
            title={t(title)}
        >
            {getPage()}
        </MainLayout>
    );
};

export default withAuthRedirect(CreatePost);