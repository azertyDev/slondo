import React, {FC} from 'react';
import {useRouter} from "next/router";
import {withAuthRedirect} from "@src/hocs/withAuthRedirect";
import {PageNotFound} from "@src/components/page_not_found/PageNotFound";
import {PostTypesPage} from "@src/components/post/create_post/first_step/PostTypesPage";
import {CategoriesPage} from "@src/components/post/create_post/second_step/CategoriesPage";
import {FormPages} from "@src/components/post/create_post/third_step/FormPages";


const CreatePost: FC = () => {
    const {query: {url, slug}} = useRouter();
    const isFormPage = url === 'form';
    const [postTypeName] = slug as string[];
    const isCategoriesPage = postTypeName === 'post' || postTypeName === 'auc' || postTypeName === 'exauc';
    const is404 = (!isCategoriesPage && postTypeName !== 'select') || (url !== 'type' && !isFormPage);

    return (
        <div>
            {is404
             ? <PageNotFound/>
             : isFormPage
               ? <FormPages/>
               : isCategoriesPage
                 ? <CategoriesPage/>
                 : <PostTypesPage/>}
        </div>
    );
};

export default withAuthRedirect(CreatePost);