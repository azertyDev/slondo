import {FC} from 'react';
import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';
import {Container, Hidden} from '@material-ui/core';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {SEOTextComponent} from '@src/components/elements/seo_text_component/SEOTextComponent';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {CustomHead} from '@src/components/head/CustomHead';
import {AuthModal} from "@src/components/header/auth_modal/AuthModal";
import {CategoriesCtx} from "@src/context";
import {useCategories} from "@src/hooks";
import {useStyles} from './useStyles';

type MainLayoutPropsType = {
    title?: string,
    description?: string,
    seoTxt?: string,
    handleBack?: () => void
};

export const MainLayout: FC<MainLayoutPropsType> = (props) => {
    const title = props.title;
    const description = props.description;
    const {categories} = useCategories();

    const {
        children,
        seoTxt,
        handleBack
    } = props;

    const classes = useStyles();
    return (
        <CategoriesCtx.Provider value={categories}>
            <CustomHead
                title={title}
                description={description}
            />
            <div className={classes.root}>
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
                        {children}
                        {!!seoTxt && <SEOTextComponent text={seoTxt}/>}
                    </Container>
                </main>
                <Hidden xsDown>
                    <Footer/>
                </Hidden>
            </div>
            <div className={classes.modalDialog}>
                <AuthModal/>
            </div>
            <ErrorModal/>
        </CategoriesCtx.Provider>
    );
};


