import React from 'react';

// styles
import {useStyles} from './useStyles';

export const FavoriteComponent = (props) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <div>Favorite</div>
        </div>
    )
}
