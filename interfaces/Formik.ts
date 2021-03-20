import {FormikContextType, FormikHandlers, FormikHelpers, FormikState} from "formik/dist/types";

export type FormikType<values> = FormikHelpers<values> & FormikState<values> & FormikHandlers & FormikContextType<values>;