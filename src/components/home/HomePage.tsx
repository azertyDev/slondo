import {FC} from 'react';
import {Main} from './main/Main';
import {useTranslation} from 'next-i18next';
import {Header} from '@src/components/header/Header';
import {Footer} from '@src/components/footer/Footer';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {defaultSEOContent} from '@src/common_data/seo_content';
import {CustomHead} from "@src/components/head/CustomHead";
import {categoriesNormalize} from "@src/helpers";
import {CategoriesCtx, HomePageCtx} from "@src/context";
import {AuthModal} from "@src/components/header/auth_modal/AuthModal";
import {MainSliderType, PostType} from "@src/context/HomePageCtx";

type HomePageProps = {
    homePageData: [
        any,
        MainSliderType[],
        PostType,
        PostType,
        PostType
    ]
}

export const HomePage: FC<HomePageProps> = (props) => {
    const [siteCategories, ...other] = props.homePageData;
    const [
        mainSliderData,
        postsSliderData,
        posts,
        auctions
    ] = other;

    const homePageData = {
        mainSliderData,
        postsSliderData,
        tabPosts: {
            posts: {
                data: posts.data,
                total: posts.total
            },
            auctions:  {
                data: auctions.data,
                total: auctions.total
            }
        }
    };

    const {language} = useTranslation().i18n;
    const categories = categoriesNormalize(siteCategories);
    const {title, description, text} = defaultSEOContent[language as string];

    return (
        <HomePageCtx.Provider value={homePageData}>
            <CategoriesCtx.Provider value={categories}>
                <CustomHead
                    title={title}
                    description={description}
                />
                <Header/>
                <Main seoTxt={text}/>
                <Footer/>
                <ErrorModal/>
                <AuthModal/>
            </CategoriesCtx.Provider>
        </HomePageCtx.Provider>
    );
};
