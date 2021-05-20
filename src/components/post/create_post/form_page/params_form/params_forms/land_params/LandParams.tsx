import {FC} from "react";
import {Grid} from "@material-ui/core";
import {DropDownSelect} from "@src/components/elements/drop_down_select/DropDownSelect";
import {FormikField} from "@src/components/elements/formik_field/FormikField";
import {DeployedSelect} from "@src/components/elements/deployed_select/DeployedSelect";
import {PreviewValues} from "@src/components/post/create_post/form_page/params_form/PreviewValues";
import {CategoriesCommonType} from '../../ParamsFormContainer';
import {getErrorMsg} from "@src/helpers";
import {useStyles} from './useStyles';


type LandPropsType = {
    type,
    handleSelect: (k, v) => void
} & CategoriesCommonType;

export const LandParams: FC<LandPropsType> = (props) => {
    const {
        t,
        type,
        isPreview,
        formik,
        filters,
        handleSelect
    } = props;

    const {
        values,
        errors,
        touched,
        handleBlur
    } = formik;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={2}>
                {isPreview
                    ? <PreviewValues t={t} values={values}/>
                    : <>
                        <Grid item container xs={12} justify='space-between' alignItems='center'>
                            <Grid item xs={6}>
                                <DeployedSelect
                                    t={t}
                                    formik={formik}
                                    name='estate_type'
                                    options={filters.estate_type}
                                    handleSelect={handleSelect}
                                />
                            </Grid>
                            <Grid item xs={3}>
                                <DeployedSelect
                                    t={t}
                                    formik={formik}
                                    name='location'
                                    options={filters.location}
                                    handleSelect={handleSelect}
                                />
                            </Grid>
                        </Grid>
                        {type.id !== 1 && (
                            <Grid item container xs={4}>
                                <DropDownSelect
                                    t={t}
                                    name='payments'
                                    items={filters.payments}
                                    values={values}
                                    onBlur={handleBlur}
                                    handleSelect={handleSelect}
                                />
                            </Grid>
                        )}
                        <Grid item xs={4}>
                            <FormikField
                                t={t}
                                name='area'
                                labelText='area_in_hundred'
                                value={values.area ?? ''}
                                errorMsg={getErrorMsg(errors.area, touched.area, t)}
                            />
                        </Grid>
                        <Grid item container xs={4}>
                            <DropDownSelect
                                t={t}
                                name='electricity'
                                items={filters.electricity}
                                values={values}
                                onBlur={handleBlur}
                                handleSelect={handleSelect}
                            />
                        </Grid>
                        <Grid item container xs={4}>
                            <DropDownSelect
                                t={t}
                                name='sewerage'
                                items={filters.sewerage}
                                values={values}
                                onBlur={handleBlur}
                                handleSelect={handleSelect}
                            />
                        </Grid>
                        <Grid item container xs={4}>
                            <DropDownSelect
                                t={t}
                                name='gas'
                                items={filters.gas}
                                values={values}
                                onBlur={handleBlur}
                                handleSelect={handleSelect}
                            />
                        </Grid>
                        <Grid item container xs={4}>
                            <DropDownSelect
                                t={t}
                                name='water'
                                items={filters.water}
                                values={values}
                                onBlur={handleBlur}
                                handleSelect={handleSelect}
                            />
                        </Grid>
                        <Grid item container xs={4}>
                            <DropDownSelect
                                t={t}
                                name='posted'
                                items={filters.posted}
                                values={values}
                                onBlur={handleBlur}
                                handleSelect={handleSelect}
                            />
                        </Grid>
                    </>}
            </Grid>
        </div>
    )
};