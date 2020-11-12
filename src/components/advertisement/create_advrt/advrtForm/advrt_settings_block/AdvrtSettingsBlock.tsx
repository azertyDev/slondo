import React, {FC} from "react";
import {Grid, Typography} from "@material-ui/core";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {useStyles} from './useStyles';


export const AdvrtSettingsBlock: FC<any> = (props) => {
    const {
        isPreview,
        createAdvrt,
        adsParams,
        onBlur,
        handleClickMenuItem
    } = props;

    const data = isPreview ? adsParams : createAdvrt.data;

    const classes = useStyles();
    return (
        <Grid item container xs={12} spacing={2} justify='space-between' className={classes.root}>
            {
                Object.keys(data).map(key => {
                    if (Array.isArray(data[key]) && data[key].length && key !== 'adsParams' && key !== 'address') {
                        const newData = [{id: null, name: 'Не выбрано'}, ...data[key]];
                        return listGenerator(newData, key);
                    } else if (!Array.isArray(data[key]) && isPreview && data[key]) {
                        return listGenerator(data, key);
                    }
                })
            }
            {
                !isPreview && Object.keys(data).map(key => (
                    adsParams[key] && Object.keys(adsParams[key]).map(innerKey => {
                        if (Array.isArray(adsParams[key][innerKey]) && adsParams[key][innerKey].length) {
                            const newData = [{id: null, name: 'Не выбрано'}, ...adsParams[key][innerKey]];
                            return listGenerator(newData, innerKey);
                        }
                    })
                ))
            }
        </Grid>
    )

    function listGenerator(data, key) {
        return (
            <Grid
                item
                container
                key={key}
                xs={12}
                sm={6}
            >
                <Grid item xs={12}>
                    <Typography variant="subtitle1">
                        <strong>{key}</strong>
                    </Typography>
                    {
                        isPreview
                            ? <Typography variant="subtitle1">
                                <strong>{data[key].name}</strong>
                            </Typography>
                            : <CustomMenu
                                valueName={adsParams[key] ? adsParams[key].name : data[0].name}
                                items={data}
                                onBlur={onBlur}
                                onClick={handleClickMenuItem(key)}
                            />
                    }
                </Grid>
            </Grid>
        )
    }
};