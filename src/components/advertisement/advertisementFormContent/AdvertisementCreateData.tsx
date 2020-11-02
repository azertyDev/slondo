import React, {FC} from "react";
import {Grid, Typography} from "@material-ui/core";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";


export const AdvertisementCreateData: FC<any> = (props) => {
    const {data, values, onBlur, handleClickMenuItem} = props;
    const dataKeys = Object.keys(data);

    return (
        <>
            {
                dataKeys.map((key) => {
                    if (key !== 'id' && key !== 'name' && data[key].length) {

                        const newData = key !== 'adsParams' ? [{id: 0, name: 'Выбрать'}, ...data[key]] : data[key];

                        return (
                            <Grid
                                key={key}
                                item
                                xs={12}
                                sm={4}
                            >
                                <Typography variant="subtitle1">
                                    <strong>
                                        {key}
                                    </strong>
                                </Typography>
                                <CustomMenu
                                    valueName={values[key] ? values[key].name : 'Выбрать'}
                                    items={newData}
                                    onBlur={onBlur}
                                    onClick={handleClickMenuItem(key)}
                                />
                            </Grid>
                        )
                    }
                })
            }
        </>
    )
};