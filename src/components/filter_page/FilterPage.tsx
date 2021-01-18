import React, { FC } from 'react';
import {
    Grid,
    Typography,
    FormHelperText,
    FormControl,
    Select,
    MenuItem,
    TextField,
    InputLabel,
} from '@material-ui/core';
import { FormikProvider, Form, useFormik } from 'formik';
import { FilterInputs } from '@root/interfaces/FilterInputs';
import { filterInputSchema } from '@root/validation_schemas/filterInputSchema';
import { FaqComponent } from '@src/components/elements/faq_component/FaqComponent';
import { SocialsBlock } from '@src/components/elements/socials_block/SocialsBlock';
import { SearchForm } from '@src/components/elements/search_form/SearchForm';
import { useStyles } from './useStyles';

const currencies = [
    {
        value: '1',
        label: 'Бытовая техника',
    },
    {
        value: '2',
        label: 'Бытовая техника',
    },
    {
        value: '3',
        label: 'Бытовая техника',
    },
    {
        value: '4',
        label: 'Бытовая техника',
    },
];

const initialFilterInputsVals: FilterInputs = {
    phone: '',
    car: '',
    category: '',
    price: '',
    created_at: '',
    ancmnt_type: '',
    state: '',
};

export const FilterPage: FC = () => {
    const [currency, setCurrency] = React.useState('1');

    const handleChange = (event) => {
        setCurrency(event.target.value);
    };

    const onSubmit = (values) => {
        console.log(values);
    };

    const formik = useFormik({
        initialValues: initialFilterInputsVals,
        validationSchema: filterInputSchema,
        onSubmit,
    });

    const { errors, touched } = formik;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h6" color="initial">
                Вы искали
            </Typography>
            <Grid container>
                <Grid item xs={9}>
                    <div className="filter-wrapper">
                        <FormikProvider value={formik}>
                            <Form onSubmit={formik.handleSubmit}>
                                <div className="form-container">
                                    <TextField id="filled-full-width"
                                        style={{ margin: 8 }}
                                        placeholder=""
                                        helperText="Full width!"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        variant="filled"
                                    />
                                </div>
                                <div className="form-container">
                                    <TextField
                                        id="standard-select-currency"
                                        select
                                        label="Select"
                                        value={currency}
                                        onChange={handleChange}
                                        helperText="Please select your currency"
                                    >
                                        {currencies.map((option) => (
                                            <MenuItem
                                                key={option.value}
                                                value={option.value}
                                            >
                                                {option.label}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                    <div>
                                        <InputLabel htmlFor="component-simple">
                                            Стоимость
                                        </InputLabel>
                                        <TextField
                                            id="price"
                                            placeholder="От"
                                            helperText="Required!"
                                            margin="dense"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                        />
                                        <TextField
                                            id="price"
                                            placeholder="До"
                                            helperText="Required!"
                                            margin="dense"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            variant="outlined"
                                        />
                                    </div>
                                    <div>
                                        <TextField
                                            id="standard-select-currency"
                                            select
                                            label="Select"
                                            value={currency}
                                            onChange={handleChange}
                                            helperText="Please select your currency"
                                        >
                                            {currencies.map((option) => (
                                                <MenuItem
                                                    key={option.value}
                                                    value={option.value}
                                                >
                                                    {option.label}
                                                </MenuItem>
                                            ))}
                                        </TextField>
                                    </div>
                                </div>
                            </Form>
                        </FormikProvider>
                    </div>
                </Grid>
                <Grid item xs={3}>
                    <FaqComponent />
                    <SocialsBlock />
                </Grid>
            </Grid>
        </div>
    );
};
