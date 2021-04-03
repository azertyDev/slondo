import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {defaultSEOText} from "@src/common_data/seo_content";
import {useStyles} from './useStyles';


export const SEOTextComponent: FC<{ text?: string }> = (props) => {
    const {text = defaultSEOText} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='subtitle2'>
                {text}
            </Typography>
        </div>
    );
};
