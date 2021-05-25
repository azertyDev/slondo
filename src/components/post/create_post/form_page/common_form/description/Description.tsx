import {FC} from 'react';
import {FormikTextarea} from '@src/components/elements/formik_textarea/FormikTextarea';


type DescriptionPropsType = {
    limit: number,
    errorMsg: string,
    labelTxt: string,
    handleInput,
    handleBlur,
    description
};

export const Description: FC<DescriptionPropsType> = (props) => {
    const {
        limit,
        labelTxt,
        errorMsg,
        handleInput,
        handleBlur,
        description
    } = props;

    return (
        <FormikTextarea
            rowsMin={15}
            name='description'
            value={description}
            onBlur={handleBlur}
            labelTxt={labelTxt}
            onChange={handleInput}
            errorMsg={errorMsg}
            limit={limit}
        />
    );
};