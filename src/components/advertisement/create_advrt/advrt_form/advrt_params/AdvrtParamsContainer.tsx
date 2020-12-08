import React, {FC, Fragment} from "react";
import {Grid} from "@material-ui/core";
import {AdvrtParameter} from './AdvrtParameter';
import {useStyles} from './useStyles';
import {dataPrepare} from "@src/components/advertisement/create_advrt/advrt_form/advrt_params/helpers";


export const AdvrtParamsContainer: FC<any> = (props) => {
    const {
        isPreview,
        createAdvrt,
        values,
    } = props;

    const {subCategory} = createAdvrt;

    const {adParams} = values;

    const data = isPreview ? adParams : dataPrepare(subCategory.data, adParams);

    const classes = useStyles({isPreview});
    return (
        <Grid
            container
            spacing={2}
            className={classes.root}
        >
            {Object.keys(data).map(key => (
                <Fragment key={key}>
                    <AdvrtParameter {...props} keyName={key} data={data[key]}/>
                </Fragment>
            ))}
        </Grid>
    )
}