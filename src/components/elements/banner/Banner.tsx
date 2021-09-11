import {FC} from 'react';
import Link from "next/link";
import {useMediaQuery, useScrollTrigger, useTheme} from '@material-ui/core';
import {useStyles} from './useStyles';

type BannerPropsType = {
    img: string,
    link: string,
    height?: string,
    threshold?: number
}

export const Banner: FC<BannerPropsType> = (props) => {
    const {
        img,
        link,
        height,
        threshold
    } = props;

    const isXlUp = useMediaQuery(useTheme().breakpoints.up('xl'));
    const trigger = useScrollTrigger({disableHysteresis: true, threshold});
    const isScrollBreak = threshold ? trigger : null;

    const classes = useStyles({isScrollBreak, isXlUp, img});
    return (
        <Link href={link}>
            <a target='_blank'>
                <div className={classes.root}/>
            </a>
        </Link>
    );
};
