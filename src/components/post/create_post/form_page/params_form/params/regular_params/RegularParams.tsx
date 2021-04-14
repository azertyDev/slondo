import React, {FC, Fragment} from "react";
import {WithT} from "i18next";
import {Grid, Typography} from "@material-ui/core";
import {excludedKeys, optionKeys} from "@src/common_data/form_fields";
import {CustomSelect} from "@src/components/post/create_post/form_page/components/custom_select/CustomSelect";
import {getErrorMsg} from "@src/helpers";
import {OptionsSelect} from "@src/components/post/create_post/form_page/components/options_select/OptionsSelect";
import {useStyles} from "./useStyles";


type RegularFormPropsType = {
    isPreview: boolean,
    filters,
    formik,
    handleSelect: (k, v) => void,
} & WithT;

export const RegularParams: FC<RegularFormPropsType> = (props) => {
    const {
        t,
        formik,
        filters,
        isPreview,
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
                 ? Object.keys(values).map(key => {
                        if (!!values[key]) {
                            let value = values[key];
                            if (Object.keys(values[key]).length) {
                                if (values[key].name) {
                                    value = values[key].name;
                                    return (
                                        <Grid
                                            item
                                            key={key}
                                            sm={4}
                                            xs={12}
                                        >
                                            <Typography variant="subtitle1">
                                                <strong>
                                                    {t(key)}:&nbsp;
                                                </strong>
                                                {value}
                                            </Typography>
                                        </Grid>
                                    );
                                }
                            }
                        }
                    })
                 : getFields(filters)}
            </Grid>
        </div>
    );

    function getFields(filters) {
        return Object.keys(filters).map(key => {
            const isExcludeValue = excludedKeys.some(k => k === key);
            const isNoEmptyArray = Array.isArray(filters[key]) && filters[key].length;
            const isOptionKey = optionKeys.some(optKey => optKey === key);

            if (!isExcludeValue && isNoEmptyArray) {
                return (
                    <Fragment key={key}>
                        <Grid
                            item
                            container
                            xs={12}
                            sm={isOptionKey ? 12 : 4}
                        >
                            {isOptionKey
                             ? <OptionsSelect
                                 t={t}
                                 name={key}
                                 values={values}
                                 options={filters[key]}
                                 handleOptionCheckbox={() => console.log('')}
                             />
                             : <CustomSelect
                                 t={t}
                                 name={key}
                                 values={values}
                                 onBlur={handleBlur}
                                 items={filters[key]}
                                 handleSelect={handleSelect}
                                 errorMsg={getErrorMsg(errors[key], touched[key], t)}
                             />}
                        </Grid>
                        {values[key] && Object.keys(values[key]).length && getFields(values[key])}
                    </Fragment>
                );
            }
        });
    }
};