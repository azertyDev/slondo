import React, {FC} from "react";
import {Grid, TextField, Typography} from "@material-ui/core";
import {isRequired} from "@root/validation_schemas/createAdvrtSchema";
import {CustomCheckbox} from "@src/components/elements/custom_checkbox/CustomCheckbox";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {autoSelectKeys, textFieldKeys} from "../AdvrtFormContainer";
import {useStyles} from "./useStyles";


export const AdvrtParameter: FC<any> = (props) => {
    const {
        keyName,
        data,
        errors,
        onBlur,
        values,
        touched,
        isPreview,
        handleMenuItem,
        handleListItem,
        handleInput,
        handleParamsCheckbox,
    } = props;

    const {adParams} = values;

    const adParamsError = errors.adParams;
    const adParamsTouched = touched.adParams;

    const isOptions = keyName === 'safety'
        || keyName === 'multimedia'
        || keyName === 'assistant'
        || keyName === 'exterior'
        || keyName === 'car_climate'
        || keyName === 'airbags';

    const isSpecialRows = keyName === 'body' || keyName === 'colors' || isOptions;

    const isNotEmptyArray = Array.isArray(data) && data.length !== 0;
    const isTextFieldKey = textFieldKeys.some(k => k === keyName);

    let fields;

    const classes = useStyles({isPreview});
    if (isSpecialRows && isNotEmptyArray) {
        fields = <>
            <Typography variant="subtitle1">
                <strong>
                    {keyName}
                </strong>
                {
                    isRequired(keyName)
                    && <span className='error-text'>*</span>
                }
                {
                    adParamsError
                    && adParamsTouched
                    && adParamsError[keyName]
                    && adParamsTouched[keyName]
                    && adParamsTouched[keyName].id
                    && <span className='error-text'> {adParamsError[keyName].id}</span>
                }
            </Typography>
            <div className='row-list'>
                {data.map(item => (
                    <div key={item.id}>
                        {
                            keyName === 'body'
                                ? <div
                                    onClick={!isPreview ? handleListItem(keyName, item) : null}
                                    className={
                                        adParams[keyName]
                                        && adParams[keyName].id === item.id ? classes.selected : ''
                                    }
                                >
                                    {/*<img src={item.icon.url} alt={item.name}/>*/}
                                    <Typography>{item.name}</Typography>
                                </div>
                                : <>
                                    {keyName === 'colors'
                                        ? <div
                                            onClick={!isPreview ? handleListItem(keyName, item) : null}
                                            className={adParams[keyName] && adParams[keyName].id === item.id ? classes.selected : ''}
                                            style={{
                                                width: '50px',
                                                height: '50px',
                                                backgroundColor: `${item.hex_color_code}`,
                                            }}
                                        />
                                        : <div style={{display: 'flex', alignItems: 'center'}}>
                                            <CustomCheckbox
                                                disabled={isPreview}
                                                checked={
                                                    adParams[keyName] && adParams[keyName].some(val => val.id === item.id)
                                                }
                                                onChange={handleParamsCheckbox(keyName, item)}
                                            />
                                            <Typography>{item.name}</Typography>
                                        </div>}
                                </>
                        }
                    </div>
                ))}
            </div>
        </>;
    } else if (isNotEmptyArray) {
        const list = autoSelectKeys.some(k => k === keyName)
            ? data
            : [{id: null, name: 'Не выбрано'}, ...data];

        const newKey = isTextFieldKey ? `${keyName}_value` : keyName;

        fields = <>
            <Typography variant="subtitle1">
                <strong>
                    {newKey}
                    {
                        isRequired(newKey)
                        && <span className='error-text'>*</span>
                    }
                </strong>
                {
                    adParamsError
                    && adParamsTouched
                    && adParamsError[newKey]
                    && adParamsTouched[newKey]
                    && <span className='error-text'> {adParamsError[newKey].id}</span>
                }
            </Typography>
            <Grid container>
                {isTextFieldKey && (
                    <Grid item xs={9}>
                        <TextField
                            fullWidth
                            variant='outlined'
                            value={adParams[newKey] ?? ''}
                            onChange={handleInput(newKey)}
                            className={
                                adParamsError
                                && adParamsTouched
                                && adParamsError[newKey]
                                && adParamsTouched[newKey] ? 'error-border' : ''
                            }
                        />
                    </Grid>
                )}
                <Grid item xs={isTextFieldKey ? 3 : 12}>
                    <CustomMenu
                        name={keyName}
                        onBlur={onBlur}
                        onClick={handleMenuItem(keyName)}
                        className={
                            adParamsError
                            && adParamsTouched
                            && adParamsError[keyName]
                            && adParamsTouched[keyName] ? 'error-border' : ''
                        }
                        valueName={
                            adParams[keyName]
                                ? adParams[keyName].name
                                : list[0].name
                        }
                        items={list}
                    />
                </Grid>
            </Grid>
        </>;
    } else if (!Array.isArray(data)) {
        fields = <>
            <Typography variant="subtitle1">
                {keyName}
                {
                    isRequired(keyName)
                    && !isPreview
                    && <span className='error-text'>*</span>
                }
                {
                    adParamsError
                    && adParamsTouched
                    && adParamsError[keyName]
                    && adParamsTouched[keyName]
                    && <span className='error-text'> {adParamsError[keyName]}</span>
                }
            </Typography>
            {isPreview
                ? <Typography>
                    {typeof adParams[keyName] === 'string'
                        ? adParams[keyName]
                        : adParams[keyName].name}
                </Typography>
                : <TextField
                    fullWidth
                    name={keyName}
                    variant='outlined'
                    value={adParams[keyName] ?? ''}
                    onChange={handleInput(keyName)}
                    className={
                        adParamsError
                        && adParamsTouched
                        && adParamsError[keyName]
                        && adParamsTouched[keyName] ? 'error-border' : ''
                    }
                />}
        </>
    }
    fields = fields
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