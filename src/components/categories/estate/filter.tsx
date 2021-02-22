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
    const [filter, setFilter] = useState({manufacturer_id: null})
    const [data, setData] = useState(null)
    const [show, setShow] = useState(false)

    const car_marks = data?.default_param?.manufacturer
    const car_models = car_marks?.find(function(model){return model?.id === filter?.manufacturer_id})?.models || []
    const car_years = data?.default_param?.years
    const car_transmissions = data?.default_param?.transmission
    const body = data?.default_param?.body
    const engine_type = data?.default_param?.engine_type
    const drive = data?.default_param?.drive
    const colors = data?.default_param?.colors
    const engine_capacity = [{id: 1, name: '1,5'}, {id: 2, name: '1,6'}, {id: 3, name: '1,8'}]
    const condition = [{id: 1, name: 'новое'}, {id: 1, name: 'Средний'}, {id: 1, name: 'кириб йотибди'}]

    const handleCallback = (name, value) =>{
        setFilter({
            ...filter,
            [name]: value
        })
    }

    useEffect(() => {
        userAPI.getDataForCreatePost(Number(categoryID), undefined, undefined, lang).then(
                result => setData(result)
            )
    },[lang])

    const handleSubmit = (event) => {
        event.preventDefault()
    }
    return (
        <form onSubmit={handleSubmit}>
        <Grid container spacing={3}>
            <Grid item sm={4}>
                <Dropdown
                    title="Марка"
                    name="manufacturer_id"
                    parentCallback={handleCallback}
                    data={car_marks}
                    disabled={false}
                />
            </Grid>
            <Grid item sm={4}>
                <Dropdown
                    title="Модель"
                    name="model_id"
                    parentCallback={handleCallback}
                    disabled={car_models.length === 0}
                    data={car_models}
                />
            </Grid>
            <Grid item sm={4}>
                <FromTo
                    parentCallback={handleCallback}
                    disabled={false}
                    title="Стоимость"
                    name="price_range"
                />
            </Grid>
            <Grid item sm={4}>
                <FromToDropdown
                    title="Год выпуска"
                    parentCallback={handleCallback}
                    disabled={false}
                    data={car_years}
                />
            </Grid>
            <Grid item sm={4}>
                <FromTo
                    parentCallback={handleCallback}
                    disabled={false}
                    title="Пробег"
                    name="distance_range"
                />
            </Grid>
            <Grid></Grid>
            <Grid item sm={12}>
                <Checkbox
                    name='engine_type'
                    title='Тип двигателя'
                    parentCallback={handleCallback}
                    data={car_transmissions}
                />
            </Grid>
            {show && <>
                <Grid item sm={12}>
                    Show something
                </Grid>
            </>}
            <Grid item sm={8} style={{display: "flex", alignItems: "center"}}>
                <div onClick={() => setShow(!show)}>
                    {show ? <span>Основные фильтры</span> : <span>Все фильтры</span>}
                </div>
            </Grid>
            <Grid item sm={4}>
                <div style={{display: 'flex', justifyContent: 'space-around'}}>
                    <Button type="submit" variant="contained" color="primary" style={{height: 41}}>
                        Применить
                    </Button>
                    <Button variant="contained" style={{height: 41}}>
                        Сбросить
                    </Button>
                </div>
            </Grid>
        </Grid>
        </form>
    )
}

export default Filter
