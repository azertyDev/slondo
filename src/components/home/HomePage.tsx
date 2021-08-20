import {FC} from 'react';
import {Main} from './main/Main';
import {useTranslation} from 'next-i18next';
import {Header} from '@src/components/header/Header';
import {Footer} from '@src/components/footer/Footer';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {defaultSEOContent} from '@src/common_data/seo_content';
import {CustomHead} from "@src/components/head/CustomHead";

export const HomePage: FC = () => {
    const {language} = useTranslation().i18n;
    const {title, description, text} = defaultSEOContent[language as string];
    return (
        <>
            <CustomHead
                title={title}
                description={description}
            />
            <Header/>
            <Main seoTxt={text}/>
            <Footer/>
            <ErrorModal/>
        </>
    );
};
