import React, {FC, useState} from 'react'
import Dropdown from '../../elements/fields/Dropdown'
import FromTo from '../../elements/fields/FromTo'
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";

const Filter: FC = () => {
    const [mark, setMark] = useState(undefined)

    const  handleCallback = (childData) =>{
        setMark(childData)
    }
    console.warn("mark", mark)
    return (
        <Grid container spacing={3}>
            <Grid item sm={12}>
                <Dropdown title="Марка" parentCallback={handleCallback}/>
            </Grid>
            <Grid item sm={3}>
                <Dropdown title="Модель" />
            </Grid>
            <Grid item sm={3}>
                <Dropdown title="Позиция" />
            </Grid>
            <Grid item sm={3}>
                <FromTo />
            </Grid>
            <Grid item sm={3}>
                <Dropdown title="Год выпуска" />
            </Grid>
            <Grid item sm={4}>
                <Dropdown title="Пробег От и До" />
            </Grid>
            <Grid item sm={4}>
                <Dropdown title="Пробег От и До" />
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
