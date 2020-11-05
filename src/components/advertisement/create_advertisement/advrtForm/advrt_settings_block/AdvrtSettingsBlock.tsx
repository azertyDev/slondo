import React, {FC} from "react";
import {Grid, Typography} from "@material-ui/core";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {useStyles} from './useStyles';


export const AdvrtSettingsBlock: FC<any> = (props) => {
    const {data, values, onBlur, handleClickMenuItem} = props;

    const classes = useStyles();
    return (
        <>
            <Grid item container xs={12} spacing={1} className={classes.root}>
                <Grid item xs={12}>
                    <Typography variant="h5">
                        <strong>Настройки объявления</strong>
                    </Typography>
                </Grid>
                {
                    Object.keys(data).map((key) => {
                        if (Array.isArray(data[key]) && data[key].length) {
                            const newData = [{id: null, name: 'Не выбрано'}, ...data[key]];
                            return (
                                <Grid
                                    item
                                    key={key}
                                    xs={12}
                                    sm={4}
                                >
                                    {listGenerator(newData, key)}
                                </Grid>
                            )
                        }
                    })
                }
            </Grid>
        </>
    )

    function listGenerator(data, key) {
        return (
            <div key={key}>
                <Typography variant="subtitle1">
                    <strong>{key}</strong>
                </Typography>
                <CustomMenu
                    valueName={values[key] ? values[key].name : data[0].name}
                    items={data}
                    onBlur={onBlur}
                    onClick={handleClickMenuItem(key)}
                />
                {
                    values[key] && Object.keys(values[key]).map(innerKey => {
                        if (Array.isArray(values[key][innerKey]) && values[key][innerKey].length) {
                            const newData = [{id: null, name: 'Не выбрано'}, ...values[key][innerKey]];
                            return listGenerator(newData, innerKey);
                        }
                    })
                }
            </div>
        )
    }
};