import React, { FC, Fragment } from 'react'
import { Grid, InputAdornment, TextField } from '@material-ui/core'
import { useStyles } from './useStyles'
import { Search_icon } from '@src/components/elements/icons'


export const LegalComponent: FC<any> = ({ docs }) => {
    const classes = useStyles()
    return (
        <Grid item xs={9} className={classes.root}>
            <TextField
                className={classes.searchInput}
                id="input-with-icon-textfield"
                fullWidth
                InputProps={{
                    startAdornment: (
                        <InputAdornment position="start">
                            <Search_icon />
                        </InputAdornment>
                    ),
                }}
                variant="outlined"
                placeholder="Поиск"
            />
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
