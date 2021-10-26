import {FC} from 'react';
import Link from "next/link";
import {useMediaQuery, useScrollTrigger, useTheme} from '@material-ui/core';
import {useStyles} from './useStyles';

type BannerPropsType = {
    ads,
    threshold?: number
}

export const Banner: FC<BannerPropsType> = (props) => {
    const {
        ads,
        threshold
    } = props;

    const {image, url} = ads;

    const isXlUp = useMediaQuery(useTheme().breakpoints.up('xl'));
    const trigger = useScrollTrigger({disableHysteresis: true, threshold});
    const isScrollBreak = threshold ? trigger : null;

    const classes = useStyles({isScrollBreak, isXlUp, image});
    return (
        <Link href={url}>
            <a target='_blank'>
                <div className={classes.root}/>
            </a>
        </Link>
    );
};
