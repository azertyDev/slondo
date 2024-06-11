import { Hidden, Typography } from '@material-ui/core';
import CustomRating from '@material-ui/lab/Rating';
import { useTranslation } from "next-i18next";
import { ChangeEvent, FC } from 'react';
import { useStyles } from './useStyles';

type RatingPropsType = {
    readOnly?: boolean,
    className?,
    ratingValue?: number,
    ratingCount?: number,
    name?: string,
    onChangeRating?: (event: ChangeEvent<any>, value: number | null) => void,
};

export const Rating: FC<RatingPropsType> = (props) => {
    const {
        name,
        readOnly,
        className,
        ratingValue,
        ratingCount,
        onChangeRating
    } = props;

    const {t} = useTranslation('cabinet');

    const classes = useStyles();
    return (
        <div className={`${classes.root} ${className ?? ''}`}>
            <div className='rating'>
                <CustomRating
                    name={name}
                    precision={1}
                    readOnly={readOnly}
                    onChange={onChangeRating}
                    value={Math.round(ratingValue)}
                />
                {ratingValue && (
                    <Typography variant="subtitle1" component='p'>
                        {ratingValue}
                    </Typography>
                )}
            </div>
            {!!ratingCount && ratingCount !== 0 && (
                <Hidden mdDown>
                    <div>
                        <Typography
                            component='p'
                            variant="subtitle1"
                            className='ratingCount'
                        >
                            {t('ratings_count', {count: ratingCount})}
                        </Typography>
                    </div>
                </Hidden>
            )}
        </div>
    );
};

