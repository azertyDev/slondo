import {FC, useEffect, useState} from 'react';
import {Typography, useMediaQuery, useTheme} from '@material-ui/core';
import {useStyles} from './useStyles';
import {ReadMore} from '@src/components/elements/read_more/readMore';
import {useTranslation} from 'next-i18next';


export const SEOTextComponent: FC<{text: string}> = ({text}) => {

    const isMdDown = useMediaQuery(useTheme().breakpoints.down('md'));

    const [descHeight, setDescHeight] = useState(0);

    useEffect(() => {
        setDescHeight(document.getElementById('seo-content').clientHeight);
    }, []);

    const classes = useStyles();
    return (
        <div className={classes.root}>
            <ReadMore descHeight={descHeight} heightLimit={isMdDown ? 50 : 85}>
                <Typography variant='subtitle2' id="seo-content">
                    {text}
                </Typography>
            </ReadMore>
        </div>
    );
};