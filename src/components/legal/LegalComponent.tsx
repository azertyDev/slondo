import React, {FC, Fragment} from 'react';
import {FormControl, Grid, InputAdornment, OutlinedInput, TextField} from '@material-ui/core';
import {useStyles} from './useStyles';
import { Search_icon } from '@src/components/elements/icons'


export const LegalComponent: FC<any> = ({ docs }) => {
    const classes = useStyles()
    return (
        <Grid item xs={9} className={classes.root}>
            {/*<TextField*/}
            {/*    className={classes.searchInput}*/}
            {/*    id="input-with-icon-textfield"*/}
            {/*    fullWidth*/}
            {/*    InputProps={{*/}
            {/*        startAdornment: (*/}
            {/*            <InputAdornment position="start">*/}
            {/*                <Search_icon />*/}
            {/*            </InputAdornment>*/}
            {/*        ),*/}
            {/*    }}*/}
            {/*    variant="outlined"*/}
            {/*    placeholder="Поиск"*/}
            {/*/>*/}
            <FormControl fullWidth className={classes.searchInput} variant="outlined">
                <OutlinedInput
                    id="outlined-adornment-amount"
                    placeholder="Поиск"
                    startAdornment={
                        <InputAdornment position="start">
                            <Search_icon />
                        </InputAdornment>
                    }
                />
            </FormControl>
            <div>
                {docs.preface}
                {
                    docs.paragraphs.map((doc) => {
                        return (
                            <div key={doc.id}>
                                {doc.name}
                                <ul className={classes.list}>
                                    {doc.terms.map(term => term && <Fragment key={term.id}>{term.desc}</Fragment>)}
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </Grid>
    )
}
