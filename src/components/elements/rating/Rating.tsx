import {ChangeEvent, FC} from 'react';
import {Box, Hidden, Typography} from '@material-ui/core';
import CustomRating from '@material-ui/lab/Rating';
// styles
import {useStyles} from './useStyles';

type RatingPropsType = {
    card?: string,
    readOnly?: boolean,
    className?,
    ratingValue?: number,
    ratingCount?: number,
    name?: string,
    onChangeRating?: (event: ChangeEvent<any>, value: number | null) => void,
};

export const Rating: FC<RatingPropsType> = (props) => {
    const {
        card,
        name,
        readOnly,
        className,
        ratingValue,
        ratingCount,
        onChangeRating
    } = props;
    const classes = useStyles();
    return (
        <div className={`${classes.root} ${className}`}>
            <div>
                <CustomRating
                    name={name}
                    readOnly={readOnly ?? true}
                    value={Math.round(ratingValue)}
                    precision={1}
                    onChange={onChangeRating}
                />
                {ratingValue && (
                    <Box mr={1}>
                        <Typography variant="subtitle1">
                            {ratingValue}
                        </Typography>
                    </Box>
                )}
            </div>
            <Hidden mdDown>
                {card && (
                    <div>
                        <Typography variant="subtitle1">{`(${ratingCount} оценок)`}</Typography>
                    </div>
                )}
            </Hidden>
        </div>
    );
};

