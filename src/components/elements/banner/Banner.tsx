import {FC} from 'react';
import {useStyles} from './useStyles';
import {Paper, Typography, useMediaQuery, useScrollTrigger, useTheme} from '@material-ui/core';

type BannerPropsType = {
    height?: string,
    threshold?: number
}

export const Banner: FC<BannerPropsType> = ({height, threshold}) => {
    const isXlUp = useMediaQuery(useTheme().breakpoints.up('xl'));
    const trigger = useScrollTrigger({disableHysteresis: true, threshold});
    const isScrollBreak = threshold ? trigger : null;

    const classes = useStyles({isScrollBreak, isXlUp});
    return (
        <div className={classes.root}>
            <Paper style={{height: height}} elevation={0}>
                <Typography variant="h5" color="initial">
                    Рекламный блок
                </Typography>
            </Paper>
        </div>
    );
};
