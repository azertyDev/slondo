import React, {FC, Fragment} from "react";
import {Grid, Typography} from "@material-ui/core";
import {CustomMenu} from "@src/components/elements/custom_menu/CustomMenu";
import {ItemsType} from "@root/interfaces/CustomMenuProps";
import {useStyles} from './useStyles';
import {CustomCheckbox} from "@src/components/elements/custom_checkbox/CustomCheckbox";
import {CustomFormikField} from "@src/components/elements/custom_formik_field/CustomFormikField";


export const AdvrtSettingsBlock: FC<any> = (props) => {
    const {
        isPreview,
        createAdvrt,
        values,
        onBlur,
        handleMenuItem,
        handleListItem,
        handleParamsCheckbox
    } = props;

    const data = isPreview ? values : createAdvrt.data;

    const classes = useStyles({isPreview});
    return (
        <Grid
            container
            spacing={1}
            className={classes.root}
        >
            {
                Object.keys(data).map(key => {
                    return (
                        <Fragment key={key}>
                            {
                                !isPreview && values[key]
                                    ? (
                                        <>
                                            {listGenerator(data[key], key)}
                                            {
                                                Object.keys(values[key]).map(innerKey => {
                                                    if (Array.isArray(values[key][innerKey]) && values[key][innerKey].length) {
                                                        return listGenerator(values[key][innerKey], innerKey)
                                                    }
                                                })
                                            }
                                        </>
                                    )
                                    : listGenerator(data[key], key)
                            }
                            {
                                key === 'body' && (
                                    <>
                                        <Grid
                                            item
                                            container
                                            xs={12}
                                            sm={6}
                                            className={classes.gridItem}
                                        >
                                            <Typography variant="subtitle1">year</Typography>
                                            {
                                                isPreview
                                                    ? <Typography>{values.year}</Typography>
                                                    : <CustomFormikField
                                                        name='year'
                                                        type='number'
                                                        placeholder='Год выпуска'
                                                        value={values.year ?? ''}
                                                    />
                                            }
                                        </Grid>
                                        <Grid
                                            item
                                            container
                                            xs={12}
                                            sm={6}
                                            className={classes.gridItem}
                                        >
                                            <Typography variant="subtitle1">mileage</Typography>
                                            {
                                                isPreview
                                                    ? <Typography>{values.mileage}</Typography>
                                                    : <CustomFormikField
                                                        name='mileage'
                                                        type='number'
                                                        placeholder='Пробег'
                                                        value={values.mileage ?? ''}
                                                    />
                                            }
                                        </Grid>
                                    </>
                                )
                            }
                        </Fragment>
                    )
                })
            }
        </Grid>
    )

    function listGenerator(data: ItemsType | ItemsType[], key: string) {
        let fields;

        const isExcludedRows = key !== 'id'
            && key !== 'name'
            && key !== 'title'
            && key !== 'adsParams'
            && key !== 'adType'
            && key !== 'price'
            && key !== 'safe_deal'
            && key !== 'exchange'
            && key !== 'delivery'
            && key !== 'location'
            && key !== 'currency'
            && key !== 'phone'
            && key !== 'description'
            && key !== 'files';

        const isOptions = key === 'safety'
            || key === 'multimedia'
            || key === 'assistant'
            || key === 'exterior';

        const isSpecialRows = key === 'body'
            || key === 'colors'
            || isOptions;

        if (isExcludedRows && data) {
            if (isSpecialRows && Array.isArray(data) && data.length) {
                fields = <div className='row-list'>
                    {
                        data.map(item => (
                            <div
                                key={item.id}
                                onClick={!isPreview ? handleListItem(key, item) : null}
                            >
                                {
                                    key === 'body'
                                        ? (
                                            <div
                                                className={values[key] && values[key].id === item.id ? classes.selected : ''}
                                            >
                                                <img src={item.icon.url} alt={item.name}/>
                                                <Typography>{item.name}</Typography>
                                            </div>
                                        )
                                        : key === 'colors'
                                        ? (
                                            <div
                                                className={values[key] && values[key].id === item.id ? classes.selected : ''}
                                                style={{
                                                    width: '50px',
                                                    height: '50px',
                                                    backgroundColor: `${item.hex_color_code}`,
                                                }}
                                            />
                                        )
                                        : (
                                            <div style={{display: 'flex', alignItems: 'center'}}>
                                                <CustomCheckbox
                                                    disabled={isPreview}
                                                    checked={
                                                        values[key]
                                                        && values[key].some(val => val.id === item.id)
                                                    }
                                                    onChange={
                                                        handleParamsCheckbox(key, {id: item.id, name: item.name})
                                                    }
                                                />
                                                <Typography>{item.name}</Typography>
                                            </div>
                                        )
                                }
                            </div>
                        ))
                    }
                </div>
            } else {
                if (Array.isArray(data)) {
                    data = [{id: null, name: 'Не выбрано'}, ...data];
                    fields = <CustomMenu
                        valueName={values[key] ? values[key].name : data[0].name}
                        items={data}
                        onBlur={onBlur}
                        onClick={handleMenuItem(key)}
                    />;
                } else {
                    fields = key === 'body'
                        ? <Typography>{data.name}</Typography>
                        : key === 'colors'
                            ? <div
                                style={{
                                    width: '50px',
                                    height: '50px',
                                    backgroundColor: `${data.hex_color_code}`
                                }}
                            />
                            : <Typography>{data.name}</Typography>
                }
            }
            return (
                <Grid
                    item
                    container
                    className={classes.gridItem}
                    key={key}
                    xs={12}
                    sm={isSpecialRows && !isPreview || isOptions ? 12 : 6}
                >
                    <Typography variant="subtitle1">{key}</Typography>
                    {fields}
                </Grid>
            )
        }
    }
};