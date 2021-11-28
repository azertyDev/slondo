import {FC} from 'react';
import {Grid} from '@material-ui/core';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {useTranslation} from 'react-i18next';
import {CommonFiltersType} from '../../SearchForm';

type SearchRegularPropsType = {
    type;
    category;
    subcategory;
} & CommonFiltersType;

export const SearchJob: FC<SearchRegularPropsType> = props => {
    const {handleSelect, subcategory, filters, formik} = props;

    const {t} = useTranslation('filters');
    const isVacancy = subcategory?.name === 'vacancy';

    const {values} = formik;

    return (
        <Grid container spacing={1}>
            <Grid item container xs={12} sm={4}>
                <DropDownSelect
                    multiple
                    name="employment"
                    values={values}
                    transKey="job."
                    items={filters.employment}
                    handleSelect={handleSelect}
                    labelTxt={t(`job.employment.name`)}
                />
            </Grid>
            <Grid item container xs={12} sm={4}>
                <DropDownSelect
                    multiple
                    name="experience"
                    values={values}
                    transKey="job."
                    items={filters.experience}
                    handleSelect={handleSelect}
                    labelTxt={t(
                        `job.${
                            isVacancy ? 'require_experience' : 'experience'
                        }.name`
                    )}
                />
            </Grid>
            <Grid item container xs={12} sm={4}>
                <DropDownSelect
                    multiple
                    name="nature"
                    transKey="job."
                    values={values}
                    items={filters.nature}
                    handleSelect={handleSelect}
                    labelTxt={t(`job.nature.name`)}
                />
            </Grid>
        </Grid>
    );
};
