import React, {FC} from "react";
import {Grid, Typography} from "@material-ui/core";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";
import {useStyles} from './useStyles';


export const Header: FC<any> = (props) => {
    const {
        postType,
        category,
        secCtgr,
        isPreview,
        defaultParams,
        errors,
        touched,
        handleInput,
    } = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4">
                Новое объявление - <span>{category.name}</span>
            </Typography>
            <Grid container justify="space-between" spacing={2}>
                <Grid
                    container
                    item
                    xs={12}
                    spacing={2}
                    justify="space-between"
                >
                    <Grid
                        item
                        xs={12}
                        container
                    >
                        <div>
                            <Typography variant="subtitle1">
                                <strong>
                                    Тип - {`${postType.name}`}
                                </strong>
                            </Typography>
                        </div>
                    </Grid>
                    <Grid
                        item
                        xs={12}
                        container
                    >
                        <Typography variant="subtitle1">
                            <strong>
                                Категория - {`${category.name} `}
                            </strong>
                            {!!secCtgr.name
                            && <strong>
                                - {secCtgr.name}
                            </strong>}
                            {!!secCtgr.type.name
                            && <strong>
                                - {secCtgr.type.name}
                            </strong>}
                        </Typography>
                    </Grid>
                    <Grid
                        item
                        container
                        xs={12}
                        alignItems="center"
                    >
                        <Typography className='title' variant="subtitle1">
                            <strong>
                                Заголовок объявления:
                                {!isPreview && <span className='error-text'>*</span>}
                            </strong>
                            {errors.title
                            && touched.title
                            && <span className='error-text'> {errors.title}</span>}
                        </Typography>
                        {isPreview
                            ? <Typography>{defaultParams.title}</Typography>
                            : <CustomFormikField
                                className={
                                    errors.title && touched.title
                                        ? 'error-border'
                                        : ''
                                }
                                name='title'
                                onChange={handleInput}
                                placeholder="Пример: Samsung S9 black 64 Gb"
                                value={defaultParams.title}
                            />}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
};