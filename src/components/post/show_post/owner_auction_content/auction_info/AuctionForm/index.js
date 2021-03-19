import React from 'react'
import {Formik, Form, useFormik} from 'formik'
import {Typography} from "@material-ui/core";
import {ButtonComponent} from "../../../../../elements/button/Button";
import {CustomFormikField} from "../../../../../elements/custom_formik_field/CustomFormikField";
import {useStyles} from "./useStyles";
import {getAuctionSchema} from "@root/validation_schemas/auctionSchema";

const AuctionForm = ({data, handleFormSubmit, list}) => {
    const classes = useStyles()

    const min_bet = list?.[0]?.['min_bet']
    const max_bet = list?.[0]?.['max_bet']
    const id = data?.['auction']?.['id']

    const handleSubmit = (values) => {
        handleFormSubmit({...values, id})
    }
    const formik = useFormik({
        initialValues: {
            bet: '',
        },
        onSubmit: values => handleSubmit(values),
        validationSchema: getAuctionSchema(min_bet, max_bet)
    });
    const {errors, touched} = formik
    return (
        <div className={classes.root}>
            <form onSubmit={formik.handleSubmit}>
                <div className="bet-info">
                    <input
                        name="bet"
                        type="number"
                        onChange={formik.handleChange}
                        placeholder={`Мин. ставка: ${min_bet} сум`}
                        className={errors.bet && touched.bet ? 'error-border' : ''}
                        style={{
                            width: '100%',
                            background: '#FFFFFF',
                            border: '1px solid #DADADA',
                            borderRadius: '3px',
                            padding: '11px 20px'
                        }}
                    />
                    <div className="validation-block">
                        <Typography variant="subtitle2" className="error-text">
                            {errors.bet && touched.bet ? errors.bet : ''}
                        </Typography>
                    </div>
                    <ButtonComponent
                        color="secondary"
                        type="submit"
                        style={{
                            borderRadius: '3px',
                            border: '1px solid #675EAA',
                            width: '100%',
                            marginTop: 5
                        }}>
                        <Typography variant="subtitle1" color="initial">
                            Сделать ставку
                        </Typography>
                    </ButtonComponent>
                </div>
            </form>
        </div>
    )
}

export default AuctionForm