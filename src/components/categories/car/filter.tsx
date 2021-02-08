import React, {FC} from 'react'
import Dropdown from '../../elements/fields/Dropdown'
import FromTo from '../../elements/fields/FromTo'
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";

const Filter: FC = () => {

    return (
        <Grid container spacing={3}>
            <Grid item sm={12}>
                <Dropdown title="Марка" />
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
                <div>
                    <Button variant="contained" color="primary">
                        Применить
                    </Button>
                    <Button variant="contained">
                        Сбросить
                    </Button>
                </div>
            </Grid>
        </Grid>
    )
}

export default Filter
