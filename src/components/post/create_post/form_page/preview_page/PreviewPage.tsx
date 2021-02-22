import React, {FC} from "react";
import {useSelector} from "react-redux";
import {FormikProvider, useFormik} from "formik";
import {RootState} from "@src/redux/rootReducer";


export const PreviewPage: FC = () => {
    const {params, defaultParams, photos} = useSelector((store: RootState) => store.createPostData);

    const onSubmit = (values) => {
        console.log(values)
    };

    const formik = useFormik({
        onSubmit,
        initialValues: {},
        validationSchema: null,
    });

    const {
        values,
        setValues,
        errors,
        touched,
        handleSubmit
    } = formik;

    return (
        <FormikProvider value={formik}>
            <form onSubmit={handleSubmit}>
                <div>Preview</div>
                <button type='submit'>Submit</button>
            </form>
        </FormikProvider>
    )
}