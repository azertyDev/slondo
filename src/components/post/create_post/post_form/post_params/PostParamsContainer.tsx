import React, {FC, Fragment} from "react";
import {Grid} from "@material-ui/core";
import {PostParams} from './PostParams';
import {useStyles} from './useStyles';


export const PostParamsContainer: FC<any> = (props) => {
    const {
        isPreview,
        dataForCrtPost,
        paramsByMark,
    } = props;

    const classes = useStyles({isPreview});
    return (
        <Grid
            container
            spacing={2}
            className={classes.root}
        >
            {Object.keys(dataForCrtPost).map(key => (
                <Fragment key={key}>
                    <PostParams
                        t={props.t}
                        keyName={key}
                        data={dataForCrtPost[key]}
                        paramsByMark={paramsByMark}
                        isPreview={isPreview}
                        errors={props.errors}
                        onBlur={props.onBlur}
                        touched={props.touched}
                        handleMenuItem={props.handleMenuItem}
                        handleListItem={props.handleListItem}
                        handleInput={props.handleInput}
                        handleParamsCheckbox={props.handleCheckbox}
                    />
                </Fragment>
            ))}
        </Grid>
    )
}