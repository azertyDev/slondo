import {FC, useState} from 'react';
import {useTranslation} from 'react-i18next';
import {getSEOContent} from '@src/common_data/seo_content';
import {cookies, getCtgrsByCyrillicNames} from '@src/helpers';
import {SearchForm} from '@src/components/post/search_post/search_form/SearchForm';
import {SearchResult} from '@src/components/post/search_post/search_result/SearchResult';
import {
    Box,
    Container,
    FormControl,
    Grid,
    Hidden,
    Select,
    Typography,
    useMediaQuery,
    useTheme
} from '@material-ui/core';
import {HomeSidebar} from '@src/components/home/main/home_sidebar/HomeSideBar';
import ErrorPage from '@root/pages/_error';
import {useRouter} from 'next/router';
import {SEOTextComponent} from '@src/components/elements/seo_text_component/SEOTextComponent';
import {Footer} from '@src/components/footer/Footer';
import {ErrorModal} from '@src/components/error_modal/ErrorModal';
import {CustomHead} from '@src/components/head/CustomHead';
import {useStyles} from './useStyles';
import {SearchHeader} from '@src/components/post/search_post/search_header/SearchHeader';
import {CustomButton} from '@src/components/elements/custom_button/CustomButton';
import {FilterIcon, FlatIcon} from '@src/components/elements/icons';
import Drawer from '@material-ui/core/Drawer';
import {useModal} from '@src/hooks';
import {ModalHeader} from '@src/components/cabinet/components/modal_header/ModalHeader';
import {CheckCircle, ExpandMore, KeyboardArrowDown} from '@material-ui/icons';
import {Location} from '@src/components/elements/location/Location';

type SearchPostProps = {
    statusCode: number
}

export const SearchPost: FC<SearchPostProps> = ({statusCode}) => {
    const {query: {path, ...urlParams}} = useRouter();
    const is404 = statusCode === 404;

    const [state, setState] = useState({
        name: ''
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value
        });
    };

    const userLocation = cookies.get('user_location');
    const [location, ...categories] = path as string[];
    const {
        modalOpen: drawerOpen,
        handleModalOpen: handleDrawerOpen,
        handleModalClose: handleDrawerClose
    } = useModal();
    const {locale} = useRouter();
    const {t} = useTranslation('common');
    const isSm = useMediaQuery(useTheme().breakpoints.down('sm'));

    const ctgrsByCyrName = getCtgrsByCyrillicNames(categories as string[]);
    const [ctgr, subctgr, typeCtgr] = ctgrsByCyrName;

    const searchTermFromUrl = urlParams.q as string || '';

    // SEO
    const seoContent = getSEOContent(ctgr, subctgr, typeCtgr, location, locale);

    const seoTxt = seoContent.text;

    const description = searchTermFromUrl
        ? `${searchTermFromUrl} ${locale === 'ru' ? 'в' : ''} ${location}${locale === 'uz' ? 'da' : 'е'} SLONDO.uz`
        : seoContent.description;

    let title = searchTermFromUrl ? `${searchTermFromUrl} - SLONDO.uz` : seoContent.title;

    if (ctgr) {
        title = searchTermFromUrl
            ? `${searchTermFromUrl} - ${t(`locations:site_categories:${typeCtgr?.name ?? subctgr?.name ?? ctgr?.name ?? ''}`)} - SLONDO.uz`
            : seoContent.title;
    }

    const classes = useStyles();
    return is404
        ? <ErrorPage statusCode={statusCode}/>
        : <>
            <CustomHead
                title={title}
                description={description}
            />
            <div className={classes.root}>
                <SearchHeader />
                <main>
                    <Hidden mdUp>
                        <Box pl='10px' className='filter-btns'>
                            <CustomButton
                                color='secondary'
                                className='filter-btn'
                                onClick={handleDrawerOpen}
                            >
                                <Typography variant='caption' component='p'>
                                    {t('filters')}
                                </Typography>
                                <FilterIcon />
                            </CustomButton>
                            <CustomButton
                                className='geo-btn'
                                onClick={handleDrawerOpen}
                            >
                                <Typography variant='caption' component='p'>
                                    {t('geolocation')}
                                </Typography>
                            </CustomButton>
                            <FormControl
                                size='small'
                                variant="outlined"
                            >
                                <Select
                                    native
                                    defaultValue={1}
                                    value={state.name}
                                    onChange={handleChange}
                                    classes={{
                                        root: classes.select
                                    }}
                                >
                                    <option value={1}>{t('allPosts')}</option>
                                    <option value={2}>{t('post')}</option>
                                    <option value={3}>{t('auc')}</option>
                                </Select>
                            </FormControl>
                            <FormControl
                                size='small'
                                variant="outlined"
                            >
                                <Select
                                    native
                                    defaultValue={1}
                                    value={state.name}
                                    onChange={handleChange}
                                    placeholder={t('sort')}
                                    classes={{
                                        root: classes.select
                                    }}
                                >
                                    <option value={1}>{t('sort')}</option>
                                    <option value={2}>{t('sort')}</option>
                                    <option value={3}>{t('sort')}</option>
                                </Select>
                            </FormControl>
                        </Box>
                    </Hidden>
                    <Container
                        maxWidth="xl"
                        className='layout-container'
                    >
                        <Grid container spacing={isSm ? 0 : 2}>
                            <Grid item xs={12} lg={9} zeroMinWidth>
                                <Hidden smDown>
                                    <SearchForm
                                        urlParams={urlParams}
                                        categories={ctgrsByCyrName}
                                    />
                                </Hidden>
                                <SearchResult
                                    urlParams={urlParams}
                                    categories={ctgrsByCyrName}
                                    searchTermFromUrl={searchTermFromUrl}
                                />
                            </Grid>
                            <Hidden mdDown>
                                <Grid item xs={3}>
                                    <HomeSidebar />
                                </Grid>
                            </Hidden>
                        </Grid>
                        {!!seoTxt && <SEOTextComponent text={seoTxt} />}
                    </Container>
                </main>
                <Hidden smDown>
                    <Footer />
                </Hidden>
            </div>
            <ErrorModal />
            <Drawer
                anchor='left'
                open={drawerOpen}
                onClose={handleDrawerClose}
            >
                <ModalHeader
                    title={t('filters')}
                    handleCloseDialog={handleDrawerClose}
                />
                <SearchForm
                    urlParams={urlParams}
                    categories={ctgrsByCyrName}
                />
            </Drawer>
        </>;
};