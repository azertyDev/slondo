import React, {FC} from "react";
import {Grid, TextField, Typography} from "@material-ui/core";
import {isRequired} from "@root/validation_schemas/createPostSchema";
import {CustomCheckbox} from "@src/components/elements/custom_checkbox/CustomCheckbox";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {fieldKeysWithTxt} from "@src/helpers";
import {useStyles} from "./useStyles";


export const PostParams: FC<any> = (props) => {
    const {
        t,
        keyName,
        data,
        errors,
        onBlur,
        paramsByMark,
        touched,
        isPreview,
        handleMenuItem,
        handleListItem,
        handleInput,
        handleParamsCheckbox,
    } = props;

    const postParamsError = errors.postParams;
    const postParamsTouched = touched.postParams;

    const isOptions = keyName === 'safety'
        || keyName === 'multimedia'
        || keyName === 'assistant'
        || keyName === 'exterior'
        || keyName === 'car_climate'
        || keyName === 'airbags';

    const isSpecialRows = keyName === 'body' || keyName === 'color' || isOptions;

    const isArray = Array.isArray(data);
    const isFieldKeyWithTxt = fieldKeysWithTxt.some(k => k === keyName);

    let fields;

    const classes = useStyles({isPreview});
    if (isSpecialRows && isArray) {
        fields = <>
            <Typography variant="subtitle1">
                <strong>
                    {t(keyName)}
                </strong>
                {isRequired(keyName)
                && <span className='error-text'>*</span>}
                {postParamsError
                && postParamsTouched
                && postParamsError[keyName]
                && postParamsTouched[keyName]
                && postParamsTouched[keyName].id
                && <span className='error-text'> {postParamsError[keyName].id}</span>}
            </Typography>
            <div className='row-list'>
                {data.map(item => (
                    <div key={item.id}>
                        {keyName === 'body'
                            ? <div
                                onClick={!isPreview ? handleListItem(keyName, item) : null}
                                className={
                                    paramsByMark[keyName]
                                    && paramsByMark[keyName].id === item.id ? classes.selected : ''}
                            >
                                {/*<img src={item.icon.url} alt={item.name}/>*/}
                                <Typography>{item.name}</Typography>
                            </div>
                            : keyName === 'color'
                                ? <div
                                    onClick={!isPreview ? handleListItem(keyName, item) : null}
                                    className={paramsByMark[keyName] && paramsByMark[keyName].id === item.id ? classes.selected : ''}
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        backgroundColor: `${item.hex_color_code}`,
                                    }}
                                />
                                : <div style={{display: 'flex', alignItems: 'center'}}>
                                    <CustomCheckbox
                                        onChange={handleParamsCheckbox(keyName, item)}
                                        checked={
                                            paramsByMark[keyName]
                                            && paramsByMark[keyName].some(val => val.id === item.id)
                                        }
                                    />
                                    <Typography>{item.name}</Typography>
                                </div>}
                    </div>
                ))}
            </div>
        </>;
    } else if (isArray) {
        fields = <>
            <Typography variant="subtitle1">
                <strong>
                    {t(keyName)}
                    {isRequired(keyName)
                    && <span className='error-text'>*</span>}
                </strong>
                {postParamsError
                && postParamsTouched
                && postParamsError[keyName]
                && postParamsTouched[keyName]
                && <span className='error-text'> {postParamsError[keyName].id}</span>}
            </Typography>
            <Grid container>
                {isFieldKeyWithTxt && (
                    <Grid item xs={9}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            value={
                                paramsByMark[keyName]
                                    ? isFieldKeyWithTxt ? paramsByMark[keyName].txt : ''
                                    : ''}
                            name={keyName}
                            onChange={handleInput}
                            className={
                                postParamsError
                                && postParamsTouched
                                && postParamsError[keyName]
                                && postParamsTouched[keyName] ? 'error-border' : ''
                            }
                        />
                    </Grid>
                )}
                <Grid item xs={isFieldKeyWithTxt ? 3 : 12}>
                    {isPreview
                        ? <Typography>
                            {paramsByMark[keyName].name}
                        </Typography>
                        : <CustomMenu
                            name={keyName}
                            onBlur={onBlur}
                            onClick={handleMenuItem(keyName)}
                            className={
                                postParamsError
                                && postParamsTouched
                                && postParamsError[keyName]
                                && postParamsTouched[keyName] ? 'error-border' : ''
                            }
                            valueName={paramsByMark[keyName] ? paramsByMark[keyName].name : ''}
                            items={data}
                        />}
                </Grid>
            </Grid>
        </>;
    } else if (!Array.isArray(data)) {
        fields = <>
            <Typography variant="subtitle1">
                {t(keyName)}
                {isRequired(keyName)
                && !isPreview
                && <span className='error-text'>*</span>}
                {postParamsError
                && postParamsTouched
                && postParamsError[keyName]
                && postParamsTouched[keyName]
                && <span className='error-text'> {postParamsError[keyName]}</span>}
            </Typography>
            {typeof data === 'boolean'
                ? <CustomCheckbox
                    disabled={isPreview}
                    checked={!!paramsByMark[keyName]}
                    onChange={handleParamsCheckbox(keyName)}
                />
                : isPreview
                    ? <Typography>
                        {typeof paramsByMark[keyName] === 'string'
                            ? paramsByMark[keyName]
                            : paramsByMark[keyName].name}
                    </Typography>
                    : <TextField
                        fullWidth
                        name={keyName}
                        variant='outlined'
                        value={paramsByMark[keyName] ?? ''}
                        onChange={handleInput}
                        className={
                            postParamsError
                            && postParamsTouched
                            && postParamsError[keyName]
                            && postParamsTouched[keyName] ? 'error-border' : ''
                        }
                    />}
        </>
    }
    fields = !!fields
        ? <Grid
            item
            container
            xs={12}
            className={classes.gridItem}
            sm={isSpecialRows && !isPreview || isOptions ? 12 : 6}
        >
            {fields}
        </Grid>
        : <></>

    return fields;
}