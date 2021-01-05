import React, {FC, Fragment} from "react";
import {Grid} from "@material-ui/core";
import {AncmntParameter} from './AncmntParameter';
import {useStyles} from './useStyles';
import {prepareCreateAncmnt} from "@src/helpers";


export const AncmntParamsContainer: FC<any> = (props) => {
    const {
        isPreview,
        createAncmnt,
        values,
    } = props;

    const {adParams} = values;

    const data = isPreview ? adParams : prepareCreateAncmnt(createAncmnt.subCategory.data, adParams);

    const classes = useStyles({isPreview});
    return (
        <Grid
            container
            spacing={2}
            className={classes.root}
        >
            {Object.keys(data).map(key => (
                <Fragment key={key}>
                    <AncmntParameter {...props} keyName={key} data={data[key]}/>
                </Fragment>
            ))}
        </Grid>
    )
}