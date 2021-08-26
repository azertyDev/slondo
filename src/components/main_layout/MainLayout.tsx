import {FC} from 'react';
import {Header} from '../header/Header';
import {Footer} from '../footer/Footer';
import {Container, Hidden} from '@material-ui/core';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {SEOTextComponent} from '@src/components/elements/seo_text_component/SEOTextComponent';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {CustomHead} from '@src/components/head/CustomHead';
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

    const {
        children,
        seoTxt,
        handleBack
    } = props;

    const classes = useStyles();
    return (
        <>
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
                <main>
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
            <ErrorModal/>
        </>
    );
};


