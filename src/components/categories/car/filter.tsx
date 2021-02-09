import React, {FC, useState, useEffect} from 'react'
import { useRouter } from 'next/router'
import {userAPI} from "@src/api/api";
import {Button} from "@material-ui/core";
import {i18n} from "@root/i18n";
import Grid from '@material-ui/core/Grid';
import Dropdown from '@src/components/elements/fields/Dropdown'
import {SearchForm} from '@src/components/elements/fields/SearchForm';
import FromToDropdown from "@src/components/elements/fields/FromToDropdown";
import FromTo from '@src/components/elements/fields/FromToTextField'
import Checkbox from '@src/components/elements/fields/Checkbox'

const Filter: FC = () => {
    const lang = i18n.language;
    const router = useRouter()
    const {categoryID} = router.query
    const [filter, setFilter] = useState({mark: null})
    const [data, setData] = useState(null)
    const [show, setShow] = useState(false)
    const car_mark = data?.default_param?.manufacturer || []
    const car_model = car_mark?.find(function(model){return model?.id === filter?.mark})?.models || []
    console.warn("data", data)
    console.warn("filter", filter, car_model)

    const  handleCallback = (name, value) =>{
        setFilter({
            ...filter,
            [name]: value
        })
    }

    useEffect(() => {
        userAPI.getDataForCreatePost(Number(categoryID), 1, undefined, lang).then(
                result => setData(result)
            )
    },[lang])

    return (
        <Grid container spacing={3}>
            <Grid item sm={12}>
                <SearchForm />
            </Grid>
            <Grid item sm={4}>
                <Dropdown
                    title="Марка"
                    name="mark"
                    parentCallback={handleCallback}
                    data={car_mark}
                    disabled={false}
                />
            </Grid>
            <Grid item sm={4}>
                <Dropdown
                    title="Модель"
                    name="model"
                    parentCallback={handleCallback}
                    disabled={car_model.length === 0}
                    data={car_model}
                />
            </Grid>
            <Grid item sm={4}>
                <Dropdown
                    title="Позиция"
                    name="position"
                    parentCallback={handleCallback}
                    disabled={true}
                    data={[
                        {
                            id: 1,
                            name: 'something'
                        }
                    ]}
                />
            </Grid>
            <Grid item sm={4}>
                <FromTo />
            </Grid>
            <Grid item sm={4}>
                <Dropdown
                    title="Год выпуска"
                    name="yearEstablished"
                    parentCallback={handleCallback}
                    disabled={false}
                    data={[
                        {
                            id: 1,
                            name: 'something'
                        }
                    ]}
                />
            </Grid>
            <Grid item sm={4}>
                <Dropdown
                    title="Пробег От и До"
                    name="fromToDistance"
                    parentCallback={handleCallback}
                    disabled={false}
                    data={[
                        {
                            id: 1,
                            name: 'something'
                        }
                    ]}
                />
            </Grid>
            <Grid item sm={12}>
                <Checkbox parentCallback={handleCallback} />
            </Grid>
            <Grid item sm={4}>
                <Dropdown
                    title="Цена От и До"
                    name="fromToPrice"
                    parentCallback={handleCallback}
                    disabled={false}
                    data={[
                        {
                            id: 1,
                            name: 'something'
                        }
                    ]}
                />
            </Grid>
            <Grid item sm={4}>
                <div style={{display: 'flex', justifyContent: 'space-around', marginTop: 17}}>
                    <Button variant="contained" color="primary" style={{height: 41}}>
                        Применить
                    </Button>
                    <Button variant="contained" style={{height: 41}}>
                        Сбросить
                    </Button>
                </div>
            </Grid>
            {show && <>
            <Grid item sm={6}>
                <Dropdown
                    title="Пробег От и До"
                    name="fromToDistance"
                    parentCallback={handleCallback}
                    disabled={false}
                    data={[
                        {
                            id: 1,
                            name: 'something'
                        }
                    ]}
                />
            </Grid>
            <Grid item sm={6}>
                <Dropdown
                    title="Пробег От и До"
                    name="fromToDistance"
                    parentCallback={handleCallback}
                    disabled={false}
                    data={[
                        {
                            id: 1,
                            name: 'something'
                        }
                    ]}
                />
            </Grid>
            </>}
            <Grid item sm={12}>
                <div onClick={() => setShow(!show)}>
                    {show ? <span>Основные фильтры</span> : <span>Все фильтры</span>}
                </div>
            </Grid>
        </Grid>
    )
}

export default Filter
