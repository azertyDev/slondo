import React, {FC} from 'react';
import {Typography} from '@material-ui/core';
import {defaultSEOContent} from "@src/common_data/seo_content";
import {useRouter} from "next/router";
import {useStyles} from './useStyles';


export const SEOTextComponent: FC<{ text?: string }> = (props) => {
    const {locale} = useRouter();
    const {text = defaultSEOContent[locale].text} = props;

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant='subtitle2'>
                {text}
            </Typography>
        </div>
    );
};
