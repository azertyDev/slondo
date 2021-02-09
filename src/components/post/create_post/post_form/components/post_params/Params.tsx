import React, {FC} from "react";
import {Checkbox, Grid, TextField, Typography} from "@material-ui/core";
import {isRequired} from "@root/validation_schemas/createPostSchema";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {useStyles} from "./useStyles";
import {fieldKeysWithTxt, optionKeys} from "@root/src/common_data/form_fields_list";


export const Params: FC<any> = (props) => {
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

    const isNoEmptyArray = Array.isArray(data) && data.length;
    const isOptions = optionKeys.some(k => k === keyName);
    const isSpecialRows = keyName === 'body' || keyName === 'colors' || isOptions;
    const isFieldKeyWithTxt = fieldKeysWithTxt.some(k => k === keyName);
    const isIdValue = /_id$/.test(keyName);

    const classes = useStyles({isPreview});
    return <Grid
        item
        container
        xs={12}
        className={classes.gridItem}
        sm={isSpecialRows && !isPreview || isOptions ? 12 : 6}
    >
        {isSpecialRows && isNoEmptyArray
            ? (
                <>
                    <Typography variant="subtitle1">
                        <strong>
                            {t(keyName)}:
                        </strong>
                        {isRequired(keyName) && <span className='error-text'>*</span>}
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
                                {
                                    keyName === 'body'
                                        ? <div
                                            onClick={!isPreview ? handleListItem(keyName, item) : null}
                                            className={
                                                paramsByMark[keyName]
                                                && paramsByMark[keyName].id === item.id ? classes.selected : ''
                                            }
                                        >
                                            {/*<img src={item.icon.url} alt={item.name}/>*/}
                                            <Typography>{item.name}</Typography>
                                        </div>
                                        : keyName === 'colors'
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
                                            <Checkbox
                                                color='primary'
                                                disabled={isPreview}
                                                onChange={handleParamsCheckbox(keyName, item)}
                                                checked={
                                                    !!paramsByMark[keyName]
                                                    && paramsByMark[keyName].some(({id}) => id === item.id)
                                                }
                                            />
                                            <Typography>{item.name}</Typography>
                                        </div>
                                }
                            </div>
                        ))}
                    </div>
                </>
            )
            : (isNoEmptyArray
                    ? <>
                        <Typography variant="subtitle1">
                            <strong>
                                {t(keyName)}
                                {isRequired(keyName) && <span className='error-text'>*</span>}
                            </strong>
                            {postParamsError
                            && postParamsTouched
                            && postParamsError[keyName]
                            && postParamsTouched[keyName]
                            && <span className='error-text'> {postParamsError[keyName].id}</span>}
                        </Typography>
                        <Grid container>
                            {isFieldKeyWithTxt
                            && <Grid item xs={9}>
                                <TextField
                                    fullWidth
                                    variant='outlined'
                                    value={
                                        paramsByMark[keyName]
                                            ? isFieldKeyWithTxt ? paramsByMark[keyName].txt : ''
                                            : ''
                                    }
                                    name={keyName}
                                    onChange={handleInput}
                                    className={
                                        postParamsError
                                        && postParamsTouched
                                        && postParamsError[keyName]
                                        && postParamsTouched[keyName] ? 'error-border' : ''
                                    }
                                />
                            </Grid>}
                            <Grid item xs={isFieldKeyWithTxt ? 3 : 6}>
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
                                    />
                                }
                            </Grid>
                        </Grid>
                    </>
                    : !Array.isArray(data)
                    && !isIdValue
                    && <>
                        <Typography variant="subtitle1">
                            <strong>
                                {t(keyName)}:
                            </strong>
                            {isRequired(keyName)
                            && !isPreview
                            && <span className='error-text'>*</span>}
                            {
                                postParamsError
                                && postParamsTouched
                                && postParamsError[keyName]
                                && postParamsTouched[keyName]
                                && <span className='error-text'> {postParamsError[keyName]}</span>
                            }
                        </Typography>
                        {typeof data === 'boolean'
                            ? <Checkbox
                                color='primary'
                                disabled={isPreview}
                                checked={!!paramsByMark[keyName]}
                                onChange={handleParamsCheckbox(keyName)}
                            />
                            : (isPreview
                                    ? <>
                                        {keyName === 'colors'
                                        && <div
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: `${paramsByMark[keyName].hex_color_code}`,
                                            }}
                                        />}
                                        <Typography>
                                            {typeof paramsByMark[keyName] === 'string'
                                                ? paramsByMark[keyName]
                                                : paramsByMark[keyName].name}
                                        </Typography>
                                    </>
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
                                            && postParamsTouched[keyName]
                                                ? 'error-border'
                                                : ''
                                        }
                                    />
                            )
                        }
                    </>
            )
        }
    </Grid>
}