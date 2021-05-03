import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {CustomFormikTextarea} from '@src/components/elements/custom_formik_textarea/CustomFormikTextarea';
import {useStyles} from './useStyles';


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

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="subtitle1">
                <strong>
                    {labelTxt}
                    <span className='error-text'>*</span>
                </strong>
                {errorMsg && <span className='error-text'>&nbsp;{errorMsg}</span>}
            </Typography>
            <CustomFormikTextarea
                rowsMin={15}
                name='description'
                value={description}
                onBlur={handleBlur}
                onChange={handleInput}
                className={`description-area ${errorMsg ? 'error-border' : ''}`}
            />
            <div className='limit-txt'>
                <Typography variant="subtitle1">
                    {`${description.length}/${limit}`}
                </Typography>
            </div>
        </div>
    );
};