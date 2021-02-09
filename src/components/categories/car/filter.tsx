import React, {FC, useState, useCallback} from 'react'
import Dropdown from '../../elements/fields/Dropdown'
import FromTo from '../../elements/fields/FromTo'
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";

const Filter: FC = () => {
    const [filter, setFilter] = useState({})

    const handleCallback = useCallback(
        (name, value) =>{
            setFilter({
                ...filter,
                [name]: value
            })
        },
        [name, value],
    );
    // const  handleCallback = (name, value) =>{
    //     setFilter({
    //         ...filter,
    //         [name]: value
    //     })
    // }
    console.warn("filter", filter)
    return (
        <Grid container spacing={3}>
            <Grid item sm={12}>
                <Dropdown title="Марка" name="mark" parentCallback={handleCallback}/>
            </Grid>
            <Grid item sm={3}>
                <Dropdown title="Модель" name="model" parentCallback={handleCallback} />
            </Grid>
            <Grid item sm={3}>
                <Dropdown title="Позиция" name="position" parentCallback={handleCallback} />
            </Grid>
            <Grid item sm={3}>
                <FromTo />
            </Grid>
            <Grid item sm={3}>
                <Dropdown title="Год выпуска" name="yearEstablished" parentCallback={handleCallback} />
            </Grid>
            <Grid item sm={4}>
                <Dropdown title="Пробег От и До" name="fromToDistance" parentCallback={handleCallback} />
            </Grid>
            <Grid item sm={4}>
                <Dropdown title="Цена От и До" name="fromToPrice" parentCallback={handleCallback} />
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
        </Grid>
    )
}

export default Filter
