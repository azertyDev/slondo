import React, {FC, Fragment} from "react";
import {Grid} from "@material-ui/core";
import {Params} from './Params';


export const PostParams: FC<any> = (props) => {
    const {
        t,
        isPreview,
        paramsByMark,
        errors,
        onBlur,
        touched,
        handleMenuItem,
        handleListItem,
        handleInput,
        handleParamsCheckbox,
        dataForCrtPost,
    } = props;

    const data = isPreview ? paramsByMark : dataForCrtPost.data;

    return (
        <div>
            <Grid
                container
                spacing={2}
            >
                {Object.keys(data).map(key =>
                    <Fragment key={key}>
                        <Params
                            t={t}
                            keyName={key}
                            data={data[key]}
                            paramsByMark={paramsByMark}
                            isPreview={isPreview}
                            errors={errors}
                            onBlur={onBlur}
                            touched={touched}
                            handleMenuItem={handleMenuItem}
                            handleListItem={handleListItem}
                            handleInput={handleInput}
                            handleParamsCheckbox={handleParamsCheckbox}
                        />
                    </Fragment>
                )}
            </Grid>
        </div>
    )
}