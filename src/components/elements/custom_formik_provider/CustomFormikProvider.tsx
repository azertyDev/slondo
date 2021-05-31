import {FC} from 'react';
import {FormikProvider} from 'formik';

type CustomFormikProviderPropsType = {
    isPreview?: boolean,
    formik
};

export const CustomFormikProvider: FC<CustomFormikProviderPropsType> = (props) => {
    const {
        formik,
        children
    } = props;

    return (
        <FormikProvider value={formik}>
            <form onSubmit={formik.handleSubmit}>
                {children}
            </form>
        </FormikProvider>
    );
};
