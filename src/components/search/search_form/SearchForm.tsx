import {FC} from 'react';
import {WithT} from 'i18next';
import {Grid} from '@material-ui/core';
import {Form, FormikContextType, FormikProvider} from 'formik';
import {NestedDropdown} from '@src/components/elements/nested_dropdown/NestedDropdown';
import {DropDownSelect} from '@src/components/elements/drop_down_select/DropDownSelect';
import {useStyles} from './useStyles';


type SearchFormPropsType = {
    filters,
    formik: FormikContextType<any>,
    handleSelect: (name, value) => void
} & WithT;

export const SearchForm: FC<SearchFormPropsType> = (props) => {
    const {
        t,
        formik,
        filters,
        handleSelect
    } = props;

    const {values, handleBlur} = formik;

    const classes = useStyles();
    return (
        <FormikProvider value={formik}>
            <Form className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs={4}>
                        <NestedDropdown
                            t={t}
                            values={values}
                            name='category'
                            labelTxt='category'
                            handleSelect={handleSelect}
                            list={filters.categories}
                        />
                    </Grid>
                    {!!values.category.type && (
                        <Grid item xs={4}>
                            <DropDownSelect
                                t={t}
                                name='typeCategory'
                                labelTxt='good_type'
                                values={values}
                                onBlur={handleBlur}
                                handleSelect={handleSelect}
                                items={values.category.type}
                            />
                        </Grid>
                    )}
                </Grid>
            </Form>
        </FormikProvider>
    );
};