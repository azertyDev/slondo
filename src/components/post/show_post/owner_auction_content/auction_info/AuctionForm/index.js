import React from 'react'
import {Formik, Form} from 'formik'
import {Typography} from "@material-ui/core";
import {ButtonComponent} from "../../../../../elements/button/Button";
import {CustomFormikField} from "../../../../../elements/custom_formik_field/CustomFormikField";
import {useStyles} from "./useStyles";

const AuctionForm = ({data, handleFormSubmit}) => {

    const id = data?.auction?.id

    const handleSubmit = (values) => {
        handleFormSubmit({...values, id})
    }
    const classes = useStyles();
    return (
        <div className={classes.root}>

            <Formik
                initialValues={{
                    bet: '',
                }}
                onSubmit={values => handleSubmit(values)}
            >
                    <Form>
                        <div className="bet-info">
                            <CustomFormikField
                                name="bet"
                                type="number"
                                placeholder="stavka"
                                        // className={errors.phone && touched.phone ? 'error-border' : ''}
                            />
                            {/*<div className="validation-block">*/}
                            {/*    <Typography variant="subtitle2" className="error-text">*/}
                            {/*        {errors.phone && touched.phone ? errors.phone : ''}*/}
                            {/*    </Typography>*/}
                            {/*</div>*/}
                            <ButtonComponent color="secondary" type="submit">
                                <Typography variant="subtitle1" color="initial">
                                    Сделать ставку
                                </Typography>
                            </ButtonComponent>
                        </div>
                    </Form>
            </Formik>
        </div>
    )
}

export default AuctionForm