import {FC, useEffect, useState} from 'react';
import {MainLayout} from '@src/components/main_layout/MainLayout';
import {useTranslation} from 'react-i18next';
import {getSEOContent} from '@src/common_data/seo_content';
import {addParentsToCtgrs, CtgrsByCyrillicNameType} from '@src/helpers';
import {Search} from '@src/components/search/Search';
import {useFormik} from 'formik';
import {ParsedUrlQuery} from 'querystring';
import {categories_list} from '@src/common_data/categories_list';
import {SearchForm} from '@src/components/search/search_form/SearchForm';
import {SearchResult} from '@src/components/search/search_result/SearchResult';


type SearchContainerPropsType = {
    locale: string,
    query: ParsedUrlQuery,
    ctgrsByQuery: CtgrsByCyrillicNameType
};

export const SearchContainer: FC<SearchContainerPropsType> = (props) => {
    const {
        locale,
        query,
        ctgrsByQuery
    } = props;

    const {t} = useTranslation('filters');

    const {location, q} = query;
    const [ctgr, subCtgr, typeCtgr = null] = ctgrsByQuery;

    // SEO
    const seoContent = getSEOContent(ctgr.name, subCtgr.name, typeCtgr, t(`locations:${location}`), locale);
    const seoTxt = seoContent ? seoContent.text : null;
    const description = q ? `${q} SLONDO.uz` : seoContent ? seoContent.description : null;
    const title = q ? `${q} - ${typeCtgr ? t(typeCtgr.name) : t(subCtgr.name)} - SLONDO.uz` : seoContent ? seoContent.title : null;

    const onSubmit = () => {
        console.log('submit');
    };

    const initValues: any = {
        category: subCtgr ?? ctgr,
        typeCategory: typeCtgr
    };

    const formik = useFormik({
        initialValues: initValues,
        onSubmit
    });

    const {values, setValues} = formik;

    const [filters, setFilters] = useState({
        categories: addParentsToCtgrs(categories_list),
        subCategories: ctgr.subCategory,
        typeCategories: subCtgr.type
    });

    const handleSelect = (name, value) => {
        if (name === 'category') {
            setValues({[name]: value});
        } else {
            setValues({...values, [name]: value});
        }
    };

    const searchForm = (
        <SearchForm
            t={t}
            formik={formik}
            filters={filters}
            handleSelect={handleSelect}
        />
    );

    const searchResult = (
        <SearchResult resultList={[]}/>
    );

    useEffect(() => {
        setValues(initValues);
    }, [ctgr, subCtgr, typeCtgr]);

    return (
        <MainLayout title={title} description={description} seoTxt={seoTxt}>
            <Search
                t={t}
                searchForm={searchForm}
                searchResult={searchResult}
            />
        </MainLayout>
    );
};