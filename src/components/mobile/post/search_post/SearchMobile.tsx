import {FC} from 'react';
import {SearchFormProps} from '@root/interfaces/Post';
import {SearchForm} from './search_form/SearchForm';
import {useStyles} from './useStyles';

type SearchMobileProps = {
    drawer;
    generateUrl: (v) => void;
} & SearchFormProps;

export const SearchPostMobile: FC<SearchMobileProps> = props => {
    const {
        drawer,
        formik,
        filtersState,
        handleReset,
        ctgrsByCyrName,
        handleSelectCategory,
        generateUrl
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <SearchForm
                generateUrl={generateUrl}
                formik={formik}
                drawer={drawer}
                filters={filtersState}
                handleReset={handleReset}
                categories={ctgrsByCyrName}
                handleSelectCategory={handleSelectCategory}
            />
        </div>
    );
};
