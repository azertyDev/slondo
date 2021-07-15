import {FC} from 'react';
import {useRouter} from "next/router";
import {withAuthRedirect} from "@src/hocs/withAuthRedirect";
import {PageNotFound} from "@src/components/page_not_found/PageNotFound";
import {PostTypesPage} from "@src/components/post/create_post/first_step/PostTypesPage";
import {CategoriesPage} from "@src/components/post/create_post/second_step/CategoriesPage";
import {FormPages} from "@src/components/post/create_post/third_step/FormPages";

const CreatePost: FC = () => {
    const [url] = useRouter().query.slug as string[];

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

    return getPage();
};

export default withAuthRedirect(CreatePost);